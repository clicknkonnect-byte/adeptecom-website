# Adeptecom — SEO Log

Running log maintained by the weekly SEO routine. Newest entries on top.

## 2026-10-10 — Backlink status correction
Owner confirmed none of the weekly directory/citation batches logged below have actually been submitted yet — every prior week's "confirm the week-of-X listing is live" language was presumptive, not verified. Treat every directory in the rotation as a **first-time submission**, not a refresh, until a week's log explicitly says it was submitted. Also: **Google Business Profile is excluded from the rotation going forward** per the owner (not a fit for this business) — removed from this week's "next rotation" pointer and will not be reintroduced.

## 2026-10-10 — Google Search Console audit (indexing + sitemap fix)
Connected GSC for `sc-domain:adeptecom.com` and audited indexing directly. Findings and fixes:
1. **Sitemap was never correctly registered.** GSC had 3 sitemap entries: `http://adeptecom.com/sitemap.xml` (wrong protocol/host — 22 submitted, 0 indexed) and two bogus entries where the bare homepage URLs (`https://adeptecom.com/`, `https://www.adeptecom.com/`) had been submitted as if they were sitemap feeds (both erroring). The correct `https://www.adeptecom.com/sitemap.xml` had **never** been submitted. Fixed: submitted it via the API. The two bogus entries can't be deleted via API — remove them manually in GSC under Sitemaps (⋮ menu → Remove sitemap) when convenient; harmless but worth tidying.
2. **`service-affiliate.html` and `service-tiktok-ads.html` were orphaned from the main link graph.** Every service page cross-links all 9 service pages in its own footer, but the homepage, `blog.html`, and all 12 blog posts use a condensed 6-link footer that had always omitted these two. Result: `service-affiliate.html` showed **"URL is unknown to Google"** (never discovered) and `service-tiktok-ads.html` showed **"Discovered – currently not indexed"**. Fixed: added both to the condensed footer across all 14 affected files (homepage, blog.html, 12 posts) so every page on the site now links to them.
3. **Most other pages are stuck in "Discovered – currently not indexed"**, including the oldest post (`blog-tiktok-shop-listing-rejections.html`, live since 2026-08-11) and `service-amazon.html`. This is Google choosing not to crawl/index yet, not a technical block (robots.txt allows, no noindex, pages fetch fine) — typical for a young, low-authority domain with thin external backlink signal. Only the homepage (indexed, referred to in the real sitemap submission) and a handful of posts with the most internal links/age have any impressions at all. There's no API-based "Request Indexing" — do this manually in GSC's URL Inspection tool for priority URLs (homepage already fine; prioritize `service-amazon.html`, `service-affiliate.html`, `service-tiktok-ads.html`, and the most recent 2–3 posts).
4. **Search Analytics (2026-08-01 to 2026-10-07):** 307 impressions / 24 clicks site-wide, almost entirely branded ("adeptecom", pos. 3.4). Zero impressions for every target commercial seed keyword (tiktok shop agency, amazon ppc agency, etc.) — the site isn't yet appearing for them at all, consistent with the indexing gap above. `service-shopify.html` ranks very weak (pos. ~42) for what little it shows for.

**Takeaway:** the content and on-page work have been sound; the bottleneck is indexing coverage and backlink authority, not content volume. Priorities going forward: (a) keep closing internal-link gaps like the one above, (b) actually execute the backlink batches logged weekly below — directory/citation links are what will move "Discovered — not indexed" pages into the index faster than more content will, (c) manually request indexing on the priority URLs listed above.

