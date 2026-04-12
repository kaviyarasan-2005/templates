const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'pages');

fs.readdir(dirPath, (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        if (file.endsWith('.html')) {
            const filePath = path.join(dirPath, file);
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Normalize CRLF to LF for easier matching
            let normalizedContent = content.replace(/\r\n/g, '\n');
            const oldStr = '<!-- About -->\n        <div>\n          <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">';
            const newStr = '<!-- About -->\n        <div>\n          <a href="home-main.html" style="display:flex;align-items:center;gap:8px;margin-bottom:16px;text-decoration:none;">';
            
            if (normalizedContent.includes(oldStr)) {
                let parts = normalizedContent.split(oldStr);
                for (let i = 1; i < parts.length; i++) {
                    // Replace the first </div> after oldStr with </a>
                    parts[i] = parts[i].replace('</div>', '</a>');
                }
                const newContent = parts.join(newStr);
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Updated ${file}`);
            } else {
                console.log(`Skipped ${file}`);
            }
        }
    });
});
