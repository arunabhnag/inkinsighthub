# architecture.md — inkinsighthub.com

> **This file is read-only for AI agents.** Do not modify, append, or reformat it.
> Refer to `website.md` for build conventions and `state.md` for current build status.

| | |
|---|---|
| **Version** | 1.2 |
| **Last updated** | 2026-03-01 |
| **Status** | Current — reflects v1 build |

---

## What This Is

InkInsightHub is a shared professional portfolio platform for two people — Neha Babunag (Service Delivery Leadership) and Arunabh Nag (Technical Writing Leadership). It is a static website hosted on GitHub Pages, built with vanilla HTML, CSS, and JavaScript.

The site has two distinct jobs that must coexist without compromising each other:

1. **A shared hub** — a single landing page that introduces both people and routes visitors to the right subsite
2. **Two independent portfolios** — each person's subsite is fully self-contained and shareable as a direct URL. A visitor arriving at `inkinsighthub.com/nehababunag` should experience it as Neha's personal professional site, not as a section of a larger hub

These two jobs drive most of the architectural decisions in this document.

---

## How It Is Structured

InkInsightHub has three distinct layers: a shared hub, two independent subsites, and the pages within each subsite. Each layer has a clearly bounded responsibility.

The site is organised into three tiers:

**Tier 1 — The Hub (`inkinsighthub.com`)**
A single full-viewport landing page. Two tiles, one per person, each occupying half the screen. No navigation links, no footer, no content beyond names and role titles. Its only job is to route a visitor to the right subsite. The hub has no content of its own.

**Tier 2 — The Subsites (`/nehababunag/`, `/arunabhnag/`)**
Each subsite is a small independent site within the repository. It has its own navigation, its own hero page, its own set of interior pages, and its own accent colour. The subsites share a stylesheet and a JavaScript file, but everything visible to a visitor is scoped to that person. A visitor who bookmarks `inkinsighthub.com/nehababunag/portfolio.html` and returns to it weeks later will never encounter Arunabh's content.

**Tier 3 — The Pages**
Individual pages within each subsite. Each page has a consistent structure: navigation, a main content area built from the shared component library, and a footer with links to both subsite index pages. Pages within a subsite link only to other pages in the same subsite — never across subsites.

```
[DIAGRAM PLACEHOLDER: Container Diagram]
Suggested diagram: C2 container diagram showing the Hub, Neha's Subsite, and
Arunabh's Subsite as three containers within the GitHub Pages deployment, with
shared assets (main.css, main.js) indicated as a shared dependency.
Tool suggestion: draw.io, Mermaid, or Lucidchart.
```

---

## System Context

InkInsightHub sits at the intersection of three groups of people:

**Neha and Arunabh** — the site owners. They share a platform but maintain separate professional identities. Neither person's presence should dilute the other's when a visitor arrives via a direct subsite URL.

**Visitors** — primarily professional contacts, recruiters, clients, and collaborators who arrive either via the shared hub or via a direct subsite link shared on LinkedIn, a CV, or an email signature. They have no prior knowledge of the platform structure.

**GitHub Pages** — the hosting environment. It imposes hard constraints: no server-side processing, no dynamic routing, no build pipeline, case-sensitive file paths. Everything the site does must be achievable with static files. Files created on Windows with mixed-case names will resolve locally but break on deployment — all filenames must be lowercase.

**Browser support baseline:** Evergreen browsers only (Chrome, Firefox, Safari, Edge — current and one version back). The design system uses CSS custom properties, `IntersectionObserver`, `backdrop-filter`, and `aspect-ratio`. No IE11 support is required or provided.

```
[DIAGRAM PLACEHOLDER: System Context]
Suggested diagram: C1 context diagram showing Neha, Arunabh, and Visitor actors
interacting with the InkInsightHub system, hosted on GitHub Pages.
Tool suggestion: draw.io, Mermaid, or Lucidchart.
```

---

## Why It's Built This Way

### Why vanilla HTML/CSS/JS — no framework

Many modern websites are built with frameworks like React or Next.js, which add significant tooling complexity — build pipelines, package managers, and dependency chains that need ongoing maintenance. This site deliberately avoids them.

The site is static content with no dynamic behaviour beyond scroll effects, a mobile nav toggle, and a PDF embed fallback. A framework would introduce that complexity for no functional gain. Vanilla keeps the stack simple, auditable, and permanent. There is nothing to upgrade, nothing to break, nothing to deprecate.

### Why `main.js` uses an IIFE

`main.js` is wrapped in an IIFE (`(function () { 'use strict'; }())`) to avoid polluting the global scope. This is intentional — do not refactor it to ES modules without explicit instruction.

### Why a single shared stylesheet

Both subsites use one `main.css`. This enforces visual consistency — a card on Neha's portfolio looks identical to a card on Arunabh's, because it is literally the same CSS rule. It also means a future SSG migration touches one file rather than two, and a style bug is fixed once rather than twice.

Per-person visual identity is achieved entirely through a CSS variable override. Each subsite's `<body>` carries a `data-accent` attribute (`neha` or `arunabh`), which triggers a single CSS rule that reassigns `--color-accent` to that person's colour. Every component in the design system uses `--color-accent` — none of them need to know which person's subsite they are on.

### Why root-relative paths

All asset paths begin with `/assets/...`. This is required because subsite HTML files sit one directory deep (`/nehababunag/portfolio.html`). A relative path like `../assets/css/main.css` would resolve correctly from a subsite page but break if GitHub Pages ever serves the file from a different depth. Root-relative paths resolve correctly from any depth, every time.

### Why `aria-current="page"` is hardcoded

