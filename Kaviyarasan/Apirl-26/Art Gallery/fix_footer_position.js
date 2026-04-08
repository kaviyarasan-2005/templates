const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html'));
const exclude = ['login.html', 'register.html', 'dashboard.html'];

for (const file of files) {
  if (exclude.includes(file)) continue;

  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if footer exists in the file
  const footerRegex = /(?:<!--\s*FOOTER START\s*-->\s*)?<footer\b[\s\S]*?<\/footer>(\s*<!--\s*FOOTER END\s*-->)?/i;
  
  const match = content.match(footerRegex);
  if (match) {
    const footerHtml = match[0];
    
    // Check if footer is before </head>
    const headEndIndex = content.indexOf('</head>');
    const footerStartIndex = content.indexOf('<footer');
    
    if (headEndIndex !== -1 && footerStartIndex !== -1 && footerStartIndex < headEndIndex) {
      console.log(`Fixing footer position in: ${file}`);
      
      // Remove all footers from the document temporarily
      content = content.replace(new RegExp(footerRegex, 'ig'), '');
      
      // Insert the footer right before the script tags at the bottom, or just before </body>
      const bottomScriptsRegex = /(<script type="module" src="\.\.\/assets\/js\/main\.js"><\/script>)/i;
      
      if (bottomScriptsRegex.test(content)) {
        content = content.replace(bottomScriptsRegex, footerHtml + "\n  $1");
      } else {
        const bodyEndRegex = /(<\/body>)/i;
        content = content.replace(bodyEndRegex, footerHtml + "\n$1");
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Saved fixed ${file}`);
    } else {
      // Look for a case where the footer is between </body> and </html>
      const bodyEndIndex = content.indexOf('</body>');
      if (bodyEndIndex !== -1 && footerStartIndex > bodyEndIndex) {
          console.log(`Fixing footer position (after body) in: ${file}`);
          content = content.replace(new RegExp(footerRegex, 'ig'), '');
          content = content.replace(/(<\/body>)/i, footerHtml + "\n$1");
          fs.writeFileSync(filePath, content);
      }
    }
  }
}
console.log('Checks complete.');
