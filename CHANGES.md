# Changes

Running log of changes both Yair and Rivka push to this repo. Newest on top.

---

## 2026-05-07 — index hero polish (Rivka pass 1)
**By:** Rivka
**Changed:**
- Removed the "EMBILIPITIYA · SRI LANKA" small label above the H1 — felt redundant against the page title and the breadcrumb-feel didn't fit the editorial direction.
- Forced "AJI FRUIT FARM" onto a single line (dropped the `<br>`, added `white-space: nowrap`, retuned the clamp from 12vw/9rem max to 9vw/8rem max so it lands as one row at desktop widths and scales down cleanly on mobile).
- Strengthened the tagline contrast against the hero photo — bumped color opacity 0.85 → 0.96, added a soft `text-shadow: 0 1px 14px rgba(0,0,0,0.45)`. The italic Cormorant now reads cleanly through the foliage gradient.
- Thinned the sticky nav from `padding: 20px` to `12px` (and `10px` once scrolled). Reads as a fine line over the hero now instead of a banner.

**Files:** `index.html`, `style.css`

## 2026-05-07 — sticky nav visible from start, more delicate (Rivka)
**By:** Rivka
**Changed:**
- Nav is now visible from the moment the page loads, not only after scroll. Uses a soft 65% cream + 8px backdrop-blur + a hairline border-bottom (rgba 27,56,38,0.06) over the hero photo. On scroll the same bar intensifies to 95% cream + the standard border.
- Logo and link colors switched from white-on-photo to dark text in both states (the cream backdrop now exists in both, so white would disappear into it).
- Slightly tighter geometry: padding 12 → 10 (default) and 10 → 9 (scrolled), gap 36 → 32, link size 0.72 → 0.7rem, logo 1.1 → 1.05rem.

**Files:** `style.css`
