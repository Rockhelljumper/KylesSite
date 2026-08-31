import { expect, test } from "@playwright/test";
import { communityData } from "@/lib/data/community";
import { primaryNavigation, publicRoutes } from "@/lib/data/siteRoutes";

const publicCaseStudies = [
  "/projects/bathroom-buddy",
  "/projects/reliable-financial-integration",
  "/projects/ai-engineering-workflow-lab",
] as const;
const publicPresentationDecks = communityData.presentations.map((presentation) => `/community/presentations/${presentation.slug}`);

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
  const routes = [...publicRoutes.map((route) => route.href), ...publicCaseStudies, ...publicPresentationDecks];
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

test("every public content route has contextual motion that honors reduced-motion", async ({ page }) => {
  const routesWithKineticMotion = [
    "/projects",
    "/about",
    "/now",
    "/community",
    "/resume",
    "/contact",
    ...publicCaseStudies,
    ...publicPresentationDecks,
  ];

  for (const route of routesWithKineticMotion) {
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.goto(route);
    const kinetic = page.locator("[data-page-kinetic]");
    await expect(kinetic).toHaveCount(1);
    expect(await kinetic.locator("span").evaluateAll((elements) =>
      elements.some((element) => getComputedStyle(element).animationName !== "none"),
    )).toBe(true);
  }

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("[data-page-kinetic] .kinetic-line").first()).toHaveCSS("animation-duration", "1e-05s");
});

test("project actions are visually distinct and every featured case study carries source-led visual evidence", async ({ page }) => {
  await page.goto("/projects");
  const projectAction = page.locator("[data-project-action]").first();
  await expect(projectAction).toHaveClass(/button-secondary/);
  await expect(projectAction).toHaveCSS("border-top-width", "2px");
  expect((await projectAction.boundingBox())?.height).toBeGreaterThanOrEqual(44);

  const featuredVisuals = [
    ["bathroom-buddy", /bathroom-buddy-press-hero\.jpg/],
    ["reliable-financial-integration", /vantaca-architecture-overview\.svg/],
    ["ai-engineering-workflow-lab", /ai-engineering-workflow\.svg/],
  ] as const;

  for (const [slug, source] of featuredVisuals) {
    const cardVisual = page.locator(`[data-project-card-visual="${slug}"]`);
    await expect(cardVisual).toBeVisible();
    await expect(cardVisual.getByRole("img")).toHaveAttribute("src", source);
  }

  for (const [slug, source] of featuredVisuals) {
    await page.goto(`/projects/${slug}`);
    const caseStudyVisual = page.locator(`[data-project-banner][data-project-slug="${slug}"]`);
    await expect(caseStudyVisual).toBeVisible();
    await expect(caseStudyVisual.getByRole("img")).toHaveAttribute("src", source);
  }

  await page.goto("/projects/reliable-financial-integration");
  await expect(page.getByRole("link", { name: "Open full architecture diagram" })).toHaveAttribute(
    "href",
    "/images/projects/vantaca-runtime-architecture.svg",
  );

  await page.goto("/projects/bathroom-buddy");
  const banner = page.locator("[data-project-banner]");
  await expect(banner).toBeVisible();
  await expect(banner.getByRole("img")).toHaveAttribute("src", /bathroom-buddy-press-hero\.jpg/);

  const carousel = page.locator("[data-project-gallery]");
  await expect(carousel).toBeVisible();
  await expect(carousel.getByRole("button", { name: "Show next app screen" })).toBeVisible();
  await expect(carousel.getByRole("button", { name: "Show previous app screen" })).toBeVisible();
  await expect(carousel.getByRole("heading", { name: "Start with the decision, not an account wall" })).toBeVisible();
  await carousel.getByRole("button", { name: "Show next app screen" }).click();
  await expect(carousel.getByRole("heading", { name: "Find nearby options on a map" })).toBeVisible();
});