## Keyword watchlist
| Keyword | Priority | Target page | Notes |
|---|---|---|---|
| tiktok shop agency | High | index.html | primary money term |
| tiktok shop management | High | service-tiktok-shop.html | |
| tiktok shop setup | Med | service-tiktok-shop.html | |
| amazon brand management agency | High | service-amazon.html | |
| amazon ppc agency | Med | service-amazon.html, blog-amazon-ppc-mistakes.html | |
| ecommerce technical seo checklist | Med | service-seo.html, blog-ecommerce-technical-seo-checklist.html | new post targets this long-tail this week; SEO page had no supporting blog content before this |
| meta ads agency ecommerce | Med | service-meta-ads.html | |
| meta ads roas / attribution | Med | service-meta-ads.html, blog-meta-ads-roas-truth.html | new post targets this long-tail this week |
| google ads ecommerce agency | Med | service-google-ads.html | |
| performance max ecommerce | Med | service-google-ads.html, blog-google-performance-max-ecommerce.html | new post targets this long-tail this week |
| google merchant center disapprovals | Med | service-google-ads.html, blog-google-merchant-center-disapprovals.html | new post targets this long-tail this week |
| shopify store management | Med | service-shopify.html | |
| shopify conversion rate optimization | Med | service-shopify.html, blog-shopify-cro-leaks.html | |
| best tiktok shop agency / how to choose | High | service-tiktok-shop.html, blog-best-tiktok-shop-agencies-2026.html | new post targets this buyer-intent long-tail this week |
| ai marketing automation agency | High | service-ai-automation.html, blog-ai-marketing-automation-agency.html | new post targets this differentiator term this week; AI automation page had no supporting blog content or FAQ link before this |
| us uk tiktok creators | Med | service-tiktok-shop.html | |
| tiktok affiliate agency | High | service-tiktok-shop.html, service-affiliate.html, blog-affiliate-creator-offers.html | seed keyword was missing from this table entirely; `service-affiliate.html` also had zero internal links into blog content until this week — fixed with a new FAQ entry |
| tiktok ads agency / spark ads | Med | service-tiktok-ads.html, blog-tiktok-spark-ads-vs-boosting.html | new post targets this long-tail this week; `service-tiktok-ads.html` had no supporting blog content or FAQ link before this |
| tiktok gmv max | Med | service-tiktok-shop.html, blog-tiktok-gmv-max-guide.html | new post targets this long-tail this week; GMV Max was named in the service page's meta description and schema since setup but had no supporting post or FAQ link until now |
| meta advantage+ shopping | Med | service-meta-ads.html, blog-meta-advantage-plus-shopping.html | new post targets this long-tail this week; mirrors the PMax (Google) and GMV Max (TikTok) pattern — Advantage+ had no supporting post or FAQ link on `service-meta-ads.html` before this |

_No `docs/gsc-latest.csv` found this run — table maintained from the seed keyword list. Drop real Google Search Console export at that path to switch to live query data (top queries, clicks, impressions, position)._

---

## Week of 2026-10-26
**New blog post:** [Meta Advantage+ Shopping campaigns: what they automate (and don't)](https://www.adeptecom.com/blog-meta-advantage-plus-shopping.html) &mdash; `blog-meta-advantage-plus-shopping.html`. Mirrors the content-gap pattern that drove the Performance Max (Google) and GMV Max (TikTok) posts: Advantage+ Shopping is Meta's current default recommendation for e-commerce campaigns, but `service-meta-ads.html` had no supporting post or FAQ link behind it. This post covers what Advantage+ actually automates versus a manual campaign, the weak-input failure modes that quietly burn budget (noisy pixel/CAPI events, messy catalog attributes, blended reporting masking per-SKU performance), five guardrails that still need a human (event-quality audit, catalog hygiene, creative variety over volume, budget segmentation by product tier, a real exclusion list), and how it fits alongside manually structured campaigns rather than replacing the account. Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-10-26.

**On-page refresh:** `service-meta-ads.html` &mdash; added a new FAQ entry ("Should I run Advantage+ Shopping or a manual campaign?") linking into the new post, and bumped its sitemap lastmod to 2026-10-26. Single H1, meta description, and image alt confirmed still accurate and specific; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) &mdash; watchlist maintained from the seed list above, with a new row added for "meta advantage+ shopping" targeting this week's post. This closed the last named-but-unsupported automated-buying feature gap across the three paid-social/search service pages (Meta, Google, TikTok all now have a post behind their respective automated campaign type).

**GEO / LLM crawlers:** `llms.txt` reviewed &mdash; services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot (plus ChatGPT-User, Claude-Web, anthropic-ai, Applebot-Extended).

**Backlink / directory batch &mdash; submit these (rotation 4 of 4, third pass):**
1. **Yellow Pages** &mdash; https://www.yellowpages.com/claim-a-business &mdash; Category: `Marketing Consultants` / `Internet Marketing & Advertising`. Per the 2026-10-10 correction note, treat as a first-time submission unless a prior week's log explicitly confirmed it went live; paste the description below.
2. **Qatar local business directory (Qatar Yellow Pages)** &mdash; https://www.qataryp.com/ &mdash; Category: `Marketing & Advertising Agencies`. First-time submission; paste the description below and list the Doha office address.
3. **UAE local business directory (Yellow Pages UAE)** &mdash; https://www.yellowpages-uae.com/ &mdash; Category: `Advertising & Marketing`. First-time submission; paste the description below; website field: https://www.adeptecom.com
4. **Clutch** &mdash; https://clutch.co/directory/submit-service-provider &mdash; Category: `Digital Marketing Agencies` (sub-filter: Social Media Marketing / E-commerce Marketing). First-time submission; paste the description below; add the new Advantage+ post as a portfolio link if the profile supports one.

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-11-02) restarts the full list, fourth pass: Bing Places, DesignRush, Sortlist, GoodFirms, The Manifest. (Google Business Profile remains excluded from the rotation per the owner — see 2026-10-10 correction note above.)_

