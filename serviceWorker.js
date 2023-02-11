const CACHE_NAME = "heart-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "assets/js/app.js",
  "assets/js/anime.min.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    catches.match(event.request).then(function (response) {
      if (response) return response;

      return fetch(event.request).then(function (response) {
        if (
          !response ||
          response.status !== 200 ||
          response.type === "basic" ||
          !(event.request.url.indexOf("http") === 0)
        ) {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
