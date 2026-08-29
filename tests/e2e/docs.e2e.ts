import { expect, test } from "@playwright/test";

test("Persian documentation is the default RTL experience", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/مستندات Qbit Console/);
  await expect(page.getByRole("heading", { name: "Qbit Console" })).toBeVisible();
  await expect(page.getByText("مدیریت سرورهای ریموت شما")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "fa-IR");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect.poll(() => page.locator("html").evaluate((node) => getComputedStyle(node).direction)).toBe("rtl");
});

test("English documentation is available as an LTR locale", async ({ page }) => {
  await page.goto("/en/");

  await expect(page).toHaveTitle(/Qbit Console Docs/);
  await expect(page.getByText("Manage your remote servers")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await expect.poll(() => page.locator("html").evaluate((node) => getComputedStyle(node).direction)).toBe("ltr");
});

test("remote-server security guidance is reachable", async ({ page }) => {
  await page.goto("/guide/remote-servers");

  await expect(page.getByRole("heading", { name: "سرورهای ریموت", level: 1 })).toBeVisible();
  await expect(page.getByText("اطلاعات محرمانه را وارد نکنید")).toBeVisible();
  await page.getByRole("link", { name: "امنیت" }).first().click();
  await expect(page).toHaveURL(/\/guide\/security$/);
  await expect(page.getByRole("heading", { name: "امنیت", level: 1 })).toBeVisible();
});
