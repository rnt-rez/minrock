# 🪨 Minrock — Minimalist Theme for Astro & Obsidian

> **"Raw ideas from your personal vault, finely polished into an ultra-fast static blog."**  
> *"Minrock is the solid bedrock where knowledge rests; ScatterLeaf is the gentle breeze where ideas and conversations drift."*

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Version: v0.2.2](https://img.shields.io/badge/Version-v0.2.2-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/releases)
[![Demo](https://img.shields.io/badge/Demo-minrock.vercel.app-blue?style=flat-square&logo=vercel&logoColor=white)](https://minrock.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Obsidian](https://img.shields.io/badge/Obsidian-Ready-7C3AED?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/pulls)
[![Translations](https://img.shields.io/badge/Portugu%C3%AAs-README.pt--BR.md-green?style=flat-square)](README.pt-BR.md)

**Minrock** is an opinionated, typography-first static blog theme for [Astro 7](https://astro.build), crafted specifically for technical writers, software engineers, and developers who take notes in [Obsidian](https://obsidian.md). Built on the principle of **digital sovereignty**, it empowers thinkers and builders to claim a space to truly call their own on the open web—free from corporate walled gardens, algorithmic feeds, and hosting costs.

> *"The project exists to foster and democratize access and personal positioning on the open web, guaranteeing a sovereign space to call your own: free from interference, without steep hurdles, and at zero cost."*  
> — **Renato Rezende**, Creator of Minrock

[🌐 View Live Demo](https://minrock.vercel.app) • [🇧🇷 Leia esta documentação em Português](README.pt-BR.md)

---

## ✨ Key Features

* **💎 Pure Static Site Generation (SSG):** Pre-rendered HTML for maximum delivery speed and zero runtime server overhead.
* **🌐 Digital Sovereignty & Personal Positioning:** Total ownership of your content in open Markdown, hosted wherever you choose at zero financial cost.
* **✍️ Typography-First Architecture:** Tailored vertical rhythm, optimal line heights, and elegant type hierarchy designed for deep reading.
* **🎨 4 Calibrated Color Themes:**
  * ☀️ **Clean White:** Crisp, modern editorial look.
  * 📜 **Warm Paper (Cream):** Eye-friendly soft palette for extended reading sessions.
  * ⚓ **Slate Navy:** Deep, focused dark mode inspired by Linear and Vercel.
  * 🌌 **Midnight:** Pure OLED black with subtle reactive neon card accents.
* **🗃️ Obsidian Vault CMS Friendly:** Native Markdown page bundles support with effortless copy-pasting of local images.
* **🍃 ScatterLeaf Ready:** Native, iframe-free comments powered by GitHub Discussions via `<scatter-leaf>` with Cloudflare Edge Broker and Chameleon auto-theming.
* **💻 Code Blocks with Style:** Syntax highlighting with dual dark/light parity, line numbers, and clean copy triggers.
* **♿ Universal Accessibility:** Built with WCAG 2.1/2.2 AA standards, visible keyboard focus rings (`:focus-visible`), and zero layout shifts.

---

## 🚀 Quick Start

Initialize your blog in seconds using the official Astro CLI:

```bash
npx create-astro@latest --template rnt-rez/minrock
```

Or clone the repository locally:

```bash
git clone https://github.com/rnt-rez/minrock.git my-blog
cd my-blog
npm install
npm run dev
```

Visit `http://localhost:4321` in your browser to view your live blog.

---

## 📂 Project Structure

```text
minrock/
├── src/
│   ├── config/
│   │   └── site.ts            # Site title, author bio, social links, and navigation
│   ├── content/
│   │   └── blog/              # Your Markdown articles (Obsidian Vault compatible)
│   ├── components/            # Header, Footer, ThemeToggle, ArticleCard
│   ├── layouts/               # BaseLayout, PostLayout
│   ├── pages/                 # index, blog, about, 404
│   └── styles/                # Global CSS tokens and 4 color palettes
├── astro.config.mjs           # Astro 7 configuration
├── package.json
└── tsconfig.json
```

---

## 🛠️ Configuration & Content

### 1. Site Metadata & Feature Flags (`src/config/site.ts`)
Easily customize your blog settings and toggle components in a single configuration file:

```typescript
export const siteConfig = {
  title: 'Minrock',
  description: 'Minimalist, typography-first Astro 7 theme for technical writers.',
  author: 'Renato Rezende',
  siteUrl: 'https://minrock.vercel.app', // Or via env: SITE_URL=https://yourdomain.com
  defaultTheme: 'cream', // Default theme: 'white' | 'cream' | 'slate' | 'midnight'
  // Granular Feature Flags — "Complete by default, minimalist on demand"
  // Toggle any flag to false to completely eliminate markup, styles, and scripts during SSG build.
  features: {
    search: true,          // Lunr full-text search modal & shortcuts (Ctrl/Cmd+K)
    tableOfContents: true, // Sticky sidebar TOC in posts (auto-centers to 780px when disabled)
    readingTime: true,     // "X min read" badge in post headers
    audioPlayer: true,     // Accessible text-to-speech audio reader in posts and projects
    tags: true,            // Tag badges in headers, article cards, and tag clouds
    socialShare: true,     // Notion-style share modal and trigger bar in blog posts
    themeSwitcher: true,   // Palette dropdown switcher in header
    backToTop: true,       // Floating smooth-scroll back-to-top button
    imageZoom: true,       // Medium-style smooth image zoom modal
    comments: true         // Interactive blog comments powered by ScatterLeaf
  },
  comments: {
    enabled: true,
    provider: 'scatterleaf',
    repo: 'rnt-rez/minrock',
    category: 'General',
    theme: 'auto',        // Chameleon mode: dynamic contrast detection
    lang: 'auto',
    clientId: 'Iv23liZHApvnx6e6wtMJ',
    broker: '',           // Leave empty ('') for zero-setup mode, or provide your Cloudflare Worker URL
    features: {
      images: true        // Toggle image insertion modal in comment composer
    }
  }
};
```

### 2. Granular Feature Flags ("Complete by Default, Minimalist on Demand")

Minrock is built to impress out of the box with a complete suite of modern features, while giving purist technical writers the freedom to strip down the experience to an ultra-minimalist, Obsidian-like reading environment.

Because flags are evaluated at Astro build time (**Pure SSG**), turning any feature to `false` guarantees **zero bundle overhead**: no HTML markup, CSS rules, or client-side JavaScript for that component will be included in the final static output.

* **Adaptive TOC Layout:** When `tableOfContents` is set to `false`, the article grid automatically adapts from a split sidebar layout to a centered, single-column reading column (`max-width: 780px; margin: 0 auto;`).

### 3. Publishing from Obsidian
Drop your Obsidian Markdown notes directly into `src/content/blog/` using the frontmatter format:

```markdown
---
title: "Building Resilient Systems"
description: "A deep dive into distributed systems architecture."
pubDate: 2026-09-15
tags: ["engineering", "architecture", "devops"]
---

Your content goes here...
```

### 4. Comments System (Modular & Optional)

Minrock respects your digital sovereignty: comments are 100% optional, zero-bloat, and cleanly encapsulated inside [`src/components/Comments.astro`](src/components/Comments.astro).

* **Zero-Setup Showcase Mode (Default):** Leaving `broker: ''` enables the instant interactive demo mode with realistic mock notes, sound TTS, and reactions. Ideal for evaluating the theme without creating external infrastructure.
* **To Enable Live Discussions via ScatterLeaf:** 
  1. Enable GitHub Discussions on your public repository.
  2. Update `comments.repo` with your own repository name (`your-username/your-repo`).
  3. *(Optional)* For live in-page reader comments, provide your Cloudflare Edge Broker URL and GitHub OAuth Client ID (see the [ScatterLeaf Guide](https://github.com/rnt-rez/scatterleaf)).
* **To Use Any Other Solution:** You have complete freedom! Simply open [`src/components/Comments.astro`](src/components/Comments.astro) and paste your preferred widget or script. Zero vendor lock-in.
* **To Disable Comments Completely:** Set `comments.enabled = false` in `src/config/site.ts`. When disabled, Astro completely eliminates all comment HTML and script tags at build time (0 bytes of JS, 0 network requests).

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `http://localhost:4321` |
| `npm run check` | Runs Astro and TypeScript static type diagnostics |
| `npm run build` | Compiles production-ready static pages into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run qa` | Baseline verification suite (`astro check && astro build`) |
| `npm run audit:google` | Google Search audit (SERP Snippets, Schema.org and Discovery) |
| `npm run audit:wcag` | Structural WCAG 2.1/2.2 AA accessibility and semantic audit |
| `npm run audit:security` | DevSecOps Sentinel security and credential scanner |

---

## 🤝 Contributing

Contributions, feature requests, and bug reports are warmly welcome! Feel free to open an issue or submit a Pull Request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  <em>Crafted with precision by the <a href="https://github.com/rnt-rez/minrock">Minrock Project</a>. Engineered for the open web.</em>
</p>
