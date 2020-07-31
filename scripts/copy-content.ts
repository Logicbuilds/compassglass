const fs = require('fs');
const path = require('path');
const copydir = require('copy-dir');

copydir.sync(process.cwd() + '/public/content', 'src/assets/content', {
  filter: (stat, filepath, filename) => true,
});
