/* =========================================================
   脳活ジグソーパズル ― 本体（画面遷移・多言語・写真取込・設定・記録）
   読み込み順: config.js → lang.js → audio.js → store.js
              → puzzle.js → app.js（このファイル）
   ========================================================= */

/* ===== 言語の決定（保存 > 端末の言語 > 英語） ===== */
function detectLang(){
  const saved = Store.getLang();
  if(saved && LANG[saved]) return saved;
  const nav = (navigator.language || 'en');
  if(LANG[nav]) return nav;
  if(/^zh/i.test(nav)) return /tw|hk|hant/i.test(nav) ? 'zh-TW' : 'zh';
  const base = nav.split('-')[0];
  return LANG[base] ? base : 'en';
}
let CUR  = detectLang();
let I18N = LANG[CUR];
function t(k){ return (I18N.ui[k] || k); }

function applyI18n(){
  I18N = LANG[CUR];
  document.documentElement.lang = CUR;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
}

/* ===== 画面切り替え ===== */
function show(id){
  cancelPick();   // 写真の準備中に画面が変わったら、その準備の続きは捨てる（下の pickFile）
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  Bgm.setMood(id === 'game' ? 'game' : id === 'records' ? 'history' : 'title');  // パズル=軽快/記録=振り返り/その他=ポップ
}

/* ===== 今回のプレイ状態 ===== */
let curLevel = null;      // LEVELS の要素
let curImg   = null;      // 正方形化済みの dataURL / サンプルURL

/* ===== 写真の取込（正方形に切り抜いて dataURL 化） =====
   ・EXIFの向きは createImageBitmap({imageOrientation:'from-image'}) で明示適用。
     非対応/失敗の端末では従来の Image 方式にフォールバック（既定でも向きは自動適用）
   ・正方形中央切り抜き・大きすぎる写真は1024pxに縮小＝メモリと描画の負荷を抑える  */
function drawSquare(source, w, h){
  const side = Math.min(w, h);
  const sx = (w - side) / 2;
  const sy = (h - side) / 2;
  const out = Math.min(side, 1024);
  const cv = document.createElement('canvas');
  cv.width = out; cv.height = out;
  cv.getContext('2d').drawImage(source, sx, sy, side, side, 0, 0, out, out);
  return cv.toDataURL('image/jpeg', 0.85);
}
/* 従来の Image 方式（createImageBitmap 非対応/失敗時のフォールバック） */
function fileToSquareImg(file){
  return new Promise((resolve, reject)=>{
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = ()=>{
      try{
        const dataUrl = drawSquare(img, img.naturalWidth, img.naturalHeight);
        URL.revokeObjectURL(url);
        resolve(dataUrl);
      }catch(e){ URL.revokeObjectURL(url); reject(e); }
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); reject(new Error('load error')); };
    img.src = url;
  });
}
function fileToSquare(file){
  if(window.createImageBitmap){
    return createImageBitmap(file, { imageOrientation:'from-image' })
      .then(bmp=>{
        try{ return drawSquare(bmp, bmp.width, bmp.height); }
        finally{ if(bmp.close) bmp.close(); }
      })
      .catch(()=> fileToSquareImg(file));   // オプション非対応や復号失敗は従来方式へ
  }
  return fileToSquareImg(file);
}

/* 写真の準備の番号（2026-09-30）: 準備のあいだに「ホームにもどる」や戻るボタンで画面が変わると（show）、
   あとから準備ができても完成図もパズルも出さない（前は ホームの上に完成図が出て、さわるとパズルが始まっていた）。
   次の写真を えらんだときも、前の準備の続きは捨てる */
let pickTicket = 0;
function cancelPick(){
  pickTicket++;
  const ld = document.getElementById('srcLoading');
  if(ld && ld.textContent === t('preparingPhoto')) ld.textContent = '';   // 「じゅんび ちゅう」は消す（まちがいの文は今までどおり残す）
}

async function pickFile(input){
  const file = input.files && input.files[0];
  input.value = '';                       // 同じファイルの再選択も拾えるように
  if(!file) return;
  const my = ++pickTicket;
  const since = Date.now();               // この準備が始まった時刻（これより前にできたカメラの写真だけを消す・下）
  const loading = document.getElementById('srcLoading');
  loading.textContent = t('preparingPhoto');
  let img = null;
  try{ img = await fileToSquare(file); }catch(e){ img = null; }
  clearCameraFiles(since);                // 絵柄(dataURL)ができたあとで、カメラの写真を消す（Play版だけ・下）
  if(my !== pickTicket) return;           // 準備のあいだに画面が変わった＝捨てる
  if(!img){
    loading.textContent = t('photoError');   // 次のファイル選択開始時に上書きされる
    Sound.ng();
    return;
  }
  curImg = img;
  loading.textContent = '';
  startPuzzle();
}

