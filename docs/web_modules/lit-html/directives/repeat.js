import{d as I,N as H,e as x,f as M,r as A}from"../../common/lit-html-e7095b40.js";/**
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
 */const N=(n,s)=>{const r=n.startNode.parentNode,h=s===void 0?n.endNode:s.startNode,t=r.insertBefore(x(),h);r.insertBefore(x(),h);const e=new H(n.options);return e.insertAfterNode(t),e},u=(n,s)=>(n.setValue(s),n.commit(),n),g=(n,s,r)=>{const h=n.startNode.parentNode,t=r?r.startNode:n.endNode,e=s.endNode.nextSibling;e!==t&&M(h,s.startNode,e,t)},b=n=>{A(n.startNode.parentNode,n.startNode,n.endNode.nextSibling)},K=(n,s,r)=>{const h=new Map;for(let t=s;t<=r;t++)h.set(n[t],t);return h},O=new WeakMap,P=new WeakMap,E=I((n,s,r)=>{let h;return r===void 0?r=s:s!==void 0&&(h=s),t=>{if(!(t instanceof H))throw new Error("repeat can only be used in text bindings");const e=O.get(t)||[],c=P.get(t)||[],p=[],w=[],m=[];let f=0;for(const l of n)m[f]=h?h(l,f):f,w[f]=r(l,f),f++;let v,T,a=0,i=e.length-1,o=0,d=w.length-1;for(;a<=i&&o<=d;)if(e[a]===null)a++;else if(e[i]===null)i--;else if(c[a]===m[o])p[o]=u(e[a],w[o]),a++,o++;else if(c[i]===m[d])p[d]=u(e[i],w[d]),i--,d--;else if(c[a]===m[d])p[d]=u(e[a],w[d]),g(t,e[a],p[d+1]),a++,d--;else if(c[i]===m[o])p[o]=u(e[i],w[o]),g(t,e[i],e[a]),i--,o++;else if(v===void 0&&(v=K(m,o,d),T=K(c,a,i)),!v.has(c[a]))b(e[a]),a++;else if(!v.has(c[i]))b(e[i]),i--;else{const l=T.get(m[o]),y=l!==void 0?e[l]:null;if(y===null){const k=N(t,e[a]);u(k,w[o]),p[o]=k}else p[o]=u(y,w[o]),g(t,y,e[a]),e[l]=null;o++}for(;o<=d;){const l=N(t,p[d+1]);u(l,w[o]),p[o++]=l}for(;a<=i;){const l=e[a++];l!==null&&b(l)}O.set(t,p),P.set(t,m)}});export{E as repeat};
