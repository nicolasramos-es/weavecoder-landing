# Weavecoder Landing Page

Static landing page for the Weavecoder product, built with [Astro](https://astro.build).

## Stack

- **Astro** (static output) — fast builds, zero JS shipped by default
- **Space Mono** + **DM Sans** — monospace headings, warm sans-serif body
- **Vanilla CSS** — no framework overhead for a single-page landing

## Configuration

The domain (`weavecoder.sh`) and all site content are centralized in `src/config.ts`. Change `SITE_DOMAIN` there to update the domain across the entire site.

## Development

```bash
npm install
npm run dev        # starts dev server at localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy

### Cloudflare Pages (recommended)

1. Push to a GitHub repo
2. Connect the repo in Cloudflare Pages dashboard
3. Set build command: `npm run build`
4. Set build output directory: `dist`
5. Add custom domain `weavecoder.sh` in Cloudflare DNS

### GitHub Pages

1. Enable GitHub Pages in repo settings
2. Set source to "GitHub Actions"
3. The build output in `dist/` will be deployed

## File Structure

```
src/
  config.ts          ← Domain, product info, install commands (CHANGE DOMAIN HERE)
  layouts/Layout.astro
  pages/index.astro  ← Main landing page
public/
  favicon.svg
```
