import createDefaultConfig from '@open-wc/building-rollup/modern-config';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config';

let config = createDefaultConfig({
  input: './index.html',
  extensions: ['.js', '.mjs']
});

function workbox(config) {
	return {
		name: 'workbox',
		async writeBundle() {
      let build = require('workbox-build');
      const { count, size } = await build.generateSW(config);
      console.log(count, size);
    }
	};
}

const plugins = [
  workbox({
    "globDirectory": "dist",
    "globPatterns": [
      '**/*.{js,css,html}'
    ],
    "swDest": "dist/sw.js"
  }),
];

config.plugins = config.plugins.concat(plugins);

export default config;