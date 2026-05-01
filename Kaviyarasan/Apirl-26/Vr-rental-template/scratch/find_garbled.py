import re

def find_garbled(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for i, line in enumerate(lines):
        if 'â' in line or 'Â' in line:
            print(f"Line {i+1}: {line.strip()}")

find_garbled(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\index.html')
