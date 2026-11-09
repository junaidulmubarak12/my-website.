// Kashmir Apple Guide: keeps the guide available without internet.
// Security notes: only our own named files are stored, only successful answers are stored,
// and weather, accounts and every other address always go straight to the internet.
const V = "apple-guide-v10";
const FILES = ["./", "index.html", "app.js", "config.js", "hinglish.js", "remind.js", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
for (let i = 1; i <= 15; i++) FILES.push("img/stage-" + i + ".jpg", "img/t-" + i + ".jpg");
try { importScripts("remind.js"); } catch (e) {}
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

// Weather reminders: shown only if the person turned them on. Some Android phones run this in the morning.
self.addEventListener("periodicsync", e => { if (e.tag === "weather") e.waitUntil(weatherCheck()); });
async function weatherCheck() {
  if (typeof REMIND === "undefined") return;
  const c = await caches.open("apple-remind"), r = await c.match(new URL("remind.json", self.registration.scope));
  if (!r) return;
  let s; try { s = await r.json(); } catch (e) { return; }
  const lat = +s.lat, lon = +s.lon;
  if (!(lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180)) return;
  const res = await fetch(REMIND.url(lat, lon));
  if (!res.ok) return;
  let j; try { j = await res.json(); } catch (e) { return; }
  const m = REMIND.messages(j && j.daily, s.lang);
  if (!m.length) return;
  await self.registration.showNotification(REMIND.title(), { body: m.join(" "), icon: "icon-192.png", badge: "icon-192.png", tag: "weather-today", lang: s.lang === "hi" ? "hi" : "en" });
}
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) if ("focus" in c) return c.focus();
    return self.clients.openWindow(self.registration.scope);
  }));
});
