const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const filePath = path.join(pagesDir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('rtl.css')) {
    // Add it after dark-mode.css
    const darkCssRegex = /(<link rel="stylesheet" href="\.\.\/assets\/css\/dark-mode\.css">)/i;
    if (darkCssRegex.test(content)) {
      content = content.replace(darkCssRegex, "$1\n  <link rel=\"stylesheet\" href=\"../assets/css/rtl.css\">");
      fs.writeFileSync(filePath, content);
      console.log('Added rtl.css to:', f);
    } else {
        // Fallback: Add before </head>
        content = content.replace(/(<\/head>)/i, "  <link rel=\"stylesheet\" href=\"../assets/css/rtl.css\">\n$1");
        fs.writeFileSync(filePath, content);
        console.log('Added rtl.css (fallback) to:', f);
    }
  }
});
