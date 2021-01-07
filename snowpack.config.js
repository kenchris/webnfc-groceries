// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist"
  },
  buildOptions: {
    out: "docs"
  },
  plugins: ['@snowpack/plugin-optimize', '@snowpack/plugin-dotenv'],
  installOptions: {
    treeshake: false,
    rollup: {
      dedupe: [
        "@material/mwc-notched-outline",
        "@material/mwc-ripple",
        "lit-html",
        "lit-element"
      ]
    }
  },
  install: [
    "@material/mwc-button",
    "@material/mwc-checkbox",
    "@material/mwc-dialog",
    "@material/mwc-drawer",
    "@material/mwc-fab",
    "@material/mwc-formfield",
    "@material/mwc-icon-button",
    "@material/mwc-icon-button-toggle",
    "@material/mwc-snackbar",
    "@material/mwc-textfield",
    "@material/mwc-top-app-bar",
    "lit-element",
    "lit-html"
  ]
};
