import{d as c,A as h,P as d}from"../../common/lit-html-e7095b40.js";/**
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
 */class u{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const i of t)this.classes.add(i)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const n=new WeakMap,m=c(e=>t=>{if(!(t instanceof h)||t instanceof d||t.committer.name!=="class"||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:r}=i;let a=n.get(t);a===void 0&&(r.setAttribute("class",i.strings.join(" ")),n.set(t,a=new Set));const o=r.classList||new u(r);a.forEach(s=>{s in e||(o.remove(s),a.delete(s))});for(const s in e){const l=e[s];l!=a.has(s)&&(l?(o.add(s),a.add(s)):(o.remove(s),a.delete(s)))}typeof o.commit=="function"&&o.commit()});export{m as classMap};
