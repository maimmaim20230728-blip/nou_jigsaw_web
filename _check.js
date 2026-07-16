/* =========================================================
   整合性チェック ― node _check.js で実行（push前に必須）
   ①LANGS 15言語が LANG に全部ある
   ②ui キーが全言語で ja と同じセット（欠け・余りを検出）
   ③SAMPLES の id 重複なし・作品id/作者id が全言語の art にある
   ④SAMPLES の画像ファイルが実在する
   ⑤sw.js の ASSETS に全サンプル画像が入っている
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const sandbox = { console };
vm.createContext(sandbox);
/* const宣言はサンドボックスのプロパティにならないため、連結して最後に値を返す */
const src = ['data/config.js', 'data/lang.js']
  .map(f => fs.readFileSync(path.join(ROOT, f), 'utf8')).join('\n')
  + '\n;({ LANGS: LANGS, LANG: LANG, SAMPLES: SAMPLES });';
const { LANGS, LANG, SAMPLES } = vm.runInContext(src, sandbox);

let errs = [];

/* ① 言語の存在 */
if (LANGS.length !== 15) errs.push('LANGSが15言語でない: ' + LANGS.length);
for (const l of LANGS) if (!LANG[l.code]) errs.push('LANGに無い言語: ' + l.code);

/* ② uiキー整合（ja基準） */
const jaKeys = Object.keys(LANG.ja.ui).sort();
for (const l of LANGS) {
  const keys = Object.keys(LANG[l.code].ui).sort();
  for (const k of jaKeys) if (!keys.includes(k)) errs.push(l.code + '.ui に欠けキー: ' + k);
  for (const k of keys) if (!jaKeys.includes(k)) errs.push(l.code + '.ui に余剰キー: ' + k);
}

/* ②' 必須キーの存在＆非空（プレビュー案内 makeThis など画面外で参照するキーの取りこぼし防止） */
const REQUIRED_UI = ['makeThis', 'hint', 'photoError'];
for (const l of LANGS) {
  const ui = LANG[l.code].ui || {};
  for (const k of REQUIRED_UI) if (!ui[k]) errs.push(l.code + '.ui に必須キーが無い/空: ' + k);
}

/* ③ SAMPLES と art 辞書 */
const ids = SAMPLES.map(s => s.id);
const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
if (dup.length) errs.push('SAMPLES idが重複: ' + dup.join(','));
const artists = [...new Set(SAMPLES.map(s => s.artist))];
for (const l of LANGS) {
  const art = LANG[l.code].art || {};
  for (const id of ids) if (!art[id]) errs.push(l.code + '.art に作品タイトルが無い: ' + id);
  for (const a of artists) if (!art[a]) errs.push(l.code + '.art に作者名が無い: ' + a);
  const valid = new Set([...ids, ...artists]);
  for (const k of Object.keys(art)) if (!valid.has(k)) errs.push(l.code + '.art に余剰キー(タイポ?): ' + k);
}

/* ④ 画像ファイル実在 */
for (const s of SAMPLES) {
  if (!fs.existsSync(path.join(ROOT, s.src))) errs.push('画像ファイルが無い: ' + s.src);
}

/* ⑤ sw.js のキャッシュ網羅 */
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
for (const s of SAMPLES) {
  if (!sw.includes("'" + s.src + "'")) errs.push('sw.js ASSETSに無い: ' + s.src);
}

if (errs.length) {
  console.log('NG (' + errs.length + '件)');
  errs.forEach(e => console.log('  - ' + e));
  process.exit(1);
} else {
  console.log('ALL OK  (言語:' + LANGS.length + ' サンプル:' + SAMPLES.length + '点 作者:' + artists.length + '名)');
}
