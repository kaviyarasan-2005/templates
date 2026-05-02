import os
import glob
import re

dir_path = r'd:\Projects\Templates\Kaviyarasan\Apirl-26\virtual-interior-design-service'
html_files = glob.glob(os.path.join(dir_path, '*.html'))

# We want to match the Pricing <li> and the Blog <li> and swap them.
# The Blog <li> might contain multiple lines.
desktop_pattern = re.compile(
    r'(<li class="navbar-item">\s*<a href="pricing\.html" class="navbar-link">Pricing</a>\s*</li>)\s*(<li class="navbar-item">\s*<button class="dropdown-toggle">Blog <svg.*?</div>\s*</li>)', 
    re.DOTALL
)

mobile_pattern = re.compile(
    r'(<li class="navbar-item" style="width: 100%;">\s*<a href="pricing\.html" class="navbar-link">Pricing</a>\s*</li>)\s*(<li class="navbar-item" style="width: 100%;">\s*<button class="dropdown-toggle" style="width: 100%; justify-content: space-between;">Blog <svg.*?</div>\s*</li>)',
    re.DOTALL
)

for file_path in html_files:
    if 'dashboard' in file_path:
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = desktop_pattern.sub(r'\2\n        \1', content)
    new_content = mobile_pattern.sub(r'\2\n      \1', new_content)

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {os.path.basename(file_path)}')
