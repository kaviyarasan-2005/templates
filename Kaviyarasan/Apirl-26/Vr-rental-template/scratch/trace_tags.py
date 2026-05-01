import re

def trace_divs(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    depth = 0
    for i, line in enumerate(lines):
        opens = len(re.findall(r'<div\b[^>]*>', line))
        closes = len(re.findall(r'</div>', line))
        depth += (opens - closes)
        
        # If we have an unexpectedly large depth or end with >0 depth, print it
        if opens > 0 or closes > 0:
            # print(f"Line {i+1}: +{opens} -{closes} -> depth {depth}")
            pass
            
    print(f"Final depth: {depth}")
    
    # Try to find exactly where the missing closes are by looking at common patterns
    # e.g., missing closes at the end of cards
    for i, line in enumerate(lines):
        if 'class="card-footer"' in line:
            # print lines around it to see if it closes properly
            print(f"Card Footer at line {i+1}")
            for j in range(i, min(i+5, len(lines))):
                print(f"{j+1}: {lines[j].strip()}")

trace_divs(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\index.html')