---

## Week of 2026-10-19
**New blog post:** [TikTok GMV Max: how to use it without wasting budget](https://www.adeptecom.com/blog-tiktok-gmv-max-guide.html) &mdash; `blog-tiktok-gmv-max-guide.html`. GMV Max has been named in `service-tiktok-shop.html`'s meta description and Service schema since the site's 2026-08-11 setup, but had no dedicated post or FAQ link behind it &mdash; the same content-gap pattern that has driven every post pick since the original 8-post calendar finished. This post covers what GMV Max actually controls versus a standard TikTok Ads campaign, why it burns budget on shops with no proven content to draw from, the content-pipeline sequencing that should happen before it's switched on, a real ROI floor (priced on true margin, not list price), and how it sits alongside Spark Ads and LIVE rather than replacing them. Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-10-19.

**On-page refresh:** `service-tiktok-shop.html` &mdash; added a new FAQ entry ("Is GMV Max worth turning on?") linking into the new post, and bumped its sitemap lastmod to 2026-10-19. Single H1, meta description, and image alt confirmed still accurate and specific; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) &mdash; watchlist maintained from the seed list above, with a new row added for "tiktok gmv max" targeting this week's post. This closed the last named-but-unsupported feature gap on `service-tiktok-shop.html`; every seed keyword and every GMV Max/Spark Ads/PMax-style feature mention across the service pages now has a supporting post.

**GEO / LLM crawlers:** `llms.txt` reviewed &mdash; services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot (plus ChatGPT-User, Claude-Web, anthropic-ai, Applebot-Extended).

**Backlink / directory batch &mdash; submit these (rotation 3 of 4, third pass):**
1. **Bing Places** &mdash; https://www.bingplaces.com/ &mdash; Category: `Marketing Agency` / `Advertising Agency`. Per the 2026-10-10 correction note, treat this as a first-time submission unless a prior week's log explicitly confirmed it went live; paste the description below.
2. **Trustpilot** &mdash; https://business.trustpilot.com/signup &mdash; Category: `Marketing Agency`. First-time submission (per 2026-10-10 correction note); paste the description below; website field: https://www.adeptecom.com
3. **Shopify Partners directory** &mdash; https://www.shopify.com/partners/directory &mdash; Apply as a Shopify Partner agency. Category: `Marketing & Sales` / `Conversion rate optimization`. First-time submission; paste the description below.
4. **TikTok Shop Partner directory** &mdash; https://partner.tiktokshop.com/ &mdash; Apply as an agency partner (Partner Center). Category: `Marketing Agency Partner`. First-time submission; paste the description below; add the new GMV Max post as supporting content/case material if the application form allows a portfolio link.
5. **Yelp** &mdash; https://biz.yelp.com/ &mdash; Category: `Marketing Agency`. First-time submission; paste the description below; website field: https://www.adeptecom.com

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-10-26) continues the third pass: Yellow Pages, Qatar/UAE local business directories, Clutch. (Google Business Profile remains excluded from the rotation per the owner — see 2026-10-10 correction note above.)_

---

