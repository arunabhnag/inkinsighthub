# inkinsighthub.com — Full Project Plan
### Professional Portfolio & Technical Writing Showcase

---

## Project Overview

A two-part website hosted at inkinsighthub.com:

- **Landing page** — HTML5UP Forty template, static HTML, introduces you and links to the portfolio subsite
- **Portfolio subsite** — HTML5UP Editorial template, hybrid static site with a custom Python/Jinja2 SSG for native content and styled link cards for externally hosted content

Built and written locally using LM Studio + Cline, hosted free on GitHub Pages with the domain managed through GoDaddy.

---

## Full Stack Summary

| Layer | Tool | Cost |
|---|---|---|
| Domain | GoDaddy (inkinsighthub.com) | Existing |
| Hosting | GitHub Pages | Free |
| Landing page | HTML5UP Forty (static HTML) | Free |
| Portfolio subsite | HTML5UP Editorial (hybrid) | Free |
| SSG engine | Custom Python/Jinja2 script (Docker container) | Free |
| AI coding assistant | LM Studio + Cline | Free |
| LLM model | Qwen2.5-Coder-14B Q4_K_M | Free |

---

## Prerequisites

### Accounts & Services
- [ ] GitHub account — create at [github.com](https://github.com) if you don't have one
- [ ] GoDaddy account with access to DNS settings for inkinsighthub.com
- [ ] (Optional) Medium and/or LinkedIn account if embedding articles from there

### Hardware
- [ ] AMD RX 9070 XT with latest AMD Adrenalin drivers (2024 or later) — verify via Device Manager
- [ ] At least 16 GB system RAM
- [ ] Kingston A400 SATA M.2 SSD with at least 50 GB free space for models and project files

### Software to Install Before Starting
- [ ] **VS Code** — [code.visualstudio.com](https://code.visualstudio.com)
- [ ] **Git** — [git-scm.com](https://git-scm.com) — confirm with `git --version` in terminal
- [ ] **Node.js v18+** — [nodejs.org](https://nodejs.org) — confirm with `node --version` in terminal
- [ ] **LM Studio** — [lmstudio.ai](https://lmstudio.ai)
- [ ] **Docker Desktop** — [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop) — the SSG runs as a Docker container; no Python libraries need to be installed manually

### VS Code Extensions to Install
- [ ] **Cline** (by saoudrizwan) — AI coding agent
- [ ] **Live Preview** (by Microsoft) — instant browser preview while editing HTML
- [ ] **Markdown Preview Enhanced** — useful for previewing your content files while writing

---

## Part 1 — Local AI Setup

### Step 1 — Install and Configure LM Studio

1. Download and install LM Studio from [lmstudio.ai](https://lmstudio.ai)
2. Launch LM Studio and go to **Settings → GPU**
3. Confirm your RX 9070 XT is detected and set acceleration to **Vulkan** (not ROCm)
4. Go to the **Search** tab and download **Qwen2.5-Coder-14B-Instruct Q4_K_M** (~9 GB)
5. Go to the **Developer** tab, load the model, and click **Start Server**
6. Confirm the server is running at `http://localhost:1234`

### Step 2 — Install and Configure Cline

1. Open VS Code, go to Extensions (`Ctrl+Shift+X`), search for **Cline** and install it
2. Click the Cline icon in the sidebar, then open its Settings
3. Set:
   - **API Provider:** `OpenAI Compatible`
   - **Base URL:** `http://localhost:1234/v1`
   - **API Key:** `lmstudio`
   - **Model ID:** `qwen2.5-coder-14b-instruct`
4. Send a test message to confirm the connection works

---

## Part 2 — GitHub & Domain Setup

### Step 3 — Create GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository named `inkinsighthub`
2. Make it **public** (required for free GitHub Pages)
3. Initialise it with a README
4. Go to **Settings → Pages** and set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` → `/ (root)`
5. Click **Save** — GitHub will give you a `https://username.github.io/inkinsighthub` URL to confirm Pages is working before DNS is switched over

### Step 4 — Point GoDaddy DNS to GitHub Pages

1. Log into GoDaddy and go to **My Products → DNS** for inkinsighthub.com
2. Delete or replace the existing A records with GitHub Pages' four IP addresses:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add or update the `www` CNAME record to point to `your-github-username.github.io`
4. In your GitHub repo, create a file named `CNAME` (no extension) in the root with this content:
   ```
   inkinsighthub.com
   ```
5. Back in GitHub Pages settings, enter `inkinsighthub.com` as the custom domain and check **Enforce HTTPS**
6. Wait for DNS propagation — usually 15 minutes to 1 hour with GoDaddy, up to 48 hours worst case
7. GitHub will automatically provision an SSL certificate via Let's Encrypt once DNS resolves

### Step 5 — Clone the Repo Locally

```bash
git clone https://github.com/your-username/inkinsighthub.git
cd inkinsighthub
```

Open this folder in VS Code — keep all project work inside it.

---

## Part 3 — Project Structure

Set up the following folder structure inside your repo:

```
inkinsighthub/
│
├── index.html                  # Forty landing page (static HTML)
├── CNAME                       # GitHub Pages custom domain file
│
├── assets/                     # Shared assets (optional, for cross-site consistency)
│   ├── css/
│   └── images/
│
├── portfolio/                  # Editorial subsite root
│   ├── index.html              # Editorial homepage (auto-generated by SSG)
│   ├── about/
│   │   └── index.html
│   ├── resume/
│   │   └── index.html
│   ├── documentation/
│   │   ├── index.html          # Documentation index page
│   │   └── sample-name/
│   │       └── index.html      # Individual sample sub-pages
│   ├── whitepapers/
│   │   └── index.html
│   └── assets/                 # Editorial template assets (CSS, JS, images)
│       ├── css/
│       ├── js/
│       └── images/
│
├── content/                    # Your Markdown source files (SSG input)
│   ├── about.md
│   ├── resume.md
│   ├── documentation/
│   │   ├── sample-one.md
│   │   └── sample-two.md
│   └── whitepapers/
│       ├── published-one.md    # Card/link for externally hosted whitepapers
│       └── planned-one.md      # Placeholder cards for upcoming whitepapers
│
├── templates/                  # Jinja2 templates for the SSG
│   ├── base.html               # Editorial layout with content slot
│   ├── page.html               # Standard content page
│   ├── index.html              # Section index page (lists sub-pages)
│   └── card.html               # Reusable card component for external links
│
└── ssg/
    └── build.py                # Your custom SSG build script
```

---

## Part 4 — Site Content Plan

### Landing Page (Forty)

| Section | Content |
|---|---|
| Hero | Name, tagline, CTA button → Portfolio |
| Tile 1 | About Me — brief intro, links to About page |
| Tile 2 | Technical Documentation — teaser, links to Documentation section |
| Tile 3 | Whitepapers — teaser, links to Whitepapers section |
| Tile 4 | Contact / Connect |
| Footer | Attribution (HTML5UP), social links |

### Portfolio Subsite (Editorial)

**Sidebar Navigation:**
- About Me
- Resume
- Technical Documentation
  - (sub-pages per sample)
- Whitepapers
- Contact

**Content pages:**

| Page | Type | Delivery |
|---|---|---|
| About Me | Bio, background, professional focus | Markdown → SSG |
| Resume | Structured CV | Markdown → SSG |
| Documentation — hosted externally | Link cards with description and context | Static HTML card component |
| Documentation — sub-pages | Full content | Markdown → SSG |
| Whitepapers — published externally | Embedded (Medium) or link cards (others) | Static HTML |
| Whitepapers — planned | Placeholder cards with "Coming Soon" badge | Static HTML |

---

## Part 5 — Custom SSG (Dockerized)

The SSG runs as a Docker container — no Python environment needed on your machine, easy to clean up, and consistent across any machine you work from.

Add the following to your repo:

```
ssg/
├── build.py            # SSG script
├── Dockerfile          # Container definition
├── requirements.txt    # Python dependencies
└── docker-compose.yml  # Build and watch commands
```

### Cline Brief

> *"Build a Dockerized Python SSG. The script at `ssg/build.py` reads Markdown files from the `content/` directory, extracts YAML frontmatter for title and nav metadata, converts the Markdown body to HTML using the `markdown` library, injects it into Jinja2 templates stored in `templates/`, and outputs static HTML files to the `portfolio/` directory mirroring the content folder structure. Include a `--watch` flag using watchdog for auto-rebuild on file save. Write a `Dockerfile` based on `python:3.12-slim` that installs dependencies from `requirements.txt` and runs `build.py`. Write a `docker-compose.yml` with two services: `build` (single build and exit) and `watch` (runs with `--watch` flag, mounts `content/`, `templates/`, and `portfolio/` as volumes so output appears on the host in real time)."*

### requirements.txt
```
markdown
jinja2
pyyaml
watchdog
```

### Usage

**One-time build:**
```bash
docker compose run build
```

**Watch mode (auto-rebuilds on save):**
```bash
docker compose up watch
```

**Clean up container and image when done:**
```bash
docker compose down --rmi all
```

### Markdown Frontmatter Format

Each content file should start with:

```yaml
---
title: About Me
nav_order: 1
section: about
---

Your markdown content here...
```

### External Content Cards

For externally hosted whitepapers and documentation, create a Markdown file that triggers the `card` template:

```yaml
---
title: "Whitepaper Title"
type: card
url: https://medium.com/your-article
source: Medium
description: A one-line description of what this is about.
status: published       # or: coming-soon
---
```

---

## Part 6 — Branding & Consistency

Before briefing Cline on either template, decide on:

- [ ] **Primary colour** — applied to Forty's tile overlays and Editorial's sidebar accent
- [ ] **Accent colour** — CTA buttons, links, hover states
- [ ] **Font** — HTML5UP templates use Google Fonts; pick one that works across both (e.g. Source Sans Pro, Inter, or keep the template defaults)
- [ ] **Logo or wordmark** — even a simple text logo works; used in Forty's nav and Editorial's sidebar header
- [ ] **Tagline** — one line that appears in Forty's hero and Editorial's sidebar

Write these down before you start so you can include them in your first Cline brief for each template. Consistent values applied upfront save a lot of correction later.

---

## Part 7 — Build & Deploy Workflow

Once everything is set up, your day-to-day workflow will be:

```
Write content in Markdown (content/)
        ↓
Run SSG build script (ssg/build.py)
        ↓
Preview locally (Live Preview in VS Code)
        ↓
git add . → git commit → git push
        ↓
GitHub Pages auto-deploys → inkinsighthub.com live within seconds
```

For the landing page (Forty), skip the SSG step — just edit `index.html` directly and push.

---

## Part 8 — Embedding External Content

| Source | Approach | Notes |
|---|---|---|
| Medium articles | oEmbed iframe | Works reliably |
| LinkedIn articles | Styled link card | LinkedIn embeds are unreliable across browsers |
| Corporate/product-hosted docs | Styled link card | Most corporate sites block iframes |
| Your own sub-pages | Markdown → SSG | Fully native, cleanest result |

**Link card design brief for Cline:**
> *"Create a reusable HTML card component styled to match Editorial's CSS that shows: a source badge (e.g. 'Medium', 'LinkedIn'), a title, a one-line description, an optional 'Coming Soon' badge, and a 'Read →' CTA link. Cards should be defined by Jinja2 template and populated from Markdown frontmatter."*

---

## Recommended Order of Work

1. **Prerequisites** — install all software, set up GitHub repo, point GoDaddy DNS
2. **Download templates** — get Forty and Editorial from [html5up.net](https://html5up.net)
3. **Set up folder structure** — scaffold the repo as outlined above
4. **Decide branding** — colours, fonts, tagline, logo
5. **Build Forty landing page** — brief Cline with your content and branding
6. **Set up Editorial shell** — sidebar nav, consistent branding applied
7. **Build custom SSG** — brief Cline to build `ssg/build.py`
8. **Write content in Markdown** — About, Resume, Documentation samples
9. **Add external content cards** — whitepapers, hosted documentation
10. **Test locally** — Live Preview, check all links between Forty and Editorial
11. **Push to GitHub** — confirm GitHub Pages deploys correctly at inkinsighthub.com
12. **Review and iterate** — polish, add planned whitepapers over time

---

## Attribution Note

HTML5UP templates are free under the [Creative Commons Attribution 3.0 license](https://creativecommons.org/licenses/by/3.0/). This requires keeping the attribution link to HTML5UP in the footer unless you purchase a license. Confirm whether you want to keep or buy out the attribution before launch.

---

*Plan prepared February 2026 — inkinsighthub.com*
