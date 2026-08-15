// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_DOMAIN } from './src/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: `https://${SITE_DOMAIN}`,
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
