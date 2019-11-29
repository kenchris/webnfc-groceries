function t(t){var e;if("undefined"!=typeof Symbol){if(Symbol.asyncIterator&&null!=(e=t[Symbol.asyncIterator]))return e.call(t);if(Symbol.iterator&&null!=(e=t[Symbol.iterator]))return e.call(t)}throw new TypeError("Object is not async iterable")}function e(t){this.wrapped=t}function i(t){var i,n;function o(i,n){try{var a=t[i](n),d=a.value,c=d instanceof e;Promise.resolve(c?d.wrapped:d).then(function(t){c?o("return"===i?"return":"next",t):r(a.done?"return":"normal",t)},function(t){o("throw",t)})}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1})}(i=i.next)?o(i.key,i.arg):n=null}this._invoke=function(t,e){return new Promise(function(r,a){var d={key:t,arg:e,resolve:r,reject:a,next:null};n?n=n.next=d:(i=n=d,o(t,e))})},"function"!=typeof t.return&&(this.return=void 0)}function n(t){return new e(t)}function o(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function a(t,e,i,n){var a=function(){(function(){return t});var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(t,e){["method","field"].forEach(function(i){e.forEach(function(e){e.kind===i&&"own"===e.placement&&this.defineClassElement(t,e)},this)},this)},initializeClassElements:function(t,e){var i=t.prototype;["method","field"].forEach(function(n){e.forEach(function(e){var o=e.placement;if(e.kind===n&&("static"===o||"prototype"===o)){var r="static"===o?t:i;this.defineClassElement(r,e)}},this)},this)},defineClassElement:function(t,e){var i=e.descriptor;if("field"===e.kind){var n=e.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===n?void 0:n.call(t)}}Object.defineProperty(t,e.key,i)},decorateClass:function(t,e){var i=[],n=[],o={static:[],prototype:[],own:[]};if(t.forEach(function(t){this.addElementPlacement(t,o)},this),t.forEach(function(t){if(!s(t))return i.push(t);var e=this.decorateElement(t,o);i.push(e.element),i.push.apply(i,e.extras),n.push.apply(n,e.finishers)},this),!e)return{elements:i,finishers:n};var r=this.decorateConstructor(i,e);return n.push.apply(n,r.finishers),r.finishers=n,r},addElementPlacement:function(t,e,i){var n=e[t.placement];if(!i&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)},decorateElement:function(t,e){for(var i=[],n=[],o=t.decorators,r=o.length-1;r>=0;r--){var a=e[t.placement];a.splice(a.indexOf(t.key),1);var d=this.fromElementDescriptor(t),c=this.toElementFinisherExtras((0,o[r])(d)||d);t=c.element,this.addElementPlacement(t,e),c.finisher&&n.push(c.finisher);var s=c.extras;if(s){for(var l=0;l<s.length;l++)this.addElementPlacement(s[l],e);i.push.apply(i,s)}}return{element:t,finishers:n,extras:i}},decorateConstructor:function(t,e){for(var i=[],n=e.length-1;n>=0;n--){var o=this.fromClassDescriptor(t),r=this.toClassDescriptor((0,e[n])(o)||o);if(void 0!==r.finisher&&i.push(r.finisher),void 0!==r.elements){t=r.elements;for(var a=0;a<t.length-1;a++)for(var d=a+1;d<t.length;d++)if(t[a].key===t[d].key&&t[a].placement===t[d].placement)throw new TypeError("Duplicated element ("+t[a].key+")")}}return{elements:t,finishers:i}},fromElementDescriptor:function(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===t.kind&&(e.initializer=t.initializer),e},toElementDescriptors:function(t){if(void 0!==t)return o(t).map(function(t){var e=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),e},this)},toElementDescriptor:function(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var i=r(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var o=t.descriptor;this.disallowProperty(t,"elements","An element descriptor");var a={kind:e,key:i,placement:n,descriptor:Object.assign({},o)};return"field"!==e?this.disallowProperty(t,"initializer","A method descriptor"):(this.disallowProperty(o,"get","The property descriptor of a field descriptor"),this.disallowProperty(o,"set","The property descriptor of a field descriptor"),this.disallowProperty(o,"value","The property descriptor of a field descriptor"),a.initializer=t.initializer),a},toElementFinisherExtras:function(t){var e=this.toElementDescriptor(t),i=p(t,"finisher"),n=this.toElementDescriptors(t.extras);return{element:e,finisher:i,extras:n}},fromClassDescriptor:function(t){var e={kind:"class",elements:t.map(this.fromElementDescriptor,this)};return Object.defineProperty(e,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),e},toClassDescriptor:function(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');this.disallowProperty(t,"key","A class descriptor"),this.disallowProperty(t,"placement","A class descriptor"),this.disallowProperty(t,"descriptor","A class descriptor"),this.disallowProperty(t,"initializer","A class descriptor"),this.disallowProperty(t,"extras","A class descriptor");var i=p(t,"finisher"),n=this.toElementDescriptors(t.elements);return{elements:n,finisher:i}},runClassFinishers:function(t,e){for(var i=0;i<e.length;i++){var n=(0,e[i])(t);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");t=n}}return t},disallowProperty:function(t,e,i){if(void 0!==t[e])throw new TypeError(i+" can't have a ."+e+" property.")}};return t}();if(n)for(var m=0;m<n.length;m++)a=n[m](a);var u=e(function(t){a.initializeInstanceElements(t,f.elements)},i),f=a.decorateClass(function(t){for(var e=[],i=function(t){return"method"===t.kind&&t.key===r.key&&t.placement===r.placement},n=0;n<t.length;n++){var o,r=t[n];if("method"===r.kind&&(o=e.find(i)))if(l(r.descriptor)||l(o.descriptor)){if(s(r)||s(o))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");o.descriptor=r.descriptor}else{if(s(r)){if(s(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");o.decorators=r.decorators}c(r,o)}else e.push(r)}return e}(u.d.map(d)),t);return a.initializeClassElements(u.F,f.elements),a.runClassFinishers(u.F,f.finishers)}function d(t){var e,i=r(t.key);"method"===t.kind?e={value:t.value,writable:!0,configurable:!0,enumerable:!1}:"get"===t.kind?e={get:t.value,configurable:!0,enumerable:!1}:"set"===t.kind?e={set:t.value,configurable:!0,enumerable:!1}:"field"===t.kind&&(e={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===t.kind?"field":"method",key:i,placement:t.static?"static":"field"===t.kind?"own":"prototype",descriptor:e};return t.decorators&&(n.decorators=t.decorators),"field"===t.kind&&(n.initializer=t.value),n}function c(t,e){void 0!==t.descriptor.get?e.descriptor.get=t.descriptor.get:e.descriptor.set=t.descriptor.set}function s(t){return t.decorators&&t.decorators.length}function l(t){return void 0!==t&&!(void 0===t.value&&void 0===t.writable)}function p(t,e){var i=t[e];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+e+"' to be a function");return i}"function"==typeof Symbol&&Symbol.asyncIterator&&(i.prototype[Symbol.asyncIterator]=function(){return this}),i.prototype.next=function(t){return this._invoke("next",t)},i.prototype.throw=function(t){return this._invoke("throw",t)},i.prototype.return=function(t){return this._invoke("return",t)};const m=new WeakMap,u=t=>(function(){const e=t(...arguments);return m.set(e,!0),e}),f=t=>"function"==typeof t&&m.has(t),h=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,g=function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},b={},v={},x=`{{lit-${String(Math.random()).slice(2)}}}`,y=`\x3c!--${x}--\x3e`,w=new RegExp(`${x}|${y}`),k="$lit$";class E{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,d=0;const{strings:c,values:{length:s}}=t;for(;d<s;){const t=o.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)C(e[t].name,k)&&n++;for(;n-- >0;){const e=c[d],i=I.exec(e)[2],n=i.toLowerCase()+k,o=t.getAttribute(n);t.removeAttribute(n);const r=o.split(w);this.parts.push({type:"attribute",index:a,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(x)>=0){const n=t.parentNode,o=e.split(w),r=o.length-1;for(let e=0;e<r;e++){let i,r=o[e];if(""===r)i=T();else{const t=I.exec(r);null!==t&&C(t[2],k)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-k.length)+t[3]),i=document.createTextNode(r)}n.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===o[r]?(n.insertBefore(T(),t),i.push(t)):t.data=o[r],d+=r}}else if(8===t.nodeType)if(t.data===x){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(T(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(x,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const C=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},A=t=>-1!==t.index,T=()=>document.createComment(""),I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class S{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=h?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,r=0,a=0,d=n.nextNode();for(;r<i.length;)if(o=i[r],A(o)){for(;a<o.index;)a++,"TEMPLATE"===d.nodeName&&(e.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=e.pop(),d=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return h&&(document.adoptNode(t),customElements.upgrade(t)),t}}const O=` ${x} `;class N{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const r=I.exec(t);e+=null===r?t+(i?O:y):t.substr(0,r.index)+r[1]+r[2]+k+r[3]+x}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const L=t=>null===t||!("object"==typeof t||"function"==typeof t),R=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class D{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(L(t)||!R(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===b||L(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=b,t(this)}this.value!==b&&this.committer.commit()}}class H{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(T()),this.endNode=t.appendChild(T())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=T()),t.__insert(this.endNode=T())}insertAfterPart(t){t.__insert(this.startNode=T()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}const t=this.__pendingValue;t!==b&&(L(t)?t!==this.value&&this.__commitText(t):t instanceof N?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):R(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof S&&this.value.template===e)this.value.update(t.values);else{const i=new S(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const o of t)void 0===(i=e[n])&&(i=new H(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(o),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;g(this.startNode.parentNode,t.nextSibling,this.endNode)}}class F{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=b}}class z extends D{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends P{}let B=!1;try{const t={get capture(){return B=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class V{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;f(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=b,t(this)}if(this.__pendingValue===b)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=j(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=b}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const j=t=>t&&(B?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const U=new class{handleAttributeExpressions(t,e,i,n){const o=e[0];return"."===o?new z(t,e.slice(1),i).parts:"@"===o?[new V(t,e.slice(1),n.eventContext)]:"?"===o?[new F(t,e.slice(1),i)]:new D(t,e,i).parts}handleTextExpression(t){return new H(t)}};function $(t){let e=X.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},X.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(x);return void 0===(i=e.keyString.get(n))&&(i=new E(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const X=new Map,G=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const W=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return new N(t,i,"html",U)},Y=133;function q(t,e){const{element:{content:i},parts:n}=t,o=document.createTreeWalker(i,Y,null,!1);let r=J(n),a=n[r],d=-1,c=0;const s=[];let l=null;for(;o.nextNode();){d++;const t=o.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(s.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==a&&a.index===d;)a.index=null!==l?-1:a.index-c,a=n[r=J(n,r)]}s.forEach(t=>t.parentNode.removeChild(t))}const K=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,Y,null,!1);for(;i.nextNode();)e++;return e},J=function(t){for(let e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){const i=t[e];if(A(i))return e}return-1};const Z=(t,e)=>`${t}--${e}`;let Q=!0;void 0===window.ShadyCSS?Q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Q=!1);const tt=t=>e=>{const i=Z(e.type,t);let n=X.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},X.set(i,n));let o=n.stringsArray.get(e.strings);if(void 0!==o)return o;const r=e.strings.join(x);if(void 0===(o=n.keyString.get(r))){const i=e.getTemplateElement();Q&&window.ShadyCSS.prepareTemplateDom(i,t),o=new E(e,i),n.keyString.set(r,o)}return n.stringsArray.set(e.strings,o),o},et=["html","svg"],it=new Set,nt=(t,e,i)=>{it.add(t);const n=i?i.element:document.createElement("template"),o=e.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=o[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{et.forEach(e=>{const i=X.get(Z(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),q(t,i)})})})(t);const d=n.content;i?function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:n},parts:o}=t;if(null==i)return void n.appendChild(e);const r=document.createTreeWalker(n,Y,null,!1);let a=J(o),d=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===i&&(d=K(e),i.parentNode.insertBefore(e,i));-1!==a&&o[a].index===c;){if(d>0){for(;-1!==a;)o[a].index+=d,a=J(o,a);return}a=J(o,a)}}(i,a,d.firstChild):d.insertBefore(a,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(i){d.insertBefore(a,d.firstChild);const t=new Set;t.add(a),q(i,t)}};window.JSCompiler_renameProperty=((t,e)=>t);const ot={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},rt=(t,e)=>e!==t&&(e==e||t==t),at={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:rt},dt=Promise.resolve(!0),ct=1,st=4,lt=8,pt=16,mt=32,ut="finalized";class ft extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=dt,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:at;if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(ut)||t.finalize(),this[ut]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:rt)(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||ot,o="function"==typeof n?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||ot.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|mt,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:at;const n=this.constructor,o=n._attributeNameForProperty(t,i);if(void 0!==o){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=this._updateState|lt,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=this._updateState&~lt}}_attributeToProperty(t,e){if(this._updateState&lt)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||at;this._updateState=this._updateState|pt,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~pt}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,o=n._classProperties.get(t)||at;n._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||this._updateState&pt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|st;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&mt}get _hasRequestedUpdate(){return this._updateState&st}get hasUpdated(){return this._updateState&ct}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&ct||(this._updateState=this._updateState|ct,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~st}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}ft[ut]=!0;const ht=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),gt=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}}),bt=(t,e,i)=>{e.constructor.createProperty(i,t)};function _t(t){return(e,i)=>void 0!==i?bt(t,e,i):gt(t,e)}function vt(t){return(e,i)=>{const n={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};return void 0!==i?yt(n,e,i):wt(n,e)}}function xt(t){return(e,i)=>{const n={get(){return this.renderRoot.querySelectorAll(t)},enumerable:!0,configurable:!0};return void 0!==i?yt(n,e,i):wt(n,e)}}const yt=(t,e,i)=>{Object.defineProperty(e,i,t)},wt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),kt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol();class Ct{constructor(t,e){if(e!==Et)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(kt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const At=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];const o=i.reduce((e,i,n)=>e+(t=>{if(t instanceof Ct)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new Ct(o,Et)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Tt=t=>t.flat?t.flat(1/0):function t(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,o=e.length;n<o;n++){const o=e[n];Array.isArray(o)?t(o,i):i.push(o)}return i}(t);class It extends ft{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){Tt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?kt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof N&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}It.finalized=!0,It.render=((t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=G.has(e),r=Q&&11===e.nodeType&&!!e.host,a=r&&!it.has(n),d=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=G.get(e);void 0===n&&(g(e,e.firstChild),G.set(e,n=new H(Object.assign({templateFactory:$},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,d,Object.assign({templateFactory:tt(n)},i)),a){const t=G.get(d);G.delete(d);const i=t.value instanceof S?t.value.template:void 0;nt(n,d,i),g(e,e.firstChild),e.appendChild(d),G.set(e,t)}!o&&r&&window.ShadyCSS.styleElement(e.host)});const St=new WeakMap,Ot=u(t=>e=>{if(!(e instanceof P)||e instanceof M||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=e,{element:n}=i;St.has(e)||(n.className=i.strings.join(" "));const{classList:o}=n,r=St.get(e);for(const e in r)e in t||o.remove(e);for(const e in t){const i=t[e];if(!r||i!==r[e]){o[i?"add":"remove"](e)}}St.set(e,t)}),Nt=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)};function Lt(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}class Rt extends It{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}class Dt extends Rt{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}const Pt=At`@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:11px;right:initial;display:inline-flex;position:absolute;top:11px;bottom:0;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox[dir=rtl] .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(2.75, 2.75);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none}`;var Ht=function(t,e){return(Ht=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function Ft(t,e){function i(){this.constructor=t}Ht(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var zt=function(){return(zt=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function Mt(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a}var Bt,Vt,jt=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),Ut={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},$t={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Xt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function Gt(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===Vt||e){var i=!1;try{t.document.addEventListener("test",function(){},{get passive(){return i=!0}})}catch(t){}Vt=i}return!!Vt&&{passive:!0}}var Wt=["touchstart","pointerdown","mousedown","keydown"],Yt=["touchend","pointerup","mouseup","contextmenu"],qt=[],Kt=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ut},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return $t},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Xt},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var n=e.cssClasses,o=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(o),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,n=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(o),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(Wt.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):Yt.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;Wt.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),Yt.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==t&&n.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&qt.length>0&&qt.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(qt.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){qt=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,n=i.VAR_FG_TRANSLATE_START,o=i.VAR_FG_TRANSLATE_END,r=e.cssClasses,a=r.FG_DEACTIVATION,d=r.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var s="",l="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),m=p.startPoint,u=p.endPoint;s=m.x+"px, "+m.y+"px",l=u.x+"px, "+u.y+"px"}this.adapter_.updateCssVariable(n,s),this.adapter_.updateCssVariable(o,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(d),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,o,r=e.x,a=e.y,d=r+i.left,c=a+i.top;if("touchstart"===t.type){var s=t;n=s.changedTouches[0].pageX-d,o=s.changedTouches[0].pageY-c}else{var l=t;n=l.pageX-d,o=l.pageY-c}return{x:n,y:o}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,n=this.activationState_,o=n.hasDeactivationUXRun,r=n.isActivated;(o||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(i)},Xt.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=zt({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(i)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,n=t.VAR_LEFT,o=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(o,this.unboundedCoords_.top+"px"))},e}(jt);const Jt=At`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`;function Zt(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}const Qt=function(t,e){void 0===e&&(e=!1);var i=t.CSS,n=Bt;if("boolean"==typeof Bt&&!e)return Bt;if(!i||"function"!=typeof i.supports)return!1;var o=i.supports("--css-vars","yes"),r=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return n=!(!o&&!r||function(t){var e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);var n=t.getComputedStyle(i),o=null!==n&&"solid"===n.borderTopStyle;return i.remove(),o}(t)),e||(Bt=n),n}(window),te=navigator.userAgent.match(/Safari/);let ee=!1;const ie=t=>{te&&!ee&&(()=>{ee=!0;const t=new H({templateFactory:$});t.appendInto(document.head),t.setValue(Jt),t.commit()})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const n=new Kt({browserSupportsCssVars:()=>Qt,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>Zt(i,":active"),isSurfaceDisabled:()=>Boolean(t.disabled),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,Gt()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,Gt()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Gt()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Gt()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return n.init(),n},ne=new WeakMap,oe=u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=>{const i=e.committer.element,n=t.interactionNode||i;let o=e.value;const r=ne.get(o);void 0!==r&&r!==n&&(o.destroy(),o=b),o===b?(o=ie(Object.assign({},t,{surfaceNode:i})),ne.set(o,n),e.setValue(o)):(void 0!==t.unbounded&&o.setUnbounded(t.unbounded),void 0!==t.disabled&&o.setUnbounded(t.disabled)),!0===t.active?o.activate():!1===t.active&&o.deactivate()}});var re={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",CHECKED:"mdc-checkbox--checked",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",UPGRADED:"mdc-checkbox--upgraded"},ae={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},de={ANIM_END_LATCH_MS:250},ce=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.currentCheckState_=ae.TRANSITION_STATE_INIT,n.currentAnimationClass_="",n.animEndLatchTimer_=0,n.enableAnimationEndHandler_=!1,n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return re},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ae},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return de},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter_.addClass(re.UPGRADED)},e.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(re.DISABLED):this.adapter_.removeClass(re.DISABLED)},e.prototype.handleAnimationEnd=function(){var t=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout(function(){t.adapter_.removeClass(t.currentAnimationClass_),t.enableAnimationEndHandler_=!1},de.ANIM_END_LATCH_MS))},e.prototype.handleChange=function(){this.transitionCheckState_()},e.prototype.transitionCheckState_=function(){if(this.adapter_.hasNativeControl()){var t=this.currentCheckState_,e=this.determineCheckState_();t!==e&&(this.updateAriaChecked_(),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter_.forceLayout(),this.adapter_.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(t,e),this.currentCheckState_=e,this.adapter_.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter_.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0))}},e.prototype.determineCheckState_=function(){var t=ae.TRANSITION_STATE_INDETERMINATE,e=ae.TRANSITION_STATE_CHECKED,i=ae.TRANSITION_STATE_UNCHECKED;return this.adapter_.isIndeterminate()?t:this.adapter_.isChecked()?e:i},e.prototype.getTransitionAnimationClass_=function(t,i){var n=ae.TRANSITION_STATE_INIT,o=ae.TRANSITION_STATE_CHECKED,r=ae.TRANSITION_STATE_UNCHECKED,a=e.cssClasses,d=a.ANIM_UNCHECKED_CHECKED,c=a.ANIM_UNCHECKED_INDETERMINATE,s=a.ANIM_CHECKED_UNCHECKED,l=a.ANIM_CHECKED_INDETERMINATE,p=a.ANIM_INDETERMINATE_CHECKED,m=a.ANIM_INDETERMINATE_UNCHECKED;switch(t){case n:return i===r?"":i===o?p:m;case r:return i===o?d:c;case o:return i===r?s:l;default:return i===o?p:m}},e.prototype.updateAriaChecked_=function(){this.adapter_.isIndeterminate()?this.adapter_.setNativeControlAttr(ae.ARIA_CHECKED_ATTR,ae.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter_.removeNativeControlAttr(ae.ARIA_CHECKED_ATTR)},e}(jt),se=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let le=class extends Dt{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.mdcFoundationClass=ce}get ripple(){return this.mdcRoot.ripple}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{forceLayout:()=>{this.mdcRoot.offsetWidth},isAttachedToDOM:()=>this.isConnected,isIndeterminate:()=>this.indeterminate,isChecked:()=>this.checked,hasNativeControl:()=>Boolean(this.formElement),setNativeControlDisabled:t=>{this.formElement.disabled=t},setNativeControlAttr:(t,e)=>{this.formElement.setAttribute(t,e)},removeNativeControlAttr:t=>{this.formElement.removeAttribute(t)}})}render(){return W`
      <div class="mdc-checkbox" @animationend="${this._animationEndHandler}" .ripple="${oe()}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              @change="${this._changeHandler}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}">
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
      </div>`}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate,this.mdcFoundation.handleChange()}_animationEndHandler(){this.mdcFoundation.handleAnimationEnd()}};le.styles=Pt,se([vt(".mdc-checkbox")],le.prototype,"mdcRoot",void 0),se([vt("input")],le.prototype,"formElement",void 0),se([_t({type:Boolean})],le.prototype,"checked",void 0),se([_t({type:Boolean})],le.prototype,"indeterminate",void 0),se([_t({type:Boolean}),Nt(function(t){this.mdcFoundation.setDisabled(t)})],le.prototype,"disabled",void 0),se([_t({type:String})],le.prototype,"value",void 0),le=se([ht("mwc-checkbox")],le);var pe={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},me={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim"},ue=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.animationFrame_=0,n.animationTimer_=0,n}return Ft(e,t),Object.defineProperty(e,"strings",{get:function(){return me},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return pe},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.animationFrame_&&cancelAnimationFrame(this.animationFrame_),this.animationTimer_&&clearTimeout(this.animationTimer_)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter_.addClass(pe.OPEN),this.adapter_.addClass(pe.ANIMATE),this.runNextAnimationFrame_(function(){t.adapter_.addClass(pe.OPENING)}),this.adapter_.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter_.addClass(pe.CLOSING)},e.prototype.isOpen=function(){return this.adapter_.hasClass(pe.OPEN)},e.prototype.isOpening=function(){return this.adapter_.hasClass(pe.OPENING)||this.adapter_.hasClass(pe.ANIMATE)},e.prototype.isClosing=function(){return this.adapter_.hasClass(pe.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=pe.OPENING,i=pe.CLOSING,n=pe.OPEN,o=pe.ANIMATE,r=pe.ROOT;this.isElement_(t.target)&&this.adapter_.elementHasClass(t.target,r)&&(this.isClosing()?(this.adapter_.removeClass(n),this.closed_(),this.adapter_.restoreFocus(),this.adapter_.notifyClose()):(this.adapter_.focusActiveNavigationItem(),this.opened_(),this.adapter_.notifyOpen()),this.adapter_.removeClass(o),this.adapter_.removeClass(e),this.adapter_.removeClass(i))},e.prototype.opened_=function(){},e.prototype.closed_=function(){},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},e.prototype.isElement_=function(t){return Boolean(t.classList)},e}(jt),fe=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened_=function(){this.adapter_.trapFocus()},e.prototype.closed_=function(){this.adapter_.releaseFocus()},e}(ue);const he=At`.mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-radius:0 0 0 0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-right-width:1px;border-right-style:solid;overflow:hidden}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-radius:0 0 0 0}.mdc-drawer .mdc-list-item{border-radius:4px}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit;height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px 0}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);z-index:5}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto}:host{display:flex;height:100%}`;var ge;ge=function(){var t=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=Array.prototype.slice,n=Element.prototype.matches||Element.prototype.msMatchesSelector,o=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]"].join(","),r=function(){function r(t,i){e(this,r),this._inertManager=i,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return t(r,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach(function(t){this._unmanageNode(t.node)},this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(t){var e=this;d(t,function(t){return e._visitNode(t)});var i=document.activeElement;if(!document.body.contains(t)){for(var n=t,o=void 0;n;){if(n.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=n;break}n=n.parentNode}o&&(i=o.activeElement)}t.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(t){if(t.nodeType===Node.ELEMENT_NODE){var e=t;e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(n.call(e,o)||e.hasAttribute("tabindex"))&&this._manageNode(e)}}},{key:"_manageNode",value:function(t){var e=this._inertManager.register(t,this);this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(t){var e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(t){var e=this;d(t,function(t){return e._unmanageNode(t)})}},{key:"_adoptInertRoot",value:function(t){var e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach(function(t){this._manageNode(t.node)},this)}},{key:"_onMutation",value:function(t,e){t.forEach(function(t){var e=t.target;if("childList"===t.type)i.call(t.addedNodes).forEach(function(t){this._makeSubtreeUnfocusable(t)},this),i.call(t.removedNodes).forEach(function(t){this._unmanageSubtree(t)},this);else if("attributes"===t.type)if("tabindex"===t.attributeName)this._manageNode(e);else if(e!==this._rootElement&&"inert"===t.attributeName&&e.hasAttribute("inert")){this._adoptInertRoot(e);var n=this._inertManager.getInertRoot(e);this._managedNodes.forEach(function(t){e.contains(t.node)&&n._manageNode(t.node)})}},this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(t){this._savedAriaHidden=t},get:function(){return this._savedAriaHidden}}]),r}(),a=function(){function i(t,n){e(this,i),this._node=t,this._overrodeFocusMethod=!1,this._inertRoots=new Set([n]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return t(i,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var t=this.node;if(n.call(t,o)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.add(t)}},{key:"removeInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(t){this._throwIfDestroyed(),this._savedTabIndex=t},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),i}();function d(t,e,i){if(t.nodeType==Node.ELEMENT_NODE){var n=t;e&&e(n);var o=n.shadowRoot;if(o)return void d(o,e);if("content"==n.localName){for(var r=n,a=r.getDistributedNodes?r.getDistributedNodes():[],c=0;c<a.length;c++)d(a[c],e);return}if("slot"==n.localName){for(var s=n,l=s.assignedNodes?s.assignedNodes({flatten:!0}):[],p=0;p<l.length;p++)d(l[p],e);return}}for(var m=t.firstChild;null!=m;)d(m,e),m=m.nextSibling}function c(t){if(!t.querySelector("style#inert-style")){var e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n}\n",t.appendChild(e)}}var s=new(function(){function o(t){if(e(this,o),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),c(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return t(o,[{key:"setInert",value:function(t,e){if(e){if(this._inertRoots.has(t))return;var i=new r(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,i),!this._document.body.contains(t))for(var n=t.parentNode;n;)11===n.nodeType&&c(n),n=n.parentNode}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}},{key:"getInertRoot",value:function(t){return this._inertRoots.get(t)}},{key:"register",value:function(t,e){var i=this._managedNodes.get(t);return void 0!==i?i.addInertRoot(e):i=new a(t,e),this._managedNodes.set(t,i),i}},{key:"deregister",value:function(t,e){var i=this._managedNodes.get(t);return i?(i.removeInertRoot(e),i.destroyed&&this._managedNodes.delete(t),i):null}},{key:"_onDocumentLoaded",value:function(){i.call(this._document.querySelectorAll("[inert]")).forEach(function(t){this.setInert(t,!0)},this),this._observer.observe(this._document.body,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(t,e){var o=this;t.forEach(function(t){switch(t.type){case"childList":i.call(t.addedNodes).forEach(function(t){if(t.nodeType===Node.ELEMENT_NODE){var e=i.call(t.querySelectorAll("[inert]"));n.call(t,"[inert]")&&e.unshift(t),e.forEach(function(t){this.setInert(t,!0)},o)}},o);break;case"attributes":if("inert"!==t.attributeName)return;var e=t.target,r=e.hasAttribute("inert");o.setInert(e,r)}},this)}}]),o}())(document);Element.prototype.hasOwnProperty("inert")||Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){s.setInert(this,t)}})},"object"==typeof exports&&"undefined"!=typeof module?ge():"function"==typeof define&&define.amd?define("inert",ge):ge(),function(t){const e=Symbol(),i=Symbol(),n=Symbol(),o=Symbol(),r=Symbol(),a=Symbol(),d=Symbol(),c=Symbol(),s=Symbol(),l=Symbol(),p=Symbol(),m=Symbol(),u=Symbol();t.$blockingElements=new class{constructor(){this[e]=[],this[n]=[],this[i]=new Set}destructor(){this[s](this[n]),this[e]=null,this[n]=null,this[i]=null}get top(){const t=this[e];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[a](t),this[e].push(t))}remove(t){const i=this[e].indexOf(t);return-1!==i&&(this[e].splice(i,1),i===this[e].length&&this[a](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[e].indexOf(t)}[a](e){const o=this[i],r=this[n];if(!e)return this[s](r),o.clear(),void(this[n]=[]);const a=this[l](e);if(a[a.length-1].parentNode!==t.body)throw Error("Non-connected element cannot be a blocking element");this[n]=a;const m=this[p](e);if(!r.length)return void this[c](a,m,o);let u=r.length-1,f=a.length-1;for(;u>0&&f>0&&r[u]===a[f];)u--,f--;r[u]!==a[f]&&this[d](r[u],a[f]),u>0&&this[s](r.slice(0,u)),f>0&&this[c](a.slice(0,f),m)}[d](t,e){const i=t[o];this[m](t)&&!t.inert&&(t.inert=!0,i.add(t)),i.has(e)&&(e.inert=!1,i.delete(e)),e[r]=t[r],t[r]=null,e[o]=i,t[o]=null}[s](t){t.forEach(t=>{t[r].disconnect(),t[r]=null;for(let e of t[o])e.inert=!1;t[o]=null})}[c](t,e,i){for(let n=0,a=t.length;n<a;n++){const a=t[n],d=a.parentNode.children,c=new Set;for(let t=0;t<d.length;t++){const n=d[t];n===a||!this[m](n)||e&&e.has(n)||(i&&n.inert?i.add(n):(n.inert=!0,c.add(n)))}a[o]=c,a[r]=new MutationObserver(this[u].bind(this)),a[r].observe(a.parentNode,{childList:!0})}}[u](e){const r=this[n],a=this[i];for(const i of e){const e=i.target===t.body?r.length:r.indexOf(i.target),n=r[e-1],d=n[o];for(const t of i.removedNodes){if(t===n)return console.info("Detected removal of the top Blocking Element."),void this.pop();d.has(t)&&(t.inert=!1,d.delete(t))}for(const t of i.addedNodes)this[m](t)&&(a&&t.inert?a.add(t):(t.inert=!0,d.add(t)))}}[m](t){return!1===/^(style|template|script)$/.test(t.localName)}[l](e){const i=[];let n=e;for(;n&&n!==t.body;){if(n.nodeType===Node.ELEMENT_NODE&&i.push(n),n.assignedSlot){for(;n=n.assignedSlot;)i.push(n);n=i.pop();continue}const t=n.getDestinationInsertionPoints?n.getDestinationInsertionPoints():[];if(t.length){for(let e=0;e<t.length;e++)i.push(t[e]);n=i.pop()}else n=n.parentNode||n.host}return i}[p](t){const e=t.shadowRoot;if(!e)return null;const i=new Set;let n,o,r;const a=e.querySelectorAll("slot");if(a.length&&a[0].assignedNodes){for(n=0;n<a.length;n++)for(r=a[n].assignedNodes({flatten:!0}),o=0;o<r.length;o++)r[o].nodeType===Node.ELEMENT_NODE&&i.add(r[o]);return i}const d=e.querySelectorAll("content");if(d.length&&d[0].getDistributedNodes)for(n=0;n<d.length;n++)for(r=d[n].getDistributedNodes(),o=0;o<r.length;o++)r[o].nodeType===Node.ELEMENT_NODE&&i.add(r[o]);return i}}}(document);var be=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let _e=class extends Rt{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?fe:ue}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(me.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(me.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{document.$blockingElements.push(this),this.appContent.inert=!0},releaseFocus:()=>{document.$blockingElements.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof fe&&this.mdcFoundation.handleScrimClick()}render(){const t="dismissible"===this.type||"modal"===this.type,e="modal"===this.type,i=this.hasHeader?W`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return W`
      <aside class="mdc-drawer
          ${Ot({"mdc-drawer--dismissible":t,"mdc-drawer--modal":e})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${e?W`<div class="mdc-drawer-scrim" @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",t=>this.mdcFoundation.handleKeydown(t)),this.mdcRoot.addEventListener("transitionend",t=>this.mdcFoundation.handleTransitionEnd(t))}updated(t){t.has("type")&&this.createFoundation()}};_e.styles=he,be([vt(".mdc-drawer")],_e.prototype,"mdcRoot",void 0),be([vt(".mdc-drawer-app-content")],_e.prototype,"appContent",void 0),be([Nt(function(t){""!==this.type&&(t?this.mdcFoundation.open():this.mdcFoundation.close())}),_t({type:Boolean,reflect:!0})],_e.prototype,"open",void 0),be([_t({type:Boolean})],_e.prototype,"hasHeader",void 0),be([_t({reflect:!0})],_e.prototype,"type",void 0),_e=be([ht("mwc-drawer")],_e);const ve=At`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}.mdc-fab{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mdc-fab.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}:host{outline:none}`,xe=document.createElement("link");xe.rel="stylesheet",xe.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild(xe);var ye=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let we=class extends It{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const t={"mdc-fab--mini":this.mini,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended},e=""!==this.label&&this.extended;return W`
      <button
          .ripple="${oe()}"
          class="mdc-fab ${Ot(t)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}">
        ${e&&this.showIconAtEnd?this.label:""}
        ${this.icon?W`<span class="material-icons mdc-fab__icon">${this.icon}</span>`:""}
        ${e&&!this.showIconAtEnd?this.label:""}
      </button>`}};we.styles=ve,ye([_t({type:Boolean})],we.prototype,"mini",void 0),ye([_t({type:Boolean})],we.prototype,"exited",void 0),ye([_t({type:Boolean})],we.prototype,"disabled",void 0),ye([_t({type:Boolean})],we.prototype,"extended",void 0),ye([_t({type:Boolean})],we.prototype,"showIconAtEnd",void 0),ye([_t()],we.prototype,"icon",void 0),ye([_t()],we.prototype,"label",void 0),we=ye([ht("mwc-fab")],we);const ke=At`.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{left:-18px;right:initial;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}`;var Ee={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},Ce={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},Ae=function(t){function e(i){return t.call(this,zt({},e.defaultAdapter,i))||this}return Ft(e,t),Object.defineProperty(e,"strings",{get:function(){return Ce},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Ee},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlChecked:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setChecked=function(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)},e.prototype.setDisabled=function(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(Ee.DISABLED):this.adapter_.removeClass(Ee.DISABLED)},e.prototype.handleChange=function(t){var e=t.target;this.updateCheckedStyling_(e.checked)},e.prototype.updateCheckedStyling_=function(t){t?this.adapter_.addClass(Ee.CHECKED):this.adapter_.removeClass(Ee.CHECKED)},e}(jt),Te=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Ie=class extends Dt{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.mdcFoundationClass=Ae}_changeHandler(t){this.mdcFoundation.handleChange(t),this.checked=this.formElement.checked}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{setNativeControlChecked:t=>{this.formElement.checked=t},setNativeControlDisabled:t=>{this.formElement.disabled=t}})}get ripple(){return this.rippleNode.ripple}render(){return W`
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay" .ripple="${oe({interactionNode:this})}">
          <div class="mdc-switch__thumb">
            <input type="checkbox" id="basic-switch" class="mdc-switch__native-control" role="switch" @change="${this._changeHandler}">
          </div>
        </div>
      </div>
      <slot></slot>`}};Ie.styles=ke,Te([_t({type:Boolean}),Nt(function(t){this.mdcFoundation.setChecked(t)})],Ie.prototype,"checked",void 0),Te([_t({type:Boolean}),Nt(function(t){this.mdcFoundation.setDisabled(t)})],Ie.prototype,"disabled",void 0),Te([vt(".mdc-switch")],Ie.prototype,"mdcRoot",void 0),Te([vt("input")],Ie.prototype,"formElement",void 0),Te([vt(".mdc-switch__thumb-underlay")],Ie.prototype,"rippleNode",void 0),Ie=Te([ht("mwc-switch")],Ie);const Se=At`.mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}[dir=rtl] .mdc-form-field>label,.mdc-form-field[dir=rtl]>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1;margin-left:auto;padding-right:4px}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end[dir=rtl]>label{margin-right:auto;padding-left:4px}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch)[dir=rtl]{margin-left:10px}`;var Oe={ROOT:"mdc-form-field"},Ne={LABEL_SELECTOR:".mdc-form-field > label"},Le=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.clickHandler_=function(){return n.handleClick_()},n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Oe},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ne},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("click",this.clickHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("click",this.clickHandler_)},e.prototype.handleClick_=function(){var t=this;this.adapter_.activateInputRipple(),requestAnimationFrame(function(){return t.adapter_.deactivateInputRipple()})},e}(jt),Re=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class De extends Rt{constructor(){super(...arguments),this.alignEnd=!1,this.label="",this.mdcFoundationClass=Le}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:()=>{const t=this.input;t instanceof Dt&&t.ripple&&t.ripple.activate()},deactivateInputRipple:()=>{const t=this.input;t instanceof Dt&&t.ripple&&t.ripple.deactivate()}}}get input(){return function(t,e){for(const i of t.assignedNodes({flatten:!0}))if(i.nodeType===Node.ELEMENT_NODE){const t=i;if(t.matches(e))return t}return null}(this.slotEl,"*")}render(){return W`
      <div class="mdc-form-field ${Ot({"mdc-form-field--align-end":this.alignEnd})}">
        <slot></slot>
        <label class="mdc-label" @click="${this._labelClick}">${this.label}</label>
      </div>`}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}De.styles=Se,Re([_t({type:Boolean})],De.prototype,"alignEnd",void 0),Re([_t({type:String}),Nt(async function(t){const e=this.input;e&&("input"===e.localName?e.setAttribute("aria-label",t):e instanceof Dt&&(await e.updateComplete,e.setAriaLabel(t)))})],De.prototype,"label",void 0),Re([vt(".mdc-form-field")],De.prototype,"mdcRoot",void 0),Re([vt("slot")],De.prototype,"slotEl",void 0),Re([vt("label")],De.prototype,"labelEl",void 0),customElements.define("mwc-formfield",De);var Pe={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},He={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Fe={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},ze=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.navClickHandler_=function(){return n.adapter_.notifyNavigationIconClicked()},n}return Ft(e,t),Object.defineProperty(e,"strings",{get:function(){return Fe},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return Pe},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return He},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},registerNavigationIconInteractionHandler:function(){},deregisterNavigationIconInteractionHandler:function(){},notifyNavigationIconClicked:function(){},registerScrollHandler:function(){},deregisterScrollHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.initScrollHandler(),this.initResizeHandler_(),this.adapter_.registerNavigationIconInteractionHandler("click",this.navClickHandler_)},e.prototype.destroy=function(){this.destroyScrollHandler(),this.destroyResizeHandler_(),this.adapter_.deregisterNavigationIconInteractionHandler("click",this.navClickHandler_)},e.prototype.initScrollHandler=function(){this.scrollHandler_&&this.adapter_.registerScrollHandler(this.scrollHandler_)},e.prototype.destroyScrollHandler=function(){this.scrollHandler_&&this.adapter_.deregisterScrollHandler(this.scrollHandler_)},e.prototype.initResizeHandler_=function(){this.resizeHandler_&&this.adapter_.registerResizeHandler(this.resizeHandler_)},e.prototype.destroyResizeHandler_=function(){this.resizeHandler_&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e}(jt),Me=0,Be=function(t){function e(e){var i=t.call(this,e)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=Me,i.resizeDebounceId_=Me,i.lastScrollPosition_=i.adapter_.getViewportScrollY(),i.topAppBarHeight_=i.adapter_.getTopAppBarHeight(),i.scrollHandler_=function(){return i.topAppBarScrollHandler_()},i.resizeHandler_=function(){return i.topAppBarResizeHandler_()},i}return Ft(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter_.setStyle("top","")},e.prototype.checkForUpdate_=function(){var t=-this.topAppBarHeight_,e=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>t,n=e&&i;if(n)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return n},e.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var t=this.currentAppBarOffsetTop_;Math.abs(t)>=this.topAppBarHeight_&&(t=-He.MAX_TOP_APP_BAR_HEIGHT),this.adapter_.setStyle("top",t+"px")}},e.prototype.topAppBarScrollHandler_=function(){var t=Math.max(this.adapter_.getViewportScrollY(),0),e=t-this.lastScrollPosition_;this.lastScrollPosition_=t,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=e,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},e.prototype.topAppBarResizeHandler_=function(){var t=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout(function(){t.resizeThrottleId_=Me,t.throttledResizeHandler_()},He.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout(function(){t.topAppBarScrollHandler_(),t.isCurrentlyBeingResized_=!1,t.resizeDebounceId_=Me},He.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.throttledResizeHandler_=function(){var t=this.adapter_.getTopAppBarHeight();this.topAppBarHeight_!==t&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-t,this.topAppBarHeight_=t),this.topAppBarScrollHandler_()},e}(ze),Ve=function(t){function e(e){var i=t.call(this,e)||this;return i.isCollapsed_=!1,i}return Ft(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.isCollapsed_},enumerable:!0,configurable:!0}),e.prototype.init=function(){var e=this;t.prototype.init.call(this),this.adapter_.getTotalActionItems()>0&&this.adapter_.addClass(Pe.SHORT_HAS_ACTION_ITEM_CLASS),this.adapter_.hasClass(Pe.SHORT_COLLAPSED_CLASS)||(this.scrollHandler_=function(){return e.shortAppBarScrollHandler_()},this.adapter_.registerScrollHandler(this.scrollHandler_),this.shortAppBarScrollHandler_())},e.prototype.destroy=function(){t.prototype.destroy.call(this)},e.prototype.shortAppBarScrollHandler_=function(){this.adapter_.getViewportScrollY()<=0?this.isCollapsed_&&(this.adapter_.removeClass(Pe.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!1):this.isCollapsed_||(this.adapter_.addClass(Pe.SHORT_COLLAPSED_CLASS),this.isCollapsed_=!0)},e}(ze),je=function(t){function e(e){var i=t.call(this,e)||this;return i.wasScrolled_=!1,i.scrollHandler_=function(){return i.fixedScrollHandler_()},i}return Ft(e,t),e.prototype.fixedScrollHandler_=function(){this.adapter_.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter_.removeClass(Pe.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter_.addClass(Pe.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},e}(Be);const Ue=At`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar__action-item,.mdc-top-app-bar__navigation-icon{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;box-sizing:border-box;width:48px;height:48px;padding:12px;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__navigation-icon::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--unbounded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-activation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-top-app-bar__action-item.mdc-ripple-upgraded--foreground-deactivation::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-top-app-bar__action-item::before,.mdc-top-app-bar__action-item::after,.mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar__navigation-icon::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::before,.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::before,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar__action-item.mdc-ripple-upgraded::after,.mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:inline-flex}.mdc-top-app-bar{flex:1}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0}.mwc-top-app-bar--center-title .mdc-top-app-bar__section--align-start{flex-basis:0%}.mwc-top-app-bar--center-title .mdc-top-app-bar__section--align-end{flex-basis:0%}.mdc-top-app-bar--prominent slot[name=navigationIcon]::slotted(*),.mdc-top-app-bar--prominent slot[name=actionItems]::slotted(*){align-self:flex-start}.mdc-top-app-bar--short-collapsed slot[name=actionItems]::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}slot[name=navigationIcon]::slotted(*),slot[name=actionItems]::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}`;var $e=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Xe=class extends Rt{constructor(){super(...arguments),this.type="",this.dense=!1,this.centerTitle=!1}get mdcFoundationClass(){return"fixed"===this.type||"prominentFixed"===this.type?je:"short"===this.type||"shortCollapsed"===this.type?Ve:Be}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(t){const e=this.scrollTarget;this._scrollTarget=t,this.requestUpdate("scrollTarget",e)}render(){const t={"mdc-top-app-bar--fixed":"fixed"===this.type||"prominentFixed"===this.type,"mdc-top-app-bar--short":"shortCollapsed"===this.type||"short"===this.type,"mdc-top-app-bar--short-collapsed":"shortCollapsed"===this.type,"mdc-top-app-bar--prominent":"prominent"===this.type||"prominentFixed"===this.type,"mdc-top-app-bar--dense":this.dense,"mwc-top-app-bar--center-title":this.centerTitle},e=this.centerTitle?"":W`
      <span class="mdc-top-app-bar__title"><slot name="title"></slot></span>
    `,i=this.centerTitle?W`
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">
        <span class="mdc-top-app-bar__title"><slot name="title"></slot></span>
      </section>`:"";return W`
      <header class="mdc-top-app-bar ${Ot(t)}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <slot name="navigationIcon"></slot>
          ${e}
        </section>
        ${i}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>`}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{setStyle:(t,e)=>this.mdcRoot.style.setProperty(t,e),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,registerNavigationIconInteractionHandler:(t,e)=>{this._navIconSlot&&this._navIconSlot.addEventListener(t,e)},deregisterNavigationIconInteractionHandler:(t,e)=>{this._navIconSlot&&this._navIconSlot.removeEventListener(t,e)},notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(Fe.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},registerScrollHandler:t=>this.scrollTarget.addEventListener("scroll",t),deregisterScrollHandler:t=>this.scrollTarget.removeEventListener("scroll",t),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),getViewportScrollY:()=>this.scrollTarget[this.scrollTarget===window?"pageYOffset":"scrollTop"],getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}firstUpdated(){}updated(t){(t.has("type")||t.has("scrollTarget"))&&this.createFoundation()}createFoundation(){super.createFoundation();const t=this.scrollTarget===window;this.mdcRoot.style.position=t?"":"absolute",this.mdcRoot.style.top=t?"0px":""}};Xe.styles=Ue,$e([vt(".mdc-top-app-bar")],Xe.prototype,"mdcRoot",void 0),$e([vt('[name="navigationIcon"]')],Xe.prototype,"_navIconSlot",void 0),$e([vt('[name="actionItems"]')],Xe.prototype,"_actionItemsSlot",void 0),$e([_t({reflect:!0})],Xe.prototype,"type",void 0),$e([_t({type:Boolean,reflect:!0})],Xe.prototype,"dense",void 0),$e([_t({type:Boolean,reflect:!0})],Xe.prototype,"centerTitle",void 0),Xe=$e([ht("mwc-top-app-bar")],Xe);var Ge={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},We={ARIA_PRESSED:"aria-pressed",CHANGE_EVENT:"MDCIconButtonToggle:change"},Ye=function(t){function e(i){return t.call(this,zt({},e.defaultAdapter,i))||this}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ge},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return We},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},setAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.setAttr(We.ARIA_PRESSED,""+this.isOn())},e.prototype.handleClick=function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter_.hasClass(Ge.ICON_BUTTON_ON)},e.prototype.toggle=function(t){void 0===t&&(t=!this.isOn()),t?this.adapter_.addClass(Ge.ICON_BUTTON_ON):this.adapter_.removeClass(Ge.ICON_BUTTON_ON),this.adapter_.setAttr(We.ARIA_PRESSED,""+t)},e}(jt),qe=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};class Ke extends Rt{constructor(){super(...arguments),this.mdcFoundationClass=Ye,this.label="",this.disabled=!1,this.icon="",this.offIcon="",this.on=!1}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{setAttr:(t,e)=>{this.mdcRoot.setAttribute(t,e)},notifyChange:t=>{""!==this.offIcon&&this.dispatchEvent(new CustomEvent("MDCIconButtonToggle:change",{detail:t,bubbles:!0}))}})}handleClick(){""!==this.offIcon&&(this.on=!this.on,this.mdcFoundation.handleClick())}focus(){this.mdcRoot.focus()}updated(){""===this.offIcon&&(this.on=!0)}render(){return W`
      <button
        .ripple="${oe()}"
        class="mdc-icon-button"
        @click="${this.handleClick}"
        aria-hidden="true"
        aria-label="${this.label}"
        ?disabled="${this.disabled}">
        <i class="material-icons mdc-icon-button__icon">${this.offIcon}</i>
        <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">${this.icon}</i>
      </button>`}}qe([vt(".mdc-icon-button")],Ke.prototype,"mdcRoot",void 0),qe([_t({type:String})],Ke.prototype,"label",void 0),qe([_t({type:Boolean,reflect:!0})],Ke.prototype,"disabled",void 0),qe([_t({type:String})],Ke.prototype,"icon",void 0),qe([_t({type:String})],Ke.prototype,"offIcon",void 0),qe([_t({type:Boolean,reflect:!0}),Nt(function(t){this.mdcFoundation.toggle(t)})],Ke.prototype,"on",void 0);const Je=At`.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-icon-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:.04}.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before,.mdc-icon-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-block;outline:none}.mdc-ripple-upgraded:focus::before,.mdc-ripple-upgraded:focus::after{background-color:currentColor;background-color:var(--mdc-theme-on-primary, currentColor);opacity:var(--mdc-icon-button-ripple-opacity, 0.12)}`;var Ze=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Qe=class extends Ke{};Qe.styles=Je,Qe=Ze([ht("mwc-icon-button")],Qe);const ti=At`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}[dir=rtl] .mdc-snackbar__actions,.mdc-snackbar__actions[dir=rtl]{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before,.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before,.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}`;var ei={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},ii={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},ni={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},oi=ei.OPENING,ri=ei.OPEN,ai=ei.CLOSING,di=ii.REASON_ACTION,ci=ii.REASON_DISMISS,si=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.autoDismissTimer_=0,n.autoDismissTimeoutMs_=ni.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape_=!0,n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return ei},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ii},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ni},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(oi),this.adapter_.removeClass(ri),this.adapter_.removeClass(ai)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(ai),this.adapter_.addClass(oi),this.adapter_.announce(),this.runNextAnimationFrame_(function(){t.adapter_.addClass(ri),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),t.autoDismissTimer_=setTimeout(function(){t.close(ci)},t.getTimeoutMs())},ni.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(ei.CLOSING),this.adapter_.removeClass(ei.OPEN),this.adapter_.removeClass(ei.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},ni.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},e.prototype.setTimeoutMs=function(t){var e=ni.MIN_AUTO_DISMISS_TIMEOUT_MS,i=ni.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t<=i&&t>=e))throw new Error("timeoutMs must be an integer in the range "+e+"–"+i+", but got '"+t+"'");this.autoDismissTimeoutMs_=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(ci)},e.prototype.handleActionButtonClick=function(t){this.close(di)},e.prototype.handleActionIconClick=function(t){this.close(ci)},e.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(ei.OPENING),this.adapter_.removeClass(ei.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},e}(jt),li=ni.ARIA_LIVE_DELAY_MS,pi=ii.ARIA_LIVE_LABEL_TEXT_ATTR;var mi=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const{OPENING_EVENT:ui,OPENED_EVENT:fi,CLOSING_EVENT:hi,CLOSED_EVENT:gi}=si.strings;let bi=class extends Rt{constructor(){super(...arguments),this.mdcFoundationClass=si,this.isOpen=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return W`
      <div class="mdc-snackbar ${Ot(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          <div class="mdc-snackbar__label"
               role="status"
               aria-live="polite">
            ${this.labelText}
          </div>
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign({},Lt(this.mdcRoot),{announce:()=>(function(t,e){void 0===e&&(e=t);var i=t.getAttribute("aria-live"),n=e.textContent.trim();n&&i&&(t.setAttribute("aria-live","off"),e.textContent="",e.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',e.setAttribute(pi,n),setTimeout(function(){t.setAttribute("aria-live",i),e.removeAttribute(pi),e.textContent=n},li))})(this.labelElement),notifyClosed:t=>{this.isOpen=!1,this.dispatchEvent(new CustomEvent(gi,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>this.dispatchEvent(new CustomEvent(hi,{bubbles:!0,cancelable:!0,detail:{reason:t}})),notifyOpened:()=>{this.isOpen=!0,this.dispatchEvent(new CustomEvent(fi,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>this.dispatchEvent(new CustomEvent(ui,{bubbles:!0,cancelable:!0}))})}open(){this.mdcFoundation.open()}close(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.mdcFoundation.close(t)}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}};bi.styles=ti,mi([vt(".mdc-snackbar")],bi.prototype,"mdcRoot",void 0),mi([vt(".mdc-snackbar__label")],bi.prototype,"labelElement",void 0),mi([_t({type:Boolean,reflect:!0})],bi.prototype,"isOpen",void 0),mi([Nt(function(t){this.mdcFoundation.setTimeoutMs(t)}),_t({type:Number})],bi.prototype,"timeoutMs",void 0),mi([Nt(function(t){this.mdcFoundation.setCloseOnEscape(t)}),_t({type:Boolean})],bi.prototype,"closeOnEscape",void 0),mi([_t()],bi.prototype,"labelText",void 0),mi([_t({type:Boolean})],bi.prototype,"stacked",void 0),mi([_t({type:Boolean})],bi.prototype,"leading",void 0),bi=mi([ht("mwc-snackbar")],bi);const _i=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach((t,i)=>e.constructor._observers.set(i,t))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)})}}e.constructor._observers.set(i,t)};function vi(t,e){let i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:n,bubbles:o,composed:o}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,o,!1,n),t.dispatchEvent(i)}function xi(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}class yi extends It{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}var wi,ki,Ei={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},Ci={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DEFAULT_BUTTON_SELECTOR:".mdc-dialog__button--default",DESTROY_ACTION:"destroy",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Ai={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Ti=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.layoutFrame_=0,n.escapeKeyAction_=Ci.CLOSE_ACTION,n.scrimClickAction_=Ci.CLOSE_ACTION,n.autoStackButtons_=!0,n.areButtonsStacked_=!1,n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ei},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ci},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ai},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.hasClass(Ei.STACKED)&&this.setAutoStackButtons(!1)},e.prototype.destroy=function(){this.isOpen_&&this.close(Ci.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},e.prototype.open=function(){var t=this;this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.addClass(Ei.OPENING),this.runNextAnimationFrame_(function(){t.adapter_.addClass(Ei.OPEN),t.adapter_.addBodyClass(Ei.SCROLL_LOCK),t.layout(),t.animationTimer_=setTimeout(function(){t.handleAnimationTimerEnd_(),t.adapter_.trapFocus(),t.adapter_.notifyOpened()},Ai.DIALOG_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.isOpen_&&(this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(Ei.CLOSING),this.adapter_.removeClass(Ei.OPEN),this.adapter_.removeBodyClass(Ei.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout(function(){e.adapter_.releaseFocus(),e.handleAnimationTimerEnd_(),e.adapter_.notifyClosed(t)},Ai.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.isOpen_},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction_=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction_},e.prototype.setScrimClickAction=function(t){this.scrimClickAction_=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons_=t},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.handleInteraction=function(t){var e="click"===t.type,i="Enter"===t.key||13===t.keyCode,n="Space"===t.key||32===t.keyCode,o=this.adapter_.eventTargetMatches(t.target,Ci.SCRIM_SELECTOR),r=!this.adapter_.eventTargetMatches(t.target,Ci.SUPPRESS_DEFAULT_PRESS_SELECTOR);if(e&&o&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else if(e||n||i){var a=this.adapter_.getActionFromEvent(t);a?this.close(a):i&&r&&this.adapter_.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},e.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},e.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(Ei.OPENING),this.adapter_.removeClass(Ei.CLOSING)},e.prototype.runNextAnimationFrame_=function(t){var e=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame(function(){e.animationFrame_=0,clearTimeout(e.animationTimer_),e.animationTimer_=setTimeout(t,0)})},e.prototype.detectStackedButtons_=function(){this.adapter_.removeClass(Ei.STACKED);var t=this.adapter_.areButtonsStacked();t&&this.adapter_.addClass(Ei.STACKED),t!==this.areButtonsStacked_&&(this.adapter_.reverseButtons(),this.areButtonsStacked_=t)},e.prototype.detectScrollableContent_=function(){this.adapter_.removeClass(Ei.SCROLLABLE),this.adapter_.isContentScrollable()&&this.adapter_.addClass(Ei.SCROLLABLE)},e}(jt),Ii={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Si={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Oi={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function Ni(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===ki||e){var i=!1;try{t.document.addEventListener("test",function(){},{get passive(){return i=!0}})}catch(t){}ki=i}return!!ki&&{passive:!0}}var Li=["touchstart","pointerdown","mousedown","keydown"],Ri=["touchend","pointerup","mouseup","contextmenu"],Di=[],Pi=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.activationAnimationHasEnded_=!1,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.fgScale_="0",n.frame_={width:0,height:0},n.initialSize_=0,n.layoutFrame_=0,n.maxRadius_=0,n.unboundedCoords_={left:0,top:0},n.activationState_=n.defaultActivationState_(),n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.activateHandler_=function(t){return n.activate_(t)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ii},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Si},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Oi},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var n=e.cssClasses,o=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.addClass(o),t.adapter_.isUnbounded()&&(t.adapter_.addClass(r),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,n=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter_.removeClass(n),t.adapter_.removeClass(o),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(Li.forEach(function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):Ri.forEach(function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;Li.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),Ri.forEach(function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)})},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var n=this.previousActivationEvent_;if(!(n&&void 0!==t&&n.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Di.length>0&&Di.some(function(t){return e.adapter_.containsEventTarget(t)})?this.resetActivationState_():(void 0!==t&&(Di.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){Di=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())}))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,n=i.VAR_FG_TRANSLATE_START,o=i.VAR_FG_TRANSLATE_END,r=e.cssClasses,a=r.FG_DEACTIVATION,d=r.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var s="",l="";if(!this.adapter_.isUnbounded()){var p=this.getFgTranslationCoordinates_(),m=p.startPoint,u=p.endPoint;s=m.x+"px, "+m.y+"px",l=u.x+"px, "+u.y+"px"}this.adapter_.updateCssVariable(n,s),this.adapter_.updateCssVariable(o,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(d),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},c)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var n,o,r=e.x,a=e.y,d=r+i.left,c=a+i.top;if("touchstart"===t.type){var s=t;n=s.changedTouches[0].pageX-d,o=s.changedTouches[0].pageY-c}else{var l=t;n=l.pageX-d,o=l.pageY-c}return{x:n,y:o}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,n=this.activationState_,o=n.hasDeactivationUXRun,r=n.isActivated;(o||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter_.removeClass(i)},Oi.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=zt({},e);e.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(i)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,n=t.VAR_LEFT,o=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(r,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(o,this.unboundedCoords_.top+"px"))},e}(jt);const Hi=At`/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}`,Fi=function(t,e){void 0===e&&(e=!1);var i=t.CSS,n=wi;if("boolean"==typeof wi&&!e)return wi;if(!i||"function"!=typeof i.supports)return!1;var o=i.supports("--css-vars","yes"),r=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return n=!(!o&&!r||function(t){var e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.body.appendChild(i);var n=t.getComputedStyle(i),o=null!==n&&"solid"===n.borderTopStyle;return i.parentNode&&i.parentNode.removeChild(i),o}(t)),e||(wi=n),n}(window),zi=navigator.userAgent.match(/Safari/);let Mi=!1;const Bi=t=>{zi&&!Mi&&(()=>{Mi=!0;const t=new H({templateFactory:$});t.appendInto(document.head),t.setValue(Hi),t.commit()})();const e=t.surfaceNode,i=t.interactionNode||e;i.getRootNode()!==e.getRootNode()&&""===i.style.position&&(i.style.position="relative");const n=Object.assign({browserSupportsCssVars:()=>Fi,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>Zt(i,":active"),isSurfaceDisabled:()=>Boolean(t.disabled),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>i.contains(t),registerInteractionHandler:(t,e)=>i.addEventListener(t,e,Ni()),deregisterInteractionHandler:(t,e)=>i.removeEventListener(t,e,Ni()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,Ni()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,Ni()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,i)=>e.style.setProperty(t,i),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})},t.adapter),o=new Pi(n);return o.init(),o},Vi=new WeakMap,ji=u(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=>{const i=e.committer.element,n=t.interactionNode||i;let o=e.value;const r=Vi.get(o);void 0!==r&&r!==n&&(o.destroy(),o=b),o===b?(o=Bi(Object.assign({},t,{surfaceNode:i})),Vi.set(o,n),e.setValue(o)):(void 0!==t.unbounded&&o.setUnbounded(t.unbounded),void 0!==t.disabled&&o.setUnbounded(t.disabled)),!0===t.active?o.activate():!1===t.active&&o.deactivate()}}),Ui=At`/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.mdc-button {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 8px 0 8px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  height: 36px;
  border: none;
  outline: none;
  /* @alternate */
  line-height: inherit;
  user-select: none;
  -webkit-appearance: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 4px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.37);
  cursor: default;
  pointer-events: none;
}
.mdc-button.mdc-button--dense {
  border-radius: 4px;
}
.mdc-button:not(:disabled) {
  background-color: transparent;
}
.mdc-button .mdc-button__icon {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
  display: inline-block;
  width: 18px;
  height: 18px;
  font-size: 18px;
  vertical-align: top;
}
[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
.mdc-button:not(:disabled) {
  color: #6200ee;
  /* @alternate */
  color: var(--mdc-theme-primary, #6200ee);
}

.mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
}

svg.mdc-button__icon {
  fill: currentColor;
}

.mdc-button--raised .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}
[dir=rtl] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--unelevated .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--outlined .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}
.mdc-button--raised .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}
[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}

.mdc-button--raised,
.mdc-button--unelevated {
  padding: 0 16px 0 16px;
}
.mdc-button--raised:disabled,
.mdc-button--unelevated:disabled {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.37);
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  background-color: #6200ee;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  color: #fff;
  /* @alternate */
  color: var(--mdc-theme-on-primary, #fff);
}

.mdc-button--raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-button--raised:hover, .mdc-button--raised:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:disabled {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}

.mdc-button--outlined {
  border-style: solid;
  padding: 0 15px 0 15px;
  border-width: 1px;
}
.mdc-button--outlined:disabled {
  border-color: rgba(0, 0, 0, 0.37);
}
.mdc-button--outlined:not(:disabled) {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}

.mdc-button--dense {
  height: 32px;
  font-size: 0.8125rem;
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden;
}
.mdc-ripple-surface--test-edge-var-bug::before {
  border: var(--mdc-ripple-surface-test-edge-var);
}

.mdc-button {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mdc-button::before, .mdc-button::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-button::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
}
.mdc-button.mdc-ripple-upgraded::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button.mdc-ripple-upgraded::after {
  top: 0;
  /* @noflip */
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-button.mdc-ripple-upgraded--unbounded::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-button.mdc-ripple-upgraded--foreground-activation::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button::before, .mdc-button::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-button.mdc-ripple-upgraded::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-button::before, .mdc-button::after {
  background-color: #6200ee;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button::before, .mdc-button::after {
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
.mdc-button:hover::before {
  opacity: 0.04;
}
.mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-button:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-button:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-button.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}

.mdc-button--raised::before, .mdc-button--raised::after,
.mdc-button--unelevated::before,
.mdc-button--unelevated::after {
  background-color: #fff;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button--raised::before, .mdc-button--raised::after,
.mdc-button--unelevated::before,
.mdc-button--unelevated::after {
    /* @alternate */
    background-color: var(--mdc-theme-on-primary, #fff);
  }
}
.mdc-button--raised:hover::before,
.mdc-button--unelevated:hover::before {
  opacity: 0.08;
}
.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,
.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,
.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.24;
}
.mdc-button--raised:not(.mdc-ripple-upgraded)::after,
.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,
.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.24;
}
.mdc-button--raised.mdc-ripple-upgraded,
.mdc-button--unelevated.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.24;
}

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.material-icons {
  font-family: var(--mdc-icon-font, "Material Icons");
  font-weight: normal;
  font-style: normal;
  font-size: var(--mdc-icon-size, 24px);
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

:host {
  display: block;
  outline: none;
}

:host([disabled]) {
  pointer-events: none;
}`,$i=document.createElement("link");$i.rel="stylesheet",$i.href="https://fonts.googleapis.com/icon?family=Material+Icons",document.head.appendChild($i);var Xi=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let Gi=class extends It{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.icon="",this.label="",this.href=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}render(){const t={"mdc-button":!0,"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},e=W`
      <i class="material-icons mdc-button__icon" aria-hidden="true">${this.icon}</i>
    `;return W`
      ${this.href?W`
          <a
            .ripple="${ji({unbounded:!1})}"
            class="${Ot(t)}"
            ?disabled="${this.disabled}"
            aria-label="${this.label||this.icon}"
            href="${this.href}"
          >
            ${this.icon&&!this.trailingIcon?e:""}
            <span class="mdc-button__label">${this.label}</span>
            ${this.icon&&this.trailingIcon?e:""}
            <slot></slot>
          </a>
        `:W`
          <button
            .ripple="${ji({unbounded:!1})}"
            class="${Ot(t)}"
            ?disabled="${this.disabled}"
            aria-label="${this.label||this.icon}"
          >
            ${this.icon&&!this.trailingIcon?e:""}
            <span class="mdc-button__label">${this.label}</span>
            ${this.icon&&this.trailingIcon?e:""}
            <slot></slot>
          </button>
        `}
    `}};Gi.styles=Ui,Xi([_t({type:Boolean})],Gi.prototype,"raised",void 0),Xi([_t({type:Boolean})],Gi.prototype,"unelevated",void 0),Xi([_t({type:Boolean})],Gi.prototype,"outlined",void 0),Xi([_t({type:Boolean})],Gi.prototype,"dense",void 0),Xi([_t({type:Boolean,reflect:!0})],Gi.prototype,"disabled",void 0),Xi([_t({type:Boolean})],Gi.prototype,"trailingIcon",void 0),Xi([_t()],Gi.prototype,"icon",void 0),Xi([_t()],Gi.prototype,"label",void 0),Xi([_t()],Gi.prototype,"href",void 0),Gi=Xi([ht("mwc-button")],Gi);const Wi=new WeakMap,Yi=u(t=>e=>{if(!(e instanceof P)||e instanceof M||"style"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=e,{style:n}=i.element;Wi.has(e)||(n.cssText=i.strings.join(" "));const o=Wi.get(e);for(const e in o)e in t||(-1===e.indexOf("-")?n[e]=null:n.removeProperty(e));for(const e in t)-1===e.indexOf("-")?n[e]=t[e]:n.setProperty(e,t[e]);Wi.set(e,t)}),qi=At`/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.mdc-dialog,
.mdc-dialog__scrim {
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.mdc-dialog {
  display: none;
  z-index: 7;
}
.mdc-dialog .mdc-dialog__surface {
  background-color: #fff;
  /* @alternate */
  background-color: var(--mdc-theme-surface, #fff);
}
.mdc-dialog .mdc-dialog__scrim {
  background-color: rgba(0, 0, 0, 0.32);
}
.mdc-dialog .mdc-dialog__title {
  color: rgba(0, 0, 0, 0.87);
}
.mdc-dialog .mdc-dialog__content {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title, .mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions {
  border-color: rgba(0, 0, 0, 0.12);
}
.mdc-dialog .mdc-dialog__surface {
  min-width: 280px;
}
@media (max-width: 592px) {
  .mdc-dialog .mdc-dialog__surface {
    max-width: calc(100vw - 32px);
  }
}
@media (min-width: 592px) {
  .mdc-dialog .mdc-dialog__surface {
    max-width: 560px;
  }
}
.mdc-dialog .mdc-dialog__surface {
  max-height: calc(100vh - 32px);
}
.mdc-dialog .mdc-dialog__surface {
  border-radius: 4px;
}

.mdc-dialog__scrim {
  opacity: 0;
  z-index: -1;
}

.mdc-dialog__container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  transform: scale(0.8);
  opacity: 0;
}

.mdc-dialog__surface {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
}
.mdc-dialog[dir=rtl] .mdc-dialog__surface, [dir=rtl] .mdc-dialog .mdc-dialog__surface {
  text-align: right;
}

.mdc-dialog__title {
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0 24px 9px;
  border-bottom: 1px solid transparent;
}
.mdc-dialog__title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
.mdc-dialog[dir=rtl] .mdc-dialog__title, [dir=rtl] .mdc-dialog .mdc-dialog__title {
  text-align: right;
}

.mdc-dialog--scrollable .mdc-dialog__title {
  padding-bottom: 15px;
}

.mdc-dialog__content {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03125em;
  text-decoration: inherit;
  text-transform: inherit;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 20px 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.mdc-dialog__content > :first-child {
  margin-top: 0;
}
.mdc-dialog__content > :last-child {
  margin-bottom: 0;
}

.mdc-dialog__title + .mdc-dialog__content {
  padding-top: 0;
}

.mdc-dialog--scrollable .mdc-dialog__content {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mdc-dialog__content .mdc-list:first-child:last-child {
  padding: 6px 0 0;
}

.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child {
  padding: 0;
}

.mdc-dialog__actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  padding: 8px;
  border-top: 1px solid transparent;
}
.mdc-dialog--stacked .mdc-dialog__actions {
  flex-direction: column;
  align-items: flex-end;
}

.mdc-dialog__button {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
  max-width: 100%;
  text-align: right;
}
[dir=rtl] .mdc-dialog__button, .mdc-dialog__button[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
}
.mdc-dialog__button:first-child {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-dialog__button:first-child, .mdc-dialog__button:first-child[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 0;
}
.mdc-dialog[dir=rtl] .mdc-dialog__button, [dir=rtl] .mdc-dialog .mdc-dialog__button {
  text-align: left;
}

.mdc-dialog--stacked .mdc-dialog__button:not(:first-child) {
  margin-top: 12px;
}

.mdc-dialog--open,
.mdc-dialog--opening,
.mdc-dialog--closing {
  display: flex;
}

.mdc-dialog--opening .mdc-dialog__scrim {
  transition: opacity 150ms linear;
}
.mdc-dialog--opening .mdc-dialog__container {
  transition: opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-dialog--closing .mdc-dialog__scrim,
.mdc-dialog--closing .mdc-dialog__container {
  transition: opacity 75ms linear;
}
.mdc-dialog--closing .mdc-dialog__container {
  transform: scale(1);
}

.mdc-dialog--open .mdc-dialog__scrim {
  opacity: 1;
}
.mdc-dialog--open .mdc-dialog__container {
  transform: scale(1);
  opacity: 1;
}

.mdc-dialog-scroll-lock {
  overflow: hidden;
}

.mdc-button {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 8px 0 8px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  height: 36px;
  border: none;
  outline: none;
  /* @alternate */
  line-height: inherit;
  user-select: none;
  -webkit-appearance: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 4px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.37);
  cursor: default;
  pointer-events: none;
}
.mdc-button.mdc-button--dense {
  border-radius: 4px;
}
.mdc-button:not(:disabled) {
  background-color: transparent;
}
.mdc-button .mdc-button__icon {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
  display: inline-block;
  width: 18px;
  height: 18px;
  font-size: 18px;
  vertical-align: top;
}
[dir=rtl] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
.mdc-button:not(:disabled) {
  color: #6200ee;
  /* @alternate */
  color: var(--mdc-theme-primary, #6200ee);
}

.mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: 0;
}
[dir=rtl] .mdc-button__label + .mdc-button__icon, .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: 8px;
}

svg.mdc-button__icon {
  fill: currentColor;
}

.mdc-button--raised .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}
[dir=rtl] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--unelevated .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--outlined .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}
.mdc-button--raised .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon {
  /* @noflip */
  margin-left: 8px;
  /* @noflip */
  margin-right: -4px;
}
[dir=rtl] .mdc-button--raised .mdc-button__label + .mdc-button__icon, .mdc-button--raised .mdc-button__label + .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--unelevated .mdc-button__label + .mdc-button__icon,
.mdc-button--unelevated .mdc-button__label + .mdc-button__icon[dir=rtl],
[dir=rtl] .mdc-button--outlined .mdc-button__label + .mdc-button__icon,
.mdc-button--outlined .mdc-button__label + .mdc-button__icon[dir=rtl] {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px;
}

.mdc-button--raised,
.mdc-button--unelevated {
  padding: 0 16px 0 16px;
}
.mdc-button--raised:disabled,
.mdc-button--unelevated:disabled {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.37);
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  background-color: #6200ee;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
.mdc-button--raised:not(:disabled),
.mdc-button--unelevated:not(:disabled) {
  color: #fff;
  /* @alternate */
  color: var(--mdc-theme-on-primary, #fff);
}

.mdc-button--raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-button--raised:hover, .mdc-button--raised:focus {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:active {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.mdc-button--raised:disabled {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
}

.mdc-button--outlined {
  border-style: solid;
  padding: 0 15px 0 15px;
  border-width: 1px;
}
.mdc-button--outlined:disabled {
  border-color: rgba(0, 0, 0, 0.37);
}
.mdc-button--outlined:not(:disabled) {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}

.mdc-button--dense {
  height: 32px;
  font-size: 0.8125rem;
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden;
}
.mdc-ripple-surface--test-edge-var-bug::before {
  border: var(--mdc-ripple-surface-test-edge-var);
}

.mdc-button {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.mdc-button::before, .mdc-button::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-button::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
}
.mdc-button.mdc-ripple-upgraded::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button.mdc-ripple-upgraded::after {
  top: 0;
  /* @noflip */
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-button.mdc-ripple-upgraded--unbounded::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-button.mdc-ripple-upgraded--foreground-activation::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-button::before, .mdc-button::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-button.mdc-ripple-upgraded::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-button::before, .mdc-button::after {
  background-color: #6200ee;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button::before, .mdc-button::after {
    /* @alternate */
    background-color: var(--mdc-theme-primary, #6200ee);
  }
}
.mdc-button:hover::before {
  opacity: 0.04;
}
.mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-button:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-button:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-button.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.12;
}

.mdc-button--raised::before, .mdc-button--raised::after,
.mdc-button--unelevated::before,
.mdc-button--unelevated::after {
  background-color: #fff;
}
@supports not (-ms-ime-align: auto) {
  .mdc-button--raised::before, .mdc-button--raised::after,
.mdc-button--unelevated::before,
.mdc-button--unelevated::after {
    /* @alternate */
    background-color: var(--mdc-theme-on-primary, #fff);
  }
}
.mdc-button--raised:hover::before,
.mdc-button--unelevated:hover::before {
  opacity: 0.08;
}
.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,
.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,
.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.24;
}
.mdc-button--raised:not(.mdc-ripple-upgraded)::after,
.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {
  transition: opacity 150ms linear;
}
.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,
.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {
  transition-duration: 75ms;
  opacity: 0.24;
}
.mdc-button--raised.mdc-ripple-upgraded,
.mdc-button--unelevated.mdc-ripple-upgraded {
  --mdc-ripple-fg-opacity: 0.24;
}

.mdc-dialog--popover {
  align-items: unset;
  justify-content: unset;
  width: 100%;
  height: auto;
  left: auto;
  top: auto;
  position: fixed;
  max-width: 100%;
  margin: 0 auto;
}
.mdc-dialog--popover.mdc-dialog--pre-open {
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  transform: scale(0.7);
}
.mdc-dialog--popover.mdc-dialog--closing {
  display: block;
}
.mdc-dialog--popover.mdc-dialog--open {
  display: block;
  opacity: 1;
  transform: scale(1);
}
.mdc-dialog--popover-small {
  max-width: 280px;
}
.mdc-dialog--popover-medium {
  max-width: 410px;
}
.mdc-dialog--popover-large {
  max-width: 560px;
}
.mdc-dialog--popover-show {
  display: block;
}
.mdc-dialog--popover-hide {
  display: none;
}
.mdc-dialog--popover .mdc-dialog__scrim, .mdc-dialog--popover .mdc-dialog__actions {
  display: none;
}
.mdc-dialog--popover .mdc-dialog__surface {
  max-height: 100%;
  max-width: 100%;
}

@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
  .mdc-dialog:not(.mdc-dialog--popover) .mdc-dialog__surface {
    /* IE10+ specific styles go here */
    overflow: scroll;
  }
}`;var Ki=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const Ji=["resize","orientationchange"];let Zi=class extends yi{constructor(){super(...arguments),this.headerLabel="",this.acceptLabel="accept",this.declineLabel="cancel",this.defaultAction="accept",this.scrollable=!1,this.popover=!1,this.popoverSize="large",this.popoverStyles={},this.escapeKeyAction=Ci.CLOSE_ACTION,this.scrimClickAction=Ci.CLOSE_ACTION,this.autoStackButtons=!0,this.for="",this.openingPopover=!1,this.controller_=this.mdcRoot,this._handleInteraction=this._onInteraction.bind(this),this._handleDocumentKeydown=this._onDocumentKeydown.bind(this),this._handleLayout=this._onLayout.bind(this),this._handleOpening=this._onOpening.bind(this),this._handleClosing=this._onClosing.bind(this),this.mdcFoundationClass=Ti}get isOpen(){return this.mdcFoundation.isOpen()}get _buttons(){return[...[...this.buttons]||[],...this.footerSlot?function(t,e){const i=[];for(const n of t.assignedNodes({flatten:!0}))if(n.nodeType===Node.ELEMENT_NODE){const t=n;t.matches(e)&&i.push(t)}return i}(this.footerSlot,"*").filter(t=>t instanceof Gi):[]]}get _defaultButton(){return this._buttons.filter(t=>t.hasAttribute("data-mdc-dialog-default-action"))[0]}calcPopoverPosition(){this.controller_=""===this.for?this.parentElement:this.parentElement.querySelector(`#${this.for}`),this.mdcRoot.classList.add("mdc-dialog--popover-show");const t=this.mdcRoot.getBoundingClientRect(),e=null!=this.controller_?this.controller_.getBoundingClientRect():{};if(this.mdcRoot.classList.remove("mdc-dialog--popover-show"),this.isPhone)return{left:0,bottom:0,width:"100%",top:"auto",right:"auto","max-width":"100%"};const i=e.left,n=window.innerWidth-i,o=e.top,r=window.innerHeight-o;let a=0,d=0,c="",s="";return a=i+e.width+30,c="left",this.thereIsMoreSpaceOnTheLeftSide(n,i)&&(a=+e.left-t.width-30,c="right"),d=e.top-t.height/2+e.height/2,s="bottom",this.halfPopoverDoesntFitOnBottom(r,t.height,30)&&(d=e.bottom-t.height),this.halfPopoverDoesntFitOnTop(o,t.height,30)&&(s="top",d=e.top),{top:d+"px",left:a+"px",transformOrigin:`${c} ${s}`}}createAdapter(){return Object.assign({},xi(this.mdcRoot),{addBodyClass:t=>document.body.classList.add(t),areButtonsStacked:()=>(t=>{var e=new Set;return[].forEach.call(t,function(t){return e.add(t.offsetTop)}),e.size>1})(this._buttons),clickDefaultButton:()=>this._defaultButton&&this._defaultButton.click(),eventTargetMatches:(t,e)=>!!t&&Zt(t,e),getActionFromEvent:t=>{if(!t.target)return"";const e=function(t,e){if(t.closest)return t.closest(e);for(var i=t;i;){if(Zt(i,e))return i;i=i.parentElement}return null}(t.target,`[${Ci.ACTION_ATTRIBUTE}]`);return e&&e.getAttribute(Ci.ACTION_ATTRIBUTE)},isContentScrollable:()=>(t=>!!t&&t.scrollHeight>t.offsetHeight)(this.contentEl)&&this.scrollable,notifyClosed:t=>vi(this,Ci.CLOSED_EVENT,t?{action:t}:{}),notifyClosing:t=>vi(this,Ci.CLOSING_EVENT,t?{action:t}:{}),notifyOpened:()=>vi(this,Ci.OPENED_EVENT,{}),notifyOpening:()=>vi(this,Ci.OPENING_EVENT,{}),releaseFocus:()=>{},removeBodyClass:t=>document.body.classList.remove(t),reverseButtons:()=>{this._buttons.reverse(),this._buttons.forEach(t=>{t.parentElement.appendChild(t)})},trapFocus:()=>{this._defaultButton&&this._defaultButton.focus()}})}thereIsMoreSpaceOnTheLeftSide(t,e){return t<e}halfPopoverDoesntFitOnTop(t,e,i){return t<e/2+2*i}halfPopoverDoesntFitOnBottom(t,e,i){return t<e/2+2*i}get isPhone(){return"undefined"!=typeof window&&window.innerWidth<=479}_renderButton(t,e){return W`
      <button
        type="button"
        class="${Ot({"mdc-button":!0,"mdc-dialog__button":!0})}"
        data-mdc-dialog-action="${e}"
        ?data-mdc-dialog-default-action="${this.defaultAction===e}"
        .ripple="${ji({unbounded:!1})}"
      >
        <span class="mdc-button__label">${t}</span>
      </button>
    `}render(){const{headerLabel:t,acceptLabel:e,declineLabel:i}=this;return W`
      <aside
        class="mdc-dialog
          ${this.popover?" mdc-dialog--popover":""}
          ${this.popover&&this.popoverSize?` mdc-dialog--popover-${this.popoverSize}`:""}
          ${this.openingPopover?" mdc-dialog--pre-open":""}
        "
        style="${Yi(this.popoverStyles)}"
        role="alertdialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
      >
        <div class="mdc-dialog_container">
          <div class="mdc-dialog__surface">
            <header class="mdc-dialog__header">
              <h2 id="dialog-title" class="mdc-dialog__title">${t}</h2>
              <slot name="header"></slot>
            </header>
            <section id="dialog-content" class="mdc-dialog__content">
              <slot></slot>
            </section>
            <footer class="mdc-dialog__actions">
              <slot name="footer"></slot>
              ${this._renderButton(i,"cancel")}
              ${this._renderButton(e,"accept")}
            </footer>
          </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
      </aside>
    `}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("click",this._handleInteraction),this.addEventListener("keydown",this._handleInteraction),this.addEventListener(Ci.OPENING_EVENT,this._handleOpening),this.addEventListener(Ci.CLOSING_EVENT,this._handleClosing)}open(){this.popover&&(this.popoverStyles=this.calcPopoverPosition()),this.openingPopover=!0,setTimeout(()=>{this.mdcFoundation.open()},100)}close(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.mdcFoundation.close(t),setTimeout(()=>{this.openingPopover=!1},300)}_onInteraction(t){this.mdcFoundation.handleInteraction(t)}_onDocumentKeydown(t){this.mdcFoundation.handleDocumentKeydown(t)}_onLayout(){this.mdcFoundation.layout()}_onOpening(){Ji.forEach(t=>window.addEventListener(t,this._handleLayout)),document.addEventListener("keydown",this._handleDocumentKeydown)}_onClosing(){Ji.forEach(t=>window.removeEventListener(t,this._handleLayout)),document.removeEventListener("keydown",this._handleDocumentKeydown)}};Zi.styles=qi,Ki([vt(".mdc-dialog")],Zi.prototype,"mdcRoot",void 0),Ki([vt(".mdc-dialog__container")],Zi.prototype,"containerEl",void 0),Ki([vt(".mdc-dialog__content")],Zi.prototype,"contentEl",void 0),Ki([vt(".mdc-dialog__scrim")],Zi.prototype,"scrimEl",void 0),Ki([xt("[data-mdc-dialog-action]")],Zi.prototype,"buttons",void 0),Ki([vt('slot[name="footer"]')],Zi.prototype,"footerSlot",void 0),Ki([_t({type:String})],Zi.prototype,"headerLabel",void 0),Ki([_t({type:String})],Zi.prototype,"acceptLabel",void 0),Ki([_t({type:String})],Zi.prototype,"declineLabel",void 0),Ki([_t({type:String})],Zi.prototype,"defaultAction",void 0),Ki([_t({type:Boolean})],Zi.prototype,"scrollable",void 0),Ki([_t({type:Boolean})],Zi.prototype,"popover",void 0),Ki([_t({type:String})],Zi.prototype,"popoverSize",void 0),Ki([_t({type:String})],Zi.prototype,"popoverStyles",void 0),Ki([_t({type:String}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setEscapeKeyAction(t)})],Zi.prototype,"escapeKeyAction",void 0),Ki([_t({type:String}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setScrimClickAction(t)})],Zi.prototype,"scrimClickAction",void 0),Ki([_t({type:Boolean}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setAutoStackButtons(t)})],Zi.prototype,"autoStackButtons",void 0),Ki([_t({type:String})],Zi.prototype,"for",void 0),Ki([_t({type:Boolean})],Zi.prototype,"openingPopover",void 0),Zi=Ki([ht("mwc-dialog")],Zi);class Qi extends yi{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(t){this.formElement&&this.formElement.setAttribute("aria-label",t)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",t=>{this.dispatchEvent(new Event("change",t))})}}var tn=function(){function t(t,e){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];this.root_=t,this.initialize.apply(this,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(Mt(arguments[e]));return t}(i)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new jt({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e){this.root_.addEventListener(t,e)},t.prototype.unlisten=function(t,e){this.root_.removeEventListener(t,e)},t.prototype.emit=function(t,e,i){var n;void 0===i&&(i=!1),"function"==typeof CustomEvent?n=new CustomEvent(t,{bubbles:i,detail:e}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(n)},t}(),en={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},nn=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.shakeAnimationEndHandler_=function(){return n.handleShakeAnimationEnd_()},n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return en},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)},e.prototype.getWidth=function(){return this.adapter_.getWidth()},e.prototype.shake=function(t){var i=e.cssClasses.LABEL_SHAKE;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.float=function(t){var i=e.cssClasses,n=i.LABEL_FLOAT_ABOVE,o=i.LABEL_SHAKE;t?this.adapter_.addClass(n):(this.adapter_.removeClass(n),this.adapter_.removeClass(o))},e.prototype.handleShakeAnimationEnd_=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(t)},e}(jt),on=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},e.prototype.shake=function(t){this.foundation_.shake(t)},e.prototype.float=function(t){this.foundation_.float(t)},e.prototype.getWidth=function(){return this.foundation_.getWidth()},e.prototype.getDefaultFoundation=function(){var t=this;return new nn({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},getWidth:function(){return t.root_.scrollWidth},registerInteractionHandler:function(e,i){return t.listen(e,i)},deregisterInteractionHandler:function(e,i){return t.unlisten(e,i)}})},e}(tn),rn={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},an=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.transitionEndHandler_=function(t){return n.handleTransitionEnd(t)},n}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return rn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter_.removeClass(rn.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(rn.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter_.addClass(rn.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter_.hasClass(rn.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter_.removeClass(rn.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(rn.LINE_RIPPLE_DEACTIVATING))},e}(jt),dn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},e.prototype.getDefaultFoundation=function(){var t=this;return new an({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setStyle:function(e,i){return t.root_.style.setProperty(e,i)},registerEventHandler:function(e,i){return t.listen(e,i)},deregisterEventHandler:function(e,i){return t.unlisten(e,i)}})},e}(tn),cn={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},sn={NOTCH_ELEMENT_PADDING:8},ln={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},pn=function(t){function e(i){return t.call(this,zt({},e.defaultAdapter,i))||this}return Ft(e,t),Object.defineProperty(e,"strings",{get:function(){return cn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ln},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return sn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var i=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=sn.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(i)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(t),this.adapter_.removeNotchWidthProperty()},e}(jt),mn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(cn.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+nn.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(ln.OUTLINE_UPGRADED),requestAnimationFrame(function(){t.style.transitionDuration=""})):this.root_.classList.add(ln.NO_LABEL)},e.prototype.notch=function(t){this.foundation_.notch(t)},e.prototype.closeNotch=function(){this.foundation_.closeNotch()},e.prototype.getDefaultFoundation=function(){var t=this;return new pn({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setNotchWidthProperty:function(e){return t.notchElement_.style.setProperty("width",e+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}})},e}(tn),un={ROOT:"mdc-text-field-character-counter"},fn={ROOT_SELECTOR:"."+un.ROOT},hn=function(t){function e(i){return t.call(this,zt({},e.defaultAdapter,i))||this}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return un},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return fn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},e}(jt),gn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new hn({setContent:function(e){t.root_.textContent=e}})},e}(tn),bn={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},_n={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},vn={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},xn=["pattern","min","max","required","step","minlength","maxlength"],yn=["color","date","datetime-local","month","range","time","week"],wn=["mousedown","touchstart"],kn=["click","keydown"],En=function(t){function e(i,n){void 0===n&&(n={});var o=t.call(this,zt({},e.defaultAdapter,i))||this;return o.isFocused_=!1,o.receivedUserInput_=!1,o.isValid_=!0,o.useNativeValidation_=!0,o.helperText_=n.helperText,o.characterCounter_=n.characterCounter,o.leadingIcon_=n.leadingIcon,o.trailingIcon_=n.trailingIcon,o.inputFocusHandler_=function(){return o.activateFocus()},o.inputBlurHandler_=function(){return o.deactivateFocus()},o.inputInputHandler_=function(){return o.handleInput()},o.setPointerXOffset_=function(t){return o.setTransformOrigin(t)},o.textFieldInteractionHandler_=function(){return o.handleTextFieldInteraction()},o.validationAttributeChangeHandler_=function(t){return o.handleValidationAttributeChange(t)},o}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return _n},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return bn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return vn},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return yn.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||Boolean(this.getValue())||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&Boolean(this.getValue())},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),wn.forEach(function(e){t.adapter_.registerInputInteractionHandler(e,t.setPointerXOffset_)}),kn.forEach(function(e){t.adapter_.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),wn.forEach(function(e){t.adapter_.deregisterInputInteractionHandler(e,t.setPointerXOffset_)}),kn.forEach(function(e){t.adapter_.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(t){return xn.indexOf(t)>-1&&(e.styleValidity_(!0),!0)}),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(_n.DENSE)?vn.DENSE_LABEL_SCALE:vn.LABEL_SCALE,i=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(i)}else this.adapter_.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){var e=t.touches,i=e?e[0]:t,n=i.target.getBoundingClientRect(),o=i.clientX-n.left;this.adapter_.setLineRippleTransformOrigin(o)},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var i=e.cssClasses.INVALID;t?this.adapter_.removeClass(i):this.adapter_.addClass(i),this.helperText_&&this.helperText_.setValidity(t)},e.prototype.styleFocused_=function(t){var i=e.cssClasses.FOCUSED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.styleDisabled_=function(t){var i=e.cssClasses,n=i.DISABLED,o=i.INVALID;t?(this.adapter_.addClass(n),this.adapter_.removeClass(o)):this.adapter_.removeClass(n),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(jt),Cn={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},An={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+Cn.ROOT},Tn=function(t){function e(i){return t.call(this,zt({},e.defaultAdapter,i))||this}return Ft(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Cn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return An},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(Cn.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(Cn.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(Cn.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(Cn.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(An.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter_.hasClass(Cn.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass(Cn.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(An.ROLE,"alert"):this.adapter_.removeAttr(An.ROLE),e||i||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(An.ARIA_HIDDEN,"true")},e}(jt),In=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new Tn({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setAttr:function(e,i){return t.root_.setAttribute(e,i)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e}})},e}(tn),Sn={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},On={ROOT:"mdc-text-field__icon"},Nn=["click","keydown"],Ln=function(t){function e(i){var n=t.call(this,zt({},e.defaultAdapter,i))||this;return n.savedTabIndex_=null,n.interactionHandler_=function(t){return n.handleInteraction(t)},n}return Ft(e,t),Object.defineProperty(e,"strings",{get:function(){return Sn},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return On},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),Nn.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.interactionHandler_)})},e.prototype.destroy=function(){var t=this;Nn.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionHandler_)})},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",Sn.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){var e="Enter"===t.key||13===t.keyCode;("click"===t.type||e)&&this.adapter_.notifyIconAction()},e}(jt),Rn=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ft(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new Ln({getAttr:function(e){return t.root_.getAttribute(e)},setAttr:function(e,i){return t.root_.setAttribute(e,i)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e},registerInteractionHandler:function(e,i){return t.listen(e,i)},deregisterInteractionHandler:function(e,i){return t.unlisten(e,i)},notifyIconAction:function(){return t.emit(Ln.strings.ICON_EVENT,{},!0)}})},e}(tn);const Dn=At`/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.mdc-floating-label {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  position: absolute;
  /* @noflip */
  left: 0;
  /* @noflip */
  transform-origin: left top;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  /* @alternate */
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label, .mdc-floating-label[dir=rtl] {
  /* @noflip */
  right: 0;
  /* @noflip */
  left: auto;
  /* @noflip */
  transform-origin: right top;
  /* @noflip */
  text-align: right;
}

.mdc-floating-label--float-above {
  cursor: auto;
}

.mdc-floating-label--float-above {
  transform: translateY(-50%) scale(0.75);
}

.mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-standard 250ms 1;
}

@keyframes mdc-floating-label-shake-float-above-standard {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-50%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-50%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-50%) scale(0.75);
  }
}
.mdc-line-ripple {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: 2;
}

.mdc-line-ripple--active {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating {
  opacity: 0;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  /* @noflip */
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline, .mdc-notched-outline[dir=rtl] {
  /* @noflip */
  text-align: right;
}
.mdc-notched-outline__leading, .mdc-notched-outline__notch, .mdc-notched-outline__trailing {
  box-sizing: border-box;
  height: 100%;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 1px solid;
  border-bottom: 1px solid;
  pointer-events: none;
}
.mdc-notched-outline__leading {
  /* @noflip */
  border-left: 1px solid;
  /* @noflip */
  border-right: none;
  width: 12px;
}
[dir=rtl] .mdc-notched-outline__leading, .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-left: none;
  /* @noflip */
  border-right: 1px solid;
}
.mdc-notched-outline__trailing {
  /* @noflip */
  border-left: none;
  /* @noflip */
  border-right: 1px solid;
  flex-grow: 1;
}
[dir=rtl] .mdc-notched-outline__trailing, .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-left: 1px solid;
  /* @noflip */
  border-right: none;
}
.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
  max-width: calc(100% - 12px * 2);
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  top: 17px;
  bottom: auto;
  max-width: 100%;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(100% / .75);
}

.mdc-notched-outline--notched .mdc-notched-outline__notch {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch, .mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl] {
  /* @noflip */
  padding-left: 8px;
  /* @noflip */
  padding-right: 0;
}

.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  padding: 0;
}

