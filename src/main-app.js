
import { LitElement, html, css, property, customElement } from 'lit-element';
import "@material/mwc-checkbox";
import "@material/mwc-drawer";
import "@material/mwc-fab";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-snackbar";
import "@authentic/mwc-dialog/mwc-dialog";
import "@authentic/mwc-textfield/mwc-textfield";

import { query } from '@material/mwc-base/base-element.js';

import "./groceries-list.js";
import { GroceryStore } from './grocery-store.js';

import { Workbox } from 'workbox-window';

@customElement('add-dialog')
export class AddDialog extends LitElement {
  _store = new GroceryStore;

  @query('mwc-dialog') _dialog;
  // TODO: use classMap to hide checkbox when !NDEFWriter in window
  @query('mwc-checkbox') _checkbox;
  @query('mwc-snackbar') _snackbar;
  @query('#actionButton') _actionBtn;
  @query('#product') _product;
  @query('#description') _description;

  firstUpdated() {
    this._dialog.addEventListener('MDCDialog:closed', async ev => {
      if (ev.detail.action !== "accept") return;

      const writeToNFC = this._checkbox.checked;
      if (writeToNFC) {
        this._writeToNFC(this._product.value, this._description.value);
      } else {
        this._store.set(this._product.value, this._description.value);
      }
    });
  }

  async _writeToNFC(product, description) {
    const encoder = new TextEncoder();
    const ndef = {
      records: [{
        recordType: "mime",
        mediaType: "application/json",
        data: encoder.encode(JSON.stringify({ product, description }))
      }]
    };

    try {
      const controller = new AbortController;
      this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
        if (ev.detail.reason === "action") {
          controller.abort();
        }
      }, { once: true });

      this._snackbar.labelText = "Touch your NFC tag now";
      this._actionBtn.textContent = "CANCEL";
      this._snackbar.open();
      const writer = new NDEFWriter();
      await writer.push(ndef, {
        target: "tag",
        ignoreRead: true,
        overwrite: true,
        signal: controller.signal
      });
      this._snackbar.close();
    } catch (err) {
      this._snackbar.close();

      this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
        if (ev.detail.reason === "action") {
          Promise.resolve().then(() => this._writeToNFC(product, description));
        }
      }, { once: true });
      this._snackbar.labelText = `Writing failed: ${err}`;
      this._actionBtn.textContent = "RETRY";
      this._snackbar.open();
    }
  }

  open() {
    let options = [
      "Milk", "Cheese", "Beer", "Cocoa", "Candy",
      "Pizza", "Basil", "Salt", "Olive Oil"
    ];
    let entry = options[Math.floor(Math.random() * options.length)];
    this._description.value = "";
    this._checkbox.checked = false;
    this._product.value = entry;
    this._dialog.open();
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
  _store = new GroceryStore;

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

    mwc-switch {
      padding-right: 16px;
    }

    .label-scan {
      padding-right: 16px;
    }
  `;

  @query('add-dialog') _dialog;
  @query('mwc-drawer') _drawer;
  @query('mwc-snackbar') _snackbar;
  @query('#actionButton') _actionBtn;
  @query('mwc-switch')  _switch;

  firstUpdated() {
    const drawer = this._drawer;
    const container = drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', _ => {
      drawer.open = !drawer.open;
    });

    this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
      if (ev.detail.reason === "action") {
        window.location.reload();
      }
    });

    try {
      this._reader = new NDEFReader();
      this._reader.addEventListener("reading", ev => {
        const decoder = new TextDecoder();
        for (let record of ev.message.records) {
          const data = JSON.parse(decoder.decode(record.data));
          if (data.product) {
            this._store.set(data.product, data.description);
          }
        }
      });
    } catch(err) {
      console.error("Reading NFC tags is not supported");
    }

    this._switch.addEventListener('change', async ev => {
      const scanOption = { recordType: "mime" };
      try {
        if (this._switch.checked) {
          await this._reader.scan(scanOption);
        } else {
          const controller = new AbortController();
          scanOption.signal = controller.signal;
          // New invocation of scan() will cancel previous scan().
          await this._reader.scan(scanOption);
          controller.abort();
        }
      } catch(err) {
        console.error(err);
        const permission = await navigator.permissions.query({ name: 'nfc' });
        if (permission.state == 'denied' && err.name == "NotAllowedError"
            && this._switch.checked) {
          this._snackbar.labelText = "NFC permission is denied, please grant it in browser settings!";
          this._actionBtn.textContent = "";
          this._snackbar.open();
        }
      }
    });

    if ('serviceWorker' in navigator) {
      const wb = new Workbox('sw.js');
      wb.addEventListener('installed', ev => {
        if (!ev.isUpdate) {
          console.log('Service worker activated for the first time!');
        } else {
          console.log('Service worker was updated');
          this._snackbar.labelText = "A newer version of the app is available!";
          this._snackbar.open();
        }
      });

      wb.register();
    }
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
            <span slot="actionItems" class="label-scan">SCAN</span>
            <mwc-switch slot="actionItems"></mwc-switch>
          </mwc-top-app-bar>
          <div class="main-content">
            <groceries-list></groceries-list>
          </div>
        </div>
      </mwc-drawer>
      <mwc-fab icon="playlist_add" @click=${() => this._dialog.open()}></mwc-fab>
      <add-dialog></add-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">RELOAD</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
  }
}
