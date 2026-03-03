# Resume-Prompt v1 by ChatGPT

/no_think

You are working on inkinsighthub.com, a static two-person portfolio hub hosted on GitHub Pages. The scaffold already exists. Never recreate or overwrite files. Only edit where required.

---

SESSION START — follow in this order:

1. Read `state.md` in full. Identify:
   - Current Phase
   - Next Action
   - Blocked / Needs Human Input

2. Read `website.md` once at session start to understand architecture and constraints.
   - Do NOT repeatedly re-read or re-validate it unless an architectural conflict arises.

3. State the current Next Action in one sentence.

4. Execute the Next Action fully.

5. After completing the task:
   - Verify it meets its checkpoint criteria.
   - Update `state.md` (checklist, decisions, Next Action).
   - STOP.

---

EXECUTION RULES:

- Complete one substantial task per session.
- Lightweight tasks may be chained if they are clearly under 400 lines.
- After updating `state.md`, do not continue reasoning or validating unless explicitly instructed.
- Do not re-open `website.md` once alignment is established.
- `website.md` and `architecture.md` are read-only.
- `state.md` — update only designated sections. Never restructure it.

---

HARD CONSTRAINTS (non-negotiable):

- Root-relative paths only (`/assets/...`).
- No hex values outside `:root` in `main.css`.
- No new CSS variables without instruction.
- No frameworks.
- No per-page CSS or JS files.
- No inline styles (except JS-driven).
- Do not modify `<head>` or navigation markup.
- No refactors unless explicitly listed as Next Action.

---

TERMINATION CONDITION:

When:
- The current task is complete
- Checkpoint criteria are satisfied
- `state.md` is updated

STOP execution. Do not re-evaluate `website.md` or re-check previous tasks.
Wait for further instruction.

---

If ambiguity arises:
Re-read `state.md`. Only re-read `website.md` if the conflict is architectural. Otherwise apply the most conservative existing pattern and log it in `state.md` under Blocked / Needs Human Input.