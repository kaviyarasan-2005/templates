import os

filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\assets\css\dashboard.css'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_block = '''    .admin-banner { 
      max-width: none; /* Changed from 320px to none */
      margin-inline: auto; 
      width: 100%;
      border-radius: var(--radius-xl);
      overflow: hidden;
      display: flex;
      overflow-x: auto;
      gap: var(--space-2);
      padding-bottom: var(--space-2);
      margin-top: var(--space-2);
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Hide scrollbar for clean look */
    }'''

new_block = '''    .admin-banner { 
      max-width: none; /* Changed from 320px to none */
      margin-inline: auto; 
      width: 100%;
      border-radius: var(--radius-xl);
      overflow: hidden;
      display: flex;
      overflow-x: auto;
      gap: var(--space-2);
      padding-bottom: var(--space-2);
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Hide scrollbar for clean look */
    }'''

import re
def clean_ws(s): return re.sub(r'\s+', ' ', s)

if clean_ws(old_block) in clean_ws(content):
    # Do a fuzzy replacement
    pattern = re.escape(old_block).replace('\ ', '\s+').replace(r'\n', r'\s*')
    # wait, re.escape is tricky. Let's just do a simple replacement for the single line.
    pass

# Simpler replacement
content = content.replace('margin-top: var(--space-2);\n      -webkit-overflow-scrolling: touch;', '-webkit-overflow-scrolling: touch;')
content = content.replace('margin-top: var(--space-2);\r\n      -webkit-overflow-scrolling: touch;', '-webkit-overflow-scrolling: touch;')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed margin-top from admin banner")