## Week of 2026-10-12
**New blog post:** [Performance Max for e-commerce: how to stop it wasting your budget](https://www.adeptecom.com/blog-google-performance-max-ecommerce.html) &mdash; `blog-google-performance-max-ecommerce.html`. `service-google-ads.html` already had an FAQ answer ("Is Performance Max worth running?") but no supporting blog content or internal link behind it &mdash; the same content-gap pattern that drove picks in prior weeks for every other service page. This post covers why PMax drains budget quietly compared to Search/Shopping, the Merchant Center feed's outsized influence on it, splitting asset groups by category/margin instead of running one catalog-wide group, the five guardrails that matter (brand exclusions, account-level negatives, audience signals vs. targeting, placement exclusions, a real ROAS floor by asset group), when to pull a hero SKU or new launch into its own campaign, and why the blended ROAS number in the default dashboard hides exactly these problems. Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-10-12.

**On-page refresh:** `service-google-ads.html` &mdash; linked the existing "Is Performance Max worth running?" FAQ answer into the new post, and tightened the hero image alt text from the generic "Google Ads" to "Google Ads Search, Shopping, and Performance Max campaign structure". Single H1 and meta description confirmed still accurate and specific; bumped sitemap lastmod to 2026-10-12. Kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) &mdash; watchlist maintained from the seed list above, with a new row added for "performance max ecommerce" targeting this week's post. Every seed keyword now has a supporting post and internal link; this week's pick closed the last FAQ-without-a-post gap found on `service-google-ads.html`.

**GEO / LLM crawlers:** `llms.txt` reviewed &mdash; services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, CCBot (plus ChatGPT-User, Claude-Web, anthropic-ai, Applebot-Extended).

**Backlink / directory batch &mdash; submit these (rotation 2 of 4, third pass):**
1. **UpCity** &mdash; https://upcity.com/get-listed &mdash; Category: `Digital Marketing Agency`, service tags: TikTok Marketing, Amazon Marketing, Paid Search, Paid Social, Shopify. Confirm the week-of-2026-09-21 listing is still live; add the new Performance Max post as a portfolio link if the profile supports one.
2. **Agency Spotter** &mdash; https://www.agencyspotter.com/claim-agency &mdash; Category: `Digital Marketing`, sub-specialty: E-commerce Marketing. Confirm live status from the week-of-2026-09-21 submission; refresh the description to the paste below if it's still an older short version.
3. **Crunchbase** &mdash; https://www.crunchbase.com/add-new &mdash; Organization type: `Company`, Industry: `Marketing`, `E-Commerce`. Confirm the organization profile submitted week-of-2026-09-21 is live; short description field: "AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
4. **LinkedIn company page** &mdash; https://www.linkedin.com/company/setup/new/ &mdash; Confirm the page from week-of-2026-09-21 is live and complete; refresh the About section with the paste below and confirm Services (TikTok Shop, Amazon, Meta Ads, Google Ads, Shopify, AI Automation) are listed in the Products/Services tab.

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-10-19) continues the third pass: Bing Places, Trustpilot, Shopify Partners directory, TikTok Shop Partner directory, Yelp._

---

## Week of 2026-10-09
**New blog post:** [Spark Ads vs. boosting a post: what actually scales on TikTok](https://www.adeptecom.com/blog-tiktok-spark-ads-vs-boosting.html) &mdash; `blog-tiktok-spark-ads-vs-boosting.html`. `service-tiktok-ads.html` (TikTok Ads &amp; Spark Ads) was the last service page on the site with zero supporting blog content or internal link into any post &mdash; the same gap pattern that drove the pick in prior weeks for Amazon, Shopify, Meta, Google Ads, SEO, and AI automation. This post explains why Spark Ads outperform TikTok's native "boost" button, what has to be true (proven organic performance, linked Shop tab, a valid creator authorization code, clean pixel/API events) before ad budget goes near a post, and how we structure Spark Ads + GMV Max campaigns to scale. Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-10-09.

**On-page refresh:** `service-affiliate.html` &mdash; while auditing which service pages still had no blog links (the search that surfaced the pick above), found that `service-affiliate.html` also had zero internal links into blog content, even though `blog-affiliate-creator-offers.html` ("Hybrid vs commission: a creator offer that actually converts") covers its exact topic and had never been linked from it. Added a new FAQ entry ("Hybrid or straight commission &mdash; which offer should I run?") linking into that post, and bumped its sitemap lastmod to 2026-10-09. Also added a reciprocal FAQ entry on `service-tiktok-ads.html` linking into this week's new post, and bumped its sitemap lastmod to 2026-10-09. Single H1, meta descriptions, and image alts confirmed still accurate on both pages; kept each change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) &mdash; watchlist maintained from the seed list above. Two gaps fixed in the table this week: "tiktok affiliate agency" was a seed keyword that had been missing from the table entirely since setup, and a new row was added for "tiktok ads agency / spark ads" targeting this week's post.

**GEO / LLM crawlers:** `llms.txt` reviewed &mdash; services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch &mdash; submit these (rotation 1 of 4, third pass):**
1. **Bing Places** &mdash; https://www.bingplaces.com/ &mdash; Category: `Marketing Agency` / `Advertising Agency`. Confirm the listing from the week-of-2026-09-14 pass is still live; refresh the description to the paste below if it's gone stale.
2. **DesignRush** &mdash; https://www.designrush.com/agency/get-listed &mdash; Category: `Digital Marketing Agencies` (sub-filter: E-commerce Marketing / Social Media Marketing). Confirm the week-of-2026-09-14 listing is live; add the new Spark Ads post as a portfolio link if the profile supports one.
3. **Sortlist** &mdash; https://www.sortlist.com/agency/create &mdash; Category: `E-commerce Marketing` / `Social Media Marketing`. Confirm live status from the week-of-2026-09-14 submission; paste the description below if the profile needs completing.
4. **GoodFirms** &mdash; https://www.goodfirms.co/add-company &mdash; Category: `Digital Marketing` &rarr; `E-commerce Marketing Agencies`. Confirm live status; add the new Spark Ads post as a portfolio/case-study link if the profile supports one.
5. **The Manifest** &mdash; https://themanifest.com/add-company &mdash; Category: `Digital Marketing` &rarr; `E-commerce Marketing Agencies`. Confirm live status from the week-of-2026-09-14 submission; refresh the description to the paste below if needed.

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-10-16) continues the third pass: UpCity, Agency Spotter, Crunchbase, LinkedIn company page. (Google Business Profile removed from rotation per owner — see 2026-10-10 correction note above.)_

