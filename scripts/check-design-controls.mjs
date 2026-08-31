import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFile(resolve(root, path), "utf8");
const [configRaw, css, routes, documentation, projects, caseStudy, carousel, community, presentationLibrary, presentationViewer] = await Promise.all([
  read(".ai-engineering/design-governance.json"),
  read("src/app/globals.css"),
  read("src/lib/data/siteRoutes.ts"),
  read("docs/principal-design-controls.md"),
  read("src/lib/data/projects.ts"),
  read("src/components/projects/CaseStudy.tsx"),
  read("src/components/projects/AppScreenshotCarousel.tsx"),
  read("src/lib/data/community.ts"),
  read("src/components/community/PresentationLibrary.tsx"),
  read("src/components/community/PresentationViewer.tsx"),
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

const presentationSlugs = config.controls.browser_native_presentation_slugs ?? [];
if (presentationSlugs.length !== 3) {
  failures.push("Design governance must define all three browser-native Makerspace presentation routes");
}

if (config.controls.presentation_navigation !== "same-tab" || presentationLibrary.includes('target="_blank"') || !presentationLibrary.includes("WEB DECK") || presentationLibrary.includes("download")) {
  failures.push("Presentation library must navigate in-page to an explicit browser-native deck without a document download control");
}

if (!config.controls.presentation_slide_guides_required || !presentationViewer.includes("data-presentation-viewer") || !presentationViewer.includes("data-presentation-documentation") || !presentationViewer.includes("Slide guide") || !presentationViewer.includes("ArrowLeft") || !presentationViewer.includes("ArrowRight")) {
  failures.push("Presentation viewer is missing governed web-native slide controls or documentation");
}

for (const slug of presentationSlugs) {
  const presentationIndex = community.indexOf(`slug: \"${slug}\"`);
  if (presentationIndex === -1 || community.indexOf("slideDocumentation:", presentationIndex) === -1) {
    failures.push(`${slug} is missing canonical Makerspace presentation documentation`);
  }

  try {
    await access(resolve(root, "public", "images", "community", "presentations", slug, "slides", "Slide1.JPG"));
  } catch {
    failures.push(`${slug} is missing its first browser-native slide image`);
  }
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
