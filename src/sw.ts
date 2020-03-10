/* eslint-env serviceworker */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (self.workbox) {
  const maxAgeSeconds = 60 * 60 * 24 * 14;

  const pluginOptions = {
    maxAgeSeconds: maxAgeSeconds
  };

  const expirationPlugin = new self.workbox.expiration.Plugin(pluginOptions);

  // Cache pages
  self.workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "document",
    new self.workbox.strategies.NetworkFirst({
      cacheName: "pages",
      plugins: [expirationPlugin]
    })
  );

  // Cache CSS
  self.workbox.routing.registerRoute(
    ({ event }) => event.request.destination === "style",
    new self.workbox.strategies.StaleWhileRevalidate({
      cacheName: "css",
      plugins: [expirationPlugin]
    })
  );

  // Cache assets
  self.workbox.routing.registerRoute(
    /\/assets\//,
    new self.workbox.strategies.CacheFirst({
      cacheName: "static-assets",
      plugins: [expirationPlugin]
    })
  );

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  self.workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new self.workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
      plugins: [expirationPlugin]
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  self.workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new self.workbox.strategies.CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
        new self.workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
        new self.workbox.expiration.Plugin({
          ...pluginOptions,
          maxEntries: 30
        })
      ]
    })
  );

  self.workbox.googleAnalytics.initialize();
} else {
  console.error("Workbox didn't load");
}
