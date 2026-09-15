---
title: "Connecting Your Obsidian Vault to Minrock"
description: "A practical guide to using your local Obsidian vault as a frictionless content management system for Minrock."
pubDate: 2026-09-13
tags: ["obsidian", "vault", "workflow"]
draft: false
---

One of the foundational design goals of Minrock is to eliminate the gap between private note-taking in [Obsidian](https://obsidian.md) and public publishing on the web.

## The Page Bundle Pattern (Folder-Based)

Minrock embraces the **Folder-Based Page Bundle** approach:

```text
src/content/blog/
├── my-great-post/
│   ├── index.md           # The main post content & frontmatter
│   ├── diagram.png        # Local asset pasted directly via Ctrl+V
│   └── architecture.svg   # Vector illustration
```

### Why this matters for Obsidian users:
1. **Pasting Screenshots:** When you paste an image in Obsidian (`Ctrl + V`), it saves right next to your note. Astro resolves and bundles it automatically.
2. **Atomic Content:** Everything related to an article stays inside a single folder, keeping your vault neat and portable.
3. **No Proprietary Plugins:** You don't need closed-source syncing tools or paid subscriptions to publish your thoughts.

## Frontmatter Template

To create a new post, use this minimal frontmatter template at the top of your Markdown note:

```markdown
---
title: "Your Post Title"
description: "A short, compelling summary for SEO and social previews."
pubDate: 2026-09-15
tags: ["engineering", "architecture"]
---
```

Once saved, Minrock builds the route automatically at `/blog/your-post-title`.
