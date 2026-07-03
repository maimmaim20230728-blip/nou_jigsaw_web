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
   すべて作者没後70年超のPD。平面美術の忠実複製写真に新たな著作権は発生しない(PD-Art) */
const SAMPLES = [
  { id:'sunflowers',         src:'assets/samples/sunflowers.jpg' },          // ゴッホ「ひまわり」
  { id:'starry_night',       src:'assets/samples/starry_night.jpg' },        // ゴッホ「星月夜」
  { id:'cafe_terrace',       src:'assets/samples/cafe_terrace.jpg' },        // ゴッホ「夜のカフェテラス」
  { id:'great_wave',         src:'assets/samples/great_wave.jpg' },          // 北斎「富嶽三十六景 神奈川沖浪裏」
  { id:'tokaido_nihonbashi', src:'assets/samples/tokaido_nihonbashi.jpg' },  // 広重「東海道五十三次 日本橋」
  { id:'scream',             src:'assets/samples/scream.jpg' },              // ムンク「叫び」
  { id:'mona_lisa',          src:'assets/samples/mona_lisa.jpg' },           // ダ・ヴィンチ「モナ・リザ」
  { id:'pearl_earring',      src:'assets/samples/pearl_earring.jpg' },       // フェルメール「真珠の耳飾りの少女」
  { id:'milkmaid',           src:'assets/samples/milkmaid.jpg' },            // フェルメール「牛乳を注ぐ女」
  { id:'water_lilies',       src:'assets/samples/water_lilies.jpg' },        // モネ「睡蓮」
  { id:'woman_parasol',      src:'assets/samples/woman_parasol.jpg' },       // モネ「日傘をさす女」
  { id:'impression_sunrise', src:'assets/samples/impression_sunrise.jpg' },  // モネ「印象・日の出」
];