/* ===== カメラの写真を消す（Play版だけ・2026-09-30） =====
   Play版で「カメラで とる」と、Capacitor がアプリ専用の場所（Android/data/<パッケージ>/files/Pictures）に
   JPEG_<日時>_<数字>.jpg を作り、そのまま残していた（撮るのをやめたときの空のファイルも）。
   HP のプライバシーポリシー「パズルを終えると画像はアプリ内に残りません」のとおりにするため、
   写真を絵柄（dataURL）にしたあと（上の pickFile）と、起動したとき（前の版の残り）に消す。
   ・消すのは Capacitor が撮った写真に付ける名前（JPEG_….jpg）だけ。アルバムの写真（端末の写真）には触らない
   ・@capacitor/filesystem の EXTERNAL（= getExternalFilesDir）。アプリ専用の場所なので権限は要らない（増やさない）
   ・Web版（ブラウザ）は何もしない
   ・since（ミリ秒）を渡したときは、それより前にできた写真だけを消す: 準備のあいだに もう一度「カメラで とる」を押すと、
     Capacitor が次の写真の入れ物（空の JPEG_….jpg）を先に作る。それまで消すと、次に撮った写真が取り込めないことがある。
     残ったものは次の取り込みか次の起動で消える */
function nativeFs(){
  try{
    const c = window.Capacitor;
    if(typeof c.isPluginAvailable === 'function' && !c.isPluginAvailable('Filesystem')) return null;
    const p = c.Plugins && c.Plugins.Filesystem;
    return (p && typeof p.readdir === 'function' && typeof p.deleteFile === 'function') ? p : null;
  }catch(e){ return null; }
}
function clearCameraFiles(since){
  if(!isNativeApp()) return Promise.resolve(0);
  const fsx = nativeFs();
  if(!fsx) return Promise.resolve(0);
  return Promise.resolve()
    .then(()=> fsx.readdir({ path:'Pictures', directory:'EXTERNAL' }))
    .then(r=>{
      const names = ((r && r.files) || [])
        .filter(f=> !(since && f && typeof f === 'object' && typeof f.mtime === 'number' && f.mtime >= since))   // 準備が始まったあとにできた＝次の写真の入れ物
        .map(f=> typeof f === 'string' ? f : ((f && f.name) || ''))
        .filter(n=> /^JPEG_.*\.jpg$/i.test(n));
      return Promise.all(names.map(n=> Promise.resolve()
        .then(()=> fsx.deleteFile({ path:'Pictures/' + n, directory:'EXTERNAL' }))
        .then(()=> 1, ()=> 0)));
    })
    .then(a=> a.reduce((s, x)=> s + x, 0))
    .catch(()=> 0);   // フォルダが無い（まだ撮っていない）などは何もしない
}

/* ===== サンプル（名画）選択（タイトル・作者は現在の言語で表示） ===== */
function renderSamples(){
  const grid = document.getElementById('sampleGrid');
  const art = I18N.art || LANG.en.art;
  // コレクション進捗「✓ N / 36」（記号＋数字のみ・翻訳不要）
  const done = SAMPLES.filter(s=>Store.isDone(s.id)).length;
  const prog = document.getElementById('sampleProgress');
  if(prog) prog.textContent = '✓ ' + done + ' / ' + SAMPLES.length;
  grid.innerHTML = SAMPLES.map(s=>
    '<button class="sample-btn" data-src="'+s.src+'">'+
      (Store.isDone(s.id) ? '<span class="sample-done" aria-hidden="true">✓</span>' : '') +
      '<img src="'+s.src+'" alt="'+(art[s.id]||'')+'" loading="lazy" decoding="async">'+
      '<span class="sample-t">'+(art[s.id]||'')+'</span>'+
      '<span class="sample-a">'+(art[s.artist]||'')+'</span>'+
    '</button>'
  ).join('');
  grid.querySelectorAll('.sample-btn').forEach(b=>{
    Tap.bind(b, ()=>{ curImg = b.dataset.src; startPuzzle(); });
  });
}

/* ===== パズル開始・完成 ===== */
let pendingStart = false;   // プレビュー表示中＝閉じたらパズルを始める合図

/* B-1: まず完成図を全画面プレビュー（refZoomを再利用）。閉じてから本編開始＝タイマーはプレビュー後 */
function startPuzzle(){
  if(!curLevel || !curImg) return;
  pendingStart = true;
  const label = document.getElementById('refZoomLabel');
  if(label){ label.textContent = t('makeThis'); label.hidden = false; }   // プレビュー時のみ案内ラベルを出す
  document.getElementById('refZoomImg').src = curImg;
  document.getElementById('refZoom').hidden = false;
}

