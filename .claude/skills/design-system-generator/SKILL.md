---
name: design-system-generator
description: |
  Use when asked to "generate a design system", "create a design system",
  "extract design system", "build design system", or "design system from website".
  Also triggers on: "brand guidelines", "design tokens", "style guide generator".
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Skill
  - AskUserQuestion
  - WebFetch
---

# Design System Generator

## Overview

A Claude Code skill that generates a complete design system — typography, colors, spacing, layout, components — and produces two output files: `designsystem.md` (the design system specification) and `showcase.html` (a self-contained landing page that demonstrates the system in action, with a design token reference at the bottom).

Two modes:
- **Create from scratch** — guided questionnaire that asks about brand preferences
- **Extract from a website** — visit a URL, analyze its CSS, fonts, and visual patterns

## Entry Point

When this skill is invoked:

1. Ask the user:

   "How would you like to create your design system?
   - **A) Create from scratch** — I'll ask you a series of questions about your brand preferences (typeface, colors, spacing, components)
   - **B) Extract from a website** — Give me a URL and I'll analyze the site's design patterns, fonts, and colors"

2. If the user chooses **A**, follow **Mode 1: Create from Scratch** below.
3. If the user chooses **B**, follow **Mode 2: Extract from Website** below.

## Mode 1: Create from Scratch

Guide the user through a questionnaire to define their design system. Ask questions **one at a time**. Use multiple choice when possible.

### Phase 1 — Essentials

Always ask these questions, one per message:

**Question 1: Brand Identity**
Ask: "What's your brand or project name? And describe the vibe in a few words — for example: modern & minimal, bold & playful, corporate & trustworthy, warm & organic."

**Question 2: Typeface**
Ask: "What typeface style fits your brand?
- **A) Sans-serif** (clean, modern) — e.g., Inter, Helvetica, Open Sans
- **B) Serif** (classic, editorial) — e.g., Georgia, Playfair Display, Merriweather
- **C) Monospace** (technical, developer) — e.g., JetBrains Mono, Fira Code
- **D) Mixed** (serif headings + sans-serif body)
- **E) Specific font** — tell me the name and I'll use it"

**Question 3: Primary Color**
Ask: "What's your primary brand color? You can give me a hex code (e.g., #2563EB) or describe it (e.g., 'deep ocean blue'). I'll suggest complementary secondary and accent colors, or you can specify those too."

After receiving the primary color:
- Generate a complementary secondary color (shifted ~120° on the color wheel or a muted variant)
- Generate an accent color (shifted ~30-60° or a vibrant complement)
- Generate a neutral scale derived from the primary (desaturated tints/shades)
- Generate semantic colors (success green, warning amber, error red, info blue)
- Present the full palette and ask if they want to adjust any colors

**Question 4: Heading Scale**
Ask: "How dramatic should your heading sizes be?
- **A) Tight** — subtle hierarchy (h1: 2rem → h6: 0.875rem)
- **B) Default** — standard modular scale (h1: 2.5rem → h6: 0.75rem)
- **C) Large** — dramatic size differences (h1: 3.5rem → h6: 0.75rem)"

**Question 5: Border Radius**
Ask: "What corner style?
- **A) Sharp** — 0px (no rounding)
- **B) Subtle** — 4px
- **C) Rounded** — 8px
- **D) Pill** — fully rounded (9999px)"

**Question 6: Spacing Density**
Ask: "How dense should the layout feel?
- **A) Compact** — 4px base unit (tight, information-dense)
- **B) Comfortable** — 8px base unit (balanced, recommended)
- **C) Spacious** — 16px base unit (airy, lots of whitespace)"

### Phase 1 Complete — Offer Deep Dive

After collecting all essential answers, ask:

"Got it! I have enough to generate your design system. Would you like to go deeper and customize component styles? I can ask about:
- Button styles, card patterns, navigation, form fields
- Dark/light mode, shadows, icon style

Or I can use **sensible defaults** based on your choices so far. What do you prefer?"

### Phase 2 — Deep Dive (only if user opts in)

Ask these one at a time:

**Question 7: Button Styles**
"What button style?
- **A) Solid** — filled background
- **B) Outline** — border only, transparent bg
- **C) Ghost** — no border or background
- **D) Solid + Outline combo** — primary buttons solid, secondary outlined"

**Question 8: Card Patterns**
"How should cards look?
- **A) Shadow elevation** — raised with box shadow
- **B) Border-based** — flat with subtle border
- **C) Minimal** — no border or shadow, rely on spacing"

**Question 9: Navigation Style**
"Navigation preference?
- **A) Horizontal top bar** — logo left, links center/right
- **B) Sidebar** — vertical nav on the left
- **C) Minimal** — logo + hamburger menu"

