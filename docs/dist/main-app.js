function m(o,e,t,i){var r=b();if(i)for(var a=0;a<i.length;a++)r=i[a](r);var n=e(function(d){r.initializeInstanceElements(d,s.elements)},t),s=r.decorateClass(L(n.d.map(T)),o);return r.initializeClassElements(n.F,s.elements),r.runClassFinishers(n.F,s.finishers)}function b(){b=function(){return o};var o={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(r){r.kind===i&&r.placement==="own"&&this.defineClassElement(e,r)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(a){var n=a.placement;if(a.kind===r&&(n==="static"||n==="prototype")){var s=n==="static"?e:i;this.defineClassElement(s,a)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if(t.kind==="field"){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:r===void 0?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],a={static:[],prototype:[],own:[]};if(e.forEach(function(s){this.addElementPlacement(s,a)},this),e.forEach(function(s){if(!f(s))return i.push(s);var c=this.decorateElement(s,a);i.push(c.element),i.push.apply(i,c.extras),r.push.apply(r,c.finishers)},this),!t)return{elements:i,finishers:r};var n=this.decorateConstructor(i,t);return r.push.apply(r,n.finishers),n.finishers=r,n},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&r.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],a=e.decorators,n=a.length-1;n>=0;n--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var c=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,a[n])(c)||c);e=d.element,this.addElementPlacement(e,t),d.finisher&&r.push(d.finisher);var u=d.extras;if(u){for(var h=0;h<u.length;h++)this.addElementPlacement(u[h],t);i.push.apply(i,u)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var a=this.fromClassDescriptor(e),n=this.toClassDescriptor((0,t[r])(a)||a);if(n.finisher!==void 0&&i.push(n.finisher),n.elements!==void 0){e=n.elements;for(var s=0;s<e.length-1;s++)for(var c=s+1;c<e.length;c++)if(e[s].key===e[c].key&&e[s].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){return e===void 0?void 0:z(e).map(function(t){var i=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var i=x(e.key),r=String(e.placement);if(r!=="static"&&r!=="prototype"&&r!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+r+'"');var a=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var n={kind:t,key:i,placement:r,descriptor:Object.assign({},a)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(a,"get","The property descriptor of a field descriptor"),this.disallowProperty(a,"set","The property descriptor of a field descriptor"),this.disallowProperty(a,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=_(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=_(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(r!==void 0){if(typeof r!="function")throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(e[t]!==void 0)throw new TypeError(i+" can't have a ."+t+" property.")}};return o}function T(o){var e=x(o.key),t;o.kind==="method"?t={value:o.value,writable:!0,configurable:!0,enumerable:!1}:o.kind==="get"?t={get:o.value,configurable:!0,enumerable:!1}:o.kind==="set"?t={set:o.value,configurable:!0,enumerable:!1}:o.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:o.kind==="field"?"field":"method",key:e,placement:o.static?"static":o.kind==="field"?"own":"prototype",descriptor:t};return o.decorators&&(i.decorators=o.decorators),o.kind==="field"&&(i.initializer=o.value),i}function A(o,e){o.descriptor.get!==void 0?e.descriptor.get=o.descriptor.get:e.descriptor.set=o.descriptor.set}function L(o){for(var e=[],t=function(n){return n.kind==="method"&&n.key===r.key&&n.placement===r.placement},i=0;i<o.length;i++){var r=o[i],a;if(r.kind==="method"&&(a=e.find(t)))if(k(r.descriptor)||k(a.descriptor)){if(f(r)||f(a))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");a.descriptor=r.descriptor}else{if(f(r)){if(f(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");a.decorators=r.decorators}A(r,a)}else e.push(r)}return e}function f(o){return o.decorators&&o.decorators.length}function k(o){return o!==void 0&&!(o.value===void 0&&o.writable===void 0)}function _(o,e){var t=o[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function x(o){var e=D(o,"string");return typeof e=="symbol"?e:String(e)}function D(o,e){if(typeof o!="object"||o===null)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function z(o){return F(o)||S(o)||P(o)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(o,e){if(!o)return;if(typeof o=="string")return E(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return E(o,e)}function E(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=o[t];return i}function S(o){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(o))return Array.from(o)}function F(o){if(Array.isArray(o))return o}import{LitElement as w,html as v,css as g,customElement as y}from"../web_modules/lit-element.js";import{query as l}from"../web_modules/lit-element/lib/decorators.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-drawer.js";import"../web_modules/@material/mwc-fab.js";import"../web_modules/@material/mwc-formfield.js";import"../web_modules/@material/mwc-top-app-bar.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-icon-button-toggle.js";import"../web_modules/@material/mwc-snackbar.js";import"../web_modules/@material/mwc-dialog.js";import"../web_modules/@material/mwc-textfield.js";import"./groceries-list.js";import{GroceryStore as C}from"./grocery-store.js";import{Workbox as B}from"../web_modules/workbox-window.js";export let OnboardingWizard=m([y("onboarding-wizard")],function(o,e){class t extends e{constructor(...i){super(...i);o(this)}}return{F:t,d:[{kind:"field",decorators:[l("mwc-dialog")],key:"_dialog",value:void 0},{kind:"field",static:!0,key:"styles",value(){return g`
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
  `}},{kind:"method",key:"firstUpdated",value:function(){this._dialog.addEventListener("closed",async r=>{if(r.detail.action!=="next")return;this.dispatchEvent(new Event("prompt"))})}},{kind:"method",key:"open",value:async function(){await this.updateComplete,this._dialog.open=!0}},{kind:"method",key:"render",value:function(){return v`
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
    `}}]}},w),AddDialog=m([y("add-dialog")],function(o,e){class t extends e{constructor(...i){super(...i);o(this)}}return{F:t,d:[{kind:"field",key:"_store",value(){return new C}},{kind:"field",decorators:[l("mwc-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[l("mwc-checkbox")],key:"_checkbox",value:void 0},{kind:"field",decorators:[l("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[l("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[l("#product")],key:"_product",value:void 0},{kind:"field",decorators:[l("#description")],key:"_description",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._snackbar.addEventListener("MDCSnackbar:closed",r=>{this._snackbar.labelText="",this._actionBtn.textContent=""}),this._dialog.addEventListener("closed",async r=>{if(r.detail.action!=="add")return;let a=this._product.value,n=this._description.value;if(this._product.value="",this._description.value="",console.log(a,!a,a===""),a===""){let c=["Milk","Cheese","Beer","Cocoa","Candy","Pizza","Basil","Salt","Olive Oil","Toilet paper","Orange","Pancakes","Coffee","Toothpaste","Salat","Salami","Popcorns","Cake","Nuts","Bread"];a=c[Math.floor(Math.random()*c.length)],n=""}const s=this._checkbox.checked;s?this._writeToNFC(a,n):this._store.set(a,n)})}},{kind:"method",key:"_writeToNFC",value:async function(r,a){const n=new TextEncoder,s={records:[{recordType:"mime",mediaType:"application/json",data:n.encode(JSON.stringify({product:r,description:a}))}]};try{const c=new AbortController;this._snackbar.addEventListener("closed",u=>{u.detail.reason==="action"&&c.abort()},{once:!0}),this._snackbar.labelText="Touch your NFC tag now.",this._actionBtn.textContent="CANCEL",this._snackbar.show(),p.__ignoreRead__=!0;const d=new NDEFWriter;await d.write(s,{overwrite:!0,signal:c.signal}),p.__ignoreRead__=!1,this._snackbar.close()}catch(c){this._snackbar.close();const d=await navigator.permissions.query({name:"nfc"});if(d.state=="denied"&&c.name=="NotAllowedError"){this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show();return}this._snackbar.addEventListener("MDCSnackbar:closed",u=>{u.detail.reason==="action"&&Promise.resolve().then(()=>this._writeToNFC(r,a))},{once:!0}),this._snackbar.labelText=`Writing failed: ${c}`,this._actionBtn.textContent="RETRY",this._snackbar.show()}}},{kind:"method",key:"open",value:function(){this._description.value="",this._checkbox.checked=!1,this._dialog.open=!0}},{kind:"field",static:!0,key:"styles",value(){return[g`
      div {
        display: flex;
        flex-direction: column;
      }

      div > mwc-textfield {
        padding: 10px 0px 10px 0px;
      }
    `]}},{kind:"method",key:"render",value:function(){return v`
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
    `}}]}},w);const p=window.NDEFReader?new NDEFReader:new EventTarget;p.__ignoreRead__=!1;export let MainApplication=m([y("main-app")],function(o,e){class t extends e{constructor(...i){super(...i);o(this)}}return{F:t,d:[{kind:"field",key:"_store",value(){return new C}},{kind:"field",static:!0,key:"styles",value(){return g`
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
  `}},{kind:"field",decorators:[l("onboarding-wizard")],key:"_wizard",value:void 0},{kind:"field",decorators:[l("add-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[l("mwc-drawer")],key:"_drawer",value:void 0},{kind:"field",decorators:[l("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[l("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[l("#permissionToggle")],key:"_permissionToggle",value:void 0},{kind:"method",key:"firstUpdated",value:function(){const r=this._drawer,a=r.parentNode;if(a.addEventListener("MDCTopAppBar:nav",n=>{r.open=!r.open}),this._snackbar.addEventListener("MDCSnackbar:closed",n=>{n.detail.reason==="action"&&window.location.reload(),this._snackbar.labelText="",this._actionBtn.textContent=""}),p.addEventListener("reading",n=>{if(p.__ignoreRead__)return;const s=new TextDecoder;for(let c of n.message.records){const d=JSON.parse(s.decode(c.data));d.product&&this._store.set(d.product,d.description)}}),navigator.permissions.query({name:"nfc"}).then(async n=>{n.state=="granted"&&(p.scan({recordType:"mime"}),this._permissionToggle.on=!0),n.addEventListener("change",()=>{n.state=="granted"&&(p.scan({recordType:"mime"}),this._permissionToggle.on=!0),n.state=="denied"&&(this._permissionToggle.on=!1)})}).catch(n=>{console.error("Reading NFC tags is not supported"),this._wizard.open()}),"serviceWorker"in navigator){const n=new B("sw.js");n.addEventListener("installed",s=>{s.isUpdate?(console.log("Service worker was updated"),this._snackbar.labelText="A newer version of the app is available.",this._snackbar.show()):console.log("Service worker activated for the first time.")}),n.register()}}},{kind:"method",key:"_scanOperation",value:async function(){if(!window.NDEFReader){this._snackbar.labelText="NFC is not supported; try enabling in about:flags",this._actionBtn.textContent="",this._snackbar.show();return}try{if(this._permissionToggle.on)await p.scan({recordType:"mime"}),this._snackbar.labelText="Add item or touch an NFC tag.",this._actionBtn.textContent="",this._snackbar.show();else{const r=new AbortController;await p.scan({recordType:"mime",signal:r.signal}),r.abort(),this._snackbar.labelText="NFC tags scan operation is disabled.",this._actionBtn.textContent="",this._snackbar.show()}}catch(r){console.error(r),this._permissionToggle.on=!1;const a=await navigator.permissions.query({name:"nfc"});a.state=="denied"&&r.name=="NotAllowedError"&&(this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show())}}},{kind:"method",key:"render",value:function(){return v`
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
    `}}]}},w);
