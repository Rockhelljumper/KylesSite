import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("critical portfolio journeys render and navigate", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Engineering that works in the real world." })).toBeVisible();
  await page.getByRole("link", { name: "Read leadership case studies" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("link", { name: "Open case study" }).first().click();
  await expect(page).toHaveURL(/\/projects\/(resilient-platform-recovery|engineering-enablement-operations|regulated-platform-modernization)$/);
  await expect(page.getByRole("heading", { name: /Resilient Platform Recovery|Engineering Enablement|Regulated Platform Modernization/ })).toBeVisible();
});

test("Bathroom Buddy case study exposes only public product links", async ({ page }) => {
  await page.goto("/projects/bathroom-buddy");
  await expect(page.getByRole("heading", { name: "Bathroom Buddy" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Visit product site" })).toHaveAttribute("href", "https://www.bathroombuddy.io/");
  await expect(page.getByRole("link", { name: "View on the App Store" })).toHaveAttribute("href", /apps\.apple\.com/);
  await expect(page.getByRole("link", { name: "Get it on Google Play" })).toHaveAttribute("href", /play\.google\.com/);
});

test("primary routes stay within the viewport across target sizes", async ({ page }) => {
  for (const viewport of [
    { width: 320, height: 640 },
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1440, height: 1000 },
    { width: 1920, height: 1080 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/projects/bathroom-buddy");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});

test("contact route exposes the public contact workflow without submitting a bot-protected form", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Say hello" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Drop a note" })).toBeVisible();
  await expect(page.getByLabel("Full Name")).toBeVisible();
  await expect(page.getByLabel("Email Address")).toBeVisible();
});

test("home and life surfaces include personal context without hiding the work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("img", { name: "Kyle Simmons" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "The rest of the context matters." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Listen on Spotify" })).toHaveAttribute("href", "https://open.spotify.com/show/3CwC4tH9Yix6RIPuEo640u");
  await page.getByRole("link", { name: "More of the human context" }).click();
  await expect(page.getByRole("heading", { name: "A real person has side quests." })).toBeVisible();
  await page.goto("/now");
  await expect(page.getByRole("heading", { name: "A quiet snapshot, not a status feed." })).toBeVisible();
});

test("community publishes the Makerspace presentation library as browser-native web decks", async ({ page }) => {
  await page.goto("/community");
  await expect(page.getByRole("heading", { name: "Take a workshop home." })).toBeVisible();
  const opens = page.locator("[data-presentation-open]");
  await expect(opens).toHaveCount(3);
  await expect(opens.nth(0)).toHaveAttribute("href", "/community/presentations/computer-building-2023");
  await expect(opens.nth(1)).toHaveAttribute("href", "/community/presentations/what-is-docker");
  await expect(opens.nth(2)).toHaveAttribute("href", "/community/presentations/ai-for-makers-workshop-2026-08-17");
  expect(await opens.nth(0).getAttribute("target")).toBeNull();

  for (const href of [
    "/community/presentations/computer-building-2023",
    "/community/presentations/what-is-docker",
    "/community/presentations/ai-for-makers-workshop-2026-08-17",
  ]) {
    const response = await page.request.get(href);
    expect(response.ok(), `${href} should be served`).toBe(true);
  }

  await opens.nth(0).click();
  await expect(page).toHaveURL(/\/community\/presentations\/computer-building-2023$/);
  await expect(page.getByRole("heading", { name: "How to Build a Desktop Computer" })).toBeVisible();
  await expect(page.locator("[data-presentation-slide]")).toHaveAttribute("src", /Slide1\.JPG/);
  await expect(page.locator("[data-presentation-documentation]")).toContainText("Your slide guide");
  await expect(page.locator("[data-presentation-documentation]")).toContainText("Build with a plan");
  await expect(page.locator("[data-presentation-documentation]")).toContainText("Provided workshop notes");
  await expect(page.locator("[data-presentation-why]")).toContainText("one early choice can narrow your budget");
  await expect(page.locator("[data-presentation-try]")).toContainText("two jobs your computer must do best");
  await page.getByRole("button", { name: "Next →" }).click();
  await expect(page.locator("[data-presentation-slide]")).toHaveAttribute("src", /Slide2\.JPG/);
  await expect(page.locator("[data-presentation-documentation]")).toContainText("The core parts list");

  await page.goto("/community/presentations/what-is-docker");
  await expect(page.locator("[data-presentation-documentation]")).toContainText("Draft notes");
  await expect(page.locator("[data-presentation-documentation]")).toContainText("Welcome to Docker");
});

test("personal visual motion yields to reduced-motion preferences", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Engineering that works in the real world." })).toBeVisible();
  await expect(page.locator(".motion-float").first()).toHaveCSS("animation-duration", "1e-05s");
});

test("home page has no automatically detectable critical accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  expect(results.violations).toEqual([]);
});
