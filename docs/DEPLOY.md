# Deploy — Hostinger (auto-deploy from GitHub)

The site is hosted on **Hostinger**, auto-deployed from the **private** GitHub repo
`clicknkonnect-byte/adeptecom-website` (branch `main`). Every push — yours or the
weekly SEO agent's — publishes automatically once this is set up.

> Do this once. After that, the whole pipeline is hands-off.

## 1. Connect the private repo (SSH deploy key)
1. hPanel → your website → **Advanced → GIT**.
2. Hostinger shows an **SSH key** → copy it.
3. GitHub → repo **Settings → Deploy keys → Add deploy key** → paste it (name it "Hostinger", read-only is fine) → **Add key**.
4. Back in Hostinger **GIT**, add the repository:
   - **Repository (SSH):** `git@github.com:clicknkonnect-byte/adeptecom-website.git`
   - **Branch:** `main`
   - **Install path:** `public_html`
   - **Create.**

## 2. Turn on auto-deployment (webhook)
1. In Hostinger GIT → enable **Auto-deployment** → copy the **webhook URL**.
2. GitHub → repo **Settings → Webhooks → Add webhook**:
   - **Payload URL:** the Hostinger webhook URL
   - **Content type:** `application/json`
   - **Event:** *Just the push event*
   - **Add webhook.**

Now every push to `main` auto-deploys to `public_html`.

## 3. Point the domain
- Domain `adeptecom.com` is on Hostinger → in **hPanel → Domains**, point it to this hosting plan (usually automatic if domain + hosting are on the same account).
- Canonical is **https://www.adeptecom.com** (enforced by `.htaccess`: HTTPS + www).

## 4. SSL
- hPanel → **Security → SSL** → install/activate free SSL for the domain.
- Once active, `.htaccess` forces HTTPS automatically.

## 5. Verify
- Visit `https://www.adeptecom.com` — should load the site.
- Test auto-deploy: after any push, confirm the change appears live within ~1 minute.

---

## Notes
- **Static site** — no build step. Files serve straight from `public_html`.
- **Contact form** submits via **WhatsApp** (client-side JS); `contact.php` is a PHP fallback (works on Hostinger).
- **Email:** set up `info@adeptecom.com` mailbox in hPanel → Emails.
- **SEO files** live at the site root: `sitemap.xml`, `robots.txt`, `llms.txt`.
- **Search Console:** verify the domain, submit `https://www.adeptecom.com/sitemap.xml`, and drop weekly exports into `docs/gsc-latest.csv` for the weekly agent.
- The weekly SEO agent (GitHub → Hostinger) only reaches the live site through the auto-deploy webhook above — if you ever deploy by manual upload instead, the agent's changes won't appear until you re-pull/re-upload.
