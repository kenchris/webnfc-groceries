var l=Object.defineProperty,c=Object.getOwnPropertyDescriptor,n=(t,i,s,o)=>{for(var e=o>1?void 0:o?c(i,s):i,r=t.length-1,h;r>=0;r--)(h=t[r])&&(e=(o?h(i,s,e):h(e))||e);return o&&e&&l(i,s,e),e};import{LitElement as p,html as f,css as d,customElement as m}from"../web_modules/lit-element.js";import{query as u,eventOptions as a}from"../web_modules/lit-element/lib/decorators.js";import{style as y}from"./mwc-list-item-css.js";const g=.4,P=5;class w{constructor(){this.#t=[],this.#o=50}#t;#o;_pruneHistory(t){const i=this.#t.findIndex(s=>s.timeStamp>t-this.#o);this.#t.splice(0,i+1)}reset(){this.#t=[]}update(t,i){this._pruneHistory(i),this.#t.push({x:t,timeStamp:i});const s=this.#t[0],o=t-s.x,e=i-s.timeStamp;return{velocityX:e>0?o/e:0}}}export let DismissableItem=class extends p{constructor(){super(...arguments);this.#t=new w,this.#o="",this.#i=0,this.#s=0,this.#n=0,this.#r=0,this.#e="initial"}render(){return f`
      <div id="target" class="mdc-list-item"
        @pointerdown=${this.handlePointerDown}
        @pointermove=${this.handlePointerMove}
        @pointerup=${this.handlePointerUp}>
        <slot></slot>
      </div>
    `}#t;#o;#i;#s;#n;#r;#e;handlePointerDown(t){if(t.pointerType!="touch")return;this.#e="initial",this.#n=t.clientX,this.#r=t.clientY,this.#t.reset()}handlePointerMove(t){if(t.pointerType!="touch")return;if(this.#e=="initial"){const i=t.clientX-this.#n,s=t.clientY-this.#r;if(i**2+s**2<P**2)return;if(Math.abs(s)>Math.abs(i)){this.#e="ignoring";return}this.offsetParent&&this.offsetParent instanceof HTMLElement&&(this.#o=this.offsetParent.style.overflow,this.offsetParent.style.overflow="hidden"),this.#e="dragging"}this.#e=="dragging"&&(this.#t.update(t.clientX,t.timeStamp),this.setPosition(t.clientX-this.#n))}handlePointerUp(t){if(t.pointerType!="touch"||this.#e!=="dragging")return;this.offsetParent&&this.offsetParent instanceof HTMLElement&&(this.offsetParent.style.overflow=this.#o);const i=this.#t.update(t.clientX,t.timeStamp).velocityX;Math.abs(i)>g?this.fling(i):this._settleToClosestPosition()}setPosition(t){this.#i=t,this.#s=this.offsetWidth,this.target.style.opacity=String((this.#s-Math.abs(t))/this.#s),this.target.style.transform=`translateX(${t}px)`}_dismiss(){this.style.opacity="0";const t=getComputedStyle(this).height,i=this.animate({height:[t,"0px"]},{duration:100,iterations:1,fill:"forwards"});i.onfinish=()=>{this.setPosition(0),this.style.opacity="1",this.dispatchEvent(new Event("remove",{bubbles:!0}))}}settle(t){if(this.#e="initial",t===this.#i)return;const i=t!==0,s=this.target.animate({transform:[`translateX(${this.#i}px)`,`translateX(${t}px)`],opacity:[parseFloat(this.target.style.opacity),i?0:1]},{duration:Math.abs(t-this.#i)*.5,iterations:1});this.#i=t,s.onfinish=()=>i?this._dismiss():this.setPosition(0)}fling(t){this.#e="initial";const i=t<0?-this.#s:this.#s,s=this.target.animate({transform:[`translateX(${this.#i}px)`,`translateX(${i}px)`],opacity:[parseFloat(this.target.style.opacity),0]},{duration:Math.abs(i-this.#i)/Math.abs(t),iterations:1});s.onfinish=this._dismiss.bind(this)}_settleToClosestPosition(){const t=this.#i/this.#s;t>.5?this.settle(this.#s):t<-.5?this.settle(-this.#s):this.settle(0)}};DismissableItem.styles=[y,d`
      :host {
        overflow: hidden;
      }
      #target {
        contain: content;
        will-change: transform, opacity;
        background-color: var(--item-bg-color);
        width: 100%;
        height: 100%;
        touch-action: none;
      }
    `],n([u("#target")],DismissableItem.prototype,"target",2),n([a({passive:!0})],DismissableItem.prototype,"handlePointerDown",1),n([a({passive:!0})],DismissableItem.prototype,"handlePointerMove",1),n([a({passive:!0})],DismissableItem.prototype,"handlePointerUp",1),DismissableItem=n([m("dismissable-item")],DismissableItem);
