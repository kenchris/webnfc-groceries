
window.requestIdleCallback =
  window.requestIdleCallback ||
  function (cb) {
    var start = Date.now();
    return setTimeout(function () {
      cb({
        didTimeout: false,
        timeRemaining: function () {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, 1);
  }

  function whenIdle() {
    return new Promise(resolve => {
       requestIdleCallback(() => resolve());
    });
  }

  function ensureUpgraded(elem) {
    return new Promise((resolve, reject) => {
      if (Polymer.isInstance(elem)) {
        resolve(elem);
        return;
      }

      let name = elem.nodeName.toLowerCase();
      console.log(`fuzzy loading elements/${name}/${name}.html`);
      Polymer.Base.importHref(`elements/${name}/${name}.html`,
        () => resolve(elem),
        () => reject());
    });
  }