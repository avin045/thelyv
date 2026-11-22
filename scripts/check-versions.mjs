// Fails if the version differs between any plugin manifest and
// .release-please-manifest.json. Run: node scripts/check-versions.mjs
import { readFileSync } from "node:fs";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));

const sources = {
  ".release-please-manifest.json": (j) => j["."],
  ".claude-plugin/plugin.json": (j) => j.version,
  ".codex-plugin/plugin.json": (j) => j.version,
  ".grok-plugin/plugin.json": (j) => j.version,
  ".grok-plugin/marketplace.json": (j) => j.plugins?.[0]?.version,
  "plugin.json": (j) => j.version,
  "gemini-extension.json": (j) => j.version,
};

const found = Object.entries(sources).map(([path, pick]) => [path, pick(read(path))]);
const versions = new Set(found.map(([, v]) => v));

for (const [path, v] of found) console.log(`${v ?? "(missing)"}  ${path}`);

if (versions.size !== 1 || versions.has(undefined)) {
  console.error("Versions differ. Let release-please bump them, or fix them by hand to match.");
  process.exit(1);
}
console.log(`All manifests at ${[...versions][0]}.`);
