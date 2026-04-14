const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const rootDir = __dirname;
const exclude = ['login.html', 'register.html', 'dashboard.html'];

const masterFooter = `<!-- FOOTER START -->
  <footer class="footer" id="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer__grid">
        <!-- About -->
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#D4AF37"/><path d="M18 8L26 28H10L18 8Z" fill="white" opacity="0.9"/><circle cx="18" cy="20" r="4" fill="white" opacity="0.7"/></svg>
            <span style="font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:#fff;"><span style="color:var(--color-primary);">Aurelia</span> Gallery</span>
          </div>
          <p style="font-size:0.875rem;line-height:1.7;margin-bottom:16px;">A premier contemporary art gallery dedicated to showcasing exceptional artworks and nurturing emerging talent since 1998.</p>
          <div class="footer__socials">
            <a href="#" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4>Quick Links</h4>
          <ul style="display:flex;flex-direction:column;gap:10px;">
            <li><a href="home-main.html" style="font-size:0.875rem;">Home</a></li>
            <li><a href="about.html" style="font-size:0.875rem;">About Us</a></li>
            <li><a href="services.html" style="font-size:0.875rem;">Services</a></li>
            <li><a href="blog.html" style="font-size:0.875rem;">Blog</a></li>
            <li><a href="pricing.html" style="font-size:0.875rem;">Pricing</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4>Contact</h4>
          <ul style="display:flex;flex-direction:column;gap:10px;font-size:0.875rem;">
            <li style="display:flex;align-items:center;gap:8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              42 Gallery Row, NY 10012
            </li>
            <li style="display:flex;align-items:center;gap:8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +1 (212) 555-0198
            </li>
            <li style="display:flex;align-items:center;gap:8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              hello@aureliagallery.com
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4>Newsletter</h4>
          <p style="font-size:0.875rem;margin-bottom:16px;">Get exhibition previews and exclusive invites delivered to your inbox.</p>
          <form class="newsletter">
            <input type="email" placeholder="Your email" aria-label="Email for newsletter">
            <button type="submit" class="btn btn--primary btn--sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2026 Aurelia Gallery. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- FOOTER END -->`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const footerRegex = /(?:<!--\s*FOOTER.*-->\s*)?<footer\b[\s\S]*?<\/footer>(\s*<!--\s*FOOTER END\s*-->)?/i;
  
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, masterFooter);
    fs.writeFileSync(filePath, content);
    console.log('Fixed:', path.basename(filePath));
  } else {
    const scriptRegex = /<script.*?>/i;
    if (scriptRegex.test(content)) {
      content = content.replace(/(<script)/i, masterFooter + "\n\n  $1");
      fs.writeFileSync(filePath, content);
      console.log('Added footer to:', path.basename(filePath));
    } else {
       content = content.replace(/(<\/body>)/i, masterFooter + "\n$1");
       fs.writeFileSync(filePath, content);
       console.log('Added footer (body) to:', path.basename(filePath));
    }
  }
}

const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && !exclude.includes(f));
for (const file of pageFiles) {
  if (file === 'home-main.html') continue;
  processFile(path.join(pagesDir, file));
}
// Also process the root index.html? Wait, index is just a redirect page. Let's see if index has a footer. It shouldn't, but just in case.
// Actually index.html redirect is 32 lines. Let's ignore it or we can check.
// I will not test index.html.

console.log('Done.');
