# SEO ops (internal)

Working files for the weekly SEO routine. Not linked from the site.

## Search Console data → `gsc-latest.csv`
To feed ranking data into the weekly SEO agent:

1. Google Search Console → **Performance** → set date range (last 28 days) → **Export → CSV**.
2. Rename the queries export to **`gsc-latest.csv`** and put it in this `docs/` folder.
3. Commit & push (or just replace it before the Monday run).

The weekly agent reads `docs/gsc-latest.csv` if present and uses it to prioritise which
keywords and pages to work on. If the file is missing, it falls back to the seed keyword list.

## `SEO-LOG.md`
The agent's running log — what it published, on-page changes, keyword notes, and the
weekly ready-to-submit backlink/directory batch.
