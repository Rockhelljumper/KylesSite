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
    description: "Static in-browser slide decks for community presentations. Each deck uses normal in-site navigation and renders source-slide images with keyboard, button, range, and participant-facing per-slide documentation, context, and practice prompts instead of asking visitors to download documents.",
    public_api: [
      { name: "/community/presentations/[slug]", signature: "GET /community/presentations/:slug", description: "Renders a browser-native Makerspace slide deck.", inputs: "published presentation slug", outputs: "HTML or 404" }
    ],
    dependencies: ["personal-life", "portfolio-components", "next", "react"],
    test_coverage: "high"
  };
  const careerModule = {
    id: "career-positioning",
    name: "Remote leadership positioning",
    path: "src/lib/data/career.ts, src/components/home/CareerProof.tsx, src/components/career/RemoteRolePanel.tsx, docs/linkedin-alignment.md",
    type: "portfolio-governance",
    description: "A single governed source for remote-only leadership availability, target roles, résumé-sourced proof points, public recruiter path, and a profile-owner LinkedIn alignment checklist.",
    public_api: [
      { name: "remote leadership focus", signature: "careerData", description: "Supplies the current role focus and verified proof-point identifiers to public portfolio routes." },
      { name: "check:design", signature: "npm run check:design", description: "Prevents public positioning from reintroducing Austin or omitting the governed remote role focus." }
    ],
    dependencies: ["portfolio-routes", "claims-registry", "design-governance"],
    test_coverage: "high"
  };
  const containerModule = {
    id: "container-deployment",
    name: "Reproducible Coolify container deployment",
    path: "Dockerfile, scripts/check-container-build.mjs, docs/coolify-deployment.md, .github/workflows/quality.yml",
    type: "deployment-governance",
    description: "A Node 20, lockfile-only, standalone Next build that retains build dependencies such as Tailwind and verifies the same Docker path Coolify uses.",
    public_api: [
      { name: "check:container", signature: "npm run check:container", description: "Rejects unsupported Node versions, mutable installs, and incomplete standalone image output." },
      { name: "Docker build", signature: "docker build --tag kyles-site:ci .", description: "Builds the production container in CI before deployment." }
    ],
    dependencies: ["next", "npm-lockfile", "docker", "coolify"],
    test_coverage: "high"
  };
  map.generated_at = now;
  map.modules = [...map.modules.filter((module) => module.id !== designModule.id && module.id !== presentationModule.id && module.id !== careerModule.id && module.id !== containerModule.id), designModule, presentationModule, careerModule, containerModule];
  if (!map.entry_points.includes("design-governance")) map.entry_points.push("design-governance");
  if (!map.entry_points.includes("community-presentation-viewers")) map.entry_points.push("community-presentation-viewers");
  if (!map.entry_points.includes("career-positioning")) map.entry_points.push("career-positioning");
  if (!map.entry_points.includes("container-deployment")) map.entry_points.push("container-deployment");
  await writeFile(resolve(root, ".ai-engineering/functionality-map.json"), `${JSON.stringify(map, null, 2)}\n`);
}

console.log(`[control-plane] ${writeMaps ? "refreshed map and" : "wrote"} verification manifest for ${routeLabels.length} navigation destinations.`);
