const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const c = fs.readFileSync(path.join(pagesDir, f), 'utf-8');
  if (c.includes('class="reveal') || c.includes('stagger-child')) {
    if (!c.includes('animations.js')) {
      console.log('Missing animations.js in:', f);
      // Let's just fix it automatically!
      const mainJsRegex = /(<script type="module" src="\.\.\/assets\/js\/main\.js"><\/script>)/i;
      if (mainJsRegex.test(c)) {
        const fixed = c.replace(mainJsRegex, "$&\n  <script type=\"module\" src=\"../assets/js/animations.js\"></script>");
        fs.writeFileSync(path.join(pagesDir, f), fixed);
        console.log('Fixed animations in:', f);
      }
    }
  }
});
