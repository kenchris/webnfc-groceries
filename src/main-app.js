import { LitElement, html, css, property, customElement } from 'lit-element';
import "@material/mwc-button";
import "@material/mwc-checkbox";
import "@material/mwc-drawer";
import "@material/mwc-fab";
import "@material/mwc-formfield";
import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-snackbar";
import "@material/mwc-dialog";
import "@material/mwc-textfield";

import { query } from '@material/mwc-base/base-element.js';

import "./groceries-list.js";
import { GroceryStore } from './grocery-store.js';

import { Workbox } from 'workbox-window';

@customElement('onboarding-wizard')
export class OnboardingWizard extends LitElement {

  @query('mwc-dialog') _dialog;

  static styles = css`
    #dialog {
      --mdc-dialog-max-width: 350px;
    }

    #container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 150px;
    }

    #bg-scan {
      width: 100px;
      height: 100px;
      fill: lightgray;
    }
  `;

  firstUpdated() {
    this._dialog.addEventListener('closed', async ev => {
      if (ev.detail.action !== "next") return;
      this.dispatchEvent(new Event('prompt'));
    });
  }

  async open() {
    await this.updateComplete;
    this._dialog.open = true;
  }

  render() {
    return html`
      <mwc-dialog id="dialog">
        <div id="container">
          <svg id="bg-scan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z"/>
            <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0
            2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0
            -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74
            -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
          </svg>
        </div>
        Add groceries items by tapping on NFC stickers and the like.
        <mwc-button
        dialogAction="next"
        slot="primaryAction">
          next
        </mwc-button>
        <mwc-button
          dialogAction="skip"
          slot="secondaryAction">
          skip
        </mwc-button>
      </mwc-dialog>
    `;
  }
}


@customElement('add-dialog')
export class AddDialog extends LitElement {
  _store = new GroceryStore;

  @query('mwc-dialog') _dialog;
  @query('mwc-checkbox') _checkbox;
  @query('mwc-snackbar') _snackbar;
  @query('#actionButton') _actionBtn;
  @query('#product') _product;
  @query('#description') _description;

