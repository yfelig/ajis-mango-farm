# Session Log — ajis-mango-farm

Running log of work sessions. Newest entries on top. Used by `/wrap-session` and `/resume-session`.

---

## 2026-05-05 — 2-round professional design review + 14 improvements shipped

**What we did:**
- Ran a full design review loop (max 2 rounds) using Playwright across desktop (1440px) and mobile (390px) on all 4 pages
- **Round 1 (9 changes):** body font-weight 300→400 (readability); gold rating stars `#c8952e` 1.4rem; hero ghost CTA button "See the rooms" linking to rooms.html; fixed farm.html food section: `room-doorway.jpg` → `food-table.jpg`; testimonial decorative opening quote mark via `::before`; host quote border-left accent + font-size bump; mobile split images 16/9→4/3 ratio; `scroll-margin-top: 80px` on `section[id]` for fixed-nav anchor fix; activity card padding-bottom + h3 margin
- **Round 2 (4 changes):** story→rooms bridge CTA ("See the rooms →") before book-cta section; `aria-current="page"` + underline active state on farm/rooms/story navs; lazy-load placeholder `background: var(--bg-alt)` on photo-grid-2/3 and food-carousel-slide cells; cottage teaser hover overlay (subtle green tint) + CTA font-size 0.8→0.85rem
- **Photo fix (1 change):** cottage teaser on index — replaced `room-doorway.jpg` (door handle close-up) with `cottage-veranda.jpg` (veranda + lake view); replaced `cottage-interior.jpg` (cushion close-up) with `room-bed-mirror.jpg` (teak bed in situ)
- Verified all changes live on `https://aji-fruit-farm.lk/` via Playwright snapshots

**Where we are:**
Site is live, professionally designed, and approved. All 4 pages (index, farm, rooms, story) are polished and consistent. Conversion funnel is complete: hero CTA → rooms → book direct. Photography is now correct across all sections. 3 commits shipped this session (`efa6748`, `3b71216`, `17f83b3`).

**Open threads:**
- **No price signal** — "from $X/night" would reduce friction; Aji needs to confirm rate before adding
- **Map pin is Embilipitiya town** not farm GPS — could improve with a precise embed or plus.code
- **Rivka's GitHub invite** — unknown if accepted; needed for her to push photo updates
- **HTTPS on aji-fruit-farm.lk** — should be active; verify with `curl -I https://aji-fruit-farm.lk/`
- **Horse riding copy** — still says "a nearby local horse farm" — Aji should provide actual farm name

**Files touched:**
- `style.css` — font-weight, gold stars, blockquote::before, .hero-cta, .host-quote, scroll-margin-top, 4/3 mobile images, activity padding, nav active state, teaser hover overlay
- `index.html` — hero CTA added; cottage teaser photos replaced (cottage-veranda.jpg + room-bed-mirror.jpg)
- `farm.html` — food section photo fixed (food-table.jpg); lazy-load placeholder backgrounds; nav active state
- `rooms.html` — nav active state + "The Room" link added back
- `story.html` — nav active state; "See the rooms →" bridge CTA added before book section

**Git state:**
- Branch: `main`
- Uncommitted: `SESSION-LOG.md` (untracked)
- Last commit: `17f83b3 fix: replace uninformative cottage teaser photos on homepage`

---

## 2026-05-05 — Designer feedback implemented, site live on aji-fruit-farm.lk

**What we did:**
- Reviewed 7 screenshots of designer feedback (Israeli designer friend, via WhatsApp)
- **Reviews section**: expanded carousel from 3 → 6 quotes (added 3 real TripAdvisor reviews: Momoyo/Japan, Sjak/Netherlands, Ronald & Anni/Germany); redesigned rating block to centered flex column (stars / "5.0 on Airbnb · Guest Favorite" / "60+ reviews on Airbnb, Booking & TripAdvisor"); added `justify-content: center` to dots; added cite transition
- **Teaser grid** (cottages section on index.html): replaced `aspect-ratio: 16/10` with `height: clamp(260px, 38vw, 500px)` so both columns fill the same height — eliminated the large blank space below the main image; mobile breakpoint stacks main (4:3) then two side images side-by-side (1:1)
- **Nav button**: icon-only on mobile (`font-size: 0` at 860px), prevents crowding the logo
- **Horse riding**: updated copy in both index.html and farm.html to "A nearby local horse farm offers riding experiences and hikes through the area. Ask Aji for details and to arrange a visit."; replaced photo with `udawalawe horse riding.png` from Downloads
- Committed `ab33f20`, pushed `84830e0`

**Where we are:**
Site is live at `https://yfelig.github.io/ajis-mango-farm/` and DNS `aji-fruit-farm.lk` is propagated. All designer feedback addressed. Rivka has push access (invite may still need accepting). HTTPS cert should be provisioned.

