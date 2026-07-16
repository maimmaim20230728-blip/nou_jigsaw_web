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

/* ---- サンプル名画のタイトル（作品id）と作者名（作者id）15言語 ----
   キー: 作品id(12) = config.js SAMPLES[].id ／ 作者id(7) = SAMPLES[].artist */
const ART = {
  ja: { vangogh:'ゴッホ', hokusai:'葛飾北斎', hiroshige:'歌川広重', munch:'ムンク', davinci:'レオナルド・ダ・ヴィンチ', vermeer:'フェルメール', monet:'モネ',
    sunflowers:'ひまわり', starry_night:'星月夜', cafe_terrace:'夜のカフェテラス', great_wave:'神奈川沖浪裏', tokaido_nihonbashi:'東海道五十三次 日本橋',
    scream:'叫び', mona_lisa:'モナ・リザ', pearl_earring:'真珠の耳飾りの少女', milkmaid:'牛乳を注ぐ女',
    water_lilies:'睡蓮', woman_parasol:'日傘をさす女', impression_sunrise:'印象・日の出' },
  en: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Sunflowers', starry_night:'The Starry Night', cafe_terrace:'Café Terrace at Night', great_wave:'The Great Wave off Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'The Scream', mona_lisa:'Mona Lisa', pearl_earring:'Girl with a Pearl Earring', milkmaid:'The Milkmaid',
    water_lilies:'Water Lilies', woman_parasol:'Woman with a Parasol', impression_sunrise:'Impression, Sunrise' },
  zh: { vangogh:'梵高', hokusai:'葛饰北斋', hiroshige:'歌川广重', munch:'蒙克', davinci:'达·芬奇', vermeer:'维米尔', monet:'莫奈',
    sunflowers:'向日葵', starry_night:'星夜', cafe_terrace:'夜晚的露天咖啡座', great_wave:'神奈川冲浪里', tokaido_nihonbashi:'东海道五十三次 日本桥',
    scream:'呐喊', mona_lisa:'蒙娜丽莎', pearl_earring:'戴珍珠耳环的少女', milkmaid:'倒牛奶的女仆',
    water_lilies:'睡莲', woman_parasol:'撑阳伞的女人', impression_sunrise:'印象·日出' },
  'zh-TW': { vangogh:'梵谷', hokusai:'葛飾北齋', hiroshige:'歌川廣重', munch:'孟克', davinci:'達文西', vermeer:'維梅爾', monet:'莫內',
    sunflowers:'向日葵', starry_night:'星夜', cafe_terrace:'夜晚的露天咖啡座', great_wave:'神奈川沖浪裏', tokaido_nihonbashi:'東海道五十三次 日本橋',
    scream:'吶喊', mona_lisa:'蒙娜麗莎', pearl_earring:'戴珍珠耳環的少女', milkmaid:'倒牛奶的女僕',
    water_lilies:'睡蓮', woman_parasol:'撐陽傘的女人', impression_sunrise:'印象·日出' },
  ko: { vangogh:'반 고흐', hokusai:'가쓰시카 호쿠사이', hiroshige:'우타가와 히로시게', munch:'뭉크', davinci:'레오나르도 다 빈치', vermeer:'페르메이르', monet:'모네',
    sunflowers:'해바라기', starry_night:'별이 빛나는 밤', cafe_terrace:'밤의 카페 테라스', great_wave:'가나가와 해변의 높은 파도', tokaido_nihonbashi:'니혼바시 (도카이도)',
    scream:'절규', mona_lisa:'모나리자', pearl_earring:'진주 귀걸이를 한 소녀', milkmaid:'우유를 따르는 여인',
    water_lilies:'수련', woman_parasol:'양산을 쓴 여인', impression_sunrise:'인상, 해돋이' },
  es: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Los girasoles', starry_night:'La noche estrellada', cafe_terrace:'Terraza de café por la noche', great_wave:'La gran ola de Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'El grito', mona_lisa:'La Gioconda', pearl_earring:'La joven de la perla', milkmaid:'La lechera',
    water_lilies:'Nenúfares', woman_parasol:'Mujer con sombrilla', impression_sunrise:'Impresión, sol naciente' },
  pt: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Os girassóis', starry_night:'A noite estrelada', cafe_terrace:'Terraço do café à noite', great_wave:'A Grande Onda de Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'O Grito', mona_lisa:'Mona Lisa', pearl_earring:'Moça com Brinco de Pérola', milkmaid:'A Leiteira',
    water_lilies:'Nenúfares', woman_parasol:'Mulher com sombrinha', impression_sunrise:'Impressão, nascer do sol' },
  fr: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Léonard de Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Les Tournesols', starry_night:'La Nuit étoilée', cafe_terrace:'Terrasse du café le soir', great_wave:'La Grande Vague de Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'Le Cri', mona_lisa:'La Joconde', pearl_earring:'La Jeune Fille à la perle', milkmaid:'La Laitière',
    water_lilies:'Les Nymphéas', woman_parasol:'La Femme à l\'ombrelle', impression_sunrise:'Impression, soleil levant' },
  de: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Sonnenblumen', starry_night:'Sternennacht', cafe_terrace:'Caféterrasse am Abend', great_wave:'Die große Welle vor Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'Der Schrei', mona_lisa:'Mona Lisa', pearl_earring:'Das Mädchen mit dem Perlenohrring', milkmaid:'Dienstmagd mit Milchkrug',
    water_lilies:'Seerosen', woman_parasol:'Frau mit Sonnenschirm', impression_sunrise:'Impression, Sonnenaufgang' },
  it: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'I girasoli', starry_night:'Notte stellata', cafe_terrace:'Terrazza del caffè la sera', great_wave:'La grande onda di Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'L\'urlo', mona_lisa:'La Gioconda', pearl_earring:'Ragazza con l\'orecchino di perla', milkmaid:'La lattaia',
    water_lilies:'Ninfee', woman_parasol:'Donna con parasole', impression_sunrise:'Impressione, levar del sole' },
  nl: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Zonnebloemen', starry_night:'De sterrennacht', cafe_terrace:'Caféterras bij nacht', great_wave:'De grote golf van Kanagawa', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'De Schreeuw', mona_lisa:'Mona Lisa', pearl_earring:'Meisje met de parel', milkmaid:'Het melkmeisje',
    water_lilies:'Waterlelies', woman_parasol:'Vrouw met parasol', impression_sunrise:'Impressie, opkomende zon' },
  pl: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Słoneczniki', starry_night:'Gwiaździsta noc', cafe_terrace:'Taras kawiarni w nocy', great_wave:'Wielka fala w Kanagawie', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'Krzyk', mona_lisa:'Mona Lisa', pearl_earring:'Dziewczyna z perłą', milkmaid:'Mleczarka',
    water_lilies:'Nenufary', woman_parasol:'Kobieta z parasolką', impression_sunrise:'Impresja, wschód słońca' },
  ru: { vangogh:'Ван Гог', hokusai:'Хокусай', hiroshige:'Хиросигэ', munch:'Мунк', davinci:'Леонардо да Винчи', vermeer:'Вермеер', monet:'Моне',
    sunflowers:'Подсолнухи', starry_night:'Звёздная ночь', cafe_terrace:'Ночная терраса кафе', great_wave:'Большая волна в Канагаве', tokaido_nihonbashi:'Нихонбаси (Токайдо)',
    scream:'Крик', mona_lisa:'Мона Лиза', pearl_earring:'Девушка с жемчужной серёжкой', milkmaid:'Молочница',
    water_lilies:'Кувшинки', woman_parasol:'Женщина с зонтиком', impression_sunrise:'Впечатление. Восходящее солнце' },
  tr: { vangogh:'Van Gogh', hokusai:'Hokusai', hiroshige:'Hiroshige', munch:'Munch', davinci:'Leonardo da Vinci', vermeer:'Vermeer', monet:'Monet',
    sunflowers:'Ayçiçekleri', starry_night:'Yıldızlı Gece', cafe_terrace:'Gece Kahve Terası', great_wave:'Kanagava\'nın Büyük Dalgası', tokaido_nihonbashi:'Nihonbashi (Tōkaidō)',
    scream:'Çığlık', mona_lisa:'Mona Lisa', pearl_earring:'İnci Küpeli Kız', milkmaid:'Sütçü Kız',
    water_lilies:'Nilüferler', woman_parasol:'Şemsiyeli Kadın', impression_sunrise:'İzlenim, Gün Doğumu' },
  hi: { vangogh:'वान गॉग', hokusai:'होकुसाई', hiroshige:'हिरोशिगे', munch:'मुंक', davinci:'लियोनार्दो दा विंची', vermeer:'वर्मीर', monet:'मोने',
    sunflowers:'सूरजमुखी', starry_night:'तारों भरी रात', cafe_terrace:'रात में कैफे की छत', great_wave:'कानागावा की महान लहर', tokaido_nihonbashi:'निहोनबाशी (तोकाइदो)',
    scream:'चीख', mona_lisa:'मोना लिसा', pearl_earring:'मोती की बाली वाली लड़की', milkmaid:'दूधवाली',
    water_lilies:'जल-कुमुदिनी', woman_parasol:'छतरी वाली महिला', impression_sunrise:'इम्प्रेशन, सूर्योदय' },
};
/* ---- 追加12点（2026-07-03・計24点）のタイトルと新規作者10名 ---- */
const ART2 = {
  ja: { botticelli:'ボッティチェリ', klimt:'クリムト', delacroix:'ドラクロワ', millet:'ミレー', renoir:'ルノワール', raphael:'ラファエロ', moronobu:'菱川師宣', sotatsu:'俵屋宗達', rembrandt:'レンブラント', velazquez:'ベラスケス',
    last_supper:'最後の晩餐', birth_of_venus:'ヴィーナスの誕生', kiss:'接吻', liberty:'民衆を導く自由の女神', gleaners:'落穂拾い', moulin_galette:'ムーラン・ド・ラ・ギャレットの舞踏会',
    school_of_athens:'アテナイの学堂', red_fuji:'凱風快晴（赤富士）', mikaeri_bijin:'見返り美人図', fujin_raijin:'風神雷神図屏風', night_watch:'夜警', las_meninas:'ラス・メニーナス' },
  en: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Raphael', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'The Last Supper', birth_of_venus:'The Birth of Venus', kiss:'The Kiss', liberty:'Liberty Leading the People', gleaners:'The Gleaners', moulin_galette:'Bal du moulin de la Galette',
    school_of_athens:'The School of Athens', red_fuji:'Fine Wind, Clear Morning (Red Fuji)', mikaeri_bijin:'Beauty Looking Back', fujin_raijin:'Wind God and Thunder God', night_watch:'The Night Watch', las_meninas:'Las Meninas' },
  zh: { botticelli:'波提切利', klimt:'克里姆特', delacroix:'德拉克罗瓦', millet:'米勒', renoir:'雷诺阿', raphael:'拉斐尔', moronobu:'菱川师宣', sotatsu:'俵屋宗达', rembrandt:'伦勃朗', velazquez:'委拉斯开兹',
    last_supper:'最后的晚餐', birth_of_venus:'维纳斯的诞生', kiss:'吻', liberty:'自由引导人民', gleaners:'拾穗者', moulin_galette:'煎饼磨坊的舞会',
    school_of_athens:'雅典学院', red_fuji:'凯风快晴（红富士）', mikaeri_bijin:'回眸美人图', fujin_raijin:'风神雷神图屏风', night_watch:'夜巡', las_meninas:'宫娥' },
  'zh-TW': { botticelli:'波提切利', klimt:'克林姆', delacroix:'德拉克洛瓦', millet:'米勒', renoir:'雷諾瓦', raphael:'拉斐爾', moronobu:'菱川師宣', sotatsu:'俵屋宗達', rembrandt:'林布蘭', velazquez:'維拉斯奎茲',
    last_supper:'最後的晚餐', birth_of_venus:'維納斯的誕生', kiss:'吻', liberty:'自由引導人民', gleaners:'拾穗', moulin_galette:'煎餅磨坊的舞會',
    school_of_athens:'雅典學院', red_fuji:'凱風快晴（赤富士）', mikaeri_bijin:'回眸美人圖', fujin_raijin:'風神雷神圖屏風', night_watch:'夜巡', las_meninas:'宮女' },
  ko: { botticelli:'보티첼리', klimt:'클림트', delacroix:'들라크루아', millet:'밀레', renoir:'르누아르', raphael:'라파엘로', moronobu:'히시카와 모로노부', sotatsu:'다와라야 소타쓰', rembrandt:'렘브란트', velazquez:'벨라스케스',
    last_supper:'최후의 만찬', birth_of_venus:'비너스의 탄생', kiss:'키스', liberty:'민중을 이끄는 자유의 여신', gleaners:'이삭 줍는 여인들', moulin_galette:'물랭 드 라 갈레트의 무도회',
    school_of_athens:'아테네 학당', red_fuji:'개풍쾌청 (붉은 후지)', mikaeri_bijin:'뒤돌아보는 미인', fujin_raijin:'풍신뇌신도 병풍', night_watch:'야경', las_meninas:'시녀들' },
  es: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Rafael', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'La Última Cena', birth_of_venus:'El nacimiento de Venus', kiss:'El beso', liberty:'La Libertad guiando al pueblo', gleaners:'Las espigadoras', moulin_galette:'Baile en el Moulin de la Galette',
    school_of_athens:'La escuela de Atenas', red_fuji:'El Fuji rojo', mikaeri_bijin:'Belleza mirando hacia atrás', fujin_raijin:'Dios del Viento y Dios del Trueno', night_watch:'La ronda de noche', las_meninas:'Las meninas' },
  pt: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Rafael', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'A Última Ceia', birth_of_venus:'O Nascimento de Vênus', kiss:'O Beijo', liberty:'A Liberdade Guiando o Povo', gleaners:'As Respigadeiras', moulin_galette:'Baile no Moulin de la Galette',
    school_of_athens:'Escola de Atenas', red_fuji:'Fuji Vermelho', mikaeri_bijin:'Beleza Olhando para Trás', fujin_raijin:'Deus do Vento e Deus do Trovão', night_watch:'A Ronda Noturna', las_meninas:'As Meninas' },
  fr: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Raphaël', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'La Cène', birth_of_venus:'La Naissance de Vénus', kiss:'Le Baiser', liberty:'La Liberté guidant le peuple', gleaners:'Des glaneuses', moulin_galette:'Bal du moulin de la Galette',
    school_of_athens:'L\'École d\'Athènes', red_fuji:'Le Fuji rouge', mikaeri_bijin:'Beauté regardant en arrière', fujin_raijin:'Dieu du Vent et Dieu du Tonnerre', night_watch:'La Ronde de nuit', las_meninas:'Les Ménines' },
  de: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Raffael', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'Das Letzte Abendmahl', birth_of_venus:'Die Geburt der Venus', kiss:'Der Kuss', liberty:'Die Freiheit führt das Volk', gleaners:'Die Ährenleserinnen', moulin_galette:'Bal du moulin de la Galette',
    school_of_athens:'Die Schule von Athen', red_fuji:'Roter Fuji', mikaeri_bijin:'Zurückblickende Schönheit', fujin_raijin:'Windgott und Donnergott', night_watch:'Die Nachtwache', las_meninas:'Las Meninas' },
  it: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Raffaello', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'L\'Ultima Cena', birth_of_venus:'Nascita di Venere', kiss:'Il bacio', liberty:'La Libertà che guida il popolo', gleaners:'Le spigolatrici', moulin_galette:'Ballo al Moulin de la Galette',
    school_of_athens:'Scuola di Atene', red_fuji:'Fuji rosso', mikaeri_bijin:'Bellezza che si volta', fujin_raijin:'Dio del Vento e Dio del Tuono', night_watch:'La ronda di notte', las_meninas:'Las Meninas' },
  nl: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Rafaël', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'Het Laatste Avondmaal', birth_of_venus:'De geboorte van Venus', kiss:'De kus', liberty:'De Vrijheid leidt het volk', gleaners:'De arenleessters', moulin_galette:'Bal du moulin de la Galette',
    school_of_athens:'De school van Athene', red_fuji:'Rode Fuji', mikaeri_bijin:'Omkijkende schoonheid', fujin_raijin:'Windgod en dondergod', night_watch:'De Nachtwacht', las_meninas:'Las Meninas' },
  pl: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Rafael', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'Ostatnia Wieczerza', birth_of_venus:'Narodziny Wenus', kiss:'Pocałunek', liberty:'Wolność wiodąca lud', gleaners:'Zbierające kłosy', moulin_galette:'Bal w Moulin de la Galette',
    school_of_athens:'Szkoła Ateńska', red_fuji:'Czerwone Fudżi', mikaeri_bijin:'Oglądająca się piękność', fujin_raijin:'Bóg wiatru i bóg piorunów', night_watch:'Straż nocna', las_meninas:'Panny dworskie' },
  ru: { botticelli:'Боттичелли', klimt:'Климт', delacroix:'Делакруа', millet:'Милле', renoir:'Ренуар', raphael:'Рафаэль', moronobu:'Хисикава Моронобу', sotatsu:'Таварая Сотацу', rembrandt:'Рембрандт', velazquez:'Веласкес',
    last_supper:'Тайная вечеря', birth_of_venus:'Рождение Венеры', kiss:'Поцелуй', liberty:'Свобода, ведущая народ', gleaners:'Собирательницы колосьев', moulin_galette:'Бал в Мулен де ла Галетт',
    school_of_athens:'Афинская школа', red_fuji:'Красная Фудзи', mikaeri_bijin:'Оглядывающаяся красавица', fujin_raijin:'Бог ветра и бог грома', night_watch:'Ночной дозор', las_meninas:'Менины' },
  tr: { botticelli:'Botticelli', klimt:'Klimt', delacroix:'Delacroix', millet:'Millet', renoir:'Renoir', raphael:'Raffaello', moronobu:'Hishikawa Moronobu', sotatsu:'Tawaraya Sōtatsu', rembrandt:'Rembrandt', velazquez:'Velázquez',
    last_supper:'Son Akşam Yemeği', birth_of_venus:'Venüs\'ün Doğuşu', kiss:'Öpücük', liberty:'Halka Yol Gösteren Özgürlük', gleaners:'Başak Toplayanlar', moulin_galette:'Moulin de la Galette\'te Dans',
    school_of_athens:'Atina Okulu', red_fuji:'Kızıl Fuji', mikaeri_bijin:'Arkasına Bakan Güzel', fujin_raijin:'Rüzgâr ve Gök Gürültüsü Tanrıları', night_watch:'Gece Devriyesi', las_meninas:'Nedimeler' },
  hi: { botticelli:'बोत्तिचेल्ली', klimt:'क्लिम्ट', delacroix:'डेलाक्रुआ', millet:'मिले', renoir:'रेनुआर', raphael:'राफेल', moronobu:'हिशिकावा मोरोनोबु', sotatsu:'तावाराया सोतात्सु', rembrandt:'रेम्ब्रांट', velazquez:'वेलास्केज़',
    last_supper:'अंतिम भोज', birth_of_venus:'वीनस का जन्म', kiss:'चुंबन', liberty:'स्वतंत्रता जनता का नेतृत्व करती हुई', gleaners:'बालियाँ बीनने वाली स्त्रियाँ', moulin_galette:'मूलां द ला गालेत का नृत्य',
    school_of_athens:'एथेंस का विद्यालय', red_fuji:'लाल फ़ूजी', mikaeri_bijin:'मुड़कर देखती सुंदरी', fujin_raijin:'पवन देव और गर्जन देव', night_watch:'रात का पहरा', las_meninas:'लास मेनिनास' },
};
/* ---- 追加12点（2026-07-11・計36点）のタイトルと新規作者9名 ---- */
const ART3 = {
  ja: { seurat:'スーラ', degas:'ドガ', cezanne:'セザンヌ', manet:'マネ', bruegel:'ブリューゲル', friedrich:'フリードリヒ', jakuchu:'伊藤若冲', korin:'尾形光琳', sharaku:'東洲斎写楽',
    almond_blossom:'アーモンドの花', ohashi_rain:'大はしあたけの夕立', angelus:'晩鐘', grande_jatte:'グランド・ジャット島の日曜日の午後', etoile:'エトワール',
    apples_oranges:'りんごとオレンジ', fifer:'笛を吹く少年', babel:'バベルの塔', wanderer:'雲海の上の旅人',
    ajisai_sokei:'紫陽花双鶏図', kakitsubata:'燕子花図屏風', edobee:'三世大谷鬼次の奴江戸兵衛' },
  en: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Almond Blossom', ohashi_rain:'Sudden Shower over Ōhashi Bridge', angelus:'The Angelus', grande_jatte:'A Sunday on La Grande Jatte', etoile:'The Star',
    apples_oranges:'Apples and Oranges', fifer:'The Fifer', babel:'The Tower of Babel', wanderer:'Wanderer above the Sea of Fog',
    ajisai_sokei:'Rooster and Hen with Hydrangeas', kakitsubata:'Irises (Folding Screen)', edobee:'Ōtani Oniji III as Yakko Edobei' },
  zh: { seurat:'修拉', degas:'德加', cezanne:'塞尚', manet:'马奈', bruegel:'勃鲁盖尔', friedrich:'弗里德里希', jakuchu:'伊藤若冲', korin:'尾形光琳', sharaku:'东洲斋写乐',
    almond_blossom:'盛开的杏花', ohashi_rain:'大桥安宅骤雨', angelus:'晚钟', grande_jatte:'大碗岛的星期天下午', etoile:'舞台上的舞者',
    apples_oranges:'苹果和橙子', fifer:'吹笛少年', babel:'巴别塔', wanderer:'雾海上的旅人',
    ajisai_sokei:'紫阳花双鸡图', kakitsubata:'燕子花图屏风', edobee:'三代目大谷鬼次之奴江户兵卫' },
  'zh-TW': { seurat:'秀拉', degas:'竇加', cezanne:'塞尚', manet:'馬奈', bruegel:'布勒哲爾', friedrich:'弗里德里希', jakuchu:'伊藤若冲', korin:'尾形光琳', sharaku:'東洲齋寫樂',
    almond_blossom:'盛開的杏花', ohashi_rain:'大橋安宅驟雨', angelus:'晚禱', grande_jatte:'大傑特島的星期日下午', etoile:'舞台上的舞者',
    apples_oranges:'蘋果與柳橙', fifer:'吹笛少年', babel:'巴別塔', wanderer:'霧海上的旅人',
    ajisai_sokei:'紫陽花雙雞圖', kakitsubata:'燕子花圖屏風', edobee:'三代目大谷鬼次之奴江戶兵衛' },
  ko: { seurat:'쇠라', degas:'드가', cezanne:'세잔', manet:'마네', bruegel:'브뤼헐', friedrich:'프리드리히', jakuchu:'이토 자쿠추', korin:'오가타 고린', sharaku:'도슈사이 샤라쿠',
    almond_blossom:'꽃 피는 아몬드 나무', ohashi_rain:'오하시 다리의 소나기', angelus:'만종', grande_jatte:'그랑드자트섬의 일요일 오후', etoile:'에투알',
    apples_oranges:'사과와 오렌지', fifer:'피리 부는 소년', babel:'바벨탑', wanderer:'안개 바다 위의 방랑자',
    ajisai_sokei:'수국과 두 마리 닭', kakitsubata:'제비붓꽃 병풍', edobee:'얏코 에도베이 역의 오타니 오니지 3세' },
  es: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Almendro en flor', ohashi_rain:'Aguacero sobre el puente Ōhashi', angelus:'El Ángelus', grande_jatte:'Tarde de domingo en la isla de la Grande Jatte', etoile:'La estrella',
    apples_oranges:'Manzanas y naranjas', fifer:'El pífano', babel:'La torre de Babel', wanderer:'El caminante sobre el mar de nubes',
    ajisai_sokei:'Gallo y gallina con hortensias', kakitsubata:'Lirios (biombo)', edobee:'Ōtani Oniji III como Yakko Edobei' },
  pt: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Amendoeira em flor', ohashi_rain:'Aguaceiro sobre a ponte Ōhashi', angelus:'O Angelus', grande_jatte:'Uma Tarde de Domingo na Ilha de Grande Jatte', etoile:'A Estrela',
    apples_oranges:'Maçãs e laranjas', fifer:'O tocador de pífaro', babel:'A Torre de Babel', wanderer:'O andarilho sobre o mar de névoa',
    ajisai_sokei:'Galo e galinha com hortênsias', kakitsubata:'Íris (biombo)', edobee:'Ōtani Oniji III como Yakko Edobei' },
  fr: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Amandier en fleurs', ohashi_rain:'Averse sur le pont Ōhashi', angelus:"L'Angélus", grande_jatte:"Un dimanche après-midi à l'île de la Grande Jatte", etoile:"L'Étoile",
    apples_oranges:'Pommes et oranges', fifer:'Le Fifre', babel:'La Tour de Babel', wanderer:'Le Voyageur contemplant une mer de nuages',
    ajisai_sokei:'Coq et poule aux hortensias', kakitsubata:'Iris (paravent)', edobee:'Ōtani Oniji III en Yakko Edobei' },
  de: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Mandelblüte', ohashi_rain:'Regenschauer über der Ōhashi-Brücke', angelus:'Das Angelusläuten', grande_jatte:'Ein Sonntagnachmittag auf der Insel La Grande Jatte', etoile:'Der Stern',
    apples_oranges:'Äpfel und Orangen', fifer:'Der Pfeifer', babel:'Der Turmbau zu Babel', wanderer:'Der Wanderer über dem Nebelmeer',
    ajisai_sokei:'Hahn und Henne mit Hortensien', kakitsubata:'Schwertlilien (Wandschirm)', edobee:'Ōtani Oniji III. als Yakko Edobei' },
  it: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Mandorlo in fiore', ohashi_rain:'Acquazzone sul ponte Ōhashi', angelus:"L'Angelus", grande_jatte:'Una domenica pomeriggio alla Grande-Jatte', etoile:"L'étoile",
    apples_oranges:'Mele e arance', fifer:'Il pifferaio', babel:'La torre di Babele', wanderer:'Viandante sul mare di nebbia',
    ajisai_sokei:'Gallo e gallina con ortensie', kakitsubata:'Iris (paravento)', edobee:'Ōtani Oniji III nel ruolo di Yakko Edobei' },
  nl: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Amandelbloesem', ohashi_rain:'Plotselinge regenbui boven de Ōhashi-brug', angelus:'Het angelus', grande_jatte:'Een zondagmiddag op het eiland La Grande Jatte', etoile:'De ster',
    apples_oranges:'Appels en sinaasappels', fifer:'De fluitspeler', babel:'De toren van Babel', wanderer:'De wandelaar boven de nevelen',
    ajisai_sokei:"Haan en hen met hortensia's", kakitsubata:'Irissen (kamerscherm)', edobee:'Ōtani Oniji III als Yakko Edobei' },
  pl: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Kwitnący migdałowiec', ohashi_rain:'Ulewa nad mostem Ōhashi', angelus:'Anioł Pański', grande_jatte:'Niedzielne popołudnie na wyspie Grande Jatte', etoile:'Gwiazda',
    apples_oranges:'Jabłka i pomarańcze', fifer:'Flecista', babel:'Wieża Babel', wanderer:'Wędrowiec nad morzem mgły',
    ajisai_sokei:'Kogut i kura wśród hortensji', kakitsubata:'Irysy (parawan)', edobee:'Ōtani Oniji III jako Yakko Edobei' },
  ru: { seurat:'Сёра', degas:'Дега', cezanne:'Сезанн', manet:'Мане', bruegel:'Брейгель', friedrich:'Фридрих', jakuchu:'Ито Дзякутю', korin:'Огата Корин', sharaku:'Сяраку',
    almond_blossom:'Цветущие ветки миндаля', ohashi_rain:'Внезапный ливень над мостом Охаси', angelus:'Анжелюс', grande_jatte:'Воскресный день на острове Гранд-Жатт', etoile:'Звезда',
    apples_oranges:'Яблоки и апельсины', fifer:'Флейтист', babel:'Вавилонская башня', wanderer:'Странник над морем тумана',
    ajisai_sokei:'Петух и курица с гортензиями', kakitsubata:'Ирисы (ширма)', edobee:'Отани Онидзи III в роли Якко Эдобэя' },
  tr: { seurat:'Seurat', degas:'Degas', cezanne:'Cézanne', manet:'Manet', bruegel:'Bruegel', friedrich:'Friedrich', jakuchu:'Itō Jakuchū', korin:'Ogata Kōrin', sharaku:'Sharaku',
    almond_blossom:'Çiçek Açan Badem Ağacı', ohashi_rain:'Ōhashi Köprüsü’nde Sağanak', angelus:'Angelus', grande_jatte:'Grande Jatte Adası’nda Bir Pazar Öğleden Sonrası', etoile:'Yıldız',
    apples_oranges:'Elmalar ve Portakallar', fifer:'Flüt Çalan Çocuk', babel:'Babil Kulesi', wanderer:'Sis Denizinin Üzerinde Gezgin',
    ajisai_sokei:'Ortancalı Horoz ve Tavuk', kakitsubata:'Süsenler (paravan)', edobee:'Yakko Edobei rolünde Ōtani Oniji III' },
  hi: { seurat:'सेरा', degas:'देगा', cezanne:'सेज़ान', manet:'माने', bruegel:'ब्रूगेल', friedrich:'फ्रीडरिख', jakuchu:'इतो जाकुचू', korin:'ओगाता कोरिन', sharaku:'शाराकु',
    almond_blossom:'बादाम के फूल', ohashi_rain:'ओहाशी पुल पर अचानक वर्षा', angelus:'एंजेलस', grande_jatte:'ग्रांद जात द्वीप पर रविवार की दोपहर', etoile:'द स्टार (बैले नर्तकी)',
    apples_oranges:'सेब और संतरे', fifer:'बाँसुरी बजाता लड़का', babel:'बाबेल की मीनार', wanderer:'कोहरे के सागर के ऊपर यात्री',
    ajisai_sokei:'हाइड्रेंजिया के साथ मुर्गा-मुर्गी', kakitsubata:'आइरिस फूल (परदा)', edobee:'याक्को एदोबेई के रूप में ओतानी ओनिजी III' },
};
Object.keys(ART).forEach(k=>{ if(LANG[k]) LANG[k].art = Object.assign({}, ART[k], ART2[k], ART3[k]); });