**Question 10: Form Fields**
"Form input style?
- **A) Outlined** — border all around
- **B) Underline** — bottom border only
- **C) Filled** — light background fill"

**Question 11: Color Mode**
"Color mode support?
- **A) Light only**
- **B) Dark only**
- **C) Both** (light and dark)"

**Question 12: Shadow Style**
"Shadow intensity?
- **A) None** — flat design
- **B) Subtle** — soft, barely-there shadows
- **C) Elevated** — pronounced shadows, layered depth"

**Question 13: Icon Style**
"Icon style preference?
- **A) Outlined** — line icons
- **B) Filled** — solid icons
- **C) Rounded** — soft, rounded line icons"

### Phase 2 Defaults

If the user skips Phase 2, apply these defaults:
- Buttons: Solid primary + outline secondary (D)
- Cards: Subtle shadow (A)
- Navigation: Horizontal top bar (A)
- Form fields: Outlined (A)
- Color mode: Light only (A)
- Shadows: Subtle (B)
- Icons: Outlined (A)

### Map Answers to Tokens

After all questions are complete (or defaults applied), map the answers to concrete design token values:

1. **Typography:** Select specific Google Font families based on the typeface choice. Define the full type scale (h1-h6, body, small, caption) with size, weight, line-height, and letter-spacing values based on the heading scale choice.

2. **Colors:** Use the primary color to derive the full palette:
   - Primary, primary-hover (darkened 10%), secondary, accent with hex values
   - Surface colors (page background, raised/card surface) and border colors
   - Neutral scale (50-900) — desaturated versions of the primary hue
   - Semantic colors (success, warning, error, info)
   - Assign CSS variable names to every color token

3. **Spacing:** Calculate the full scale from the base unit:
   - xs: base × 1, sm: base × 2, md: base × 3, lg: base × 4, xl: base × 6, 2xl: base × 8, 3xl: base × 12

4. **Layout:** Set sensible defaults:
   - Max width: 1280px, Grid: 12 columns, Gutter: spacing-md, Container padding: spacing-lg
   - Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px

5. **Borders & Radius:** Map the chosen radius to a scale:
   - radius-sm: chosen ÷ 2, radius-md: chosen, radius-lg: chosen × 2, radius-full: 9999px

6. **Depth & Elevation:** Based on shadow style choice, define the full elevation scale (none through xl) plus a focus ring using the primary color at 30% opacity

7. **Components:** Map all component choices to specific CSS property values

8. **Visual Theme:** Write a 2-3 sentence description of the overall mood and list 3-5 key visual characteristics based on the choices made

9. **Do's and Don'ts:** Generate 5-8 specific do's and don'ts derived from the system's choices (e.g., if radius is sharp, a don't would be "Don't mix rounded and sharp corners")

10. **Responsive Behavior:** Define collapsing strategy for each component type and touch target minimums

11. **Agent Prompt Guide:** Compile a quick color reference map and 2-3 example component prompts using the concrete token values

Once all tokens are mapped, proceed to **Generate Output: designsystem.md**.

## Mode 2: Extract from Website

Extract a design system by visiting a website, analyzing its visual design, and capturing CSS values.

### Phase 1 — Capture

**Step 1:** Ask the user for the website URL.

**Step 2:** Use the `/browse` skill to:
- Navigate to the provided URL
- Take a full-page screenshot for reference
- Take section-level screenshots: header/nav area, hero/main content, mid-page sections, footer

**Step 3:** Execute JavaScript in the browser to extract design data. Run these three scripts:

**Script A — Extract @font-face declarations:**

```javascript
(() => {
  const fonts = [];
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule instanceof CSSFontFaceRule) {
          fonts.push({
            family: rule.style.getPropertyValue('font-family').replace(/['"]/g, ''),
            src: rule.style.getPropertyValue('src'),
            weight: rule.style.getPropertyValue('font-weight') || 'normal',
            style: rule.style.getPropertyValue('font-style') || 'normal'
          });
        }
      }
    } catch(e) {} // Skip CORS-blocked sheets
  }
  return JSON.stringify(fonts, null, 2);
})()
```

**Script B — Extract typography and colors from computed styles:**

