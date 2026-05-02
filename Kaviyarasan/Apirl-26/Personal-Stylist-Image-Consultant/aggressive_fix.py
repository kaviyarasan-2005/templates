import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Aggressive margin-top removal for banners
banner_fix = '''
  .admin-banner, .user-hero { margin-top: 0 !important; }
'''

# Add to max-width: 1024px block
content = content.replace('.dashboard-main { padding-top: 2px !important; }', '.dashboard-main { padding-top: 2px !important; }' + banner_fix)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Aggressively removed banner margins")
