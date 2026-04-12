const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'pages');

fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(dirPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // 1. Replace "Aurelia Gallery" with "Aurelia" globally in text
            content = content.replace(/Aurelia Gallery/g, 'Aurelia');
            
            // 2. Fix the navbar logo specifically (which has HTML tags between them)
            content = content.replace(/<span>Aurelia<\/span>\s*<span class="navbar__logo-suffix">Gallery<\/span>/g, '<span>Aurelia</span>');
            
            // 3. Fix the footer logo specifically
            content = content.replace(/<span style="color:var\(--color-primary\);">Aurelia<\/span>\s*Gallery<\/span>/g, '<span style="color:var(--color-primary);">Aurelia</span></span>');

            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    });
});