```javascript
(() => {
  const data = { headings: [], body: null, colors: new Set(), backgrounds: new Set(), links: null, buttons: [] };
  // Headings
  for (let i = 1; i <= 6; i++) {
    const el = document.querySelector('h' + i);
    if (el) {
      const s = getComputedStyle(el);
      data.headings.push({
        level: 'h' + i,
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color
      });
    }
  }
  // Body text
  const bodyEl = document.querySelector('p') || document.querySelector('body');
  if (bodyEl) {
    const s = getComputedStyle(bodyEl);
    data.body = {
      fontFamily: s.fontFamily,
      fontSize: s.fontSize,
      fontWeight: s.fontWeight,
      lineHeight: s.lineHeight,
      color: s.color
    };
  }
  // Links
  const link = document.querySelector('a');
  if (link) {
    const s = getComputedStyle(link);
    data.links = { color: s.color, textDecoration: s.textDecoration };
  }
  // Buttons
  document.querySelectorAll('button, .btn, [class*="button"], a[class*="btn"]').forEach(el => {
    const s = getComputedStyle(el);
    data.buttons.push({
      text: el.textContent.trim().substring(0, 30),
      backgroundColor: s.backgroundColor,
      color: s.color,
      borderRadius: s.borderRadius,
      padding: s.padding,
      fontWeight: s.fontWeight,
      border: s.border
    });
  });
  // Collect colors from visible elements (sample first 500)
  const els = document.querySelectorAll('*');
  const sample = Array.from(els).slice(0, 500);
  sample.forEach(el => {
    const s = getComputedStyle(el);
    if (s.color) data.colors.add(s.color);
    if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)') data.backgrounds.add(s.backgroundColor);
  });
  data.colors = [...data.colors];
  data.backgrounds = [...data.backgrounds];
  return JSON.stringify(data, null, 2);
})()
```

**Script C — Extract spacing, border-radius, shadows, and layout:**

```javascript
(() => {
  const data = { spacing: [], radii: new Set(), shadows: new Set(), maxWidths: new Set(), gaps: new Set() };
  const selectors = ['nav', 'header', 'main', 'section', 'footer', '.container', '.wrapper',
    'button', '.btn', '.card', '[class*="card"]', 'a', 'input', 'textarea',
    'h1', 'h2', 'h3', 'p', 'form', '[class*="hero"]', '[class*="grid"]'];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const s = getComputedStyle(el);
      data.spacing.push({
        selector: sel,
        element: el.tagName.toLowerCase() + (el.className ? '.' + el.className.split(' ')[0] : ''),
        padding: s.padding,
        margin: s.margin,
        gap: s.gap
      });
      if (s.borderRadius && s.borderRadius !== '0px') data.radii.add(s.borderRadius);
      if (s.boxShadow && s.boxShadow !== 'none') data.shadows.add(s.boxShadow);
      if (s.maxWidth && s.maxWidth !== 'none') data.maxWidths.add(s.maxWidth);
      if (s.gap && s.gap !== 'normal') data.gaps.add(s.gap);
    });
  });
  data.radii = [...data.radii];
  data.shadows = [...data.shadows];
  data.maxWidths = [...data.maxWidths];
  data.gaps = [...data.gaps];
  return JSON.stringify(data, null, 2);
})()
```

### Phase 2 — Analyze & Consolidate

After running the extraction scripts, analyze and organize the raw data:

1. **Fonts:**
   - Identify the primary heading font and body font from computed styles
   - Parse `@font-face` src values to extract `.woff2`, `.woff`, `.ttf`, `.otf` URLs
   - Record the full font-family name, URL, weight, and style for each custom font
   - If fonts are behind authentication or CORS-blocked, note the font-family name and find the closest Google Font match as a fallback

2. **Colors:**
   - Convert all color values to hex format
   - Deduplicate near-identical colors (within ~5% RGB distance)
   - Identify the primary brand color (most prominent non-neutral, non-white/black color)
   - Identify secondary and accent colors
   - Group gray/neutral tones into a coherent 50-900 scale
   - Assign semantic colors (success, warning, error, info) — use extracted greens/ambers/reds if found, otherwise generate sensible defaults

3. **Typography:**
   - Map extracted heading sizes to an h1-h6 scale
   - Fill in any missing heading levels by interpolating
   - Record body text properties

4. **Spacing:**
   - Analyze padding/margin/gap values to identify the base unit
   - Build a spacing scale (xs through 3xl) from observed patterns

5. **Layout:**
   - Identify max-width values for containers
   - Determine grid patterns from gaps and column structures

6. **Borders & Shadows:**
   - Consolidate border-radius values into a scale
   - Consolidate box-shadow values into sm/md/lg levels

### Phase 3 — Optional Expansion

After completing the initial extraction, ask the user:

"I've captured the design system from this page. Would you like me to check any additional pages for more patterns? For example:
- A page with **forms** (to capture input field styles)
- A **blog post** (to see long-form typography)
- A **pricing page** (to see card and table patterns)

Or should I proceed with generating the design system from what I've captured?"

If the user provides additional URLs, repeat Phase 1 and Phase 2 for each URL, then merge the findings:
- New font discoveries are added
- New color values are consolidated into the existing palette
- New component patterns are added
- Conflicting values: prefer the most common occurrence

