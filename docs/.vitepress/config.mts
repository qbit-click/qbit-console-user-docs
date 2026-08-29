import { defineConfig } from "vitepress";

import { enNav, enSidebar, faNav, faSidebar } from "./site";

const base = process.env.DOCS_BASE_PATH || "/";

export default defineConfig({
  base,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: "https://qbit-click.github.io/qbit-console-user-docs/",
  },
  head: [
    ["meta", { name: "theme-color", content: "#357da1" }],
    ["link", { rel: "icon", href: `${base}favicon.svg`, type: "image/svg+xml" }],
  ],
  locales: {
    root: {
      label: "فارسی",
      lang: "fa-IR",
      dir: "rtl",
      title: "مستندات Qbit Console",
      description: "راهنمای کاربری مدیریت سرورهای ریموت در Qbit Console",
    },
    en: {
      label: "English",
      lang: "en-US",
      dir: "ltr",
      link: "/en/",
      title: "Qbit Console Docs",
      description: "User documentation for managing third-party remote servers with Qbit Console",
    },
  },
  themeConfig: {
    logo: "/favicon.svg",
    search: { provider: "local" },
    socialLinks: [{ icon: "github", link: "https://github.com/qbit-click/qbit-console-user-docs" }],
    locales: {
      root: {
        nav: faNav,
        sidebar: [{ text: "راهنمای Qbit Console", items: faSidebar }],
        outline: { label: "در این صفحه", level: [2, 3] },
        docFooter: { prev: "صفحه قبل", next: "صفحه بعد" },
        lastUpdated: { text: "آخرین به‌روزرسانی" },
        returnToTopLabel: "بازگشت به بالا",
        sidebarMenuLabel: "منو",
        darkModeSwitchLabel: "حالت نمایش",
        editLink: {
          pattern: "https://github.com/qbit-click/qbit-console-user-docs/edit/main/docs/:path",
          text: "ویرایش این صفحه در GitHub",
        },
      },
      en: {
        nav: enNav,
        sidebar: [{ text: "Qbit Console guide", items: enSidebar }],
        outline: { label: "On this page", level: [2, 3] },
        editLink: {
          pattern: "https://github.com/qbit-click/qbit-console-user-docs/edit/main/docs/:path",
          text: "Edit this page on GitHub",
        },
      },
    },
  },
});
