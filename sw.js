importScripts('/cache-polyfill.js');

self.addEventListener('install',function(e) {
    e.waitUntil(
        caches.open('regisbafutwabo.github.io').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/css/resume.css',
                '/css/resume.min.css',
                '/js/resume.js',
                '/js/resume.min.js',
                '/vendor/bootstrap/css/bootstrap.min.css'
            ]);
})
);
});

self.addEventListener('fetch',function(event){
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response){
            return response || fetch(event.request);
        })
    );
});