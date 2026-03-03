# Cline Kickoff Prompt — inkinsighthub.com
# Version: 6 (final — lightweight task rule added)
# Usage: Paste the PROMPT TEXT below into Cline at the start of every session.
#        It is safe to reuse for every session — state.md tracks where you are.

---

## PROMPT TEXT (paste this into Cline at the start of every session)

/no_think

You are working on inkinsighthub.com, a static two-person portfolio hub hosted on GitHub Pages. The scaffold is already in place — every HTML file, CSS stub, JS stub, and image folder already exists with correct structure. Do not recreate or overwrite any existing file. Edit and fill them in.

---

**SESSION START — follow in this exact order, every session:**

**1. Read `state.md` in full.** Note Current Phase, Next Action, and Blocked / Needs Human Input. This tells you exactly where to resume.

**2. Read `website.md` in full, every section, every time.** It is long. Read it entirely before touching any file. The answer to almost every question you will have is in this file.

**3. Begin the task in "Next Action".** Work through it completely, then verify it passes its checkpoint criteria in the "Build Checkpoint Criteria" table in `website.md`.

**4. Update `state.md` immediately after completing any task** — before starting the next one. Tick the checklist item, log any decisions made, update Next Action.

**5. Continue to the next task only if both conditions are true:**
- The completed task passes its checkpoint criteria and `state.md` is updated
- The next task is lightweight: `main.js`, `404.html`, or the review pass. For any substantial task — `main.css`, any hero page, any interior page set — complete it, update `state.md`, and end the session.

A task is lightweight if it produces fewer than 400 lines of output. When in doubt, treat it as substantial and stop.

---

**Hard constraints — these override everything else:**

- `website.md` and `architecture.md` are read-only. Never modify them.
- `state.md` — update designated sections only. Never restructure or reformat it.
- All asset paths must be root-relative (`/assets/...`). Never use `../`.
- No hex colour values outside `:root` in `main.css`. Always `var(--token-name)`.
- No CSS frameworks, JS frameworks, utility libraries, or new CSS variables without explicit human instruction.
- No lorem ipsum. Placeholder format is exactly `[PLACEHOLDER: person — description]` — case-sensitive, no variations.
- No per-subsite CSS or JS files. One `main.css`, one `main.js`, always.
- No inline styles except for JS-driven dynamic values.
- The scaffold HTML files already have correct `<head>`, `data-accent`, nav, and `aria-current` — fill in `<main>` content and `<footer>` only. Never modify `<head>`, navigation, or any boilerplate markup.
- No refactoring, renaming, restructuring, or stylistic rewrites unless explicitly listed as the Next Action.

---

**When something is not covered by `website.md`:**

Follow the AMBIGUITY PROTOCOL: re-read `website.md`, check `state.md`, apply the most conservative existing pattern, add `<!-- DECISION NEEDED: [description] -->` in the code, log it in `state.md` under Blocked / Needs Human Input, and continue. Never silently invent a new pattern, class name, or CSS variable.

---

Before editing any file, state in one sentence what the current Next Action is.

Read `state.md` now, then `website.md`, then begin.
