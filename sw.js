// Kashmir Apple Guide: keeps the guide available without internet.
// Security notes: only our own named files are stored, only successful answers are stored,
// and weather, accounts and every other address always go straight to the internet.
const V = "apple-guide-v4";
const FILES = ["apple-guide-live.html", "app.js", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
for (let i = 1; i <= 15; i++) FILES.push("img/stage-" + i + ".jpg", "img/t-" + i + ".jpg");
const ALLOWED = new Set(FILES.map(f => new URL(f, self.registration.scope).pathname));

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
    if (!ALLOWED.has(u.pathname)) return;                       // not one of our files: leave it alone
    e.respondWith(fetch(r).then(res => {
      if (res.ok && res.type === "basic") {
        const copy = res.clone();
        caches.open(V).then(c => c.put(u.origin + u.pathname, copy));   // one copy per file, query strings ignored
      }
      return res;
    }).catch(() => caches.match(u.origin + u.pathname).then(m => m || Response.error())));
    return;
  }
  if (u.protocol === "https:" && (u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com")) {
    e.respondWith(caches.open(V).then(c => c.match(r).then(m => {
      const f = fetch(r).then(res => { if (res.ok || res.type === "opaque") c.put(r, res.clone()); return res; }).catch(() => m || Response.error());
      return m || f;
    })));
  }
});
