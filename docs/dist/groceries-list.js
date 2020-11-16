function m(n,e,t,i){var r=v();if(i)for(var o=0;o<i.length;o++)r=i[o](r);var s=e(function(c){r.initializeInstanceElements(c,a.elements)},t),a=r.decorateClass(S(s.d.map(I)),n);return r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}function v(){v=function(){return n};var n={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(r){r.kind===i&&r.placement==="own"&&this.defineClassElement(e,r)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(o){var s=o.placement;if(o.kind===r&&(s==="static"||s==="prototype")){var a=s==="static"?e:i;this.defineClassElement(a,o)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if(t.kind==="field"){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:r===void 0?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(a){this.addElementPlacement(a,o)},this),e.forEach(function(a){if(!d(a))return i.push(a);var l=this.decorateElement(a,o);i.push(l.element),i.push.apply(i,l.extras),r.push.apply(r,l.finishers)},this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&r.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],o=e.decorators,s=o.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var l=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,o[s])(l)||l);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var u=c.extras;if(u){for(var f=0;f<u.length;f++)this.addElementPlacement(u[f],t);i.push.apply(i,u)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var o=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(o)||o);if(s.finisher!==void 0&&i.push(s.finisher),s.elements!==void 0){e=s.elements;for(var a=0;a<e.length-1;a++)for(var l=a+1;l<e.length;l++)if(e[a].key===e[l].key&&e[a].placement===e[l].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){return e===void 0?void 0:T(e).map(function(t){var i=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var i=k(e.key),r=String(e.placement);if(r!=="static"&&r!=="prototype"&&r!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+r+'"');var o=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},o)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=g(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=g(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(r!==void 0){if(typeof r!="function")throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(e[t]!==void 0)throw new TypeError(i+" can't have a ."+t+" property.")}};return n}function I(n){var e=k(n.key),t;n.kind==="method"?t={value:n.value,writable:!0,configurable:!0,enumerable:!1}:n.kind==="get"?t={get:n.value,configurable:!0,enumerable:!1}:n.kind==="set"?t={set:n.value,configurable:!0,enumerable:!1}:n.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:n.kind==="field"?"field":"method",key:e,placement:n.static?"static":n.kind==="field"?"own":"prototype",descriptor:t};return n.decorators&&(i.decorators=n.decorators),n.kind==="field"&&(i.initializer=n.value),i}function A(n,e){n.descriptor.get!==void 0?e.descriptor.get=n.descriptor.get:e.descriptor.set=n.descriptor.set}function S(n){for(var e=[],t=function(s){return s.kind==="method"&&s.key===r.key&&s.placement===r.placement},i=0;i<n.length;i++){var r=n[i],o;if(r.kind==="method"&&(o=e.find(t)))if(y(r.descriptor)||y(o.descriptor)){if(d(r)||d(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(d(r)){if(d(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}A(r,o)}else e.push(r)}return e}function d(n){return n.decorators&&n.decorators.length}function y(n){return n!==void 0&&!(n.value===void 0&&n.writable===void 0)}function g(n,e){var t=n[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function k(n){var e=$(n,"string");return typeof e=="symbol"?e:String(e)}function $(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function T(n){return G(n)||L(n)||z(n)||C()}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(n,e){if(!n)return;if(typeof n=="string")return w(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(n,e)}function w(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function L(n){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(n))return Array.from(n)}function G(n){if(Array.isArray(n))return n}import{LitElement as b,html as p,css as _,property as h,customElement as E}from"../web_modules/lit-element.js";import{repeat as D}from"../web_modules/lit-html/directives/repeat.js";import{classMap as x}from"../web_modules/lit-html/directives/class-map.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-icon-button.js";import"./dismissable-item.js";import{style as P}from"./mwc-list-item-css.js";import{GroceryStore as M}from"./grocery-store.js";export let GroceryItem=m([E("grocery-item")],function(n,e){class t extends e{constructor(...i){super(...i);n(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return[P,_`
      mwc-icon-button {
        display: none;
      }

      @media(hover: hover) {
        dismissable-item:hover mwc-icon-button {
          display: block;
        }
      }

      .mdc-list-item {
        height: 64px;
      }

      mwc-checkbox {
        padding-right: 14px;
      }

      dismissable-item {
        width: 100%;
        --item-bg-color: white;
        padding: 0px ! important;
        user-select: none;
      }

      div {
        background-color: #E53935;
      }
    `]}},{kind:"field",decorators:[h()],key:"label",value:void 0},{kind:"field",decorators:[h()],key:"sublabel",value:void 0},{kind:"field",decorators:[h({type:Boolean})],key:"checked",value:void 0},{kind:"method",key:"onchange",value:function(r){this.dispatchEvent(new CustomEvent("change",{detail:{checked:r.target.checked}}))}},{kind:"method",key:"onremove",value:function(r){this.dispatchEvent(new Event("remove"))}},{kind:"method",key:"render",value:function(){return p`
      <div>
        <dismissable-item @remove=${this.onremove} role="listitem" class="mdc-list-item">
          <mwc-checkbox @change=${this.onchange} ?checked=${this.checked}></mwc-checkbox>
          <span class="mdc-list-item__text">
            ${this.label}
            <span class="mdc-list-item__secondary-text">${this.sublabel}</span>
          </span>
          <mwc-icon-button class="mdc-list-item__meta"
            aria-label="Delete item" title="Delete" icon="delete"
            @click=${this.onremove} tabindex="-1">
          </mwc-icon-button>
        </dismissable-item>
      </div>
    `}}]}},b),GroceriesList=m([E("groceries-list")],function(n,e){class t extends e{constructor(){super();n(this);const i=async()=>{let r=!0;for await(let o of this._store.entries())r&&(this._doneItems=[],this._pendingItems=[],r=!1),o.done?this._doneItems.push(o):this._pendingItems.push(o);await this.requestUpdate()};this._store.addEventListener("change",i),i()}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return[P,_`
    :host {
      width: 100%;
      background-color: yellow;
    }

    .alldone {
      height: 70vh;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      text-align: center;
    }

    .alldone > svg {
      fill: lightgray;
      width: 100px;
      height: 100px;
    }

    .alldone > #filler {
      height: 20vh;
    }

    .hidden {
      display: none;
    }
  `]}},{kind:"field",key:"_store",value(){return new M}},{kind:"field",key:"_pendingItems",value(){return null}},{kind:"field",key:"_doneItems",value(){return null}},{kind:"method",key:"_onchange",value:function(r){r.stopPropagation(),this._store.change(r.target.label,r.detail.checked)}},{kind:"method",key:"_onremove",value:function(r){this._store.remove(r.target.label)}},{kind:"method",key:"_isAllDone",value:function(){return this._pendingItems!==null&&!this._pendingItems.length}},{kind:"method",key:"_hasDoneItems",value:function(){return this._doneItems&&this._doneItems.length}},{kind:"method",key:"render",value:function(){return p`
      <div role="list" class="mdc-list mdc-list--two-line">
        <div class="alldone ${x({hidden:!this._isAllDone()})}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18
              7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66
              19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83
              12 .41 13.41z"/>
          </svg>
          You're all done! Please,<br>enjoy your day.
          <div id="filler"></div>
        </div>
      </div>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${this._pendingItems&&D(this._pendingItems,r=>r.name,r=>p`
            <grocery-item
              .label=${r.name}
              .sublabel=${r.note}
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
      <hr class=${x({hidden:!this._hasDoneItems()})}>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${this._doneItems&&D(this._doneItems,r=>r.name,r=>p`
            <grocery-item
              .label=${r.name}
              .sublabel=${r.note}
              checked
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
    `}}]}},b);
