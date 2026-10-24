# Leo's Blog

A bilingual Hugo blog using [Hermeneutics](https://src.chlo.is/chlorine/hermeneutics), ready for Cloudflare Pages.

## Local development

```bash
bash scripts/hugo.sh server -D
```

## Production build

```bash
bash scripts/hugo.sh --gc --minify
```

## Cloudflare Pages

- Build command: `bash scripts/hugo.sh --gc --minify -b "$CF_PAGES_URL"`
- Build output directory: `public`
- Environment variables:
  - `HUGO_VERSION=0.163.3`
  - `HUGO_ENV=production`

Requires Hugo Extended. The build script prepares the standalone Dart Sass compiler required by the theme.
