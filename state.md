# state.md — Build State Log for inkinsighthub.com

> **AI agents: Read this file at the start of every session, before touching any code.**
> It tells you what has been built, what decisions have been made, and exactly where to resume.
> Update designated sections at the end of every session. See rules below.

---

## Rules for AI Agents

### What you MAY do to this file
- Update "Current Phase" when you move to a new build step
- Check off completed items in the "Build Checklist"
- Add rows to "In Progress" and "Completed" as work is done — a file may only move to "Completed" after passing all checkpoint criteria in `website.md`
- Add rows to "Decisions Made" when you make a non-trivial implementation choice — decisions may not be edited once added; corrections must be appended as new rows referencing the original
- Add items to "Blocked / Needs Human Input" when you flag a `<!-- DECISION NEEDED -->` comment
- Update "Next Action" at the end of every session

### What you must NEVER do to this file
- Delete any existing rows from "Decisions Made" — this is a permanent log
- Delete any checked items from the checklist — history must be preserved
- Modify the "Rules for AI Agents" section
- Reformat or restructure this file — only append and update within designated sections

### What you must NEVER do to protected files
- `website.md` — never modify
- `architecture.md` — never modify
- `state.md` — only update designated sections per rules above

---

## Current Phase

**Phase:** Foundation Created
**Started:** 2026-03-03
**Last active session:** #1

---

## Next Action

> This is the single most important line in the file. Update it at the end of every session.

**→ Build `404.html` error page.**

---

## Build Checklist

Track every file. Check off when complete AND passing its checkpoint criteria (see `website.md` Build Sequence).

### Foundation
- [x] `assets/css/main.css` — full design system
- [x] `assets/js/main.js` — nav, scroll, PDF fallback stubs


### Root
- [x] `index.html` <main> — landing page, two tiles
- [x] `index.html` <footer>
- [ ] `404.html` — error page
### Neha Babunag (`/nehababunag/`)
- [ ] `nehababunag/index.html` — hero page
- [ ] `nehababunag/portfolio.html`
- [ ] `nehababunag/resume.html`
- [ ] `nehababunag/consultation.html`

### Arunabh Nag (`/arunabhnag/`)
- [ ] `arunabhnag/index.html` — hero page
- [ ] `arunabhnag/portfolio.html`
- [ ] `arunabhnag/resume.html`
- [ ] `arunabhnag/whitepapers.html`
- [ ] `arunabhnag/articles.html`

### Review Pass (final)
Run from project root — all grep commands must return zero results:
- [ ] `grep -r "\.\.\/" --include="*.html" .` — zero relative paths
- [ ] `grep -ri "lorem ipsum" --include="*.html" .` — zero lorem ipsum
- [ ] `grep -r "\[PLACEHOLDER" --include="*.html" .` — all matches have descriptive labels

Manual checks:
- [ ] All `data-slot` attributes present on templatable regions
- [ ] All `aria-current="page"` states correct per page (none on subsite hero pages)
- [ ] Teal accent on all Neha pages, amber on all Arunabh pages
- [ ] Landing page has no `<footer>`, no `.nav-links`, no `.nav-toggle`
- [ ] Both resume pages use PDF-embed-only (no HTML resume content in v1)
- [ ] Lighthouse ≥ 90 on `index.html`
- [ ] Lighthouse ≥ 90 on at least one subsite index

---

## In Progress

| File | Status | Notes |
|------|--------|-------|
| — | — | No sessions started yet |

---

## Completed

| File | Completed | Session notes |
|------|-----------|---------------|
| `index.html` | 2026-03-03 | Phase 2 complete: Landing page with two tiles as per checkpoint criteria in website.md |

---

## Decisions Made

> Permanent log. Never delete rows. Add a row any time you make a non-trivial implementation choice not explicitly covered by `website.md`.

| Date | File | Decision | Reason |
|------|------|----------|--------|
| 2026-03-01 | `website.md` | Design system: navy-charcoal base, teal for Neha, amber for Arunabh, Cormorant Garamond + DM Sans + DM Mono | Agreed with human during design review |
| 2026-03-01 | `website.md` | `data-accent` on `<body>` drives per-person colour scoping via CSS variable override | Enables SSG swapping without per-component logic |
| 2026-03-01 | `website.md` | Single `main.css` and `main.js` — no per-subsite files | Enforces design consistency; simplifies future SSG migration |
| 2026-03-01 | `website.md` | All asset paths root-relative (`/assets/...`) | Required for correct resolution at subsite depth on GitHub Pages |
| 2026-03-01 | `website.md` | `aria-current="page"` hardcoded per page, not JS-detected | Simpler, no runtime dependency, clearer intent |
| 2026-03-01 | `website.md` | No `<footer>` on `index.html` landing page | Tiles fill full viewport; footer would never be visible |
| 2026-03-01 | `website.md` | Resume pages use PDF-embed-only for v1 — no HTML resume content | Scope decision; HTML resume deferred to future iteration |
| 2026-03-01 | `website.md` | Scheduling embed feature-flagged off by default via inline `<script>` on `consultation.html` | Page-specific flag; must not move to `main.js` |
| 2026-03-01 | `website.md` | `.section--surface` applied to even-numbered sections on pages with 3+ sections only | Prevents alternation on short pages where it looks odd |

---

## Blocked / Needs Human Input

> Items flagged with `<!-- DECISION NEEDED -->` in the codebase. Clear an item once the human has resolved it and the code is updated.

| Date flagged | File | Description | Status |
|---|---|---|---|
| — | — | No blockers yet | — |

---

## Planned for v2

| Item | Notes |
|------|-------|
| `lint.ps1` + `.vscode/tasks.json` | PowerShell linter enforcing `website.md` rules. Runs in VSCode terminal and via Cline. Deferred — not needed to ship v1. |

---

## Session Log

> Append a brief entry at the end of each working session. One or two sentences maximum. Never edit previous entries.

| Session | Date | Summary |
|---------|------|---------|
| #0 | 2026-03-01 | State file created. No code written. `website.md` finalised at v2.1 after three stress tests, two external reviews, and 14 patch rounds. Ready to build. |