@keyframes mdc-ripple-fg-radius-in {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
  }
  to {
    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
  }
}
@keyframes mdc-ripple-fg-opacity-in {
  from {
    animation-timing-function: linear;
    opacity: 0;
  }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
}
@keyframes mdc-ripple-fg-opacity-out {
  from {
    animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0);
  }
  to {
    opacity: 0;
  }
}
.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden;
}
.mdc-ripple-surface--test-edge-var-bug::before {
  border: var(--mdc-ripple-surface-test-edge-var);
}

.mdc-text-field-helper-text {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  margin: 0;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  will-change: opacity;
}
.mdc-text-field-helper-text::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}

.mdc-text-field-helper-text--persistent {
  transition: none;
  opacity: 1;
  will-change: initial;
}

.mdc-text-field-character-counter {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
  text-decoration: inherit;
  text-transform: inherit;
  display: block;
  margin-top: 0;
  /* @alternate */
  line-height: normal;
  /* @noflip */
  margin-left: auto;
  /* @noflip */
  margin-right: 0;
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 0;
  white-space: nowrap;
}
.mdc-text-field-character-counter::before {
  display: inline-block;
  width: 0;
  height: 16px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  margin-left: 0;
  /* @noflip */
  margin-right: auto;
}
[dir=rtl] .mdc-text-field-character-counter, .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  padding-left: 0;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon .mdc-text-field__icon,
.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  position: absolute;
  bottom: 16px;
  cursor: pointer;
}

