import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Final aggressive tightening
content = content.replace('padding-top: 2px !important;', 'padding-top: 0 !important;')
content = content.replace('padding: 2px var(--space-2) var(--space-3) !important;', 'padding: 0 var(--space-2) var(--space-3) !important;')
content = content.replace('padding: 2px 8px 12px !important;', 'padding: 0 8px 12px !important;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Zeroed dashboard top padding")
