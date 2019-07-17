import { LitElement, html, css, property, customElement } from 'lit-element';
import { nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { classMap } from 'lit-html/directives/class-map.js'
import "@material/mwc-checkbox";

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
    `
  ];

  @property() label;
  @property() sublabel;
  @property({type: Boolean}) checked;

  onchange(ev) {
    this.dispatchEvent(new CustomEvent('change', { detail: { checked: ev.target.checked }}));
  }

  render() {
    return html`
      <a role="listitem" class="mdc-list-item">
        <mwc-checkbox @change=${this.onchange} ?checked=${this.checked}></mwc-checkbox>
        <span class="mdc-list-item__text">
          ${this.label}
          <span class="mdc-list-item__secondary-text">${this.sublabel}</span>
        </span>
      </a>
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

  render() {
    return html`
      <div role="list" class="mdc-list mdc-list--two-line">
        ${repeat(this._pendingItems, v => v.name, v => {
          return html`
            <grocery-item
              .label=${v.name}
              .sublabel=${v.note}
              @change=${this._onchange}></grocery-item>
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
              @change=${this._onchange}></grocery-item>
          `;
        })}
      </div>
    `;
  }
}
