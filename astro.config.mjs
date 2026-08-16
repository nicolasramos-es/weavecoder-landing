// @ts-check
import { defineConfig } from 'astro/config';
import { SITE_DOMAIN } from './src/config';

// https://astro.build/config
//
// The site is served at the root by the custom domain weavecoder.nramos.dev,
// so the default base is `/`. `ASTRO_BASE` is kept only as an optional
// override for temporary previews under a sub-path (e.g. the project URL
// https://nicolasramos-es.github.io/weavecoder-landing/ before the custom
// domain was attached). Do not set it for production deploys.
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
