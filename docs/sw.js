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
    "revision": "05490c16f80faa6abde8b7a90f2ef81b"
  },
  {
    "url": "main-app-926b2732.js",
    "revision": "9a894799940e0189d85354f40b1d31e7"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/webcomponents.cc3976af76b5e726e2a7e86686c930f1.js",
    "revision": "6d41a7c92156aec243e9ce5680bdf517"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
