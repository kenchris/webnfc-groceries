
import { LitElement, html, css, property, customElement } from 'lit-element';
import "@material/mwc-checkbox";
import "@material/mwc-drawer";
import "@material/mwc-fab";
import "@material/mwc-formfield";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-snackbar";
import "@authentic/mwc-dialog/mwc-dialog";
import "@authentic/mwc-textfield/mwc-textfield";

import { query } from '@material/mwc-base/base-element.js';

import "./groceries-list.js";
import { GroceryStore } from './grocery-store.js';

@customElement('add-dialog')
export class AddDialog extends LitElement {
  store = new GroceryStore;

  @query('mwc-dialog') dialog;
  // TODO: use classMap to hide checkbox when !NFCWriter in window
  @query('mwc-checkbox') checkbox;
  @query('mwc-snackbar') snackbar;
  @query('#actionButton') actionBtn;
  @query('#product') product;
  @query('#description') description;

  firstUpdated() {
    this.dialog.addEventListener('MDCDialog:closed', async (e) => {
      if (e.detail.action !== "accept") return;

      const writeToNFC = this.checkbox.checked;
      if (writeToNFC) {
        this.writeToNFC(this.product.value, this.description.value);
      } else {
        this.store.set(this.product.value, this.description.value);
      }
    });
  }

  async writeToNFC(product, description) {
    const ndef = {
      records: [{
        recordType: "json",
        mediaType: "application/json",
        data: { product, description }
      }]
    };

    try {
      const controller = new AbortController;
      this.snackbar.addEventListener('MDCSnackbar:closed', (ev) => {
        if (ev.detail.reason === "action") {
          controller.abort();
        }
      }, { once: true });

      this.snackbar.labelText = "Touch your NFC tag now";
      this.actionBtn.textContent = "CANCEL";
      this.snackbar.open();
      const writer = new NFCWriter();
      await writer.push(ndef, {
        target: "tag",
        ignoreRead: true,
        compatibility: "any",
        signal: controller.signal
      });
      this.snackbar.close();
    } catch (err) {
      this.snackbar.close();

      this.snackbar.addEventListener('MDCSnackbar:closed', (ev) => {
        if (ev.detail.reason === "action") {
          Promise.resolve().then(() => this.writeToNFC(product, description));
        }
      }, { once: true });
      this.snackbar.labelText = `Writing failed: ${err}`;
      this.actionBtn.textContent = "RETRY";
      this.snackbar.open();
    }
  }

  open() {
    let options = ["Milk", "Cheese", "Beer", "Cocoa", "Candy"];
    let entry = options[Math.floor(Math.random() * options.length)];
    this.description.value = "";
    this.checkbox.checked = false;
    this.product.value = entry;
    this.dialog.open();
  }

  render() {
    return html`
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
        <mwc-formfield label="Write to NFC tag instead">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>
      </mwc-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">CANCEL</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
  }
}

@customElement('main-app')
export class MainApplication extends LitElement {
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

  @query('add-dialog') dialog;

  firstUpdated() {
    const drawer = this.shadowRoot.querySelector('mwc-drawer');
    const container = drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', _ => {
      drawer.open = !drawer.open;
    });
  }

  render() {
    return html`
      <mwc-drawer hasHeader type=modal>
        <span slot="title">Web NFC Grocery Demo</span>
        <span slot="subtitle">A demonstration of Web NFC</span>
        <div class="drawer-content">
          <p><a href="https://w3c.github.io/web-nfc/">Web NFC API specification</a></p>
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
      <mwc-fab icon="playlist_add" @click=${() => this.dialog.open()}></mwc-fab>
      <add-dialog></add-dialog>
    `;
  }
}