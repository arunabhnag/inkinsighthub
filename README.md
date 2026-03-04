# InkInsightHub — Management Guide

This guide explains how to maintain and customize your dual-portfolio platform.

## 1. Editing Content
Most of the site's content (names, roles, bios, projects, and whitepapers) is managed in a single file:
`src/constants.ts`

### How to update a Profile:
Locate the `PROFILES` object in `src/constants.ts`. You can edit the following fields for both `neha` and `arunabh`:
- `name`: Full display name.
- `role`: Professional title.
- `tagline`: The italicized subtitle in the hero section.
- `bio`: The "Leadership Philosophy" text.
- `resumeUrl`: Link to your PDF resume (see "Embedding Resumes" below).

### How to add/edit Projects:
Add or modify objects within the `projects` array. Each project needs:
- `id`: A unique string (e.g., 'p3').
- `title`, `category`, `year`, `description`.
- `tags`: An array of strings for the small labels at the bottom of the card.

---

## 2. Toggling Sections On/Off
The visibility of certain sections is controlled by the presence of data or conditional logic in `src/pages/ProfilePage.tsx`.

### Whitepapers Section
This section is automatically hidden if the `whitepapers` key is missing or empty in `src/constants.ts`. 
- **To enable:** Add a `whitepapers: [...]` array to the profile in `constants.ts`.
- **To disable:** Remove the `whitepapers` key or set it to `undefined`.

### Other Sections (Portfolio, Resume, Consultation)
To manually hide these sections, open `src/pages/ProfilePage.tsx` and comment out or remove the corresponding `<section>` block:
- Portfolio: Search for `<section id="portfolio">`
- Resume: Search for `<section id="resume">`
- Consultation: Search for `<section id="consultation">`

---

## 3. Embedding Your Resume
The resume section features an interactive PDF viewer and a download button.

### Step 1: Host your PDF
You can either:
1. **External Link:** Upload your PDF to Google Drive, Dropbox, or your own server and get a direct link.
2. **Local Asset:** Place your PDF in the `public/` folder (e.g., `public/resume-neha.pdf`) and use the path `/resume-neha.pdf`.

### Step 2: Update the URL
In `src/constants.ts`, update the `resumeUrl` field:
```typescript
resumeUrl: '/resume-neha.pdf', // Local path
// OR
resumeUrl: 'https://example.com/my-resume.pdf', // External link
```

*Note: The embedded viewer uses an `<iframe>`. Some browsers or hosting providers may block embedding for security. If the preview doesn't appear, ensure your link allows "X-Frame-Options: ALLOW" or use a local file.*

---

## 4. Customizing Visuals
### Colors
Colors are defined as CSS variables in `src/index.css`.
- **Dark Mode:** Edit the `:root` block.
- **Light Mode:** Edit the `:root.light` block.
- **Accent Colors:** Update `--color-accent-neha` or `--color-accent-arunabh`.

### Fonts
The site uses Google Fonts. To change them:
1. Update the `<link>` tags in `index.html`.
2. Update the `--font-display`, `--font-body`, and `--font-mono` variables in `src/index.css`.

---

## 5. Deployment
This site is built with Vite and is compatible with GitHub Pages.
1. Run `npm run build`.
2. Deploy the contents of the `dist/` folder to your GitHub repository's `gh-pages` branch.
