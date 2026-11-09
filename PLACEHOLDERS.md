# Placeholders to fill before launch

While `showPlaceholders: true` in `src/data/site.ts`, every slot below that appears on a page has a dashed orange outline and a label.

## Content

- [ ] **Real app screenshots.** Replace the HTML mock screens (see README, “Replace the mock screens”):
  - Owner dashboard (home hero)
  - Start shift with the km error (home, km section)
  - Driver balance (home, hisab section; auto page)
  - Owner alerts (home, alerts section)
  - Add earning: cab, auto, lorry tons × rate (vehicle pages, features)
  - Report: cab and lorry with fuel average (vehicle pages, features)
- [ ] **Photography.** One photo per vehicle page, suggested shots written in the slot: cab at an airport pickup bay, autos at a stand, a loaded lorry at a highway dhaba. Real Indian roads and vehicles, no stock “business people”.
- [ ] **Testimonial.** Homepage, proof section. Real owner only: quote, name, city, number of vehicles. Remove the slot if you don’t have one yet.
- [ ] **Pricing.** `src/pages/pricing.astro`: plan names, prices, vehicle limits, trial, annual discount, payment methods. Then add `offers` to the `MobileApplication` schema in `src/data/schema.ts`.
- [ ] **Hindi review.** Ask a native Hindi speaker to read `src/i18n/home.ts`, `src/i18n/vehicles.ts`, `src/i18n/ui.ts` and the Hindi FAQ in `src/data/faq.ts`.
- [ ] **Road tax guide.** Have someone confirm the grace period wording for the states you sell in, then update the `updated:` date in the guide.

## Settings in `src/data/site.ts`

- [ ] `contactEmail` (currently `support@gaaditracker.in`)
- [ ] `contactPhone` (currently `+91 00000 00000`)
- [ ] `contactHours`
- [ ] `contactWhatsApp` (optional; empty hides it)
- [ ] `formspreeEndpoint`: create a form at formspree.io and paste its URL
- [ ] `ga4Id`: Google Analytics 4 measurement ID. Empty = no analytics at all
- [ ] `searchConsoleToken`: Google Search Console HTML-tag verification value
- [ ] `social`: profile URLs (also used in the Organization `sameAs`)
- [ ] `showPlaceholders`: set to `false` at launch

## Domain and hosting

- [ ] **Domain.** `src/data/site-url.mjs` is set to `https://gaaditracker.in`. Change it if the domain differs. Also update the sitemap line in `public/robots.txt` and the URLs in `public/llms.txt`.
- [ ] **GitHub Pages.** Workflow and `public/CNAME` to be added once you confirm the repo and domain.

## Google Play

- [ ] Rename the listings to **Gaadi Tracker Owner** and **Gaadi Tracker Driver** (copy in `store-listing.md`).
- [ ] Official badge artwork in `public/badges/google-play-en.png` and `google-play-hi.png`.
- [ ] Confirm both apps are public on Play so the badge links work.
- [ ] `public/.well-known/assetlinks.json`: replace both `REPLACE_WITH_…_SHA256_FINGERPRINT` values with the SHA-256 signing certificate fingerprints from Play Console → App integrity.

## Legal

- [ ] `src/pages/privacy-policy.mdx` and `src/pages/terms.mdx`: company legal name, registered address, grievance officer, deletion period, governing city, payment and refund terms. Have both reviewed by a lawyer.
