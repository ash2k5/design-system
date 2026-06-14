# Program: Frontend Reinvention — Cinematic Editorial

Persistent state so any session can resume. Full plan:
`~/.claude/plans/i-m-working-on-overhauling-idempotent-wren.md`.

## Locked decisions

- Scope: 3 apps — UC CampusPathFinder, Book ML Recommender, Site Audit.
- All frontends: Next.js + TypeScript + Tailwind v4 + this DS package (separate repos).
- DS distribution: this package (base tokens + per-app `theme.css` override).
- Components: shadcn/ui + Radix + CVA, re-themed.
- Backends preserved as JSON APIs (Book ML: Flask -> FastAPI). APIs on Render, FEs on Vercel.
- Theming: light + dark + toggle (system default, persisted). Backgrounds: gradient + grain, no photo.
- Icons: Lucide. Radius: 0 (circle exceptions).

## Phase status

- [x] P0 — DS foundation (tokens, theming, fonts, recipes, styleguide). DONE. Published
      @ash2k5/cinematic-ds@0.1.0 to GitHub Packages (repo: github.com/ash2k5/design-system, private).
- [x] P1 — DS components (Radix + CVA, all states, both themes, styleguide). DONE (changeset queued for
      0.2.0; styleguide converted to a Next.js app). See "P1 progress" below.
- [ ] P2 — CampusPathFinder rebuild (TS migration, DS adoption, dual theme; keep map/Firebase/routing).
- [ ] P3 — Book ML (3a Flask->FastAPI API; 3b new Next.js FE).
- [ ] P4 — Site Audit (4a clean API + redesigned PDF; 4b new Next.js FE).
- [ ] P5 — Consistency, a11y, perf, docs.

## P0 progress (this session)

Done:

- Repo scaffold: package.json, .gitignore, tsconfig.json, dirs.
- Canonical token source `tokens/tokens.mjs` (MD3 colors light/dark + semantic, glass/aurora/ambient,
  type scale via clamp, spacing, radius, motion).
- Generator `scripts/build-tokens.mjs` -> dist/{tokens,preset,fonts}.css (verified runs).
- Hand-authored `dist/recipes.css` (type, glass, aurora/grain, grid, primitives, a11y fallbacks).
- `dist/theme-toggle.js`, `scripts/serve.mjs`, `styleguide/index.html`, README.
- VERIFIED: styleguide renders light + dark to spec via Playwright (Bodoni+Inter load, var swap,
  glass/aurora/grain, input error state). Only console noise = favicon 404.

Resolved (P0 closed):

- Distribution = GitHub Packages. Changesets + `.github/workflows/release.yml` publish on push to
  main via the repo's GITHUB_TOKEN (local gh token lacks write:packages, so CI does the publish).
- Repo pushed (private) + published @ash2k5/cinematic-ds@0.1.0, tag v0.1.0.

## P1 progress (this session)

Done:

- Stood up the React component library inside the package: `src/` (TS), `tsup` build to `dist/index.js`
  (ESM) + `dist/index.d.ts`, deps added (Radix primitives, CVA, clsx, tailwind-merge, cmdk, lucide).
  Build is `build:tokens` + `build:lib`; `dist/` also keeps the hand-authored CSS so tsup runs with
  `clean:false`.
- Components, themed to spec (`reference/.../components.md`), every state, both themes:
  primitives (Button, Input, Textarea, Label, Badge, Card, ThemeToggle), composite Radix (Select,
  Combobox via cmdk, Dialog, Popover, Tooltip, Tabs, List, Metric + Sparkline), layout/nav
  (AuroraBackground, Container, Grid, Masthead, Sidebar). Theme helpers in `src/lib/theme.ts`.
- Styleguide converted from static HTML to a **Next.js App Router app** (`styleguide/`, npm workspace):
  next/font (Bodoni + Inter), no-flash theme init, Tailwind v4 preset, renders every component in both
  themes. Removed the old `styleguide/index.html` + `scripts/serve.mjs`.
- VERIFIED via prod build + Playwright (both themes): library + styleguide build clean (type-check
  passes); Tailwind utilities resolve (bg-primary, 0px corners, uppercase); Dialog opens with focus
  trap + overlay; Combobox (cmdk) opens and filters; reduced-transparency a11y fallback fires. Only
  console noise is the favicon 404.
- README updated (Components section + consumer `@source` step); changeset queued (minor -> 0.2.0).

Gotchas / decisions:

- The root package is itself `@ash2k5/cinematic-ds`, NOT a workspace member, so a workspace can't take
  it as a normal dependency (npm hit GitHub Packages -> 401). The styleguide instead imports the built
  lib via a tsconfig `paths` alias to `../dist/index` + Next `experimental.externalDir: true`. Build
  the lib before the styleguide.
- esbuild drops the `"use client"` banner when bundling; `scripts/add-use-client.mjs` prepends it to
  `dist/index.js` post-build (needed so consumer server components can import these client components).
- `ListItemProps` must `Omit<..., "title">` (native `title` attr is `string`, the prop is `ReactNode`).
- Tailwind v4 headless Chromium reports `prefers-reduced-transparency: reduce`, so glass renders as the
  opaque `surface-container` fallback in QA screenshots (correct behavior; glass shows for normal users).
- Audit: 4 advisories are all dev/build-tooling only (esbuild via tsup, postcss@8.4.31 via Next) — none
  in the published runtime deps; not force-downgrading (fixes are tsup->6 / next->9).

## Notes / gotchas

- Apps are separate deploy repos -> can't import across repos at deploy time. Resolved via GitHub
  Packages publish (CI). CONSUMER SETUP for P2-P4: each app needs an `.npmrc`
  (`@ash2k5:registry=https://npm.pkg.github.com` + `_authToken=${NODE_AUTH_TOKEN}`) and a PAT/secret
  with `read:packages` in Vercel/Render env to install the package in CI.
- Publishing needs `write:packages` (CI GITHUB_TOKEN has it). The local gh token only has
  repo/workflow/gist/read:org, so direct `npm publish` from this machine will 403 until
  `gh auth refresh -s write:packages,read:packages` is run in a real terminal.
- Tailwind v4 `@theme inline` keeps utilities pointing at runtime vars so `[data-theme]` swaps work.
- pnpm not installed; use npm. Node v24, npm 11. gh authed as ash2k5.
- Source `~/.claude/devpath.sh` at the start of every Bash command.
