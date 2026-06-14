import { defineConfig } from "tsup";

// Bundles the React component library to ESM + d.ts. dist/ also holds the
// hand-authored CSS (recipes.css, theme-toggle.js) and the token-generated
// CSS, so clean is off. The "use client" directive is prepended afterward by
// scripts/add-use-client.mjs (esbuild drops module-level directives when
// bundling), marking the whole entry a client boundary for consumer apps.
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: false,
  treeshake: true,
  target: "es2022",
  external: ["react", "react-dom"],
});