let pendingResult = null;   // 完成コミット時に確定した結果（1.8秒後の結果画面表示で使う）

/* プレビューを閉じた後に呼ばれる本編開始 */
function beginGame(){
  pendingResult = null;
  show('game');
  PuzzleGame.start(document.querySelector('#game .g-body'), {
    img: curImg, n: curLevel.n,
    onCommit: (stats)=> commitFinish(stats),   // 完成検出の瞬間＝記録の確定
    onDone:   ()=> showResult(),               // 1.8秒後＝結果画面への遷移のみ
  });
  // 見本タップで拡大（.pz-refはstart()が毎回作り直すので、都度bindし直す）
  const ref = document.querySelector('#game .pz-ref');
  if(ref) Tap.bind(ref, ()=> openRefZoom(ref.src));
}

/* 完成の確定（記録・図鑑✓・🏆判定）＝完成検出の瞬間に1回だけ。
   演出中(1.8秒)に「ホームにもどる」や✕で離脱しても記録と図鑑✓が残るよう、
   結果画面への遷移(showResult)とは切り離してここで必ず保存する。 */
function commitFinish(stats){
  const sample = SAMPLES.find(s=> s.src === curImg);   // サンプル（名画）を完成したら図鑑に登録
  Store.record({ level:curLevel.id, pieces:curLevel.pieces, timeSec:stats.timeSec, moves:stats.moves,
    sampleId: sample ? sample.id : null });            // 名画のみid保存・写真はnull（後方互換）
  let allDone = false;
  if(sample){
    const before = SAMPLES.filter(s=>Store.isDone(s.id)).length;
    Store.markDone(sample.id);
    const after = SAMPLES.filter(s=>Store.isDone(s.id)).length;
    allDone = (before < SAMPLES.length && after === SAMPLES.length);   // 36/36を今回達成した瞬間だけ
  }
  pendingResult = { stats, sample, allDone };          // 表示は確定済みのこの値を使う
}

/* 1.8秒後の結果画面表示（確定済みの pendingResult を描画するだけ・記録はしない） */
function showResult(){
  if(!pendingResult) return;
  const { stats, sample, allDone } = pendingResult;
  pendingResult = null;
  renderResult(stats, sample, allDone);
  show('result');
}

/* ===== 見本の拡大表示（パズル中に見本をタップ→画面いっぱいに） ===== */
function openRefZoom(src){
  const label = document.getElementById('refZoomLabel');
  if(label){ label.hidden = true; label.textContent = ''; }   // 途中の見本拡大では案内ラベルを出さない
  document.getElementById('refZoomImg').src = src;
  document.getElementById('refZoom').hidden = false;
}
function closeRefZoom(){
  document.getElementById('refZoom').hidden = true;
  document.getElementById('refZoomImg').src = '';
  const label = document.getElementById('refZoomLabel');
  if(label){ label.hidden = true; label.textContent = ''; }
}

/* ===== 結果画面 ===== */
function renderResult(stats, sample, allDone){
  const stars = Store.starsFor(curLevel.id, stats.timeSec);
  const starHtml = Array.from({length:stars}, (_,i)=>
    '<span style="animation-delay:'+(i*0.22)+'s">⭐</span>').join('');
  const m = Math.floor(stats.timeSec/60), s = stats.timeSec%60;
  // B-2: サンプル（名画）のときは写真の下に作品名＋作者を表示（写真パズルは何も出さない）
  const art = I18N.art || LANG.en.art;
  const artHtml = sample
    ? '<div class="result-art"><div class="ra-title">'+(art[sample.id]||'')+'</div>'+
        '<div class="ra-artist">'+(art[sample.artist]||'')+'</div></div>'
    : '';
  const el = document.getElementById('resultBody');
  el.innerHTML =
    '<div class="stars">'+starHtml+'</div>' +
    '<img class="result-photo" src="'+curImg+'" alt="">' +
    artHtml +
    (allDone ? '<div class="result-trophy" aria-hidden="true">🏆</div>' : '') +   // B-3: コレクション完成の控えめな祝い
    '<div class="result-nums">' +
      '<div class="rn"><span class="rn-cap">'+t('timeLabel')+'</span><b>'+m+':'+String(s).padStart(2,'0')+'</b></div>' +
      '<div class="rn"><span class="rn-cap">'+t('movesLabel')+'</span><b>'+stats.moves+'</b></div>' +
    '</div>' +
    '<div class="streak">🔥 '+Store.streak()+'</div>';
  makeConfetti(el, stars>=2);
}

