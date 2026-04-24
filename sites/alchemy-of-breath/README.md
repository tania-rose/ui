# Alchemy of Breath — rebuild

Bilingual (EN/ES) Next.js 15 scaffold for https://alchemyofbreath.com/, generated via the BuilderBee workflow.

## Status

| Phase | Status |
|---|---|
| 1. Target design system (`ui-ux-pro-max` breathwork vertical) | ✅ `brand/target-designsystem.md` |
| 2. Bilingual scaffold with next-intl (EN + ES) | ✅ |
| 3. JSON-LD: `Organization`, `Person`, `Course`, `FAQPage`, `Offer` | ✅ rendered |
| 4. Before-After Transformation landing pattern | ✅ `src/app/[locale]/page.tsx` |
| 5. sitemap.ts / robots.ts / hreflang | ✅ |
| 6. Static export — verified to build 7 pages cleanly | ✅ tested |
| 7. Real brand extraction (`design-system-generator`) | ⏳ run locally |
| 8. Real photos (`web-builder`) | ⏳ run locally |

## Design choices (from `ui-ux-pro-max`)

- **Pattern**: Before-After Transformation — fits a coach/course brand better than Hero + Social Proof (used for Epical). 45% higher conversion on transformation-focused audiences.
- **Style**: Neumorphism — soft UI with multi-shadow depth, appropriate for breathwork/meditation.
- **Colors**: Lavender `#7C3AED` + mindful green `#059669` on `#FAF5FF`.
- **Typography**: Lora (heading) + Raleway (body).

These are defaults from the vertical query. Replace with extracted brand tokens from alchemyofbreath.com once the `design-system-generator` skill runs.

## Run locally

```bash
cd sites/alchemy-of-breath
npm install
npm run dev       # http://localhost:3000 (ES)  |  /en (EN)
npm run build     # produces out/ — static HTML for Vercel / GHL
```

## Or open `preview.html`

Double-click `preview.html` in your file manager. Fully-rendered homepage in any browser, no build step.

## Complete the build on your Mac

```bash
cd ~/Developer/builderbee-website-rebuild
claude
```

Then in Claude Code:

```
Run the design-system-generator on https://alchemyofbreath.com and
update sites/alchemy-of-breath/src/app/globals.css with the extracted
primary color, fonts, and radii. Then run web-builder to download
their logo and main photos into sites/alchemy-of-breath/public/images/.
```

Claude will replace the placeholder lavender with their real brand tokens and drop real photos in.
