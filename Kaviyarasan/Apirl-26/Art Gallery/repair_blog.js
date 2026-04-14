const fs = require('fs');
const path = 'pages/blog-detail.html';
let content = fs.readFileSync(path, 'utf8');

// It ripped out the end of nav, breadcrumb, etc. Let's fix it by replacing what it left behind.
content = content.replace(/      <a href="login\.html" class="btn btn--primary" style="margin-top:8px;">Login<\/a>\n    <\/div>\n        <span class="badge badge--gold">Exhibition News<\/span>/, `      <a href="login.html" class="btn btn--primary" style="margin-top:8px;">Login</a>
    </div>
  </nav>

  <!-- BREADCRUMB & HERO -->
  <section class="page-offset" style="margin-top: 40px; padding-bottom:60px;">
    <div class="container container--narrow reveal">
      <div class="breadcrumb" style="margin-bottom:24px;justify-content:center;">
        <a href="home-main.html">Home</a><span class="breadcrumb__sep">/</span><a href="blog.html">Blog</a><span class="breadcrumb__sep">/</span><span style="color:var(--color-text);">Behind the Scenes</span>
      </div>
      <div style="display:flex;justify-content:center;gap:8px;margin-bottom:16px;">
        <span class="badge badge--gold">Exhibition News</span>`);

fs.writeFileSync(path, content);
console.log('Fixed clipping error');
