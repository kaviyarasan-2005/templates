const fs = require('fs');

try {
  let c = fs.readFileSync('pages/404.html', 'utf8');

  const oldBody = '<body style="display:flex;align-items:center;justify-content:center;height:100vh;background:var(--color-bg);text-align:center;overflow:hidden;position:relative;">';
  const newBody = '<body style="display:flex;flex-direction:column;min-height:100vh;background:var(--color-bg);position:relative;">';
  c = c.replace(oldBody, newBody);

  const oldDiv = '<div style="position:relative;z-index:1;padding:40px;">';
  const newMain = '<main style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 40px 40px;position:relative;z-index:1;">';
  c = c.replace(oldDiv, newMain);

  const oldEndDiv = '  </div>\r\n<!-- FOOTER START -->';
  const newEndMain = '  </main>\r\n<!-- FOOTER START -->';
  c = c.replace(oldEndDiv, newEndMain);

  if (c.indexOf(newEndMain) === -1) {
    c = c.replace('  </div>\n<!-- FOOTER START -->', '  </main>\n<!-- FOOTER START -->');
  }

  fs.writeFileSync('pages/404.html', c);
  console.log('Fixed wrapper in 404.html');
} catch (e) {
  console.error(e);
}
