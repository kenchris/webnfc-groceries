var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,n=(e,o,t,s)=>{for(var i=s>1?void 0:s?g(o,t):o,r=e.length-1,c;r>=0;r--)(c=e[r])&&(i=(s?c(o,t,i):c(i))||i);return s&&i&&b(o,t,i),i};import{LitElement as l,html as p,css as w,customElement as m}from"../web_modules/lit-element.js";import{query as a}from"../web_modules/lit-element/lib/decorators.js";import"../web_modules/@material/mwc-button.js";import"../web_modules/@material/mwc-checkbox.js";import"../web_modules/@material/mwc-drawer.js";import"../web_modules/@material/mwc-fab.js";import"../web_modules/@material/mwc-formfield.js";import"../web_modules/@material/mwc-top-app-bar.js";import"../web_modules/@material/mwc-icon-button.js";import"../web_modules/@material/mwc-icon-button-toggle.js";import"../web_modules/@material/mwc-snackbar.js";import"../web_modules/@material/mwc-dialog.js";import"../web_modules/@material/mwc-textfield.js";import"./groceries-list.js";import{GroceryStore as h}from"./grocery-store.js";import{Workbox as u}from"../web_modules/workbox-window.js";const d=new class extends EventTarget{constructor(){super();this.#e=window.NDEFReader?new NDEFReader:new EventTarget,this.#o=!1,this.#t=null,this.#e.addEventListener("reading",e=>{if(this.#o)return;this.dispatchEvent(new NDEFReadingEvent(e.type,e))})}#e;#o;#t;async write(e,o){if(this.#o=!0,this.#e.write)await this.#e.write(e,o);else{const t=new NDEFWriter;await t.write(e,o)}this.#o=!1}scan(){this.#t||(this.#t=new AbortController,this.#e.scan({signal:this.#t.signal}))}stop(){this.#t&&(this.#t.abort(),this.#t=null)}};export let OnboardingWizard=class extends l{firstUpdated(){this._dialog.addEventListener("closed",async e=>{if(e.detail.action!=="next")return;this.dispatchEvent(new Event("prompt"))})}async open(){await this.updateComplete,this._dialog.open=!0}render(){return p`
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
    `}};OnboardingWizard.styles=w`
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
  `,n([a("mwc-dialog")],OnboardingWizard.prototype,"_dialog",2),OnboardingWizard=n([m("onboarding-wizard")],OnboardingWizard);export let AddDialog=class extends l{constructor(){super(...arguments);this._store=new h}firstUpdated(){this._snackbar.addEventListener("MDCSnackbar:closed",e=>{this._snackbar.labelText="",this._actionBtn.textContent=""}),this._dialog.addEventListener("closed",async e=>{if(e.detail.action!=="add")return;let o=this._product.value,t=this._description.value;if(this._product.value="",this._description.value="",o===""){let i=["Milk","Cheese","Beer","Cocoa","Candy","Pizza","Basil","Salt","Olive Oil","Toilet paper","Orange","Pancakes","Coffee","Toothpaste","Salat","Salami","Popcorns","Cake","Nuts","Bread"];o=i[Math.floor(Math.random()*i.length)],t=""}const s=this._checkbox.checked;s?this._writeToNFC(o,t):this._store.set(o,t)})}async _writeToNFC(e,o){const t=new TextEncoder,s={records:[{recordType:"mime",mediaType:"application/json",data:t.encode(JSON.stringify({product:e,description:o}))}]};try{const i=new AbortController;this._snackbar.addEventListener("closed",r=>{r.detail.reason==="action"&&i.abort()},{once:!0}),this._snackbar.labelText="Touch your NFC tag now.",this._actionBtn.textContent="CANCEL",this._snackbar.show(),await d.write(s,{overwrite:!0,signal:i.signal}),this._snackbar.close()}catch(i){this._snackbar.close();const r=await navigator.permissions.query({name:"nfc"});if(r.state=="denied"&&i.name=="NotAllowedError"){this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show();return}this._snackbar.addEventListener("MDCSnackbar:closed",c=>{c.detail.reason==="action"&&Promise.resolve().then(()=>this._writeToNFC(e,o))},{once:!0}),this._snackbar.labelText=`Writing failed: ${i}`,this._actionBtn.textContent="RETRY",this._snackbar.show()}}open(){this._description.value="",this._checkbox.checked=!1,this._dialog.open=!0}render(){return p`
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
    `}};AddDialog.styles=[w`
      div {
        display: flex;
        flex-direction: column;
      }

      div > mwc-textfield {
        padding: 10px 0px 10px 0px;
      }
    `],n([a("mwc-dialog")],AddDialog.prototype,"_dialog",2),n([a("mwc-checkbox")],AddDialog.prototype,"_checkbox",2),n([a("mwc-snackbar")],AddDialog.prototype,"_snackbar",2),n([a("#actionButton")],AddDialog.prototype,"_actionBtn",2),n([a("#product")],AddDialog.prototype,"_product",2),n([a("#description")],AddDialog.prototype,"_description",2),AddDialog=n([m("add-dialog")],AddDialog);export let MainApplication=class extends l{constructor(){super(...arguments);this._store=new h}firstUpdated(){const e=this._drawer,o=e.parentNode;if(o.addEventListener("MDCTopAppBar:nav",t=>{e.open=!e.open}),this._snackbar.addEventListener("MDCSnackbar:closed",t=>{t.detail.reason==="action"&&window.location.reload(),this._snackbar.labelText="",this._actionBtn.textContent=""}),d.addEventListener("reading",t=>{const s=new TextDecoder;for(let i of t.message.records){const r=JSON.parse(s.decode(i.data));r.product&&this._store.set(r.product,r.description)}}),navigator.permissions.query({name:"nfc"}).then(async t=>{const s=()=>{console.log("permission state",t.state),t.state==="granted"?(d.scan(),this._permissionToggle.on=!0):t.state==="denied"?this._permissionToggle.on=!1:t.state==="prompt"&&this._wizard.open()};s(),t.addEventListener("change",s)}).catch(t=>{this._snackbar.labelText="NFC is not supported; try enabling in about:flags",this._actionBtn.textContent="",this._snackbar.show()}),"serviceWorker"in navigator){const t=new u("sw.js");t.addEventListener("installed",s=>{s.isUpdate?(console.log("Service worker was updated"),this._snackbar.labelText="A newer version of the app is available.",this._snackbar.show()):console.log("Service worker activated for the first time.")}),t.register()}}async _toggleScan(e){if(!window.NDEFReader){this._snackbar.labelText="NFC is not supported; try enabling in about:flags",this._actionBtn.textContent="",this._snackbar.show();return}console.log("scan should turn on",e);try{e?(await d.scan(),this._snackbar.labelText="Add item or touch an NFC tag.",this._actionBtn.textContent="",this._snackbar.show()):(d.stop(),this._snackbar.labelText="NFC tags scan operation is disabled.",this._actionBtn.textContent="",this._snackbar.show())}catch(o){console.error(o),this._permissionToggle.on=!1;const t=await navigator.permissions.query({name:"nfc"});t.state=="denied"&&o.name=="NotAllowedError"&&(this._snackbar.labelText="NFC permission is denied, please grant it in browser settings.",this._actionBtn.textContent="",this._snackbar.show())}}render(){return p`
      <onboarding-wizard @prompt=${()=>this._toggleScan(!0)}></onboarding-wizard>
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
            <mwc-icon-button-toggle slot="actionItems" id="permissionToggle" @MDCIconButtonToggle:change=${e=>this._toggleScan(e.detail.isOn)}>
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
      <mwc-fab icon="playlist_add" @click=${()=>this._dialog.open()}></mwc-fab>
      <add-dialog></add-dialog>
      <mwc-snackbar stacked>
        <mwc-button id="actionButton" slot="action">RELOAD</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `}};MainApplication.styles=w`
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
  `,n([a("onboarding-wizard")],MainApplication.prototype,"_wizard",2),n([a("add-dialog")],MainApplication.prototype,"_dialog",2),n([a("mwc-drawer")],MainApplication.prototype,"_drawer",2),n([a("mwc-snackbar")],MainApplication.prototype,"_snackbar",2),n([a("#actionButton")],MainApplication.prototype,"_actionBtn",2),n([a("#permissionToggle")],MainApplication.prototype,"_permissionToggle",2),MainApplication=n([m("main-app")],MainApplication);
