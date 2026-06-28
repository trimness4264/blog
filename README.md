# Leo's Blog

A bilingual Hugo blog using Stack Theme and Hugo Modules, ready for Cloudflare Pages.

## Local development

```bash
hugo server -D
```

## Production build

```bash
hugo --gc --minify
```

## Cloudflare Pages

- Build command: `hugo --gc --minify -b $CF_PAGES_URL`
- Build output directory: `public`
- Environment variables:
  - `HUGO_VERSION=0.163.3`
  - `HUGO_ENV=production`
  - `GO_VERSION=1.26.4`
