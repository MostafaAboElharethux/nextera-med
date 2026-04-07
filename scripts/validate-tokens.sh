#!/bin/bash
echo "Checking for hardcoded hex colors in HTML files..."
RESULTS=$(grep -rn "#[0-9A-Fa-f]\{6\}\|#[0-9A-Fa-f]\{3\}" index.html ar/index.html 2>/dev/null | grep -v "<!--")
if [ -z "$RESULTS" ]; then
  echo "Clean — no hardcoded colors found."
else
  echo "WARNING — hardcoded colors found:"
  echo "$RESULTS"
  echo "Fix: replace with CSS variables from tokens.css"
fi
