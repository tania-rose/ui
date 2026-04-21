# BuilderBee

Agency playbook for local-business website rebuilds. One repo per client, same orchestrated workflow, pitch-ready output.

## What BuilderBee delivers

A rebuilt, bilingual (ES/EN), SEO-optimized website — generated from a client's Google Business Profile and existing site — in the time it used to take to send a proposal. Each rebuild:

- Preserves the client's actual brand color and fonts (not a template wash).
- Downloads real photos from their site + GMB (no stock).
- Ships with `MedicalClinic` / `LocalBusiness` / `FAQPage` / `Service` JSON-LD, `sitemap.ts`, `robots.ts`, `hreflang`.
- Exports as static HTML for GoHighLevel or deploys to Vercel for an instant preview link.

## Product lines

Each is a vertical-specific configuration of the same three-skill workflow. Target tone is set by the vertical.

| Product line | Target client | Design tone | Slug prefix |
|---|---|---|---|
| **Med Spa Rebuild** | Aesthetic medicine clinics, med spas | Clinical-luxury, soft pink/rose palette, editorial serif + clean sans | `medspa-` |
| **Yoga Hub** | Yoga studios, meditation centers, wellness communities | Calm lavender + mindful green, community-first, soft depth | `yoga-` |
| **(future)** | Dental, dermatology, pilates, etc. | Re-query `ui-ux-pro-max` with the vertical keywords | |

## Client portfolio

| Client | Product line | Status | Preview |
|---|---|---|---|
| [Epical Clinic](sites/epical-clinic/) | Med Spa Rebuild | Scaffold committed, photos pending local extraction | [preview.html](sites/epical-clinic/preview.html) |

## One repo per client — migration path

Each client lives as a self-contained subdirectory under `sites/`. When you're ready to give a client their own repo, run:

```bash
# 1. Create the empty repo on GitHub first (via github.com or gh CLI):
#    e.g. builderbee-clients/epical-clinic
# 2. From this repo root:
CLIENT=epical-clinic
git subtree split --prefix=sites/$CLIENT -b $CLIENT-split
git push git@github.com:builderbee-clients/$CLIENT.git $CLIENT-split:main

# 3. In the new repo, restore the workflow (skills + slash command):
cd /path/to/new/$CLIENT-clone
mkdir -p .claude
cp -r /path/to/ui/.claude/skills .claude/skills
cp -r /path/to/ui/.claude/commands .claude/commands
git add .claude
git commit -m "add BuilderBee workflow (skills + /medspa-rebuild)"
git push
```

That's it — the new repo has the site source AND the full skill workflow, so it can be re-generated or iterated independently.

## Standard workflow (in every client repo)

See `.claude/skills/README.md` and `.claude/commands/medspa-rebuild.md`. Per client:

```
1. design-system-generator    → extract the client's real brand tokens from their existing site
2. ui-ux-pro-max              → decide target design for the vertical (already per-product-line)
3. web-builder                → download real photos, generate Next.js site
4. pnpm build                 → out/ (static HTML for GHL import)
5. vercel --prod              → live preview URL for the pitch
```

## Starting a new client from scratch

```bash
# Copy an existing client of the same product line as the template:
cp -r sites/epical-clinic sites/medspa-<client-slug>

# Clean brand-specific bits:
rm -rf sites/medspa-<client-slug>/public/images/*
# Edit sites/medspa-<client-slug>/src/lib/site.ts with the new client's info
# Edit sites/medspa-<client-slug>/messages/es.json and en.json with new copy

# Then run the skills locally on the client's URL / GMB to fill in everything else.
```

## Pitch link format

Each client gets:

- **Vercel preview:** `https://<client-slug>-builderbee.vercel.app/`
- **Or GHL import:** zip `sites/<client-slug>/out/` and drop into the client's GHL funnel
- **Or preview.html** — the no-build static mockup committed in `sites/<client-slug>/preview.html` (openable in any browser, useful for first-touch emails)

## Why this setup works

- **One repo per client** = clean git history, independent deploys, easy to hand over if the client asks for the code.
- **Shared skills workflow** = new clients generate in hours, not weeks.
- **Static-exportable** = no server bill per client; Vercel free tier or GHL both work.
- **Real brand, real photos** = doesn't look like every other med spa template on the market.
