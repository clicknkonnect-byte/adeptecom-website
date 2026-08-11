# Adeptecom — website

Static marketing site for **Adeptecom** — an AI-run, full-service TikTok Shop & performance-marketing agency.

- **Live:** https://www.adeptecom.com
- **Stack:** static HTML/CSS/JS (no build step). Deployed on Hostinger, auto-deployed from GitHub on push to main (see docs/DEPLOY.md).
- **Contact form:** submits to WhatsApp (client-side); `contact.php` is a PHP fallback.

## Structure
- `index.html` — home
- `service-*.html` — service pages
- `blog.html`, `blog-*.html` — blog + posts
- `assets/` — css, js, images
- `sitemap.xml`, `robots.txt`, `llms.txt` — SEO / AI-crawler files

## Deploy
Every push to `main` auto-publishes to Hostinger via a Git webhook. Setup steps: docs/DEPLOY.md.
