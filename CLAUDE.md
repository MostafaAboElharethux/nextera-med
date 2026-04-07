# Project: Medical Marketing Agency — Nestera PRO

## Stack
- Vanilla HTML/CSS/JS — NO frameworks
- Single file per language version
- Google Fonts: Tajawal (AR) + Bebas Neue / DM Sans (EN)

## Files Map
- `/index.html` → English version
- `/ar/index.html` → Arabic RTL version
- `/assets/css/tokens.css` → ALL CSS variables — single source of truth
- `/assets/js/animations.js` → Scroll reveal + number counters
- `/assets/js/nav.js` → Sticky nav + hamburger logic
- `/tasks/queue/` → Upcoming tasks
- `/tasks/active/` → Current task in progress
- `/tasks/done/` → Completed tasks

## Design Tokens (READ FROM tokens.css — never hardcode)
--bg: #0a0a0a | --bg-card: #161616 | --border: #2a2a2a
--accent: #C0152A | --accent-hover: #FF2D3D
--text-primary: #F5F0EB | --text-secondary: #A89E97

## Sections Order (both versions — keep this sequence)
1. #nav → 2. #hero → 3. #proof-bar → 4. #who-we-serve
5. #services → 6. #case-studies → 7. #process
8. #testimonials → 9. #cta-final → 10. #footer

## Shared Class System (never duplicate these)
- .card → base card style (already in both HTML files)
- .btn / .btn-primary / .btn-outline → button styles
- .reveal / .reveal.is-visible → scroll animation
- .container → max-width wrapper
- .section → section padding

## RTL Rules (ar/index.html ONLY)
- html has dir="rtl" lang="ar"
- flex rows use flex-direction: row-reverse
- Logo anchored RIGHT, hamburger LEFT
- Arrows: → not ←
- font-family: var(--font-display-ar) or var(--font-body-ar)
- line-height minimum 1.8 for body, 1.3 for headlines
- AR font-sizes: same variables, no manual override needed

## Claude Code Rules (READ EVERY SESSION)
1. NEVER rewrite a full file unless task says "full rewrite"
2. Edit ONLY the section ID mentioned in the active task
3. Output ONLY the changed HTML block — no full file dumps
4. ALWAYS use CSS variables from tokens.css — never hardcode hex colors
5. When task affects both versions: edit BOTH files
6. Move finished task from tasks/active/ → tasks/done/ when done
7. If unclear: ask ONE question only, then stop
8. No explanation unless asked — code output only

## Interruption Protocol
If user says "stop", "pause", or "skip":
→ Stop immediately
→ Output what was completed
→ Wait for next instruction