/* 紙吹雪（星2つ以上で盛大に） */
function makeConfetti(parent, big){
  const conf = document.createElement('div'); conf.className = 'confetti';
  const colors = ['#E53935','#1E88E5','#FDD835','#43A047','#8E24AA','#EF6C00'];
  const n = big ? 22 : 10;
  for(let i=0;i<n;i++){
    const p = document.createElement('i');
    p.style.left = (Math.random()*100)+'%';
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = (Math.random()*0.5)+'s';
    conf.appendChild(p);
  }
  parent.appendChild(conf);
  setTimeout(()=>conf.remove(), 3200);
}

/* ===== 設定画面 ===== */
function setScale(s){
  Store.setScale(s);
  document.body.classList.remove('scale-M','scale-L','scale-XL');
  document.body.classList.add('scale-'+s);
}
/* A-1: 静的要素（サイズ/音/BGMボタン）へのTap.bindは init から一度だけ。
   renderSettings を開くたびに bind すると同じ要素にリスナーが積み重なるため分離する。 */
function bindSettingsStatic(){
  document.querySelectorAll('#sizeRow .size-btn').forEach(b=>{
    Tap.bind(b, ()=>{ setScale(b.dataset.s); reflectSettings(); });
  });
  const sb = document.getElementById('soundBtn');
  // 音ON/OFFボタンは{silent:true}＝押下音を鳴らさず、toggle内の「ON化時の確認音」に任せる
  Tap.bind(sb, ()=>{ Sound.toggle(); sb.textContent = Sound.enabled ? '🔊' : '🔇'; }, { silent:true });
  const mb = document.getElementById('bgmBtn');
  Tap.bind(mb, ()=>{ const on = Bgm.toggle(); mb.textContent = on ? '🎵' : '🔇'; });
}

/* 状態反映だけ（選択中サイズのsel・音/BGMアイコン）。bindは張らない＝何度呼んでも安全。 */
function reflectSettings(){
  document.querySelectorAll('#sizeRow .size-btn').forEach(b=>{
    b.classList.toggle('sel', b.dataset.s===Store.getScale());
  });
  document.getElementById('soundBtn').textContent = Sound.enabled ? '🔊' : '🔇';
  document.getElementById('bgmBtn').textContent   = Bgm.enabled ? '🎵' : '🔇';
}

/* 言語ボタンだけは押すたびに全再生成（押した言語をselにするため）＝動的要素なのでここでbind。 */
function renderSettings(){
  const lg = document.getElementById('langGrid');
  lg.innerHTML = LANGS.map(l=>
    '<button class="lang-btn'+(l.code===CUR?' sel':'')+'" data-c="'+l.code+'">'+l.label+'</button>'
  ).join('');
  lg.querySelectorAll('.lang-btn').forEach(b=>{
    Tap.bind(b, ()=>{ CUR=b.dataset.c; Store.setLang(CUR); applyI18n(); renderSettings(); });
  });
  reflectSettings();
}

/* ===== ホームの日付（大きく）・日数/回数 ===== */
function renderHome(){
  const d = new Date();
  let dateStr;
  try{
    dateStr = d.toLocaleDateString(CUR || undefined,
      { year:'numeric', month:'long', day:'numeric', weekday:'long' });
  }catch(e){ dateStr = d.toLocaleDateString(); }
  const du = I18N.ui.daysUnit || '', tu = I18N.ui.timesUnit || '';
  document.getElementById('homeInfo').innerHTML =
    '<div class="home-date">'+dateStr+'</div>' +
    '<div class="home-stats">' +
      '<div class="stat"><span class="st-cap">'+t('playDays')+'</span>' +
        '<span class="st-val"><b>'+Store.totalDays()+'</b>'+(du?'<i>'+du+'</i>':'')+'</span></div>' +
      '<div class="stat"><span class="st-cap">'+t('playCount')+'</span>' +
        '<span class="st-val"><b>'+Store.totalPlays()+'</b>'+(tu?'<i>'+tu+'</i>':'')+'</span></div>' +
    '</div>';
}

/* ===== 記録（カレンダー） ===== */
let calY, calM;   // 表示中の年・月(0-based)

