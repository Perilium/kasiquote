const CACHE="kasiquote-v1";
const page=new URL("./index.html",self.registration.scope).href;

self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.add(page)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("message",event=>{
  if(event.data==="CHECK_CACHE"&&event.ports[0]){
    event.waitUntil(caches.open(CACHE).then(cache=>cache.match(page)).then(response=>event.ports[0].postMessage(response?"cached":"not-cached")));
  }
});
self.addEventListener("fetch",event=>{
  const request=event.request;
  if(request.method!=="GET"||new URL(request.url).origin!==location.origin)return;
  if(request.mode==="navigate"){
    event.respondWith(fetch(request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
      return response;
    }).catch(async()=>await caches.match(request)||await caches.match(page)));
  }
});