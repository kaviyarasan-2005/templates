"""Show exactly what context the euro sign appears in."""
import os, sys
sys.stdout.reconfigure(encoding="utf-8")

PAGES = "pages"
for fname in sorted(os.listdir(PAGES)):
    if not fname.endswith(".html"):
        continue
    text = open(os.path.join(PAGES, fname), encoding="utf-8").read()
    start = 0
    while True:
        idx = text.find("\u20ac", start)
        if idx < 0:
            break
        snippet = repr(text[max(0,idx-30):idx+30])
        print(f"{fname}:{idx}: {snippet}")
        start = idx + 1
