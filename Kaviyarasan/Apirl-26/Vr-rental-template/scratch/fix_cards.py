import re
import os

def fix_file(filepath, link_target):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove backslashes
    content = content.replace('\\"', '"')
    
    # Re-convert nested links back to divs
    # This specifically looks for classes that shouldn't be links but were caught by my over-eager regex
    bad_classes = [
        'blog-card-img', 'blog-card-body', 'blog-card-meta', 'blog-card-actions',
        'rv-card-img', 'rv-card-body', 'rv-card-meta', 'rv-card-actions', 'rv-card-footer'
    ]
    
    for cls in bad_classes:
        content = content.replace(f'<a href="{link_target}" class="{cls}"', f'<div class="{cls}"')
        content = content.replace(f'<a href="{link_target}" class="{cls} ', f'<div class="{cls} ')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\services.html', 'service-detail.html')
fix_file(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\blog.html', 'blog-detail.html')
