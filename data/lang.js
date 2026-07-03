/* =========================================================
   脳活ジグソーパズル ― 15言語の言語パック
   LANG[コード] = { ui:{…} }
   ※機械＋知識ベースの翻訳です。公開前に母語話者レビュー推奨。
   ========================================================= */
const LANG = {

  ja: { ui:{
    tagline:'じぶんの しゃしんで ジグソーパズル', start:'はじめる',
    chooseLevel:'むずかしさを えらんでね', levelEasy:'初級', levelMid:'中級', levelHard:'上級',
    pieceUnit:'ピース', chooseSource:'しゃしんを えらんでね',
    fromAlbum:'アルバムから えらぶ', fromCamera:'カメラで とる', useSample:'サンプルを つかう',
    preparingPhoto:'しゃしんを じゅんびしています…', wellDone:'かんせい！',
    timeLabel:'じかん', movesLabel:'てすう', again:'もういちど', otherPhoto:'べつの しゃしんで',
    instructPuzzle:'ピースを ドラッグして いれかえてね',
    back:'ホームにもどる', settings:'せってい', language:'ことば', textSize:'もじの大きさ', sound:'おと',
  }},

  en: { ui:{
    tagline:'A jigsaw puzzle made from your own photo', start:'Start',
    chooseLevel:'Choose a difficulty', levelEasy:'Easy', levelMid:'Medium', levelHard:'Hard',
    pieceUnit:'pieces', chooseSource:'Choose a photo',
    fromAlbum:'Choose from album', fromCamera:'Take a photo', useSample:'Use a sample',
    preparingPhoto:'Preparing your photo…', wellDone:'Complete!',
    timeLabel:'Time', movesLabel:'Moves', again:'Again', otherPhoto:'Different photo',
    instructPuzzle:'Drag pieces to swap them',
    back:'Home', settings:'Settings', language:'Language', textSize:'Text size', sound:'Sound',
  }},

  zh: { ui:{
    tagline:'用您自己的照片拼图', start:'开始',
    chooseLevel:'选择难度', levelEasy:'初级', levelMid:'中级', levelHard:'高级',
    pieceUnit:'块', chooseSource:'选择照片',
    fromAlbum:'从相册选择', fromCamera:'拍照', useSample:'使用示例图片',
    preparingPhoto:'正在准备照片…', wellDone:'完成了！',
    timeLabel:'时间', movesLabel:'步数', again:'再玩一次', otherPhoto:'换一张照片',
    instructPuzzle:'拖动拼图块进行交换',
    back:'回首页', settings:'设置', language:'语言', textSize:'字号', sound:'声音',
  }},

  'zh-TW': { ui:{
    tagline:'用您自己的照片拼圖', start:'開始',
    chooseLevel:'選擇難度', levelEasy:'初級', levelMid:'中級', levelHard:'高級',
    pieceUnit:'塊', chooseSource:'選擇照片',
    fromAlbum:'從相簿選擇', fromCamera:'拍照', useSample:'使用範例圖片',
    preparingPhoto:'正在準備照片…', wellDone:'完成了！',
    timeLabel:'時間', movesLabel:'步數', again:'再玩一次', otherPhoto:'換一張照片',
    instructPuzzle:'拖曳拼圖塊進行交換',
    back:'回首頁', settings:'設定', language:'語言', textSize:'字級', sound:'聲音',
  }},

  ko: { ui:{
    tagline:'나만의 사진으로 만드는 직소 퍼즐', start:'시작',
    chooseLevel:'난이도 선택', levelEasy:'초급', levelMid:'중급', levelHard:'고급',
    pieceUnit:'조각', chooseSource:'사진 선택',
    fromAlbum:'앨범에서 선택', fromCamera:'사진 촬영', useSample:'샘플 사용',
    preparingPhoto:'사진을 준비하고 있어요…', wellDone:'완성!',
    timeLabel:'시간', movesLabel:'이동 횟수', again:'다시 하기', otherPhoto:'다른 사진으로',
    instructPuzzle:'조각을 드래그해서 바꿔보세요',
    back:'홈으로', settings:'설정', language:'언어', textSize:'글자 크기', sound:'소리',
  }},

  es: { ui:{
    tagline:'Un rompecabezas hecho con tu propia foto', start:'Empezar',
    chooseLevel:'Elige la dificultad', levelEasy:'Fácil', levelMid:'Medio', levelHard:'Difícil',
    pieceUnit:'piezas', chooseSource:'Elige una foto',
    fromAlbum:'Elegir del álbum', fromCamera:'Tomar una foto', useSample:'Usar una muestra',
    preparingPhoto:'Preparando tu foto…', wellDone:'¡Completado!',
    timeLabel:'Tiempo', movesLabel:'Movimientos', again:'Otra vez', otherPhoto:'Otra foto',
    instructPuzzle:'Arrastra las piezas para intercambiarlas',
    back:'Inicio', settings:'Ajustes', language:'Idioma', textSize:'Tamaño del texto', sound:'Sonido',
  }},

  pt: { ui:{
    tagline:'Um quebra-cabeça feito com sua própria foto', start:'Começar',
    chooseLevel:'Escolha a dificuldade', levelEasy:'Fácil', levelMid:'Médio', levelHard:'Difícil',
    pieceUnit:'peças', chooseSource:'Escolha uma foto',
    fromAlbum:'Escolher do álbum', fromCamera:'Tirar uma foto', useSample:'Usar uma amostra',
    preparingPhoto:'Preparando sua foto…', wellDone:'Completo!',
    timeLabel:'Tempo', movesLabel:'Movimentos', again:'De novo', otherPhoto:'Outra foto',
    instructPuzzle:'Arraste as peças para trocá-las',
    back:'Início', settings:'Ajustes', language:'Idioma', textSize:'Tamanho do texto', sound:'Som',
  }},

  fr: { ui:{
    tagline:'Un puzzle fait avec votre propre photo', start:'Commencer',
    chooseLevel:'Choisissez la difficulté', levelEasy:'Facile', levelMid:'Moyen', levelHard:'Difficile',
    pieceUnit:'pièces', chooseSource:'Choisissez une photo',
    fromAlbum:"Choisir dans l'album", fromCamera:'Prendre une photo', useSample:'Utiliser un exemple',
    preparingPhoto:'Préparation de votre photo…', wellDone:'Terminé !',
    timeLabel:'Temps', movesLabel:'Coups', again:'Encore', otherPhoto:'Autre photo',
    instructPuzzle:'Faites glisser les pièces pour les échanger',
    back:'Accueil', settings:'Réglages', language:'Langue', textSize:'Taille du texte', sound:'Son',
  }},

  de: { ui:{
    tagline:'Ein Puzzle aus deinem eigenen Foto', start:'Start',
    chooseLevel:'Schwierigkeit wählen', levelEasy:'Leicht', levelMid:'Mittel', levelHard:'Schwer',
    pieceUnit:'Teile', chooseSource:'Foto auswählen',
    fromAlbum:'Aus Album wählen', fromCamera:'Foto aufnehmen', useSample:'Beispiel verwenden',
    preparingPhoto:'Foto wird vorbereitet…', wellDone:'Geschafft!',
    timeLabel:'Zeit', movesLabel:'Züge', again:'Nochmal', otherPhoto:'Anderes Foto',
    instructPuzzle:'Ziehe die Teile, um sie zu tauschen',
    back:'Start', settings:'Einstellungen', language:'Sprache', textSize:'Textgröße', sound:'Ton',
  }},

  it: { ui:{
    tagline:'Un puzzle creato con la tua foto', start:'Inizia',
    chooseLevel:'Scegli la difficoltà', levelEasy:'Facile', levelMid:'Medio', levelHard:'Difficile',
    pieceUnit:'pezzi', chooseSource:'Scegli una foto',
    fromAlbum:"Scegli dall'album", fromCamera:'Scatta una foto', useSample:'Usa un esempio',
    preparingPhoto:'Preparazione della foto…', wellDone:'Completato!',
    timeLabel:'Tempo', movesLabel:'Mosse', again:'Di nuovo', otherPhoto:'Altra foto',
    instructPuzzle:'Trascina i pezzi per scambiarli',
    back:'Home', settings:'Impostazioni', language:'Lingua', textSize:'Dimensione testo', sound:'Suono',
  }},

  nl: { ui:{
    tagline:'Een puzzel gemaakt van je eigen foto', start:'Start',
    chooseLevel:'Kies de moeilijkheidsgraad', levelEasy:'Makkelijk', levelMid:'Gemiddeld', levelHard:'Moeilijk',
    pieceUnit:'stukjes', chooseSource:'Kies een foto',
    fromAlbum:'Kiezen uit album', fromCamera:'Foto maken', useSample:'Voorbeeld gebruiken',
    preparingPhoto:'Foto wordt voorbereid…', wellDone:'Klaar!',
    timeLabel:'Tijd', movesLabel:'Zetten', again:'Nog een keer', otherPhoto:'Andere foto',
    instructPuzzle:'Sleep de stukjes om ze te wisselen',
    back:'Home', settings:'Instellingen', language:'Taal', textSize:'Tekstgrootte', sound:'Geluid',
  }},

  pl: { ui:{
    tagline:'Puzzle z Twojego własnego zdjęcia', start:'Start',
    chooseLevel:'Wybierz poziom trudności', levelEasy:'Łatwy', levelMid:'Średni', levelHard:'Trudny',
    pieceUnit:'elementów', chooseSource:'Wybierz zdjęcie',
    fromAlbum:'Wybierz z albumu', fromCamera:'Zrób zdjęcie', useSample:'Użyj przykładu',
    preparingPhoto:'Przygotowywanie zdjęcia…', wellDone:'Ukończono!',
    timeLabel:'Czas', movesLabel:'Ruchy', again:'Jeszcze raz', otherPhoto:'Inne zdjęcie',
    instructPuzzle:'Przeciągnij elementy, aby je zamienić',
    back:'Start', settings:'Ustawienia', language:'Język', textSize:'Rozmiar tekstu', sound:'Dźwięk',
  }},

  ru: { ui:{
    tagline:'Пазл из вашей собственной фотографии', start:'Начать',
    chooseLevel:'Выберите сложность', levelEasy:'Лёгкий', levelMid:'Средний', levelHard:'Сложный',
    pieceUnit:'деталей', chooseSource:'Выберите фото',
    fromAlbum:'Выбрать из альбома', fromCamera:'Сделать фото', useSample:'Использовать образец',
    preparingPhoto:'Подготовка фото…', wellDone:'Готово!',
    timeLabel:'Время', movesLabel:'Ходы', again:'Ещё раз', otherPhoto:'Другое фото',
    instructPuzzle:'Перетащите детали, чтобы поменять их местами',
    back:'Домой', settings:'Настройки', language:'Язык', textSize:'Размер текста', sound:'Звук',
  }},

  tr: { ui:{
    tagline:'Kendi fotoğrafınızdan yapboz', start:'Başla',
    chooseLevel:'Zorluk seçin', levelEasy:'Kolay', levelMid:'Orta', levelHard:'Zor',
    pieceUnit:'parça', chooseSource:'Fotoğraf seçin',
    fromAlbum:'Albümden seç', fromCamera:'Fotoğraf çek', useSample:'Örnek kullan',
    preparingPhoto:'Fotoğraf hazırlanıyor…', wellDone:'Tamamlandı!',
    timeLabel:'Süre', movesLabel:'Hamle', again:'Tekrar', otherPhoto:'Başka fotoğraf',
    instructPuzzle:'Değiştirmek için parçaları sürükleyin',
    back:'Ana sayfa', settings:'Ayarlar', language:'Dil', textSize:'Yazı boyutu', sound:'Ses',
  }},

  hi: { ui:{
    tagline:'आपकी अपनी फ़ोटो से जिग्सॉ पहेली', start:'शुरू करें',
    chooseLevel:'कठिनाई चुनें', levelEasy:'आसान', levelMid:'मध्यम', levelHard:'कठिन',
    pieceUnit:'टुकड़े', chooseSource:'फ़ोटो चुनें',
    fromAlbum:'एल्बम से चुनें', fromCamera:'फ़ोटो लें', useSample:'नमूना उपयोग करें',
    preparingPhoto:'फ़ोटो तैयार हो रही है…', wellDone:'पूरा हुआ!',
    timeLabel:'समय', movesLabel:'चालें', again:'फिर से', otherPhoto:'दूसरी फ़ोटो',
    instructPuzzle:'टुकड़ों को बदलने के लिए खींचें',
    back:'होम', settings:'सेटिंग्स', language:'भाषा', textSize:'अक्षर का आकार', sound:'ध्वनि',
  }},

};

