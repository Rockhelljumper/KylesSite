import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const read = (path) => readFile(resolve(root, path), "utf8");
const [configRaw, css, routes, documentation] = await Promise.all([
  read(".ai-engineering/design-governance.json"),
  read("src/app/globals.css"),
  read("src/lib/data/siteRoutes.ts"),
  read("docs/principal-design-controls.md"),
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
  "@media (prefers-reduced-motion: reduce)",
  ".nav-link",
  "min-height: 2.75rem",
];

for (const value of requiredCss) {
  if (!css.includes(value)) failures.push(`Missing design CSS control: ${value}`);
}

for (const label of config.controls.desktop_navigation_labels) {
  if (!routes.includes(`label: "${label}"`)) {
    failures.push(`Route inventory does not expose ${label}`);
  }
}

for (const requiredText of ["Baseline captured from localhost:3002", "Automated checks", "Design contract"]) {
  if (!documentation.includes(requiredText)) {
    failures.push(`Design-control documentation is missing: ${requiredText}`);
  }
}

if (failures.length > 0) {
  throw new Error(`Design controls failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `[design-controls] validated ${config.controls.desktop_navigation_labels.length} navigation destinations and ${requiredCss.length} visual controls.`,
);
