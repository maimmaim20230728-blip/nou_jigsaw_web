/* Service Worker ― 完全オフライン動作（全ファイルを端末にキャッシュ） */
const CACHE = 'soyogi-jigsaw-v10';
const ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'audio.js', 'store.js', 'tap.js', 'puzzle.js',
  'data/config.js', 'data/lang.js',
  'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'assets/samples/sunflowers.jpg', 'assets/samples/starry_night.jpg', 'assets/samples/cafe_terrace.jpg',
  'assets/samples/great_wave.jpg', 'assets/samples/tokaido_nihonbashi.jpg', 'assets/samples/scream.jpg',
  'assets/samples/mona_lisa.jpg', 'assets/samples/pearl_earring.jpg', 'assets/samples/milkmaid.jpg',
  'assets/samples/water_lilies.jpg', 'assets/samples/woman_parasol.jpg', 'assets/samples/impression_sunrise.jpg',
  'assets/samples/last_supper.jpg', 'assets/samples/birth_of_venus.jpg', 'assets/samples/kiss.jpg',
  'assets/samples/liberty.jpg', 'assets/samples/gleaners.jpg', 'assets/samples/moulin_galette.jpg',
  'assets/samples/school_of_athens.jpg', 'assets/samples/red_fuji.jpg', 'assets/samples/mikaeri_bijin.jpg',
  'assets/samples/fujin_raijin.jpg', 'assets/samples/night_watch.jpg', 'assets/samples/las_meninas.jpg',
  'assets/samples/almond_blossom.jpg', 'assets/samples/ohashi_rain.jpg', 'assets/samples/angelus.jpg',
  'assets/samples/grande_jatte.jpg', 'assets/samples/etoile.jpg', 'assets/samples/apples_oranges.jpg',
  'assets/samples/fifer.jpg', 'assets/samples/babel.jpg', 'assets/samples/wanderer.jpg',
  'assets/samples/ajisai_sokei.jpg', 'assets/samples/kakitsubata.jpg', 'assets/samples/edobee.jpg',
];

self.addEventListener('install', e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return;
  if(new URL(req.url).origin !== self.location.origin) return;  // 外部originはSW介入しない
  e.respondWith(
    caches.match(req).then(hit=> hit || fetch(req).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(req, copy)).catch(()=>{});
      return res;
    }).catch(()=>{
      // オフライン等でネットも失敗: ページ遷移要求ならキャッシュ済みの index.html を殻として返す
      if(req.mode === 'navigate') return caches.match('index.html');
      return Response.error();
    }))
  );
});
