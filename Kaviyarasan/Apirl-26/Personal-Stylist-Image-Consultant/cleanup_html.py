import os
import re

filepaths = [
    r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages\dashboard-admin.html',
    r'd:\Projects\Templates\Kaviyarasan\Apirl-26\personal-stylist-image-consultant\pages\dashboard-user.html'
]

for filepath in filepaths:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Extract style tag content from main
    style_pattern = re.compile(r'<main[^>]*>.*?<style>(.*?)</style>', re.DOTALL)
    match = style_pattern.search(content)
    if match:
        style_content = match.group(1)
        # 2. Move to head
        head_end = content.find('</head>')
        if head_end != -1:
            content = content[:head_end] + ' <style>' + style_content + ' </style>\n' + content[head_end:]
            # 3. Remove from main
            content = content.replace('<style>' + style_content + '</style>', '')
    
    # 4. Remove leading whitespace from main
    main_pattern = re.compile(r'(<main[^>]*>)\s+', re.DOTALL)
    content = main_pattern.sub(r'\1', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Cleaned up dashboard HTML structure")