function openRecords(){
  const d = new Date(); calY = d.getFullYear(); calM = d.getMonth();
  renderRecords();
  document.getElementById('dayDetail').innerHTML = '';
  show('records');
}
function calShift(delta){
  calM += delta;
  if(calM < 0){ calM = 11; calY--; }
  if(calM > 11){ calM = 0; calY++; }
  renderRecords();
  document.getElementById('dayDetail').innerHTML = '';
}
function renderRecords(){
  const first = new Date(calY, calM, 1);
  document.getElementById('calMonth').textContent =
    first.toLocaleDateString(CUR || undefined, { year:'numeric', month:'long' });

  // 曜日ヘッダ（日曜始まり／2023-01-01は日曜）
  const wk = document.getElementById('calWeek'); wk.innerHTML = '';
  for(let i=0;i<7;i++){
    const s = document.createElement('div'); s.className = 'cal-wd';
    s.textContent = new Date(2023,0,1+i).toLocaleDateString(CUR || undefined, { weekday:'short' });
    wk.appendChild(s);
  }

  const grid = document.getElementById('calGrid'); grid.innerHTML = '';
  const startWd = first.getDay();
  const days = new Date(calY, calM+1, 0).getDate();
  const todayKey = Store.keyOf(new Date());
  for(let b=0;b<startWd;b++){ const e=document.createElement('div'); e.className='cal-cell empty'; grid.appendChild(e); }
  for(let day=1; day<=days; day++){
    const key = Store.keyOf(new Date(calY, calM, day));
    const c = Store.counts(key);
    const has = (c.easy + c.mid + c.hard) > 0;
    const cell = document.createElement('div');
    cell.className = 'cal-cell' + (has?' has':'') + (key===todayKey?' today':'');
    let inner = '<div class="cal-num">'+day+'</div>';
    if(has){
      const best = Store.bestStars(key);
      inner += '<div class="cal-stars">'+ (best>0 ? '★'.repeat(best) : '') +'</div>';
      let badges = '';
      if(c.easy>0) badges += '<span class="badge e">'+c.easy+'</span>';
      if(c.mid>0)  badges += '<span class="badge m">'+c.mid+'</span>';
      if(c.hard>0) badges += '<span class="badge h">'+c.hard+'</span>';
      inner += '<div class="cal-badges">'+badges+'</div>';
    }
    cell.innerHTML = inner;
    if(has) Tap.bind(cell, ()=>{ renderDayDetail(key); });
    grid.appendChild(cell);
  }
}
function renderDayDetail(key){
  const el = document.getElementById('dayDetail');
  const title = new Date(key+'T00:00:00').toLocaleDateString(CUR || undefined, { month:'long', day:'numeric', weekday:'short' });
  const data = Store.day(key);
  if(!data || !data.sessions || !data.sessions.length){
    el.innerHTML = '<div class="dd-title">'+title+'</div><div class="dd-none">'+t('noRecord')+'</div>'; return;
  }
  const lname = { easy:t('levelEasy'), mid:t('levelMid'), hard:t('levelHard') };
  const lcls  = { easy:'e', mid:'m', hard:'h' };
  const art   = I18N.art || LANG.en.art;
  let html = '<div class="dd-title">'+title+'</div>';
  data.sessions.forEach(s=>{
    const stars = Store.starsFor(s.level, s.timeSec);
    const m = Math.floor(s.timeSec/60), sec = s.timeSec%60;
    // B-5: 名画idがある記録は作品名を添える（旧データはsampleId無し→非表示・後方互換）
    const artName = (s.sampleId && art[s.sampleId]) ? art[s.sampleId] : '';
    html += '<div class="dd-row"><div class="dd-head">'+
      '<span class="dd-mode '+(lcls[s.level]||'e')+'">'+(lname[s.level]||s.level)+' '+s.pieces+'</span>'+
      '<span class="dd-score">'+m+':'+String(sec).padStart(2,'0')+' / '+s.moves+'</span>'+
      '<span class="dd-stars">'+'⭐'.repeat(stars)+'</span></div>'+
      (artName ? '<div class="dd-art">'+artName+'</div>' : '')+'</div>';
  });
  el.innerHTML = html;
}

/* ===== Android の戻るボタン（Play版だけ・2026-09-30） =====
   @capacitor/app が無いと、戻るを押すとアプリごと後ろに下がっていた（Android 11 以前は閉じる）。
   押したときの順: ①確かめの窓が出ていたら「いいえ」
                  ①見本の拡大・はじめる前の完成図なら、とじる（完成図は はじめずに とじる＝もとの画面のまま）
                  ②パズルの とちゅうなら「とちゅうで やめますか？」を出す（はい＝ホーム。とちゅうの記録は残らないので いきなり やめない）
                    完成したあと（記録は保存ずみ）は ③と同じ
                  ③ほかの画面は「ホームにもどる」と同じ
                  ④ホームなら、アプリを後ろに下げる（minimizeApp。記録はそのまま）
   🔴 プラグインはネイティブが入れる Capacitor.Plugins.App を使う（registerPlugin は WebView に無い）
   Web版（ブラウザ）は何もしない（戻るはブラウザのまま） */