### Font Handling — Critical

Custom typefaces are essential to brand identity. The extraction MUST:

1. Scan ALL `@font-face` rules from all accessible stylesheets (inline `<style>` tags and linked `<link>` stylesheets)
2. Parse the `src` property to extract direct URLs to font files (`.woff2` preferred, then `.woff`, `.ttf`, `.otf`)
3. Record each font with: family name, file URL, weight, style
4. In the showcase HTML output, include `@font-face` declarations pointing to the original hosted font URLs so the preview renders with the actual brand typeface
5. In `designsystem.md`, document the font family name and source URL under Typography
6. If a font URL is relative, resolve it against the page's base URL
7. If fonts fail to load (CORS, auth), fall back to the closest Google Font match and add a note: "⚠️ Original font could not be loaded. Using [Google Font name] as fallback. Original: [font-family-name] from [URL]"

After extraction is complete, proceed to **Generate Output: designsystem.md**.

## Generate Output: designsystem.md

After collecting all design tokens (from either Mode 1 or Mode 2), generate the `designsystem.md` file using the Write tool. Save it to the user's current working directory.

Use this template, replacing ALL `{placeholders}` with actual concrete values:

---

### Template

The file MUST follow this exact structure:

# {Brand Name} Design System

## Brand Overview

- **Name:** {brand_name}
- **Personality:** {personality_keywords — e.g., "modern, minimal, professional"}
- **Generated:** {current date}
- **Source:** {either "Questionnaire" or "Extracted from {url}"}

## Visual Theme & Atmosphere

{2-3 sentences describing the overall mood, visual density, and design philosophy. What makes this design feel the way it does? What is the signature aesthetic?}

**Key Characteristics:**
- {e.g., "Light weight typography (300-400) with generous letter-spacing"}
- {e.g., "Blue-tinted shadows for depth instead of pure black"}
- {e.g., "Rounded corners (8-12px) for approachable feel"}
- {e.g., "High contrast text on muted, low-saturation backgrounds"}
- {3-5 concrete, specific attributes that define the visual identity}

## Typography

### Font Families

| Role | Family | Source | Fallback |
|------|--------|--------|----------|
| Headings | {heading_font} | {Google Fonts URL or Custom font URL} | {fallback stack e.g., system-ui, sans-serif} |
| Body | {body_font} | {Google Fonts URL or Custom font URL} | {fallback stack} |
| Mono | {mono_font} | {Google Fonts or System} | {monospace fallback stack} |

If fonts were extracted from a website, include:

**Custom Font Sources:**
- `{font_name}` ({weight}): `{woff2_url}`
- (list all discovered @font-face entries)

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| h1 | {e.g., 3rem} | {e.g., 800} | {e.g., 1.1} | {e.g., -0.02em} |
| h2 | {size} | {weight} | {lh} | {ls} |
| h3 | {size} | {weight} | {lh} | {ls} |
| h4 | {size} | {weight} | {lh} | {ls} |
| h5 | {size} | {weight} | {lh} | {ls} |
| h6 | {size} | {weight} | {lh} | {ls} |
| Body | {size} | {weight} | {lh} | {ls} |
| Small | {size} | {weight} | {lh} | {ls} |
| Caption | {size} | {weight} | {lh} | {ls} |

## Colors

### Brand Colors

