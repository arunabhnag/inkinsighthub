# website.md — AI Coding Guide for inkinsighthub.com

> **READ THIS ENTIRE FILE BEFORE WRITING A SINGLE LINE OF CODE OR CREATING ANY FILE.**
> Authoritative guide for all AI assistants (Cline, Claude, Copilot, etc.) working on this codebase.
> Follow every convention without deviation unless explicitly instructed otherwise by the human.

| | |
|---|---|
| **Version** | 2.2 |
| **Last updated** | 2026-03-01 |
| **Status** | Active — current and complete for v1 build |
| **Changelog** | See [Versioning](#versioning) |

---

## PROTECTED FILES — Never Modify Without Explicit Human Instruction

These files must **never** be modified, overwritten, renamed, or deleted by an AI agent — even to "improve" them:

- `website.md` — this file
- `architecture.md` — project documentation
- `state.md` — AI agents **write** to designated sections only (see `state.md` for rules)

If you believe a change is needed: **stop, flag it in a code comment, wait for human instruction.**

---

## AMBIGUITY PROTOCOL — When You Encounter Something Not Covered Here

**Stop. Do not invent. Do not assume.**

1. **Re-read this file** — the answer may be further down.
2. **Check `state.md`** — a previous session may have resolved this.
3. **Apply the most conservative interpretation** — use existing patterns rather than creating new ones. When uncertain about layout, use the existing grid. When uncertain about content, use a placeholder.
4. **Flag it** — add `<!-- DECISION NEEDED: [describe gap] -->` in the code, log it in `state.md` under "Blocked / Needs Human Input", continue with the conservative choice.
5. **Never silently invent** a new pattern, class name, or design token.

---

## SESSION START SEQUENCE

Follow in exact order at the start of every session:

1. Read `state.md` — check "Current Phase", "Next Action", "Blocked / Needs Human Input".
2. Read `website.md` (this file) — every section, every time.
3. Begin work on the task in "Next Action".
4. End of session: update `state.md` — tick completed items, update "In Progress", log decisions, update "Next Action".

**`website.md` vs `state.md`:** `website.md` is timeless convention — how the site must be built, written by humans, never modified by AI. `state.md` is current reality — what has been built and what comes next, updated by AI at session end.

If `state.md` does not exist, create it from the template in the project root before starting any other work.

---

## Table of Contents

1. [PROTECTED FILES](#protected-files--never-modify-without-explicit-human-instruction)
2. [AMBIGUITY PROTOCOL](#ambiguity-protocol--when-you-encounter-something-not-covered-here)
3. [SESSION START SEQUENCE](#session-start-sequence)
4. [WHAT](#what)
5. [WHY](#why)
6. [HOW — File & Folder Structure](#how--file--folder-structure)
7. [Design System — CSS Variables](#design-system--css-variables-source-of-truth)
8. [CSS Reset Strategy](#css-reset-strategy)
9. [Responsive Breakpoints](#responsive-breakpoints)
10. [Typography Scale](#typography-scale)
11. [Spacing Rhythm](#spacing-rhythm)
12. [Layout & Section Patterns](#layout--section-patterns)
13. [Component Patterns](#component-patterns)
14. [Image & Media Conventions](#image--media-conventions)
15. [Font Loading Strategy](#font-loading-strategy)
16. [Page Content Specifications](#page-content-specifications)
17. [V1 Scope — What Is Out of Scope](#v1-scope--what-is-out-of-scope)
18. [Performance Budget](#performance-budget)
19. [main.js Structure](#mainjs--structure--responsibilities)
20. [SSG Readiness — Slot Conventions](#ssg-readiness--slot-conventions)
21. [Page HTML Boilerplate](#page-html-boilerplate)
22. [GitHub Pages Constraints](#github-pages-constraints)
23. [Accessibility Baseline](#accessibility-baseline)
24. [What AI Assistants Must NOT Do](#what-ai-assistants-must-not-do)
25. [Placeholder Convention](#placeholder-convention)
26. [Quick Reference](#quick-reference)
27. [Versioning](#versioning)

---

## WHAT

A two-person professional portfolio hub on GitHub Pages.

- **Root:** `inkinsighthub.com` — landing page with two tiles, one per person
- **Subsite 1:** `inkinsighthub.com/nehababunag` — Neha Babunag, Service Delivery Leadership
- **Subsite 2:** `inkinsighthub.com/arunabhnag` — Arunabh Nag, Technical Writing Leadership

Each subsite is fully self-contained and shareable. A direct-link visitor must experience it as *that person's* site, not a section of a hub.

---

## WHY

Two professionals need a cohesive shared platform that:
1. Presents work credibly to employers and clients
2. Allows direct URL sharing without the other person being distracting
3. Maintains a unified design system for consistency
4. Is statically hosted (GitHub Pages — vanilla HTML/CSS/JS only)
5. Is architected to support a future custom SSG without refactoring

---

## HOW — File & Folder Structure

```text
/
├── index.html                  ← Landing page (two-tile selector)
├── 404.html
├── assets/
│   ├── css/main.css            ← Single shared stylesheet — source of truth
│   ├── js/main.js              ← Shared JS (nav, scroll, PDF fallback)
│   └── images/
│       ├── shared/
│       ├── neha/
│       └── arunabh/
├── nehababunag/
│   ├── index.html
│   ├── portfolio.html
│   ├── resume.html
│   └── consultation.html
├── arunabhnag/
│   ├── index.html
│   ├── portfolio.html
│   ├── resume.html
│   ├── whitepapers.html
│   └── articles.html
├── website.md                  ← THIS FILE
├── state.md                    ← Build state log
└── architecture.md
```

### Rules
- **Never** create per-subsite CSS or JS files. All styles in `main.css`, all JS in `main.js`.
- All asset paths must be **root-relative** (`/assets/...` not `../assets/...`).
- No build tools, package managers, frameworks, or CDN CSS libraries.
- All filenames: lowercase, hyphenated, no spaces.
- All files: UTF-8 encoding, LF line endings.

### Commenting Standard

Every logical block in `main.css` and `main.js` must have a comment explaining what it does and any non-obvious decisions. Write comments for a developer reading the file cold — not as labels, but as useful context.

```css
/* Card grid — 1 column mobile, scales to 3 on desktop via section 16 media queries.
   Gap uses --space-lg to match the spacing rhythm defined in :root. */
.card-grid { ... }
```

```js
// Reveal — uses IntersectionObserver instead of scroll events for performance.
// Threshold 0.15 means 15% of the element must be visible before animating in.
// Once visible, the element is unobserved — animation fires once only.
function initReveal() { ... }
```

HTML comments should explain structural decisions, not label elements:
```html
<!-- Tiles fill the full viewport — no footer needed or visible on this page -->
<!-- aria-current is hardcoded per page, not JS-detected, for simplicity -->
```

### main.css Internal Section Order

Use these comment headers verbatim. Never reorder. All `@media` queries go in section 16 — never inline.

> **Note:** CSS blocks throughout this document show `@media` rules inline for readability. When writing `main.css`, move all `@media` rules to section 16 regardless of where they appear in this guide.

```css
/* ── 1. Reset         ── */
/* ── 2. Tokens        ── */   /* :root variables */
/* ── 3. Accent Scope  ── */   /* [data-accent] overrides */
/* ── 4. Typography    ── */   /* .t-* classes */
/* ── 5. Layout        ── */   /* .container, .section */
/* ── 6. Nav           ── */
/* ── 7. Hero          ── */
/* ── 8. Cards         ── */
/* ── 9. Tiles         ── */   /* landing page tiles */
/* ── 10. Buttons      ── */
/* ── 11. Footer       ── */
/* ── 12. PDF Embed    ── */
/* ── 13. Scheduling   ── */
/* ── 14. Reveal       ── */   /* scroll animation */
/* ── 15. Utilities    ── */
/* ── 16. Responsive   ── */   /* all @media queries here */
```

### Build Sequence

Follow in order. Do not skip ahead.

1. **`main.css`** — complete design system before touching any HTML.
2. **`main.js`** — stub with IIFE wrapper and empty `init*` functions (see [main.js Structure](#mainjs--structure--responsibilities)).
3. **`index.html`** — landing page, two tiles.
4. **`nehababunag/index.html`** — validates accent scoping, nav, hero pattern.
5. **Neha interior pages** — `portfolio.html`, `resume.html`, `consultation.html`.
6. **`arunabhnag/index.html`** — subsite shell proven; this should be fast.
7. **Arunabh interior pages** — `portfolio.html`, `resume.html`, `whitepapers.html`, `articles.html`.
8. **`404.html`**.
9. **Review pass** — run from project root, all must return zero results:
   ```bash
   grep -r "\.\.\/" --include="*.html" .
   grep -ri "lorem ipsum" --include="*.html" .
   grep -r "\[PLACEHOLDER" --include="*.html" .
   ```
   For the third command: verify every match has a descriptive label.

### Build Checkpoint Criteria

| Step | Pass criteria |
|------|--------------|
| 1 `main.css` | `data-accent="neha"` → teal; `data-accent="arunabh"` → amber. Typography correct sizes. |
| 2 `main.js` | No console errors. Nav toggle fires on mobile. |
| 3 `index.html` | Tiles side-by-side desktop, stacked mobile. Links correct. |
| 4 `nehababunag/index.html` | Full-viewport hero. Neha nav links only. Teal accent. `↖` hub link present. |
| 5–7 Interior pages | Correct `aria-current` per page. All `data-slot` present. No hardcoded colours. No `../` paths. |
| 8 `404.html` | Loads cleanly. Both CTAs work. Shared design system applied. |
| 9 Review pass | All three grep commands return zero results. |

---

## Design System — CSS Variables (source of truth)

**Never hardcode colour or font values in HTML or inline styles.**

```css
:root {
  /* ── Palette ── */
  --color-base:       #0f1923;
  --color-base-rgb:   15 25 35;    /* space-separated — use as rgb(var(--color-base-rgb) / alpha) */
  --color-surface:    #1c2b3a;
  --color-surface-2:  #243447;
  --color-border:     rgba(232, 237, 242, 0.08);

  /* ── Text ── */
  --color-text-primary:   #e8edf2;
  --color-text-secondary: #8a9bb0;
  --color-text-muted:     #4a5a6a;

  /* ── Accent — overridden per subsite (see below) ── */
  --color-accent:         #e8edf2;   /* fallback only — never used directly */
  --color-accent-neha:    #3a9e8f;   /* teal */
  --color-accent-arunabh: #c9a84c;   /* amber */

  /* ── Typography ── */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-mono:    'DM Mono', 'Courier New', monospace;

  /* ── Spacing ── */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  32px;
  --space-xl:  64px;
  --space-2xl: 128px;

  /* ── Layout ── */
  --max-width:     1200px;
  --content-width: 760px;

  /* ── Transitions ── */
  --transition-fast: 0.15s ease;
  --transition-base: 0.25s ease;
  --transition-slow: 0.4s ease;

  /* ── Z-index ── */
  --z-base:    0;
  --z-raised:  10;
  --z-nav:     100;
  --z-overlay: 200;
  --z-modal:   300;
  --z-toast:   400;
}
```

### Accent Color Scoping

```html
<body data-accent="neha">      <!-- teal -->
<body data-accent="arunabh">   <!-- amber -->
<body data-accent="landing">   <!-- no accent -->
```

```css
[data-accent="neha"]    { --color-accent: var(--color-accent-neha); }
[data-accent="arunabh"] { --color-accent: var(--color-accent-arunabh); }
```

All components use `var(--color-accent)`. Never use `--color-accent-neha` or `--color-accent-arunabh` inside component rules — only in landing tile styles where both colours appear simultaneously.

---

## CSS Reset Strategy

Include verbatim at the top of `main.css`. Do not use Normalize.css or any external reset.

```css
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html                   { -webkit-text-size-adjust: 100%; }
body                   { min-height: 100vh; line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select  { font: inherit; }
p, h1, h2, h3, h4, h5, h6       { overflow-wrap: break-word; }
a                                { color: inherit; text-decoration: none; }

/* Smooth scroll — motion-safe only */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}

/* List reset — UI components only. Do NOT apply to content lists. */
.nav-links,
.footer-nav { list-style: none; }
```

---

## Responsive Breakpoints

Mobile-first. Base styles for mobile, override upward. Use only these breakpoints — never arbitrary values.

```css
/* xs  — default (no query): 0–479px  */
/* sm  — min-width: 480px             */
/* md  — min-width: 768px             */
/* lg  — min-width: 1024px            */
/* xl  — min-width: 1280px            */
```

| Element | Mobile (xs) | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| Landing tiles | Stacked, 50vh each | Side by side, 100vh | Side by side, 100vh |
| Card grid | 1 col | 2 col | 3 col |
| Nav links | Hidden (toggle) | Visible inline | Visible inline |
| Nav toggle | Visible | Hidden | Hidden |
| `.t-display-xl` | 40px | 56px | 72px |
| `.t-display-lg` | 28px | 38px | 48px |
| `.t-display-italic` | 28px | 38px | 48px |
| Content padding | `--space-md` | `--space-lg` | auto (max-width) |
| PDF embed height | 400px | 560px | 720px |
| Hero height | auto (min 60vh) | 80vh | 100vh |

### Mobile Nav

```css
.site-nav .nav-links          { display: none; }
.site-nav.nav-open .nav-links { display: flex; flex-direction: column; }

@media (min-width: 768px) {
  .site-nav .nav-links { display: flex; flex-direction: row; }
  .nav-toggle          { display: none; }
}
```

JS adds/removes `.nav-open` on `.site-nav`. Never inline styles.

### Responsive Rules for Card Grid and Tiles

```css
/* Card grid — columns scale with breakpoints */
@media (min-width: 768px)  { .card-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .card-grid { grid-template-columns: repeat(3, 1fr); } }

/* Landing tiles — stacked mobile, side-by-side desktop */
.tile-container { flex-direction: column; height: auto; }
.tile           { min-height: 50vh; }

@media (min-width: 768px) {
  .tile-container { flex-direction: row; height: 100vh; }
  .tile           { min-height: unset; }
}
```

---

## Typography Scale

Use only these classes. Never create ad-hoc font-size declarations.

| Class | Font | Size | Weight | Use |
|---|---|---|---|---|
| `.t-display-xl` | Cormorant Garamond | 72px | 300 | Hero names, page titles |
| `.t-display-lg` | Cormorant Garamond | 48px | 300 | Section heroes |
| `.t-display-italic` | Cormorant Garamond | 48px | 300i | Taglines, pull quotes |
| `.t-heading` | Cormorant Garamond | 28px | 600 | Section headings |
| `.t-subheading` | DM Sans | 13px | 500 | Eyebrows, nav labels |
| `.t-body` | DM Sans | 16px | 300 | Body copy |
| `.t-caption` | DM Mono | 12px | 400 | Metadata, dates, labels |

```css
.t-display-xl     { font-family: var(--font-display); font-size: 72px; font-weight: 300; line-height: 1.05; letter-spacing: -0.02em; }
.t-display-lg     { font-family: var(--font-display); font-size: 48px; font-weight: 300; line-height: 1.1;  letter-spacing: -0.01em; }
.t-display-italic { font-family: var(--font-display); font-size: 48px; font-weight: 300; line-height: 1.1;  font-style: italic; }
.t-heading        { font-family: var(--font-display); font-size: 28px; font-weight: 600; line-height: 1.2;  }
.t-subheading     { font-family: var(--font-body);    font-size: 13px; font-weight: 500; line-height: 1.4;  letter-spacing: 0.08em; text-transform: uppercase; }
.t-body           { font-family: var(--font-body);    font-size: 16px; font-weight: 300; line-height: 1.7;  }
.t-caption        { font-family: var(--font-mono);    font-size: 12px; font-weight: 400; line-height: 1.5;  letter-spacing: 0.04em; }
```

---

## Spacing Rhythm

Never use arbitrary pixel values. If rhythm demands a value between tokens, use the next token up.

| Use | Token | Value |
|---|---|---|
| Inline elements (icon + label) | `--space-xs` | 4px |
| Label above field / eyebrow above heading | `--space-sm` | 8px |
| Heading → body / element → next element | `--space-md` | 16px |
| Between cards | `--space-lg` | 32px |
| Between sections | `--space-xl` | 64px |
| Hero → first section | `--space-2xl` | 128px |
| Page side padding — mobile | `--space-md` | 16px |
| Page side padding — tablet+ | `--space-lg` | 32px |

---

## Layout & Section Patterns

### Container

```html
<div class="container">...</div>
<div class="container container--narrow">...</div>  <!-- resume, whitepapers -->
```

```css
.container {
  width: 100%;
  max-width: var(--max-width);
  margin-inline: auto;
  padding-inline: var(--space-md);
}
@media (min-width: 768px) { .container { padding-inline: var(--space-lg); } }
.container--narrow { max-width: var(--content-width); }
```

### Standard Page Section

Use on all interior page sections. Do not deviate.

```html
<!-- Add class="section--surface" if this is an even-numbered section on a page with 3+ sections -->
<section class="section" aria-labelledby="[id]-heading">
  <div class="container">
    <div class="section-header">
      <p class="section-eyebrow t-caption" data-slot="section-eyebrow">[PLACEHOLDER: eyebrow]</p>
      <h2 class="section-heading t-heading" id="[id]-heading" data-slot="section-heading">[PLACEHOLDER: title]</h2>
      <p class="section-intro t-body" data-slot="section-intro">[PLACEHOLDER: intro]</p>
    </div>
    <div class="section-body" data-slot="section-body"><!-- content --></div>
  </div>
</section>
```

**CSS:**
```css
.section           { padding-block: var(--space-xl); }
.section--surface  { background: var(--color-surface); }
.section-header    { margin-bottom: var(--space-lg); }
.section-eyebrow   { color: var(--color-accent); margin-bottom: var(--space-sm); }
.section-intro     { max-width: var(--content-width); color: var(--color-text-secondary); margin-top: var(--space-sm); }
```

**Alternation:** Add `.section--surface` to even-numbered sections (2, 4, 6…) on pages with 3+ sections.

---

## Component Patterns

### Navigation

**Landing mode** (`data-accent="landing"`): logo "InkInsightHub", no nav links.

**Landing page nav must not include `.nav-links`, `.nav-toggle`, or any mobile nav behaviour** — the tiles are the only navigation. Omit those elements entirely from `index.html`.

```html
<!-- Landing page nav — logo only -->
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="/" class="nav-logo">InkInsightHub</a>
  </div>
</nav>
```

**Subsite mode**: logo = person's name, links = that person's pages only, subtle `↖` home link. On subsite `index.html` (the hero page), no nav link receives `aria-current="page"` — the hero page has no named nav entry.

```html
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="[root]" class="nav-logo">[Name or InkInsightHub]</a>
    <ul class="nav-links">
      <li><a href="portfolio.html" class="nav-link" aria-current="page">Portfolio</a></li>
      <li><a href="resume.html" class="nav-link">Resume</a></li>
      <!-- ONE aria-current="page" per page — hardcoded, not JS-detected -->
      <li><a href="/" class="nav-home" aria-label="Back to hub">↖</a></li>
    </ul>
    <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>
</nav>
```

```css
.nav-link[aria-current="page"] { color: var(--color-accent); }
```

**Base nav CSS:**
```css
.site-nav {
  position: sticky;
  top: 0;
  z-index: var(--z-nav);
  background: var(--color-base);
  transition: background var(--transition-base), box-shadow var(--transition-base);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin-inline: auto;
  padding: var(--space-md) var(--space-lg);
  gap: var(--space-lg);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  white-space: nowrap;
}
.nav-link, .nav-home {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color var(--transition-fast);
}
```

### Hero Section

Required: full-bleed background, name, role title, tagline, one CTA. Avatar optional.

```html
<section class="hero" data-slot="hero">
  <div class="hero-bg" aria-hidden="true">
    <picture>
      <source srcset="/assets/images/[person]/hero-bg.webp" type="image/webp">
      <img src="/assets/images/[person]/hero-bg.jpg" alt="" loading="eager" decoding="async" width="1920" height="1080">
    </picture>
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <div class="hero-avatar">  <!-- optional -->
      <picture>
        <source srcset="/assets/images/[person]/profile.webp" type="image/webp">
        <img src="/assets/images/[person]/profile.jpg" alt="[Name] profile photo" width="400" height="400">
      </picture>
    </div>
    <p class="hero-eyebrow t-subheading" data-slot="hero-eyebrow">[PLACEHOLDER: role title]</p>
    <h1 class="hero-name t-display-xl" data-slot="hero-name">[PLACEHOLDER: full name]</h1>
    <p class="hero-tagline t-display-italic" data-slot="hero-tagline">[PLACEHOLDER: tagline]</p>
    <a href="portfolio.html" class="btn btn-primary hero-cta" data-slot="hero-cta">View Portfolio →</a>
  </div>
</section>
```

```css
.hero         { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; }
.hero-bg      { position: absolute; inset: 0; z-index: var(--z-base); }
.hero-bg img  { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(rgb(var(--color-base-rgb) / 0.3), rgb(var(--color-base-rgb) / 0.85)); }
.hero-content { position: relative; z-index: var(--z-raised); padding: var(--space-xl) var(--space-lg) var(--space-2xl); display: flex; flex-direction: column; gap: var(--space-sm); max-width: var(--content-width); width: 100%; }
.hero-avatar  { width: 96px; height: 96px; border-radius: 50%; overflow: hidden; border: 2px solid var(--color-accent); margin-bottom: var(--space-md); flex-shrink: 0; }
.hero-avatar img { width: 100%; height: 100%; object-fit: cover; }
.hero-cta     { margin-top: var(--space-md); align-self: flex-start; }

@media (min-width: 768px) {
  .hero-avatar  { width: 120px; height: 120px; }
  .hero-content { padding-inline: var(--space-xl); }
}
```
Hero is the only full-bleed section. On mobile, content centres; on desktop, it sits bottom-left.

### Cards

**Base:**
```html
<article class="card">
  <div class="card-accent-bar"></div>
  <div class="card-body">
    <p class="card-eyebrow t-caption">[Category · Year]</p>
    <h3 class="card-title t-heading">[Title]</h3>
    <p class="card-desc t-body">[Description]</p>
    <a href="#" class="card-link">View →</a>
  </div>
</article>
```

**With thumbnail** (portfolio, whitepapers):
```html
<article class="card card--has-image">
  <div class="card-thumbnail">
    <picture>
      <source srcset="/assets/images/[person]/[item]-thumb.webp" type="image/webp">
      <img src="/assets/images/[person]/[item]-thumb.jpg" alt="[Alt]" width="600" height="400" loading="lazy" decoding="async">
    </picture>
  </div>
  <div class="card-accent-bar"></div>
  <div class="card-body"><!-- same as base --></div>
</article>
```

**Placeholder thumbnail** (when image unavailable):
```html
<div class="card-thumbnail card-thumbnail--placeholder" style="aspect-ratio:3/2" data-slot="card-thumbnail" aria-hidden="true"></div>
```
```css
.card-thumbnail--placeholder { background: var(--color-surface-2); }
```
Never use external placeholder image services (picsum.photos, placehold.it, etc.).

**Card hover CSS — transition on base rule, not :hover:**
```css
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}
.card {
  background: var(--color-surface);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-base), background var(--transition-base);
}
.card:hover { background: var(--color-surface-2); transform: translateY(-2px); }
.card-accent-bar {
  height: 3px;
  background: var(--color-accent);
  flex-shrink: 0;
}
.card-thumbnail img { width: 100%; aspect-ratio: 3/2; object-fit: cover; display: block; }
.card-body { padding: var(--space-md); display: flex; flex-direction: column; gap: var(--space-sm); flex: 1; }
.card-eyebrow { color: var(--color-text-muted); }
.card-title   { color: var(--color-text-primary); }
.card-desc    { color: var(--color-text-secondary); flex: 1; }
.card-link    { color: var(--color-accent); font-family: var(--font-body); font-size: 13px; font-weight: 500; margin-top: auto; }
.card-thumbnail--placeholder { background: var(--color-surface-2); }
```

### Featured Work Strip

On every subsite `index.html`, below the bio section. Always 2–3 cards, always `.section--surface`.

```html
<section class="section section--surface featured-work" aria-labelledby="featured-heading">
  <div class="container">
    <div class="section-header">
      <p class="section-eyebrow t-caption">Selected Work</p>
      <h2 class="section-heading t-heading" id="featured-heading" data-slot="featured-heading">Featured Projects</h2>
    </div>
    <div class="featured-strip card-grid" data-slot="featured-strip">
      <!-- 2–3 .card items -->
    </div>
    <a href="portfolio.html" class="btn btn-outline featured-cta">View All Work →</a>
  </div>
</section>
```

### Landing Tiles

```html
<main id="main-content">
  <div class="tile-container">
    <a href="/nehababunag/" class="tile" data-person="neha">
      <div class="tile-rule"></div>
      <h2 class="tile-name t-display-lg">Neha Babunag</h2>
      <p class="tile-role t-subheading">Service Delivery Leadership</p>
    </a>
    <a href="/arunabhnag/" class="tile" data-person="arunabh">
      <div class="tile-rule"></div>
      <h2 class="tile-name t-display-lg">Arunabh Nag</h2>
      <p class="tile-role t-subheading">Technical Writing Leadership</p>
    </a>
  </div>
</main>
```

Tiles use `--color-accent-neha` / `--color-accent-arunabh` directly — both colours appear simultaneously so scoped `--color-accent` cannot be used.

```css
.tile-container {
  display: flex;
  height: 100vh;
}
.tile {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-xl) var(--space-lg);
  background: var(--color-base);
  transition: background var(--transition-base);
  text-decoration: none;
}
.tile[data-person="neha"]    .tile-rule { background: var(--color-accent-neha); }
.tile[data-person="arunabh"] .tile-rule { background: var(--color-accent-arunabh); }
.tile-rule  { width: 40px; height: 3px; margin-bottom: var(--space-md); }
.tile-name  { color: var(--color-text-primary); margin-bottom: var(--space-sm); }
.tile-role  { color: var(--color-text-secondary); letter-spacing: 0.08em; text-transform: uppercase; }
```

### Buttons

```html
<a href="#" class="btn btn-primary">Primary</a>
<a href="#" class="btn btn-outline">Secondary</a>
<a href="#" class="btn btn-ghost">Tertiary</a>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 2px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background var(--transition-fast), color var(--transition-fast),
              border-color var(--transition-fast), opacity var(--transition-fast);
  text-decoration: none;
  white-space: nowrap;
}
.btn-primary { background: var(--color-accent); color: var(--color-base); border-color: var(--color-accent); }
.btn-outline { background: transparent; color: var(--color-accent); border-color: var(--color-accent); }
.btn-ghost   { background: transparent; color: var(--color-text-secondary); border-color: var(--color-border); }
```

### Hover & Focus States

Define all of the following in `main.css`. Never rely on browser defaults.

```css
/* Nav */
.nav-link:hover, .nav-link:focus-visible { color: var(--color-accent); }
.nav-home:hover, .nav-home:focus-visible { color: var(--color-text-secondary); }

/* Cards — transition on base rule */
.card       { transition: transform var(--transition-base), background var(--transition-base); }
.card:hover { background: var(--color-surface-2); transform: translateY(-2px); }
.card-link:hover, .card-link:focus-visible { color: var(--color-accent); }

/* Tiles */
.tile:hover                              { background: var(--color-surface); }
.tile[data-person="neha"]:hover    .tile-name { color: var(--color-accent-neha); }
.tile[data-person="arunabh"]:hover .tile-name { color: var(--color-accent-arunabh); }

/* Buttons */
.btn-primary:hover { opacity: 0.88; }
.btn-outline:hover { background: var(--color-accent); color: var(--color-base); }
.btn-ghost:hover   { border-color: var(--color-text-secondary); color: var(--color-text-primary); }

/* Focus ring — universal */
:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; border-radius: 2px; }
```

Use `:focus-visible` not `:focus`.

### Scroll & Motion Behaviour

Restrained, editorial. Motion is deliberate and subtle.

**Sticky nav:**
```css
.site-nav { position: sticky; top: 0; z-index: var(--z-nav); transition: background var(--transition-base), box-shadow var(--transition-base); }
.site-nav.nav-scrolled { background: rgb(var(--color-base-rgb) / 0.95); box-shadow: 0 1px 0 var(--color-border); }
@supports (backdrop-filter: blur(8px)) {
  .site-nav.nav-scrolled { background: rgb(var(--color-base-rgb) / 0.85); backdrop-filter: blur(8px); }
}
```

**Scroll reveal:**
```css
.reveal            { opacity: 0; transform: translateY(20px); transition: opacity var(--transition-slow), transform var(--transition-slow); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
```
Apply `.reveal` to: `.card`, `.section-heading`, `.hero-content` children (staggered), `.pdf-embed-wrapper`.

**Hero stagger delays:**
```css
.hero-eyebrow { transition-delay: 0ms; }
.hero-name    { transition-delay: 100ms; }
.hero-tagline { transition-delay: 200ms; }
.hero-cta     { transition-delay: 350ms; }
```
Apply `.reveal` to each of these elements so the delays take effect.

**Reduced motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### Footer

Identical across all pages. No per-page or per-person variants.

```html
<footer class="site-footer">
  <div class="footer-inner">
    <p class="footer-copy t-caption" data-slot="footer-copy">
      © [PLACEHOLDER: shared — copyright year] InkInsightHub. Built with care, hosted on GitHub Pages.
    </p>
    <nav class="footer-nav" aria-label="Footer navigation">
      <a href="/nehababunag/" class="footer-link t-caption">Neha Babunag</a>
      <a href="/arunabhnag/" class="footer-link t-caption">Arunabh Nag</a>
    </nav>
  </div>
</footer>
```

```css
.site-footer  { background: var(--color-surface); border-top: 1px solid var(--color-border); }
.footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-md); max-width: var(--max-width); margin-inline: auto; padding: var(--space-lg); }
.footer-copy  { color: var(--color-text-muted); }
.footer-link  { color: var(--color-text-secondary); transition: color var(--transition-fast); }
.footer-link:hover { color: var(--color-accent); }
.footer-nav   { display: flex; gap: var(--space-md); }

@media (max-width: 479px) {
  .footer-inner { flex-direction: column; text-align: center; }
  .footer-nav   { justify-content: center; }
}
```

### Embedded PDF

```html
<div class="pdf-embed-wrapper">
  <iframe class="pdf-embed" src="[path.pdf]" title="[Person] Resume PDF" loading="lazy" aria-label="[Person] resume PDF viewer"></iframe>
  <div class="pdf-fallback" aria-live="polite">
    <p class="t-body">PDF preview unavailable in this browser.</p>
    <a href="[path.pdf]" class="btn btn-outline pdf-download" download>Download PDF Resume</a>
  </div>
</div>
<a href="[path.pdf]" class="btn btn-ghost" download>Download PDF</a>
```

```css
.pdf-fallback             { display: none; }
.pdf-failed .pdf-embed    { display: none; }
.pdf-failed .pdf-fallback { display: block; }
.pdf-embed-wrapper { width: 100%; position: relative; }
.pdf-embed         { width: 100%; height: 400px; border: none; display: block; }

@media (min-width: 768px)  { .pdf-embed { height: 560px; } }
@media (min-width: 1024px) { .pdf-embed { height: 720px; } }
```

JS error detection in `initPdfFallback()`. Always include the standalone download button below the wrapper.

### Scheduling Embed (Consultation page)

Feature-flagged off by default. To activate: set `ENABLE_SCHEDULING_EMBED = true` and provide the URL — no other changes needed.

**The feature-flag logic must remain inline on `consultation.html`. Do not move it into `main.js`.** It is page-specific and intentionally isolated so it can be toggled without touching shared files.

```html
<script>
  const ENABLE_SCHEDULING_EMBED = false;
  const SCHEDULING_EMBED_URL    = '[PLACEHOLDER: scheduling embed URL]';
</script>

<!-- Embed (shown when flag = true) -->
<div class="scheduling-embed-wrapper" id="scheduling-embed" hidden>
  <iframe class="scheduling-embed" src="" title="Book a consultation with Neha Babunag" loading="lazy" aria-label="Scheduling calendar"></iframe>
</div>

<!-- Mailto (shown when flag = false) -->
<div class="consultation-cta" id="consultation-mailto">
  <p class="t-body">[PLACEHOLDER: Neha — consultation CTA text]</p>
  <a href="mailto:[PLACEHOLDER: Neha email]" class="btn btn-primary">Get in Touch →</a>
</div>

<script>
  if (typeof ENABLE_SCHEDULING_EMBED !== 'undefined' && ENABLE_SCHEDULING_EMBED) {
    document.getElementById('consultation-mailto').hidden = true;
    const embedEl = document.getElementById('scheduling-embed');
    embedEl.hidden = false;
    embedEl.querySelector('iframe').src = SCHEDULING_EMBED_URL;
  }
</script>
```

```css
.scheduling-embed-wrapper { position: relative; width: 100%; aspect-ratio: 4/3; border-radius: 4px; overflow: hidden; background: var(--color-surface); }
@media (min-width: 768px) { .scheduling-embed-wrapper { aspect-ratio: 16/9; } }
.scheduling-embed { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
```

---

## Image & Media Conventions

| Type | Ratio | Size | Notes |
|---|---|---|---|
| Hero background | 16:9 | 1920×1080 | `loading="eager"` |
| Profile photo | 1:1 | 400×400 | Circular via `border-radius` |
| Card thumbnail | 3:2 | 600×400 | Optional |
| Whitepaper cover | √2 | 420×594 | Mimics document proportions |
| OG image | 1.91:1 | 1200×630 | Per subsite — absolute URL in meta tags |

WebP primary, JPEG fallback via `<picture>`. Filenames lowercase, hyphenated. Paths always root-relative.

```html
<picture>
  <source srcset="/assets/images/[person]/[name].webp" type="image/webp">
  <img src="/assets/images/[person]/[name].jpg" alt="[Description]" width="W" height="H" loading="lazy" decoding="async">
</picture>
```

Always include `width`/`height` to prevent CLS. `loading="eager"` for above-fold hero only.

---

## Font Loading Strategy

The boilerplate `<head>` already has the correct `<link>` tags with `display=swap`. **Do not change them. Do not add font weights not already listed.**

Fallback stacks: Cormorant Garamond → Georgia → serif · DM Sans → system-ui → sans-serif · DM Mono → Courier New → monospace.

---

## Page Content Specifications

Minimum viable content per page. "Done" = all required elements present, even as labelled placeholders.

### `index.html` — Landing
- Two full-viewport tiles (50/50): name, role title, accent rule, hover state
- Site wordmark top-left in nav. No nav links — tiles are the only navigation.

```html
<body data-accent="landing">
  <nav class="site-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="/" class="nav-logo">InkInsightHub</a>
    </div>
  </nav>
  <main id="main-content">
    <div class="tile-container">
      <!-- Neha tile -->
      <!-- Arunabh tile -->
    </div>
  </main>
  <!-- no footer on landing page -->
</body>
```

No `<footer>` on the landing page — the tiles fill the full viewport and a footer would never be seen.

### `[person]/index.html` — Subsite hero
- Full-viewport hero (name, role, tagline, CTA, optional avatar)
- Bio section below hero — use the standard `.section` pattern with `.container--narrow`. One `<p class="t-body">` block, 2–3 sentences. `data-slot="bio-content"` on the paragraph.
- Featured Work Strip (2–3 cards) below bio

### `[person]/portfolio.html`
- Section heading + intro paragraph
- Card grid, minimum 2 placeholder cards. Detail pages out of scope for v1 — use `href="#"`.

### `[person]/resume.html`
- Page heading + one-line intro (placeholder)
- Embedded PDF + fallback + standalone download button (see Embedded PDF pattern)
- No HTML resume content for v1 — the PDF embed is the resume.

### `nehababunag/consultation.html`
- Brief intro (placeholder)
- 3 placeholder service cards using the standard `.card` pattern — `card-eyebrow` = service name, `card-title` = offering title, `card-desc` = scope/description, no `card-link`
- Scheduling embed section (feature-flagged off — see Component Patterns)

### `arunabhnag/whitepapers.html`
- Section intro
- Card grid with `.card--has-image`, minimum 2 placeholder entries

### `arunabhnag/articles.html`
- Section intro noting curation from Medium
- Text-only card grid, minimum 3 entries: title, date, excerpt, `"Read on Medium →"` (`target="_blank" rel="noopener"`)

### `404.html`
- "Page not found" + one-sentence explanation
- CTAs: Neha Babunag → and Arunabh Nag →
- Full shared nav and footer, `data-accent="landing"`

---

## V1 Scope — What Is Out of Scope

Do not build these without explicit human confirmation. Flag in `state.md` and wait.

- Contact forms · dark/light toggle · site search · comments · blog/feed · authentication · CMS integration · analytics beyond a single static embed · animations beyond the Scroll & Motion spec · pages not in the file structure · per-page CSS/JS files · any unapproved third-party widget

The only approved third-party embed is the scheduling tool on `consultation.html`, which is off by default.

---

## Performance Budget

Target Lighthouse ≥ 90 on all four metrics for every page.

| Metric | Target | Key rule |
|---|---|---|
| Page weight | ≤ 500KB | WebP, lazy load below fold |
| LCP | ≤ 2.5s | Hero: `loading="eager"`, correctly sized |
| CLS | ≤ 0.1 | `width`/`height` on every `<img>` |
| INP | ≤ 200ms | `main.js` is small and deferred — automatic |

When images are unavailable, use `<div style="aspect-ratio:W/H" class="card-thumbnail--placeholder" data-slot="...">` — never hotlink external services.

---

## main.js — Structure & Responsibilities

Single vanilla JS file, IIFE wrapper, named `init*` functions only. No frameworks, no classes, no module bundlers.

**Step 2 stub** — create this exactly:
```js
(function () {
  'use strict';
  function initNavScroll()  { /* TODO */ }
  function initNavToggle()  { /* TODO */ }
  function initReveal()     { /* TODO */ }
  function initPdfFallback(){ /* TODO */ }
  document.addEventListener('DOMContentLoaded', () => {
    initNavScroll(); initNavToggle(); initReveal(); initPdfFallback();
  });
}());
```

**Full implementation:**
```js
(function () {
  'use strict';

  function initNavScroll() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => nav.classList.toggle('nav-scrolled', window.scrollY > 0), { passive: true });
  }

  function initNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const nav    = document.querySelector('.site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    targets.forEach(el => observer.observe(el));
  }

  function initPdfFallback() {
    document.querySelectorAll('.pdf-embed').forEach(iframe => {
      iframe.addEventListener('error', () => iframe.closest('.pdf-embed-wrapper')?.classList.add('pdf-failed'));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavScroll(); initNavToggle(); initReveal(); initPdfFallback();
  });
}());
```

**Rules:** New behaviour = new `init*` function. Guard missing elements with early returns. `{ passive: true }` on scroll. Toggle CSS classes — never manipulate `style`. No external libraries.

---

## SSG Readiness — Slot Conventions

Every templatable region uses `data-slot`. A future SSG replaces slot contents. Never use HTML comments as slot markers.

```html
<h1 class="t-display-xl" data-slot="page-title">[PLACEHOLDER: title]</h1>
<div class="content-block" data-slot="page-content"><p class="t-body">[PLACEHOLDER: content]</p></div>
<div class="card-grid" data-slot="card-collection"><!-- cards --></div>
```

Repeating collections must be wrapped in a single `data-slot` container so the SSG can replace the whole set.

---

## Page HTML Boilerplate

Use this exact `<head>` on every page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[120–155 char description]">
  <title>[Page Title] — [Person or InkInsightHub]</title>

  <link rel="canonical" href="https://inkinsighthub.com/[path]">

  <meta property="og:type"        content="website">
  <meta property="og:url"         content="https://inkinsighthub.com/[path]">
  <meta property="og:title"       content="[Page Title] — [Person]">
  <meta property="og:description" content="[Same as meta description]">
  <meta property="og:image"       content="https://inkinsighthub.com/assets/images/[person]/og-image.jpg">
  <meta name="twitter:card"       content="summary_large_image">
  <meta name="twitter:image"      content="https://inkinsighthub.com/assets/images/[person]/og-image.jpg">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@400&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body data-accent="[landing|neha|arunabh]">

  <nav class="site-nav" role="navigation" aria-label="Main navigation"><!-- nav --></nav>
  <main id="main-content"><!-- content --></main>
  <footer class="site-footer"><!-- footer --></footer>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

**OG images:** `1200×630px` at `/assets/images/[person]/og-image.jpg`. Absolute URLs required — relative paths don't work for social previews. Content: dark background, person's name in display type, role title, accent rule at bottom. Not a raw photo or blank rectangle.

---

## GitHub Pages Constraints

- No server-side code (PHP, Node, Python, etc.)
- No Jekyll front matter unless explicitly adopted
- All paths root-relative (`/assets/...` not `../assets/...`)
- No `.htaccess` — GitHub Pages ignores it
- `404.html` at root: full boilerplate, `data-accent="landing"`, clear message, CTAs to both subsites
- Case-sensitive — lowercase filenames, hyphens only

---

## Accessibility Baseline

- Content images: descriptive `alt`. Decorative images: `alt=""`.
- All interactive elements: keyboard-navigable.
- Colour contrast: WCAG AA minimum — design system palette pre-validated.
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`.
- `<main id="main-content">` for skip-link support.

---

## What AI Assistants Must NOT Do

- Introduce CSS frameworks, utility libraries, or component libraries
- Hardcode colour hex values outside `:root` in `main.css`
- Introduce new CSS variables without explicit human instruction — propose additions and wait for confirmation
- Create per-subsite stylesheets or scripts
- Use relative paths (`../`) — always root-relative
- Modify `main.css` variable definitions without explicit instruction
- Add JS frameworks (React, Vue, Alpine, etc.)
- Remove `data-slot` attributes
- Use `<table>` for layout
- Inline styles (except JS-driven dynamic values)
- Guess at content — use `[PLACEHOLDER: description]`
- Modify `website.md`, `architecture.md`, or `state.md` (outside designated `state.md` sections)

---

## Placeholder Convention

Format: `[PLACEHOLDER: person — description]`. Never lorem ipsum. Always descriptive.

The format is case-sensitive and must begin with exactly `[PLACEHOLDER:` — no variations (`[placeholder:`, `[Placeholder:`, `PLACEHOLDER -`, etc.). This exact string is what the review-pass grep command searches for.

```text
[PLACEHOLDER: Neha — hero tagline]
[PLACEHOLDER: Arunabh — portfolio item 1 title]
[PLACEHOLDER: shared — footer copyright year]
```

---

## Quick Reference

> Summary only — authoritative details are in the sections above.

### Key CSS Variables

| Token | Value | Use |
|---|---|---|
| `--color-base` | `#0f1923` | Background |
| `--color-surface` | `#1c2b3a` | Cards, panels |
| `--color-surface-2` | `#243447` | Elevated |
| `--color-accent` | scoped | All accent elements |
| `--color-accent-neha` | `#3a9e8f` | Teal — tiles only |
| `--color-accent-arunabh` | `#c9a84c` | Amber — tiles only |
| `--color-text-primary` | `#e8edf2` | Body text |
| `--color-text-secondary` | `#8a9bb0` | Supporting |
| `--color-text-muted` | `#4a5a6a` | Labels |
| `--space-md/lg/xl` | `16/32/64px` | Core rhythm |
| `--z-nav` | `100` | Nav layer |

### Typography Classes
`.t-display-xl` · `.t-display-lg` · `.t-display-italic` · `.t-heading` · `.t-subheading` · `.t-body` · `.t-caption`

### Component Classes

**Nav:** `.site-nav` · `.nav-inner` · `.nav-logo` · `.nav-links` · `.nav-link` · `.nav-home` · `.nav-toggle` · `.nav-open` · `.nav-scrolled`

**Hero:** `.hero` · `.hero-bg` · `.hero-overlay` · `.hero-content` · `.hero-avatar` · `.hero-eyebrow` · `.hero-name` · `.hero-tagline` · `.hero-cta`

**Sections:** `.section` · `.section--surface` · `.section-header` · `.section-eyebrow` · `.section-heading` · `.section-intro` · `.section-body` · `.container` · `.container--narrow`

**Cards:** `.card` · `.card--has-image` · `.card-accent-bar` · `.card-thumbnail` · `.card-thumbnail--placeholder` · `.card-body` · `.card-eyebrow` · `.card-title` · `.card-desc` · `.card-link` · `.card-grid` · `.featured-strip`

**Tiles:** `.tile-container` · `.tile` · `.tile-rule` · `.tile-name` · `.tile-role`

**Buttons:** `.btn` · `.btn-primary` · `.btn-outline` · `.btn-ghost`

**Footer:** `.site-footer` · `.footer-inner` · `.footer-copy` · `.footer-nav` · `.footer-link`

**PDF:** `.pdf-embed-wrapper` · `.pdf-embed` · `.pdf-fallback` · `.pdf-failed` · `.pdf-download`

**Scheduling:** `.scheduling-embed-wrapper` · `.scheduling-embed`

**Reveal:** `.reveal` · `.is-visible`

### data-accent Values
`landing` · `neha` · `arunabh`

### Root-Relative Paths
`/assets/css/main.css` · `/assets/js/main.js` · `/assets/images/neha/` · `/assets/images/arunabh/` · `/assets/images/shared/`

---

## Versioning

| Version | Date | Changes |
|---|---|---|
| 1.0 | 2026-03-01 | Initial guide |
| 1.1 | 2026-03-01 | Responsive breakpoints; footer; nav `aria-current`; image conventions; PDF fallback; font loading |
| 1.2 | 2026-03-01 | Ambiguity protocol; build sequence; hero pattern; card-with-image; hover/focus; scroll/motion; `main.js`; OG meta; 404 spec |
| 1.3 | 2026-03-01 | TOC; protected files; `state.md` reference; z-index scale; CSS reset; spacing rhythm; layout/section patterns; page content specs; performance budget; build checkpoints; OG image spec; canonical link |
| 1.4 | 2026-03-01 | CSS fixes: scoped `list-style:none`; `scroll-behavior` behind motion query; `rgba` → `rgb(var/alpha)` syntax |
| 1.5 | 2026-03-01 | Session start sequence; `main.css` section map; `main.js` stub; grep commands; featured work strip; empty state pattern; scheduling embed with feature flag; v1 out-of-scope list; quick reference; code block language hints |
| 1.6 | 2026-03-01 | Card transition moved to base rule; `@supports` backdrop-filter fallback; `var` → `const` in feature flag; `aria-hidden` on nav toggle spans; grep pipe fix |
| 1.7 | 2026-03-01 | Compression pass: ~230 lines removed. Prose trimmed; spacing rhythm condensed; checkpoint table tightened; page specs streamlined; `initReveal` threshold corrected; tile hover CSS fixed; UTF-8/LF rule added |
| 1.8 | 2026-03-01 | External review patches: no new CSS variables rule; landing nav exclusion; placeholder case-sensitivity rule; scheduling embed inline-only rule |
| 1.9 | 2026-03-01 | Stress test 1: landing nav HTML; base nav CSS; card/grid/button/tile CSS defined; bio section pattern; section notation fixed; `aria-current` hero rule |
| 2.0 | 2026-03-01 | Stress test 2: typography CSS; hero layout CSS; stagger delay CSS; section CSS block; footer CSS block; PDF height CSS; tile-container in HTML; index.html skeleton; `@media` placement note |
| 2.1 | 2026-03-01 | Resume page simplified to PDF-embed-only for v1; consultation service cards clarified as standard `.card` pattern; `.tile-container` added to Quick Reference; versioning table cleaned up |
| 2.2 | 2026-03-01 | Commenting standard added: every logical block in `main.css`, `main.js`, and HTML must have a useful comment written for a developer reading cold |

If the project adopts a custom SSG, a new section will be appended. Existing conventions annotated `[v1]` or `[v2+]` where they diverge.
