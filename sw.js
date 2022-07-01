self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(['./', './assets/icons/192.png', './assets/icons/512.png', './assets/icons/favicon.png']);
        })
    );
    console.log("Installed");
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});