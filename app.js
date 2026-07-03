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
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  Bgm.setMood(id === 'game' ? 'game' : id === 'records' ? 'history' : 'title');  // パズル=軽快/記録=振り返り/その他=ポップ
}

/* ===== 今回のプレイ状態 ===== */
let curLevel = null;      // LEVELS の要素
let curImg   = null;      // 正方形化済みの dataURL / サンプルURL

/* ===== 写真の取込（正方形に切り抜いて dataURL 化） =====
   ・EXIFの向きはブラウザが自動適用（image-orientation:from-image が既定）
   ・大きすぎる写真は1024pxに縮小＝メモリと描画の負荷を抑える            */
function fileToSquare(file){
  return new Promise((resolve, reject)=>{
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = ()=>{
      try{
        const side = Math.min(img.naturalWidth, img.naturalHeight);
        const sx = (img.naturalWidth  - side) / 2;
        const sy = (img.naturalHeight - side) / 2;
        const out = Math.min(side, 1024);
        const cv = document.createElement('canvas');
        cv.width = out; cv.height = out;
        cv.getContext('2d').drawImage(img, sx, sy, side, side, 0, 0, out, out);
        URL.revokeObjectURL(url);
        resolve(cv.toDataURL('image/jpeg', 0.85));
      }catch(e){ URL.revokeObjectURL(url); reject(e); }
    };
    img.onerror = ()=>{ URL.revokeObjectURL(url); reject(new Error('load error')); };
    img.src = url;
  });
}

async function pickFile(input){
  const file = input.files && input.files[0];
  input.value = '';                       // 同じファイルの再選択も拾えるように
  if(!file) return;
  const loading = document.getElementById('srcLoading');
  loading.textContent = t('preparingPhoto');
  try{
    curImg = await fileToSquare(file);
    loading.textContent = '';
    startPuzzle();
  }catch(e){
    loading.textContent = '';
    Sound.ng();
  }
}

/* ===== サンプル（名画）選択（タイトル・作者は現在の言語で表示） ===== */
function renderSamples(){
  const grid = document.getElementById('sampleGrid');
  const art = I18N.art || LANG.en.art;
  grid.innerHTML = SAMPLES.map(s=>
    '<button class="sample-btn" data-src="'+s.src+'">'+
      '<img src="'+s.src+'" alt="'+(art[s.id]||'')+'">'+
      '<span class="sample-t">'+(art[s.id]||'')+'</span>'+
      '<span class="sample-a">'+(art[s.artist]||'')+'</span>'+
    '</button>'
  ).join('');
  grid.querySelectorAll('.sample-btn').forEach(b=>{
    b.onclick = ()=>{ Sound.tap(); curImg = b.dataset.src; startPuzzle(); };
  });
}

/* ===== パズル開始・完成 ===== */
function startPuzzle(){
  if(!curLevel || !curImg) return;
  show('game');
  PuzzleGame.start(document.querySelector('#game .g-body'), {
    img: curImg, n: curLevel.n,
    onDone: (stats)=> finishPuzzle(stats),
  });
}

function finishPuzzle(stats){
  Store.record({ level:curLevel.id, pieces:curLevel.pieces, timeSec:stats.timeSec, moves:stats.moves });
  renderResult(stats);
  show('result');
}

