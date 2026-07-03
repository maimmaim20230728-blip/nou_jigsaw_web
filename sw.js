/* Service Worker ― 完全オフライン動作（全ファイルを端末にキャッシュ） */
const CACHE = 'soyogi-jigsaw-v3';
const ASSETS = [
  './', 'index.html', 'style.css', 'app.js', 'audio.js', 'store.js', 'puzzle.js',
  'data/config.js', 'data/lang.js',
  'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'assets/samples/sunflowers.jpg', 'assets/samples/starry_night.jpg', 'assets/samples/cafe_terrace.jpg',
  'assets/samples/great_wave.jpg', 'assets/samples/tokaido_nihonbashi.jpg', 'assets/samples/scream.jpg',
  'assets/samples/mona_lisa.jpg', 'assets/samples/pearl_earring.jpg', 'assets/samples/milkmaid.jpg',
  'assets/samples/water_lilies.jpg', 'assets/samples/woman_parasol.jpg', 'assets/samples/impression_sunrise.jpg',
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
  if(e.request.method !== 'GET') return;
  if(new URL(e.request.url).origin !== self.location.origin) return;  // 外部originはSW介入しない
  e.respondWith(
    caches.match(e.request).then(hit=> hit || fetch(e.request).then(res=>{
      const copy = res.clone();
      caches.open(CACHE).then(c=>c.put(e.request, copy)).catch(()=>{});
      return res;
    }).catch(()=> hit))
  );
});
