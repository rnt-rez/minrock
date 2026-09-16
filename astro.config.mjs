import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { rehypeCallouts } from './src/plugins/rehype-callouts.mjs';

export default defineConfig({
  site: 'https://minrock.vercel.app',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  markdown: {
    processor: satteri({
      hastPlugins: [rehypeCallouts()],
    }),
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/.obsidian/**', '**/_bases/**']
      }
    }
  }
});