.mdc-text-field__icon:not([tabindex]),
.mdc-text-field__icon[tabindex="-1"] {
  cursor: default;
  pointer-events: none;
}

.mdc-text-field {
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  height: 56px;
  overflow: hidden;
  /* @alternate */
  will-change: opacity, transform, color;
}
.mdc-text-field::before, .mdc-text-field::after {
  position: absolute;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
}
.mdc-text-field::before {
  transition: opacity 15ms linear, background-color 15ms linear;
  z-index: 1;
}
.mdc-text-field.mdc-ripple-upgraded::before {
  transform: scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field.mdc-ripple-upgraded::after {
  top: 0;
  /* @noflip */
  left: 0;
  transform: scale(0);
  transform-origin: center center;
}
.mdc-text-field.mdc-ripple-upgraded--unbounded::after {
  top: var(--mdc-ripple-top, 0);
  /* @noflip */
  left: var(--mdc-ripple-left, 0);
}
.mdc-text-field.mdc-ripple-upgraded--foreground-activation::after {
  animation: mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;
}
.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after {
  animation: mdc-ripple-fg-opacity-out 150ms;
  transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
}
.mdc-text-field::before, .mdc-text-field::after {
  background-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field:hover::before {
  opacity: 0.04;
}
.mdc-text-field:not(.mdc-ripple-upgraded):focus::before, .mdc-text-field.mdc-ripple-upgraded--background-focused::before {
  transition-duration: 75ms;
  opacity: 0.12;
}
.mdc-text-field::before, .mdc-text-field::after {
  top: calc(50% - 100%);
  /* @noflip */
  left: calc(50% - 100%);
  width: 200%;
  height: 200%;
}
.mdc-text-field.mdc-ripple-upgraded::after {
  width: var(--mdc-ripple-fg-size, 100%);
  height: var(--mdc-ripple-fg-size, 100%);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field .mdc-text-field__input {
  caret-color: #6200ee;
  /* @alternate */
  caret-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
  border-bottom-color: rgba(0, 0, 0, 0.42);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {
  border-bottom-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field .mdc-line-ripple {
  background-color: #6200ee;
  /* @alternate */
  background-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,
.mdc-text-field:not(.mdc-text-field--disabled) + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.6);
}
.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon {
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field:not(.mdc-text-field--disabled) {
  background-color: whitesmoke;
}
.mdc-text-field .mdc-floating-label {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
  top: 18px;
  pointer-events: none;
}
[dir=rtl] .mdc-text-field .mdc-floating-label, .mdc-text-field .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--textarea .mdc-floating-label {
  /* @noflip */
  left: 4px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--textarea .mdc-floating-label, .mdc-text-field--textarea .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 4px;
}
.mdc-text-field--outlined .mdc-floating-label {
  /* @noflip */
  left: 4px;
  /* @noflip */
  right: initial;
  top: 17px;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 4px;
}
.mdc-text-field--outlined--with-leading-icon .mdc-floating-label {
  /* @noflip */
  left: 36px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 36px;
}
.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above {
  /* @noflip */
  left: 40px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above, .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 40px;
}

.mdc-text-field__input {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
  text-decoration: inherit;
  text-transform: inherit;
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px 16px 6px;
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  background: none;
  appearance: none;
}
.mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  color: rgba(0, 0, 0, 0.54);
}
.mdc-text-field__input:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.54) !important;
}
.mdc-text-field--fullwidth .mdc-text-field__input::placeholder, .mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input:-webkit-autofill {
  z-index: auto !important;
}
.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
  padding-top: 16px;
  padding-bottom: 16px;
}

.mdc-text-field__input:-webkit-autofill + .mdc-floating-label {
  transform: translateY(-50%) scale(0.75);
  cursor: auto;
}

.mdc-text-field--outlined {
  border: none;
  overflow: visible;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-144%) scale(1);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--outlined::before, .mdc-text-field--outlined::after {
  content: none;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  padding: 12px 16px 14px;
  border: none !important;
  background-color: transparent;
  z-index: 1;
}
.mdc-text-field--outlined .mdc-text-field__icon {
  z-index: 2;
}

.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}

