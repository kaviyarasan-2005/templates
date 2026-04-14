const fs = require('fs');

fs.appendFileSync('assets/css/style.css', '\n\n/* Drop Cap */\n.drop-cap {\n  font-family: var(--font-heading);\n  font-size: 4rem;\n  float: left;\n  line-height: 1;\n  margin-right: 12px;\n  color: var(--color-primary);\n}\n');
fs.appendFileSync('assets/css/rtl.css', '\n\n/* Drop Cap RTL override */\n[dir="rtl"] .drop-cap {\n  float: right;\n  margin-right: 0;\n  margin-left: 12px;\n}\n');
console.log('Added drop-cap CSS classes.');