function isNativeApp(){
  try{ const c = window.Capacitor; return !!(c && typeof c.isNativePlatform === 'function' && c.isNativePlatform()); }catch(e){ return false; }
}
function nativeApp(fn){
  try{
    const c = window.Capacitor;
    if(typeof c.isPluginAvailable === 'function' && !c.isPluginAvailable('App')) return null;
    const p = c.Plugins && c.Plugins.App;
    return (p && typeof p[fn] === 'function') ? p : null;
  }catch(e){ return null; }
}
function minimizeApp(){
  const ap = nativeApp('minimizeApp');
  try{ if(ap){ const p = ap.minimizeApp(); if(p && p.catch) p.catch(()=>{}); } }catch(e){}
}
/* アプリの中の確かめの窓（いいえ／はい）。Play版の window.confirm はボタンが英語の OK / Cancel に
   決め打ちされている（Capacitor）ので、Play版はこの窓を出す。Web版は今までどおり window.confirm。
   done(true=はい / false=いいえ)。戻るボタン＝いいえ */
function askBox(msg, done){
  if(!isNativeApp()){
    let r = false;
    try{ if(typeof window.confirm === 'function') r = !!window.confirm(msg); }catch(e){ r = false; }
    done(r);
    return;
  }
  const ov = document.createElement('div');
  ov.className = 'ask-ov';
  ov.setAttribute('role', 'alertdialog');
  ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = '<div class="ask-box"><div class="ask-msg"></div><div class="ask-row">' +
    '<button type="button" class="ask-btn ask-no" data-back="1"></button>' +
    '<button type="button" class="ask-btn ask-yes"></button></div></div>';
  ov.querySelector('.ask-msg').textContent = msg;
  const no = ov.querySelector('.ask-no'), yes = ov.querySelector('.ask-yes');
  no.textContent = t('no'); yes.textContent = t('yes');
  let closed = false;
  const close = (v)=>{ if(closed) return; closed = true; ov.remove(); done(v); };
  Tap.bind(no,  ()=> close(false));   // 読み上げ(TalkBack)・キーボードの click も tap.js が受ける（2026-09-30）
  Tap.bind(yes, ()=> close(true));
  ov.addEventListener('contextmenu', e=> e.preventDefault());
  document.body.appendChild(ov);
  try{ no.focus(); }catch(e){}
}
function goHomeFromAnywhere(){ PuzzleGame.stop(); renderHome(); show('home'); }   // 「ホームにもどる」と同じ
function onBack(){
  const ask = document.querySelector('.ask-ov');
  if(ask){ const no = ask.querySelector('.ask-no'); if(no) no.click(); return; }   // ① 確かめの窓＝いいえ
  if(guideOv){ guideOv._back(); return; }                                          // ① はじめての あそびかた
  if(!document.getElementById('refZoom').hidden){                                  // ① 見本の拡大・完成図
    pendingStart = false;   // はじめる前の完成図なら、はじめない
    closeRefZoom();
    return;
  }
  const cur = document.querySelector('.screen.active');
  const id = cur ? cur.id : 'home';
  if(id === 'game' && !pendingResult){                                             // ② パズルの とちゅう
    askBox(t('quitAsk'), (ok)=>{ if(ok) goHomeFromAnywhere(); });
    return;
  }
  if(id !== 'home'){ goHomeFromAnywhere(); return; }                               // ③
  minimizeApp();                                                                    // ④
}
function watchBack(){
  if(!isNativeApp()) return;
  const ap = nativeApp('addListener');
  if(!ap) return;
  try{ const r = ap.addListener('backButton', ()=>{ onBack(); }); if(r && r.catch) r.catch(()=>{}); }catch(e){}
}

/* ===== はじめての あそびかた（初回の案内・2026-09-30） =====
   ヒロさん「ひとつずつ・そよぎ みたいなタイプのアプリは、必ず最初に使い方の丁寧な説明を出してほしい。10代の情報室のように」。
   ・初回起動で必ず出す（最後まで読むまで、開くたびに出る）。文言は lang.js の GUIDE（LANG[k].guide）
   ・1ページずつ「つぎ」「まえ」で進む。閉じるのは最後のページの「はじめる」だけ（× は置かない）
   ・1ページ目に「ことば」（せっていと同じ15言語のボタン）。案内が画面を全部おおうので、ここでも えらべるように
   ・戻るボタン（Play版）: 2ページ目から=まえのページ / 1ページ目=初回なら後ろに下げる（閉じない）、せっていから開いたときは閉じる
   ・読み終えたら localStorage 'soyogi.jigsaw.guide.v1'。せっていの「あそびかたを もういちど みる」で もう一度
   ・BGM は今までどおり（起動で鳴る決まりは変えない）。ボタンは Tap 方式（長押しでも押せる・あとから来るクリックは tap.js が捨てる） */