.mdc-text-field--outlined.mdc-text-field--disabled {
  background-color: transparent;
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  border-bottom: none;
}

.mdc-text-field--outlined.mdc-text-field--dense {
  height: 48px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-134%) scale(1);
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.8rem;
}
.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-120%) scale(0.8);
}
.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input {
  padding: 12px 12px 7px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
  top: 14px;
}
.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon {
  top: 12px;
}

.mdc-text-field--with-leading-icon .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon .mdc-text-field__input {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
.mdc-text-field--with-leading-icon .mdc-floating-label {
  /* @noflip */
  left: 48px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label, .mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 48px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-144%) translateX(-32px) scale(1);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-144%) translateX(32px) scale(1);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) translateX(-32px) scale(0.75);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-130%) translateX(32px) scale(0.75);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label {
  /* @noflip */
  left: 36px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 36px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-134%) translateX(-21px) scale(1);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-134%) translateX(21px) scale(1);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.8rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-120%) translateX(-21px) scale(0.8);
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl] {
  transform: translateY(-120%) translateX(21px) scale(0.8);
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1;
}
.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label {
  /* @noflip */
  left: 32px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 32px;
}

.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon .mdc-text-field__input {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: auto;
  /* @noflip */
  right: 16px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon {
  /* @noflip */
  right: 12px;
  /* @noflip */
  left: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  right: auto;
  /* @noflip */
  left: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 48px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 48px;
  /* @noflip */
  padding-right: 48px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  bottom: 16px;
  transform: scale(0.8);
}

.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 16px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 44px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label {
  /* @noflip */
  left: 44px;
  /* @noflip */
  right: initial;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label, .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl] {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 44px;
}

.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 12px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {
  /* @noflip */
  padding-left: 16px;
  /* @noflip */
  padding-right: 44px;
}
[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 16px;
}

.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon {
  /* @noflip */
  left: 12px;
  /* @noflip */
  right: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  left: auto;
  /* @noflip */
  right: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon {
  /* @noflip */
  right: 12px;
  /* @noflip */
  left: auto;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon ~ .mdc-text-field__icon[dir=rtl] {
  /* @noflip */
  right: auto;
  /* @noflip */
  left: 12px;
}
.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 44px;
}
[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input, .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl] {
  /* @noflip */
  padding-left: 44px;
  /* @noflip */
  padding-right: 44px;
}

.mdc-text-field--dense .mdc-floating-label--float-above {
  transform: translateY(-70%) scale(0.8);
}
.mdc-text-field--dense .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-dense 250ms 1;
}
.mdc-text-field--dense .mdc-text-field__input {
  padding: 12px 12px 0;
}
.mdc-text-field--dense .mdc-floating-label {
  font-size: 0.813rem;
}
.mdc-text-field--dense .mdc-floating-label--float-above {
  font-size: 0.813rem;
}

.mdc-text-field__input:required ~ .mdc-floating-label::after,
.mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
  margin-left: 1px;
  content: "*";
}

