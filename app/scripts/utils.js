
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

  var _lastState = history.state;

  function _replaceState() {
     console.log("replace undefined");
     _lastState = {};
     history.replaceState(_lastState, window.location.href);
  }

  function pushOpenedState(dialog) {
      console.log("push " + dialog.nodeName.toLowerCase());
      dialog.addEventListener('iron-overlay-canceled', _replaceState);

      _lastState = { id: dialog.nodeName.toLowerCase() };
      history.pushState( _lastState, window.location.href);
  }

  function onpopstate(event) {
      console.log("pop " + (event.state) ? event.state.id : undefined);
      let pendingOpen = event.state ? event.state.id : undefined;
      let pendingClose = _lastState ? _lastState.id : undefined;

      if (pendingClose) {
        let dialog = document.querySelector(pendingClose);
        if (dialog && dialog.opened) {
            dialog.close();
        }
      }

      if (pendingOpen) {
        let dialog = document.querySelector(pendingOpen);
        if (dialog && !dialog.opened) {
           dialog.open();
        }
      }

      _lastState = event.state;
  }

  window.addEventListener('popstate', onpopstate);