/* ---- ヒントボタン・写真読み込みエラー（2026-07-11ブラッシュアップ・15言語） ---- */
const HINT = {
  ja:'ヒント', en:'Hint', zh:'提示', 'zh-TW':'提示', ko:'힌트',
  es:'Pista', pt:'Dica', fr:'Indice', de:'Tipp', it:'Suggerimento',
  nl:'Hint', pl:'Podpowiedź', ru:'Подсказка', tr:'İpucu', hi:'संकेत',
};
const PHOTOERR = {
  ja:'しゃしんを ひらけませんでした。べつの しゃしんで ためしてね',
  en:'Could not open the photo. Please try another one.',
  zh:'无法打开照片。请试试其他照片。',
  'zh-TW':'無法開啟照片。請試試其他照片。',
  ko:'사진을 열 수 없었어요. 다른 사진으로 해 보세요.',
  es:'No se pudo abrir la foto. Prueba con otra.',
  pt:'Não foi possível abrir a foto. Tente outra.',
  fr:"Impossible d'ouvrir la photo. Essayez-en une autre.",
  de:'Das Foto konnte nicht geöffnet werden. Bitte versuche ein anderes.',
  it:"Impossibile aprire la foto. Provane un'altra.",
  nl:'Kon de foto niet openen. Probeer een andere.',
  pl:'Nie udało się otworzyć zdjęcia. Spróbuj z innym.',
  ru:'Не удалось открыть фото. Попробуйте другое.',
  tr:'Fotoğraf açılamadı. Başka bir fotoğraf deneyin.',
  hi:'फ़ोटो नहीं खुल सकी। कृपया दूसरी फ़ोटो आज़माएँ।',
};
Object.keys(LANG).forEach(k=>{
  LANG[k].ui.hint = HINT[k] || HINT.en;
  LANG[k].ui.photoError = PHOTOERR[k] || PHOTOERR.en;
});