/* ===== 結果画面 ===== */
function renderResult(stats){
  const stars = Store.starsFor(curLevel.id, stats.timeSec);
  const starHtml = Array.from({length:stars}, (_,i)=>
    '<span style="animation-delay:'+(i*0.22)+'s">⭐</span>').join('');
  const m = Math.floor(stats.timeSec/60), s = stats.timeSec%60;
  const el = document.getElementById('resultBody');
  el.innerHTML =
    '<div class="stars">'+starHtml+'</div>' +
    '<img class="result-photo" src="'+curImg+'" alt="">' +
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
function renderSettings(){
  const lg = document.getElementById('langGrid');
  lg.innerHTML = LANGS.map(l=>
    '<button class="lang-btn'+(l.code===CUR?' sel':'')+'" data-c="'+l.code+'">'+l.label+'</button>'
  ).join('');
  lg.querySelectorAll('.lang-btn').forEach(b=>{
    b.onclick = ()=>{ CUR=b.dataset.c; Store.setLang(CUR); applyI18n(); renderSettings(); Sound.tap(); };
  });
  document.querySelectorAll('#sizeRow .size-btn').forEach(b=>{
    b.classList.toggle('sel', b.dataset.s===Store.getScale());
    b.onclick = ()=>{ setScale(b.dataset.s); renderSettings(); Sound.tap(); };
  });
  const sb = document.getElementById('soundBtn');
  sb.textContent = Sound.enabled ? '🔊' : '🔇';
  sb.onclick = ()=>{ Sound.toggle(); sb.textContent = Sound.enabled ? '🔊' : '🔇'; };

  const mb = document.getElementById('bgmBtn');
  mb.textContent = Bgm.enabled ? '🎵' : '🔇';
  mb.onclick = ()=>{ const on = Bgm.toggle(); mb.textContent = on ? '🎵' : '🔇'; Sound.tap(); };
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
    if(has) cell.onclick = ()=>{ Sound.tap(); renderDayDetail(key); };
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
  let html = '<div class="dd-title">'+title+'</div>';
  data.sessions.forEach(s=>{
    const stars = Store.starsFor(s.level, s.timeSec);
    const m = Math.floor(s.timeSec/60), sec = s.timeSec%60;
    html += '<div class="dd-row"><div class="dd-head">'+
      '<span class="dd-mode '+(lcls[s.level]||'e')+'">'+(lname[s.level]||s.level)+' '+s.pieces+'</span>'+
      '<span class="dd-score">'+m+':'+String(sec).padStart(2,'0')+' / '+s.moves+'</span>'+
      '<span class="dd-stars">'+'⭐'.repeat(stars)+'</span></div></div>';
  });
  el.innerHTML = html;
}

/* ===== 起動 ===== */
function init(){
  setScale(Store.getScale());
  applyI18n();
  renderHome();
  renderSamples();

  document.getElementById('btnStart').onclick = ()=>{ Sound.tap(); show('level'); };
  document.querySelectorAll('.lv-btn').forEach(b=>{
    b.onclick = ()=>{ Sound.tap(); curLevel = LEVELS.find(l=>l.id===b.dataset.level); show('source'); };
  });
  document.getElementById('btnAlbum').onclick  = ()=>{ Sound.tap(); document.getElementById('fileAlbum').click(); };
  document.getElementById('btnCamera').onclick = ()=>{ Sound.tap(); document.getElementById('fileCamera').click(); };
  document.getElementById('btnSample').onclick = ()=>{ Sound.tap(); renderSamples(); show('samples'); };  // 開くたびに現在の言語で描き直す
  document.getElementById('fileAlbum').addEventListener('change', e=> pickFile(e.target));
  document.getElementById('fileCamera').addEventListener('change', e=> pickFile(e.target));

  document.getElementById('btnQuit').onclick = ()=>{ Sound.tap(); PuzzleGame.stop(); renderHome(); show('home'); };
  document.getElementById('btnAgain').onclick = ()=>{ Sound.tap(); startPuzzle(); };
  document.getElementById('btnOther').onclick = ()=>{ Sound.tap(); show('source'); };

  document.getElementById('btnGear').onclick  = ()=>{ Sound.tap(); renderSettings(); show('settings'); };
  document.getElementById('btnRecords').onclick = ()=>{ Sound.tap(); openRecords(); };
  document.getElementById('calPrev').onclick  = ()=>{ Sound.tap(); calShift(-1); };
  document.getElementById('calNext').onclick  = ()=>{ Sound.tap(); calShift(1); };
  document.querySelectorAll('[data-home]').forEach(b=> b.onclick = ()=>{ Sound.tap(); PuzzleGame.stop(); renderHome(); show('home'); });

  show('home');
  Bgm.start();   // 起動時に自動でBGM開始（PWA/Androidは即・Webは制限で最初の操作時に自動発火）
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
