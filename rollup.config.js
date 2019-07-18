import createDefaultConfig from '@open-wc/building-rollup/modern-config';
import workbox from 'rollup-plugin-workbox/dist/index.js';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config';

let config = createDefaultConfig({
  input: './index.html',
  extensions: ['.js', '.mjs']
});

const plugins = [
  workbox({
    mode: 'generateSW',
    render: ({ swDest, count, size }) => console.log(
      'dest', swDest,
      '#️', count,
      'size', size,
    ),
    workboxConfig: {
      "globDirectory": "dist",
      "globPatterns": [
        '**/*.{js,css,html}'
      ],
      "swDest": "dist/sw.js"
    },
  })
];

config.plugins = config.plugins.concat(plugins);

export default config;