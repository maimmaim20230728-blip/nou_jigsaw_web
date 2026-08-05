'use strict';
/* =========================================================
   起動スモークテスト（疑似DOM） ― node _smoke.js
   ・実在idだけ返す軽量DOMで本体JSを起動し、参照切れ／例外を検出する。
   ・仕様書D-3のシナリオを実イベント経由で通す:
     起動→設定3回開閉→音トグル1回→サンプル選択→プレビュー表示→
     閉じてパズル開始→ドラッグ1手→2本目ポインタ注入(A-2回帰)→完成→
     結果に作品名→ホーム。
   ・precache/コピーリストには入れない開発用スクリプト。
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = __dirname;

/* ---------- 軽量DOM ---------- */
const VOID = new Set(['img','input','br','meta','link','hr','source','area','base','col','embed','param','track','wbr']);

function classList(){
  const s = new Set();
  return {
    _s: s,
    add(...c){ c.forEach(x=>x&&s.add(x)); },
    remove(...c){ c.forEach(x=>s.delete(x)); },
    toggle(c,f){ if(f===undefined) f=!s.has(c); if(f) s.add(c); else s.delete(c); return f; },
    contains(c){ return s.has(c); },
  };
}
function styleObj(){
  return { setProperty(k,v){ this[k]=v; }, getPropertyValue(k){ return this[k]; }, removeProperty(k){ delete this[k]; } };
}

function El(tag){
  const el = {
    tagName: String(tag||'div').toUpperCase(),
    children: [], parent: null,
    attrs: {}, dataset: {}, style: styleObj(),
    _listeners: {}, _html: '', _className: '',
    textContent: '', id: '', src: '', alt: '', hidden: false,
    value: '', checked: false,
  };
  el.classList = classList();
  el.appendChild = function(c){ c.parent = el; el.children.push(c); return c; };
  el.insertBefore = function(c){ c.parent = el; el.children.unshift(c); return c; };
  el.remove = function(){ if(el.parent){ const i = el.parent.children.indexOf(el); if(i>=0) el.parent.children.splice(i,1); } };
  el.setAttribute = function(k,v){ el.attrs[k]=String(v); if(k==='id') el.id=String(v); };
  el.getAttribute = function(k){ return (k in el.attrs) ? el.attrs[k] : null; };
  el.setPointerCapture = function(){}; el.releasePointerCapture = function(){};
  el.getBoundingClientRect = function(){ return { top:0,left:0,width:100,height:100,bottom:100,right:100 }; };
  el.addEventListener = function(t,fn){ (el._listeners[t]||(el._listeners[t]=[])).push(fn); };
  el.removeEventListener = function(t,fn){ const a=el._listeners[t]; if(a){ const i=a.indexOf(fn); if(i>=0) a.splice(i,1); } };
  el._emit = function(t,ev){ ev=ev||{}; if(ev.target===undefined) ev.target=el; (el._listeners[t]||[]).slice().forEach(fn=>fn(ev)); };
  el.closest = function(sel){ let e=el; while(e){ if(matchesToken(e, sel)) return e; e=e.parent; } return null; };
  el.querySelector = function(sel){ return queryAll(el, sel)[0] || null; };
  el.querySelectorAll = function(sel){ return queryAll(el, sel); };
  Object.defineProperty(el,'className',{ get(){ return el._className; },
    set(v){ el._className=String(v); el.classList._s.clear(); String(v).split(/\s+/).filter(Boolean).forEach(c=>el.classList._s.add(c)); } });
  Object.defineProperty(el,'innerHTML',{ get(){ return el._html; },
    set(v){ el._html=String(v); el.children=[]; parseInto(String(v), el); } });
  return el;
}

function applyAttrs(el, attrStr){
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*"([^"]*)")?/g;
  let m;
  while((m = re.exec(attrStr))){
    const name = m[1]; if(!name) continue;
    const val = m[2] !== undefined ? m[2] : '';
    el.attrs[name] = val;
    if(name === 'id') el.id = val;
    else if(name === 'class'){ el._className = val; val.split(/\s+/).filter(Boolean).forEach(c=>el.classList._s.add(c)); }
    else if(name === 'hidden') el.hidden = true;
    else if(name === 'src') el.src = val;
    else if(name === 'alt') el.alt = val;
    else if(name.startsWith('data-')){
      const key = name.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase());
      el.dataset[key] = val;
    }
  }
}

