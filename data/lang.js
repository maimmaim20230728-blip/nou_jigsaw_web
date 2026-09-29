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

/* ---- Android の戻るボタン: パズルの とちゅうの確かめ（はい／いいえ）（2026-09-30・15言語）
        とちゅうで やめますか？ は脳活そよぎの「やめる」確認と同じ訳 ---- */
const QUITASK = {
  ja:'とちゅうで やめますか？', en:'Stop here?', zh:'要中途退出吗？', 'zh-TW':'要中途退出嗎？', ko:'여기서 그만할까요?',
  es:'¿Salir ahora?', pt:'Sair agora?', fr:'Arrêter ici ?', de:'Jetzt beenden?', it:'Vuoi uscire?',
  nl:'Nu stoppen?', pl:'Zakończyć teraz?', ru:'Закончить сейчас?', tr:'Şimdi bitirelim mi?', hi:'अभी बंद करें?',
};
const YES_ = {
  ja:'はい', en:'Yes', zh:'是', 'zh-TW':'是', ko:'네',
  es:'Sí', pt:'Sim', fr:'Oui', de:'Ja', it:'Sì',
  nl:'Ja', pl:'Tak', ru:'Да', tr:'Evet', hi:'हाँ',
};
const NO_ = {
  ja:'いいえ', en:'No', zh:'否', 'zh-TW':'否', ko:'아니요',
  es:'No', pt:'Não', fr:'Non', de:'Nein', it:'No',
  nl:'Nee', pl:'Nie', ru:'Нет', tr:'Hayır', hi:'नहीं',
};
Object.keys(LANG).forEach(k=>{
  LANG[k].ui.quitAsk = QUITASK[k];   // 英語で埋めない(欠けは _check.js の必須キーで見つける)
  LANG[k].ui.yes     = YES_[k];
  LANG[k].ui.no      = NO_[k];
});

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

/* ---- はじめての あそびかた（初回の案内・2026-09-30・15言語） ----
   ヒロさん「ひとつずつ・そよぎ みたいなタイプのアプリは、必ず最初に使い方の丁寧な説明を出してほしい」。
   LANG[k].guide = { title, step, prev, next, start, again, heads[8], bodies[8] }（app.js の openGuide が使う）
   ・かっこ（「」“”«»„“ など）の中の名前は、その言語の画面の文字と同じ（store/_back_check.js が全言語で照らす）
   ・せっていの行は ui.guideTitle（見出し）と ui.guideAgain（ボタン）＝ title と again と同じ文字 */
