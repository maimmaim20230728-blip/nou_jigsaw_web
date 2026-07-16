/* =========================================================
   パズル本体 ― NxN分割・ドラッグ&ドロップで2ピース入れ替え
   ・ピースはCSS background-position方式（画像を切らずに表示だけずらす）
   ・Pointer Events（タッチ/マウス共通）。掴むと浮き上がる分身が指に追従
   ・正しい位置のピースには小さな✓（シニアへの手がかり）
   ・完成＝全ピースが元の位置 → 見本と同じ絵が現れて紙吹雪＋ファンファーレ
   ========================================================= */
const PuzzleGame = (() => {
  let perm = [];          // perm[セル位置] = そこに置かれているピース番号
  let n = 3, imgUrl = '';
  let moves = 0, startAt = 0, timerId = null, finished = false;
  let boardEl = null, statTime = null, statMoves = null, doneCb = null, commitCb = null;
  let dragPid = null;     // A-2: いま掴んでいる指(pointerId)。1本だけ受け付けマルチタッチ混線を防ぐ
  let doneTimer = null;   // A-3: 完成演出→結果画面へのタイマーID（stopで掃除）
  let stopped = false;    // A-3: stop()で中断済みなら結果画面への遷移を発火させない
  let committed = false;  // 記録の確定（commit）は完成検出の瞬間に1回だけ発火

  function fmtTime(sec){
    const m = Math.floor(sec/60), s = sec%60;
    return m + ':' + String(s).padStart(2,'0');
  }

  /* 解けた状態で始まらないようシャッフル（入れ替え式はどの並びでも必ず解ける） */
  function shuffled(){
    const a = Array.from({length:n*n}, (_,i)=>i);
    do{
      for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
    }while(a.every((v,i)=>v===i));
    return a;
  }

  /* 画像本体は盤面のCSS変数(--pz-img)に1回だけ設定し、各ピースは表示位置だけ持つ
     （dataURLが大きくても重複せず軽い） */
  function pieceBg(el, piece){
    const col = piece % n, row = Math.floor(piece / n);
    el.style.backgroundImage = 'var(--pz-img)';
    el.style.backgroundSize = (n*100)+'% '+(n*100)+'%';
    el.style.backgroundPosition = (n>1 ? (col/(n-1)*100) : 0)+'% '+(n>1 ? (row/(n-1)*100) : 0)+'%';
  }

  function render(){
    boardEl.querySelectorAll('.pcell').forEach((cell,i)=>{
      pieceBg(cell, perm[i]);
      cell.classList.toggle('placed', perm[i] === i);
    });
  }

  function tick(){
    if(finished) return;
    const sec = Math.floor((Date.now()-startAt)/1000);
    statTime.textContent = fmtTime(sec);
  }

  function checkDone(){
    if(finished) return;                       // 完成処理は一度だけ（冪等）
    if(!perm.every((v,i)=>v===i)) return;
    finished = true;
    if(timerId){ clearInterval(timerId); timerId = null; }
    const timeSec = Math.floor((Date.now()-startAt)/1000);

    // 記録の確定は完成検出のこの瞬間に即実行（1回だけ）。
    // 完成演出中(1.8秒)に離脱しても記録・図鑑✓が残るよう、遷移(doneCb)より前に必ずコミットする。
    if(commitCb && !committed){ committed = true; commitCb({ timeSec, moves }); }

    // 隙間を消して1枚の絵に戻す完成演出
    boardEl.classList.add('done');
    Sound.fanfare();
    // 1.8秒後の doneTimer は「結果画面への遷移」専用。stop() で掃除・中断済みなら遷移しない
    doneTimer = setTimeout(()=>{
      doneTimer = null;
      if(doneCb && !stopped) doneCb();
    }, 1800);
  }

  /* ---- ドラッグ&ドロップ（Pointer Events） ---- */
  function attachDrag(cell){
    cell.addEventListener('pointerdown', (ev)=>{
      if(finished) return;
      if(!ev.isPrimary) return;      // A-2: 主ポインタ以外（2本目以降の指）は無視
      if(dragPid !== null) return;   // A-2: すでにドラッグ中なら新規ドラッグを始めない
      ev.preventDefault();
      dragPid = ev.pointerId;        // A-2: このドラッグのポインタを固定
      const from = Number(cell.dataset.i);
      const rect = cell.getBoundingClientRect();

      // 指に追従する分身（浮き上がって見えるよう少し拡大＋影）
      const ghost = document.createElement('div');
      ghost.className = 'pghost';
      ghost.style.width = rect.width+'px'; ghost.style.height = rect.height+'px';
      pieceBg(ghost, perm[from]);
      boardEl.appendChild(ghost);   // 盤内に置く＝CSS変数(--pz-img)が届く

      const place = (x,y)=>{ ghost.style.left = (x-rect.width/2)+'px'; ghost.style.top = (y-rect.height/2)+'px'; };
      place(ev.clientX, ev.clientY);
      cell.classList.add('lifting');

      let hover = null;
      // ドラッグ終了の後片付け（ゴースト除去・状態復帰・ポインタ解放）
      const cleanup = ()=>{
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
        document.removeEventListener('pointercancel', onCancel);
        if(hover) hover.classList.remove('drop-target');
        ghost.remove();
        cell.classList.remove('lifting');
        dragPid = null;
      };
      const onMove = (e)=>{
        if(e.pointerId !== dragPid) return;   // A-2: このドラッグ以外のポインタは無視
        place(e.clientX, e.clientY);
        const t = document.elementFromPoint(e.clientX, e.clientY);
        const c = t && t.closest ? t.closest('.pcell') : null;
        if(hover && hover !== c) hover.classList.remove('drop-target');
        hover = (c && c !== cell) ? c : null;
        if(hover) hover.classList.add('drop-target');
      };
      const onUp = (e)=>{
        if(e.pointerId !== dragPid) return;   // A-2: 固定した指の離しだけ処理
        const target = hover;
        cleanup();
        if(target){
          const to = Number(target.dataset.i);
          [perm[from], perm[to]] = [perm[to], perm[from]];
          moves++;
          statMoves.textContent = moves;
          Sound.swap();
          render();
          checkDone();
        }
      };
      const onCancel = (e)=>{
        if(e.pointerId !== dragPid) return;   // A-2: pointercancelでも安全に終了（入れ替えはしない）
        cleanup();
      };
      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
      document.addEventListener('pointercancel', onCancel);
    });
  }

  return {
    /* opts = { img:dataURL/URL, n:分割数, onDone(stats) } */
    start(container, opts){
      n = opts.n; imgUrl = opts.img; doneCb = opts.onDone; commitCb = opts.onCommit;
      moves = 0; finished = false; perm = shuffled();
      dragPid = null; stopped = false; committed = false;   // 前回の残りをリセット
      if(doneTimer){ clearTimeout(doneTimer); doneTimer = null; }

      container.innerHTML =
        '<div class="pz-top">' +
          '<img class="pz-ref" src="'+imgUrl+'" alt="">' +
          '<div class="pz-stats">' +
            '<div class="pz-stat"><span class="pz-cap" data-i18n="timeLabel">'+t('timeLabel')+'</span><b id="pzTime">0:00</b></div>' +
            '<div class="pz-stat"><span class="pz-cap" data-i18n="movesLabel">'+t('movesLabel')+'</span><b id="pzMoves">0</b></div>' +
          '</div>' +
        '</div>' +
        '<div class="pz-board" id="pzBoard" style="grid-template-columns:repeat('+n+',1fr)"></div>';

      boardEl = container.querySelector('#pzBoard');
      boardEl.addEventListener('contextmenu', e=> e.preventDefault());  // ピース長押しでOSメニューを出さない
      boardEl.style.setProperty('--pz-img', 'url("'+imgUrl+'")');
      statTime = container.querySelector('#pzTime');
      statMoves = container.querySelector('#pzMoves');
      for(let i=0;i<n*n;i++){
        const cell = document.createElement('div');
        cell.className = 'pcell';
        cell.dataset.i = i;
        attachDrag(cell);
        boardEl.appendChild(cell);
      }
      render();

      startAt = Date.now();
      if(timerId) clearInterval(timerId);
      timerId = setInterval(tick, 1000);
    },

    /* ヒント（上級16ピースの救済）：間違った位置のセルを1つ選び、
       そこへ入るべきピースと入れ替えて必ず1枚を正位置にする。
       入れ替え式なので他が崩れることはなく、直したセルを一瞬光らせて伝える */
    hint(){
      if(finished) return;
      const wrong = [];
      for(let i=0;i<perm.length;i++){ if(perm[i] !== i) wrong.push(i); }
      if(!wrong.length) return;
      const target = wrong[Math.floor(Math.random()*wrong.length)];  // 正解にするセル
      const loc = perm.indexOf(target);                              // ピースtargetが今いるセル
      [perm[target], perm[loc]] = [perm[loc], perm[target]];
      moves++; statMoves.textContent = moves;
      Sound.swap();
      render();
      const fixed = boardEl.querySelector('.pcell[data-i="'+target+'"]');
      if(fixed){ fixed.classList.add('hint-fixed'); setTimeout(()=>fixed.classList.remove('hint-fixed'), 1000); }
      checkDone();
    },

    /* 途中でやめた時の後片付け（記録しない） */
    stop(){
      finished = true;
      stopped = true;   // A-3: 完成演出中でも結果画面へ引き戻さない
      if(timerId){ clearInterval(timerId); timerId = null; }
      if(doneTimer){ clearTimeout(doneTimer); doneTimer = null; }
    },
  };
})();
