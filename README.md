# Adeptecom — website

Static marketing site for **Adeptecom** — an AI-run, full-service TikTok Shop & performance-marketing agency.

- **Live:** https://www.adeptecom.com
- **Stack:** static HTML/CSS/JS (no build step). Deployed via Cloudflare Pages (auto-deploys on push to main).
- **Contact form:** submits to WhatsApp (client-side); `contact.php` is a PHP fallback.

## Structure
- `index.html` — home
- `service-*.html` — service pages
- `blog.html`, `blog-*.html` — blog + posts
- `assets/` — css, js, images
- `sitemap.xml`, `robots.txt`, `llms.txt` — SEO / AI-crawler files

## Deploy
Every push to `main` auto-publishes via Cloudflare Pages. Custom domain is set in the Cloudflare Pages dashboard.