.mdc-text-field--textarea {
  display: inline-flex;
  width: auto;
  height: auto;
  transition: none;
  overflow: visible;
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.38);
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.87);
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}
.mdc-text-field--textarea .mdc-floating-label--shake {
  animation: mdc-floating-label-shake-float-above-text-field-outlined 250ms 1;
}
.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl] {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing {
  /* @noflip */
  border-radius: 0 4px 4px 0;
}
[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing, .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl] {
  /* @noflip */
  border-radius: 4px 0 0 4px;
}
.mdc-text-field--textarea::before, .mdc-text-field--textarea::after {
  content: none;
}
.mdc-text-field--textarea:not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--textarea .mdc-floating-label--float-above {
  transform: translateY(-144%) scale(1);
}
.mdc-text-field--textarea .mdc-floating-label--float-above {
  font-size: 0.75rem;
}
.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-130%) scale(0.75);
}
.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above,
.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}
.mdc-text-field--textarea .mdc-text-field-character-counter {
  /* @noflip */
  left: initial;
  /* @noflip */
  right: 16px;
  position: absolute;
  bottom: 13px;
}
[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter, .mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl] {
  /* @noflip */
  left: 16px;
  /* @noflip */
  right: initial;
}
.mdc-text-field--textarea .mdc-text-field__input {
  align-self: auto;
  box-sizing: border-box;
  height: auto;
  margin: 8px 1px 1px 0;
  padding: 0 16px 16px;
  border: none;
}
.mdc-text-field--textarea .mdc-text-field-character-counter + .mdc-text-field__input {
  margin-bottom: 28px;
  padding-bottom: 0;
}
.mdc-text-field--textarea .mdc-floating-label {
  top: 17px;
  bottom: auto;
  width: auto;
  pointer-events: none;
}
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing {
  border-width: 2px;
}

