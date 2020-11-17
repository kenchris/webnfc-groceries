var v,m,p,C;function y(i,e,t,r){var o=T();if(r)for(var a=0;a<r.length;a++)o=r[a](o);var n=e(function(d){o.initializeInstanceElements(d,s.elements)},t),s=o.decorateClass(F(n.d.map(N)),i);return o.initializeClassElements(n.F,s.elements),o.runClassFinishers(n.F,s.finishers)}function T(){T=function(){return i};var i={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(o){o.kind===r&&o.placement==="own"&&this.defineClassElement(e,o)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(o){t.forEach(function(a){var n=a.placement;if(a.kind===o&&(n==="static"||n==="prototype")){var s=n==="static"?e:r;this.defineClassElement(s,a)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if(t.kind==="field"){var o=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:o===void 0?void 0:o.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],o=[],a={static:[],prototype:[],own:[]};if(e.forEach(function(s){this.addElementPlacement(s,a)},this),e.forEach(function(s){if(!w(s))return r.push(s);var c=this.decorateElement(s,a);r.push(c.element),r.push.apply(r,c.extras),o.push.apply(o,c.finishers)},this),!t)return{elements:r,finishers:o};var n=this.decorateConstructor(r,t);return o.push.apply(o,n.finishers),n.finishers=o,n},addElementPlacement:function(e,t,r){var o=t[e.placement];if(!r&&o.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");o.push(e.key)},decorateElement:function(e,t){for(var r=[],o=[],a=e.decorators,n=a.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var c=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,a[n])(c)||c);e=d.element,this.addElementPlacement(e,t),d.finisher&&o.push(d.finisher);var f=d.extras;if(f){for(var b=0;b<f.length;b++)this.addElementPlacement(f[b],t);r.push.apply(r,f)}}return{element:e,finishers:o,extras:r}},decorateConstructor:function(e,t){for(var r=[],o=t.length-1;o>=0;o--){var a=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[o])(a)||a);if(n.finisher!==void 0&&r.push(n.finisher),n.elements!==void 0){e=n.elements;for(var s=0;s<e.length-1;s++)for(var c=s+1;c<e.length;c++)if(e[s].key===e[c].key&&e[s].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){return e===void 0?void 0:B(e).map(function(t){var r=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),r},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var r=D(e.key),o=String(e.placement);if(o!=="static"&&o!=="prototype"&&o!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+o+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:r,placement:o,descriptor:Object.assign({},a)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=L(e,"finisher"),o=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:o}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=L(e,"finisher"),o=this.toElementDescriptors(e.elements);return{elements:o,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var o=(0,t[r])(e);if(o!==void 0){if(typeof o!="function")throw new TypeError("Finishers must return a constructor.");e=o}}return e},disallowProperty:function(e,t,r){if(e[t]!==void 0)throw new TypeError(r+" can't have a ."+t+" property.")}};return i}function N(i){var e=D(i.key),t;i.kind==="method"?t={value:i.value,writable:!0,configurable:!0,enumerable:!1}:i.kind==="get"?t={get:i.value,configurable:!0,enumerable:!1}:i.kind==="set"?t={set:i.value,configurable:!0,enumerable:!1}:i.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:i.kind==="field"?"field":"method",key:e,placement:i.static?"static":i.kind==="field"?"own":"prototype",descriptor:t};return i.decorators&&(r.decorators=i.decorators),i.kind==="field"&&(r.initializer=i.value),r}function S(i,e){i.descriptor.get!==void 0?e.descriptor.get=i.descriptor.get:e.descriptor.set=i.descriptor.set}function F(i){for(var e=[],t=function(n){return n.kind==="method"&&n.key===o.key&&n.placement===o.placement},r=0;r<i.length;r++){var o=i[r],a;if(o.kind==="method"&&(a=e.find(t)))if(A(o.descriptor)||A(a.descriptor)){if(w(o)||w(a))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");a.descriptor=o.descriptor}else{if(w(o)){if(w(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");a.decorators=o.decorators}S(o,a)}else e.push(o)}return e}function w(i){return i.decorators&&i.decorators.length}function A(i){return i!==void 0&&!(i.value===void 0&&i.writable===void 0)}function L(i,e){var t=i[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function D(i){var e=M(i,"string");return typeof e=="symbol"?e:String(e)}function M(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function B(i){return O(i)||R(i)||I(i)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(i,e){if(!i)return;if(typeof i=="string")return z(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(i,e)}function z(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=i[t];return r}function R(i){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(i))return Array.from(i)}function O(i){if(Array.isArray(i))return i}function g(i,e,t){var r=e.get(i);if(!r)throw new TypeError("attempted to set private field on non-instance");if(r.set)r.set.call(i,t);else{if(!r.writable)throw new TypeError("attempted to set read only private field");r.value=t}return t}function u(i,e){var t=e.get(i);if(!t)throw new TypeError("attempted to get private field on non-instance");return t.get?t.get.call(i):t.value}import{LitElement as k,html as _,css as x,customElement as E}from"../web_modules/lit-element.js";import{query as l}from"../web_modules/lit-element/lib/decorators.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-drawer.js";import"../web_modules/@material/mwc-fab.js";import"../web_modules/@material/mwc-formfield.js";import"../web_modules/@material/mwc-top-app-bar.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-icon-button-toggle.js";import"../web_modules/@material/mwc-snackbar.js";import"../web_modules/@material/mwc-dialog.js";import"../web_modules/@material/mwc-textfield.js";import"./groceries-list.js";import{GroceryStore as P}from"./grocery-store.js";import{Workbox as U}from"../web_modules/workbox-window.js";const h=new(C=(v=new WeakMap,m=new WeakMap,p=new WeakMap,class extends EventTarget{constructor(){super();v.set(this,{writable:!0,value:window.NDEFReader?new NDEFReader:new EventTarget}),m.set(this,{writable:!0,value:!1}),p.set(this,{writable:!0,value:null}),u(this,v).addEventListener("reading",i=>{if(u(this,m))return;this.dispatchEvent(i)})}async write(i,e){g(this,m,!0);const t=new NDEFWriter;await t.write(i,e),g(this,m,!1)}scan(){u(this,p)||(g(this,p,new AbortController),u(this,v).scan({signal:u(this,p).signal}))}stop(){u(this,p)&&(u(this,p).abort(),g(this,p,null))}}),C);export let OnboardingWizard=y([E("onboarding-wizard")],function(i,e){class t extends e{constructor(...r){super(...r);i(this)}}return{F:t,d:[{kind:"field",decorators:[l("mwc-dialog")],key:"_dialog",value:void 0},{kind:"field",static:!0,key:"styles",value(){return x`
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
  `}},{kind:"method",key:"firstUpdated",value:function(){this._dialog.addEventListener("closed",async o=>{if(o.detail.action!=="next")return;this.dispatchEvent(new Event("prompt"))})}},{kind:"method",key:"open",value:async function(){await this.updateComplete,this._dialog.open=!0}},{kind:"method",key:"render",value:function(){return _`
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
    `}}]}},k),AddDialog=y([E("add-dialog")],function(i,e){class t extends e{constructor(...r){super(...r);i(this)}}return{F:t,d:[{kind:"field",key:"_store",value(){return new P}},{kind:"field",decorators:[l("mwc-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[l("mwc-checkbox")],key:"_checkbox",value:void 0},{kind:"field",decorators:[l("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[l("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[l("#product")],key:"_product",value:void 0},{kind:"field",decorators:[l("#description")],key:"_description",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._snackbar.addEventListener("MDCSnackbar:closed",o=>{this._snackbar.labelText="",this._actionBtn.textContent=""}),this._dialog.addEventListener("closed",async o=>{if(o.detail.action!=="add")return;let a=this._product.value,n=this._description.value;if(this._product.value="",this._description.value="",a===""){let c=["Milk","Cheese","Beer","Cocoa","Candy","Pizza","Basil","Salt","Olive Oil","Toilet paper","Orange","Pancakes","Coffee","Toothpaste","Salat","Salami","Popcorns","Cake","Nuts","Bread"];a=c[Math.floor(Math.random()*c.length)],n=""}const s=this._checkbox.checked;s?this._writeToNFC(a,n):this._store.set(a,n)})}},{kind:"method",key:"_writeToNFC",value:async function(o,a){const n=new TextEncoder,s={records:[{recordType:"mime",mediaType:"application/json",data:n.encode(JSON.stringify({product:o,description:a}))}]};try{const c=new AbortController;this._snackbar.addEventListener("closed",d=>{d.detail.reason==="action"&&c.abort()},{once:!0}),this._snackbar.labelText="Touch your NFC tag now.",this._actionBtn.textContent="CANCEL",this._snackbar.show(),await h.write(s,{overwrite:!0,signal:c.signal}),this._snackbar.close()}catch(c){this._snackbar.close();const d=await navigator.permissions.query({name:"nfc"});if(d.state=="denied"&&c.name=="NotAllowedError"){this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show();return}this._snackbar.addEventListener("MDCSnackbar:closed",f=>{f.detail.reason==="action"&&Promise.resolve().then(()=>this._writeToNFC(o,a))},{once:!0}),this._snackbar.labelText=`Writing failed: ${c}`,this._actionBtn.textContent="RETRY",this._snackbar.show()}}},{kind:"method",key:"open",value:function(){this._description.value="",this._checkbox.checked=!1,this._dialog.open=!0}},{kind:"field",static:!0,key:"styles",value(){return[x`
      div {
        display: flex;
        flex-direction: column;
      }

      div > mwc-textfield {
        padding: 10px 0px 10px 0px;
      }
    `]}},{kind:"method",key:"render",value:function(){return _`
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
    `}}]}},k),MainApplication=y([E("main-app")],function(i,e){class t extends e{constructor(...r){super(...r);i(this)}}return{F:t,d:[{kind:"field",key:"_store",value(){return new P}},{kind:"field",static:!0,key:"styles",value(){return x`
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
  `}},{kind:"field",decorators:[l("onboarding-wizard")],key:"_wizard",value:void 0},{kind:"field",decorators:[l("add-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[l("mwc-drawer")],key:"_drawer",value:void 0},{kind:"field",decorators:[l("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[l("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[l("#permissionToggle")],key:"_permissionToggle",value:void 0},{kind:"method",key:"firstUpdated",value:function(){const o=this._drawer,a=o.parentNode;if(a.addEventListener("MDCTopAppBar:nav",n=>{o.open=!o.open}),this._snackbar.addEventListener("MDCSnackbar:closed",n=>{n.detail.reason==="action"&&window.location.reload(),this._snackbar.labelText="",this._actionBtn.textContent=""}),h.addEventListener("reading",n=>{const s=new TextDecoder;for(let c of n.message.records){const d=JSON.parse(s.decode(c.data));d.product&&this._store.set(d.product,d.description)}}),navigator.permissions.query({name:"nfc"}).then(async n=>{n.state=="granted"&&(h.scan(),this._permissionToggle.on=!0),n.addEventListener("change",()=>{n.state=="granted"&&(h.scan(),this._permissionToggle.on=!0),n.state=="denied"&&(this._permissionToggle.on=!1)})}).catch(n=>{console.error("Reading NFC tags is not supported"),this._wizard.open()}),"serviceWorker"in navigator){const n=new U("sw.js");n.addEventListener("installed",s=>{s.isUpdate?(console.log("Service worker was updated"),this._snackbar.labelText="A newer version of the app is available.",this._snackbar.show()):console.log("Service worker activated for the first time.")}),n.register()}}},{kind:"method",key:"_scanOperation",value:async function(){if(!window.NDEFReader){this._snackbar.labelText="NFC is not supported; try enabling in about:flags",this._actionBtn.textContent="",this._snackbar.show();return}try{if(this._permissionToggle.on)await h.scan(),this._snackbar.labelText="Add item or touch an NFC tag.",this._actionBtn.textContent="",this._snackbar.show();else{const o=new AbortController;await h.scan({signal:o.signal}),o.abort(),this._snackbar.labelText="NFC tags scan operation is disabled.",this._actionBtn.textContent="",this._snackbar.show()}}catch(o){console.error(o),this._permissionToggle.on=!1;const a=await navigator.permissions.query({name:"nfc"});a.state=="denied"&&o.name=="NotAllowedError"&&(this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show())}}},{kind:"method",key:"render",value:function(){return _`
      <onboarding-wizard @prompt=${()=>this._scanOperation()}></onboarding-wizard>
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
            <mwc-icon-button-toggle slot="actionItems" id="permissionToggle" @click=${()=>this._scanOperation()}>
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
      <mwc-fab icon="playlist_add" @click=${()=>this._dialog.open()}></mwc-fab>
      <add-dialog></add-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">RELOAD</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `}}]}},k);
