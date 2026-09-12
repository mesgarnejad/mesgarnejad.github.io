#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
MOCKUPS = ROOT / "resume-mockups"
REQUIRED = [
    MOCKUPS / "index.html",
    MOCKUPS / "editorial" / "index.html",
    MOCKUPS / "technical" / "index.html",
    MOCKUPS / "minimal" / "index.html",
    MOCKUPS / "shared" / "resume-data.js",
]
PRIVATE_PATTERNS = [
    re.compile(r"Candlewick", re.IGNORECASE),
    re.compile(r"225[-.\s]620[-.\s]6369"),
]
STALE_PATTERNS = [
    re.compile(r"POSTECH", re.IGNORECASE),
    re.compile(r"GaitRehabilitation|Qsys", re.IGNORECASE),
]

errors = []
for path in REQUIRED:
    if not path.is_file():
        errors.append(f"Missing required file: {path.relative_to(ROOT)}")

text_files = list(MOCKUPS.rglob("*.html")) + list(MOCKUPS.rglob("*.js"))
combined = "\n".join(path.read_text(encoding="utf-8") for path in text_files)

for pattern in PRIVATE_PATTERNS:
    if pattern.search(combined):
        errors.append(f"Private contact detail matched: {pattern.pattern}")

for pattern in STALE_PATTERNS:
    if pattern.search(combined):
        errors.append(f"Stale template content matched: {pattern.pattern}")

for fact in ["16+", "LLM tooling", "MCP servers", "OpenTelemetry", "Rust", "C#", "Founder’s Award", "US20210276253A1"]:
    if fact not in combined:
        errors.append(f"Expected resume fact missing: {fact}")

for removed_claim in ["10×", "5×", "10x", "5x"]:
    if removed_claim in combined:
        errors.append(f"Removed speedup claim still present: {removed_claim}")

for path in REQUIRED[1:4]:
    html = path.read_text(encoding="utf-8")
    for marker in ['lang="en"', 'name="viewport"', 'class="skip-link"', "../shared/resume-app.js"]:
        if marker not in html:
            errors.append(f"{path.relative_to(ROOT)} missing {marker}")

if errors:
    print("\n".join(f"ERROR: {error}" for error in errors), file=sys.stderr)
    raise SystemExit(1)

print(f"Validated {len(text_files)} mockup HTML/JS files and 3 stable preview routes.")
