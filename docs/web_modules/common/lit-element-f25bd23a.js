import{i as F,m as R,T as O,r as N,N as B,a as W}from"./lit-html-e7095b40.js";import"../lit-element/lib/decorators.js";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=133;function I(e,t){const{element:{content:s},parts:r}=e,o=document.createTreeWalker(s,S,null,!1);let a=u(r),n=r[a],i=-1,d=0;const l=[];let p=null;for(;o.nextNode();){i++;const h=o.currentNode;for(h.previousSibling===p&&(p=null),t.has(h)&&(l.push(h),p===null&&(p=h)),p!==null&&d++;n!==void 0&&n.index===i;)n.index=p!==null?-1:n.index-d,a=u(r,a),n=r[a]}l.forEach(h=>h.parentNode.removeChild(h))}const L=e=>{let t=e.nodeType===11?0:1;const s=document.createTreeWalker(e,S,null,!1);for(;s.nextNode();)t++;return t},u=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const r=e[s];if(F(r))return s}return-1};function H(e,t,s=null){const{element:{content:r},parts:o}=e;if(s==null){r.appendChild(t);return}const a=document.createTreeWalker(r,S,null,!1);let n=u(o),i=0,d=-1;for(;a.nextNode();){d++;const l=a.currentNode;for(l===s&&(i=L(t),s.parentNode.insertBefore(t,s));n!==-1&&o[n].index===d;){if(i>0){for(;n!==-1;)o[n].index+=i,n=u(o,n);return}n=u(o,n)}}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function U(e){let t=m.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},m.set(e.type,t));let s=t.stringsArray.get(e.strings);if(s!==void 0)return s;const r=e.strings.join(R);return s=t.keyString.get(r),s===void 0&&(s=new O(e,e.getTemplateElement()),t.keyString.set(r,s)),t.stringsArray.set(e.strings,s),s}const m=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const c=new WeakMap,V=(e,t,s)=>{let r=c.get(t);r===void 0&&(N(t,t.firstChild),c.set(t,r=new B(Object.assign({templateFactory:U},s))),r.appendInto(t)),r.setValue(e),r.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=(e,t)=>`${e}--${t}`;let y=!0;typeof window.ShadyCSS=="undefined"?y=!1:typeof window.ShadyCSS.prepareTemplateDom=="undefined"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),y=!1);const G=e=>t=>{const s=M(t.type,e);let r=m.get(s);r===void 0&&(r={stringsArray:new WeakMap,keyString:new Map},m.set(s,r));let o=r.stringsArray.get(t.strings);if(o!==void 0)return o;const a=t.strings.join(R);if(o=r.keyString.get(a),o===void 0){const n=t.getTemplateElement();y&&window.ShadyCSS.prepareTemplateDom(n,e),o=new O(t,n),r.keyString.set(a,o)}return r.stringsArray.set(t.strings,o),o},J=["html","svg"],K=e=>{J.forEach(t=>{const s=m.get(M(t,e));s!==void 0&&s.keyString.forEach(r=>{const{element:{content:o}}=r,a=new Set;Array.from(o.querySelectorAll("style")).forEach(n=>{a.add(n)}),I(r,a)})})},D=new Set,$=(e,t,s)=>{D.add(e);const r=s?s.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:a}=o;if(a===0){window.ShadyCSS.prepareTemplateStyles(r,e);return}const n=document.createElement("style");for(let l=0;l<a;l++){const p=o[l];p.parentNode.removeChild(p),n.textContent+=p.textContent}K(e);const i=r.content;s?H(s,n,i.firstChild):i.insertBefore(n,i.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const d=i.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(s){i.insertBefore(n,i.firstChild);const l=new Set;l.add(n),I(s,l)}},Y=(e,t,s)=>{if(!s||typeof s!="object"||!s.scopeName)throw new Error("The `scopeName` option is required.");const r=s.scopeName,o=c.has(t),a=y&&t.nodeType===11&&!!t.host,n=a&&!D.has(r),i=n?document.createDocumentFragment():t;if(V(e,i,Object.assign({templateFactory:G(r)},s)),n){const d=c.get(i);c.delete(i);const l=d.value instanceof W?d.value.template:void 0;$(r,i,l),N(t,t.firstChild),t.appendChild(i),c.set(t,d)}!o&&a&&window.ShadyCSS.styleElement(t.host)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var j;window.JSCompiler_renameProperty=(e,t)=>e;const f={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},w=(e,t)=>t!==e&&(t===t||e===e),v={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:w},T=1,C=1<<2,P=1<<3,_=1<<4,E="finalized";class x extends HTMLElement{constructor(){super();this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const r=this._attributeNameForProperty(s,t);r!==void 0&&(this._attributeToPropertyMap.set(r,s),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(e,t=v){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||v}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(E)||e.finalize(),this[E]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of s)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=w){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,r=t.converter||f,o=typeof r=="function"?r:r.fromAttribute;return o?o(e,s):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const s=t.type,r=t.converter,o=r&&r.toAttribute||f.toAttribute;return o(e,s)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const s=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,s)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=v){const r=this.constructor,o=r._attributeNameForProperty(e,s);if(o!==void 0){const a=r._propertyValueToAttribute(t,s);if(a===void 0)return;this._updateState=this._updateState|P,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._updateState=this._updateState&~P}}_attributeToProperty(e,t){if(this._updateState&P)return;const s=this.constructor,r=s._attributeToPropertyMap.get(e);if(r!==void 0){const o=s.getPropertyOptions(r);this._updateState=this._updateState|_,this[r]=s._propertyValueFromAttribute(t,o),this._updateState=this._updateState&~_}}requestUpdateInternal(e,t,s){let r=!0;if(e!==void 0){const o=this.constructor;s=s||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),s.reflect===!0&&!(this._updateState&_)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|C;try{await this._updatePromise}catch(t){}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&C}get hasUpdated(){return this._updateState&T}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(s){throw e=!1,this._markUpdated(),s}e&&(this._updateState&T||(this._updateState=this._updateState|T,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~C}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}j=E,x[j]=!0;/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const g=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol();class b{constructor(e,t){if(t!==k)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(g?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const q=e=>new b(String(e),k),Q=e=>{if(e instanceof b)return e.cssText;if(typeof e=="number")return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},X=(e,...t)=>{const s=t.reduce((r,o,a)=>r+Q(o)+e[a+1],e[0]);return new b(s,k)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const z={};class A extends x{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(o,a)=>o.reduceRight((n,i)=>Array.isArray(i)?t(i,n):(n.add(i),n),a),s=t(e,new Set),r=[];s.forEach(o=>r.unshift(o)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!g){const s=Array.prototype.slice.call(t.cssRules).reduce((r,o)=>r+o.cssText,"");return q(s)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;if(e.length===0)return;window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):g?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(s=>{const r=document.createElement("style");r.textContent=s.cssText,this.renderRoot.appendChild(r)}))}render(){return z}}A.finalized=!0,A.render=Y;export{b as C,A as L,x as U,X as c,f as d,w as n,g as s,U as t,q as u};
