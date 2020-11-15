function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { LitElement, html, css, customElement } from '../web_modules/lit-element.js';
import { query } from '../web_modules/lit-element/lib/decorators.js';
import "../web_modules/@material/mwc-button.js";
import "../web_modules/@material/mwc-checkbox.js";
import "../web_modules/@material/mwc-drawer.js";
import "../web_modules/@material/mwc-fab.js";
import "../web_modules/@material/mwc-formfield.js";
import "../web_modules/@material/mwc-top-app-bar.js";
import "../web_modules/@material/mwc-icon-button.js";
import "../web_modules/@material/mwc-icon-button-toggle.js";
import "../web_modules/@material/mwc-snackbar.js";
import "../web_modules/@material/mwc-dialog.js";
import "../web_modules/@material/mwc-textfield.js";
import "./groceries-list.js";
import { GroceryStore } from './grocery-store.js';
import { Workbox } from '../web_modules/workbox-window.js';
export let OnboardingWizard = _decorate([customElement('onboarding-wizard')], function (_initialize, _LitElement) {
  class OnboardingWizard extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingWizard,
    d: [{
      kind: "field",
      decorators: [query('mwc-dialog')],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
    #dialog {
      --mdc-dialog-max-width: 350px;
    }

    #container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 150px;
    }

    #bg-scan {
      width: 100px;
      height: 100px;
      fill: lightgray;
    }
  `;
      }

    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._dialog.addEventListener('closed', async ev => {
          if (ev.detail.action !== "next") return;
          this.dispatchEvent(new Event('prompt'));
        });
      }
    }, {
      kind: "method",
      key: "open",
      value: async function open() {
        await this.updateComplete;
        this._dialog.open = true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
      <mwc-dialog id="dialog">
        <div id="container">
          <svg id="bg-scan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0
            2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0
            -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74
            -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
          </svg>
        </div>
        Add groceries items by tapping on NFC stickers and the like.
        <mwc-button
        dialogAction="next"
        slot="primaryAction">
          next
        </mwc-button>
        <mwc-button
          dialogAction="skip"
          slot="secondaryAction">
          skip
        </mwc-button>
      </mwc-dialog>
    `;
      }
    }]
  };
}, LitElement);
export let AddDialog = _decorate([customElement('add-dialog')], function (_initialize2, _LitElement2) {
  class AddDialog extends _LitElement2 {
    constructor(...args) {
      super(...args);

      _initialize2(this);
    }

  }

  return {
    F: AddDialog,
    d: [{
      kind: "field",
      key: "_store",

      value() {
        return new GroceryStore();
      }

    }, {
      kind: "field",
      decorators: [query('mwc-dialog')],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('mwc-checkbox')],
      key: "_checkbox",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('mwc-snackbar')],
      key: "_snackbar",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#actionButton')],
      key: "_actionBtn",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#product')],
      key: "_product",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#description')],
      key: "_description",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
          this._snackbar.labelText = "";
          this._actionBtn.textContent = "";
        });

        this._dialog.addEventListener('closed', async ev => {
          if (ev.detail.action !== "add") return;
          let product = this._product.value;
          let desc = this._description.value;
          this._product.value = "";
          this._description.value = "";
          console.log(product, !product, product === "");

          if (product === "") {
            let options = ["Milk", "Cheese", "Beer", "Cocoa", "Candy", "Pizza", "Basil", "Salt", "Olive Oil", "Toilet paper", "Orange", "Pancakes", "Coffee", "Toothpaste", "Salat", "Salami", "Popcorns", "Cake", "Nuts", "Bread"];
            product = options[Math.floor(Math.random() * options.length)];
            desc = "";
          }

          const writeToNFC = this._checkbox.checked;

          if (writeToNFC) {
            this._writeToNFC(product, desc);
          } else {
            this._store.set(product, desc);
          }
        });
      }
    }, {
      kind: "method",
      key: "_writeToNFC",
      value: async function _writeToNFC(product, description) {
        const encoder = new TextEncoder();
        const ndef = {
          records: [{
            recordType: "mime",
            mediaType: "application/json",
            data: encoder.encode(JSON.stringify({
              product,
              description
            }))
          }]
        };

        try {
          const controller = new AbortController();

          this._snackbar.addEventListener('closed', ev => {
            if (ev.detail.reason === "action") {
              controller.abort();
            }
          }, {
            once: true
          });

          this._snackbar.labelText = "Touch your NFC tag now.";
          this._actionBtn.textContent = "CANCEL";

          this._snackbar.show();

          ndefReader.__ignoreRead__ = true;
          const writer = new NDEFWriter();
          await writer.write(ndef, {
            overwrite: true,
            signal: controller.signal
          });
          ndefReader.__ignoreRead__ = false;

          this._snackbar.close();
        } catch (err) {
          this._snackbar.close();

          const permission = await navigator.permissions.query({
            name: 'nfc'
          });

          if (permission.state == 'denied' && err.name == "NotAllowedError") {
            this._snackbar.labelText = "NFC permission is denied, please grant it in browser settings.";
            this._actionBtn.textContent = "";

            this._snackbar.show();

            return;
          }

          this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
            if (ev.detail.reason === "action") {
              Promise.resolve().then(() => this._writeToNFC(product, description));
            }
          }, {
            once: true
          });

          this._snackbar.labelText = `Writing failed: ${err}`;
          this._actionBtn.textContent = "RETRY";

          this._snackbar.show();
        }
      }
    }, {
      kind: "method",
      key: "open",
      value: function open() {
        this._description.value = "";
        this._checkbox.checked = false;
        this._dialog.open = true;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return [css`
      div {
        display: flex;
        flex-direction: column;
      }

      div > mwc-textfield {
        padding: 10px 0px 10px 0px;
      }
    `];
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
      <mwc-dialog id="dialog" heading="Add new item">
        <div>
          <mwc-textfield outlined required
            id="product"
            label="Enter product...">
          </mwc-textfield>
          <mwc-textfield outlined
            id="description"
            label="Enter description...">
          </mwc-textfield>
          <mwc-formfield label="Write to NFC tag instead">
            <mwc-checkbox></mwc-checkbox>
          </mwc-formfield>
        </div>
        <mwc-button
        dialogAction="add"
        slot="primaryAction">
          add
        </mwc-button>
        <mwc-button
          dialogAction="cancel"
          slot="secondaryAction">
          cancel
        </mwc-button>
      </mwc-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">CANCEL</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
      }
    }]
  };
}, LitElement);
const ndefReader = window.NDEFReader ? new NDEFReader() : new EventTarget();
ndefReader.__ignoreRead__ = false;
export let MainApplication = _decorate([customElement('main-app')], function (_initialize3, _LitElement3) {
  class MainApplication extends _LitElement3 {
    constructor(...args) {
      super(...args);

      _initialize3(this);
    }

  }

  return {
    F: MainApplication,
    d: [{
      kind: "field",
      key: "_store",

      value() {
        return new GroceryStore();
      }

    }, {
      kind: "field",
      static: true,
      key: "styles",

      value() {
        return css`
    .drawer-content {
      padding: 0px 16px 0 16px;
    }

    .main-content {
      width: 100vw;
      min-height: 300px;
      padding: 48px 0 0 0;
    }

    mwc-fab {
      position: fixed;
      bottom: 16px;
      right: 16px;
    }

    .permission-on {
      fill: white;
    }

    .permission-off {
      fill: lightgray;
    }

    .hidden {
      display: none;
    }
  `;
      }

    }, {
      kind: "field",
      decorators: [query('onboarding-wizard')],
      key: "_wizard",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('add-dialog')],
      key: "_dialog",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('mwc-drawer')],
      key: "_drawer",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('mwc-snackbar')],
      key: "_snackbar",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#actionButton')],
      key: "_actionBtn",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#permissionToggle')],
      key: "_permissionToggle",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        const drawer = this._drawer;
        const container = drawer.parentNode;
        container.addEventListener('MDCTopAppBar:nav', _ => {
          drawer.open = !drawer.open;
        });

        this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
          if (ev.detail.reason === "action") {
            window.location.reload();
          }

          this._snackbar.labelText = "";
          this._actionBtn.textContent = "";
        });

        ndefReader.addEventListener("reading", ev => {
          if (ndefReader.__ignoreRead__) {
            return;
          }

          const decoder = new TextDecoder();

          for (let record of ev.message.records) {
            const data = JSON.parse(decoder.decode(record.data));

            if (data.product) {
              this._store.set(data.product, data.description);
            }
          }
        });
        navigator.permissions.query({
          name: 'nfc'
        }).then(async permission => {
          if (permission.state == "granted") {
            ndefReader.scan({
              recordType: "mime"
            });
            this._permissionToggle.on = true;
          }

          permission.addEventListener('change', () => {
            if (permission.state == "granted") {
              ndefReader.scan({
                recordType: "mime"
              });
              this._permissionToggle.on = true;
            }

            if (permission.state == 'denied') {
              this._permissionToggle.on = false;
            }
          });
        }).catch(err => {
          console.error("Reading NFC tags is not supported");

          this._wizard.open();
        });

        if ('serviceWorker' in navigator) {
          const wb = new Workbox('sw.js');
          wb.addEventListener('installed', ev => {
            if (!ev.isUpdate) {
              console.log('Service worker activated for the first time.');
            } else {
              console.log('Service worker was updated');
              this._snackbar.labelText = "A newer version of the app is available.";

              this._snackbar.show();
            }
          });
          wb.register();
        }
      }
    }, {
      kind: "method",
      key: "_scanOperation",
      value: async function _scanOperation() {
        if (!window.NDEFReader) {
          this._snackbar.labelText = "NFC is not supported; try enabling in about:flags";
          this._actionBtn.textContent = "";

          this._snackbar.show();

          return;
        }

        try {
          if (this._permissionToggle.on) {
            await ndefReader.scan({
              recordType: "mime"
            });
            this._snackbar.labelText = "Add item or touch an NFC tag.";
            this._actionBtn.textContent = "";

            this._snackbar.show();
          } else {
            const controller = new AbortController(); // New invocation of scan() will cancel previous scan().

            await ndefReader.scan({
              recordType: "mime",
              signal: controller.signal
            });
            controller.abort();
            this._snackbar.labelText = "NFC tags scan operation is disabled.";
            this._actionBtn.textContent = "";

            this._snackbar.show();
          }
        } catch (err) {
          console.error(err);
          this._permissionToggle.on = false;
          const permission = await navigator.permissions.query({
            name: 'nfc'
          });

          if (permission.state == 'denied' && err.name == "NotAllowedError") {
            this._snackbar.labelText = "NFC permission is denied, please grant it in browser settings.";
            this._actionBtn.textContent = "";

            this._snackbar.show();
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html`
      <onboarding-wizard @prompt=${() => this._scanOperation()}></onboarding-wizard>
      <mwc-drawer hasHeader type=modal>
        <span slot="title">Web NFC Grocery Demo</span>
        <span slot="subtitle">A demonstration of Web NFC</span>
        <div class="drawer-content">
          <p><a href="https://w3c.github.io/web-nfc/">Web NFC API specification</a></p>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Groceries list</div>
            <mwc-icon-button-toggle slot="actionItems" id="permissionToggle" @click=${() => this._scanOperation()}>
              <svg slot="onIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="permission-on">
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0 -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74 -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
              </svg>
              <svg slot="offIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="permission-off">
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0 -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74 -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
            </svg>
            </mwc-icon-button-toggle>
          </mwc-top-app-bar>
          <div class="main-content">
            <groceries-list></groceries-list>
          </div>
        </div>
      </mwc-drawer>
      <mwc-fab icon="playlist_add" @click=${() => this._dialog.open()}></mwc-fab>
      <add-dialog></add-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">RELOAD</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
      }
    }]
  };
}, LitElement);