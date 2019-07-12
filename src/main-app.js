
import { LitElement, html, css, property, customElement } from 'lit-element';
import "@material/mwc-drawer";
import "@material/mwc-fab";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@authentic/mwc-dialog/mwc-dialog";
import "@authentic/mwc-textfield/mwc-textfield";

import { query } from '@material/mwc-base/base-element.js';

import "./groceries-list.js";
import { GroceryStore } from './grocery-store.js';
import { Dialog } from '@authentic/mwc-dialog/mwc-dialog';


@customElement('main-app')
export class MainApplication extends LitElement {
  @property() name = 'World';

  static styles = css`
    .drawer-content {
      padding: 0px 16px 0 16px;
    }

    .main-content {
      width: 100vw;
      min-height: 300px;
      padding: 48px 0 0 0;
    }

    mwc-fab {
      position: fixed;
      bottom: 16px;
      right: 16px;
    }
  `;

  store = new GroceryStore;
  @query('mwc-dialog') dialog;
  @query('#product') product;
  @query('#description') description;

  firstUpdated() {
    const drawer = this.shadowRoot.querySelector('mwc-drawer');
    const container = drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', _ => {
      drawer.open = !drawer.open;
    });
    this.dialog.addEventListener('MDCDialog:closed', async (e) => {
      if (e.detail.action !== "accept") return;
      this.store.set(this.product.value, this.description.value);
    });
  }

  async onnew() {
    let options = ["Milk", "Cheese", "Beer", "Cocoa", "Candy"];
    let entry = options[Math.floor(Math.random() * options.length)];
    this.description.value = "";
    this.product.value = entry;
    this.dialog.open();
  }

  render() {
    return html`
      <mwc-drawer hasHeader type=modal>
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>
        <div class="drawer-content">
          <p>Drawer content</p>
          <mwc-icon-button icon="gesture"></mwc-icon-button>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Groceries list</div>
          </mwc-top-app-bar>
          <div class="main-content">
            <groceries-list></groceries-list>
          </div>
        </div>
      </mwc-drawer>
      <mwc-fab icon="playlist_add" @click=${this.onnew}></mwc-fab>
      <mwc-dialog id="dialog" headerLabel="Add new item" acceptLabel="Add" declineLabel="Cancel">
        <mwc-textfield outlined required id="product"
          type="text"
          label="Enter product..."
          value="Milk"
          helperText="Add a product like milk, bananas, etc">
        </mwc-textfield>
        <mwc-textfield outlined id="description"
          type="text"
          label="Enter description...">
        </mwc-textfield>
      <mwc-dialog>
    `;
  }
}