import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://genkey6.dev',
  integrations: [astroI18next(), sitemap()],
});
