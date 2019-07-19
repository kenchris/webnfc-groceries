import { LitElement, html, css, property, customElement } from 'lit-element';
import { nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { classMap } from 'lit-html/directives/class-map.js'
import "@material/mwc-checkbox";

import './dismissable-item.js';
import { style as listStyle } from './mwc-list-item-css.js';
import { GroceryStore } from './grocery-store.js';

@customElement('grocery-item')
export class GroceryItem extends LitElement {
  static styles = [
    listStyle,
    css`
      .mdc-list-item {
        height: 64px;
      }

      mwc-checkbox {
        padding-right: 14px;
      }

      dismissable-item {
        width: 100%;
        --item-bg-color: #ededed;
        padding: 0px ! important;
        user-select: none;
      }

      div {
        background-color: #E53935;
      }
    `
  ];

  @property() label;
  @property() sublabel;
  @property({type: Boolean}) checked;

  onchange(ev) {
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: ev.target.checked }}));
  }

  onremove(ev) {
    this.dispatchEvent(new Event('remove'));
  }

  render() {
    return html`
      <div>
        <dismissable-item @remove=${this.onremove} role="listitem" class="mdc-list-item">
          <mwc-checkbox @change=${this.onchange} ?checked=${this.checked}></mwc-checkbox>
          <span class="mdc-list-item__text">
            ${this.label}
            <span class="mdc-list-item__secondary-text">${this.sublabel}</span>
          </span>
        </dismissable-item>
      </div>
    `
  }
}

@customElement('groceries-list')
export class GroceriesList extends LitElement {

  static styles = [listStyle, css`
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
  `];

  _store = new GroceryStore;
  _pendingItems = [];
  _doneItems = [];

  constructor() {
    super();
    const onchange = async () => {
      this._doneItems = [];
      this._pendingItems = [];
      for await (let entry of this._store.entries()) {
        if (entry.done) {
          this._doneItems.push(entry);
        } else {
          this._pendingItems.push(entry);
        }
      }
      await this.requestUpdate();
    };
    this._store.addEventListener('change', onchange);
    onchange();

    try {
      const reader = new NFCReader({url: document.baseURI, recordType: "json"});
      reader.addEventListener("reading", event => {
        for (let record of event.message.records) {
          const data = record.data();
          if (data.product) {
            this._store.set(data.product, data.description);
          }
        }
      });
      reader.start();
    } catch(err) {
      console.error("Reading NFC tags is not supported");
    }
  }

  _onchange(ev) {
    ev.stopPropagation();
    this._store.change(ev.target.label, ev.detail.checked);
  }

  _onremove(ev) {
    this._store.remove(ev.target.label);
  }

  render() {
    return html`
      <div role="list" class="mdc-list mdc-list--two-line">
        <div class="alldone ${classMap({hidden: this._pendingItems.length})}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z"/>
          <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
        </svg>
        You're all done! Please,<br>enjoy your day.
        <div id="filler"></div>
        </div>
        ${repeat(this._pendingItems, v => v.name, v => {
          return html`
            <grocery-item
              .label=${v.name}
              .sublabel=${v.note}
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `;
        })}
      </div>
      <hr class=${classMap({hidden: !this._doneItems.length})}>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${repeat(this._doneItems, v => v.name, v => {
          return html`
            <grocery-item
              .label=${v.name}
              .sublabel=${v.note}
              checked
              @change=${this._onchange}
              @remove=${this._onremove}>
            </grocery-item>
          `;
        })}
      </div>
    `;
  }
}
