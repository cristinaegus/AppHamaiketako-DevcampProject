const netlify = require('netlify-cli');

netlify.deploy({
  siteId: '',
  token: '',
  build: 'npm run build',
  publish: 'dist',
});