The active nav link state is set with a hardcoded `aria-current="page"` attribute on each page's own nav link, rather than detected at runtime via JavaScript. This is simpler, requires no DOM inspection, works without JavaScript enabled, and makes the intent explicit in the HTML source. Each page knows which link represents it — that knowledge does not need to be computed.

### Why the scheduling embed is inline and feature-flagged

Neha's consultation page supports an optional Calendly-style scheduling embed, controlled by a `const ENABLE_SCHEDULING_EMBED` flag at the top of an inline `<script>` block on `consultation.html`. The flag is page-specific and intentionally isolated — it must not be moved into `main.js`. Moving it would mean a shared file controls page-specific behaviour, creating an invisible dependency between `consultation.html` and `main.js` that a future developer would not expect.

### Why the landing page has no footer

The landing page consists of two full-viewport tiles. A footer would sit below the fold and never be seen in normal use. Including it would add dead HTML with no functional purpose. Visitors who need to navigate between subsites can do so via the footer on any interior page.

---

## Component Overview

> This section is intended for technical readers. Non-technical stakeholders can skip to [v2 Roadmap](#v2-roadmap).

The site is built from a small, fixed set of shared components. All components are defined in `main.css` and documented in `website.md`. None are dynamic — they are HTML patterns with CSS applied.

```
[DIAGRAM PLACEHOLDER: Component Diagram]
Suggested diagram: C3 component diagram showing the shared component library and
page consumption. Distinguish universal components (Nav, Footer, Section, Card,
CardGrid, Button, Reveal) from page-exclusive ones (TileContainer → index.html
only; SchedulingEmbed → consultation.html only; PDFEmbed → resume pages only;
Hero → subsite index pages only).
Tool suggestion: draw.io or a simple table-based diagram.
```

**Navigation** sits at the top of every page. It has two modes: landing mode (logo only, no links) and subsite mode (person's name as logo, links to that subsite's pages, subtle hub link). The mode is determined by `data-accent` on `<body>` — the nav reads the same HTML in both cases; CSS and the HTML structure determine which elements are present.

**Hero** is used on every subsite index page. It is the first thing a direct-link visitor sees — a full-viewport section with a background image, the person's name, role title, tagline, and a primary CTA. It is the only full-bleed section in the design system.

**Cards** are the primary content unit for portfolio items, whitepapers, and articles. Two variants exist: a text-only base card and a card with a thumbnail image. Both share the same body structure and accent bar.

**Buttons** appear throughout the site — on hero sections, featured work strips, PDF download links, and the consultation CTA. Three variants exist: primary (filled, accent background), outline (transparent with accent border), and ghost (transparent with muted border). All three share a base `.btn` class and derive their colour from `--color-accent`.

**Sections** provide the structural wrapper for all interior page content. They alternate between the base background and a slightly elevated surface colour on pages with three or more sections, creating visual rhythm without colour variation.

**PDF Embed** handles resume delivery for v1. It includes a visible fallback and a standalone download link for browsers that cannot render the iframe.

**Reveal** is a scroll-triggered fade-up animation applied to cards, section headings, and hero content children. It uses `IntersectionObserver` — not scroll event listeners — for performance. The observer threshold is 15%, meaning an element begins animating once 15% of it is visible in the viewport. Each element is unobserved immediately after animating — the animation fires once per element, never on scroll-back.

---

## SSG Readiness

A static site generator (SSG) is a tool that builds HTML pages automatically from a content source — a spreadsheet, a database, or a CMS — so that updating the site's content does not require editing HTML files by hand. This site does not use one yet, but it is structured so that one can be added later without rebuilding the site from scratch.

Two conventions make this possible:

**`data-slot` attributes** mark every templatable region — hero names, section headings, card titles, bio content, and so on. When a future SSG is introduced, it will find these attributes and replace their contents with real data automatically. The HTML structure, class names, and visual design remain unchanged.

**`data-accent` on `<body>`** drives all per-person visual identity via a single CSS variable. A future SSG generates each page with the correct value already set — no per-person stylesheet, no conditional logic in templates.

In practical terms: when Neha or Arunabh want to update their portfolio content regularly, or when the site grows beyond a handful of pages, an SSG can be dropped in without touching the design system or rebuilding any components. The investment is already made.

---

## v2 Roadmap

These items are out of scope for v1 but planned for the next iteration.

| Item | Description |
|------|-------------|
| HTML resume content | Structured HTML resume (experience, education, skills) above the PDF embed on resume pages. v1 uses PDF-only. |
| PowerShell linter | `lint.ps1` + `.vscode/tasks.json` — mechanically enforces `website.md` rules. Runs in VSCode and via Cline. |
| Arunabh consultation page | Arunabh does not have a consultation page in v1 — intentionally deferred, not an oversight. To be scoped in v2. |
| SSG migration | Custom static site generator to replace manual placeholder replacement. `data-slot` conventions are already in place. |
| Dark/light mode toggle | Not in v1 scope. Design system tokens are structured to support it — a second token set would be the only addition required. |

---

## Maintenance

### Replacing placeholder content

All placeholder text follows the format `[PLACEHOLDER: person — description]`. Search for `[PLACEHOLDER` across all HTML files, replace each instance with real content, then run the review pass grep commands from `website.md` to confirm none remain.

### Adding a new page

Create the file in the correct subsite directory, then follow the boilerplate and nav conventions in `website.md`. Add the file to the build checklist in `state.md` and log the decision if it represents a scope change.

### Updating the design system

All design tokens live in `:root` in `main.css`. Update the token there — all components inherit the change automatically. New tokens require human approval and a corresponding update to `website.md` before being added.

---

> The following references are for developers and AI agents working on this codebase.

*For build conventions, component patterns, and CSS specifications, see `website.md`.*
*For current build status and session history, see `state.md`.*
