import{storage as s}from"../web_modules/kv-storage-polyfill/dist/kv-storage-polyfill.js";let r=null;export class GroceryStore extends EventTarget{constructor(){return super(),r||(r=this),r}async set(e,t){await s.set(e,JSON.stringify({note:t,done:!1})),this.dispatchEvent(new Event("change"))}async has(e){const t=await s.get(e);return!!t}async remove(e){await s.delete(e),this.dispatchEvent(new Event("change"))}async change(e,t){const a=await s.get(e);let n=JSON.parse(a);n.done=t,await s.set(e,JSON.stringify(n)),this.dispatchEvent(new Event("change"))}async*[Symbol.asyncIterator](){for await(let e of s.entries()){const[t,a]=e;let n=JSON.parse(a);n.name=t,yield n}}entries(){return this[Symbol.asyncIterator]()}}
