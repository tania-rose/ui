---
description: Rebuild a med spa website from a Google Business or existing site URL — bilingual (ES/EN), real photos, SEO-optimized, ready to push for GHL pitching.
argument-hint: <gmb-or-site-url> [business-slug]
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - WebFetch
  - Skill
---

# /medspa-rebuild

Rebuild a med spa website from a Google Business Profile URL, Google Maps listing, or existing website URL. Produces a bilingual (Spanish + English) Next.js site with the real business photos, the real brand colors, and the SEO structure described in `.claude/skills/README.md`. Output goes to `sites/<business-slug>/` and is committed to a dedicated branch for review / GHL pitch.

## Arguments

- `$1` — REQUIRED. Google Business URL, Google Maps URL, or existing website URL.
- `$2` — Optional slug. If omitted, derive from the business name (lowercased, hyphenated).

## Workflow (follow in order)

### Phase 0 — Setup

1. Parse `$1`. If it's a Google URL, resolve it to a business name + website URL via `WebFetch` / search. If no website exists, capture brand info from GMB only (address, phone, hours, reviews, photos).
2. Derive `SLUG` from `$2` or from the business name.
3. `mkdir -p sites/$SLUG && cd sites/$SLUG`.
4. Create a branch: `git checkout -b site/$SLUG` (from the current branch).

### Phase 1 — Extract the existing brand

Invoke the **design-system-generator** skill (Mode 2: Extract from Website).

- Input: the business's existing website URL.
- Output: `sites/$SLUG/brand/designsystem.md` and `sites/$SLUG/brand/showcase.html`.
- This captures the real fonts, colors, spacing, radii so we don't lose brand equity in the rebuild.
- If no website exists, skip this phase and rely on logo color extraction in Phase 3.

### Phase 2 — Decide the target design direction

Invoke the **ui-ux-pro-max** skill.

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness medical aesthetic" --design-system --persist -p "$BUSINESS_NAME"
```

- This outputs a target design system tuned for the med spa vertical: palette, typography pairing, anti-patterns.
- Reconcile with the extracted brand from Phase 1: keep the client's actual primary color, but upgrade typography / spacing / layout to the recommended system.
- Write the reconciled system to `sites/$SLUG/brand/target-designsystem.md`.

### Phase 3 — Build the site

Invoke the **web-builder** skill.

- Input: business URL + `target-designsystem.md` + downloaded photos.
- Configure for bilingual output: use `next-intl` with locales `es` (default) and `en`. Routes: `/(es)` and `/en/`.
- Override the default French copy templates in `web-builder/SKILL.md` — use Spanish labels (`Inicio`, `Servicios`, `Sobre Nosotros`, `Contacto`, `Reservar Cita`) and English labels (`Home`, `Services`, `About`, `Contact`, `Book Now`).
- Download all photos from the business website AND the Google Business Profile (use `curl` to `public/images/`). No stock.
- Required pages: Home, Services (with individual service pages for each treatment), About, Contact. Optional: Pricing, FAQ, Blog.
- Per-service page structure: see `.claude/skills/web-builder/references/page-structures.md` and the deep-dive structure in `.claude/skills/README.md`.

### Phase 4 — SEO & schema

Confirm the generated site includes:

- `MedicalClinic` + `LocalBusiness` + `FAQPage` schema JSON-LD
- `sitemap.ts`, `robots.ts`, `generateMetadata` per page
- `hreflang` tags for ES/EN
- Open Graph + Twitter Card metadata
- Google Business Profile `sameAs` link

### Phase 5 — GHL-ready export

After the Next.js site is verified:

```bash
cd sites/$SLUG && pnpm build && pnpm next export -o out
```

- This produces static HTML/CSS in `sites/$SLUG/out/` that can be zipped and imported into GoHighLevel.
- Also keep the Next.js source — it deploys to Vercel with one click for a live preview link.

### Phase 6 — Commit and push

```bash
git add sites/$SLUG
git commit -m "site($SLUG): generated from $1"
git push -u origin site/$SLUG
```

Print the branch name and preview instructions to the user.

## Notes

- **Do NOT default to a generic "elegant beige" aesthetic.** Per the ui-ux-pro-max industry rules, med spa should lean clinical-luxury (clean sans-serif + one editorial serif accent, generous whitespace, deep signature color + off-white, real photography).
- **Photography is non-negotiable.** If the GMB listing has fewer than 6 usable photos, flag it in the commit message — the pitch needs visual proof.
- **Booking CTA**: do not hardcode a booking link. Leave a clearly labeled `{{BOOKING_URL}}` placeholder so GHL can inject their funnel URL.
