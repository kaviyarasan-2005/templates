import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add dashboard-main padding fix to the 1024px block
old_block = '''@media (max-width: 1024px) {
  .dashboard-widgets { grid-template-columns: 1fr; }
  .dashboard-layout { padding-top: 0; }
}'''

new_block = '''@media (max-width: 1024px) {
  .dashboard-widgets { grid-template-columns: 1fr; }
  .dashboard-layout { padding-top: 0; }
  .dashboard-main { padding-top: 4px; }
}'''

if old_block in content:
    content = content.replace(old_block, new_block)
else:
    # Try fuzzy
    import re
    content = re.sub(r'@media\s*\(max-width:\s*1024px\)\s*\{\s*\.dashboard-widgets\s*\{\s*grid-template-columns:\s*1fr;\s*\}\s*\.dashboard-layout\s*\{\s*padding-top:\s*0;\s*\}\s*\}', new_block, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Tablet gap fixed")
