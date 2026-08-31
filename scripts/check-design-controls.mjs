import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFile(resolve(root, path), "utf8");
const [configRaw, css, routes, documentation, projects, caseStudy, carousel] = await Promise.all([
  read(".ai-engineering/design-governance.json"),
  read("src/app/globals.css"),
  read("src/lib/data/siteRoutes.ts"),
  read("docs/principal-design-controls.md"),
  read("src/lib/data/projects.ts"),
  read("src/components/projects/CaseStudy.tsx"),
  read("src/components/projects/AppScreenshotCarousel.tsx"),
]);
const config = JSON.parse(configRaw);
const failures = [];

const requiredCss = [
  "--content-shell-max: 88rem",
  "--body-copy-floor: 1.125rem",
  "--nav-action-size: 1.125rem",
  "--hero-heading-min: 3.5rem",
  ".hero-title",
  "3.5vw",
  ".hero-kinetic",
  ".hero-orbit",
  ".page-kinetic",
  ".project-banner",
  ".carousel-frame",
  ".button-compact",
  "@media (prefers-reduced-motion: reduce)",
  ".nav-link",
  "min-height: 2.75rem",
];

for (const value of requiredCss) {
  if (!css.includes(value)) failures.push(`Missing design CSS control: ${value}`);
}

const featuredVisuals = Object.entries(config.controls.featured_project_visuals ?? {});
if (featuredVisuals.length !== 3) {
  failures.push("Design governance must define visual evidence for all three featured case studies");
}

for (const [slug, visual] of featuredVisuals) {
  if (!visual?.asset || !projects.includes(visual.asset)) {
    failures.push(`${slug} does not use its governed source-led project visual`);
    continue;
  }

  try {
    await access(resolve(root, "public", visual.asset.replace(/^\//, "")));
  } catch {
    failures.push(`${slug} visual asset is missing from public media`);
  }

  if (visual.full_asset) {
    try {
      await access(resolve(root, "public", visual.full_asset.replace(/^\//, "")));
    } catch {
      failures.push(`${slug} full-size visual asset is missing from public media`);
    }
  }
}

if (projects.includes("map-results-banner.svg")) {
  failures.push("Legacy Bathroom Buddy placeholder banner remains in project data");
}

if (!caseStudy.includes("data-project-banner") || !caseStudy.includes("data-project-slug") || !caseStudy.includes("AppScreenshotCarousel")) {
  failures.push("Case studies are missing the governed project banner or app carousel integration");
}

if (!carousel.includes("Show next app screen") || !carousel.includes("Show previous app screen")) {
  failures.push("App carousel is missing accessible slide controls");
}

for (const label of config.controls.desktop_navigation_labels) {
  if (!routes.includes(`label: "${label}"`)) {
    failures.push(`Route inventory does not expose ${label}`);
  }
}

for (const requiredText of ["Baseline captured from localhost:3002", "Automated checks", "Design contract", "Page-level behavior contract"]) {
  if (!documentation.includes(requiredText)) {
    failures.push(`Design-control documentation is missing: ${requiredText}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Design controls failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `[design-controls] validated ${config.controls.desktop_navigation_labels.length} navigation destinations, ${featuredVisuals.length} featured project visuals, and ${requiredCss.length} visual controls.`,
);