const GUIDE = {
  ja: { title:"あそびかた", step:"{n} / {m}", prev:"まえ", next:"つぎ", start:"はじめる", again:"あそびかたを もういちど みる",
    heads:[
      "脳活ジグソーへ ようこそ",
      "はじめかた",
      "絵の えらびかた",
      "パズルの あそびかた",
      "こまったときは",
      "かんせいしたら",
      "記録",
      "見やすく・音"
    ],
    bodies:[
      "このアプリは、じぶんの しゃしんや 名画で ジグソーパズルを する アプリです。\nピースを 指で うごかして、1まいの 絵に もどします。\nことばは この 下で えらべます。あとから「せってい」でも かえられます。",
      "ホームの「はじめる」を おします。\n「初級」（4ピース）・「中級」（9ピース）・「上級」（16ピース）から、むずかしさを えらびます。\nつぎに、パズルに する 絵を えらびます。",
      "「アルバムから えらぶ」で、スマホの 中の しゃしんを つかいます。\n「カメラで とる」で、その場で とった しゃしんを つかいます。\n「サンプルを つかう」では、名画 36点から えらびます。かんせいした 名画には ✓ が つきます。\nしゃしんは この 端末の 中で パズルに つかうだけで、どこにも 送りません。",
      "はじめに、できあがりの 絵が 出ます。画面を タップすると スタートです。\nピースを 指で おさえたまま、入れかえたい ところまで うごかして はなすと、2まいが 入れかわります。\n正しい 場所に 入った ピースには ✓ が つきます。ぜんぶ そろうと かんせいです。",
      "上の 小さな 絵（見本）を おすと、大きく 見られます。どこかを おすと もどります。\n「ヒント」を おすと、ピースが 1まい 正しい 場所に 入ります（「てすう」が 1 ふえます）。\nとちゅうで やめるときは「ホームにもどる」を おします。とちゅうで やめた パズルは 記録に のこりません。",
      "かんせいすると、かかった「じかん」と「てすう」、⭐ が 出ます。はやく できるほど ⭐ が ふえます（3つまで）。\n名画なら、作品の 名前と 作者も 出ます。\n「もういちど」で 同じ 絵を もう1回、「べつの しゃしんで」で 絵を えらびなおせます。",
      "ホームに「プレイ日数」と「プレイ回数」が 出ます。\n「記録を見る」の カレンダーでは、あそんだ 日に むずかしさごとの 回数が 色で つきます（オレンジは 初級・青は 中級・緑は 上級）。日にちを おすと、その日の 記録が 見られます。\n記録は この 端末の 中だけに のこり、どこにも 送られません。登録も いりません。",
      "ホームの 右上の「せってい」で、「ことば」「もじの大きさ」「おと」「おんがく」を かえられます。\nこの 案内は「せってい」の「あそびかたを もういちど みる」で、いつでも 見られます。"
    ] },
  en: { title:"How to play", step:"{n} / {m}", prev:"Previous", next:"Next", start:"Start", again:"See how to play again",
    heads:[
      "Welcome",
      "How to start",
      "Choosing a picture",
      "How to play the puzzle",
      "If you get stuck",
      "When you finish",
      "Records",
      "Easier to see, and sound"
    ],
    bodies:[
      "In this app you do jigsaw puzzles with your own photos or with famous paintings.\nMove the pieces with your finger to put the picture back together.\nChoose your language below. You can also change it later in “Settings”.",
      "Press “Start” on the home screen.\nChoose a difficulty: “Easy” (4 pieces), “Medium” (9 pieces) or “Hard” (16 pieces).\nThen choose the picture for your puzzle.",
      "“Choose from album” uses a photo on your phone.\n“Take a photo” uses a photo you take right then.\n“Use a sample” lets you choose from 36 famous paintings. Paintings you have completed get a ✓.\nYour photo is only used for the puzzle on this device; it is never sent anywhere.",
      "First the finished picture is shown. Tap the screen to start.\nHold a piece with your finger, move it to where you want it and let go: the two pieces swap places.\nA piece in the right place gets a ✓. When every piece is in place, the puzzle is complete.",
      "Press the small picture (the model) at the top to see it large. Press anywhere to go back.\nPress “Hint” and one piece moves to its right place (this adds 1 to your “Moves”).\nTo stop partway, press “Home”. A puzzle you stop partway is not saved in your records.",
      "When the puzzle is complete, you see your “Time”, your “Moves” and ⭐. The faster you finish, the more ⭐ you get (up to 3).\nFor a famous painting, its title and painter are shown too.\n“Again” plays the same picture once more, and “Different photo” lets you choose another picture.",
      "The home screen shows “Days played” and “Times played”.\nIn the “See records” calendar, the days you played show counts in a color for each difficulty (orange for Easy, blue for Medium, green for Hard). Press a day to see that day's records.\nYour records stay only on this device and are never sent anywhere. No sign-up is needed.",
      "With “Settings” at the top right of the home screen you can change “Language”, “Text size”, “Sound” and “Music”.\nYou can see this guide again at any time with “See how to play again” in “Settings”."
    ] },
  zh: { title:"玩法说明", step:"{n} / {m}", prev:"上一步", next:"下一步", start:"开始", again:"再看一次玩法说明",
    heads:[
      "欢迎",
      "开始方法",
      "选图方法",
      "拼图玩法",
      "遇到困难时",
      "完成之后",
      "记录",
      "看得清楚·声音"
    ],
    bodies:[
      "这个应用可以用你自己的照片或名画来玩拼图。\n用手指移动拼图块，把画拼回原样。\n请在下面选择语言。以后也可以在“设置”里更改。",
      "在首页按“开始”。\n从“初级”（4块）、“中级”（9块）、“高级”（16块）中选择难度。\n然后选择要拼的图。",
      "“从相册选择”：使用手机里的照片。\n“拍照”：使用当场拍的照片。\n“使用示例图片”：从36幅名画中选择。拼好的名画会标上✓。\n照片只在这台设备上用于拼图，不会发送到任何地方。",
      "开始前会先显示完成后的图。点一下画面就开始。\n用手指按住一块拼图，移到想交换的位置再松开，两块就会交换。\n放对位置的拼图块会标上✓。全部放对就完成了。",
      "点上方的小图（样图）可以放大查看。点任意位置就会回来。\n按“提示”，会有1块拼图放到正确位置（“步数”加1）。\n想中途停止时，按“回首页”。中途停止的拼图不会留下记录。",
      "完成后会显示用的“时间”“步数”和⭐。越快完成，⭐越多（最多3颗）。\n如果是名画，还会显示作品名和作者。\n按“再玩一次”再拼同一幅图，按“换一张照片”重新选图。",
      "首页会显示“游玩天数”和“游玩次数”。\n在“查看记录”的日历上，玩过的日子会按难度用颜色标出次数（橙色是初级，蓝色是中级，绿色是高级）。点日期就能看到当天的记录。\n记录只保存在这台设备里，不会发送到任何地方，也不需要注册。",
      "在首页右上角的“设置”里，可以更改“语言”“字号”“声音”“音乐”。\n在“设置”里按“再看一次玩法说明”，随时可以再看这份说明。"
    ] },
  'zh-TW': { title:"玩法說明", step:"{n} / {m}", prev:"上一步", next:"下一步", start:"開始", again:"再看一次玩法說明",
    heads:[
      "歡迎",
      "開始方法",
      "選圖方法",
      "拼圖玩法",
      "遇到困難時",
      "完成之後",
      "紀錄",
      "看得清楚・聲音"
    ],
    bodies:[
      "這個應用程式可以用你自己的照片或名畫來玩拼圖。\n用手指移動拼圖塊，把畫拼回原樣。\n請在下面選擇語言。之後也可以在「設定」裡更改。",
      "在首頁按「開始」。\n從「初級」（4塊）、「中級」（9塊）、「高級」（16塊）中選擇難度。\n接著選擇要拼的圖。",
      "「從相簿選擇」：使用手機裡的照片。\n「拍照」：使用當場拍的照片。\n「使用範例圖片」：從36幅名畫中選擇。拼好的名畫會標上✓。\n照片只在這台裝置上用於拼圖，不會傳送到任何地方。",
      "開始前會先顯示完成後的圖。點一下畫面就開始。\n用手指按住一塊拼圖，移到想交換的位置再放開，兩塊就會交換。\n放對位置的拼圖塊會標上✓。全部放對就完成了。",
      "點上方的小圖（範本）可以放大查看。點任何地方就會回來。\n按「提示」，會有1塊拼圖放到正確位置（「步數」加1）。\n想中途停止時，按「回首頁」。中途停止的拼圖不會留下紀錄。",
      "完成後會顯示花的「時間」「步數」和⭐。越快完成，⭐越多（最多3顆）。\n如果是名畫，還會顯示作品名稱和作者。\n按「再玩一次」再拼同一幅圖，按「換一張照片」重新選圖。",
      "首頁會顯示「遊玩天數」和「遊玩次數」。\n在「查看紀錄」的月曆上，玩過的日子會依難度用顏色標出次數（橘色是初級，藍色是中級，綠色是高級）。點日期就能看到當天的紀錄。\n紀錄只保存在這台裝置裡，不會傳送到任何地方，也不需要註冊。",
      "在首頁右上角的「設定」裡，可以更改「語言」「字級」「聲音」「音樂」。\n在「設定」裡按「再看一次玩法說明」，隨時可以再看這份說明。"
    ] },
  ko: { title:"하는 방법", step:"{n} / {m}", prev:"이전", next:"다음", start:"시작하기", again:"하는 방법 다시 보기",
    heads:[
      "환영합니다",
      "시작하는 방법",
      "그림 고르기",
      "퍼즐 하는 방법",
      "막혔을 때는",
      "완성하면",
      "기록",
      "보기 쉽게 · 소리"
    ],
    bodies:[
      "이 앱은 내 사진이나 명화로 직소 퍼즐을 하는 앱입니다.\n손가락으로 조각을 옮겨서 그림을 원래대로 맞춥니다.\n아래에서 언어를 고르세요. 나중에 “설정”에서도 바꿀 수 있습니다.",
      "홈에서 “시작”을 누르세요.\n“초급”(4조각), “중급”(9조각), “고급”(16조각) 중에서 난이도를 고릅니다.\n그다음 퍼즐로 만들 그림을 고릅니다.",
      "“앨범에서 선택”은 휴대폰에 있는 사진을 씁니다.\n“사진 촬영”은 그 자리에서 찍은 사진을 씁니다.\n“샘플 사용”에서는 명화 36점 중에서 고릅니다. 완성한 명화에는 ✓가 붙습니다.\n사진은 이 기기 안에서 퍼즐에만 쓰이고, 어디로도 보내지 않습니다.",
      "먼저 완성된 그림이 나옵니다. 화면을 탭하면 시작합니다.\n조각을 손가락으로 누른 채 바꾸고 싶은 곳까지 옮겨서 떼면 두 조각이 서로 바뀝니다.\n제자리에 들어간 조각에는 ✓가 붙습니다. 모두 맞추면 완성입니다.",
      "위의 작은 그림(견본)을 누르면 크게 볼 수 있습니다. 아무 곳이나 누르면 돌아옵니다.\n“힌트”를 누르면 조각 1개가 제자리에 들어갑니다(“이동 횟수”가 1 늘어납니다).\n중간에 그만하려면 “홈으로”를 누르세요. 중간에 그만둔 퍼즐은 기록에 남지 않습니다.",
      "완성하면 걸린 “시간”과 “이동 횟수”, ⭐이 나옵니다. 빨리 맞출수록 ⭐이 늘어납니다(최대 3개).\n명화라면 작품 이름과 화가도 나옵니다.\n“다시 하기”를 누르면 같은 그림을 한 번 더 하고, “다른 사진으로”를 누르면 그림을 다시 고를 수 있습니다.",
      "홈에 “플레이 일수”와 “플레이 횟수”가 나옵니다.\n“기록 보기”의 달력에서는 플레이한 날에 난이도별 횟수가 색으로 표시됩니다(주황은 초급, 파랑은 중급, 초록은 고급). 날짜를 누르면 그날의 기록을 볼 수 있습니다.\n기록은 이 기기 안에만 남고 어디에도 보내지지 않습니다. 가입도 필요 없습니다.",
      "홈 오른쪽 위의 “설정”에서 “언어”, “글자 크기”, “소리”, “음악”을 바꿀 수 있습니다.\n이 안내는 “설정”의 “하는 방법 다시 보기”로 언제든지 다시 볼 수 있습니다."
    ] },
  es: { title:"Cómo se juega", step:"{n} / {m}", prev:"Anterior", next:"Siguiente", start:"Empezar", again:"Ver otra vez cómo se juega",
    heads:[
      "Te damos la bienvenida",
      "Cómo empezar",
      "Cómo elegir la imagen",
      "Cómo se arma el rompecabezas",
      "Si te atascas",
      "Al terminar",
      "Registros",
      "Ver mejor y sonido"
    ],
    bodies:[
      "Con esta app haces rompecabezas con tus propias fotos o con cuadros famosos.\nMueve las piezas con el dedo hasta recomponer la imagen.\nElige tu idioma aquí abajo. También puedes cambiarlo después en «Ajustes».",
      "En la pantalla de inicio, pulsa «Empezar».\nElige la dificultad: «Fácil» (4 piezas), «Medio» (9 piezas) o «Difícil» (16 piezas).\nLuego elige la imagen del rompecabezas.",
      "«Elegir del álbum» usa una foto de tu teléfono.\n«Tomar una foto» usa una foto que haces en ese momento.\nCon «Usar una muestra» eliges entre 36 cuadros famosos. Los cuadros que completas llevan un ✓.\nTu foto solo se usa para el rompecabezas en este dispositivo y no se envía a ningún sitio.",
      "Primero se muestra la imagen terminada. Toca la pantalla para empezar.\nMantén el dedo sobre una pieza, llévala adonde quieras y suéltala: las dos piezas se intercambian.\nUna pieza en su sitio lleva un ✓. Cuando todas están en su sitio, el rompecabezas está completo.",
      "Pulsa la imagen pequeña (el modelo) de arriba para verla en grande. Pulsa en cualquier sitio para volver.\nPulsa «Pista» y una pieza irá a su sitio (suma 1 a los «Movimientos»).\nPara dejarlo a mitad, pulsa «Inicio». Un rompecabezas que dejas a mitad no se guarda en los registros.",
      "Al completarlo verás el «Tiempo», los «Movimientos» y ⭐. Cuanto más rápido, más ⭐ (hasta 3).\nSi es un cuadro famoso, también verás su título y su autor.\n«Otra vez» repite la misma imagen y «Otra foto» te deja elegir otra.",
      "La pantalla de inicio muestra «Días jugados» y «Veces jugadas».\nEn el calendario de «Ver registros», los días en que jugaste muestran las veces con un color por dificultad (naranja: Fácil, azul: Medio, verde: Difícil). Pulsa un día para ver sus registros.\nTus registros se quedan solo en este dispositivo y no se envían a ningún sitio. No hace falta registrarse.",
      "En «Ajustes», arriba a la derecha de la pantalla de inicio, puedes cambiar «Idioma», «Tamaño del texto», «Sonido» y «Música».\nPuedes volver a ver esta guía cuando quieras con «Ver otra vez cómo se juega» en «Ajustes»."
    ] },
  pt: { title:"Como jogar", step:"{n} / {m}", prev:"Anterior", next:"Próximo", start:"Começar", again:"Ver de novo como jogar",
    heads:[
      "Boas-vindas",
      "Como começar",
      "Como escolher a imagem",
      "Como montar",
      "Se ficar difícil",
      "Ao terminar",
      "Registros",
      "Ver melhor e som"
    ],
    bodies:[
      "Neste app você monta quebra-cabeças com suas próprias fotos ou com pinturas famosas.\nMova as peças com o dedo para remontar a imagem.\nEscolha o idioma aqui embaixo. Você também pode mudá-lo depois em “Ajustes”.",
      "Na tela inicial, toque em “Começar”.\nEscolha a dificuldade: “Fácil” (4 peças), “Médio” (9 peças) ou “Difícil” (16 peças).\nDepois escolha a imagem do quebra-cabeça.",
      "“Escolher do álbum” usa uma foto do seu celular.\n“Tirar uma foto” usa uma foto tirada na hora.\nEm “Usar uma amostra” você escolhe entre 36 pinturas famosas. As pinturas que você completou ganham um ✓.\nSua foto só é usada no quebra-cabeça, neste aparelho, e não é enviada a lugar nenhum.",
      "Primeiro aparece a imagem pronta. Toque na tela para começar.\nSegure uma peça com o dedo, leve-a até onde quer e solte: as duas peças trocam de lugar.\nUma peça no lugar certo ganha um ✓. Quando todas estiverem no lugar, o quebra-cabeça está completo.",
      "Toque na imagem pequena (o modelo) no alto para vê-la grande. Toque em qualquer lugar para voltar.\nToque em “Dica” e uma peça vai para o lugar certo (soma 1 aos “Movimentos”).\nPara parar no meio, toque em “Início”. Um quebra-cabeça interrompido não fica nos registros.",
      "Ao completar, aparecem o “Tempo”, os “Movimentos” e ⭐. Quanto mais rápido, mais ⭐ (até 3).\nSe for uma pintura famosa, aparecem também o título e o autor.\n“De novo” repete a mesma imagem e “Outra foto” deixa você escolher outra.",
      "A tela inicial mostra “Dias jogados” e “Vezes jogadas”.\nNo calendário de “Ver registros”, os dias em que você jogou mostram as vezes com uma cor para cada dificuldade (laranja: Fácil, azul: Médio, verde: Difícil). Toque num dia para ver os registros dele.\nSeus registros ficam só neste aparelho e não são enviados a lugar nenhum. Não é preciso cadastro.",
      "Em “Ajustes”, no canto superior direito da tela inicial, você pode mudar “Idioma”, “Tamanho do texto”, “Som” e “Música”.\nVocê pode ver este guia de novo quando quiser em “Ver de novo como jogar”, dentro de “Ajustes”."
    ] },
  fr: { title:"Comment jouer", step:"{n} / {m}", prev:"Précédent", next:"Suivant", start:"Commencer", again:"Revoir comment jouer",
    heads:[
      "Bienvenue",
      "Pour commencer",
      "Choisir l'image",
      "Comment faire le puzzle",
      "En cas de difficulté",
      "Une fois terminé",
      "Historique",
      "Lisibilité et son"
    ],
    bodies:[
      "Avec cette application, vous faites des puzzles avec vos propres photos ou avec des tableaux célèbres.\nDéplacez les pièces avec le doigt pour reconstituer l'image.\nChoisissez votre langue ci-dessous. Vous pourrez aussi la changer plus tard dans « Réglages ».",
      "Sur l'écran d'accueil, touchez « Commencer ».\nChoisissez la difficulté : « Facile » (4 pièces), « Moyen » (9 pièces) ou « Difficile » (16 pièces).\nChoisissez ensuite l'image du puzzle.",
      "« Choisir dans l'album » utilise une photo de votre téléphone.\n« Prendre une photo » utilise une photo prise sur le moment.\n« Utiliser un exemple » permet de choisir parmi 36 tableaux célèbres. Les tableaux terminés portent un ✓.\nVotre photo sert seulement au puzzle, sur cet appareil, et n'est envoyée nulle part.",
      "D'abord, l'image terminée s'affiche. Touchez l'écran pour commencer.\nGardez le doigt sur une pièce, amenez-la où vous voulez et relâchez : les deux pièces échangent leur place.\nUne pièce bien placée porte un ✓. Quand toutes sont en place, le puzzle est terminé.",
      "Touchez la petite image (le modèle) en haut pour l'agrandir. Touchez n'importe où pour revenir.\nTouchez « Indice » et une pièce se met à sa place (cela ajoute 1 aux « Coups »).\nPour arrêter en cours de route, touchez « Accueil ». Un puzzle arrêté en cours de route n'est pas enregistré dans l'historique.",
      "Quand le puzzle est terminé, s'affichent le « Temps », les « Coups » et ⭐. Plus vous êtes rapide, plus vous avez de ⭐ (jusqu'à 3).\nPour un tableau célèbre, son titre et son auteur s'affichent aussi.\n« Encore » refait la même image et « Autre photo » permet d'en choisir une autre.",
      "L'écran d'accueil montre « Jours joués » et « Parties jouées ».\nDans le calendrier de « Voir l'historique », les jours où vous avez joué indiquent le nombre de parties avec une couleur par difficulté (orange : Facile, bleu : Moyen, vert : Difficile). Touchez un jour pour voir son historique.\nVotre historique reste uniquement sur cet appareil et n'est envoyé nulle part. Aucune inscription n'est nécessaire.",
      "Dans « Réglages », en haut à droite de l'accueil, vous pouvez changer « Langue », « Taille du texte », « Son » et « Musique ».\nVous pouvez revoir ce guide à tout moment avec « Revoir comment jouer » dans « Réglages »."
    ] },
  de: { title:"So wird gespielt", step:"{n} / {m}", prev:"Vorherige", next:"Weiter", start:"Loslegen", again:"Spielanleitung noch einmal ansehen",
    heads:[
      "Willkommen",
      "So fangen Sie an",
      "Ein Bild wählen",
      "So legen Sie das Puzzle",
      "Wenn Sie nicht weiterkommen",
      "Wenn Sie fertig sind",
      "Verlauf",
      "Besser lesen und Ton"
    ],
    bodies:[
      "Mit dieser App legen Sie Puzzles aus Ihren eigenen Fotos oder aus berühmten Gemälden.\nSchieben Sie die Teile mit dem Finger, bis das Bild wieder ganz ist.\nWählen Sie unten Ihre Sprache. Sie können sie später auch unter „Einstellungen“ ändern.",
      "Tippen Sie auf dem Startbildschirm auf „Start“.\nWählen Sie die Schwierigkeit: „Leicht“ (4 Teile), „Mittel“ (9 Teile) oder „Schwer“ (16 Teile).\nWählen Sie dann das Bild für Ihr Puzzle.",
      "„Aus Album wählen“ nimmt ein Foto aus Ihrem Handy.\n„Foto aufnehmen“ nimmt ein Foto, das Sie gerade machen.\nBei „Beispiel verwenden“ wählen Sie aus 36 berühmten Gemälden. Fertige Gemälde bekommen ein ✓.\nIhr Foto wird nur auf diesem Gerät für das Puzzle benutzt und nirgendwohin gesendet.",
      "Zuerst sehen Sie das fertige Bild. Tippen Sie auf den Bildschirm, um zu beginnen.\nHalten Sie ein Teil mit dem Finger fest, ziehen Sie es an die gewünschte Stelle und lassen Sie los: Die beiden Teile tauschen die Plätze.\nEin Teil am richtigen Platz bekommt ein ✓. Wenn alle Teile richtig liegen, ist das Puzzle fertig.",
      "Tippen Sie oben auf das kleine Bild (die Vorlage), um es groß zu sehen. Tippen Sie irgendwohin, um zurückzukehren.\nTippen Sie auf „Tipp“, dann kommt ein Teil an seinen Platz (die „Züge“ erhöhen sich um 1).\nUm vorzeitig aufzuhören, tippen Sie unten auf „Start“. Ein vorzeitig beendetes Puzzle wird nicht gespeichert.",
      "Wenn das Puzzle fertig ist, sehen Sie „Zeit“, „Züge“ und ⭐. Je schneller Sie sind, desto mehr ⭐ gibt es (bis zu 3).\nBei einem berühmten Gemälde sehen Sie auch den Titel und den Maler.\n„Nochmal“ legt dasselbe Bild noch einmal, und mit „Anderes Foto“ wählen Sie ein anderes Bild.",
      "Der Startbildschirm zeigt „Gespielte Tage“ und „Gespielte Runden“.\nIm Kalender unter „Verlauf ansehen“ zeigen die Tage, an denen Sie gespielt haben, die Anzahl in einer Farbe je Schwierigkeit (Orange: Leicht, Blau: Mittel, Grün: Schwer). Tippen Sie auf einen Tag, um den Verlauf zu sehen.\nIhr Verlauf bleibt nur auf diesem Gerät und wird nirgendwohin gesendet. Eine Anmeldung ist nicht nötig.",
      "Unter „Einstellungen“ oben rechts auf dem Startbildschirm können Sie „Sprache“, „Textgröße“, „Ton“ und „Musik“ ändern.\nDiese Anleitung öffnen Sie jederzeit wieder mit „Spielanleitung noch einmal ansehen“ unter „Einstellungen“."
    ] },
  it: { title:"Come si gioca", step:"{n} / {m}", prev:"Indietro", next:"Avanti", start:"Inizia", again:"Rivedi come si gioca",
    heads:[
      "Benvenuti",
      "Come iniziare",
      "Scegliere l'immagine",
      "Come si fa il puzzle",
      "Se ti blocchi",
      "Alla fine",
      "Archivio",
      "Leggere meglio e suoni"
    ],
    bodies:[
      "Con questa app fai puzzle con le tue foto o con dipinti famosi.\nSposta i pezzi con il dito per ricomporre l'immagine.\nScegli la lingua qui sotto. Potrai cambiarla anche dopo in «Impostazioni».",
      "Nella schermata iniziale tocca «Inizia».\nScegli la difficoltà: «Facile» (4 pezzi), «Medio» (9 pezzi) o «Difficile» (16 pezzi).\nPoi scegli l'immagine del puzzle.",
      "«Scegli dall'album» usa una foto del tuo telefono.\n«Scatta una foto» usa una foto scattata al momento.\nCon «Usa un esempio» scegli tra 36 dipinti famosi. I dipinti completati hanno un ✓.\nLa tua foto serve solo per il puzzle su questo dispositivo e non viene inviata da nessuna parte.",
      "Prima compare l'immagine finita. Tocca lo schermo per iniziare.\nTieni il dito su un pezzo, portalo dove vuoi e lascialo: i due pezzi si scambiano di posto.\nUn pezzo al posto giusto ha un ✓. Quando tutti i pezzi sono a posto, il puzzle è completo.",
      "Tocca l'immagine piccola (il modello) in alto per vederla grande. Tocca un punto qualsiasi per tornare.\nTocca «Suggerimento» e un pezzo va al suo posto (le «Mosse» aumentano di 1).\nPer smettere a metà, tocca «Home». Un puzzle interrotto a metà non viene salvato nell'archivio.",
      "Quando il puzzle è completo vedi il «Tempo», le «Mosse» e ⭐. Più sei veloce, più ⭐ ottieni (fino a 3).\nSe è un dipinto famoso, vedi anche il titolo e l'autore.\n«Di nuovo» rifà la stessa immagine e «Altra foto» ti fa scegliere un'altra immagine.",
      "La schermata iniziale mostra «Giorni giocati» e «Volte giocate».\nNel calendario di «Vedi archivio», i giorni in cui hai giocato mostrano le volte con un colore per difficoltà (arancione: Facile, blu: Medio, verde: Difficile). Tocca un giorno per vederne l'archivio.\nL'archivio resta solo su questo dispositivo e non viene inviato da nessuna parte. Non serve registrarsi.",
      "In «Impostazioni», in alto a destra nella schermata iniziale, puoi cambiare «Lingua», «Dimensione testo», «Suono» e «Musica».\nPuoi rivedere questa guida quando vuoi con «Rivedi come si gioca» in «Impostazioni»."
    ] },
  nl: { title:"Zo speel je", step:"{n} / {m}", prev:"Vorige", next:"Volgende", start:"Beginnen", again:"Nog eens bekijken hoe je speelt",
    heads:[
      "Welkom",
      "Zo begin je",
      "Een plaatje kiezen",
      "Zo puzzel je",
      "Kom je er niet uit?",
      "Als je klaar bent",
      "Records",
      "Beter lezen en geluid"
    ],
    bodies:[
      "Met deze app maak je puzzels van je eigen foto's of van beroemde schilderijen.\nSchuif de stukjes met je vinger tot het plaatje weer heel is.\nKies hieronder je taal. Je kunt die later ook wijzigen bij “Instellingen”.",
      "Tik op het beginscherm op “Start”.\nKies de moeilijkheid: “Makkelijk” (4 stukjes), “Gemiddeld” (9 stukjes) of “Moeilijk” (16 stukjes).\nKies daarna het plaatje voor je puzzel.",
      "“Kiezen uit album” gebruikt een foto van je telefoon.\n“Foto maken” gebruikt een foto die je op dat moment maakt.\nBij “Voorbeeld gebruiken” kies je uit 36 beroemde schilderijen. Schilderijen die je af hebt, krijgen een ✓.\nJe foto wordt alleen op dit apparaat voor de puzzel gebruikt en nergens naartoe gestuurd.",
      "Eerst zie je het afgemaakte plaatje. Tik op het scherm om te beginnen.\nHoud een stukje vast met je vinger, schuif het naar de plek die je wilt en laat los: de twee stukjes ruilen van plaats.\nEen stukje op de goede plek krijgt een ✓. Als alle stukjes goed liggen, is de puzzel klaar.",
      "Tik bovenaan op het kleine plaatje (het voorbeeld) om het groot te zien. Tik ergens om terug te gaan.\nTik op “Hint” en er gaat één stukje naar de goede plek (je “Zetten” gaan 1 omhoog).\nWil je halverwege stoppen, tik dan op “Home”. Een puzzel die je halverwege stopt, wordt niet bewaard.",
      "Als de puzzel klaar is, zie je je “Tijd”, je “Zetten” en ⭐. Hoe sneller, hoe meer ⭐ (tot 3).\nBij een beroemd schilderij zie je ook de titel en de schilder.\nMet “Nog een keer” doe je hetzelfde plaatje nog eens, en met “Andere foto” kies je een ander plaatje.",
      "Het beginscherm toont “Gespeelde dagen” en “Keer gespeeld”.\nIn de kalender van “Records bekijken” tonen de dagen waarop je speelde het aantal keer in een kleur per moeilijkheid (oranje: Makkelijk, blauw: Gemiddeld, groen: Moeilijk). Tik op een dag om de records van die dag te zien.\nJe records blijven alleen op dit apparaat en worden nergens naartoe gestuurd. Aanmelden is niet nodig.",
      "Bij “Instellingen” rechtsboven op het beginscherm kun je “Taal”, “Tekstgrootte”, “Geluid” en “Muziek” wijzigen.\nDeze uitleg kun je altijd opnieuw bekijken met “Nog eens bekijken hoe je speelt” bij “Instellingen”."
    ] },
  pl: { title:"Jak grać", step:"{n} / {m}", prev:"Poprzednia", next:"Dalej", start:"Zacznij", again:"Zobacz ponownie, jak grać",
    heads:[
      "Witamy",
      "Jak zacząć",
      "Wybór obrazu",
      "Jak układać",
      "Gdy utkniesz",
      "Po ułożeniu",
      "Zapisy",
      "Czytelność i dźwięk"
    ],
    bodies:[
      "W tej aplikacji układasz puzzle z własnych zdjęć lub ze słynnych obrazów.\nPrzesuwaj elementy palcem, aż obraz znów będzie cały.\nWybierz język poniżej. Możesz go też zmienić później przyciskiem „Ustawienia”.",
      "Na ekranie głównym naciśnij „Start”.\nWybierz poziom trudności: „Łatwy” (4 elementy), „Średni” (9 elementów) lub „Trudny” (16 elementów).\nNastępnie wybierz obraz do puzzli.",
      "„Wybierz z albumu” używa zdjęcia z telefonu.\n„Zrób zdjęcie” używa zdjęcia zrobionego od razu.\nPrzycisk „Użyj przykładu” pozwala wybrać spośród 36 słynnych obrazów. Ukończone obrazy mają ✓.\nTwoje zdjęcie służy tylko do puzzli na tym urządzeniu i nie jest nigdzie wysyłane.",
      "Najpierw pokazuje się gotowy obraz. Dotknij ekranu, aby zacząć.\nPrzytrzymaj element palcem, przesuń go w wybrane miejsce i puść: dwa elementy zamienią się miejscami.\nElement na właściwym miejscu ma ✓. Gdy wszystkie są na miejscu, puzzle są ułożone.",
      "Naciśnij mały obrazek (wzór) na górze, aby zobaczyć go w dużym rozmiarze. Naciśnij w dowolnym miejscu, aby wrócić.\nNaciśnij „Podpowiedź”, a jeden element trafi na swoje miejsce („Ruchy” wzrosną o 1).\nAby przerwać, naciśnij „Start” na dole. Przerwane puzzle nie są zapisywane.",
      "Po ułożeniu zobaczysz „Czas”, „Ruchy” i ⭐. Im szybciej, tym więcej ⭐ (do 3).\nPrzy słynnym obrazie zobaczysz też tytuł i autora.\n„Jeszcze raz” układa ten sam obraz jeszcze raz, a „Inne zdjęcie” pozwala wybrać inny obraz.",
      "Ekran główny pokazuje „Dni gry” i „Rozegrane gry”.\nW kalendarzu pod przyciskiem „Zobacz zapisy” dni z grą pokazują liczbę gier w kolorze każdego poziomu (pomarańczowy: Łatwy, niebieski: Średni, zielony: Trudny). Naciśnij dzień, aby zobaczyć jego zapisy.\nZapisy zostają tylko na tym urządzeniu i nie są nigdzie wysyłane. Rejestracja nie jest potrzebna.",
      "Przyciskiem „Ustawienia” w prawym górnym rogu ekranu głównego możesz zmienić „Język”, „Rozmiar tekstu”, „Dźwięk” i „Muzyka”.\nTen przewodnik możesz zobaczyć ponownie w każdej chwili: naciśnij „Ustawienia”, a potem „Zobacz ponownie, jak grać”."
    ] },
  ru: { title:"Как играть", step:"{n} / {m}", prev:"Назад", next:"Далее", start:"Начать", again:"Снова посмотреть, как играть",
    heads:[
      "Добро пожаловать",
      "Как начать",
      "Выбор картинки",
      "Как собирать",
      "Если не получается",
      "Когда пазл собран",
      "Записи",
      "Удобство и звук"
    ],
    bodies:[
      "В этом приложении вы собираете пазлы из своих фотографий или из знаменитых картин.\nПередвигайте детали пальцем, пока картинка снова не станет целой.\nВыберите язык ниже. Потом его можно сменить в разделе «Настройки».",
      "На главном экране нажмите «Начать».\nВыберите сложность: «Лёгкий» (4 детали), «Средний» (9 деталей) или «Сложный» (16 деталей).\nЗатем выберите картинку для пазла.",
      "«Выбрать из альбома» берёт фото из вашего телефона.\n«Сделать фото» берёт фото, снятое прямо сейчас.\nВ разделе «Использовать образец» можно выбрать одну из 36 знаменитых картин. Собранные картины отмечаются ✓.\nВаше фото используется только для пазла на этом устройстве и никуда не отправляется.",
      "Сначала показывается готовая картинка. Коснитесь экрана, чтобы начать.\nПрижмите деталь пальцем, перетащите её туда, куда нужно, и отпустите: две детали поменяются местами.\nДеталь на своём месте отмечается ✓. Когда все детали на месте, пазл собран.",
      "Нажмите маленькую картинку (образец) вверху, чтобы увидеть её крупно. Нажмите в любом месте, чтобы вернуться.\nНажмите «Подсказка», и одна деталь встанет на своё место («Ходы» увеличатся на 1).\nЧтобы закончить посередине, нажмите «Домой». Незаконченный пазл не сохраняется в записях.",
      "Когда пазл собран, вы увидите «Время», «Ходы» и ⭐. Чем быстрее, тем больше ⭐ (до 3).\nДля знаменитой картины показываются также её название и автор.\n«Ещё раз» повторяет ту же картинку, а «Другое фото» позволяет выбрать другую.",
      "На главном экране видны «Дней игры» и «Всего игр».\nВ календаре раздела «Посмотреть записи» у дней, когда вы играли, число игр показано цветом по сложности (оранжевый: Лёгкий, синий: Средний, зелёный: Сложный). Нажмите на день, чтобы увидеть его записи.\nЗаписи хранятся только на этом устройстве и никуда не отправляются. Регистрация не нужна.",
      "В разделе «Настройки» справа вверху на главном экране можно изменить «Язык», «Размер текста», «Звук» и «Музыка».\nЭто руководство можно снова открыть в любое время кнопкой «Снова посмотреть, как играть» в разделе «Настройки»."
    ] },
  tr: { title:"Nasıl oynanır", step:"{n} / {m}", prev:"Geri", next:"İleri", start:"Başla", again:"Nasıl oynanır, tekrar bak",
    heads:[
      "Hoş geldiniz",
      "Nasıl başlanır",
      "Resim seçme",
      "Yapboz nasıl yapılır",
      "Takılırsanız",
      "Bitirince",
      "Kayıtlar",
      "Kolay okuma ve ses"
    ],
    bodies:[
      "Bu uygulamada kendi fotoğraflarınızla ya da ünlü tablolarla yapboz yaparsınız.\nParçaları parmağınızla kaydırarak resmi yeniden tamamlarsınız.\nDili aşağıdan seçin. Daha sonra “Ayarlar” bölümünden de değiştirebilirsiniz.",
      "Ana sayfada “Başla” düğmesine basın.\nZorluğu seçin: “Kolay” (4 parça), “Orta” (9 parça) ya da “Zor” (16 parça).\nSonra yapboz için bir resim seçin.",
      "“Albümden seç” telefonunuzdaki bir fotoğrafı kullanır.\n“Fotoğraf çek” o anda çektiğiniz fotoğrafı kullanır.\n“Örnek kullan” ile 36 ünlü tablodan birini seçersiniz. Tamamladığınız tablolarda ✓ işareti olur.\nFotoğrafınız yalnızca bu cihazda yapboz için kullanılır ve hiçbir yere gönderilmez.",
      "Önce resmin bitmiş hali görünür. Başlamak için ekrana dokunun.\nBir parçayı parmağınızla basılı tutun, istediğiniz yere götürüp bırakın: iki parça yer değiştirir.\nDoğru yerdeki parçada ✓ işareti olur. Bütün parçalar yerine oturunca yapboz tamamlanır.",
      "Büyük görmek için üstteki küçük resme (örnek resim) dokunun. Geri dönmek için herhangi bir yere dokunun.\n“İpucu” düğmesine basınca bir parça doğru yerine gider (“Hamle” 1 artar).\nYarıda bırakmak için “Ana sayfa” düğmesine basın. Yarıda bırakılan yapboz kayıtlara geçmez.",
      "Yapboz tamamlanınca “Süre”, “Hamle” ve ⭐ görünür. Ne kadar hızlı biterseniz o kadar çok ⭐ alırsınız (en çok 3).\nÜnlü bir tabloysa adı ve ressamı da görünür.\n“Tekrar” aynı resmi bir daha yaptırır, “Başka fotoğraf” ile başka bir resim seçersiniz.",
      "Ana sayfada “Oynanan gün” ve “Oynama sayısı” görünür.\n“Kayıtları gör” takviminde oynadığınız günlerde her zorluk için ayrı renkte sayı görünür (turuncu: Kolay, mavi: Orta, yeşil: Zor). O günün kayıtlarını görmek için bir güne basın.\nKayıtlar yalnızca bu cihazda kalır ve hiçbir yere gönderilmez. Üyelik gerekmez.",
      "Ana sayfanın sağ üstündeki “Ayarlar” bölümünden “Dil”, “Yazı boyutu”, “Ses” ve “Müzik” ayarlarını değiştirebilirsiniz.\nBu rehberi “Ayarlar” bölümündeki “Nasıl oynanır, tekrar bak” düğmesiyle istediğiniz zaman yeniden görebilirsiniz."
    ] },
  hi: { title:"कैसे खेलें", step:"{n} / {m}", prev:"पिछला", next:"आगे", start:"शुरू करें", again:"कैसे खेलें, फिर से देखें",
    heads:[
      "स्वागत है",
      "कैसे शुरू करें",
      "चित्र कैसे चुनें",
      "पहेली कैसे खेलें",
      "अटक जाएँ तो",
      "पूरा होने पर",
      "रिकॉर्ड",
      "साफ़ दिखना और आवाज़"
    ],
    bodies:[
      "इस ऐप में आप अपनी फ़ोटो या मशहूर चित्रों से जिग्सॉ पहेली बनाते हैं।\nउंगली से टुकड़े खिसकाकर चित्र को फिर से पूरा करें।\nनीचे अपनी भाषा चुनें। बाद में “सेटिंग्स” में भी बदल सकते हैं।",
      "होम स्क्रीन पर “शुरू करें” दबाएँ।\nकठिनाई चुनें: “आसान” (4 टुकड़े), “मध्यम” (9 टुकड़े) या “कठिन” (16 टुकड़े)।\nफिर पहेली के लिए चित्र चुनें।",
      "“एल्बम से चुनें” से फ़ोन में रखी फ़ोटो इस्तेमाल होती है।\n“फ़ोटो लें” से उसी समय खींची गई फ़ोटो इस्तेमाल होती है।\n“नमूना उपयोग करें” में 36 मशहूर चित्रों में से चुनें। पूरे किए गए चित्रों पर ✓ लगता है।\nआपकी फ़ोटो सिर्फ़ इसी डिवाइस पर पहेली के लिए इस्तेमाल होती है और कहीं नहीं भेजी जाती।",
      "पहले पूरा बना चित्र दिखता है। शुरू करने के लिए स्क्रीन छुएँ।\nकिसी टुकड़े को उंगली से दबाए रखें, जहाँ चाहें वहाँ ले जाकर छोड़ दें: दोनों टुकड़े जगह बदल लेते हैं।\nसही जगह पर लगे टुकड़े पर ✓ लगता है। सारे टुकड़े सही जगह पर हों तो पहेली पूरी हो जाती है।",
      "ऊपर वाले छोटे चित्र (नमूना) को दबाएँ तो वह बड़ा दिखता है। कहीं भी दबाने पर वापस आ जाता है।\n“संकेत” दबाने पर एक टुकड़ा अपनी सही जगह पर चला जाता है (“चालें” 1 बढ़ जाती हैं)।\nबीच में रोकना हो तो “होम” दबाएँ। बीच में रोकी गई पहेली रिकॉर्ड में नहीं जुड़ती।",
      "पहेली पूरी होने पर “समय”, “चालें” और ⭐ दिखते हैं। जितनी जल्दी पूरी करें, उतने ज़्यादा ⭐ (3 तक)।\nमशहूर चित्र हो तो उसका नाम और चित्रकार भी दिखता है।\n“फिर से” से वही चित्र दोबारा बनाएँ, और “दूसरी फ़ोटो” से कोई और चित्र चुनें।",
      "होम स्क्रीन पर “खेले दिन” और “खेले बार” दिखते हैं।\n“रिकॉर्ड देखें” के कैलेंडर में जिन दिनों खेला हो, वहाँ हर कठिनाई की गिनती अलग रंग में दिखती है (नारंगी: आसान, नीला: मध्यम, हरा: कठिन)। उस दिन के रिकॉर्ड देखने के लिए दिन दबाएँ।\nरिकॉर्ड सिर्फ़ इसी डिवाइस में रहते हैं और कहीं नहीं भेजे जाते। रजिस्ट्रेशन की ज़रूरत नहीं।",
      "होम स्क्रीन के ऊपर दाईं ओर “सेटिंग्स” में “भाषा”, “अक्षर का आकार”, “ध्वनि” और “संगीत” बदल सकते हैं।\nयह गाइड कभी भी “सेटिंग्स” में “कैसे खेलें, फिर से देखें” से दोबारा देख सकते हैं।"
    ] },
};
Object.keys(LANG).forEach(k=>{
  LANG[k].guide = GUIDE[k];
  LANG[k].ui.guideTitle = GUIDE[k].title;   // せっていの見出し
  LANG[k].ui.guideAgain = GUIDE[k].again;   // せっていのボタン
});
