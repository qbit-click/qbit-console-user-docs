import { expect, test } from "@playwright/test";

test("Persian documentation is the default RTL experience", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  await expect(page).toHaveTitle(/مستندات Qbit Console/);
  await expect(page.getByText("مدیریت سرورهای ریموت شما")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "fa-IR");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect(page.locator(".navbar__search-input")).toBeVisible();
  await expect(page.getByRole("complementary", { name: "ثبت و مدیریت سرور ریموت" })).toBeVisible();

  const searchDirection = await page.locator(".navbar__search-input").evaluate((node) => {
    const style = getComputedStyle(node);
    return { direction: style.direction, textAlign: style.textAlign };
  });
  expect(searchDirection).toEqual({ direction: "rtl", textAlign: "right" });

  const logoSpacing = await page.locator(".navbar__logo").evaluate((node) => {
    const style = getComputedStyle(node);
    return { left: style.marginLeft, right: style.marginRight };
  });
  expect(logoSpacing).toEqual({ left: "8px", right: "0px" });
});

test("English documentation is available as an LTR locale", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/en/");

  await expect(page).toHaveTitle(/Qbit Console Docs/);
  await expect(page.getByText("Manage your remote servers")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await expect(page.locator(".navbar__search-input")).toBeVisible();

  const logoSpacing = await page.locator(".navbar__logo").evaluate((node) => {
    const style = getComputedStyle(node);
    return { left: style.marginLeft, right: style.marginRight };
  });
  expect(logoSpacing).toEqual({ left: "0px", right: "8px" });
});

test("remote-server security guidance is reachable", async ({ page }) => {
  await page.goto("/guide/remote-servers");

  await expect(page.getByRole("heading", { name: "سرورهای ریموت", level: 1 })).toBeVisible();
  await expect(page.getByText("اطلاعات محرمانه را وارد نکنید")).toBeVisible();
  await page.getByRole("link", { name: "امنیت" }).first().click();
  await expect(page).toHaveURL(/\/guide\/security$/);
  await expect(page.getByRole("heading", { name: "امنیت", level: 1 })).toBeVisible();
});

test("local search returns Persian and English documentation", async ({ page }) => {
  await page.goto("/search?q=سرورهای%20ریموت");
  await expect(page.getByRole("link", { name: /سرورهای ریموت/ }).first()).toBeVisible();

  await page.goto("/en/search?q=Remote%20servers");
  await expect(page.getByRole("link", { name: /Remote servers/i }).first()).toBeVisible();
});