/* HTML断片をparentの子として構築（テキストノードは無視・要素だけ） */
function parseInto(html, parent){
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  const re = /<(\/?)([a-zA-Z0-9]+)((?:[^">]|"[^"]*")*)>/g;
  const stack = [parent];
  let m;
  while((m = re.exec(html))){
    const closing = m[1] === '/';
    const tag = m[2].toLowerCase();
    const attrStr = m[3] || '';
    if(closing){
      for(let i=stack.length-1;i>=1;i--){ if(stack[i].tagName===tag.toUpperCase()){ stack.length=i; break; } }
      continue;
    }
    const selfClose = /\/\s*$/.test(attrStr) || VOID.has(tag);
    const el = El(tag);
    applyAttrs(el, attrStr);
    const p = stack[stack.length-1];
    p.children.push(el); el.parent = p;
    if(!selfClose) stack.push(el);
  }
  return parent;
}

function descendants(el){
  const out = [];
  (function walk(n){ for(const c of n.children){ out.push(c); walk(c); } })(el);
  return out;
}
function matchesToken(el, token){
  let rest = token;
  const tagM = /^([a-zA-Z0-9]+)/.exec(rest);
  if(tagM){ if(el.tagName !== tagM[1].toUpperCase()) return false; rest = rest.slice(tagM[1].length); }
  const partRe = /([#.][-a-zA-Z0-9_]+)|(\[[^\]]+\])/g;
  let p;
  while((p = partRe.exec(rest))){
    if(p[1]){
      if(p[1][0]==='#'){ if(el.id !== p[1].slice(1)) return false; }
      else { if(!el.classList.contains(p[1].slice(1))) return false; }
    } else if(p[2]){
      const inner = p[2].slice(1,-1);
      const am = /^([-a-zA-Z0-9_:]+)(?:="([^"]*)")?$/.exec(inner);
      if(!am) return false;
      const an = am[1];
      const dkey = an.startsWith('data-') ? an.slice(5).replace(/-([a-z])/g,(_,c)=>c.toUpperCase()) : null;
      let actual = (an in el.attrs) ? el.attrs[an] : (dkey && (dkey in el.dataset) ? el.dataset[dkey] : undefined);
      if(am[2] !== undefined){ if(String(actual) !== am[2]) return false; }
      else { if(actual === undefined) return false; }
    }
  }
  return true;
}
function queryAll(root, sel){
  const out = [];
  for(const g of String(sel).split(',').map(s=>s.trim()).filter(Boolean)){
    const tokens = g.split(/\s+/).filter(Boolean);
    let current = [root];
    for(const tok of tokens){
      const next = [];
      for(const c of current) for(const d of descendants(c)) if(matchesToken(d, tok)) next.push(d);
      current = next;
    }
    for(const e of current) if(!out.includes(e)) out.push(e);
  }
  return out;
}

/* ---------- document / window ---------- */
const docRoot = El('#doc');
parseInto(fs.readFileSync(path.join(ROOT,'index.html'),'utf8'), docRoot);
let bodyEl = descendants(docRoot).find(e=>e.tagName==='BODY') || docRoot;

const documentStub = {
  documentElement: Object.assign(El('html'), { lang:'' }),
  body: bodyEl,
  createElement: (t)=>El(t),
  getElementById(id){ return descendants(docRoot).find(e=>e.id===id) || null; },
  querySelector(sel){ return queryAll(docRoot, sel)[0] || null; },
  querySelectorAll(sel){ return queryAll(docRoot, sel); },
  _listeners:{}, _epTarget:null,
  addEventListener(t,fn){ (this._listeners[t]||(this._listeners[t]=[])).push(fn); },
  removeEventListener(t,fn){ const a=this._listeners[t]; if(a){ const i=a.indexOf(fn); if(i>=0) a.splice(i,1);} },
  _emit(t,ev){ ev=ev||{}; (this._listeners[t]||[]).slice().forEach(fn=>fn(ev)); },
  elementFromPoint(){ return documentStub._epTarget; },
};

/* setTimeoutは手動フラッシュ式のキュー（1.8秒の完成演出→結果遷移を任意のタイミングで進める＝
   「完成直後に離脱」と「待って結果画面」を撃ち分けられる。clearTimeoutは実際にキューから外す） */
const store = {};
let _tid = 0; const _timers = new Map();
function flushTimeouts(){ const fns = [..._timers.values()]; _timers.clear(); fns.forEach(fn=>{ try{ fn(); }catch(_){} }); }
const sandbox = {
  console,
  document: documentStub,
  navigator: {},
  localStorage: {
    getItem:(k)=> (k in store ? store[k] : null),
    setItem:(k,v)=>{ store[k]=String(v); },
    removeItem:(k)=>{ delete store[k]; },
  },
  location: { hostname:'smoke.test', protocol:'https:', origin:'https://smoke.test' },
  addEventListener(){}, removeEventListener(){},
  scrollTo(){},
  setInterval:()=>1, clearInterval(){},
  setTimeout:(fn)=>{ const id=++_tid; if(typeof fn==='function') _timers.set(id, fn); return id; },
  clearTimeout:(id)=>{ _timers.delete(id); },
  URL: function(u){ return { origin:'https://smoke.test' }; },
  Date, Math, Array, Object, String, Number, JSON, RegExp,
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;
sandbox.self = sandbox;

/* 表示言語を ja に固定（プレビュー案内・作品名の期待値をjaで検証するため） */
store['soyogi.jigsaw.lang'] = 'ja';

const bundle = ['data/config.js','data/lang.js','audio.js','store.js','tap.js','puzzle.js','app.js']
  .map(f=>fs.readFileSync(path.join(ROOT,f),'utf8')).join('\n')
  + '\n;globalThis.__X = { LANG:LANG, SAMPLES:SAMPLES, LEVELS:LEVELS, PuzzleGame:PuzzleGame, Store:Store, init:init };';

vm.createContext(sandbox);
try{
  vm.runInContext(bundle, sandbox, { filename:'bundle.js' });
}catch(e){
  console.log('SMOKE NG (起動時):'); console.log(e.stack.split('\n').slice(0,6).join('\n')); process.exit(1);
}
const X = sandbox.__X;
const LANG = X.LANG, PG = X.PuzzleGame;

/* ---------- テストヘルパ ---------- */
let step = 'init';
function assert(cond,msg){ if(!cond) throw new Error('[' + step + '] 失敗: ' + msg); }
function byId(id){ return documentStub.getElementById(id); }
function active(id){ return byId(id).classList.contains('active'); }
function tap(el,x,y){
  x=x||10; y=y||10;
  el._emit('pointerdown',{ isPrimary:true, pointerId:1, clientX:x, clientY:y, preventDefault(){} });
  el._emit('pointerup',  { isPrimary:true, pointerId:1, clientX:x, clientY:y, preventDefault(){} });
}
function firstIn(rootId, sel){ return queryAll(byId(rootId), sel)[0]; }
function recordCount(){
  let all; try{ all = JSON.parse(store['soyogi.jigsaw.records']||'{}'); }catch(_){ all = {}; }
  let n = 0; Object.keys(all).forEach(k=>{ const r=all[k]; if(r && r.sessions) n += r.sessions.length; });
  return n;
}
function doneCount(){
  let a; try{ a = JSON.parse(store['soyogi.jigsaw.doneSamples']||'[]'); }catch(_){ a = []; }
  return Array.isArray(a) ? a.length : 0;
}
function solveWithHints(untilCountReaches){
  for(let i=0;i<12 && recordCount() < untilCountReaches; i++) PG.hint();
}

try{
  step = '起動'; X.init(); assert(active('home'), 'ホームがactiveでない');

  step = '設定3回開閉';
  for(let i=0;i<3;i++){
    tap(byId('btnGear')); assert(active('settings'), '設定が開かない(周回'+(i+1)+')');
    tap(firstIn('settings','[data-home]')); assert(active('home'), 'ホームに戻れない(周回'+(i+1)+')');
  }

  step = '音トグル1回';
  tap(byId('btnGear')); assert(active('settings'), '設定が開かない(音トグル前)');
  assert(byId('soundBtn').textContent === '🔊', '初期の音アイコンが🔊でない: ' + byId('soundBtn').textContent);
  tap(byId('soundBtn'));
  assert(byId('soundBtn').textContent === '🔇', '1回タップで🔇にならない(=A-1のbind重複を疑う): ' + byId('soundBtn').textContent);
  tap(firstIn('settings','[data-home]'));

  step = 'サンプル選択';
  tap(byId('btnStart')); assert(active('level'), '難易度画面に進めない');
  tap(firstIn('level','.lv-btn')); assert(active('source'), '入手先画面に進めない');
  tap(byId('btnSample')); assert(active('samples'), 'サンプル一覧に進めない');
  assert(/^✓ 0 \/ 36/.test(byId('sampleProgress').textContent), '進捗表示が「✓ 0 / 36」でない: ' + byId('sampleProgress').textContent);
  const firstSample = firstIn('sampleGrid','.sample-btn');
  assert(firstSample && firstSample.dataset.src, 'サンプルボタンが生成されていない');
  tap(firstSample);

  step = 'プレビュー表示';
  assert(byId('refZoom').hidden === false, 'プレビュー(refZoom)が開かない');
  assert(byId('refZoomLabel').hidden === false, '案内ラベルが表示されない');
  assert(byId('refZoomLabel').textContent === LANG.ja.ui.makeThis, '案内ラベルの文言が一致しない: ' + byId('refZoomLabel').textContent);

  step = 'プレビューを閉じて開始';
  byId('refZoom')._emit('pointerup', {});
  assert(byId('refZoom').hidden === true, 'プレビューが閉じない');
  assert(active('game'), 'ゲーム画面に入れない');
  const board = byId('pzBoard'); assert(board, '盤面(pzBoard)が無い');
  const cells = queryAll(board, '.pcell');
  assert(cells.length === 4, '初級のピース数が4でない: ' + cells.length);

  step = 'ドラッグ1手＋2本目ポインタ注入(A-2回帰)';
  const cellA = cells[0], cellB = cells[1];
  documentStub._epTarget = cellB;
  cellA._emit('pointerdown', { isPrimary:true, pointerId:1, clientX:5, clientY:5, preventDefault(){} });
  assert(queryAll(board,'.pghost').length === 1, 'ドラッグ開始でゴーストが1つでない');
  documentStub._emit('pointermove', { pointerId:1, clientX:55, clientY:5 });
  // 2本目の指（非primary）と、既にドラッグ中の別primary downを注入→どちらも無視されるべき
  cellB._emit('pointerdown', { isPrimary:false, pointerId:2, clientX:55, clientY:5, preventDefault(){} });
  cellA._emit('pointerdown', { isPrimary:true,  pointerId:3, clientX:5,  clientY:5, preventDefault(){} });
  assert(queryAll(board,'.pghost').length === 1, '2本目の指でゴーストが増えた(=混線)');
  documentStub._emit('pointermove', { pointerId:2, clientX:5, clientY:55 });
  documentStub._emit('pointerup',   { pointerId:2, clientX:5, clientY:55 });
  assert(byId('pzMoves').textContent === '' || Number(byId('pzMoves').textContent) === 0, '別ポインタのupで手数が動いた(=混線)');
  // 本来のドラッグを離してスワップ成立
  documentStub._emit('pointerup', { pointerId:1, clientX:55, clientY:5 });
  assert(queryAll(board,'.pghost').length === 0, 'ドラッグ終了でゴーストが残っている');
  assert(Number(byId('pzMoves').textContent) === 1, '1手ドラッグ後の手数が1でない: ' + byId('pzMoves').textContent);

  step = '完成→即ホーム(1.8秒以内離脱でも記録保持)=A-3回帰';
  solveWithHints(1);                       // 完成→この瞬間にcommitで記録確定（doneTimerは保留のまま）
  assert(recordCount() === 1, '完成が即記録されていない: ' + recordCount());
  assert(doneCount() === 1 && X.Store.isDone(X.SAMPLES[0].id), '図鑑✓（markDone）が付いていない');
  assert(!active('result'), '演出中(遷移前)なのに結果画面へ出ている');
  tap(byId('btnQuit'));                     // 完成演出の途中で「ホームにもどる」離脱
  assert(active('home'), '離脱でホームに戻れない');
  flushTimeouts();                          // 1.8秒経過をシミュレート
  assert(active('home'), '離脱後に結果画面へ引き戻された(=旧回帰)');
  assert(recordCount() === 1, '離脱で記録が消えた/二重化した: ' + recordCount());

  step = '完成→待って結果画面→記録1件(二重でない)';
  const before = recordCount();
  tap(byId('btnStart')); tap(firstIn('level','.lv-btn')); tap(byId('btnSample'));
  tap(firstIn('sampleGrid','.sample-btn'));  // プレビュー表示
  byId('refZoom')._emit('pointerup', {});    // 閉じて本編開始
  solveWithHints(before + 1);                // 2回目完成→commitで+1件（doneTimerは保留）
  assert(recordCount() === before + 1, '2回目完成の記録が+1でない(二重?): ' + recordCount());
  assert(!active('result'), '遷移前なのに結果画面が出ている');
  flushTimeouts();                           // 1.8秒経過→結果画面へ遷移
  assert(active('result'), '完成後に結果画面へ遷移しない');
  const rb = byId('resultBody').innerHTML;
  assert(rb.indexOf('result-art') !== -1, '結果に作品名ブロックが無い');
  assert(rb.indexOf(LANG.ja.art.sunflowers) !== -1, '結果に作品名(ひまわり)が出ていない');
  assert(recordCount() === before + 1, '結果表示で記録が二重化した: ' + recordCount());

  step = 'ホームへ';
  tap(firstIn('result','[data-home]'));
  assert(active('home'), '結果からホームに戻れない');

  /* ---- [セーフエリア] 上下のバーに隠れない ----
     targetSdk36(Android15+)はエッジtoエッジ強制で、画面がステータスバー(上・約44px)と
     ナビゲーションバー(下・約48px)の下まで描かれる。CSSの固定値のままだと見本拡大の✕や
     各画面の「ホームにもどる」がバーの下に潜って押せなくなるため、静的に検査する。 */
  step = 'セーフエリア';
  const cssTxt = fs.readFileSync(path.join(ROOT,'style.css'),'utf8').replace(/\s+/g,'');
  const SAFE = [
    ['画面共通の上余白に env(safe-area-inset-top)',
      /\.screen\{[^}]*padding:calc\(24px\+env\(safe-area-inset-top,0px\)\)/],
    ['画面共通の下余白に env(safe-area-inset-bottom)（ホームにもどるが隠れない）',
      /\.screen\{[^}]*calc\(24px\+env\(safe-area-inset-bottom,0px\)\)/],
    ['画面共通の左右余白が max(20px, env(safe-area-inset-left/right))',
      /\.screen\{[^}]*max\(20px,env\(safe-area-inset-right,0px\)\)[^}]*max\(20px,env\(safe-area-inset-left,0px\)\)/],
    ['設定ボタン(歯車)の右端が max(10px, env(safe-area-inset-right))',
      /\.gear\{[^}]*right:max\(10px,env\(safe-area-inset-right,0px\)\)/],
    ['サンプル一覧の上余白に env(safe-area-inset-top)',
      /#samples\{[^}]*padding-top:calc\(28px\+env\(safe-area-inset-top,0px\)\)/],
    ['パズル画面の上余白に env(safe-area-inset-top)',
      /#game\{[^}]*padding-top:calc\(20px\+env\(safe-area-inset-top,0px\)\)/],
    ['設定画面の上余白に env(safe-area-inset-top)',
      /\.settings\{[^}]*padding-top:calc\(40px\+env\(safe-area-inset-top,0px\)\)/],
    ['記録画面はpadding一括指定なので上下にセーフエリアを足し直している',
      /\.records\{[^}]*padding:calc\(16px\+env\(safe-area-inset-top,0px\)\)[^}]*calc\(24px\+env\(safe-area-inset-bottom,0px\)\)/],
    ['見本拡大の余白にセーフエリア',
      /\.ref-zoom\{[^}]*padding:calc\(24px\+env\(safe-area-inset-top,0px\)\)/],
    ['見本拡大の✕がステータスバーに潜らない',
      /\.ref-zoom-close\{[^}]*top:calc\(16px\+env\(safe-area-inset-top,0px\)\)/],
    ['見本拡大の✕の右端が max(18px, env(safe-area-inset-right))',
      /\.ref-zoom-close\{[^}]*right:max\(18px,env\(safe-area-inset-right,0px\)\)/],
    ['見本拡大の案内ラベルがステータスバーに潜らない',
      /\.ref-zoom-label\{[^}]*top:calc\(20px\+env\(safe-area-inset-top,0px\)\)/],
  ];
  for(const [name, re] of SAFE) assert(re.test(cssTxt), name);

  /* 追加ガード：position:fixed の要素に、素の小さい top/bottom が残っていないか（新規追加の見落とし防止）。
     inset:0 の全面オーバーレイ(.ref-zoom/.confetti)は意図的なのでtop/bottomの明示指定だけを見る。 */
  let leaks = [];
  cssTxt.split('}').forEach(rule=>{
    if(!/position:fixed/.test(rule)) return;
    const sel = (rule.split('{')[0] || '').slice(-40);
    const mt = /(?:^|;|\{)top:(-?\d+)px/.exec(rule);
    if(mt && Number(mt[1]) < 44) leaks.push(sel + ' top:' + mt[1] + 'px');
    const mb = /(?:^|;|\{)bottom:(-?\d+)px/.exec(rule);
    if(mb && Number(mb[1]) < 48) leaks.push(sel + ' bottom:' + mb[1] + 'px');
  });
  assert(leaks.length === 0, 'position:fixed にセーフエリア未対応の固定値: ' + leaks.join(' / '));

  console.log('SMOKE OK: 全シナリオを例外なく通過（設定開閉/音トグル/プレビュー/A-2回帰/完成即離脱で記録保持/待って結果は記録1件/作品名/ホーム/セーフエリア' + SAFE.length + '件）');
}catch(e){
  console.log('SMOKE NG:'); console.log(e.message);
  console.log(e.stack.split('\n').slice(1,4).join('\n'));
  process.exit(1);
}
