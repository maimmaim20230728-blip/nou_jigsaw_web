/* =========================================================
   記録の保存 ― localStorage（端末内・サーバー通信なし）
   records[YYYY-MM-DD] = { sessions:[ {level,pieces,timeSec,moves,at} ] }
   ・level … 'easy'（初級）/ 'mid'（中級）/ 'hard'（上級）

   ▼永続性（オフライン・アプリ更新後も保持）の設計
   ・記録は localStorage（キー 'soyogi.jigsaw.records'）に保存。localStorageは
     Service Workerのキャッシュ(ファイル)とは別領域なので、SW更新やcache削除、
     アプリ(AAB)更新では消えない。
   ・キー名はアプリ版に依存しない固定値。コード内でこの記録を消去する処理は持たない。
   ・破損時も既存を極力守るため、読み書きは try/catch で保護。            */
const Store = (() => {
  const KEY  = 'soyogi.jigsaw.records';
  const DONE = 'soyogi.jigsaw.doneSamples';   // 完成したサンプル（名画）idの配列

  function load(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch(e){ return {}; }
  }
  function save(obj){
    try{ localStorage.setItem(KEY, JSON.stringify(obj)); }catch(e){ /* 保存失敗時も既存は保持 */ }
  }
  function loadDone(){
    try{ const a = JSON.parse(localStorage.getItem(DONE)); return Array.isArray(a) ? a : []; }
    catch(e){ return []; }
  }
  function saveDone(arr){
    try{ localStorage.setItem(DONE, JSON.stringify(arr)); }catch(e){ /* 保存失敗時も既存は保持 */ }
  }
  function keyOf(d){
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }

  /* 難易度ごとの目標秒数(LEVELS[].starSec=[3star未満の上限,2star未満の上限])から星を算出 */
  function starsFor(level, timeSec){
    const lv = LEVELS.find(l=>l.id===level);
    if(!lv) return 1;
    const [s3, s2] = lv.starSec;
    if(timeSec <= s3) return 3;
    if(timeSec <= s2) return 2;
    return 1;
  }

  return {
    keyOf, starsFor,

    /* 1回のパズル完成を今日の記録に追加 */
    record(session){
      const all = load();
      const day = keyOf(new Date());
      const row = all[day] || { sessions: [] };
      if(!row.sessions) row.sessions = [];
      row.sessions.push({ level:session.level, pieces:session.pieces,
        timeSec:session.timeSec, moves:session.moves, at: Date.now() });
      all[day] = row;
      save(all);
      return row;
    },

    day(key){ return load()[key] || null; },

    /* その日の難易度別プレイ回数 */
    counts(key){
      const r = load()[key]; const c = { easy:0, mid:0, hard:0 };
      if(r && r.sessions) r.sessions.forEach(s => { if(c[s.level] !== undefined) c[s.level]++; });
      return c;
    },

    /* その日の最高成績（星 1〜3・記録なしは0） */
    bestStars(key){
      const r = load()[key]; if(!r || !r.sessions || !r.sessions.length) return 0;
      let best = 0;
      r.sessions.forEach(s=>{ const st = starsFor(s.level, s.timeSec); if(st > best) best = st; });
      return best;
    },

    totalDays(){ return Object.keys(load()).length; },

    totalPlays(){
      const all = load(); let n = 0;
      Object.keys(all).forEach(k=>{ const r=all[k]; if(r && r.sessions) n += r.sessions.length; });
      return n;
    },

    streak(){
      const all = load();
      let n = 0; const d = new Date();
      while(true){
        if(all[keyOf(d)]){ n++; d.setDate(d.getDate()-1); } else break;
      }
      return n;
    },

    /* --- 完成コレクション（サンプルの名画を完成させると図鑑に記録） --- */
    markDone(id){
      const arr = loadDone();
      if(arr.indexOf(id) === -1){ arr.push(id); saveDone(arr); }
      return arr;
    },
    isDone(id){ return loadDone().indexOf(id) !== -1; },

    /* --- 設定 --- */
    getLang(){ return localStorage.getItem('soyogi.jigsaw.lang') || ''; },
    setLang(c){ localStorage.setItem('soyogi.jigsaw.lang', c); },
    getScale(){ return localStorage.getItem('soyogi.jigsaw.scale') || 'M'; },
    setScale(s){ localStorage.setItem('soyogi.jigsaw.scale', s); },
  };
})();
