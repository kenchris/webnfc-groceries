/*
@license
Copyright (c) 2015, 2016 Intel Corporation. All rights reserved.
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
*/

(function(document) {
  'use strict';
  
  function finishLazyLoading() {
    // (Optional) Use native Shadow DOM if it's available in the browser.
    // WARNING! This will mess up the page.js router which uses event delegation
    // and expects to receive events from anchor tags. These events get re-targeted
    // by the Shadow DOM to point to <blog-app>
    // window.Polymer = window.Polymer || {dom: 'shadow'};
  
    var onImportLoaded = function() {
      var skeleton = document.getElementById('skeleton');
      skeleton.remove();
  
      console.log('Elements are upgraded!');
    };
  
    var link = document.querySelector('#bundle');
  
    if (link.import && link.import.readyState === 'complete') {
      onImportLoaded();
    } else {
      link.addEventListener('load', onImportLoaded);
    }
  }
  
  var webComponentsSupported = ('registerElement' in document &&
    'import' in document.createElement('link') &&
    'content' in document.createElement('template'));

  if (!webComponentsSupported) {
    var script = document.createElement('script');
    script.async = true;
    script.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
    script.onload = finishLazyLoading;
    document.head.appendChild(script);
  } else {
    finishLazyLoading();
  }

  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };

  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

})(document);