/* ---- クレジット（タイトル画面のHPリンク文言・15言語） ---- */
const CREDITS = {
  ja:'アプリ開発：介護と支援の相談どころ　そよぎ',
  en:'Developed by Soyogi — Care & Support Consultation',
  zh:'开发：介护与支援咨询处 Soyogi',
  'zh-TW':'開發：介護與支援諮詢處 Soyogi',
  ko:'개발: 돌봄·지원 상담소 Soyogi',
  es:'Desarrollado por Soyogi — Consultas de cuidado y apoyo',
  pt:'Desenvolvido pela Soyogi — Consultoria de cuidado e apoio',
  fr:'Développé par Soyogi — Consultations de soins et de soutien',
  de:'Entwickelt von Soyogi — Pflege- und Unterstützungsberatung',
  it:'Sviluppato da Soyogi — Consulenza per cura e supporto',
  nl:'Ontwikkeld door Soyogi — Zorg- en ondersteuningsadvies',
  pl:'Opracowane przez Soyogi — poradnia opieki i wsparcia',
  ru:'Разработано Soyogi — консультации по уходу и поддержке',
  tr:'Geliştiren: Soyogi — Bakım ve destek danışmanlığı',
  hi:'विकसित: देखभाल और सहायता परामर्श केंद्र Soyogi',
};
Object.keys(CREDITS).forEach(k=>{ if(LANG[k]) LANG[k].ui.credit = CREDITS[k]; });

