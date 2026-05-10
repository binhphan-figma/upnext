const CACHE_NAME = "upnext-public-v1";
const APP_SHELL = [
  "/",
  "/offline",
  "/for-candidates",
  "/for-employers",
  "/faq",
  "/trust",
  "/ai-transparency",
  "/career-roadmap",
  "/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const isPrivateRoute = [
    "/admin",
    "/candidate",
    "/recruiter",
    "/account",
    "/notifications",
    "/auth"
  ].some((prefix) => url.pathname.startsWith(prefix));

  if (isPrivateRoute) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(fetch(request).catch(() => caches.match("/offline")));
    return;
  }

  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request)));
});
