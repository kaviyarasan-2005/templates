import os
import re

pages_dir = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages'

# Admin dashboard
admin_file = os.path.join(pages_dir, 'dashboard-admin.html')
with open(admin_file, 'r', encoding='utf-8') as f:
    admin_content = f.read()

# Replace admin-banner-top
old_admin_pattern = r'<div class="admin-banner-top">\s*<div>\s*<h1 class="admin-banner-greeting">'
new_admin_replacement = '''<div class="admin-banner-top">
    <div style="display: flex; gap: var(--space-2); align-items: flex-start;">
     <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.25);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
     <div>
      <h1 class="admin-banner-greeting">'''
admin_content = re.sub(old_admin_pattern, new_admin_replacement, admin_content)

# We must close the extra <div> we opened in the admin banner.
# The original was:
#    <div>
#     <h1 ...>
#     <p ...>
#    </div>
#    <div class="banner-actions">
#
# We changed the start to:
#    <div style="display: flex; ...">
#     <button ...>
#     <div>
#      <h1 ...>
# So we need an extra </div> before <div class="banner-actions">
admin_close_pattern = r'</p>\s*</div>\s*<div class="banner-actions">'
admin_close_replacement = '''</p>
     </div>
    </div>
    <div class="banner-actions">'''
admin_content = re.sub(admin_close_pattern, admin_close_replacement, admin_content)

with open(admin_file, 'w', encoding='utf-8') as f:
    f.write(admin_content)


# User dashboard
user_file = os.path.join(pages_dir, 'dashboard-user.html')
with open(user_file, 'r', encoding='utf-8') as f:
    user_content = f.read()

old_user_pattern = r'<div class="user-hero">'
new_user_replacement = '''<div class="user-hero" style="position: relative;">
   <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="position: absolute; top: var(--space-3); inset-inline-end: var(--space-3); background: rgba(255,255,255,0.5); color: var(--color-brown-dark); border: 1px solid rgba(255,255,255,0.8); z-index: 2;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>'''
user_content = re.sub(old_user_pattern, new_user_replacement, user_content)

with open(user_file, 'w', encoding='utf-8') as f:
    f.write(user_content)

print("Dashboards banners updated successfully")
