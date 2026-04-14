const fs = require('fs');
const path = 'pages/home-main.html';
const lines = fs.readFileSync(path, 'utf8').split('\n');
lines.forEach((l, i) => {
  if (l.includes('overflow') || l.includes('h-scroll') || l.includes('scroll')) {
    if (!l.includes('overflow-x: hidden') && !l.includes('scrolled') && !l.includes('no-scroll')) {
      console.log(i + ': ' + l.trim());
    }
  }
});
