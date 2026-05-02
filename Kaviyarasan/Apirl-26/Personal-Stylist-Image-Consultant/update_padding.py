import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove nav-height padding on dashboard-layout
content = content.replace('.dashboard-layout { padding-top: var(--nav-height); }', '.dashboard-layout { padding-top: 0; }')

# 2. Add 4px top padding on mobile
content = content.replace('padding: 0 var(--space-2) var(--space-3); /* Removed top padding for mobile */', 'padding: 4px var(--space-2) var(--space-3); /* 4px top padding for mobile */')

# 3. Add 4px top padding on hard mobile
content = content.replace('padding: 0 8px 12px !important;', 'padding: 4px 8px 12px !important;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
