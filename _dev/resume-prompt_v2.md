# Resume-Prompt v2 by ChatGPT

/no_think

Recovery session for inkinsighthub.com.

The previous task exited unexpectedly during Phase 2 (index.html landing page build). 
We are resuming safely.

Follow this order:

1. Read state.md fully and identify:
   - Current Phase
   - Next Action
   - Any Blocked items

2. Read website.md once for architecture confirmation.
   Do NOT repeatedly re-validate it.

3. State the current Next Action in one sentence.

4. Execute ONLY the following scope:

   Build the <main> section of index.html for the landing page.
   - Do NOT recreate the file.
   - Do NOT modify <head>, navigation, or boilerplate markup.
   - Follow accent rules and layout rules defined in website.md.
   - Use root-relative asset paths only.
   - Use existing CSS variables only.
   - Do not create new CSS variables.
   - Do not modify main.css or main.js in this step.

5. After completing the <main> section:
   - Verify it matches checkpoint criteria for Phase 2.
   - Update state.md.
   - STOP.

Termination condition:
When index.html <main> is complete and state.md is updated, stop execution.
Do not continue to footer or other pages.
Wait for further instruction.