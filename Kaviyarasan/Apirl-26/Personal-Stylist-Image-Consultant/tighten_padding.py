import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Update all padding-top to 2px in media queries
content = content.replace('.dashboard-main { padding-top: 4px; }', '.dashboard-main { padding-top: 2px !important; }')
content = content.replace('padding: 4px var(--space-2) var(--space-3); /* 4px top padding for mobile */', 'padding: 2px var(--space-2) var(--space-3) !important; /* 2px top padding for mobile */')
content = content.replace('padding: 4px 8px 12px !important;', 'padding: 2px 8px 12px !important;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Tightened dashboard padding")