  firstUpdated() {
    this._snackbar.addEventListener('MDCSnackbar:closed', ev => {
      this._snackbar.labelText = "";
      this._actionBtn.textContent = "";
    });

    this._dialog.addEventListener('closed', async ev => {
      if (ev.detail.action !== "add") return;

      let product = this._product.value;
      let desc = this._description.value;
      this._product.value = "";
      this._description.value = "";

      console.log(product, !product, product === "");

      if (product === "") {
        let options = [
          "Milk", "Cheese", "Beer", "Cocoa", "Candy",
          "Pizza", "Basil", "Salt", "Olive Oil",
          "Toilet paper", "Orange", "Pancakes",
          "Coffee", "Toothpaste", "Salat", "Salami",
          "Popcorns", "Cake", "Nuts", "Bread"
        ];
        product = options[Math.floor(Math.random() * options.length)];
        desc = "";
      }


      const writeToNFC = this._checkbox.checked;
      if (writeToNFC) {
        this._writeToNFC(product, desc);
      } else {
        this._store.set(product, desc);
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
      this._snackbar.addEventListener('closed', ev => {
        if (ev.detail.reason === "action") {
          controller.abort();
        }
      }, { once: true });

      this._snackbar.labelText = "Touch your NFC tag now.";
      this._actionBtn.textContent = "CANCEL";
      this._snackbar.open();
      const writer = new NDEFWriter();
      await writer.write(ndef, {
        ignoreRead: true,
        overwrite: true,
        signal: controller.signal
      });
      this._snackbar.close();
    } catch (err) {
      this._snackbar.close();

      const permission = await navigator.permissions.query({ name: 'nfc' });
      if (permission.state == 'denied' && err.name == "NotAllowedError") {
        this._snackbar.labelText = "NFC permission is denied, please grant it in browser settings.";
        this._actionBtn.textContent = "";
        this._snackbar.open();
        return;
      }

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
    this._description.value = "";
    this._checkbox.checked = false;
    this._dialog.open = true;
  }

  static styles = [
    css`
      div {
        display: flex;
        flex-direction: column;
      }

      div > mwc-textfield {
        padding: 10px 0px 10px 0px;
      }
    `
  ];

  render() {
    return html`
      <mwc-dialog id="dialog" heading="Add new item">
        <div>
          <mwc-textfield outlined required
            id="product"
            label="Enter product...">
          </mwc-textfield>
          <mwc-textfield outlined
            id="description"
            label="Enter description...">
          </mwc-textfield>
          <mwc-formfield label="Write to NFC tag instead">
            <mwc-checkbox></mwc-checkbox>
          </mwc-formfield>
        </div>
        <mwc-button
        dialogAction="add"
        slot="primaryAction">
          add
        </mwc-button>
        <mwc-button
          dialogAction="cancel"
          slot="secondaryAction">
          cancel
        </mwc-button>
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

    .permission-on {
      fill: white;
    }

    .permission-off {
      fill: lightgray;
    }

    .hidden {
      display: none;
    }
  `;

  @query('onboarding-wizard') _wizard;
  @query('add-dialog') _dialog;
  @query('mwc-drawer') _drawer;
  @query('mwc-snackbar') _snackbar;
  @query('#actionButton') _actionBtn;
  @query('#permissionToggle') _permissionToggle;

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
      this._snackbar.labelText = "";
      this._actionBtn.textContent = "";
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
      navigator.permissions.query({ name: 'nfc' }).then(async permission => {
        if (permission.state == "granted") {
          this._reader.scan({ recordType: "mime" });
          this._permissionToggle.on = true;
        }
        permission.addEventListener('change', () => {
          if (permission.state == "granted") {
            this._reader.scan({ recordType: "mime" });
            this._permissionToggle.on = true;
          }
          if (permission.state == 'denied') {
            this._permissionToggle.on = false;
          }
        });
      });
    } catch(err) {
      console.error("Reading NFC tags is not supported");
      this._wizard.open();
    }

    if ('serviceWorker' in navigator) {
      const wb = new Workbox('sw.js');
      wb.addEventListener('installed', ev => {
        if (!ev.isUpdate) {
          console.log('Service worker activated for the first time.');
        } else {
          console.log('Service worker was updated');
          this._snackbar.labelText = "A newer version of the app is available.";
          this._snackbar.open();
        }
      });

      wb.register();
    }
  }

  async _scanOperation() {
    if (!this._reader) {
      this._snackbar.labelText = "NFC is not supported; try enabling in about:flags";
      this._actionBtn.textContent = "";
      this._snackbar.open();
      return;
    }

    try {
      if (this._permissionToggle.on) {
        await this._reader.scan({ recordType: "mime" });
        this._snackbar.labelText = "Add item or touch an NFC tag.";
        this._actionBtn.textContent = "";
        this._snackbar.open();
      } else {
        const controller = new AbortController();
        // New invocation of scan() will cancel previous scan().
        await this._reader.scan({ recordType: "mime", signal: controller.signal });
        controller.abort();
        this._snackbar.labelText = "NFC tags scan operation is disabled.";
        this._actionBtn.textContent = "";
        this._snackbar.open();
      }
    } catch(err) {
      console.error(err);
      this._permissionToggle.on = false;
      const permission = await navigator.permissions.query({ name: 'nfc' });
      if (permission.state == 'denied' && err.name == "NotAllowedError") {
        this._snackbar.labelText = "NFC permission is denied, please grant it in browser settings.";
        this._actionBtn.textContent = "";
        this._snackbar.open();
      }
    }
  }

  render() {
    return html`
      <onboarding-wizard @prompt=${() => this._scanOperation()}></onboarding-wizard>
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
            <mwc-icon-button-toggle slot="actionItems" id="permissionToggle" @click=${() => this._scanOperation()}>
              <svg slot="onIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="permission-on">
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0 -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74 -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
              </svg>
              <svg slot="offIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="permission-off">
                <path fill="none" d="M0 0h24v24H0V0z"/>
                <path d="M20,2L4,2c-1.1,0 -2,0.9 -2,2v16c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2L22,4c0,-1.1 -0.9,-2 -2,-2zM20,20L4,20L4,4h16v16zM18,6h-5c-1.1,0 -2,0.9 -2,2v2.28c-0.6,0.35 -1,0.98 -1,1.72 0,1.1 0.9,2 2,2s2,-0.9 2,-2c0,-0.74 -0.4,-1.38 -1,-1.72L13,8h3v8L8,16L8,8h2L10,6L6,6v12h12L18,6z"/>
            </svg>
            </mwc-icon-button-toggle>
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
