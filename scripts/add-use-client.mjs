// Prepends the "use client" directive to the bundled entry. esbuild drops
// module-level directives during bundling, so tsup cannot emit it directly.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const file = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "dist",
  "index.js"
);
const content = readFileSync(file, "utf8");

if (!content.startsWith('"use client"')) {
  writeFileSync(file, `"use client";\n${content}`);
  console.log('Prepended "use client" to dist/index.js');
}