const GUIDE_KEY = 'soyogi.jigsaw.guide.v1';
function guideDone(){ try{ return !!localStorage.getItem(GUIDE_KEY); }catch(e){ return false; } }
let guideOv = null;
function openGuide(first){
  if(guideOv) return;                                  // もう開いていれば開かない（二重に出さない）
  if(!I18N.guide || !I18N.guide.bodies || !I18N.guide.bodies.length) return;
  let i = 0;
  const mk = (tag, cls) => { const e = document.createElement(tag); if(cls) e.className = cls; return e; };
  const ov = mk('div', 'guide-ov'); ov.id = 'guideOv';
  ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
  const scroll = mk('div', 'guide-scroll'), box = mk('div', 'guide-box');
  const top = mk('div', 'guide-top'), ttl = mk('p', 'guide-title'), step = mk('p', 'guide-step');
  step.setAttribute('dir', 'ltr');                     // 「2 / 8」は いつも左から
  top.appendChild(ttl); top.appendChild(step);
  const h = mk('h2', 'guide-h'), p = mk('p', 'guide-p');
  const langWrap = mk('div', 'guide-lang'), langLbl = mk('div', 'set-label'), langGrid = mk('div', 'lang-grid');
  langWrap.appendChild(langLbl); langWrap.appendChild(langGrid);
  const dots = mk('div', 'guide-dots'); dots.setAttribute('aria-hidden', 'true');
  box.appendChild(top); box.appendChild(h); box.appendChild(p); box.appendChild(langWrap); box.appendChild(dots);
  scroll.appendChild(box);
  const row = mk('div', 'guide-row');
  const prevB = mk('button', 'guide-btn guide-prev'), nextB = mk('button', 'guide-btn guide-next');
  prevB.type = 'button'; nextB.type = 'button';
  row.appendChild(prevB); row.appendChild(nextB);
  ov.appendChild(scroll); ov.appendChild(row);
  ov.addEventListener('contextmenu', e=> e.preventDefault());
  function drawLang(){                                  // せっていの「ことば」と同じ15のボタン
    langGrid.innerHTML = '';
    LANGS.forEach(l=>{
      const b = mk('button', 'lang-btn' + (l.code === CUR ? ' sel' : ''));
      b.type = 'button'; b.textContent = l.label; b.dataset.c = l.code;
      const pick = ()=>{
        CUR = l.code; Store.setLang(CUR); applyI18n(); renderHome();
        const st = document.getElementById('settings');
        if(st && st.classList.contains('active')) renderSettings();   // せっていから開いたときは下の画面も訳し直す
        draw();
      };
      Tap.bind(b, pick);
      langGrid.appendChild(b);
    });
  }
  function draw(){
    const G0 = I18N.guide, n = G0.bodies.length;
    if(i > n - 1) i = n - 1;
    ov.setAttribute('aria-label', G0.title);
    ttl.textContent = G0.title;
    step.textContent = String(G0.step).replace('{n}', i + 1).replace('{m}', n);
    h.textContent = G0.heads[i] || '';
    p.textContent = G0.bodies[i];
    langWrap.style.display = (i === 0) ? '' : 'none';
    if(i === 0){ langLbl.textContent = t('language'); drawLang(); }
    dots.innerHTML = '';
    for(let k = 0; k < n; k++) dots.appendChild(mk('span', 'guide-dot' + (k === i ? ' on' : '')));
    prevB.textContent = G0.prev;
    prevB.style.visibility = (i === 0) ? 'hidden' : 'visible';   // 「つぎ」の位置を変えない
    nextB.textContent = (i === n - 1) ? G0.start : G0.next;
    nextB.classList.toggle('last', i === n - 1);
    scroll.scrollTop = 0;
  }
  function close(){
    try{ localStorage.setItem(GUIDE_KEY, '1'); }catch(e){}
    ov.remove();
    guideOv = null;
  }
  ov._draw = draw;
  ov._back = ()=>{
    if(i > 0){ i--; draw(); return; }
    if(first) minimizeApp(); else close();              // 初回は閉じずに後ろに下げる（10代の情報室と同じ）
  };
  const act = (el, fn) => { Tap.bind(el, fn); };   // 読み上げ(TalkBack)・キーボードの click も tap.js が受ける（2026-09-30。ここで click を足すと二重に進む）
  act(prevB, ()=>{ if(i > 0){ i--; draw(); } });
  act(nextB, ()=>{ if(i < I18N.guide.bodies.length - 1){ i++; draw(); } else close(); });
  draw();
  document.body.appendChild(ov);
  guideOv = ov;
  try{ nextB.focus(); }catch(e){}
}

