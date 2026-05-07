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
