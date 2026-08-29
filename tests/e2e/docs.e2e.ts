import { expect, test } from "@playwright/test";

test("Persian documentation is the default RTL experience", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/");

  await expect(page).toHaveTitle(/مستندات Qbit Console/);
  await expect(page.getByRole("heading", { name: "Qbit Console" })).toBeVisible();
  await expect(page.getByText("مدیریت سرورهای ریموت شما")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "fa-IR");
  await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  await expect.poll(() => page.locator("html").evaluate((node) => getComputedStyle(node).direction)).toBe("rtl");

  const logoSpacing = await page.locator(".VPNavBarTitle .logo").evaluate((node) => {
    const style = getComputedStyle(node);
    return { start: style.marginRight, end: style.marginLeft };
  });
  expect(logoSpacing).toEqual({ start: "0px", end: "8px" });

  const searchSpacing = await page.locator(".VPNavBarSearch").evaluate((node) => {
    const style = getComputedStyle(node);
    return { start: style.paddingRight, end: style.paddingLeft };
  });
  expect(searchSpacing).toEqual({ start: "32px", end: "0px" });
});

test("English documentation is available as an LTR locale", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/en/");

  await expect(page).toHaveTitle(/Qbit Console Docs/);
  await expect(page.getByText("Manage your remote servers")).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("lang", "en-US");
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
  await expect.poll(() => page.locator("html").evaluate((node) => getComputedStyle(node).direction)).toBe("ltr");

  const logoSpacing = await page.locator(".VPNavBarTitle .logo").evaluate((node) => {
    const style = getComputedStyle(node);
    return { start: style.marginLeft, end: style.marginRight };
  });
  expect(logoSpacing).toEqual({ start: "0px", end: "8px" });

  const searchSpacing = await page.locator(".VPNavBarSearch").evaluate((node) => {
    const style = getComputedStyle(node);
    return { start: style.paddingLeft, end: style.paddingRight };
  });
  expect(searchSpacing).toEqual({ start: "32px", end: "0px" });
});

test("remote-server security guidance is reachable", async ({ page }) => {
  await page.goto("/guide/remote-servers");

  await expect(page.getByRole("heading", { name: "سرورهای ریموت", level: 1 })).toBeVisible();
  await expect(page.getByText("اطلاعات محرمانه را وارد نکنید")).toBeVisible();
  await page.getByRole("link", { name: "امنیت" }).first().click();
  await expect(page).toHaveURL(/\/guide\/security$/);
  await expect(page.getByRole("heading", { name: "امنیت", level: 1 })).toBeVisible();
});

test("desktop navigation spacing mirrors correctly between RTL and LTR", async ({ page }) => {
  await page.setViewportSize({ width: 1600, height: 900 });

  const readNavigationSpacing = () =>
    page.evaluate(() => {
      const logo = document.querySelector<HTMLElement>(".VPNavBarTitle .logo");
      const search = document.querySelector<HTMLElement>(".VPNavBarSearch");
      if (!logo || !search) throw new Error("navigation elements not found");

      const logoStyle = getComputedStyle(logo);
      const searchStyle = getComputedStyle(search);
      return {
        logoMarginLeft: logoStyle.marginLeft,
        logoMarginRight: logoStyle.marginRight,
        searchPaddingLeft: searchStyle.paddingLeft,
        searchPaddingRight: searchStyle.paddingRight,
      };
    });

  await page.goto("/");
  await expect.poll(readNavigationSpacing).toEqual({
    logoMarginLeft: "8px",
    logoMarginRight: "0px",
    searchPaddingLeft: "0px",
    searchPaddingRight: "32px",
  });

  await page.goto("/en/");
  await expect.poll(readNavigationSpacing).toEqual({
    logoMarginLeft: "0px",
    logoMarginRight: "8px",
    searchPaddingLeft: "32px",
    searchPaddingRight: "0px",
  });
});
