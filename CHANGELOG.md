# Changelog

All notable changes to `@ash2k5/cinematic-ds` are documented here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions follow
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-06-14

### Added

- React component library. Radix + CVA components themed to Cinematic Editorial, every state in both
  themes: Button, Input, Textarea, Label, Badge, Card, ThemeToggle; Select, Combobox, Dialog, Popover,
  Tooltip, Tabs, List, Metric (+ Sparkline); AuroraBackground, Container, Grid, Masthead, Sidebar; and
  theme helpers (useTheme, getTheme, setTheme, themeInitScript). Ships as ESM + types with a
  `"use client"` boundary.
- Next.js styleguide app rendering every component in both themes.

## [0.1.0] - 2026-06-14

### Added

- Design system foundation: canonical token source generating CSS variables (light/dark) and a
  Tailwind v4 preset, base + override theming, Bodoni Moda + Inter fonts, layout/background recipes
  (aurora gradient, grain, glass, grid, a11y fallbacks), and a styleguide.
