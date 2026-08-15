// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_DOMAIN } from './src/config';

// https://astro.build/config
//
// `ASTRO_BASE` lets the GitHub Pages workflow deploy to the project URL
// (`https://nicolasramos-es.github.io/weavecoder-landing/`) while the custom
// domain `weavecoder.nramos.dev` is still pending (NRA-528). Once the custom
// domain is live in Pages settings, remove `ASTRO_BASE` from the workflow so
// the site is served from the root.
export default defineConfig({
  output: 'static',
  site: `https://${SITE_DOMAIN}`,
  base: process.env.ASTRO_BASE ?? '/',
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      preprocessorOptions: {},
    },
  },
});
