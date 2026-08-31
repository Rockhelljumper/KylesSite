import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";

type EvidenceCapture = {
  route: string;
  name: string;
  viewport: { width: number; height: number };
  colorScheme?: "light" | "dark";
  reducedMotion?: "reduce" | "no-preference";
};

const captures: readonly EvidenceCapture[] = [
  { route: "/", name: "home-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/", name: "home-mobile", viewport: { width: 390, height: 844 } },
  {
    route: "/",
    name: "home-ultrawide-dark-motion",
    viewport: { width: 2540, height: 1345 },
    colorScheme: "dark",
    reducedMotion: "no-preference",
  },
  { route: "/projects", name: "work-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/projects/bathroom-buddy", name: "bathroom-buddy-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/projects/reliable-financial-integration", name: "financial-integration-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/projects/ai-engineering-workflow-lab", name: "ai-workflow-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/about", name: "about-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/now", name: "life-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/community", name: "community-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/resume", name: "resume-desktop", viewport: { width: 1440, height: 1000 } },
  { route: "/contact", name: "contact-desktop", viewport: { width: 1440, height: 1000 } },
];

test.skip(process.env.CAPTURE_DESIGN_EVIDENCE !== "true", "Evidence capture runs only in the design-governance workflow.");

test("captures reviewable design evidence without establishing a visual baseline", async ({ page }) => {
  const outputDirectory = resolve(process.cwd(), "artifacts", "design-evidence");
  await mkdir(outputDirectory, { recursive: true });
  const records = [];

  for (const capture of captures) {
    await page.setViewportSize(capture.viewport);
    const colorScheme = capture.colorScheme ?? "light";
    const reducedMotion = capture.reducedMotion ?? "reduce";
    await page.emulateMedia({ colorScheme, reducedMotion });
    await page.addInitScript((theme) => localStorage.setItem("theme", theme), colorScheme);
    await page.goto(capture.route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    if (colorScheme === "dark") await expect(page.locator("html")).toHaveClass(/dark/);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: resolve(outputDirectory, `${capture.name}.png`), fullPage: true });
    const metrics = capture.name === "home-ultrawide-dark-motion"
      ? await page.evaluate(() => ({
          contentShellPx: Math.round(document.querySelector(".site-shell")!.getBoundingClientRect().width),
          heroHeadingPx: Number.parseFloat(getComputedStyle(document.querySelector("h1")!).fontSize),
          heroPortraitPx: Math.round(document.querySelector(".hero-portrait")!.getBoundingClientRect().width),
          primaryNavigationLinks: document.querySelectorAll("[data-testid='desktop-navigation'] a").length,
          documentHeightPx: document.documentElement.scrollHeight,
          motionEnabled: [...document.querySelectorAll<HTMLElement>(".hero-orbit, .motion-float")]
            .some((element) => getComputedStyle(element).animationName !== "none"),
        }))
      : undefined;
    records.push({ ...capture, colorScheme, reducedMotion, metrics });
  }

  await writeFile(
    resolve(outputDirectory, "index.json"),
    `${JSON.stringify({ generated_at: new Date().toISOString(), commit: process.env.GITHUB_SHA ?? "local", baseline: false, captures: records }, null, 2)}\n`,
  );
});
