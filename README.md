# @ash2k5/cinematic-ds

Cinematic Editorial design system — the single source of truth for tokens, theming, fonts, and
React components. Warm gallery-white + near-black themes, Bodoni Moda paired with Inter, sharp 0px
glassmorphism, aurora-gradient + grain atmosphere (no photography).

Canonical token values live in `tokens/tokens.mjs` and are derived from the reference spec in
`~/repos/reference/Design system/`. Run `npm run build` to regenerate the `dist/` CSS after editing.

## Install

```bash
npm install @ash2k5/cinematic-ds
```

Published to the public npm registry. Used by the [Book ML](https://github.com/ash2k5/book-ml-recommender)
and [CampusPathFinder](https://github.com/ash2k5/UC_CampusPathFinder) frontends.

## What ships

| File                      | Purpose                                                                                        |
| ------------------------- | ---------------------------------------------------------------------------------------------- |
| `dist/tokens.css`         | CSS variables: `:root` (light) + `[data-theme="dark"]` (dark). The base layer.                 |
| `dist/preset.css`         | Tailwind v4 `@theme` mapping (imports tokens.css). For Next/Tailwind apps.                     |
| `dist/fonts.css`          | Google Fonts for the base pair (Bodoni Moda + Inter).                                          |
| `dist/recipes.css`        | Framework-agnostic classes: type scale, glass, aurora/grain, grid, primitives, a11y fallbacks. |
| `dist/theme-toggle.js`    | Theme control (`initTheme`, `toggleTheme`, `THEME_INIT_SNIPPET`).                              |
| `dist/index.js` + `.d.ts` | React component library (ESM, `"use client"`). Radix + CVA, typed.                             |

## Components

React components built on Radix primitives + CVA, themed to the system, every state in both themes:

- **Primitives:** `Button`, `Input`, `Textarea`, `Label`, `Badge`, `Card`, `ThemeToggle`.
- **Composite (Radix):** `Select`, `Combobox`, `Dialog`, `Popover`, `Tooltip`, `Tabs`, `List`, `Metric` (+ `Sparkline`).
- **Layout / nav:** `AuroraBackground`, `Container`, `Grid`, `Masthead`, `Sidebar`.
- **Theme helpers:** `useTheme`, `getTheme`, `setTheme`, `themeInitScript`.

```tsx
import { Button, Card, ThemeToggle } from "@ash2k5/cinematic-ds";
```

For Tailwind to generate the utilities the components use, add the package to your CSS sources:

```css
@source "../node_modules/@ash2k5/cinematic-ds/dist";
```

The styleguide (`styleguide/`, a Next.js app) renders every component in both themes and is the visual
source of truth.

## Consume per stack

**Next.js + Tailwind v4** (`app/globals.css`):

```css
@import "tailwindcss";
@import "@ash2k5/cinematic-ds/preset.css"; /* tokens + Tailwind @theme */
@import "@ash2k5/cinematic-ds/recipes.css";
@import "./theme.css"; /* this app's override layer */
```

Then `bg-surface text-on-surface font-display gap-section-gap` utilities resolve to the tokens and
swap automatically with `data-theme`. Load fonts via `next/font` or import `fonts.css`.

**Flask / FastAPI / any HTML**: link `fonts.css`, `tokens.css`, `recipes.css`, add `class="ds-root"`
to `<body>`, and inline `THEME_INIT_SNIPPET` in `<head>`.

## Per-app identity (base + override)

Each app keeps a small `theme.css` that re-declares only the tokens it wants to diverge on — imported
after the base, so the package stays the shared core and apps fine-tune without forking:

```css
:root {
  --primary: #1a3a8f;
  --font-display: "Playfair Display", serif;
}
[data-theme="dark"] {
  --primary: #aac4ff;
}
```

## Theme toggle (no flash)

Inline `THEME_INIT_SNIPPET` in `<head>` before stylesheets; wire a button to `toggleTheme()`. Choice
persists in `localStorage` (`ds-theme`); first visit follows `prefers-color-scheme`.

## Develop

```bash
npm install          # installs the package + the styleguide workspace
npm run build        # build tokens (dist/*.css) + the component library (dist/index.js)
npm run styleguide   # run the Next.js styleguide dev server
npm run styleguide:build  # build the library, then a production styleguide build
```
