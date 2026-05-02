import os

pages_dir = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages'

toggles_html = '''   <div class="sidebar-toggles" style="margin-top: auto; padding: var(--space-2) 0; display: flex; gap: var(--space-2); justify-content: center; border-top: 1px solid var(--border-color-soft); margin-bottom: var(--space-2);">
    <button class="nav-action-btn" data-dir-toggle aria-label="Toggle direction" style="flex: 1;">RTL</button>
    <button class="nav-action-btn" data-theme-toggle aria-label="Toggle theme" style="flex: 1;">
     <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
     <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
    </button>
   </div>'''

# Helper to remove old dashboard-top-actions block
def remove_top_actions(content):
    start_tag = '<!-- TOGGLES -->'
    end_tag = '</div>\n  <style>'
    if start_tag in content and end_tag in content:
        start_idx = content.find(start_tag)
        end_idx = content.find(end_tag, start_idx)
        return content[:start_idx] + content[end_idx + 7:] # +7 to keep '  <style>'
    return content

# Admin dashboard
admin_file = os.path.join(pages_dir, 'dashboard-admin.html')
with open(admin_file, 'r', encoding='utf-8') as f:
    admin_content = f.read()

admin_content = remove_top_actions(admin_content)

old_admin_sidebar_logout = '''   <a href="login.html" class="sidebar-nav-link logout-nav-link" style="margin-top: auto; color: var(--color-error);">'''
new_admin_sidebar_logout = toggles_html + '''\n\n   <a href="login.html" class="sidebar-nav-link logout-nav-link" style="color: var(--color-error);">'''
admin_content = admin_content.replace(old_admin_sidebar_logout, new_admin_sidebar_logout)

old_admin_banner = '''   <div class="admin-banner-top">
    <div>
     <h1 class="admin-banner-greeting">Good morning, Elise ?</h1>
     <p class="admin-banner-sub">Here's your business intelligence for today - April 9, 2026</p>
    </div>'''
new_admin_banner = '''   <div class="admin-banner-top">
    <div style="display: flex; gap: var(--space-2); align-items: flex-start;">
     <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.25);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
     <div>
      <h1 class="admin-banner-greeting">Good morning, Elise ?</h1>
      <p class="admin-banner-sub">Here's your business intelligence for today - April 9, 2026</p>
     </div>
    </div>'''
admin_content = admin_content.replace(old_admin_banner, new_admin_banner)

with open(admin_file, 'w', encoding='utf-8') as f:
    f.write(admin_content)

# User dashboard
user_file = os.path.join(pages_dir, 'dashboard-user.html')
with open(user_file, 'r', encoding='utf-8') as f:
    user_content = f.read()

user_content = remove_top_actions(user_content)

old_user_sidebar_logout = '''   <a href="login.html" class="sidebar-nav-link logout-nav-link" style="margin-top: auto; color: var(--color-error);">'''
new_user_sidebar_logout = toggles_html + '''\n\n   <a href="login.html" class="sidebar-nav-link logout-nav-link" style="color: var(--color-error);">'''
user_content = user_content.replace(old_user_sidebar_logout, new_user_sidebar_logout)

old_user_hero = '''  <div class="user-hero">'''
new_user_hero = '''  <div class="user-hero" style="position: relative;">
   <button class="nav-action-btn hide-desktop" data-sidebar-toggle aria-label="Toggle sidebar" style="position: absolute; top: var(--space-3); inset-inline-end: var(--space-3); background: rgba(255,255,255,0.5); color: var(--color-brown-dark); border: 1px solid rgba(255,255,255,0.8); z-index: 2;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>'''
user_content = user_content.replace(old_user_hero, new_user_hero)

with open(user_file, 'w', encoding='utf-8') as f:
    f.write(user_content)

print("Dashboards updated successfully")
