import os
import re

PAGES_DIR = "pages"
target_files = ["dashboard-admin.html", "dashboard-user.html"]

logo_html = """
    <div class="sidebar-brand" style="padding: var(--space-3); border-bottom: 1px solid var(--border-color);">
      <a href="index.html" class="nav-logo" style="margin-bottom:0">
        <img src="../assets/images/icons/logo.svg" alt="Logo" width="32" height="32" style="margin-right: 8px;" />
        <div class="nav-logo-text"><span class="nav-logo-name" style="font-size: var(--text-lg)">Elise</span></div>
      </a>
    </div>
"""

for filename in target_files:
    filepath = os.path.join(PAGES_DIR, filename)
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix double newlines
        content = content.replace('\n\n', '\n')
        
        # Insert logo if not already present
        if "sidebar-brand" not in content:
            # Insert right after <aside class="dashboard-sidebar" ...>
            content = re.sub(r'(<aside class="dashboard-sidebar"[^>]*>)', r'\1' + logo_html, content)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Fixed and added logo to {filename}")