.mdc-text-field--fullwidth {
  width: 100%;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) {
  display: block;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before, .mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after {
  content: none;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled) {
  background-color: transparent;
}
.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input {
  padding: 0;
}
.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input {
  resize: vertical;
}

.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea) {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field-helper-line {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.mdc-text-field--dense + .mdc-text-field-helper-line {
  margin-bottom: 4px;
}
.mdc-text-field + .mdc-text-field-helper-line {
  padding-right: 16px;
  padding-left: 16px;
}

.mdc-form-field > .mdc-text-field + label {
  align-self: flex-start;
}

.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: rgba(98, 0, 238, 0.87);
}
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-floating-label::after,
.mdc-text-field--focused .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
  color: rgba(98, 0, 238, 0.87);
}
.mdc-text-field--focused + .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg) {
  opacity: 1;
}

.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #6200ee;
  /* @alternate */
  border-color: var(--mdc-theme-primary, #6200ee);
}

.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover {
  border-bottom-color: #b00020;
  /* @alternate */
  border-bottom-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple {
  background-color: #b00020;
  /* @alternate */
  background-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid .mdc-text-field__input {
  caret-color: #b00020;
  /* @alternate */
  caret-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid .mdc-text-field__input:required ~ .mdc-floating-label::after,
.mdc-text-field--invalid .mdc-text-field__input:required ~ .mdc-notched-outline .mdc-floating-label::after {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon ~ .mdc-text-field__icon {
  color: #b00020;
  /* @alternate */
  color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--invalid + .mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg {
  opacity: 1;
}

.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing {
  border-color: #b00020;
  /* @alternate */
  border-color: var(--mdc-theme-error, #b00020);
}

.mdc-text-field--disabled {
  background-color: #fafafa;
  border-bottom: none;
  pointer-events: none;
}
.mdc-text-field--disabled .mdc-text-field__input {
  border-bottom-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--disabled .mdc-text-field__input {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-floating-label {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-helper-text {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-text-field-character-counter,
.mdc-text-field--disabled + .mdc-text-field-helper-line .mdc-text-field-character-counter {
  color: rgba(0, 0, 0, 0.37);
}
.mdc-text-field--disabled .mdc-text-field__icon {
  color: rgba(0, 0, 0, 0.3);
}
.mdc-text-field--disabled:not(.mdc-text-field--textarea) {
  border-bottom-color: rgba(0, 0, 0, 0.12);
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}

.mdc-text-field--textarea.mdc-text-field--disabled {
  background-color: transparent;
  /* @alternate */
  background-color: #f9f9f9;
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing {
  border-color: rgba(0, 0, 0, 0.06);
}
.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input {
  border-bottom: none;
}

@keyframes mdc-floating-label-shake-float-above-text-field-dense {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-70%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-70%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-70%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon {
  0% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense {
  0% {
    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 21px)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 21px)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - 21px)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl {
  0% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0)) translateY(-130%) scale(0.75);
  }
}
@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl {
  0% {
    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - -21px)) translateY(-120%) scale(0.8);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - -21px)) translateY(-120%) scale(0.8);
  }
  100% {
    transform: translateX(calc(0 - -21px)) translateY(-120%) scale(0.8);
  }
}
@keyframes mdc-floating-label-shake-float-above-textarea {
  0% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
  33% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(calc(4% - 0%)) translateY(-130%) scale(0.75);
  }
  66% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(calc(-4% - 0%)) translateY(-130%) scale(0.75);
  }
  100% {
    transform: translateX(calc(0 - 0%)) translateY(-130%) scale(0.75);
  }
}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
.material-icons {
  font-family: var(--mdc-icon-font, "Material Icons");
  font-weight: normal;
  font-style: normal;
  font-size: var(--mdc-icon-size, 24px);
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

:host {
  display: block;
  outline: none;
}

:host([fullwidth]) {
  width: 100%;
}

.mdc-text-field {
  width: 100%;
}

.mdc-text-field--textarea:not(.mdc-text-field--focused):not(.mdc-text-field--no-label) .mdc-text-field__input::placeholder {
  opacity: 0;
}

.mdc-text-field--textarea:not(.mdc-text-field--focused):not(.mdc-text-field--no-label) .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field__input:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0) !important;
}
.mdc-text-field--fullwidth .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.54) !important;
}

