var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(e,t,s,o)=>{for(var i=o>1?void 0:o?b(t,s):t,r=e.length-1,c;r>=0;r--)(c=e[r])&&(i=(o?c(t,s,i):c(i))||i);return o&&i&&v(t,s,i),i};import{LitElement as a,html as n,css as d,property as m,customElement as h}from"../web_modules/lit-element.js";import{repeat as p}from"../web_modules/lit-html/directives/repeat.js";import{classMap as g}from"../web_modules/lit-html/directives/class-map.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-icon-button.js";import"./dismissable-item.js";import{style as _}from"./mwc-list-item-css.js";import{GroceryStore as u}from"./grocery-store.js";export let GroceryItem=class extends a{onchange(e){this.dispatchEvent(new CustomEvent("change",{detail:{checked:e.target.checked}}))}onremove(e){this.dispatchEvent(new Event("remove"))}render(){return n`
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
    `}};GroceryItem.styles=[_,d`
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
    `],l([m()],GroceryItem.prototype,"label",2),l([m()],GroceryItem.prototype,"sublabel",2),l([m({type:Boolean})],GroceryItem.prototype,"checked",2),GroceryItem=l([h("grocery-item")],GroceryItem);export let GroceriesList=class extends a{constructor(){super();this._store=new u,this._pendingItems=null,this._doneItems=null;const e=async()=>{let t=!0;for await(let s of this._store.entries())t&&(this._doneItems=[],this._pendingItems=[],t=!1),s.done?this._doneItems.push(s):this._pendingItems.push(s);await this.requestUpdate()};this._store.addEventListener("change",e),e()}_onchange(e){e.stopPropagation(),this._store.change(e.target.label,e.detail.checked)}_onremove(e){this._store.remove(e.target.label)}_isAllDone(){return this._pendingItems!==null&&!this._pendingItems.length}_hasDoneItems(){return this._doneItems&&this._doneItems.length}render(){return n`
      <div role="list" class="mdc-list mdc-list--two-line">
        <div class="alldone ${g({hidden:!this._isAllDone()})}">
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
        ${this._pendingItems&&p(this._pendingItems,e=>e.name,e=>n`
            <grocery-item
              .label=${e.name}
              .sublabel=${e.note}
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
      <hr class=${g({hidden:!this._hasDoneItems()})}>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${this._doneItems&&p(this._doneItems,e=>e.name,e=>n`
            <grocery-item
              .label=${e.name}
              .sublabel=${e.note}
              checked
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `)}
      </div>
    `}};GroceriesList.styles=[_,d`
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
  `],GroceriesList=l([h("groceries-list")],GroceriesList);
