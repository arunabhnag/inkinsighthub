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

### Resume Sections (Competencies, Education, etc.)
The resume sidebar is fully dynamic. You can add, remove, or reorder sections in `src/constants.ts`.
- **To add a section:** Add a new object to the `resumeSections` array.
- **To remove a section:** Delete the object from the `resumeSections` array.
- **Layouts:** Use `layout: 'bullets'` for simple lists or `layout: 'details'` for items with subtitles (like education).

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
1. **Local Asset (Recommended):** Place your PDF in the `public/` folder (e.g., `public/resume-neha.pdf`). This is the most reliable method as it avoids "X-Frame-Options" blocks from external providers.
2. **External Link:** Upload your PDF to a cloud provider. Note that many (like Google Drive) block iframe embedding by default.

### Step 2: Update the URL
In `src/constants.ts`, update the `resumeUrl` field:
```typescript
resumeUrl: '/resume-neha.pdf', // Recommended: Local path
// OR
resumeUrl: 'https://example.com/my-resume.pdf', // External link
```

*Note: The embedded viewer uses an `<iframe>`. Some browsers or hosting providers may block embedding for security. If the preview doesn't appear, ensure your link allows "X-Frame-Options: ALLOW" or use a local file.*

---

## 4. Managing Hero Images
The large images on the profile pages are managed similarly to resumes.

### Step 1: Save your images
Place your high-resolution portrait images in the `public/` folder.
- Example: `/public/hero-neha.png`
- Example: `/public/hero-arunabh.png`

### Step 2: Update the URL
In `src/constants.ts`, update the `imageUrl` field for each profile:
```typescript
imageUrl: '/hero-neha.png', // Local path in public folder
```

*Note: If the image is missing, the site will automatically fallback to a placeholder image to ensure the layout remains intact.*

---

## 5. Customizing Visuals
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

## 7. Managing Independent Projects (Extras)
You can host independent HTML projects that are separate from the main profiles.

### Step 1: Add the HTML file
Place your independent HTML files in the `public/extras/` folder.
- Example: `/public/extras/battery-intelligence.html`

### Step 2: Register the project
In `src/constants.ts`, add a new entry to the `EXTRA_PROJECTS` array:
```typescript
{
  id: 'battery-intelligence',
  title: 'Battery Intelligence',
  description: 'A deep dive into advanced battery management...',
  thumbnailUrl: 'https://picsum.photos/seed/battery/600/400',
  path: '/extras/battery-intelligence.html',
  isVisible: true // Toggle to show/hide on the Projects page
}
```

### Step 3: Accessing the Projects Page
The "Projects" page is linked from the **footer** of every profile page. It is not linked from the main landing page to keep the focus on the primary portfolios.

---

## 8. Deployment
This site is built with Vite and is optimized for GitHub Pages with a custom domain.

### GitHub Pages Considerations
1. **Routing**: I have implemented `HashRouter` in `App.tsx`. This ensures that your links work correctly on `inkinsighthub.com` even when users refresh the page or share direct links (e.g., `inkinsighthub.com/#/neha`).
2. **Base Path**: Since you are using the custom domain `inkinsighthub.com`, the `base` property in `vite.config.ts` is set to `/` (the root).
3. **Automated Deployment**:
   - I have included a pre-configured GitHub Action in `.github/workflows/deploy.yml`. 
   - Once you push this code to your `main` branch on GitHub, it will automatically build and deploy your site to `inkinsighthub.com`.
   - Ensure you have enabled "GitHub Pages" in your repository settings and set the "Build and deployment" source to "GitHub Actions".
   - Ensure you have a `CNAME` file in your `public/` folder containing `inkinsighthub.com` (I have already created this for you).

### Deployment Steps (Manual)
1. Run `npm run build`.
2. Ensure the `dist/` folder contains your compiled assets.
3. Deploy the contents of `dist/` to your hosting provider.