/* ===== 起動 ===== */
function init(){
  setScale(Store.getScale());
  applyI18n();
  renderHome();
  renderSamples();
  watchBack();            // Android の戻るボタン（Play版だけ）
  clearCameraFiles();     // 前に撮ったカメラの写真の残りを消す（Play版だけ・2026-09-30）

  Tap.bind(document.getElementById('btnStart'), ()=>{ show('level'); });
  document.querySelectorAll('.lv-btn').forEach(b=>{
    Tap.bind(b, ()=>{ curLevel = LEVELS.find(l=>l.id===b.dataset.level); show('source'); });
  });
  Tap.bind(document.getElementById('btnAlbum'),  ()=>{ document.getElementById('fileAlbum').click(); });
  Tap.bind(document.getElementById('btnCamera'), ()=>{ document.getElementById('fileCamera').click(); });
  Tap.bind(document.getElementById('btnSample'), ()=>{ renderSamples(); show('samples'); });  // 開くたびに現在の言語で描き直す
  document.getElementById('fileAlbum').addEventListener('change', e=> pickFile(e.target));
  document.getElementById('fileCamera').addEventListener('change', e=> pickFile(e.target));

  Tap.bind(document.getElementById('btnHint'), ()=>{ PuzzleGame.hint(); });   // hint()内でSound.swap()を鳴らす
  bindSettingsStatic();   // A-1: 設定の静的ボタンは起動時に一度だけbind
  // 見本タップの拡大は beginGame() 内で .pz-ref に都度 Tap.bind する
  // 拡大オーバーレイは「どこを押しても閉じる」を長押しでも保証するため pointerup で無条件に閉じる（Tap.bindだと押し込み移動で閉じられなくなる事故があるため）
  const refZoom = document.getElementById('refZoom');
  let zoomAt = 0;   // pointerup で とじた時刻（直後の click で二重に とじない・はじめない）
  const zoomTap = ()=>{
    Sound.tap();
    closeRefZoom();
    if(pendingStart){ pendingStart = false; beginGame(); }   // B-1: プレビューを閉じたら本編開始
  };
  refZoom.addEventListener('pointerup', (e)=>{
    zoomAt = Date.now();
    Tap.markGhost(e);   // とじた下の画面に、このあとの同じ指の click を当てない（tap.js の 👻）
    zoomTap();
  });
  // 読み上げ(TalkBack)・スイッチ操作・キーボード（✕ にフォーカスして Enter）は click だけを出す＝pointerup が来ないので click でも とじる（2026-09-30）
  refZoom.addEventListener('click', ()=>{
    if(refZoom.hidden || Date.now() - zoomAt < 700) return;
    zoomAt = Date.now();
    zoomTap();
  });
  refZoom.addEventListener('contextmenu', e=> e.preventDefault());

  Tap.bind(document.getElementById('btnQuit'),  ()=>{ PuzzleGame.stop(); renderHome(); show('home'); });
  Tap.bind(document.getElementById('btnAgain'), ()=>{ startPuzzle(); });
  Tap.bind(document.getElementById('btnOther'), ()=>{ show('source'); });

  Tap.bind(document.getElementById('btnGear'),  ()=>{ renderSettings(); show('settings'); });
  Tap.bind(document.getElementById('btnRecords'), ()=>{ openRecords(); });
  Tap.bind(document.getElementById('calPrev'),  ()=>{ calShift(-1); });
  Tap.bind(document.getElementById('calNext'),  ()=>{ calShift(1); });
  document.querySelectorAll('[data-home]').forEach(b=> Tap.bind(b, ()=>{ PuzzleGame.stop(); renderHome(); show('home'); }));
  Tap.bind(document.getElementById('btnGuide'), ()=>{ openGuide(false); });   // せっていの「あそびかたを もういちど みる」

  show('home');
  Bgm.start();   // 起動時に自動でBGM開始（PWA/Androidは即・Webは制限で最初の操作時に自動発火）
  if(!guideDone()) openGuide(true);   // はじめての あそびかた（読み終えるまで毎回・2026-09-30）
}
document.addEventListener('DOMContentLoaded', init);
// 保険：Webの自動再生制限で保留中なら、最初の操作でAudioContextを解禁→onstatechangeで自動発火
// （ブラウザにより「操作」と認める入力が違うため click / touchend も張る）
['pointerdown','keydown','click','touchend'].forEach(ev=>
  document.addEventListener(ev, ()=>{ Sound.unlock(); Bgm.start(); }, { once:true }));
// タブを離れている間はBGMを止め、戻ったら再開（電池・マナー配慮）
document.addEventListener('visibilitychange', ()=>{ document.hidden ? Bgm.stop() : Bgm.start(); });

/* サービスワーカー（オフライン） */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
