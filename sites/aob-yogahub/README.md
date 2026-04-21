# AoB YogaHub — rebuild

Bilingual (ES/EN) Next.js 15 scaffold for AoB YogaHub. Second client under the BuilderBee workflow.

## Status

| Phase | Status |
|---|---|
| Target design system (`ui-ux-pro-max` yoga vertical) | ✅ `brand/target-designsystem.md` |
| Bilingual scaffold with next-intl | ✅ |
| JSON-LD (`HealthAndBeautyBusiness` + `LocalBusiness` + `SportsActivityLocation`) | ✅ |
| sitemap.ts / robots.ts / hreflang | ✅ |
| Real brand extraction (`design-system-generator`) | ⏳ needs client URL — run locally |
| Real photos + copy (`web-builder`) | ⏳ needs client URL / GMB — run locally |

## Next step (on your machine)

Feed the actual AoB YogaHub URL + GMB into `/medspa-rebuild` (despite the name, the workflow applies to yoga studios too — the ui-ux-pro-max skill already selected the yoga design tokens).

```bash
cd sites/aob-yogahub
pnpm install
pnpm dev   # http://localhost:3000 (ES)  |  /en (EN)
```

Or open `preview.html` directly in a browser for an instant no-build look.

## Design tokens

See `src/app/globals.css`. Current palette is calm lavender (#7C3AED) + mindful green (#059669), Lora + Raleway — selected by `ui-ux-pro-max` for the yoga vertical. Replace with the client's real brand color once extracted.
