import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  site: 'https://genkey6.dev',
  output: 'server',
  integrations: [astroI18next(), mdx(), sitemap()],
  adapter: vercel({
		edgeMiddleware: true,
	})
});