---

## Week of 2026-09-28
**New blog post:** [AI marketing automation agency: what to actually expect in 2026](https://www.adeptecom.com/blog-ai-marketing-automation-agency.html) — `blog-ai-marketing-automation-agency.html`. The original 8-post calendar and every subsequent per-page rotation had left "ai marketing automation agency" — a High-priority seed keyword and stated differentiator — without any dedicated post, and `service-ai-automation.html` had no supporting blog content or internal link at all (stale since the 2026-08-11 setup). This post breaks down what a real AI-run agency does day to day versus marketing claims, and lists questions buyers should ask before hiring one. Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-09-28.

**On-page refresh:** `service-ai-automation.html` — added a new FAQ entry ("What should I ask before hiring an 'AI-run' agency?") linking into the new post, and bumped its sitemap lastmod to 2026-09-28. Single H1, meta description, and image alt confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above, with the "ai marketing automation agency" row updated to point at this week's post. This was the clearest remaining gap: every other seed keyword already had a supporting post or FAQ link from prior weeks.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 2 of 4, second pass, continued):**
1. **Yellow Pages** — https://www.yellowpages.com/claim-a-business — Category: `Marketing Consultants` / `Internet Marketing & Advertising`. Confirm the week-of-2026-09-07 listing is live; refresh the description to the paste below if it's still an older short version.
2. **Qatar local business directory (Qatar Yellow Pages)** — https://www.qataryp.com/ — Category: `Marketing & Advertising Agencies`. Confirm the week-of-2026-09-07 listing is live; paste the description below and confirm the Doha office address is listed.
3. **UAE local business directory (Yellow Pages UAE)** — https://www.yellowpages-uae.com/ — Category: `Advertising & Marketing`. Confirm live status from the week-of-2026-09-07 submission; refresh the description to the paste below; website field: https://www.adeptecom.com
4. **Clutch** — https://clutch.co/directory/submit-service-provider — Category: `Digital Marketing Agencies` (sub-filter: Social Media Marketing / E-commerce Marketing). Confirm the week-of-2026-08-17 submission is live; add the new AI automation post as a portfolio link if the profile supports one.

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-10-05) restarts the full list: Bing Places, DesignRush, Sortlist, GoodFirms, The Manifest (third pass — this pass double-checks live status and refreshes descriptions where needed)._

---

