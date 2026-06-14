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

- [~] P0 — DS foundation (tokens, theming, fonts, recipes, styleguide). IN PROGRESS.
- [ ] P1 — DS components (Radix + CVA, all states, both themes, styleguide).
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

Remaining for P0 (needs user input):
- Distribution model: publish to GitHub Packages (Changesets, `.npmrc` + PAT in CI) vs vendor `dist/`
  into each app via a sync script. Determines how P2-P4 consume the package.
- git init on main + first commit + create/push GitHub repo (NEEDS USER CONFIRMATION before push).

## Notes / gotchas

- Apps are separate deploy repos -> can't import across repos at deploy time. Either publish to
  GitHub Packages or vendor `dist/` per app. Confirm with user before publishing.
- Tailwind v4 `@theme inline` keeps utilities pointing at runtime vars so `[data-theme]` swaps work.
- pnpm not installed; use npm. Node v24, npm 11. gh authed as ash2k5.
- Source `~/.claude/devpath.sh` at the start of every Bash command.
