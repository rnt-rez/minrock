# 🪨 Minrock — Minimalist Theme for Astro & Obsidian

> **"Raw ideas from your personal vault, finely polished into an ultra-fast static blog."**  
> *"Minrock is the solid bedrock where knowledge rests; ScatterLeaf is the gentle breeze where ideas and conversations drift."*

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Version: v0.2.1](https://img.shields.io/badge/Version-v0.2.1-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Obsidian](https://img.shields.io/badge/Obsidian-Ready-7C3AED?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/pulls)
[![Translations](https://img.shields.io/badge/Portugu%C3%AAs-README.pt--BR.md-green?style=flat-square)](README.pt-BR.md)

**Minrock** is an opinionated, typography-first static blog theme for [Astro 7](https://astro.build), crafted specifically for technical writers, software engineers, and developers who take notes in [Obsidian](https://obsidian.md). Built on the principle of **digital sovereignty**, it empowers thinkers and builders to claim a space to truly call their own on the open web—free from corporate walled gardens, algorithmic feeds, and hosting costs.

> *"The project exists to foster and democratize access and personal positioning on the open web, guaranteeing a sovereign space to call your own: free from interference, without steep hurdles, and at zero cost."*  
> — **Renato Rezende**, Creator of Minrock

[🇧🇷 Leia esta documentação em Português](README.pt-BR.md)

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

### 1. Site Metadata (`src/config/site.ts`)
Easily customize your blog settings in a single configuration file:

```typescript
export const siteConfig = {
  title: 'Minrock',
  description: 'Minimalist, typography-first Astro 7 theme for technical writers.',
  author: 'Renato Rezende',
  siteUrl: 'https://minrock.vercel.app',
  defaultTheme: 'cream', // Default theme: 'white' | 'cream' | 'slate' | 'midnight'
  comments: {
    enabled: true,
    provider: 'scatterleaf',
    repo: 'rnt-rez/minrock',
    category: 'General',
    theme: 'auto',        // Chameleon mode: dynamic contrast detection
    lang: 'auto',
    clientId: 'Iv23liZHApvnx6e6wtMJ',
    broker: 'https://scatterleaf-broker.renato-rezende-rrz.workers.dev'
  }
};
```

### 2. Publishing from Obsidian
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

### 3. Comments System (Modular & Optional)

Minrock respects your digital sovereignty: comments are 100% optional, zero-bloat, and cleanly encapsulated inside [`src/components/Comments.astro`](src/components/Comments.astro).

* **To Disable Comments:** Set `comments.enabled = false` in `src/config/site.ts`. When disabled, Astro completely eliminates all comment HTML and script tags at build time (0 bytes of JS, 0 network requests).
* **To Enable ScatterLeaf:** 
  1. Enable GitHub Discussions on your public repository.
  2. Update `comments.repo` with your own repository name (`your-username/your-repo`).
  3. *(Optional)* For live in-page reader comments, provide your Cloudflare Edge Broker URL and GitHub OAuth Client ID (see the [ScatterLeaf Guide](https://github.com/rnt-rez/scatterleaf)).
* **To Use Another Solution (Giscus, Utterances, Disqus, etc.):** You have complete freedom! Simply open [`src/components/Comments.astro`](src/components/Comments.astro) and paste your preferred widget or script. Zero vendor lock-in.

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
  <em>Crafted with pride in Brazil 🇧🇷 by <a href="https://github.com/rnt-rez">Renato Rezende</a>. Engineered for digital sovereignty on the global web.</em>
</p>
