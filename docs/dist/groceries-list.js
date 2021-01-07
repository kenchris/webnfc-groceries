var v=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=(e,t,r,l)=>{for(var s=l>1?void 0:l?u(t,r):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(l?a(t,r,s):a(s))||s);return l&&s&&v(t,r,s),s};import{LitElement as h,html as o,css as m,property as c,customElement as d}from"../web_modules/lit-element.js";import{repeat as p}from"../web_modules/lit-html/directives/repeat.js";import{classMap as b}from"../web_modules/lit-html/directives/class-map.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-icon-button.js";import"./dismissable-item.js";import{style as g}from"./mwc-list-item-css.js";import{GroceryStore as w}from"./grocery-store.js";export let GroceryItem=class extends h{constructor(){super(...arguments);this.label="",this.sublabel="",this.checked=!1}handleCheckboxChange(e){this.dispatchEvent(new CustomEvent("change",{detail:{checked:e.target.checked}}))}handleItemDismissal(){this.dispatchEvent(new Event("remove"))}render(){return o`
      <div>
        <dismissable-item @remove=${this.handleItemDismissal} role="listitem" class="mdc-list-item">
          <mwc-checkbox @change=${this.handleCheckboxChange} ?checked=${this.checked}></mwc-checkbox>
          <span class="mdc-list-item__text">
            ${this.label}
            <span class="mdc-list-item__secondary-text">${this.sublabel}</span>
          </span>
          <mwc-icon-button class="mdc-list-item__meta"
            aria-label="Delete item" title="Delete" icon="delete"
            @click=${this.handleItemDismissal} tabindex="-1">
          </mwc-icon-button>
        </dismissable-item>
      </div>
    `}};GroceryItem.styles=[g,m`
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
    `],i([c()],GroceryItem.prototype,"label",2),i([c()],GroceryItem.prototype,"sublabel",2),i([c({type:Boolean})],GroceryItem.prototype,"checked",2),GroceryItem=i([d("grocery-item")],GroceryItem);export let GroceriesList=class extends h{constructor(){super();this.#s=new w,this.#e=[],this.#t=[];const e=async()=>{this.#t=[],this.#e=[];for await(let t of this.#s.entries())t.done?this.#t.push(t):this.#e.push(t);await this.requestUpdate()};this.#s.addEventListener("change",e),e()}#s;#e;#t;_onchange(e){e.stopPropagation(),this.#s.change(e.target.label,e.detail.checked)}_onremove(e){this.#s.remove(e.target.label)}_isAllDone(){return!this.#e.length}_hasDoneItems(){return!!this.#t.length}render(){return o`
      <div role="list" class="mdc-list mdc-list--two-line">
        <div class="alldone ${b({hidden:!this._isAllDone()})}">
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
        ${this.#e&&p(this.#e,e=>e.name,e=>o`
            <grocery-item
              .label=${e.name}
              .sublabel=${e.note}
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
      <hr class=${b({hidden:!this._hasDoneItems()})}>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${this.#t&&p(this.#t,e=>e.name,e=>o`
            <grocery-item
              .label=${e.name}
              .sublabel=${e.note}
              checked
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
    `}};GroceriesList.styles=[g,m`
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
  `],GroceriesList=i([d("groceries-list")],GroceriesList);
