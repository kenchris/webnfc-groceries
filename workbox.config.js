module.exports = {
  globDirectory: "docs",
  globPatterns: [
    "**/*.{html,css}",
    "images/manifest/*",
    "images/favicon.ico",
    "web_modules/import-map.json",
    "web_modules/**/*",
    "dist/*.js"
  ],
  globIgnores: ['**/manifest.json'],
  swSrc: "src/sw-template.js",
  swDest: "docs/sw.js"
};
  