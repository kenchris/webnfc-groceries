importScripts('workbox/workbox-v5.1.4/workbox-sw.js');
workbox.setConfig({
  modulePathPrefix: 'workbox/workbox-v5.1.4'
});
workbox.routing.registerRoute(({
  url
}) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com', new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'google-fonts',
  plugins: [new workbox.expiration.ExpirationPlugin({
    maxEntries: 20
  })]
}));
workbox.routing.registerRoute(({
  url
}) => url.pathname.endsWith('/manifest.json'), new workbox.strategies.StaleWhileRevalidate());
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);