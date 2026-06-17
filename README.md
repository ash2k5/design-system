# @ash2k5/cinematic-ds

a small design system: tokens, theming, fonts, and react components. warm gallery-white +
near-black light/dark themes, bodoni moda paired with inter, sharp-edged glass, and an
aurora-gradient + grain background. used by my app frontends.

## install

```bash
npm install @ash2k5/cinematic-ds
```

on the public npm registry.

## what's in it

- `dist/tokens.css`: css variables for light (`:root`) and dark (`[data-theme="dark"]`).
- `dist/preset.css`: tailwind v4 `@theme` mapping (imports tokens.css).
- `dist/fonts.css`: the bodoni moda + inter pair.
- `dist/recipes.css`: framework-agnostic classes: type scale, glass, aurora/grain, grid,
  primitives, a11y fallbacks.
- `dist/theme-toggle.js`: `initTheme`, `toggleTheme`, `THEME_INIT_SNIPPET`.
- `dist/index.js` + `.d.ts`: the react component library (esm, `"use client"`).

components are built on radix + cva and themed in both light and dark: button, input,
textarea, label, badge, card, themetoggle; select, combobox, dialog, popover, tooltip,
tabs, list, metric (+ sparkline); aurorabackground, container, grid, masthead, sidebar;
plus theme helpers (`useTheme`, `getTheme`, `setTheme`, `themeInitScript`).

## use it (next.js + tailwind v4)

in `app/globals.css`:

```css
@import "tailwindcss";
@import "@ash2k5/cinematic-ds/preset.css";
@import "@ash2k5/cinematic-ds/recipes.css";
@source "../node_modules/@ash2k5/cinematic-ds/dist";
```

then `bg-surface text-on-surface font-display` utilities resolve to the tokens and swap
with `[data-theme]`. the `@source` line lets tailwind generate the utilities the
components use.

```tsx
import { Button, Card, ThemeToggle } from "@ash2k5/cinematic-ds";
```

each app keeps a small `theme.css` that overrides only the tokens it wants to diverge on
(imported after the base), so the package stays the shared core.

## theme toggle (no flash)

inline `THEME_INIT_SNIPPET` in `<head>` before the stylesheets and wire a button to
`toggleTheme()`. the choice persists in `localStorage`; first visit follows
`prefers-color-scheme`.

## develop

```bash
npm install          # package + the styleguide workspace
npm run build        # build the tokens (dist/*.css) and the component library
npm run styleguide   # run the styleguide dev server
```

the styleguide (`styleguide/`) renders every component in both themes.
