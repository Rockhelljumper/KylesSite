import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("critical portfolio journeys render and navigate", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Engineering leadership that stays close to the systems." })).toBeVisible();
  await page.getByRole("link", { name: "View selected work" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "AI engineering" }).click();
  await expect(page.getByText("1 project shown")).toBeVisible();
  await page.getByRole("link", { name: "Read case study" }).click();
  await expect(page).toHaveURL(/\/projects\/ai-engineering-workflow-lab$/);
  await expect(page.getByRole("heading", { name: "AI Engineering Workflow Lab" })).toBeVisible();
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
  await expect(page.getByRole("heading", { name: "Let's Talk" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Send a Message" })).toBeVisible();
  await expect(page.getByLabel("Full Name")).toBeVisible();
  await expect(page.getByLabel("Email Address")).toBeVisible();
});

test("home page has no automatically detectable critical accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  expect(results.violations).toEqual([]);
});