**Open threads:**
- **Rivka's GitHub invite** — check if she accepted (needed before she can push)
- **HTTPS on aji-fruit-farm.lk** — should auto-provision after DNS verified; check GitHub Pages settings
- **Teaser grid mobile** — headless browser showed 2-column layout instead of single-column stacked; CSS is correct but needs verification on a real phone
- **Horse riding farm details** — activity copy still says "a nearby local horse farm" (placeholder); Aji should provide the actual farm name

**Files touched:**
- `index.html` — reviews dots (3→6), rating block restructure, horse riding copy
- `farm.html` — horse riding copy + section title
- `script.js` — 6 quotes in carousel
- `style.css` — reviews-rating flex, teaser grid height, nav mobile, dots centering
- `photos/horses.jpg` — replaced with Udawalawe horse riding PNG

**Git state:**
- Branch: `main`
- Last commit: `84830e0`
- Uncommitted: `SESSION-LOG.md` (untracked)

---

## 2026-05-05 — 26 real photos placed, DNS connected, Rivka added as collaborator

**What we did:**
- Viewed all 39 remaining extras from Rivka's ZIP (room-full ×4, bathroom ×3, aji ×2) — picked best
- Copied 19 selected extras to `photos/` with clean names (farm-branch-lake, farm-swing, farm-gazebo, farm-mangos, farm-path, all 6 food, cottage-veranda/lounge/doors/vines, room-armchairs/rack/bed-mirror, bathroom-shower/vanity, family-path, ajith-portrait)
- **farm.html**: replaced first photo-grid-2 with 3-col `photo-grid-3` (branch-lake, swing, gazebo); replaced second grid with farm-mangos + farm-path; added 6-photo horizontal food scroll carousel after food section
- **rooms.html**: expanded slider from 9 → 12 real photos — all placeholders replaced (room-bed, cottage-interior, room-view, room-bathroom-sky, room-vanity slots now filled with real shots)
- **story.html**: swapped portrait split from farm-wide.jpg to `ajith-portrait.jpg`; added `family-path.jpg` full-width strip between "Everything Changed" and pull quote
- Added CSS for `.photo-grid-3` and `.food-carousel` (CSS scroll-snap, no JS)
- Committed and pushed all 33 changed files (`96044e8`)
- Fixed push auth issue — macOS keychain had `yairUG` token; solved with `gh auth git-credential` + `http.postBuffer 524288000`
- Added `README.md` — project context, photo inventory, Claude instructions for both collaborators
- Added Rivka (`rivsh4-a11y`) as GitHub collaborator with push access — invite sent
- Configured `aji-fruit-farm.lk` custom domain: Register.lk DNS (4 A records `@` → GitHub Pages IPs, `www` CNAME → `yfelig.github.io`; nameservers already `sun.namebirth.com` / `moon.namebirth.com`)
- Set custom domain via GitHub API — status: building

**Where we are:**
All 4 pages live at `https://yfelig.github.io/ajis-mango-farm/` with 26 real photos placed. DNS configured for `aji-fruit-farm.lk`, propagating (~1-2h). Rivka has push access and a README that orients her Claude Code. Site is essentially complete for launch.

**Open threads:**
- **DNS propagation** — check with `dig aji-fruit-farm.lk +short` (should return `185.199.108.153`)
- **HTTPS/SSL** — GitHub auto-provisions cert once DNS verifies; ~1h after propagation
- **Horse riding copy** — activity card still says "Ask Aji" — needs actual farm name/location
- **Rivka's GitHub invite** — she needs to accept it before she can push

**Files touched:**
- `farm.html` — photo-grid-3, food scroll carousel, updated grids
- `rooms.html` — slider expanded to 12 real photos
- `story.html` — ajith-portrait in split, family-path strip added
- `README.md` — NEW: collaborator context + Claude instructions
- `photos/` — 19 new files added

**Git state:**
- Branch: `main`
- Uncommitted: `SESSION-LOG.md` (untracked)
- Last commit: `aa70550 docs: add README for collaborators`

---

## 2026-05-04 — 4-page restructure, photo picker v2 + ZIP export, Rivka's photos landed