/* ---- 「おんがく（BGM）」ラベル（15言語） ---- */
const MUSIC = {
  ja:'おんがく', en:'Music', zh:'音乐', 'zh-TW':'音樂', ko:'음악',
  es:'Música', pt:'Música', fr:'Musique', de:'Musik', it:'Musica',
  nl:'Muziek', pl:'Muzyka', ru:'Музыка', tr:'Müzik', hi:'संगीत',
};
Object.keys(MUSIC).forEach(k=>{ if(LANG[k]) LANG[k].ui.music = MUSIC[k]; });

/* ---- 記録・カレンダー関連ラベル（15言語） ---- */
const RECORDS = {
  ja:'記録を見る', en:'See records', zh:'查看记录', 'zh-TW':'查看紀錄', ko:'기록 보기',
  es:'Ver registros', pt:'Ver registros', fr:"Voir l'historique", de:'Verlauf ansehen', it:'Vedi archivio',
  nl:'Records bekijken', pl:'Zobacz zapisy', ru:'Посмотреть записи', tr:'Kayıtları gör', hi:'रिकॉर्ड देखें',
};
const PLAYDAYS = {
  ja:'プレイ日数', en:'Days played', zh:'游玩天数', 'zh-TW':'遊玩天數', ko:'플레이 일수',
  es:'Días jugados', pt:'Dias jogados', fr:'Jours joués', de:'Gespielte Tage', it:'Giorni giocati',
  nl:'Gespeelde dagen', pl:'Dni gry', ru:'Дней игры', tr:'Oynanan gün', hi:'खेले दिन',
};
const NOREC = {
  ja:'この日は きろくが ありません', en:'No records for this day', zh:'当天暂无记录', 'zh-TW':'當天尚無紀錄', ko:'이 날은 기록이 없습니다',
  es:'Sin registros este día', pt:'Sem registros neste dia', fr:'Aucun historique ce jour', de:'Keine Einträge an diesem Tag', it:'Nessun dato per questo giorno',
  nl:'Geen records op deze dag', pl:'Brak zapisów tego dnia', ru:'Нет записей за этот день', tr:'Bu gün için kayıt yok', hi:'इस दिन कोई रिकॉर्ड नहीं',
};
Object.keys(RECORDS).forEach(k=>{ if(LANG[k]){ LANG[k].ui.records=RECORDS[k]; LANG[k].ui.playDays=PLAYDAYS[k]; LANG[k].ui.noRecord=NOREC[k]; } });

/* ---- プレイ回数ラベルと単位（日／回）。単位はCJK/韓のみ表示、他は空（見出しで足りる） ---- */
const PLAYCOUNT = {
  ja:'プレイ回数', en:'Times played', zh:'游玩次数', 'zh-TW':'遊玩次數', ko:'플레이 횟수',
  es:'Veces jugadas', pt:'Vezes jogadas', fr:'Parties jouées', de:'Gespielte Runden', it:'Volte giocate',
  nl:'Keer gespeeld', pl:'Rozegrane gry', ru:'Всего игр', tr:'Oynama sayısı', hi:'खेले बार',
};
const DAYS_U  = { ja:'日', zh:'天', 'zh-TW':'天', ko:'일' };   // それ以外は空
const TIMES_U = { ja:'回', zh:'次', 'zh-TW':'次', ko:'회' };
Object.keys(LANG).forEach(k=>{
  if(PLAYCOUNT[k]) LANG[k].ui.playCount = PLAYCOUNT[k];
  LANG[k].ui.daysUnit  = DAYS_U[k]  || '';
  LANG[k].ui.timesUnit = TIMES_U[k] || '';
});
