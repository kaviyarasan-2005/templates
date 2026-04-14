const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pages', 'blog-detail.html');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<ul style=\"display:flex;flex-direction:column;gap:12px;font-size:0\.875rem;\">\s*<li><a href=\"#concept\".*?The Initial Concept<\/a><\/li>\s*\"The core question emerged: How does abstract art function as an emotional anchor today\?\"\s*<\/blockquote>/s;

const correctBlock = `        <ul style="display:flex;flex-direction:column;gap:12px;font-size:0.875rem;">
          <li><a href="#concept" style="color:var(--color-text);font-weight:500;">The Initial Concept</a></li>
          <li><a href="#selection" style="color:var(--color-text-secondary);transition:color 0.2s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-secondary)'">Selecting the Artists</a></li>
          <li><a href="#spatial" style="color:var(--color-text-secondary);transition:color 0.2s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-secondary)'">Spatial Design Challenges</a></li>
          <li><a href="#conclusion" style="color:var(--color-text-secondary);transition:color 0.2s;" onmouseover="this.style.color='var(--color-primary)'" onmouseout="this.style.color='var(--color-text-secondary)'">Looking Forward</a></li>
        </ul>
      </aside>

      <!-- Main Text -->
      <article style="flex:1;min-width:0;line-height:1.8;font-size:1.125rem;color:var(--color-text-secondary);">
        <p style="margin-bottom:24px;"><span class="drop-cap">C</span>urating an exhibition of the magnitude of <em>Abstract Horizons</em> is a journey that begins months, sometimes years, before the first artwork is hung on our gallery walls. As we finalize the installation for our winter season opening, I wanted to pull back the curtain and share the intricate process of bringing this vision to life.</p>
        
        <h2 id="concept" style="font-family:var(--font-heading);font-size:2rem;color:var(--color-text);margin:40px 0 20px;">The Initial Concept</h2>
        <p style="margin-bottom:24px;">The seed for Abstract Horizons was planted during a studio visit in Berlin nearly two years ago. I was struck by how artists from different backgrounds were intuitively gravitating toward similar abstract languages to express deeply personal emotional landscapes in an increasingly chaotic world.</p>
        <p style="margin-bottom:24px;">The core question emerged: How does abstract art function as an emotional anchor today? We wanted to explore works that weren't just visually striking, but conceptually rigorous—pieces that invite viewers to project their own internal horizons onto the canvas.</p>

        <blockquote style="font-family:var(--font-heading);font-size:1.5rem;font-style:italic;color:var(--color-text);border-left:4px solid var(--color-primary);padding-left:24px;margin:40px 0;">
          "The core question emerged: How does abstract art function as an emotional anchor today?"
        </blockquote>`;

if(regex.test(content)) {
  content = content.replace(regex, correctBlock);
  fs.writeFileSync(filePath, content);
  console.log('Fixed corruption successfully.');
} else {
  console.log('Could not find corrupted block.');
}