**What we did:**
- Created `farm.html` — full farm page: orchard section, photo grids, lake section, full-width kayak strip, activities (3 cards), food section, dark-green book CTA
- Created `story.html` — Ajith's personal story: 4 editorial acts (abroad → farm → crisis → cottages), portrait split with farm-wide.jpg, pull quote section
- Updated `index.html` nav + all 4 sections shortened to teasers linking to sub-pages (text-link arrows)
- Updated `rooms.html` nav to point to farm/story/contact
- Updated `style.css` — added `.text-link`, `.host-quote`, `.footer-social`
- Rebuilt `photo-picker.html` from scratch: organized by page (index / rooms / farm+story note), colored page-usage badges per card, `horses.jpg` added as missing slot, extras feature (multi-upload per slot → horizontal thumbnail strip + remove button), ZIP export via JSZip (manifest `choices.txt` + `notes.txt`), general notes textarea + per-card notes injected via JS
- Found and downloaded `horses.jpg` via asset-finder agent — first attempt too zoomed out (wide landscape), second attempt closer rider shot (Pexels, Mario Amé)
- Received Rivka's ZIP (`aji-farm-photo-selections.zip`): 7 replacements, 39 extras (18 farm, 6 food, 6 cottage-exterior, 4 room-full, 3 bathroom, 2 aji), 5 not reviewed, no text notes
- Copied 7 replacement photos into `photos/` — all real farm photos (Nikon NW6A filenames)

**Where we are:**
7 replacement photos are in `photos/` but not yet committed. The 39 extra photos are sitting in `~/Downloads/aji-farm-photo-selections/extras/` — not yet copied to the repo or placed anywhere in the HTML. The site has 4 pages, all pushed to GitHub Pages, but photos are still partly placeholder (5 slots not reviewed by Rivka: horses, room-bed, room-view, room-bathroom-sky, room-vanity). The extras need a placement decision: which go into the rooms.html slider, which go into farm.html photo grids, which go into story.html.

**Open threads:**
- **Commit the 7 replacement photos** — ready, just not staged/committed yet
- **39 extras need placement** — look at each, decide: rooms slider (cottage-exterior ×6, room-full ×4, bathroom ×3), farm.html photo grids (farm-wide ×18, food ×6), story.html (aji ×2). Need to view them all, pick best, add to HTML where relevant
- **Carousels/galleries for extras** — food.html and farm.html currently show single images; extras imply a carousel or grid — needs implementation
- **5 not-reviewed slots** — horses.jpg is a Pexels stock shot (gaucho vibe — user wasn't thrilled, may want to replace); room-bed, room-view, room-bathroom-sky, room-vanity still have placeholder images
- **Custom domain** — `aji-fruit-farm.lk` purchased from Register.lk (Rs 3700/yr); DNS setup not done yet (CNAME + 4 A records for GitHub Pages, then set custom domain in repo settings)
- **Aji interview details** — horse riding farm name/location still a placeholder in activity card copy

**Files touched:**
- `index.html` — nav + all 4 sections shortened to teasers
- `rooms.html` — nav updated to farm/story/contact
- `style.css` — `.text-link`, `.host-quote`, `.footer-social` added
- `farm.html` — NEW: full farm sub-page
- `story.html` — NEW: Ajith's personal story sub-page
- `photo-picker.html` — complete rebuild: page-aware structure, extras, ZIP export, notes
- `photos/horses.jpg` — Pexels stock (Mario Amé, rider on horse, tropical greenery)
- `photos/aji.jpg` — replaced with real photo (Ajith + dog + daughter, laughing)
- `photos/farm-wide.jpg` — replaced with real photo (lake visible, tiled roof, palm garden)
- `photos/room-doorway.jpg` — replaced with real photo (teak door handle, bed blurred behind)
- `photos/cottage-exterior.jpg` — replaced with real photo (brick cottage, terracotta roof, big trees)
- `photos/room-full.jpg` — replaced with real photo (not yet viewed)
- `photos/bathroom.jpg` — replaced with real photo (raw concrete wall, leafy branch)
- `photos/kayak.jpg` — replaced with real photo (green boat on grass at lake edge)

**Git state:**
- Branch: `main`
- Uncommitted: `photos/aji.jpg`, `photos/bathroom.jpg`, `photos/cottage-exterior.jpg`, `photos/farm-wide.jpg`, `photos/kayak.jpg`, `photos/room-doorway.jpg`, `photos/room-full.jpg` (all modified — replacements from Rivka's ZIP, not yet committed)
- Last commit: `e655a8a replace horses.jpg — closer rider shot, Pexels`

**Extras sitting in Downloads (not yet in repo):**
- `~/Downloads/aji-farm-photo-selections/extras/farm-wide/` — 18 photos
- `~/Downloads/aji-farm-photo-selections/extras/food/` — 6 photos
- `~/Downloads/aji-farm-photo-selections/extras/cottage-exterior/` — 6 photos
- `~/Downloads/aji-farm-photo-selections/extras/room-full/` — 4 photos
- `~/Downloads/aji-farm-photo-selections/extras/bathroom/` — 3 photos
- `~/Downloads/aji-farm-photo-selections/extras/aji/` — 2 photos

---
