const fs = require('fs');
const path = require('path');
// import P from "parcel-bundler"

module.exports = function (bundler) {
  const outDir = bundler.options.outDir;

  const TARGET_DIR = path.resolve(__dirname, outDir, './plugin');

  bundler.on('bundled', () => {
    fs.mkdirSync(TARGET_DIR);
    fs.writeFileSync(path.resolve(TARGET_DIR, './plugin.txt'), 'PLUGIN INJECT');
  });
};
