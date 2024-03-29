import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';
import { remarkEmbed } from './src/lib/remarkPlugins/remarkEmbed';

// https://astro.build/config
export default defineConfig({
  site: 'https://genkey6.dev',
  integrations: [astroI18next(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  markdown: {
    remarkPlugins: [remarkEmbed],
  },
});
