// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_ORIGIN, BASE_PATH } from './src/data/site-url.mjs';

export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/og/') && !page.endsWith('/404'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-IN', hi: 'hi-IN' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
