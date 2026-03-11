# InkInsightHub — Management Guide

This guide explains how to maintain and customize your dual-portfolio platform.
**Note**: This document is written and maintained by Google AI Studio using the Gemini Next model.

## 1. Editing Content
The site's content is managed across two main areas: structural data in `src/constants.ts` and translatable text in the localization files.

### Where to find what:
- **Structural Data (`src/constants.ts`):** IDs, dates, URLs, colors, and section visibility toggles.
- **Translatable Content (`src/i18n/locales/en.json` & `es.json`):** Names, roles, taglines, bios, project descriptions, and resume text.

### How to update a Profile:
1. **Structural Details:** Locate the `PROFILES` object in `src/constants.ts`. You can edit `accentColor`, `resumeUrl`, `imageUrl`, `email`, and `linkedinUrl`.
2. **Text Content:** Open `src/i18n/locales/en.json` (or `es.json`) and find the `profiles` section. You can edit:
   - `name`, `role`, `tagline`, `bio`.
   - `resumeSections`: Titles and descriptions for each part of the resume.

### How to add/edit Projects:
1. **Structure:** Add/modify objects in the `projects` array within `src/constants.ts`. Each project needs a unique `id` (e.g., 'p3').
2. **Content:** Add the corresponding text for that `id` in the `projects` section of your JSON locale files.

---

## 2. Toggling Sections On/Off
The visibility of certain sections is controlled by the presence of data or conditional logic in `src/pages/ProfilePage.tsx`.

### Resume Sections (Summary, Experience, Education, etc.)
The resume is fully dynamic. You manage the structure in `src/constants.ts` and the text in the locale JSON files.
- **To add a section:** Add a new object to the `resumeSections` array in `constants.ts` and add the corresponding text keys in `en.json`/`es.json`.
- **To remove a section:** Delete the object from the `resumeSections` array.
- **To toggle visibility:** Set `isVisible: true` or `false` on any section in `constants.ts`.
- **Layouts:** 
    - `layout: 'summary'`: Best for a single paragraph of text.
    - `layout: 'details'`: Best for experience or education with dates and descriptions.
    - `layout: 'bullets'`: Best for skills or competencies in a grid format.
- **Reordering:** Simply move the objects within the `resumeSections` array to change their display order on the page.

### Whitepapers and Blogs Section
This section is automatically hidden if the `whitepapers` key is missing or empty in `src/constants.ts`. 
- **To enable:** Add a `whitepapers: [...]` array to the profile in `constants.ts`.
- **To disable:** Remove the `whitepapers` key or set it to `undefined`.
- **Note:** This section is independent for each profile; you can have different content for Neha and Arunabh.

### Medium Link and Book a Call
You can toggle the visibility of the Medium link (in the footer) and the "Book a Call" card (in the Consultation section) directly in `src/constants.ts`:
- `showMediumLink`: Set to `true` to show the Medium link in the footer, or `false` to hide it.
- `showBookACall`: Set to `true` to show the "Book a Call" option in the Consultation section, or `false` to hide it.

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

## 9. Localization (Multi-language Support)
The site supports multi-language rendering (currently English and Spanish) using `react-i18next`.

### Toggling the Language Switcher
You can show or hide the language toggle globally in `src/constants.ts`:
- `LOCALIZATION_ENABLED`: Set to `true` to show the language switcher in the Navbar, or `false` to hide it and lock the site to English.

### How to add/edit Translations:
Translations are stored in JSON files within `src/i18n/locales/`:
- `en.json`: English strings.
- `es.json`: Spanish strings.

**To edit a translation:**
1. Open the corresponding `.json` file.
2. Locate the key you want to change (e.g., `"nav": { "portfolio": "..." }`).
3. Update the value.

**To add a new language:**
1. Create a new JSON file in `src/i18n/locales/` (e.g., `fr.json`).
2. Copy the structure from `en.json` and translate the values.
3. Register the new language in `src/i18n/config.ts`:
   ```typescript
   import fr from './locales/fr.json';
   // ...
   resources: {
     en: { translation: en },
     es: { translation: es },
     fr: { translation: fr },
   },
   ```

### Localizing Content
The entire site is fully localized. All text content—including bios, project descriptions, and resume items—lives in the JSON locale files.
1. **To update text:** Edit the values in `src/i18n/locales/en.json` or `es.json`.
2. **To add new fields:** Add the key-value pair to the JSON files and reference it in the React components using the `t('key.path')` function.

---

## 10. Deployment
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