/* ---- 開始前の完成図プレビューの案内ラベル（2026-07-17ブラッシュアップ・15言語） ---- */
const MAKETHIS = {
  ja:'この えを つくるよ！タップで スタート',
  en:"Let's make this picture! Tap to start",
  zh:'要拼这幅画哦！点击开始',
  'zh-TW':'要拼這幅畫喔！點擊開始',
  ko:'이 그림을 만들어요! 탭하면 시작',
  es:'¡Haremos esta imagen! Toca para empezar',
  pt:'Vamos montar esta imagem! Toque para começar',
  fr:'On va faire cette image ! Touchez pour commencer',
  de:'Dieses Bild legen wir! Zum Start tippen',
  it:'Faremo questa immagine! Tocca per iniziare',
  nl:'Deze afbeelding gaan we maken! Tik om te starten',
  pl:'Ułożymy ten obrazek! Dotknij, aby zacząć',
  ru:'Соберём эту картину! Коснитесь, чтобы начать',
  tr:'Bu resmi yapacağız! Başlamak için dokun',
  hi:'यह चित्र बनाएँगे! शुरू करने के लिए टैप करें',
};
Object.keys(LANG).forEach(k=>{ LANG[k].ui.makeThis = MAKETHIS[k] || MAKETHIS.en; });

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
