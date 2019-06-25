//Installation
self.addEventListener("install", (event) => {
	event.waitUntil(caches.open("Example").then((cache) => {
		return cache.addAll([
		]);
	}))
})
// fetch
self.addEventListener("fetch", (event) => {
	event.respondWith(caches.match(event.request).then((res) => {
		return res || fetch(event.request).then((response) => {
			return caches.open("Example").then((cache) => {
				cache.put(event.request, response.clone());
				return response;
			})
		})
	}))
})
