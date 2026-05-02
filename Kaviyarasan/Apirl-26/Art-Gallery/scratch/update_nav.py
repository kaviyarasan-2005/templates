import os
import re

new_home_accordion = """      <!-- Home Accordion -->
      <div class="navbar__mobile-accordion">
        <button class="navbar__mobile-accordion-trigger" aria-expanded="false">
          Home <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="navbar__mobile-accordion-content">
          <a href="home-main.html" class="navbar__link">Home 1</a>
          <a href="home-exhibition.html" class="navbar__link">Home 2</a>
        </div>
      </div>"""

new_dashboard_accordion = """      <!-- Dashboard Accordion -->
      <div class="navbar__mobile-accordion">
        <button class="navbar__mobile-accordion-trigger" aria-expanded="false">
          Dashboard <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="navbar__mobile-accordion-content">
          <a href="dashboard.html#user" class="navbar__link">User Dashboard</a>
          <a href="dashboard.html#admin" class="navbar__link">Admin Dashboard</a>
        </div>
      </div>"""

# Match both Home links
pattern_home = re.compile(r'<a href="home-main\.html" class="navbar__link">Home 1</a>\s*<a href="home-exhibition\.html" class="navbar__link">Home 2</a>', re.DOTALL)
# Match both Dashboard links
pattern_dashboard = re.compile(r'<a href="dashboard\.html#user" class="navbar__link">User Dashboard</a>\s*<a href="dashboard\.html#admin" class="navbar__link">Admin Dashboard</a>', re.DOTALL)

directory = 'pages'
for filename in os.listdir(directory):
    if filename.endswith('.html'):
        path = os.path.join(directory, filename)
        try:
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            orig_content = content
            content = pattern_home.sub(new_home_accordion, content)
            content = pattern_dashboard.sub(new_dashboard_accordion, content)
            
            if content != orig_content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f'Updated {filename}')
            else:
                print(f'No changes needed for {filename}')
        except Exception as e:
            print(f'Error processing {filename}: {e}')
