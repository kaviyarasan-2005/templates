const fs = require('fs');

// Fix home-main.html
let home = fs.readFileSync('pages/home-main.html', 'utf8');
home = home.replace('<div class="h-scroll" style="padding-bottom:24px;">', '<div class="grid grid--4" style="padding-bottom:24px;">');
home = home.replace(/<div class="card" style="min-width:350px;max-width:380px;">/g, '<div class="card">');
fs.writeFileSync('pages/home-main.html', home);

// Fix dashboard.html
let dash = fs.readFileSync('pages/dashboard.html', 'utf8');
dash = dash.replace('<div class="h-scroll">', '<div class="grid grid--3">');
dash = dash.replace(/<div class="card" style="min-width:280px;">/g, '<div class="card">');
// Since dashboard table also has overflow, let's leave that one alone unless specified, tables need scrolling on mobile.
fs.writeFileSync('pages/dashboard.html', dash);

console.log('Fixed h-scrolls');
