import re
import os

def update_cards(filepath, card_class, link_target, title_tag):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace <article class="card_class ..." with <a href="link_target" class="card_class" ...
    content = re.sub(rf'<article class=\"{card_class}(.*?)\"', rf'<a href=\"{link_target}\" class=\"{card_class}\1\"', content)
    # Also handle <div> if used
    content = re.sub(rf'<div class=\"{card_class}(.*?)\"', rf'<a href=\"{link_target}\" class=\"{card_class}\1\"', content)
    
    # Replace closing tags
    # This is tricky if there are other nested articles/divs, but usually not in this template structure
    # I'll look for the specific closing tag after the card body
    # content = content.replace('</article>', '</a>')
    # Better: replace the specific button and the tag following it
    
    # Remove 'View Details' / 'Read' buttons
    content = re.sub(rf'<a href=\"{link_target}\" class=\"btn btn-(?:primary|outline) btn-sm\" id=\".*?\">.*?</a>', '', content)
    
    # Specifically for blog titles
    if card_class == 'blog-card':
        content = re.sub(r'<h[23] class=\"blog-card-title\"><a href=\"blog-detail.html\">(.*?)</a></h[23]>', r'<h3 class="blog-card-title">\1</h3>', content)

    # Replace closing tags safely by looking for common footer endings
    if card_class == 'rv-card':
        content = content.replace('</article>', '</a>')
    elif card_class == 'blog-card':
        content = content.replace('</article>', '</a>')
    elif card_class == 'card': # index.html
        content = content.replace('</div>\n          </div>', '</div>\n          </a>')
        # Wait, index.html might be different. Let's handle it manually or more carefully.

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update services.html
update_cards(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\services.html', 'rv-card', 'service-detail.html', 'rv-card-title')

# Update blog.html
update_cards(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\blog.html', 'blog-card', 'blog-detail.html', 'blog-card-title')

# Update index.html
filepath = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern for index.html cards
card_pattern = r'<div class=\"card animate-fade-up\" data-search-item data-category=\"(.*?)\">(.*?)<a href=\"service-detail.html\" class=\"btn btn-primary btn-sm\" id=\".*?\">View Details</a>\s*</div>\s*</div>'
replacement = r'<a href="service-detail.html" class="card animate-fade-up" data-search-item data-category="\1">\2</a>'
content = re.sub(card_pattern, replacement, content, flags=re.DOTALL)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