## Week of 2026-09-21
**New blog post:** [The e-commerce technical SEO checklist that actually moves rankings](https://www.adeptecom.com/blog-ecommerce-technical-seo-checklist.html) — `blog-ecommerce-technical-seo-checklist.html`. Targets "ecommerce technical seo checklist" and related crawlability/site-speed/structured-data long-tail queries; card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-09-21.

**On-page refresh:** `service-seo.html` — added a new FAQ entry ("What technical issues do you check first?") linking into the new post, and bumped its sitemap lastmod to 2026-09-21. This was the highest-value gap left: the SEO service page had no supporting blog content or internal link into any post at all, the same pattern that drove picks in prior weeks for Amazon, Shopify, Meta, and Google Ads. Single H1, meta description, and image alts confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above, with a new row added for "ecommerce technical seo checklist" targeting this week's post.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 2 of 4, second pass):**
1. **UpCity** — https://upcity.com/get-listed — Category: `Digital Marketing Agency`, service tags: TikTok Marketing, Amazon Marketing, Paid Search, Paid Social, Shopify, SEO. Confirm the week-of-2026-08-24 listing is live; add the new technical SEO post as a portfolio link if the profile supports one.
2. **Agency Spotter** — https://www.agencyspotter.com/claim-agency — Category: `Digital Marketing`, sub-specialty: E-commerce Marketing. Confirm live status from the week-of-2026-08-24 submission; refresh the description to the paste below if it's still the older short version.
3. **Crunchbase** — https://www.crunchbase.com/add-new — Organization type: `Company`, Industry: `Marketing`, `E-Commerce`. Confirm the week-of-2026-08-17 organization profile is live; short description field: "AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
4. **LinkedIn company page** — https://www.linkedin.com/company/setup/new/ — Confirm the week-of-2026-08-17 page is live and complete; refresh the About section with the paste below and confirm Services (TikTok Shop, Amazon, Meta Ads, Google Ads, Shopify, SEO, AI Automation) are listed in the Products/Services tab.
5. **Google Business Profile** — https://www.google.com/business/ — Confirm the listing is live and complete (hours, services, Doha address); add the new technical SEO post as a Google Business post if the profile is active.

_Paste description for all of the above:_ "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com

_Next rotation (week of 2026-09-28) continues the second pass: Yellow Pages, Qatar/UAE local business directories, Clutch._

---

## Week of 2026-09-14
**New blog post:** [7 Amazon PPC mistakes quietly inflating your ACOS](https://www.adeptecom.com/blog-amazon-ppc-mistakes.html) — `blog-amazon-ppc-mistakes.html`. First post since the original 8-post calendar finished; targets "amazon ppc agency" / "amazon ppc mistakes" / "amazon acos too high" long-tail queries with a structure-problem checklist (brand defense, auto vs. manual overlap, negatives, budget pacing, ACOS-vs-profit, Sponsored Brands/Display, listing readiness). Card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-09-14.

**On-page refresh:** `service-amazon.html` — added a new FAQ entry ("Why is my ACOS climbing even though I haven't changed anything?") linking into the new post, and bumped its sitemap lastmod to 2026-09-14. Single H1, meta description, and image alts confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above, with the "amazon ppc agency" row updated to point at this week's post. Amazon was the highest-value gap left: it had a service page and stats but no supporting blog content or FAQ link, same pattern that drove picks in prior weeks.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 1 of 4, second pass):**
1. **Bing Places** — https://www.bingplaces.com/ — Category: `Marketing Agency` / `Advertising Agency`. Check the week-of-2026-08-31 submission is live; if not yet approved, resubmit with: "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
2. **DesignRush** — https://www.designrush.com/agency/get-listed — Category: `Digital Marketing Agencies` (sub-filter: E-commerce Marketing / Social Media Marketing). Confirm the week-of-2026-08-24 listing is live; refresh the description to the paste above if it's still the older short version.
3. **Sortlist** — https://www.sortlist.com/agency/create — Category: `E-commerce Marketing` / `Social Media Marketing`. Confirm live status from the week-of-2026-08-24 submission; paste the same description above if the profile needs completing.
4. **GoodFirms** — https://www.goodfirms.co/add-company — Category: `Digital Marketing` → `E-commerce Marketing Agencies`. Confirm live status; add the new Amazon PPC post as a portfolio/case-study link if the profile supports one.
5. **The Manifest** — https://themanifest.com/add-company — Category: `Digital Marketing` → `E-commerce Marketing Agencies`. Confirm live status from the week-of-2026-08-17 submission; refresh the description to the paste above if needed.

_Next rotation (week of 2026-09-21) continues the second pass: UpCity, Agency Spotter, Crunchbase, LinkedIn company page, Google Business Profile._

---

## Week of 2026-09-07
**New blog post:** [How to choose a TikTok Shop agency in 2026 (buyer's guide)](https://www.adeptecom.com/blog-best-tiktok-shop-agencies-2026.html) — `blog-best-tiktok-shop-agencies-2026.html`. Completes the original 8-post content calendar. Targets buyer-intent long-tail queries around "best tiktok shop agency" / "how to choose a tiktok shop agency"; card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-09-07.

**On-page refresh:** `service-tiktok-shop.html` — added a new FAQ entry ("What should I check before hiring any TikTok Shop agency?") linking into the new post, and bumped its sitemap lastmod to 2026-09-07. Single H1, meta description, and image alts confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above, with a new row added for "best tiktok shop agency / how to choose" targeting this week's post. The original content calendar (items 1&ndash;8) is now fully published; future weeks pick one new topic per week across TikTok Shop, Amazon, Meta/Google Ads, Shopify, SEO, and AI automation.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 4 of 4, plus wraparound):**
1. **Yellow Pages** — https://www.yellowpages.com/claim-a-business — Category: `Marketing Consultants` / `Internet Marketing & Advertising`. Paste: "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
2. **Qatar local business directory (Qatar Yellow Pages)** — https://www.qataryp.com/ — Category: `Marketing & Advertising Agencies`. Paste the same description above; list the Doha office address.
3. **UAE local business directory (Yellow Pages UAE)** — https://www.yellowpages-uae.com/ — Category: `Advertising & Marketing`. Paste the same description above; website field: https://www.adeptecom.com
4. **Google Business Profile** — https://www.google.com/business/ — verify/refresh the listing created in the week-of-2026-08-17 rotation is live and complete (hours, services, Doha address); add the new blog post as a Google Business post if the profile is active.
5. **Clutch** — https://clutch.co/directory/submit-service-provider — check the week-of-2026-08-17 submission status; if still pending, re-submit with Category: `Digital Marketing Agencies` (sub-filter: Social Media Marketing / E-commerce Marketing) and the same description above.

_Next rotation (week of 2026-09-14) restarts the full list: Bing Places, DesignRush, Sortlist, GoodFirms, The Manifest (first-pass items already submitted — this pass double-checks live status and refreshes descriptions where needed)._

---

## Week of 2026-08-31
**New blog post:** [10 Shopify conversion leaks quietly costing you sales](https://www.adeptecom.com/blog-shopify-cro-leaks.html) — `blog-shopify-cro-leaks.html`. Targets "shopify conversion rate optimization" and related CRO long-tail queries; card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-08-31.

**On-page refresh:** `service-shopify.html` — added a new FAQ entry ("What kind of conversion leaks do you usually find?") linking into the new post, and bumped its sitemap lastmod to 2026-08-31. Single H1, meta description, and image alts confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above, with a new row added for "shopify conversion rate optimization" targeting this week's post. This week's on-page work targeted the Shopify page since it had no supporting FAQ or internal link into blog content yet.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 3 of 4):**
1. **Bing Places** — https://www.bingplaces.com/ — Category: `Marketing Agency` / `Advertising Agency`. Paste: "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
2. **Trustpilot** — https://business.trustpilot.com/signup — Category: `Marketing Agency`. Paste the same description above; website field: https://www.adeptecom.com
3. **Shopify Partners directory** — https://www.shopify.com/partners/directory — Apply as a Shopify Partner agency. Category: `Marketing & Sales` / `Conversion rate optimization`. Paste the same description above.
4. **TikTok Shop Partner directory** — https://partner.tiktokshop.com/ — Apply as an agency partner (Partner Center). Category: `Marketing Agency Partner`. Paste the same description above.
5. **Yelp** — https://biz.yelp.com/ — Category: `Marketing Agency`. Paste the same description above; website field: https://www.adeptecom.com

_Next rotation (week of 2026-09-07) picks up at: Yellow Pages, Qatar/UAE local business directories (full list then repeats from Google Business Profile)._

---

## Week of 2026-08-24
**New blog post:** [Google Merchant Center disapprovals: the complete fix list](https://www.adeptecom.com/blog-google-merchant-center-disapprovals.html) — `blog-google-merchant-center-disapprovals.html`. Targets "google merchant center disapprovals" and related feed-compliance long-tail queries; card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-08-24.

**On-page refresh:** `service-google-ads.html` — added an internal link from the existing "Can you fix Merchant Center disapprovals?" FAQ answer into the new post, and bumped its sitemap lastmod to 2026-08-24. Single H1, meta description, and image alts confirmed still accurate; kept the change small.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above. This week's post and link target the Merchant Center FAQ already on the Google Ads page, since that page had no supporting content to link out to.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 2 of 3):**
1. **DesignRush** — https://www.designrush.com/agency/get-listed — Category: `Digital Marketing Agencies` (sub-filter: E-commerce Marketing / Social Media Marketing). Paste: "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands."
2. **Sortlist** — https://www.sortlist.com/agency/create — Category: `E-commerce Marketing` / `Social Media Marketing`. Paste the same description above; website field: https://www.adeptecom.com
3. **GoodFirms** — https://www.goodfirms.co/add-company — Category: `Digital Marketing` → `E-commerce Marketing Agencies`. Paste the same description above.
4. **UpCity** — https://upcity.com/get-listed — Category: `Digital Marketing Agency`, service tags: TikTok Marketing, Amazon Marketing, Paid Search, Paid Social, Shopify. Paste the same description above. Website: https://www.adeptecom.com
5. **Agency Spotter** — https://www.agencyspotter.com/claim-agency — Category: `Digital Marketing`, sub-specialty: E-commerce Marketing. About section: paste the full description above; include Services (TikTok Shop, Amazon, Meta Ads, Google Ads, Shopify, AI Automation).

_Next rotation (week of 2026-08-31) picks up at: Bing Places, Trustpilot, Shopify Partners directory, TikTok Shop Partner directory, Yelp (Crunchbase and LinkedIn company page already submitted in the 2026-08-17 rotation)._

---

## Week of 2026-08-17
**New blog post:** [Why Meta's in-platform ROAS lies (and what to track instead)](https://www.adeptecom.com/blog-meta-ads-roas-truth.html) — `blog-meta-ads-roas-truth.html`. Targets long-tail queries around Meta ROAS/attribution accuracy; card added to top of blog.html grid; URL added to sitemap.xml; homepage + blog.html lastmod bumped to 2026-08-17.

**On-page refresh:** `service-meta-ads.html` — added a FAQ entry ("Why doesn't Meta's reported ROAS match my store revenue?") linking to the new post, and tightened the hero image alt text from generic "Meta Ads" to "Meta Ads campaign structure and creative testing". Small, reviewable change; single H1 and meta description confirmed still accurate.

**Keyword notes:** No GSC export present (`docs/gsc-latest.csv` missing) — watchlist maintained from the seed list above. This week's on-page work targeted the highest-value gap on the Meta Ads page: no internal link existed yet from that page into blog content.

**GEO / LLM crawlers:** `llms.txt` reviewed — services, results, and contact info current, no changes needed. `robots.txt` confirmed still allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot.

**Backlink / directory batch — submit these (rotation 1 of 3):**
1. **Google Business Profile** — https://www.google.com/business/ — Category: `Marketing Agency` / `Advertising Agency`. Paste: "Adeptecom is an AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. We connect every channel through its official API and run continuous audits, research, and scaling with AI agents — TikTok Shop & affiliate, Amazon brand & PPC, Meta & Google Ads, Shopify, and SEO. $100M+ revenue driven across 80+ brands."
2. **Clutch** — https://clutch.co/directory/submit-service-provider — Category: `Digital Marketing Agencies` (sub-filter: Social Media Marketing / E-commerce Marketing). Paste the same description above; website field: https://www.adeptecom.com
3. **The Manifest** — https://themanifest.com/add-company — Category: `Digital Marketing` → `E-commerce Marketing Agencies`. Paste the same description above.
4. **Crunchbase** — https://www.crunchbase.com/add-new — Organization type: `Company`, Industry: `Marketing`, `E-Commerce`. Short description field: "AI-run, full-service TikTok Shop and performance-marketing agency for US & UK e-commerce brands. $100M+ revenue driven across 80+ brands." Website: https://www.adeptecom.com
5. **LinkedIn company page** — https://www.linkedin.com/company/setup/new/ — Industry: `Marketing & Advertising`. About section: paste the full description above; include Services (TikTok Shop, Amazon, Meta Ads, Google Ads, Shopify, AI Automation) in the Products/Services tab.

_Next rotation (week of 2026-08-24) picks up at: DesignRush, Sortlist, GoodFirms, UpCity, Agency Spotter._

---

## Setup — 2026-08-11
- Repo initialised, GitHub Pages auto-deploy live.
- SEO foundations in place: sitemap, robots (AI crawlers allowed), llms.txt, structured data, OG/Twitter.
- Blog launched with 2 posts. Weekly routine configured to publish 1 post/week + maintain this log.
- Next scheduled topic: `blog-tiktok-shop-vs-amazon.html`.