| Role | Name | Hex | CSS Variable | Usage |
|------|------|-----|--------------|-------|
| Primary | {descriptive name} | {#hex} | `--color-primary` | Main brand color, primary buttons, key accents |
| Primary Hover | {name} | {#hex} | `--color-primary-hover` | Darkened 10% for hover/active states |
| Secondary | {name} | {#hex} | `--color-secondary` | Secondary actions, supporting elements |
| Accent | {name} | {#hex} | `--color-accent` | Highlights, special elements |

### Surfaces & Borders

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| surface-primary | {#hex} | `--color-surface` | Main page background |
| surface-raised | {#hex} | `--color-surface-raised` | Cards, elevated panels |
| border-default | {#hex} | `--color-border` | Default borders, dividers |
| border-subtle | {#hex} | `--color-border-subtle` | Subtle separators |

### Neutrals

| Token | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| neutral-50 | {#hex} | `--color-neutral-50` | Lightest background |
| neutral-100 | {#hex} | `--color-neutral-100` | Card backgrounds |
| neutral-200 | {#hex} | `--color-neutral-200` | Borders, dividers |
| neutral-300 | {#hex} | `--color-neutral-300` | Disabled states |
| neutral-400 | {#hex} | `--color-neutral-400` | Placeholder text |
| neutral-500 | {#hex} | `--color-neutral-500` | Secondary text |
| neutral-600 | {#hex} | `--color-neutral-600` | Body text |
| neutral-700 | {#hex} | `--color-neutral-700` | Headings |
| neutral-800 | {#hex} | `--color-neutral-800` | High emphasis text |
| neutral-900 | {#hex} | `--color-neutral-900` | Darkest text |

### Semantic Colors

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Success | {#hex} | `--color-success` | Positive actions, confirmations |
| Warning | {#hex} | `--color-warning` | Caution states, alerts |
| Error | {#hex} | `--color-error` | Errors, destructive actions |
| Info | {#hex} | `--color-info` | Informational messages |

## Spacing

**Base unit:** {N}px

| Token | Value | Usage |
|-------|-------|-------|
| xs | {base * 1}px | Tight gaps, icon padding |
| sm | {base * 2}px | Inner component padding |
| md | {base * 3}px | Standard spacing |
| lg | {base * 4}px | Section gaps |
| xl | {base * 6}px | Large section spacing |
| 2xl | {base * 8}px | Hero/major section spacing |
| 3xl | {base * 12}px | Page-level spacing |

## Layout

| Property | Value |
|----------|-------|
| Max content width | {e.g., 1280px} |
| Grid columns | {e.g., 12} |
| Grid gutter | {e.g., 24px} |
| Container padding | {e.g., 32px} |

**Whitespace Philosophy:** {1-2 sentences on spacing intent — e.g., "Generous whitespace between sections creates a premium, uncluttered feel. Content density increases within components but sections breathe."}

## Borders & Radius

| Token | Value |
|-------|-------|
| border-width | {e.g., 1px} |
| radius-none | 0px |
| radius-sm | {e.g., 4px} |
| radius-md | {e.g., 8px} |
| radius-lg | {e.g., 16px} |
| radius-full | 9999px |

## Depth & Elevation

| Level | Token | Value | Use Case |
|-------|-------|-------|----------|
| 0 — Flat | `shadow-none` | none | Flush elements, disabled states |
| 1 — Low | `shadow-sm` | {e.g., 0 1px 2px rgba(0,0,0,0.05)} | Buttons, input fields |
| 2 — Medium | `shadow-md` | {e.g., 0 4px 6px rgba(0,0,0,0.1)} | Cards, dropdowns |
| 3 — High | `shadow-lg` | {e.g., 0 10px 15px rgba(0,0,0,0.15)} | Modals, popovers |
| 4 — Highest | `shadow-xl` | {e.g., 0 20px 25px rgba(0,0,0,0.15)} | Floating action elements, dialogs |
| Focus | `shadow-focus` | {e.g., 0 0 0 3px rgba(primary, 0.3)} | Keyboard focus ring for accessibility |

## Components

### Button

**Variants:** Primary, Secondary, Ghost

| Property | Primary | Secondary | Ghost |
|----------|---------|-----------|-------|
| Background | {primary_hex} | transparent | transparent |
| Text color | {contrast color} | {primary_hex} | {primary_hex} |
| Border | none | 1px solid {primary_hex} | none |
| Radius | {radius-md} | {radius-md} | {radius-md} |
| Padding | {sm} {md} | {sm} {md} | {sm} {md} |
| Font weight | 600 | 600 | 600 |
| Hover | darken 10% | fill primary at 10% opacity | fill primary at 5% opacity |

```
┌─────────────────────────┐
│      Primary Button      │  solid bg, contrast text
└─────────────────────────┘
┌─────────────────────────┐
│     Secondary Button     │  outlined, brand text
└─────────────────────────┘
       Ghost Button          no border, brand text
```

### Card

| Property | Value |
|----------|-------|
| Background | {surface color, e.g., white or neutral-50} |
| Border | {e.g., 1px solid neutral-200 or none} |
| Radius | {radius-lg} |
| Padding | {lg} |
| Shadow | {shadow level based on card pattern choice} |

```
┌─────────────────────────────┐
│  ┌─────┐                    │
│  │ IMG │  Card Title         │
│  └─────┘  Description text   │
│           goes here          │
│                              │
│  [Action Button]             │
└─────────────────────────────┘
```

### Navigation

| Property | Value |
|----------|-------|
| Style | {top bar / sidebar / minimal} |
| Background | {e.g., white, neutral-900} |
| Height | {e.g., 64px} |
| Padding | 0 {lg} |
| Link color | {neutral-700} |
| Active link | {primary} |

```
┌──────────────────────────────────────────┐
│  Logo    Link  Link  Link      [CTA]     │
└──────────────────────────────────────────┘
```

### Hero Section

| Property | Value |
|----------|-------|
| Padding | {3xl} 0 |
| Heading | h1 style |
| Subtitle | Body style, neutral-500 |
| CTA | Primary button |
| Max width | {max content width} |

```
┌──────────────────────────────────────────┐
│                                          │
│           H1 Heading Text                │
│       Subtitle / description text        │
│                                          │
│          [Primary CTA Button]            │
│                                          │
└──────────────────────────────────────────┘
```

### Form Input

| Property | Value |
|----------|-------|
| Style | {outlined / underline / filled} |
| Border color | {neutral-300} |
| Focus border | {primary} |
| Radius | {radius-md} |
| Padding | {sm} {md} |
| Label | Above, neutral-700, Small text style |
| Placeholder | neutral-400 |
| Helper text | Caption style, neutral-500 |

```
  Label
┌─────────────────────────┐
│  Placeholder text        │
└─────────────────────────┘
  Helper text
```

### Footer

| Property | Value |
|----------|-------|
| Background | {neutral-900 or neutral-50} |
| Text color | {neutral-400 or neutral-600} |
| Padding | {2xl} {lg} |
| Link color | {neutral-300 or neutral-500} |

```
┌──────────────────────────────────────────┐
│  Logo        Links Col 1    Links Col 2  │
│  Tagline     Link           Link         │
│              Link           Link         │
│──────────────────────────────────────────│
│  © {year} {Brand Name}. All rights reserved. │
└──────────────────────────────────────────┘
```

## Do's and Don'ts

### Do

- {e.g., "Use weight 300-400 for body text and 600-700 for headings only"}
- {e.g., "Apply brand-tinted shadows (rgba of primary) instead of pure black"}
- {e.g., "Maintain consistent radius — use radius-md for interactive elements, radius-lg for containers"}
- {e.g., "Use semantic color tokens for status messaging — never repurpose brand colors for errors"}
- {e.g., "Keep body text at neutral-600 or darker for WCAG AA contrast"}
- {5-8 specific, actionable design rules derived from the system's choices}

### Don't

- {e.g., "Don't mix border-radius styles — no sharp buttons inside rounded cards"}
- {e.g., "Don't use more than 3 font weights on a single page"}
- {e.g., "Don't place low-contrast text (neutral-400 or lighter) on white backgrounds"}
- {e.g., "Don't use shadow-lg on small elements like badges or chips"}
- {e.g., "Don't override semantic colors — red means error, green means success, always"}
- {5-8 concrete anti-patterns to avoid}

## Responsive Behavior

### Breakpoints

| Name | Min Width | Key Changes |
|------|-----------|-------------|
| sm | {e.g., 640px} | {e.g., "Single column layout, stack nav links"} |
| md | {e.g., 768px} | {e.g., "2-column grids, show horizontal nav"} |
| lg | {e.g., 1024px} | {e.g., "3-column grids, full nav with CTAs"} |
| xl | {e.g., 1280px} | {e.g., "Max-width container, increased spacing"} |

### Touch Targets

- Minimum tap target: 44×44px
- Minimum spacing between interactive elements: {space-sm}

### Collapsing Strategy

- **Navigation:** Horizontal → hamburger menu below `md`
- **Grids:** {e.g., "3-col → 2-col at `md` → 1-col at `sm`"}
- **Hero:** {e.g., "Reduce heading to h2 size, stack CTA below text"}
- **Cards:** {e.g., "Horizontal layout → vertical stack below `md`"}
- **Spacing:** {e.g., "Reduce section spacing by 1 step (2xl → xl) below `md`"}
- **Typography:** {e.g., "Scale headings down by ~20% below `sm`"}

## Agent Prompt Guide

### Quick Color Reference

- **Primary CTA Background:** {#hex}
- **Primary CTA Text:** {#hex}
- **Page Background:** {#hex}
- **Card Background:** {#hex}
- **Heading Text:** {#hex}
- **Body Text:** {#hex}
- **Border:** {#hex}
- **Link:** {#hex}
- **Link Hover:** {#hex}
- **Focus Ring:** {shadow-focus value}

### Example Component Prompts

**Hero Section:**
"Build a hero with padding {3xl} 0, heading in {heading_font} at {h1_size}/{h1_weight}, subtitle in {body_font} neutral-500, and a {primary_hex} CTA button with {radius-md} corners and {sm} {md} padding."

**Card:**
"Create a card with {surface_raised} background, {border_default} border, {radius-lg} corners, {lg} padding, and {shadow-md} elevation. On hover, lift to {shadow-lg}."

**Navigation Bar:**
"Build a top nav at {nav_height} height, {nav_bg} background, links in {neutral-700} at body size, active link in {primary_hex}, CTA button as primary button variant."

### Iteration Rules

1. Always use CSS custom properties (`var(--token)`) — never hardcode hex values in components
2. Headings use `--font-heading`, body uses `--font-body` — never swap them
3. Interactive elements need `:hover`, `:focus` (with focus ring), and `:active` states
4. Maintain spacing consistency — use the spacing scale tokens, don't invent arbitrary values
5. Shadows should be brand-tinted where possible (use primary hue in rgba)

---

### Output Instructions

1. Replace ALL `{placeholders}` with actual values from the collected/extracted design tokens
2. Do NOT leave any placeholder text — every value must be concrete
3. Use the Write tool to save as `designsystem.md` in the user's current working directory
4. After writing, proceed to **Generate Output: showcase.html**

## Generate Output: showcase.html

After writing `designsystem.md`, generate a self-contained HTML showcase file. Use the Write tool to save it as `showcase.html` in the user's current working directory.

### Requirements

1. **Self-contained** — ALL CSS in a single `<style>` tag. No external stylesheets except font imports.
2. **CSS Custom Properties** — Map ALL design tokens to CSS variables in `:root {}` so the system is clearly expressed in code.
3. **Font loading:**
   - For extracted custom fonts: include `@font-face` rules pointing to the original hosted URLs (.woff2/.woff/.ttf/.otf)
   - For questionnaire-chosen fonts: use `@import url('https://fonts.googleapis.com/css2?family=...')` for Google Fonts, or system font stacks
4. **Realistic content** — The marketing landing page must use realistic placeholder copy relevant to the brand name. Do NOT use "Lorem ipsum."
5. **Responsive** — Use the breakpoints from the design system. The page must look good on mobile and desktop.
6. **Token labels** — In the showcase section, every token must be labeled with its name and value.

### HTML Structure

Generate a file with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Brand Name} — Design System Showcase</title>
  <style>
    /* === Font Loading === */
    /* @font-face rules for custom fonts OR @import for Google Fonts */

    /* === Design Tokens (CSS Custom Properties) === */
    :root {
      /* Typography */
      --font-heading: '{heading font}', {fallback};
      --font-body: '{body font}', {fallback};
      --font-mono: '{mono font}', {fallback};

      /* Colors — Brand */
      --color-primary: {hex};
      --color-primary-hover: {hex};
      --color-secondary: {hex};
      --color-accent: {hex};

      /* Colors — Surfaces & Borders */
      --color-surface: {hex};
      --color-surface-raised: {hex};
      --color-border: {hex};
      --color-border-subtle: {hex};

      /* Colors — Neutrals */
      --color-neutral-50: {hex};
      --color-neutral-100: {hex};
      /* ... full neutral scale ... */
      --color-neutral-900: {hex};

      /* Colors — Semantic */
      --color-success: {hex};
      --color-warning: {hex};
      --color-error: {hex};
      --color-info: {hex};

      /* Spacing */
      --space-xs: {val};
      --space-sm: {val};
      --space-md: {val};
      --space-lg: {val};
      --space-xl: {val};
      --space-2xl: {val};
      --space-3xl: {val};

      /* Layout */
      --max-width: {val};
      --grid-columns: {val};
      --grid-gutter: {val};

      /* Border Radius */
      --radius-none: 0px;
      --radius-sm: {val};
      --radius-md: {val};
      --radius-lg: {val};
      --radius-full: 9999px;

      /* Depth & Elevation */
      --shadow-none: none;
      --shadow-sm: {val};
      --shadow-md: {val};
      --shadow-lg: {val};
      --shadow-xl: {val};
      --shadow-focus: {val};
    }

    /* === Reset === */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-body); color: var(--color-neutral-800); line-height: 1.6; }

    /* === Component Styles === */
    /* Navigation, buttons, cards, forms, etc. — all using CSS variables */

    /* === Showcase Section Styles === */
    /* Grid layouts for swatches, type specimens, spacing blocks, etc. */

    /* === Responsive === */
    @media (max-width: 768px) { /* mobile adjustments */ }
  </style>
</head>
<body>

  <!-- ============================================ -->
  <!-- PART 1: Marketing Landing Page               -->
  <!-- ============================================ -->

  <!-- Navigation -->
  <nav>
    <!-- Brand name/logo on the left -->
    <!-- Navigation links -->
    <!-- CTA button on the right -->
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <!-- Large h1 headline (use brand-relevant copy) -->
    <!-- Subtitle paragraph -->
    <!-- Primary CTA button -->
  </section>

  <!-- Features Grid -->
  <section class="features">
    <!-- Section heading (h2) -->
    <!-- 3-4 feature cards in a responsive grid -->
    <!-- Each card: icon/emoji, h3 title, description paragraph -->
  </section>

  <!-- Testimonial Section -->
  <section class="testimonial">
    <!-- Background: neutral or accent-tinted -->
    <!-- Large quote text -->
    <!-- Attribution: name, title -->
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <!-- Accent-colored background -->
    <!-- Headline -->
    <!-- CTA button (secondary/inverted style) -->
  </section>

  <!-- Footer -->
  <footer>
    <!-- Logo + tagline -->
    <!-- 2-3 columns of links -->
    <!-- Divider -->
    <!-- Copyright line -->
  </footer>

  <!-- ============================================ -->
  <!-- PART 2: Design System Showcase               -->
  <!-- ============================================ -->

  <section class="showcase">
    <div class="showcase-container">
      <h2>Design System Reference</h2>
      <p>A visual reference of all design tokens and components.</p>

      <!-- Color Swatches -->
      <div class="showcase-section">
        <h3>Colors</h3>

        <h4>Brand Colors</h4>
        <div class="swatch-grid">
          <!-- For each brand color: a rectangle filled with the color -->
          <!-- Below: color name, hex value, CSS variable name -->
        </div>

        <h4>Neutrals</h4>
        <div class="swatch-grid">
          <!-- Neutral 50-900, each as a swatch with hex label -->
        </div>

        <h4>Semantic</h4>
        <div class="swatch-grid">
          <!-- Success, Warning, Error, Info swatches -->
        </div>
      </div>

      <!-- Typography Scale -->
      <div class="showcase-section">
        <h3>Typography</h3>
        <!-- For each level (h1-h6, body, small, caption): -->
        <!-- Render the text at its actual size/weight -->
        <!-- Label: element name, font-family, size, weight, line-height -->
      </div>

      <!-- Spacing Scale -->
      <div class="showcase-section">
        <h3>Spacing</h3>
        <!-- For each spacing token (xs through 3xl): -->
        <!-- A horizontal bar whose width equals the spacing value -->
        <!-- Label: token name, pixel value -->
      </div>

      <!-- Border Radius -->
      <div class="showcase-section">
        <h3>Border Radius</h3>
        <!-- For each radius value: -->
        <!-- A 80x80px box with that border-radius applied -->
        <!-- Label: token name, pixel value -->
      </div>

      <!-- Shadows -->
      <div class="showcase-section">
        <h3>Shadows</h3>
        <!-- For each shadow level (sm, md, lg): -->
        <!-- A card/box with that shadow applied -->
        <!-- Label: level name, CSS value -->
      </div>

      <!-- Component Specimens -->
      <div class="showcase-section">
        <h3>Components</h3>

        <h4>Buttons</h4>
        <!-- Render actual button elements: Primary, Secondary, Ghost -->
        <!-- Show normal, hover description, and disabled states -->

        <h4>Card</h4>
        <!-- Render an actual card component with image placeholder, title, text, button -->

        <h4>Form Input</h4>
        <!-- Render actual form inputs: text field with label, placeholder, helper text -->
        <!-- Show normal, focus description, and error states -->
      </div>
    </div>
  </section>

</body>
</html>
```

### Generation Instructions

When generating the actual HTML:

1. Replace ALL `{placeholders}` with concrete values from the design tokens
2. Write complete, valid HTML — not pseudocode or comments
3. All component sections must render as actual visible HTML elements
4. Color swatches should be `div` elements with `background-color` set and dimensions (min 80x80px)
5. Typography specimens should be actual headings/paragraphs rendered at their real size
6. Spacing bars should be colored rectangles whose width matches the token value
7. Button specimens should be real `<button>` elements with proper styling
8. The marketing copy should be relevant to the brand name (e.g., if brand is "Acme Labs", write copy about innovation/technology)
9. Use the CSS custom properties throughout — never hardcode values in element styles
10. Include a clean separator (border or spacing) between Part 1 and Part 2

After writing `showcase.html`, proceed to **Completion**.

## Completion

After both files have been written, present a summary to the user:

### Summary Template

"Your design system has been generated! Here's what was created:

**Brand:** {brand_name}
**Source:** {Questionnaire / Extracted from {url}}

**Key Tokens:**
- Heading font: {heading_font}
- Body font: {body_font}
- Primary color: {primary_hex}
- Base spacing: {base}px
- Border radius: {radius_style}

**Files created:**
- `designsystem.md` — Full design system specification with tokens, scales, and component definitions
- `showcase.html` — Self-contained landing page + design system visual reference

### Next Steps

Suggest these actions:
1. **Preview:** Open `showcase.html` in your browser to verify the design system visually
2. **Refine:** Edit `designsystem.md` to adjust any tokens, then ask me to regenerate the showcase
3. **Build:** Use `designsystem.md` as a reference when building your project — it contains all the CSS values, component specs, and layout rules you need
4. **Extract more:** If you used Mode B, you can run the skill again on additional pages to capture more patterns"
