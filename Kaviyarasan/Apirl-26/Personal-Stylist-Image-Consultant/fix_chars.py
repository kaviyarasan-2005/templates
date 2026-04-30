"""
Final pass: replace any remaining euro-sign-based em-dash artifacts.
Pattern: digit/space + euro-sign + quote/double-quote  => digit/space + hyphen
Also: standalone euro-sign sequences left from the encoding cascade.
"""
import os, re, sys
sys.stdout.reconfigure(encoding="utf-8")

PAGES = os.path.join(os.path.dirname(__file__), "pages")

# The euro sign U+20AC followed by various quote chars was left by the bad
# encoding fix that turned  â€"  →  €"  (euro + straight quote)
# We want to turn it back into a simple hyphen.
REPLACEMENTS = [
    # "3€"4"  or  "words €" words"  -> hyphen
    ("\u20ac\u201d", "-"),   # €" (right dq)
    ("\u20ac\u201c", "-"),   # €" (left dq)
    ('\u20ac"',      "-"),   # €" (straight dq)
    ("\u20ac\u2019", "'"),   # €' right-sq (curly apostrophe artifact)
    ("\u20ac\u2018", "'"),   # €' left-sq
    ("\u20ac'",      "'"),   # €' straight
    # Arrow artifacts: "â†'" or "†'" already partially fixed, catch stragglers
    ("\u2020\u2019", "->"),  # dagger + rsq -> arrow
    ("\u2020'",      "->"),
    # Sparkle ✦ artifacts
    ("\u0153\u00a6", "✦"),   # œ¦
    ("\u0153\xa6",   "✦"),
    # Standalone euro signs that ended up in titles/meta  e.g. "Elise €" Something"
    # Handled by the regex pass below
]

EURO_RE = re.compile(r'\u20ac["\u201c\u201d\u2018\u2019\']')

def fix(path):
    text = open(path, encoding="utf-8").read()
    orig = text
    for src, dst in REPLACEMENTS:
        text = text.replace(src, dst)
    text = EURO_RE.sub("-", text)
    if text != orig:
        open(path, "w", encoding="utf-8").write(text)
        return True
    return False

count = 0
for fname in sorted(os.listdir(PAGES)):
    if fname.endswith(".html"):
        p = os.path.join(PAGES, fname)
        changed = fix(p)
        print(("Fixed " if changed else "Clean ") + fname)
        if changed:
            count += 1

print(f"\n{count} file(s) updated.")
