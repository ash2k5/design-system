# @ash2k5/ui

A small design system: tokens, theming, fonts, and React components. Warm gallery-white +
near-black light/dark themes, Bodoni Moda paired with Inter, sharp-edged glass, and an
aurora-gradient + grain background. Used by my app frontends.

## Install

```bash
npm install @ash2k5/ui
```

On the public npm registry.

## What's in it

- `dist/tokens.css`: CSS variables for light (`:root`) and dark (`[data-theme="dark"]`).
- `dist/preset.css`: Tailwind v4 `@theme` mapping (imports tokens.css).
- `dist/fonts.css`: the Bodoni Moda + Inter pair.
- `dist/recipes.css`: framework-agnostic classes (type scale, glass, aurora/grain, grid,
  primitives, a11y fallbacks).
- `dist/theme-toggle.js`: `initTheme`, `toggleTheme`, `THEME_INIT_SNIPPET`.
- `dist/index.js` + `.d.ts`: the React component library (ESM, `"use client"`).

Components are built on Radix + CVA and themed in both light and dark: Button, Input,
Textarea, Label, Badge, Card, ThemeToggle; Select, Combobox, Dialog, Popover, Tooltip, Tabs,
List, Metric (+ Sparkline); AuroraBackground, Container, Grid, Masthead, Sidebar; plus theme
helpers (`useTheme`, `getTheme`, `setTheme`, `themeInitScript`).

## Use it (Next.js + Tailwind v4)

In `app/globals.css`:

```css
@import "tailwindcss";
@import "@ash2k5/ui/preset.css";
@import "@ash2k5/ui/recipes.css";
@source "../node_modules/@ash2k5/ui/dist";
```

Then `bg-surface text-on-surface font-display` utilities resolve to the tokens and swap with
`[data-theme]`. The `@source` line lets Tailwind generate the utilities the components use.

```tsx
import { Button, Card, ThemeToggle } from "@ash2k5/ui";
```

Each app keeps a small `theme.css` that overrides only the tokens it wants to diverge on
(imported after the base), so the package stays the shared core.

## Theme toggle (no flash)

Inline `THEME_INIT_SNIPPET` in `<head>` before the stylesheets and wire a button to
`toggleTheme()`. The choice persists in `localStorage`; first visit follows
`prefers-color-scheme`.

## Develop

```bash
npm install          # package + the styleguide workspace
npm run build        # build the tokens (dist/*.css) and the component library
npm run styleguide   # run the styleguide dev server
```

The styleguide (`styleguide/`) renders every component in both themes.
