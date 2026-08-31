import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFile(resolve(root, path), "utf8");
const now = new Date().toISOString();
const writeMaps = process.argv.includes("--write-maps");
const [governanceRaw, routesRaw, mapRaw] = await Promise.all([
  read(".ai-engineering/design-governance.json"),
  read("src/lib/data/siteRoutes.ts"),
  read(".ai-engineering/functionality-map.json"),
]);
const governance = JSON.parse(governanceRaw);
const map = JSON.parse(mapRaw);
const routeLabels = [...routesRaw.matchAll(/label: "([^"]+)"/g)].map((match) => match[1]);

const manifest = {
  generated_at: now,
  source: "Ai-Engineering design-governance control",
  design_governance_version: governance.version,
  mode: writeMaps ? "local refresh" : "CI evidence refresh",
  route_labels: routeLabels,
  controls: governance.controls,
  human_review_required: governance.update_policy.human_review_required,
};

const outputDirectory = resolve(root, ".ai-engineering-output", "design-governance");
await mkdir(outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, "verification-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

if (writeMaps) {
  const designModule = {
    id: "design-governance",
    name: "Principal-design controls",
    path: ".ai-engineering/design-governance.json, docs/principal-design-controls.md, e2e/design-controls.spec.ts",
    type: "quality-governance",
    description: "Route inventory, measurable visual thresholds, accessible motion requirements, and reviewer-owned evidence capture for the portfolio.",
    public_api: [
      { name: "check:design", signature: "npm run check:design", description: "Validates design tokens, documented criteria, and route inventory." },
      { name: "test:visual:evidence", signature: "npm run test:visual:evidence", description: "Captures reviewable non-baseline screenshots at approved viewports." }
    ],
    dependencies: ["portfolio-routes", "portfolio-components", "playwright"],
    test_coverage: "high"
  };
  const presentationModule = {
    id: "community-presentation-viewers",
    name: "Browser-native Makerspace presentation viewers",
    path: "src/app/community/presentations/[slug], src/components/community/PresentationViewer.tsx, src/lib/data/community.ts",
    type: "ui",
    description: "Static in-browser slide decks for community presentations. Each deck renders source-slide images with keyboard, button, and range controls instead of asking visitors to download documents.",
    public_api: [
      { name: "/community/presentations/[slug]", signature: "GET /community/presentations/:slug", description: "Renders a browser-native Makerspace slide deck.", inputs: "published presentation slug", outputs: "HTML or 404" }
    ],
    dependencies: ["personal-life", "portfolio-components", "next", "react"],
    test_coverage: "high"
  };
  map.generated_at = now;
  map.modules = [...map.modules.filter((module) => module.id !== designModule.id && module.id !== presentationModule.id), designModule, presentationModule];
  if (!map.entry_points.includes("design-governance")) map.entry_points.push("design-governance");
  if (!map.entry_points.includes("community-presentation-viewers")) map.entry_points.push("community-presentation-viewers");
  await writeFile(resolve(root, ".ai-engineering/functionality-map.json"), `${JSON.stringify(map, null, 2)}\n`);
}

console.log(`[control-plane] ${writeMaps ? "refreshed map and" : "wrote"} verification manifest for ${routeLabels.length} navigation destinations.`);
