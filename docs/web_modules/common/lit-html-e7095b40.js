/**
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
 */const k=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,O=(e,t,n=null,i=null)=>{for(;t!==n;){const s=t.nextSibling;e.insertBefore(t,i),t=s}},M=(e,t,n=null)=>{for(;t!==n;){const i=t.nextSibling;e.removeChild(t),t=i}};/**
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
 */const m=`{{lit-${String(Math.random()).slice(2)}}}`,R=`<!--${m}-->`,L=new RegExp(`${m}|${R}`),v="$lit$";class X{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,a=-1,r=0;const{strings:w,values:{length:z}}=e;for(;r<z;){const o=s.nextNode();if(o===null){s.currentNode=i.pop();continue}if(a++,o.nodeType===1){if(o.hasAttributes()){const d=o.attributes,{length:x}=d;let f=0;for(let u=0;u<x;u++)V(d[u].name,v)&&f++;for(;f-- >0;){const u=w[r],b=N.exec(u)[2],y=b.toLowerCase()+v,g=o.getAttribute(y);o.removeAttribute(y);const c=g.split(L);this.parts.push({type:"attribute",index:a,name:b,strings:c}),r+=c.length-1}}o.tagName==="TEMPLATE"&&(i.push(o),s.currentNode=o.content)}else if(o.nodeType===3){const d=o.data;if(d.indexOf(m)>=0){const x=o.parentNode,f=d.split(L),u=f.length-1;for(let b=0;b<u;b++){let y,g=f[b];if(g==="")y=p();else{const c=N.exec(g);c!==null&&V(c[2],v)&&(g=g.slice(0,c.index)+c[1]+c[2].slice(0,-v.length)+c[3]),y=document.createTextNode(g)}x.insertBefore(y,o),this.parts.push({type:"node",index:++a})}f[u]===""?(x.insertBefore(p(),o),n.push(o)):o.data=f[u],r+=u}}else if(o.nodeType===8)if(o.data===m){const d=o.parentNode;(o.previousSibling===null||a===l)&&(a++,d.insertBefore(p(),o)),l=a,this.parts.push({type:"node",index:a}),o.nextSibling===null?o.data="":(n.push(o),a--),r++}else{let d=-1;for(;(d=o.data.indexOf(m,d+1))!==-1;)this.parts.push({type:"node",index:-1}),r++}}for(const o of n)o.parentNode.removeChild(o)}}const V=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},j=e=>e.index!==-1,p=()=>document.createComment(""),N=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
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
 */const H=new WeakMap,K=e=>(...t)=>{const n=e(...t);return H.set(n,!0),n},T=e=>typeof e=="function"&&H.has(e);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const h={},E={};/**
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
 */class A{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let s=0,l=0,a,r=i.nextNode();for(;s<n.length;){if(a=n[s],!j(a)){this.__parts.push(void 0),s++;continue}for(;l<a.index;)l++,r.nodeName==="TEMPLATE"&&(t.push(r),i.currentNode=r.content),(r=i.nextNode())===null&&(i.currentNode=t.pop(),r=i.nextNode());if(a.type==="node"){const w=this.processor.handleTextExpression(this.options);w.insertAfterNode(r.previousSibling),this.__parts.push(w)}else this.__parts.push(...this.processor.handleAttributeExpressions(r,a.name,a.strings,this.options));s++}return k&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
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
 */const B=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),J=` ${m} `;class _{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const s=this.strings[i],l=s.lastIndexOf("<!--");n=(l>-1||n)&&s.indexOf("-->",l+1)===-1;const a=N.exec(s);a===null?t+=s+(n?J:R):t+=s.substr(0,a.index)+a[1]+a[2]+v+a[3]+m}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return B!==void 0&&(t=B.createHTML(t)),e.innerHTML=t,e}}class U extends _{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),O(t,n.firstChild),e}}/**
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
 */const P=e=>e===null||!(typeof e=="object"||typeof e=="function"),S=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class D{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const s=n[0].value;if(typeof s=="symbol")return String(s);if(typeof s=="string"||!S(s))return s}let i="";for(let s=0;s<t;s++){i+=e[s];const l=n[s];if(l!==void 0){const a=l.value;if(P(a)||!S(a))i+=typeof a=="string"?a:String(a);else for(const r of a)i+=typeof r=="string"?r:String(r)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==h&&(!P(e)||e!==this.value)&&(this.value=e,T(e)||(this.committer.dirty=!0))}commit(){for(;T(this.value);){const e=this.value;this.value=h,e(this)}if(this.value===h)return;this.committer.commit()}}class I{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}const e=this.__pendingValue;if(e===h)return;P(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):S(e)?this.__commitIterable(e):e===E?(this.value=E,this.clear()):this.__commitText(e)}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){if(this.value===e)return;this.clear(),this.__insert(e),this.value=e}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const n=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof A&&this.value.template===t)this.value.update(e.values);else{const n=new A(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n=0,i;for(const s of e)i=t[n],i===void 0&&(i=new I(this.options),t.push(i),n===0?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){M(this.startNode.parentNode,e.nextSibling,this.endNode)}}class F{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=h,t(this)}if(this.__pendingValue===h)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=h}}class Q extends D{constructor(e,t,n){super(e,t,n);this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new W(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class W extends C{}let $=!1;(()=>{try{const e={get capture(){return $=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class G{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;T(this.__pendingValue);){const s=this.__pendingValue;this.__pendingValue=h,s(this)}if(this.__pendingValue===h)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Y(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=h}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Y=e=>e&&($?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);/**
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
 */class Z{handleAttributeExpressions(e,t,n,i){const s=t[0];if(s==="."){const a=new Q(e,t.slice(1),n);return a.parts}if(s==="@")return[new G(e,t.slice(1),i.eventContext)];if(s==="?")return[new F(e,t.slice(1),n)];const l=new D(e,t,n);return l.parts}handleTextExpression(e){return new I(e)}}const q=new Z;/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const ee=(e,...t)=>new _(e,t,"html",q),te=(e,...t)=>new U(e,t,"svg",q);export{C as A,F as B,G as E,I as N,W as P,U as S,X as T,A as a,_ as b,E as c,K as d,p as e,O as f,ee as h,j as i,m,h as n,M as r,te as s};
