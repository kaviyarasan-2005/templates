const fs = require('fs');
const path = require('path');

const cssPath = 'assets/css/style.css';
let c = fs.readFileSync(cssPath, 'utf8');

// 1. Add Custom Branded Scrollbar
const scrollbarStyles = `
/* --- CUSTOM SCROLLBAR --- */
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-track { background: var(--color-bg); }
::-webkit-scrollbar-thumb { 
  background: var(--color-border); 
  border-radius: 5px; 
  border: 2px solid var(--color-bg); 
}
::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }
`;

if (!c.includes('/* --- CUSTOM SCROLLBAR --- */')) {
  c = c.replace('/* --- GLOBAL RESET & LAYOUT --- */', scrollbarStyles + '\n/* --- GLOBAL RESET & LAYOUT --- */');
}

// 2. Enhance image transitions
const imgBase = 'img { max-width: 100%; height: auto; display: block; transition: filter 0.6s ease, transform 0.6s ease; }';
// Checking if it already has transition
if (!c.includes('transition: filter 0.6s ease')) {
    c = c.replace('img { max-width: 100%; height: auto; display: block; }', imgBase);
}

fs.writeFileSync(cssPath, c);
console.log('Premium UI polish applied successfully.');
