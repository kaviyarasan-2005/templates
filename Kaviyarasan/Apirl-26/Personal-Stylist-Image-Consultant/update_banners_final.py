import os

pages_dir = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages'

def normalize(content):
    # remove all carriage returns
    content = content.replace('\r', '')
    # replace multiple newlines with a single newline
    while '\n\n\n' in content:
        content = content.replace('\n\n\n', '\n\n')
    return content

# Admin dashboard
admin_file = os.path.join(pages_dir, 'dashboard-admin.html')
with open(admin_file, 'r', encoding='utf-8') as f:
    admin_lines = f.readlines()

admin_lines = [line for line in admin_lines if line.strip() != '' or '<' not in line] # Try to just build string and normalize
admin_content = ''.join(admin_lines)
admin_content = normalize(admin_content)

# We want to replace the top of admin banner:
old_admin_str1 = '''   <div class="admin-banner-top">
    <div>
     <h1 class="admin-banner-greeting">Good morning, Elise ?</h1>
     <p class="admin-banner-sub">Here's your business intelligence for today - April 9, 2026</p>
    </div>
    <div class="banner-actions">'''

new_admin_str1 = '''   <div class="admin-banner-top">
    <div style="display: flex; gap: var(--space-2); align-items: flex-start;">
     <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.25);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
     <div>
      <h1 class="admin-banner-greeting">Good morning, Elise ?</h1>
      <p class="admin-banner-sub">Here's your business intelligence for today - April 9, 2026</p>
     </div>
    </div>
    <div class="banner-actions">'''

# But since there might be double newlines, we strip spaces to match and replace
import re
def clean_ws(s): return re.sub(r'\s+', ' ', s)

def replace_fuzzy(content, old_str, new_str):
    # build a regex from old_str
    pattern = re.escape(old_str)
    # replace escaped spaces with \s+
    pattern = pattern.replace('\ ', '\s+')
    return re.sub(pattern, new_str, content)

admin_content = replace_fuzzy(admin_content, old_admin_str1.strip(), new_admin_str1.strip())

with open(admin_file, 'w', encoding='utf-8') as f:
    f.write(admin_content)

# User dashboard
user_file = os.path.join(pages_dir, 'dashboard-user.html')
with open(user_file, 'r', encoding='utf-8') as f:
    user_content = f.read()

user_content = normalize(user_content)

old_user_str = '''  <div class="user-hero">
   <img src="../assets/images/team/avatar-1.png" alt="Sophia Chen" class="user-hero-avatar"/>'''

new_user_str = '''  <div class="user-hero" style="position: relative;">
   <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="position: absolute; top: var(--space-3); inset-inline-end: var(--space-3); background: rgba(255,255,255,0.5); color: var(--color-brown-dark); border: 1px solid rgba(255,255,255,0.8); z-index: 2;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
   <img src="../assets/images/team/avatar-1.png" alt="Sophia Chen" class="user-hero-avatar"/>'''

user_content = replace_fuzzy(user_content, old_user_str.strip(), new_user_str.strip())

with open(user_file, 'w', encoding='utf-8') as f:
    f.write(user_content)

print("Dashboards banners updated finally")
