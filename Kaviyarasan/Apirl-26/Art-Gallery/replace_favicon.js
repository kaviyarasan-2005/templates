const fs = require('fs');
const path = require('path');

const target1 = '<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicons/favicon-32x32.png">';
const replace1 = '<link rel="icon" type="image/svg+xml" href="../assets/images/favicons/favicon.svg">';

const target2 = '<link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png">';
const replace2 = '<link rel="icon" type="image/svg+xml" href="assets/images/favicons/favicon.svg">';

// Process pages/
const d = path.join(__dirname, 'pages');
fs.readdirSync(d).forEach(f => {
  if (f.endsWith('.html')) {
    const fp = path.join(d, f);
    let c = fs.readFileSync(fp, 'utf8');
    c = c.replace(target1, replace1);
    fs.writeFileSync(fp, c);
  }
});

// Process index.html
const indexHtml = path.join(__dirname, 'index.html');
if (fs.existsSync(indexHtml)) {
  let c = fs.readFileSync(indexHtml, 'utf8');
  c = c.replace(target1, replace1);
  c = c.replace(target2, replace2);
  fs.writeFileSync(indexHtml, c);
}

console.log('Favicon links updated');
