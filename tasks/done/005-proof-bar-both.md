# Task 005 — Proof Bar (BOTH versions)
## Target Files: /index.html AND /ar/index.html
## Section: #proof-bar

## Do
- Full-width bar: bg var(--bg-section-alt), border-top + border-bottom 1px solid var(--border)
- 4 metric blocks in a row (2x2 grid on mobile)
- Each: large number (data-count attr) + label below

## EN metrics
1. data-count="120" data-suffix="+" | "Campaigns Launched"
2. data-count="45" data-suffix="+" | "Healthcare Clients"
3. data-count="150" data-suffix="%" | "Avg. Booking Increase"
4. data-count="24" data-suffix="/7" | "Campaign Monitoring"

## AR metrics (same numbers)
1. data-count="120" data-suffix="+" | "حملة مُنفَّذة"
2. data-count="45" data-suffix="+" | "عميل طبي"
3. data-count="150" data-suffix="%" | "متوسط زيادة الحجوزات"
4. data-count="24" data-suffix="/7" | "مراقبة الحملات"

## Styles
- Number: font-size 48px, color var(--accent), font-weight var(--fw-black)
- Label: var(--fs-small), color var(--text-secondary)
- Section padding: 48px 0

## Done when
- [ ] EN version updated
- [ ] AR version updated
- [ ] Counter animates on scroll (data-count triggers animations.js)
- [ ] 2x2 on mobile
