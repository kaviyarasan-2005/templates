import os
import re

pages_dir = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages'

for filename in ['dashboard-admin.html', 'dashboard-user.html']:
    filepath = os.path.join(pages_dir, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the toggles block
    content = re.sub(r'<!-- TOGGLES -->\s*<div class="dashboard-top-actions">.*?</div>', '', content, flags=re.DOTALL)
    
    # Fix the weird extra blank lines
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)
    
    with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)

print("Cleaned up dashboard top actions")
