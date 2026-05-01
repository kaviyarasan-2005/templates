def fix_encoding(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The file contains UTF-8 sequences that were double-encoded or mangled.
    # We'll replace the exact literal strings that look like garbled text.
    replacements = {
        'â€”': '—',
        'â€“': '–',
        'Â·': '·',
        'Â©': '©',
        'â˜…': '★'
    }

    original_content = content
    for old, new in replacements.items():
        content = content.replace(old, new)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Fixed garbled characters.")
    else:
        print("No garbled characters found.")

fix_encoding(r'd:\Projects\Templates\Kaviyarasan\Apirl-26\vr-rental-template\pages\index.html')