.mdc-text-field--with-trailing-icon-interaction .mdc-text-field__icon--trailing {
  pointer-events: all;
  cursor: pointer;
  outline: none;
}
.mdc-text-field--with-trailing-icon-interaction .mdc-text-field__icon--trailing:hover, .mdc-text-field--with-trailing-icon-interaction .mdc-text-field__icon--trailing:focus {
  opacity: 1;
  color: rgba(0, 0, 0, 0.87);
}`;var Pn=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var d=t.length-1;d>=0;d--)(o=t[d])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const Hn=t=>new Rn(t),Fn=["pattern","minLength","maxLength","min","max","step","cols","rows","wrap"];let zn=class extends Qi{constructor(){super(...arguments),this.value="",this.disabled=!1,this.type="text",this.label="",this.placeholder="",this.fullWidth=!1,this.outlined=!1,this.helperTextContent="",this.validationMessage="",this.persistentHelperText=!1,this.leadingIconAriaLabel="",this.trailingIconAriaLabel="",this.leadingIconContent="",this.trailingIconContent="",this.trailingIconInteraction=!1,this.required=!1,this._formElementId=`_${Math.random().toString(36).substr(2,9)}`,this._handleInput=this._onInput.bind(this),this._handleBlur=this._onBlur.bind(this),this.mdcFoundationClass=En}get valid(){return this.mdcFoundation&&this.mdcFoundation.isValid()}set valid(t){this.mdcFoundation&&this.mdcFoundation.setValid(t),this._setValidity(t)}get ripple(){return this.mdcRoot.ripple}set useNativeValidation(t){this.mdcFoundation.setUseNativeValidation(t)}createAdapter(){return Object.assign({},this._getRootAdapterMethods(),this._getInputAdapterMethods(),this._getLabelAdapterMethods(),this._getLineRippleAdapterMethods(),this._getOutlineAdapterMethods())}_getRootAdapterMethods(){return Object.assign({},xi(this.mdcRoot),{registerTextFieldInteractionHandler:(t,e)=>this.mdcRoot.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.mdcRoot.addEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver(e=>t((t=>t.map(t=>t.attributeName).filter(t=>t))(e)));return e.observe(this.formElement,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect()})}_getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,isFocused:()=>{return this.getRootNode().activeElement===this.formElement},registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:!0}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}_getLabelAdapterMethods(){return{floatLabel:t=>this._label&&this._label.float(t),getLabelWidth:()=>this._label?this._label.getWidth():0,hasLabel:()=>Boolean(this._label),shakeLabel:t=>this._label&&this.labelElement.classList.contains(en.LABEL_FLOAT_ABOVE)&&this._label.shake(t)}}_getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this._lineRipple&&this._lineRipple.activate()},deactivateLineRipple:()=>{this._lineRipple&&this._lineRipple.deactivate()},setLineRippleTransformOrigin:t=>{this._lineRipple&&this._lineRipple.setRippleCenter(t)}}}_getOutlineAdapterMethods(){return{closeOutline:()=>this._outline&&this._outline.closeNotch(),hasOutline:()=>Boolean(this._outline),notchOutline:t=>this._outline&&this._outline.notch(t)}}_renderInput(){return"textarea"===this.type?W`
        <textarea
          id="${this._formElementId}"
          class="mdc-text-field__input"
          placeholder="${this.placeholder}"
          aria-label="${this.label}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @focus="${t=>this._handleInteractionEvent(t)}"
          @blur="${t=>this._handleInteractionEvent(t)}"
          .value="${this.value}"
        ></textarea>
      `:W`
        <input
          id="${this._formElementId}"
          class="mdc-text-field__input"
          type="${this.type}"
          placeholder="${this.placeholder}"
          aria-label="${this.label}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @focus="${t=>this._handleInteractionEvent(t)}"
          @blur="${t=>this._handleInteractionEvent(t)}"
          .value="${this.value}">
      `}_renderFloatingLabel(){return W`
      <label class="mdc-floating-label" for="${this._formElementId}">${this.label}</label>
    `}_renderNotchedOutline(){const t=this.label;return W`
      <div class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          ${t?this._renderFloatingLabel():""}
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>
    `}_renderLineRipple(){return W`
      <div class="mdc-line-ripple"></div> 
    `}_renderIcon(t){const e="trailing"===t,i=e&&this.trailingIconInteraction,n=e?this.trailingIconContent:this.leadingIconContent;return W`
      <i class="material-icons mdc-text-field__icon mdc-text-field__icon--${t}" tabindex="${i?0:-1}">
        ${n}
      </i>
    `}_renderHelperLine(){const t="textarea"===this.type,e=this.maxLength&&this.maxLength>0;return W`
      <div class="mdc-text-field-helper-line">
        ${this._renderHelperText()}
        ${e&&!t?this._renderCharacterCounter():""}
      </div>
    `}_renderHelperText(){const t={"mdc-text-field-helper-text":!0,"mdc-text-field-helper-text--persistent":this.persistentHelperText};return W`
      <div class="${Ot(t)}">${this.helperTextContent}</div>
    `}_renderCharacterCounter(){return W`
      <div class="mdc-text-field-character-counter"></div>
    `}render(){const t="textarea"===this.type,e=this.outlined||t,i=this.label&&(!this.fullWidth||t),n=this.leadingIconContent,o=this.trailingIconContent,r=this.maxLength&&this.maxLength>0,a={"mdc-text-field":!0,"mdc-text-field--no-label":!i,"mdc-text-field--outlined":this.outlined,"mdc-text-field--textarea":"textarea"===this.type,"mdc-text-field--fullwidth":this.fullWidth,"mdc-text-field--disabled":this.disabled,"mdc-text-field--with-leading-icon":n,"mdc-text-field--with-trailing-icon":o,"mdc-text-field--with-trailing-icon-interaction":this.trailingIconInteraction};return W`
      <div class="${Ot(a)}" .ripple="${!e&&ji({unbounded:!1})}">
        ${r&&t?this._renderCharacterCounter():""}
        ${n?this._renderIcon("leading"):""}
        ${this._renderInput()}
        ${i&&!e?this._renderFloatingLabel():""}
        ${o?this._renderIcon("trailing"):""}
        ${e?this._renderNotchedOutline():this._renderLineRipple()}
      </div>
      ${this._renderHelperLine()}
    `}firstUpdated(){this._label=this.labelElement?(t=>new on(t))(this.labelElement):null,this._lineRipple=this.lineRippleElement?(t=>new dn(t))(this.lineRippleElement):null,this._outline=this.outlineElement?(t=>new mn(t))(this.outlineElement):null;const t=Tn.strings,e=this.helperLine?this.helperLine.querySelector(t.ROOT_SELECTOR):null;this._helperText=e?(t=>new In(t))(e):null;const i=hn.strings;let n=this.mdcRoot.querySelector(i.ROOT_SELECTOR);!n&&this.helperLine&&(n=this.helperLine.querySelector(i.ROOT_SELECTOR)),this._characterCounter=n?(t=>new gn(t))(n):null,this._leadingIcon=null,this._trailingIcon=null,this.iconElements.length>0&&(this.iconElements.length>1?(this._leadingIcon=Hn(this.iconElements[0]),this._trailingIcon=Hn(this.iconElements[1])):this.mdcRoot.classList.contains(_n.WITH_LEADING_ICON)?this._leadingIcon=Hn(this.iconElements[0]):this._trailingIcon=Hn(this.iconElements[0])),Fn.forEach(t=>{const e=this[t];switch(t){case"maxLength":e&&e>0&&(this.formElement[t]=e);break;default:e&&(this.formElement[t]=e)}}),super.firstUpdated(),this.formElement.addEventListener("input",this._handleInput),this.formElement.addEventListener("blur",this._handleBlur),this._trailingIcon&&(this._trailingIcon.listen("click",t=>this._onTrailingIconAction(t)),this._trailingIcon.listen("keydown",t=>this._onTrailingIconAction(t)))}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter(),this._getFoundationMap()),this.mdcFoundation.init()}_onInput(){this.value=this.formElement.value,this._setValidity(this.valid)}_onBlur(){this._setValidity(this.valid)}_onTrailingIconAction(t){if("keydown"===t.type){const e="Space"===t.key||32===t.keyCode,i="Enter"===t.key||13===t.keyCode;if(!e&&!i)return;e&&t.preventDefault()}vi(this,"MDCTextfield:trailingIconInteraction")}_handleInteractionEvent(t){vi(this.mdcRoot,t.type,{},!1)}_setValidity(t){this._helperText&&this.validationMessage&&(this.mdcFoundation&&this.mdcFoundation.setHelperTextContent(t?this.helperTextContent:this.validationMessage),this._helperText.foundation.setValidation(!t),this.requestUpdate())}_getFoundationMap(){return{characterCounter:this._characterCounter?this._characterCounter.foundation:void 0,helperText:this._helperText?this._helperText.foundation:void 0,leadingIcon:this._leadingIcon?this._leadingIcon.foundation:void 0,trailingIcon:this._trailingIcon?this._trailingIcon.foundation:void 0}}focus(){this.formElement.focus()}layout(){const t=this.mdcFoundation.shouldFloat;this.mdcFoundation.notchOutline(t)}};zn.styles=Dn,Pn([vt(".mdc-text-field")],zn.prototype,"mdcRoot",void 0),Pn([vt(bn.INPUT_SELECTOR)],zn.prototype,"formElement",void 0),Pn([vt(bn.LABEL_SELECTOR)],zn.prototype,"labelElement",void 0),Pn([vt(bn.LINE_RIPPLE_SELECTOR)],zn.prototype,"lineRippleElement",void 0),Pn([vt(bn.OUTLINE_SELECTOR)],zn.prototype,"outlineElement",void 0),Pn([vt(`.${_n.HELPER_LINE}`)],zn.prototype,"helperLine",void 0),Pn([xt(bn.ICON_SELECTOR)],zn.prototype,"iconElements",void 0),Pn([_t({type:String,reflect:!0}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setValue(t)})],zn.prototype,"value",void 0),Pn([_t({type:Boolean,reflect:!0}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setDisabled(t)})],zn.prototype,"disabled",void 0),Pn([_t({type:String,reflect:!0})],zn.prototype,"type",void 0),Pn([_t({type:String})],zn.prototype,"label",void 0),Pn([_t({type:String})],zn.prototype,"placeholder",void 0),Pn([_t({type:Boolean})],zn.prototype,"fullWidth",void 0),Pn([_t({type:Boolean})],zn.prototype,"outlined",void 0),Pn([_t({type:String})],zn.prototype,"helperTextContent",void 0),Pn([_t({type:String})],zn.prototype,"validationMessage",void 0),Pn([_t({type:Boolean}),_i(function(t){this._helperText&&this._helperText.foundation.setPersistent(t)})],zn.prototype,"persistentHelperText",void 0),Pn([_t({type:String}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setLeadingIconAriaLabel(t)})],zn.prototype,"leadingIconAriaLabel",void 0),Pn([_t({type:String}),_i(function(t){this.mdcFoundation&&this.mdcFoundation.setTrailingIconAriaLabel(t)})],zn.prototype,"trailingIconAriaLabel",void 0),Pn([_t({type:String})],zn.prototype,"leadingIconContent",void 0),Pn([_t({type:String})],zn.prototype,"trailingIconContent",void 0),Pn([_t({type:Boolean})],zn.prototype,"trailingIconInteraction",void 0),Pn([_t({type:Boolean}),_i(function(t){this.formElement&&(this.formElement.required=t)})],zn.prototype,"required",void 0),Pn([_t({type:String}),_i(function(t){this.formElement&&(this.formElement.pattern=t)})],zn.prototype,"pattern",void 0),Pn([_t({type:Number}),_i(function(t){this.formElement&&(this.formElement.minLength=t)})],zn.prototype,"minLength",void 0),Pn([_t({type:Number}),_i(function(t){this.formElement&&(t<0?this.formElement.removeAttribute("maxLength"):this.formElement.maxLength=t)})],zn.prototype,"maxLength",void 0),Pn([_t({type:String}),_i(function(t){this.formElement&&(this.formElement.min=t)})],zn.prototype,"min",void 0),Pn([_t({type:String}),_i(function(t){this.formElement&&(this.formElement.max=t)})],zn.prototype,"max",void 0),Pn([_t({type:String}),_i(function(t){this.formElement&&(this.formElement.step=t)})],zn.prototype,"step",void 0),Pn([_t({type:Number}),_i(function(t){this.formElement&&(this.formElement.cols=t)})],zn.prototype,"cols",void 0),Pn([_t({type:Number}),_i(function(t){this.formElement&&(this.formElement.rows=t)})],zn.prototype,"rows",void 0),Pn([_t({type:String}),_i(function(t){this.formElement&&(this.formElement.wrap=t)})],zn.prototype,"wrap",void 0),zn=Pn([ht("mwc-textfield")],zn);const Mn=(t,e)=>{const i=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,o=i.insertBefore(T(),n);i.insertBefore(T(),n);const r=new H(t.options);return r.insertAfterNode(o),r},Bn=(t,e)=>(t.setValue(e),t.commit(),t),Vn=(t,e,i)=>{const n=t.startNode.parentNode,o=i?i.startNode:t.endNode,r=e.endNode.nextSibling;r!==o&&function(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,n),e=i}}(n,e.startNode,r,o)},jn=t=>{g(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},Un=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},$n=new WeakMap,Xn=new WeakMap,Gn=u((t,e,i)=>{let n;return void 0===i?i=e:void 0!==e&&(n=e),e=>{if(!(e instanceof H))throw new Error("repeat can only be used in text bindings");const o=$n.get(e)||[],r=Xn.get(e)||[],a=[],d=[],c=[];let s,l,p=0;for(const e of t)c[p]=n?n(e,p):p,d[p]=i(e,p),p++;let m=0,u=o.length-1,f=0,h=d.length-1;for(;m<=u&&f<=h;)if(null===o[m])m++;else if(null===o[u])u--;else if(r[m]===c[f])a[f]=Bn(o[m],d[f]),m++,f++;else if(r[u]===c[h])a[h]=Bn(o[u],d[h]),u--,h--;else if(r[m]===c[h])a[h]=Bn(o[m],d[h]),Vn(e,o[m],a[h+1]),m++,h--;else if(r[u]===c[f])a[f]=Bn(o[u],d[f]),Vn(e,o[u],o[m]),u--,f++;else if(void 0===s&&(s=Un(c,f,h),l=Un(r,m,u)),s.has(r[m]))if(s.has(r[u])){const t=l.get(c[f]),i=void 0!==t?o[t]:null;if(null===i){const t=Mn(e,o[m]);Bn(t,d[f]),a[f]=t}else a[f]=Bn(i,d[f]),Vn(e,i,o[m]),o[t]=null;f++}else jn(o[u]),u--;else jn(o[m]),m++;for(;f<=h;){const t=Mn(e,a[h+1]);Bn(t,d[f]),a[f++]=t}for(;m<=u;){const t=o[m++];null!==t&&jn(t)}$n.set(e,a),Xn.set(e,c)}}),Wn=At`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:0;padding:8px 0;line-height:1.5rem;list-style-type:none}.mdc-list-item__secondary-text{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-list-item__graphic{background-color:rgba(0,0,0,0)}.mdc-list-item__graphic{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-list-item__meta{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list-item{display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden}.mdc-list-item:focus{outline:0}.mdc-list-item--activated,.mdc-list-item--selected{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-list-item--activated .mdc-list-item__graphic,.mdc-list-item--selected .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px;display:inline-flex;flex-shrink:0;align-items:center;justify-content:center}.mdc-list-item[dir=rtl] .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list-item__graphic{margin-left:32px;margin-right:0}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item[dir=rtl] .mdc-list-item__meta,[dir=rtl] .mdc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__secondary-text,.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}.mdc-list-item__secondary-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:36px;width:20px;height:20px}.mdc-list-item[dir=rtl] .mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--dense .mdc-list-item__graphic{margin-left:36px;margin-right:0}.mdc-list--avatar-list .mdc-list-item{height:56px}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}.mdc-list-item[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__graphic{margin-left:16px;margin-right:0}:not(.mdc-list--non-interactive)>.mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity}:not(.mdc-list--non-interactive)>.mdc-list-item::after,:not(.mdc-list--non-interactive)>.mdc-list-item::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:not(.mdc-list--non-interactive)>.mdc-list-item::before{transition:opacity 15ms linear;z-index:1}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:not(.mdc-list--non-interactive)>.mdc-list-item::after,:not(.mdc-list--non-interactive)>.mdc-list-item::before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:not(.mdc-list--non-interactive)>.mdc-list-item::after,:not(.mdc-list--non-interactive)>.mdc-list-item::before{background-color:#000}:not(.mdc-list--non-interactive)>.mdc-list-item:hover::before{opacity:.04}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}:not(.mdc-list--non-interactive)>.mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:.16}:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before{opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item--activated::after,:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before{background-color:#6200ee}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>.mdc-list-item--activated::after,:not(.mdc-list--non-interactive)>.mdc-list-item--activated::before{background-color:var(--mdc-theme-primary,#6200ee)}}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:hover::before{opacity:.16}:not(.mdc-list--non-interactive)>.mdc-list-item--activated.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.28}:not(.mdc-list--non-interactive)>.mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:.28}:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before{opacity:.08}:not(.mdc-list--non-interactive)>.mdc-list-item--selected::after,:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before{background-color:#6200ee}@supports not (-ms-ime-align:auto){:not(.mdc-list--non-interactive)>.mdc-list-item--selected::after,:not(.mdc-list--non-interactive)>.mdc-list-item--selected::before{background-color:var(--mdc-theme-primary,#6200ee)}}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:hover::before{opacity:.12}:not(.mdc-list--non-interactive)>.mdc-list-item--selected.mdc-ripple-upgraded--background-focused::before,:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.2}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}:not(.mdc-list--non-interactive)>.mdc-list-item--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}:not(.mdc-list--non-interactive)>.mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:.24}.mdc-list--two-line .mdc-list-item{height:72px}.mdc-list--two-line.mdc-list--dense .mdc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item{height:48px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:20px;width:36px;height:36px}.mdc-list-item[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,[dir=rtl] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:20px;margin-right:0}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-list-divider{border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded{margin:0 16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}.mdc-list-group[dir=rtl] .mdc-list-divider--inset,[dir=rtl] .mdc-list-group .mdc-list-divider--inset{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{width:calc(100% - 72px - 16px)}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;margin:.75rem 16px}.mdc-list-group__subheader{color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}:host([aria-disabled=true])>.mdc-list-item:focus::before{opacity:0}`;class Yn{constructor(){this._recentTouchMoves=[],this._timeWindow=50}_pruneHistory(t){const e=this._recentTouchMoves.findIndex(e=>e.timeStamp>t-this._timeWindow);this._recentTouchMoves.splice(0,e+1)}update(t){this._pruneHistory(t.timeStamp),this._recentTouchMoves.push(t);const e=this._recentTouchMoves[0],i=t.clientX-e.clientX,n=t.timeStamp-e.timeStamp;return{velocityX:n>0?i/n:0}}}a([ht("dismissable-item")],function(t,e){return{F:class extends e{constructor(){super(),t(this),this.scroller=null,this.position=0,this.itemIndex=0,this.width=0,this.state="initial",this.addEventListener("touchstart",this,{passive:!0}),this.addEventListener("touchmove",this,{passive:!0}),this.addEventListener("touchend",this,{passive:!0}),this.addEventListener("pointerdown",this,{passive:!0}),this.addEventListener("pointermove",this,{passive:!0}),this.addEventListener("pointerup",this,{passive:!0})}},d:[{kind:"field",static:!0,key:"styles",value:()=>[Wn,At`:host{overflow:hidden}#contentWrapper{contain:content;will-change:transform,opacity;background-color:var(--item-bg-color);width:100%;height:100%}`]},{kind:"method",key:"render",value:function(){return W`<div id="contentWrapper" class="mdc-list-item"><slot></slot></div>`}},{kind:"method",key:"firstUpdated",value:function(){this.wrapper=this.shadowRoot.querySelector("#contentWrapper")}},{kind:"method",key:"disconnectedCallback",value:function(){this.scroller=null}},{kind:"method",key:"handleEvent",value:function(t){if(!t.pointerType||"touch"===t.pointerType)switch(t.type){case"pointerdown":this._onPointerDown(t);break;case"pointermove":t.pressure&&(this.setPointerCapture(t.pointerId),this._onPointerPan(t));break;case"pointerup":this.releasePointerCapture(t.pointerId),this._onPointerUp(t);break;case"touchstart":this._onPointerDown(t.changedTouches[0]);break;case"touchmove":this._onPointerPan(t.changedTouches[0]);break;case"touchend":this._onPointerUp(t.changedTouches[0])}}},{kind:"method",key:"setPosition",value:function(t){this.position=t,this.width=this.offsetWidth,this.wrapper.style.opacity=(this.width-Math.abs(t))/this.width,this.wrapper.style.transform=`translateX(${t}px)`}},{kind:"method",key:"_dismiss",value:function(){this.style.opacity=0;const t=getComputedStyle(this).height;this.animate({height:[t,"0px"]},{duration:100,iterations:1,fill:"forwards"}).onfinish=(()=>{this.setPosition(0),this.style.opacity=1;const t=new CustomEvent("remove",{detail:{itemIndex:this.itemIndex},bubbles:!0});this.dispatchEvent(t)})}},{kind:"method",key:"settle",value:function(t){if(this.state="initial",t===this.position)return;const e=0!==t,i=this.wrapper.animate({transform:[`translateX(${this.position}px)`,`translateX(${t}px)`],opacity:[this.wrapper.style.opacity,e?0:1]},{duration:.5*Math.abs(t-this.position),iterations:1});this.position=t,i.onfinish=(()=>e?this._dismiss():this.setPosition(0))}},{kind:"method",key:"fling",value:function(t){this.state="initial";const e=t<0?-this.width:this.width;this.wrapper.animate({transform:[`translateX(${this.position}px)`,`translateX(${e}px)`],opacity:[this.wrapper.style.opacity,0]},{duration:Math.abs(e-this.position)/Math.abs(t),iterations:1}).onfinish=this._dismiss.bind(this)}},{kind:"method",key:"_settleToClosestPosition",value:function(){const t=this.position/this.width;t>.5?this.settle(this.width):t<-.5?this.settle(-this.width):this.settle(0)}},{kind:"method",key:"_onPointerDown",value:function(t){this.state="initial",this.startX=t.clientX,this.startY=t.clientY,this.startPosition=0}},{kind:"method",key:"_onPointerPan",value:function(t){if("initial"==this.state){const e=t.clientX-this.startX,i=t.clientY-this.startY;if(e**2+i**2<25)return;if(Math.abs(i)>Math.abs(e))return void(this.state="ignoring");this.state="dragging",this.scroller||(this.scroller=this.offsetParent,this._scrollerOverflow=this.scroller.style.overflow),this.scroller.style.overflow="hidden"}if("dragging"==this.state){this._tracker=this._tracker||new Yn,this._tracker.update(t);const e=t.clientX-this.startX;this.setPosition(this.startPosition+e)}}},{kind:"method",key:"_onPointerUp",value:function(t){if("dragging"==this.state){this.scroller.style.overflow=this._scrollerOverflow;const e=this._tracker.update(t).velocityX;this._tracker=null,Math.abs(e)>.4?this.fling(e):this._settleToClosestPosition()}}}]}},It);const qn=function(){function t(){}return t.prototype.then=function(e,i){const n=new t,o=this.s;if(o){const t=1&o?e:i;if(t){try{Kn(n,1,t(this.v))}catch(t){Kn(n,2,t)}return n}return this}return this.o=function(t){try{const o=t.v;1&t.s?Kn(n,1,e?e(o):o):i?Kn(n,1,i(o)):Kn(n,2,o)}catch(t){Kn(n,2,t)}},n},t}();function Kn(t,e,i){if(!t.s){if(i instanceof qn){if(!i.s)return void(i.o=Kn.bind(null,t,e));1&e&&(e=i.s),i=i.v}if(i&&i.then)return void i.then(Kn.bind(null,t,e),Kn.bind(null,t,2));t.s=e,t.v=i;const n=t.o;n&&n(t)}}var Jn=0,Zn="function"==typeof WeakMap?WeakMap:function(){var t="function"==typeof Symbol?Symbol(0):"__weak$"+ ++Jn;this.set=function(e,i){e[t]=i},this.get=function(e){return e[t]}};function Qn(t,e){return new Promise(function(i,n){t.onsuccess=function(){var n=t.result;e&&(n=e(n)),i(n)},t.onerror=function(){n(t.error)}})}function to(t,e){return Qn(t.openCursor(e),function(t){return t?[t.key,t.value]:[]})}function eo(t){return new Promise(function(e,i){t.oncomplete=function(){e()},t.onabort=function(){i(t.error)},t.onerror=function(){i(t.error)}})}function io(t){if(!function(t){if("number"==typeof t||"string"==typeof t)return!0;if("object"==typeof t&&t){if(Array.isArray(t))return!0;if("setUTCFullYear"in t)return!0;if("function"==typeof ArrayBuffer&&ArrayBuffer.isView(t))return!0;if("byteLength"in t&&"length"in t)return!0}return!1}(t))throw Error("kv-storage: The given value is not allowed as a key")}var no={};function oo(t,e){return to(t,ro(e))}function ro(t){return t===no?IDBKeyRange.lowerBound(-1/0):IDBKeyRange.lowerBound(t,!0)}var ao=new Zn,co=new Zn,so=new Zn,lo=new Zn,po=function(){};function mo(t,e){return e(function(e,i){try{function n(){return co.set(t,r),so.set(t,void 0),{value:d,done:void 0===r}}var o=co.get(t);if(void 0===o)return Promise.resolve({value:void 0,done:!0});var r,a,d,c=function(t,e){var i,n=-1;t:{for(var o=0;o<e.length;o++){var r=e[o][0];if(r){var a=r();if(a&&a.then)break t;if(a===t){n=o;break}}else n=o}if(-1!==n){do{for(var d=e[n][1];!d;)d=e[++n][1];var c=d();if(c&&c.then){i=!0;break t}var s=e[n][2];n++}while(s&&!s());return c}}const l=new qn,p=Kn.bind(null,l,2);return(i?c.then(m):a.then(function i(a){for(;;){if(a===t){n=o;break}if(++o===e.length){if(-1!==n)break;return void Kn(l,1,c)}if(r=e[o][0]){if((a=r())&&a.then)return void a.then(i).then(void 0,p)}else n=o}do{for(var d=e[n][1];!d;)d=e[++n][1];var c=d();if(c&&c.then)return void c.then(m).then(void 0,p);var s=e[n][2];n++}while(s&&!s());Kn(l,1,c)})).then(void 0,p),l;function m(t){for(;;){var i=e[n][2];if(!i||i())break;for(var o=e[++n][1];!o;)o=e[++n][1];if((t=o())&&t.then)return void t.then(m).then(void 0,p)}Kn(l,1,t)}}(lo.get(t),[[function(){return"keys"},function(){return Promise.resolve(to(i,ro(o)).then(function(t){return t[0]})).then(function(t){d=r=t})}],[function(){return"values"},function(){return Promise.resolve(oo(i,o)).then(function(t){var e;r=(e=t)[0],d=a=e[1]})}],[function(){return"entries"},function(){return Promise.resolve(oo(i,o)).then(function(t){var e;a=(e=t)[1],d=void 0===(r=e[0])?void 0:[r,a]})}]]);return Promise.resolve(c&&c.then?c.then(n):n())}catch(t){return Promise.reject(t)}})}function uo(t,e){var i=new po;return lo.set(i,t),ao.set(i,e),co.set(i,no),so.set(i,void 0),i}po.prototype.return=function(){co.set(this,void 0)},po.prototype.next=function(){var t=this,e=ao.get(this);if(!e)return Promise.reject(new TypeError("Invalid this value"));var i,n=so.get(this);return i=void 0!==n?n.then(function(){return mo(t,e)}):mo(this,e),so.set(this,i),i},"function"==typeof Symbol&&Symbol.asyncIterator&&(po.prototype[Symbol.asyncIterator]=function(){return this});var fo=function(t,e,i){try{return null===go.get(t)&&function(t){var e=ho.get(t);go.set(t,new Promise(function(i,n){var o=self.indexedDB.open(e,1);o.onsuccess=function(){var r=o.result;(function(t,e,i){if(1!==t.objectStoreNames.length)return i(xo(e)),!1;if(t.objectStoreNames[0]!==bo)return i(xo(e)),!1;var n=t.transaction(bo,"readonly").objectStore(bo);return!(n.autoIncrement||n.keyPath||n.indexNames.length)||(i(xo(e)),!1)})(r,e,n)&&(r.onclose=function(){go.set(t,null)},r.onversionchange=function(){r.close(),go.set(t,null)},i(r))},o.onerror=function(){return n(o.error)},o.onupgradeneeded=function(){try{o.result.createObjectStore(bo)}catch(t){n(t)}}}))}(t),Promise.resolve(go.get(t)).then(function(t){var n=t.transaction(bo,e),o=n.objectStore(bo);return i(n,o)})}catch(t){return Promise.reject(t)}},ho=new Zn,go=new Zn,bo="store",_o=function(t){var e="kv-storage:"+t;go.set(this,null),ho.set(this,e),this.backingStore={database:e,store:bo,version:1}};_o.prototype.set=function(t,e){try{return io(t),fo(this,"readwrite",function(i,n){return void 0===e?n.delete(t):n.put(e,t),eo(i)})}catch(t){return Promise.reject(t)}},_o.prototype.get=function(t){try{return io(t),fo(this,"readonly",function(e,i){return Qn(i.get(t))})}catch(t){return Promise.reject(t)}},_o.prototype.delete=function(t){try{return io(t),fo(this,"readwrite",function(e,i){return i.delete(t),eo(e)})}catch(t){return Promise.reject(t)}},_o.prototype.clear=function(){try{var t=this;function e(){function e(){return Qn(self.indexedDB.deleteDatabase(ho.get(t)))}var n=function(){if(i){try{i.close()}catch(t){}return Promise.resolve(new Promise(setTimeout)).then(function(){})}}();return n&&n.then?n.then(e):e()}var i,n=go.get(t),o=function(){if(null!==n){function e(){go.set(t,null)}var o=function(t,e){try{var o=Promise.resolve(n).then(function(t){i=t})}catch(t){return}return o&&o.then?o.then(void 0,function(){}):o}();return o&&o.then?o.then(e):e()}}();return o&&o.then?o.then(e):e()}catch(t){return Promise.reject(t)}},_o.prototype.keys=function(){var t=this;return uo("keys",function(e){return fo(t,"readonly",e)})},_o.prototype.values=function(){var t=this;return uo("values",function(e){return fo(t,"readonly",e)})},_o.prototype.entries=function(){var t=this;return uo("entries",function(e){return fo(t,"readonly",e)})},"function"==typeof Symbol&&Symbol.asyncIterator&&(_o.prototype[Symbol.asyncIterator]=_o.prototype.entries);var vo=new _o("default");function xo(t){return new Error('kv-storage: database "'+t+'" corrupted')}let yo;class wo extends EventTarget{constructor(){return super(),yo||(yo=this),yo}async set(t,e){await vo.get(t);await vo.set(t,JSON.stringify({note:e,done:!1})),this.dispatchEvent(new Event("change"))}async has(t){return!!await vo.get(t)}async remove(t){await vo.delete(t),this.dispatchEvent(new Event("change"))}async change(t,e){const i=await vo.get(t);let n=JSON.parse(i);n.done=e,await vo.set(t,JSON.stringify(n)),this.dispatchEvent(new Event("change"))}[Symbol.asyncIterator](){return(e=function*(){var e,i=!0,o=!1;try{for(var r,a,d=t(vo.entries());i=(r=yield n(d.next())).done,a=yield n(r.value),!i;i=!0){let t=a;const[e,i]=t;let n=JSON.parse(i);n.name=e,yield n}}catch(t){o=!0,e=t}finally{try{i||null==d.return||(yield n(d.return()))}finally{if(o)throw e}}},function(){return new i(e.apply(this,arguments))})();var e}entries(){return this[Symbol.asyncIterator]()}}a([ht("grocery-item")],function(t,e){return{F:class extends e{constructor(){super(...arguments),t(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[Wn,At`mwc-icon-button{display:none}@media(hover:hover){dismissable-item:hover mwc-icon-button{display:block}}.mdc-list-item{height:64px}mwc-checkbox{padding-right:14px}dismissable-item{width:100%;--item-bg-color:white;padding:0!important;user-select:none}div{background-color:#e53935}`]},{kind:"field",decorators:[_t()],key:"label",value:void 0},{kind:"field",decorators:[_t()],key:"sublabel",value:void 0},{kind:"field",decorators:[_t({type:Boolean})],key:"checked",value:void 0},{kind:"method",key:"onchange",value:function(t){this.dispatchEvent(new CustomEvent("change",{detail:{checked:t.target.checked}}))}},{kind:"method",key:"onremove",value:function(t){this.dispatchEvent(new Event("remove"))}},{kind:"method",key:"render",value:function(){return W`<div><dismissable-item @remove="${this.onremove}" role="listitem" class="mdc-list-item"><mwc-checkbox @change="${this.onchange}" ?checked="${this.checked}"></mwc-checkbox><span class="mdc-list-item__text">${this.label} <span class="mdc-list-item__secondary-text">${this.sublabel}</span></span><mwc-icon-button class="mdc-list-item__meta" aria-label="Delete item" title="Delete" icon="delete" @click="${this.onremove}" tabindex="-1"></mwc-icon-button></dismissable-item></div>`}}]}},It),a([ht("groceries-list")],function(e,i){return{F:class extends i{constructor(){super(),e(this);const i=async()=>{let e=!0;var i,n=!0,o=!1;try{for(var r,a,d=t(this._store.entries());n=(r=await d.next()).done,a=await r.value,!n;n=!0){let t=a;e&&(this._doneItems=[],this._pendingItems=[],e=!1),t.done?this._doneItems.push(t):this._pendingItems.push(t)}}catch(t){o=!0,i=t}finally{try{n||null==d.return||await d.return()}finally{if(o)throw i}}await this.requestUpdate()};this._store.addEventListener("change",i),i()}},d:[{kind:"field",static:!0,key:"styles",value:()=>[Wn,At`:host{width:100%;background-color:#ff0}.alldone{height:70vh;color:gray;display:flex;align-items:center;justify-content:flex-end;flex-direction:column;text-align:center}.alldone>svg{fill:#d3d3d3;width:100px;height:100px}.alldone>#filler{height:20vh}.hidden{display:none}`]},{kind:"field",key:"_store",value:()=>new wo},{kind:"field",key:"_pendingItems",value:()=>null},{kind:"field",key:"_doneItems",value:()=>null},{kind:"method",key:"_onchange",value:function(t){t.stopPropagation(),this._store.change(t.target.label,t.detail.checked)}},{kind:"method",key:"_onremove",value:function(t){this._store.remove(t.target.label)}},{kind:"method",key:"_isAllDone",value:function(){return null!==this._pendingItems&&!this._pendingItems.length}},{kind:"method",key:"_hasDoneItems",value:function(){return this._doneItems&&this._doneItems.length}},{kind:"method",key:"render",value:function(){return W`<div role="list" class="mdc-list mdc-list--two-line"><div class="alldone ${Ot({hidden:!this._isAllDone()})}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18
              7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66
              19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83
              12 .41 13.41z"/></svg> You're all done! Please,<br>enjoy your day.<div id="filler"></div></div></div><div role="list" class="mdc-list mdc-list--two-line">${this._pendingItems&&Gn(this._pendingItems,t=>t.name,t=>W`<grocery-item .label="${t.name}" .sublabel="${t.note}" @change="${this._onchange}" @remove="${this._onremove}"></grocery-item>`)}</div><hr class="${Ot({hidden:!this._hasDoneItems()})}"><div role="list" class="mdc-list mdc-list--two-line">${this._doneItems&&Gn(this._doneItems,t=>t.name,t=>W`<grocery-item .label="${t.name}" .sublabel="${t.note}" checked="checked" @change="${this._onchange}" @remove="${this._onremove}"></grocery-item>`)}</div>`}}]}},It);try{self["workbox:window:4.3.1"]&&_()}catch(Kn){}var ko=function(t,e){return new Promise(function(i){var n=new MessageChannel;n.port1.onmessage=function(t){return i(t.data)},t.postMessage(e,[n.port2])})};function Eo(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}try{self["workbox:core:4.3.1"]&&_()}catch(Kn){}var Co=function(){var t=this;this.promise=new Promise(function(e,i){t.resolve=e,t.reject=i})},Ao=function(t,e){return new URL(t,location).href===new URL(e,location).href},To=function(t,e){Object.assign(this,e,{type:t})};function Io(t){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function So(t,e,i){return i?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function Oo(){}var No=function(t){var e,i;function n(e,i){var n;return void 0===i&&(i={}),(n=t.call(this)||this).t=e,n.i=i,n.o=0,n.u=new Co,n.s=new Co,n.h=new Co,n.v=n.v.bind(Eo(Eo(n))),n.l=n.l.bind(Eo(Eo(n))),n.g=n.g.bind(Eo(Eo(n))),n.m=n.m.bind(Eo(Eo(n))),n}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var o,r=n.prototype;return r.register=Io(function(t){var e,i,n=this,o=(void 0===t?{}:t).immediate,r=void 0!==o&&o;return e=function(){return n.p=Boolean(navigator.serviceWorker.controller),n.P=n.R(),So(n.k(),function(t){n.B=t,n.P&&(n.O=n.P,n.s.resolve(n.P),n.h.resolve(n.P),n.j(n.P),n.P.addEventListener("statechange",n.l,{once:!0}));var e=n.B.waiting;return e&&Ao(e.scriptURL,n.t)&&(n.O=e,Promise.resolve().then(function(){n.dispatchEvent(new To("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})),n.O&&n.u.resolve(n.O),n.B.addEventListener("updatefound",n.g),navigator.serviceWorker.addEventListener("controllerchange",n.m,{once:!0}),"BroadcastChannel"in self&&(n.C=new BroadcastChannel("workbox"),n.C.addEventListener("message",n.v)),navigator.serviceWorker.addEventListener("message",n.v),n.B})},(i=function(){if(!r&&"complete"!==document.readyState)return(t=new Promise(function(t){return addEventListener("load",t)}))&&t.then?t.then(Oo):Promise.resolve();var t}())&&i.then?i.then(e):e()}),r.getSW=Io(function(){return this.O||this.u.promise}),r.messageSW=Io(function(t){return So(this.getSW(),function(e){return ko(e,t)})}),r.R=function(){var t=navigator.serviceWorker.controller;if(t&&Ao(t.scriptURL,this.t))return t},r.k=Io(function(){var t=this;return function(t,e){try{var i=t()}catch(t){return e(t)}return i&&i.then?i.then(void 0,e):i}(function(){return So(navigator.serviceWorker.register(t.t,t.i),function(e){return t.L=performance.now(),e})},function(t){throw t})}),r.j=function(t){ko(t,{type:"WINDOW_READY",meta:"workbox-window"})},r.g=function(){var t=this.B.installing;this.o>0||!Ao(t.scriptURL,this.t)||performance.now()>this.L+6e4?(this.W=t,this.B.removeEventListener("updatefound",this.g)):(this.O=t,this.u.resolve(t)),++this.o,t.addEventListener("statechange",this.l)},r.l=function(t){var e=this,i=t.target,n=i.state,o=i===this.W,r=o?"external":"",a={sw:i,originalEvent:t};!o&&this.p&&(a.isUpdate=!0),this.dispatchEvent(new To(r+n,a)),"installed"===n?this._=setTimeout(function(){"installed"===n&&e.B.waiting===i&&e.dispatchEvent(new To(r+"waiting",a))},200):"activating"===n&&(clearTimeout(this._),o||this.s.resolve(i))},r.m=function(t){var e=this.O;e===navigator.serviceWorker.controller&&(this.dispatchEvent(new To("controlling",{sw:e,originalEvent:t})),this.h.resolve(e))},r.v=function(t){var e=t.data;this.dispatchEvent(new To("message",{data:e,originalEvent:t}))},(o=[{key:"active",get:function(){return this.s.promise}},{key:"controlling",get:function(){return this.h.promise}}])&&function(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(n.prototype,o),n}(function(){function t(){this.D={}}var e=t.prototype;return e.addEventListener=function(t,e){this.T(t).add(e)},e.removeEventListener=function(t,e){this.T(t).delete(e)},e.dispatchEvent=function(t){t.target=this,this.T(t.type).forEach(function(e){return e(t)})},e.T=function(t){return this.D[t]=this.D[t]||new Set},t}());let Lo=a([ht("add-dialog")],function(t,e){return{F:class extends e{constructor(){super(...arguments),t(this)}},d:[{kind:"field",key:"_store",value:()=>new wo},{kind:"field",decorators:[vt("mwc-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[vt("mwc-checkbox")],key:"_checkbox",value:void 0},{kind:"field",decorators:[vt("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[vt("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[vt("#product")],key:"_product",value:void 0},{kind:"field",decorators:[vt("#description")],key:"_description",value:void 0},{kind:"method",key:"firstUpdated",value:function(){this._dialog.addEventListener("MDCDialog:closed",async t=>{if("accept"!==t.detail.action)return;this._checkbox.checked?this._writeToNFC(this._product.value,this._description.value):this._store.set(this._product.value,this._description.value)})}},{kind:"method",key:"_writeToNFC",value:async function(t,e){const i={records:[{recordType:"mime",mediaType:"application/json",data:(new TextEncoder).encode(JSON.stringify({product:t,description:e}))}]};try{const n=new AbortController;this._snackbar.addEventListener("MDCSnackbar:closed",t=>{"action"===t.detail.reason&&n.abort()},{once:!0}),this._snackbar.labelText="Touch your NFC tag now",this._actionBtn.textContent="CANCEL",this._snackbar.open();const o=new NDEFWriter;await o.push(i,{target:"tag",ignoreRead:!0,overwrite:!0,signal:n.signal}),this._snackbar.close()}catch(i){this._snackbar.close(),this._snackbar.addEventListener("MDCSnackbar:closed",i=>{"action"===i.detail.reason&&Promise.resolve().then(()=>this._writeToNFC(t,e))},{once:!0}),this._snackbar.labelText=`Writing failed: ${i}`,this._actionBtn.textContent="RETRY",this._snackbar.open()}}},{kind:"method",key:"open",value:function(){let t=["Milk","Cheese","Beer","Cocoa","Candy","Pizza","Basil","Salt","Olive Oil"],e=t[Math.floor(Math.random()*t.length)];this._description.value="",this._checkbox.checked=!1,this._product.value=e,this._dialog.open()}},{kind:"method",key:"render",value:function(){return W`<mwc-dialog id="dialog" headerLabel="Add new item" acceptLabel="Add" declineLabel="Cancel"><mwc-textfield outlined required id="product" type="text" label="Enter product..." value="Milk" helperText="Add a product like milk, bananas, etc"></mwc-textfield><mwc-textfield outlined id="description" type="text" label="Enter description..."></mwc-textfield><mwc-formfield label="Write to NFC tag instead"><mwc-checkbox></mwc-checkbox></mwc-formfield></mwc-dialog><mwc-snackbar stacked><mwc-button id="actionButton" slot="action">CANCEL</mwc-button><mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button></mwc-snackbar>`}}]}},It),Ro=a([ht("main-app")],function(t,e){return{F:class extends e{constructor(){super(...arguments),t(this)}},d:[{kind:"field",key:"_store",value:()=>new wo},{kind:"field",static:!0,key:"styles",value:()=>At`.drawer-content{padding:0 16px 0 16px}.main-content{width:100vw;min-height:300px;padding:48px 0 0 0}mwc-fab{position:fixed;bottom:16px;right:16px}mwc-switch{padding-right:16px}.label-scan{padding-right:16px}`},{kind:"field",decorators:[vt("add-dialog")],key:"_dialog",value:void 0},{kind:"field",decorators:[vt("mwc-drawer")],key:"_drawer",value:void 0},{kind:"field",decorators:[vt("mwc-snackbar")],key:"_snackbar",value:void 0},{kind:"field",decorators:[vt("#actionButton")],key:"_actionBtn",value:void 0},{kind:"field",decorators:[vt("mwc-switch")],key:"_switch",value:void 0},{kind:"method",key:"firstUpdated",value:function(){const t=this._drawer;t.parentNode.addEventListener("MDCTopAppBar:nav",e=>{t.open=!t.open}),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{"action"===t.detail.reason&&window.location.reload()});try{this._reader=new NDEFReader,this._reader.addEventListener("reading",t=>{const e=new TextDecoder;for(let i of t.message.records){const t=JSON.parse(e.decode(i.data));t.product&&this._store.set(t.product,t.description)}})}catch(t){console.error("Reading NFC tags is not supported")}if(this._switch.addEventListener("change",async t=>{const e={recordType:"mime"};try{if(this._switch.checked)await this._reader.scan(e);else{const t=new AbortController;e.signal=t.signal,await this._reader.scan(e),t.abort()}}catch(t){console.error(t),"denied"==(await navigator.permissions.query({name:"nfc"})).state&&"NotAllowedError"==t.name&&this._switch.checked&&(this._snackbar.labelText="NFC permission is denied, please grant it in browser settings!",this._actionBtn.textContent="",this._snackbar.open())}}),"serviceWorker"in navigator){const t=new No("sw.js");t.addEventListener("installed",t=>{t.isUpdate?(console.log("Service worker was updated"),this._snackbar.labelText="A newer version of the app is available!",this._snackbar.open()):console.log("Service worker activated for the first time!")}),t.register()}}},{kind:"method",key:"render",value:function(){return W`<mwc-drawer hasHeader type="modal"><span slot="title">Web NFC Grocery Demo</span> <span slot="subtitle">A demonstration of Web NFC</span><div class="drawer-content"><p><a href="https://w3c.github.io/web-nfc/">Web NFC API specification</a></p></div><div slot="appContent"><mwc-top-app-bar><mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button><div slot="title">Groceries list</div><span slot="actionItems" class="label-scan">SCAN</span><mwc-switch slot="actionItems"></mwc-switch></mwc-top-app-bar><div class="main-content"><groceries-list></groceries-list></div></div></mwc-drawer><mwc-fab icon="playlist_add" @click="${()=>this._dialog.open()}"></mwc-fab><add-dialog></add-dialog><mwc-snackbar stacked><mwc-button id="actionButton" slot="action">RELOAD</mwc-button><mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button></mwc-snackbar>`}}]}},It);export{Lo as AddDialog,Ro as MainApplication};
//# sourceMappingURL=main-app.js.map
