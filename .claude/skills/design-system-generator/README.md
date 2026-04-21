# Design System Builder

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill that generates complete design systems. Give it a brand brief or a website URL and it produces a full token specification and a self-contained HTML showcase.

**No code to install. No dependencies. Just a skill file that Claude follows.**

---

## Two Modes

### A) Create from Scratch

Answer a guided questionnaire about your brand preferences and the agent generates a full design system with concrete token values.

**Phase 1 (6 essential questions):**
Brand name and vibe, typeface style, primary color, heading scale, border radius, spacing density.

**Phase 2 (7 optional deep-dive questions):**
Button styles, card patterns, navigation, form fields, dark/light mode, shadows, icon style. Skip this phase and sensible defaults are applied.

### B) Extract from a Website

Give the agent a URL and it will:

1. Visit the page using a headless browser
2. Take screenshots of each section
3. Run JavaScript to extract computed CSS (fonts, colors, typography, spacing, shadows, border-radius)
4. Consolidate raw values into a coherent token system
5. Optionally visit additional pages to capture more patterns

Custom fonts are preserved. The agent captures original hosted `.woff2` font URLs so the showcase renders with the actual brand typeface.

---

## What It Produces

Two files written to your working directory:

### `designsystem.md`

A complete design system specification:

- Brand overview and visual theme description
- Typography (font families with source URLs, full type scale h1-h6, body, small, caption)
- Colors (brand palette, neutral scale 50-900, semantic colors, surfaces, borders)
- Spacing (base unit and scale from xs through 3xl+)
- Layout (max width, grid columns, breakpoints)
- Borders and radius scale
- Shadows and elevation levels
- Components (buttons, cards, navigation, hero, forms, footer, tabs) with property tables and ASCII wireframes
- Do's and Don'ts derived from the system's choices
- Responsive behavior and collapsing strategies
- Agent prompt guide with quick color reference and example component prompts

### `showcase.html`

A single self-contained HTML file with two parts:

1. **Marketing Landing Page** -- a realistic page (nav, hero, features, testimonial, CTA, footer) styled entirely with the design system tokens. Proves they work together in context.

2. **Design System Reference** -- visual documentation showing color swatches, typography scale at actual sizes, spacing bars, radius and shadow specimens, and live component specimens (buttons, cards, forms, tabs).

All CSS uses custom properties (`:root { --token: value }`). Zero external dependencies beyond font files.

---

## Setup

### 1. Copy the skill into your project

```bash
# Clone this repo (or just grab the skill file)
git clone https://github.com/3stanKyle/design-system-builder.git

# Copy the skill into your project's .claude/skills directory
cp -r design-system-builder/.claude/skills/design-system-generator /path/to/your-project/.claude/skills/
```

Or manually: copy the `.claude/skills/design-system-generator/` folder into your project.

### 2. Reference it in your CLAUDE.md (optional but recommended)

Add this to your project's `CLAUDE.md`:

```markdown
## Available Skills

- `/design-system-generator` -- Generate a design system from scratch or extract from a website
```

### 3. Run it

Open Claude Code in your project directory and type:

```
/design-system-generator
```

Choose your mode (create or extract) and follow the prompts. The agent writes `designsystem.md` and `showcase.html` to your working directory.

### Requirements

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) (CLI, desktop app, or VS Code extension)
- For website extraction (Mode B): a headless browser skill like `/browse` from [gstack](https://github.com/nichochar/gstack)

---

## Example Output

The `examples/` directory contains a design system extracted from [paloaltonetworks.com](https://www.paloaltonetworks.com/):

- `examples/designsystem.md` -- Full token specification
- `examples/showcase.html` -- Open in a browser to see the result

The agent captured TT Hoves custom typeface (with original hosted font URLs), the full Palo Alto Networks color palette anchored by their signature orange (#FA582D), product-line color coding, pill-shaped button patterns, and dark-first surface hierarchy.

---

## Project Structure

```
your-project/
└── .claude/
    └── skills/
        └── design-system-generator/
            └── SKILL.md          # The skill (this is all you need)
```

That's it. One file. The skill contains the questionnaire flow, extraction scripts, output templates, and token mapping rules. Claude reads it and follows the instructions.

---

## How It Works

The skill is a single markdown file (`SKILL.md`, ~1000 lines) that serves as a structured prompt. It contains:

- Entry point logic with mode selection
- Questionnaire flow with adaptive depth
- 3 JavaScript extraction scripts that run in a headless browser to capture `@font-face` declarations, computed styles, and layout patterns
- Output templates for both `designsystem.md` and `showcase.html` with placeholder syntax
- Token mapping rules that convert raw answers or extracted values into concrete design tokens

No runtime code. No build step. No package.json. Just instructions that Claude follows.

---

## License

MIT
