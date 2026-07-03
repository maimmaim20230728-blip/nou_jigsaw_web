/* =========================================================
   脳活ジグソーパズル ― 共通設定データ
   ・言語に依存しない「対応言語」「難易度」「サンプル画像」定義
   ========================================================= */

/* ---- 対応言語（15言語）。表示順＝この順番 ---- */
const LANGS = [
  { code:'ja',    label:'日本語' },
  { code:'en',    label:'English' },
  { code:'zh',    label:'中文(简体)' },
  { code:'zh-TW', label:'中文(繁體)' },
  { code:'ko',    label:'한국어' },
  { code:'es',    label:'Español' },
  { code:'pt',    label:'Português' },
  { code:'fr',    label:'Français' },
  { code:'de',    label:'Deutsch' },
  { code:'it',    label:'Italiano' },
  { code:'nl',    label:'Nederlands' },
  { code:'pl',    label:'Polski' },
  { code:'ru',    label:'Русский' },
  { code:'tr',    label:'Türkçe' },
  { code:'hi',    label:'हिन्दी' },
];

/* ---- 難易度（ピース数＝縦横の分割数の2乗） ----
   星の基準は「速く・手数少なく」を目安にしたゆるい目安（対戦要素ではない） */
const LEVELS = [
  { id:'easy', n:2, pieces:4,  starSec:[20,40] },
  { id:'mid',  n:3, pieces:9,  starSec:[60,120] },
  { id:'hard', n:4, pieces:16, starSec:[120,240] },
];

/* ---- サンプル画像（パブリックドメインの名画12点・Wikimedia Commonsの忠実複製より） ----
   すべて作者没後70年超のPD。平面美術の忠実複製写真に新たな著作権は発生しない(PD-Art)
   タイトル・作者名の15言語訳は data/lang.js の ART（LANG[code].art）にある      */
const SAMPLES = [
  { id:'sunflowers',         artist:'vangogh',   src:'assets/samples/sunflowers.jpg' },          // ゴッホ「ひまわり」
  { id:'starry_night',       artist:'vangogh',   src:'assets/samples/starry_night.jpg' },        // ゴッホ「星月夜」
  { id:'cafe_terrace',       artist:'vangogh',   src:'assets/samples/cafe_terrace.jpg' },        // ゴッホ「夜のカフェテラス」
  { id:'great_wave',         artist:'hokusai',   src:'assets/samples/great_wave.jpg' },          // 北斎「富嶽三十六景 神奈川沖浪裏」
  { id:'tokaido_nihonbashi', artist:'hiroshige', src:'assets/samples/tokaido_nihonbashi.jpg' },  // 広重「東海道五十三次 日本橋」
  { id:'scream',             artist:'munch',     src:'assets/samples/scream.jpg' },              // ムンク「叫び」
  { id:'mona_lisa',          artist:'davinci',   src:'assets/samples/mona_lisa.jpg' },           // ダ・ヴィンチ「モナ・リザ」
  { id:'pearl_earring',      artist:'vermeer',   src:'assets/samples/pearl_earring.jpg' },       // フェルメール「真珠の耳飾りの少女」
  { id:'milkmaid',           artist:'vermeer',   src:'assets/samples/milkmaid.jpg' },            // フェルメール「牛乳を注ぐ女」
  { id:'water_lilies',       artist:'monet',     src:'assets/samples/water_lilies.jpg' },        // モネ「睡蓮」
  { id:'woman_parasol',      artist:'monet',     src:'assets/samples/woman_parasol.jpg' },       // モネ「日傘をさす女」
  { id:'impression_sunrise', artist:'monet',     src:'assets/samples/impression_sunrise.jpg' },  // モネ「印象・日の出」
  // ---- 追加12点（2026-07-03・計24点）----
  { id:'last_supper',        artist:'davinci',   src:'assets/samples/last_supper.jpg' },         // ダ・ヴィンチ「最後の晩餐」
  { id:'birth_of_venus',     artist:'botticelli',src:'assets/samples/birth_of_venus.jpg' },      // ボッティチェリ「ヴィーナスの誕生」
  { id:'kiss',               artist:'klimt',     src:'assets/samples/kiss.jpg' },                // クリムト「接吻」
  { id:'liberty',            artist:'delacroix', src:'assets/samples/liberty.jpg' },             // ドラクロワ「民衆を導く自由の女神」
  { id:'gleaners',           artist:'millet',    src:'assets/samples/gleaners.jpg' },            // ミレー「落穂拾い」
  { id:'moulin_galette',     artist:'renoir',    src:'assets/samples/moulin_galette.jpg' },      // ルノワール「ムーラン・ド・ラ・ギャレットの舞踏会」
  { id:'school_of_athens',   artist:'raphael',   src:'assets/samples/school_of_athens.jpg' },    // ラファエロ「アテナイの学堂」
  { id:'red_fuji',           artist:'hokusai',   src:'assets/samples/red_fuji.jpg' },            // 北斎「凱風快晴（赤富士）」
  { id:'mikaeri_bijin',      artist:'moronobu',  src:'assets/samples/mikaeri_bijin.jpg' },       // 菱川師宣「見返り美人図」
  { id:'fujin_raijin',       artist:'sotatsu',   src:'assets/samples/fujin_raijin.jpg' },        // 俵屋宗達「風神雷神図屏風」
  { id:'night_watch',        artist:'rembrandt', src:'assets/samples/night_watch.jpg' },         // レンブラント「夜警」
  { id:'las_meninas',        artist:'velazquez', src:'assets/samples/las_meninas.jpg' },         // ベラスケス「ラス・メニーナス」
];
