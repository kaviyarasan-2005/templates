const fs = require('fs');
const path = require('path');
const d = path.join(__dirname, 'pages');
const cssD = path.join(__dirname, 'assets', 'css');

function scanDir(dir, ext) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(ext));
  files.forEach(f => {
    const lines = fs.readFileSync(path.join(dir, f), 'utf-8').split('\n');
    lines.forEach((l, i) => {
      // ignore 'overflow-x: hidden' which is common on html/body and 'overflow: hidden' which prevents scroll!
      if (l.includes('overflow') && !l.includes('overflow-x: hidden') && !l.includes('overflow: hidden') && !l.includes('overflow:hidden')) {
        console.log(`${f}:${i+1}: ${l.trim()}`);
      }
    });
  });
}

scanDir(d, '.html');
scanDir(cssD, '.css');
