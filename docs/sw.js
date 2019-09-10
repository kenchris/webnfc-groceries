/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/manifest/icon_512.svg",
    "revision": "7ff76dc03db11647ab8cfbb8dcc4ffe4"
  },
  {
    "url": "images/manifest/icon-128x128.png",
    "revision": "a38314165a79cafb37628f08ce28d3bc"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "037de7aa26bc178e3bfac08606ae1525"
  },
  {
    "url": "images/manifest/icon-152x152.png",
    "revision": "4e77654d8e67ffadefc3231586449e80"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "9a0101bb9e1d8e5b77ecedb4745b8271"
  },
  {
    "url": "images/manifest/icon-384x384.png",
    "revision": "46c3f95cf3785f4e15cfa1db97daec83"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "5f63d6c6baed34b3b64480653f3e1c7d"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "aa512091b42e98ec99bbe026ecea324c"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "0042af11e45f95e4db7441a0b07f233f"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "28f4c5079bef55d5943ba99595aa89c3"
  },
  {
    "url": "index.html",
    "revision": "51608d38bd70274b7cc53fba8f2851f3"
  },
  {
    "url": "main-app.js",
    "revision": "072629487c8450fba8bab75029576775"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.551c76d38426de62c33d8c61995c1d0f.js",
    "revision": "5887fb169d22f464b05bbd25290fa453"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/webcomponents.88b4b5855ede008ecad6bbdd4a69e57d.js",
    "revision": "ea4c0648b79eb102853d55e80d75daf4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
