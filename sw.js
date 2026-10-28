// Kashmir Apple Guide: keeps the guide available without internet.
const V = "apple-guide-v2";
const FILES = ["./apple-guide-live.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== V && k.startsWith("apple-guide")).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET") return;
  if (u.origin === location.origin) {
    // Our own files: use the internet when it works, otherwise the saved copy.
    e.respondWith(fetch(r).then(res => {
      const copy = res.clone();
      caches.open(V).then(c => c.put(r, copy));
      return res;
    }).catch(() => caches.match(r).then(m => m || (r.mode === "navigate" ? caches.match("./apple-guide-live.html") : undefined))));
    return;
  }
  if (/(^|\.)(fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(u.hostname)) {
    // Fonts: show the saved copy straight away and refresh it in the background.
    e.respondWith(caches.open(V).then(c => c.match(r).then(m => {
      const f = fetch(r).then(res => { c.put(r, res.clone()); return res; }).catch(() => m);
      return m || f;
    })));
  }
  // Weather and accounts always use the internet and are never saved here.
});
