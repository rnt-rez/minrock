export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  author: string;
  siteUrl: string;
  defaultTheme: 'white' | 'cream' | 'slate' | 'midnight';
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  navLinks: {
    title: string;
    href: string;
  }[];
  comments?: {
    enabled: boolean;
    provider: 'scatterleaf';
    repo: string;
    category?: string;
    theme?: 'auto' | 'light' | 'dark' | 'cream' | 'midnight' | 'slate';
    lang?: string;
    broker?: string;
    clientId?: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'Minrock',
  tagline: 'Raw ideas from your personal vault, finely polished into an ultra-fast static blog.',
  description: 'Minimalist, typography-first Astro 7 theme crafted for technical writers and Obsidian vaults. Pure SSG, zero bloat.',
  author: 'Renato Rezende',
  siteUrl: 'https://minrock.vercel.app',
  defaultTheme: 'cream',
  socialLinks: {
    github: 'https://github.com/rnt-rez/minrock',
    linkedin: 'https://www.linkedin.com/in/renato-rz/',
    email: 'contact@example.com'
  },
  navLinks: [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'Projects', href: '/projects' },
    { title: 'Tags', href: '/tags' },
    { title: 'About', href: '/about' }
  ],
  comments: {
    enabled: true,
    provider: 'scatterleaf',
    repo: 'rnt-rez/minrock',
    category: 'General',
    theme: 'auto',
    lang: 'auto',
    clientId: 'Iv23liZHApvnx6e6wtMJ',
    broker: 'https://scatterleaf-broker.renato-rezende-rrz.workers.dev'
  }
};
