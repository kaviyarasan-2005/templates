const fs = require('fs');
const path = require('path');
const d = path.join(__dirname, 'pages');

const filesToFix = fs.readdirSync(d).filter(f => f.endsWith('.html')).map(f => path.join(d, f));
filesToFix.push(path.join(__dirname, 'index.html'));

filesToFix.forEach(fp => {
  if (fs.existsSync(fp)) {
    let content = fs.readFileSync(fp, 'utf8');
    // The problematic CSS rule is: `html, body { overflow-x: hidden !important; width: 100% !important; position: relative !important; }`
    // Might also have `height: 100% !important;`
    content = content.replace(/html, body \{\s*overflow-x: hidden !important;/g, 'body { overflow-x: hidden !important;');
    content = content.replace(/html, body \{\s*overflow-x: hidden;/g, 'body { overflow-x: hidden;');
    fs.writeFileSync(fp, content);
  }
});
console.log('Fixed double scroll bar bug across all pages.');
