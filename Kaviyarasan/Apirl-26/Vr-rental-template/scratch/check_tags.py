import re

def check_divs(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    div_open = len(re.findall(r'<div\b[^>]*>', content))
    div_close = len(re.findall(r'</div>', content))
    
    section_open = len(re.findall(r'<section\b[^>]*>', content))
    section_close = len(re.findall(r'</section>', content))

    print(f"File: {filepath}")
    print(f"<div>: {div_open} opens, {div_close} closes")
    print(f"<section>: {section_open} opens, {section_close} closes")

check_divs(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\index.html')
