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

  store = new GroceryStore;
  pendingItems = [];
  doneItems = [];

  constructor() {
    super();
    const onchange = async () => {
      this.doneItems = [];
      this.pendingItems = [];
      for await (let entry of this.store.entries()) {
        if (entry.done) {
          this.doneItems.push(entry);
        } else {
          this.pendingItems.push(entry);
        }
      }
      await this.requestUpdate();
    };
    this.store.addEventListener('change', onchange);
    onchange();

    try {
      const reader = new NFCReader({url: document.baseURI, recordType: "json"});
      reader.addEventListener("reading", event => {
        for (let record of event.message.records) {
          if (record.data.product) {
            this.store.set(record.data.product, record.data.description);
          }
        }
      });
      reader.start();
    } catch(err) {
      console.error("Reading NFC tags is not supported");
    }
  }

  onchange(ev) {
    ev.stopPropagation();
    this.store.change(ev.target.label, ev.detail.checked);
  }

  render() {
    return html`
      <div role="list" class="mdc-list mdc-list--two-line">
        ${repeat(this.pendingItems, v => v.name, v => {
          return html`
            <grocery-item
              .label=${v.name}
              .sublabel=${v.note}
              @change=${this.onchange}></grocery-item>
          `;
        })}
      </div>
      <hr class=${classMap({hidden: !this.doneItems.length})}>
      <div role="list" class="mdc-list mdc-list--two-line">
        ${repeat(this.doneItems, v => v.name, v => {
          return html`
            <grocery-item
              .label=${v.name}
              .sublabel=${v.note}
              checked
              @change=${this.onchange}></grocery-item>
          `;
        })}
      </div>
    `;
  }
}
