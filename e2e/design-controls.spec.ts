import { expect, test } from "@playwright/test";
import { primaryNavigation, publicRoutes } from "@/lib/data/siteRoutes";

const publicCaseStudies = [
  "/projects/bathroom-buddy",
  "/projects/reliable-financial-integration",
  "/projects/ai-engineering-workflow-lab",
] as const;

test("principal desktop controls remain measurable", async ({ page }) => {
  await page.setViewportSize({ width: 2540, height: 1345 });
  await page.goto("/");

  const desktopNavigation = page.getByTestId("desktop-navigation");
  await expect(desktopNavigation).toBeVisible();
  await expect(desktopNavigation.getByRole("link")).toHaveText(primaryNavigation.map((route) => route.label));

  const dimensions = await page.evaluate(() => {
    const shell = document.querySelector(".site-shell")?.getBoundingClientRect();
    const heading = document.querySelector("h1")?.getBoundingClientRect();
    const headingSize = Number.parseFloat(getComputedStyle(document.querySelector("h1")!).fontSize);
    const portrait = document.querySelector<HTMLElement>("[data-testid='hero-portrait'] .hero-portrait")?.getBoundingClientRect();
    const bodyCopy = Number.parseFloat(getComputedStyle(document.body).fontSize);
    const navigationCopy = Number.parseFloat(getComputedStyle(document.querySelector<HTMLElement>("[data-nav-action]")!).fontSize);
    const animated = [...document.querySelectorAll<HTMLElement>(".hero-orbit, .motion-float")]
      .some((element) => getComputedStyle(element).animationName !== "none");
    const actions = [...document.querySelectorAll<HTMLElement>("[data-nav-action], [data-cta]")]
      .map((element) => element.getBoundingClientRect());

    return {
      shellWidth: shell?.width ?? 0,
      headingWidth: heading?.width ?? 0,
      headingSize,
      portraitWidth: portrait?.width ?? 0,
      bodyCopy,
      navigationCopy,
      animated,
      actionTargetsMeetMinimum: actions.every((rect) => rect.width >= 44 && rect.height >= 44),
    };
  });

  expect(dimensions.shellWidth).toBeGreaterThanOrEqual(1400);
  expect(dimensions.headingWidth).toBeGreaterThan(0);
  expect(dimensions.headingSize).toBeGreaterThanOrEqual(88);
  expect(dimensions.portraitWidth).toBeGreaterThanOrEqual(336);
  expect(dimensions.bodyCopy).toBeGreaterThanOrEqual(18);
  expect(dimensions.navigationCopy).toBeGreaterThanOrEqual(18);
  expect(dimensions.animated).toBe(true);
  expect(dimensions.actionTargetsMeetMinimum).toBe(true);
});

test("all public pages remain reachable and fit narrow and wide viewports", async ({ page }) => {
  const routes = [...publicRoutes.map((route) => route.href), ...publicCaseStudies];
  for (const viewport of [
    { width: 320, height: 640 },
    { width: 1440, height: 1000 },
  ]) {
    await page.setViewportSize(viewport);
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.ok(), `${route} should return a successful response`).toBe(true);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  }
});

test("mobile navigation exposes the complete inventory and yields focus on escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const button = page.getByRole("button", { name: "Open navigation menu" });
  await button.click();
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile primary" });
  await expect(mobileNavigation.getByRole("link")).toHaveText(primaryNavigation.map((route) => route.label));
  await page.keyboard.press("Escape");
  await expect(mobileNavigation).toBeHidden();
  await expect(button).toBeFocused();
});

test("motion is visible by default and neutralized for reduced-motion users", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("hero-kinetic").locator(".hero-orbit").first()).not.toHaveCSS("animation-name", "none");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator(".motion-float").first()).toHaveCSS("animation-duration", "1e-05s");
});
