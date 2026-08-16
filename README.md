# Weavecoder Landing Page

Static landing page for the Weavecoder product, built with [Astro](https://astro.build).

## Stack

- **Astro** (static output) — fast builds, zero JS shipped by default
- **Space Mono** + **DM Sans** — monospace headings, warm sans-serif body
- **Vanilla CSS** — no framework overhead for a single-page landing

## Configuration

The domain (`weavecoder.nramos.dev`) and all site content are centralized in `src/config.ts`. Change `SITE_DOMAIN` there to update the domain across the entire site.

## Development

```bash
npm install
npm run dev        # starts dev server at localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy

### GitHub Pages

1. Push to `main` — `.github/workflows/deploy.yml` builds with `npm ci && npm run build` and deploys `dist/` via the official Pages actions.
2. The site is served at the custom domain `https://weavecoder.nramos.dev/` (the CNAME is attached in the Pages settings). The build always serves from the root; do not set `ASTRO_BASE` for production builds.

## File Structure

```
src/
  config.ts          ← Domain, product info, install commands (CHANGE DOMAIN HERE)
  layouts/Layout.astro
  pages/index.astro  ← Main landing page
public/
  favicon.svg
```
