# @ash2k5/cinematic-ds

Cinematic Editorial design system — the single source of truth for tokens, theming, fonts, and
(coming in P1) React components. Warm gallery-white + near-black themes, Bodoni Moda paired with
Inter, sharp 0px glassmorphism, aurora-gradient + grain atmosphere (no photography).

Canonical token values live in `tokens/tokens.mjs` and are derived from the reference spec in
`~/repos/reference/Design system/`. Run `npm run build` to regenerate the `dist/` CSS after editing.

## What ships

| File | Purpose |
| --- | --- |
| `dist/tokens.css` | CSS variables: `:root` (light) + `[data-theme="dark"]` (dark). The base layer. |
| `dist/preset.css` | Tailwind v4 `@theme` mapping (imports tokens.css). For Next/Tailwind apps. |
| `dist/fonts.css` | Google Fonts for the base pair (Bodoni Moda + Inter). |
| `dist/recipes.css` | Framework-agnostic classes: type scale, glass, aurora/grain, grid, primitives, a11y fallbacks. |
| `dist/theme-toggle.js` | Theme control (`initTheme`, `toggleTheme`, `THEME_INIT_SNIPPET`). |

## Consume per stack

**Next.js + Tailwind v4** (`app/globals.css`):

```css
@import "tailwindcss";
@import "@ash2k5/cinematic-ds/preset.css";   /* tokens + Tailwind @theme */
@import "@ash2k5/cinematic-ds/recipes.css";
@import "./theme.css";                         /* this app's override layer */
```

Then `bg-surface text-on-surface font-display gap-section-gap` utilities resolve to the tokens and
swap automatically with `data-theme`. Load fonts via `next/font` or import `fonts.css`.

**Flask / FastAPI / any HTML**: link `fonts.css`, `tokens.css`, `recipes.css`, add `class="ds-root"`
to `<body>`, and inline `THEME_INIT_SNIPPET` in `<head>`.

## Per-app identity (base + override)

Each app keeps a small `theme.css` that re-declares only the tokens it wants to diverge on — imported
after the base, so the package stays the shared core and apps fine-tune without forking:

```css
:root { --primary: #1a3a8f; --font-display: "Playfair Display", serif; }
[data-theme="dark"] { --primary: #aac4ff; }
```

## Theme toggle (no flash)

Inline `THEME_INIT_SNIPPET` in `<head>` before stylesheets; wire a button to `toggleTheme()`. Choice
persists in `localStorage` (`ds-theme`); first visit follows `prefers-color-scheme`.

## Develop

```bash
npm run build        # regenerate dist/ from tokens/tokens.mjs
npm run styleguide   # serve the styleguide at http://localhost:4321
```
