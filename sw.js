/*const staticCacheName = 'site-static';
const assets = [
    '/',
    'index.html',
    '/js/app.js',
]


// install
self.addEventListener('install', evt =>{
    evt.waitUntil(
        caches.open(staticCacheName).then(cache =>{
            console.log("caching");
        cache.addAll(assets);
    })
    );
    //console.log("installed");
    
});


//activate

self.addEventListener('activate', evt =>{
    console.log('activated');
});


//fetch
self.addEventListener('fetch', evt =>{
    //console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        })
    );
});

*/