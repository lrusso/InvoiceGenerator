const filesToCache = [
	"InvoiceGenerator.htm",
	"InvoiceGenerator.json",
	"InvoiceGenerator.png",
	"InvoiceGeneratorFavIcon_16x16.png",
	"InvoiceGeneratorFavIcon_192x192.png",
	"InvoiceGeneratorFavIcon_512x512.png",
	"InvoiceGeneratorShare.png"
];

const staticCacheName = "invoicegenerator-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});