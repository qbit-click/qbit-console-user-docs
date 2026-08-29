export type SidebarItem = {
  text: string;
  link: string;
};

export const faSidebar: SidebarItem[] = [
  { text: "شروع کار", link: "/guide/getting-started" },
  { text: "حساب و فضای کاری", link: "/guide/workspaces" },
  { text: "سرورهای ریموت", link: "/guide/remote-servers" },
  { text: "مانیتورینگ منابع", link: "/guide/monitoring" },
  { text: "هشدارها و اعلان‌ها", link: "/guide/alerts-notifications" },
  { text: "پلن و صورتحساب", link: "/guide/billing" },
  { text: "تنظیمات", link: "/guide/settings" },
  { text: "امنیت", link: "/guide/security" },
  { text: "قابلیت‌های به‌زودی", link: "/guide/coming-soon" },
  { text: "رفع اشکال", link: "/guide/troubleshooting" },
];

export const enSidebar: SidebarItem[] = [
  { text: "Getting started", link: "/en/guide/getting-started" },
  { text: "Accounts and workspaces", link: "/en/guide/workspaces" },
  { text: "Remote servers", link: "/en/guide/remote-servers" },
  { text: "Resource monitoring", link: "/en/guide/monitoring" },
  { text: "Alerts and notifications", link: "/en/guide/alerts-notifications" },
  { text: "Plans and billing", link: "/en/guide/billing" },
  { text: "Settings", link: "/en/guide/settings" },
  { text: "Security", link: "/en/guide/security" },
  { text: "Coming soon", link: "/en/guide/coming-soon" },
  { text: "Troubleshooting", link: "/en/guide/troubleshooting" },
];

export const faNav = [
  { text: "راهنما", link: "/guide/getting-started" },
  { text: "سرورهای ریموت", link: "/guide/remote-servers" },
  { text: "مانیتورینگ", link: "/guide/monitoring" },
];

export const enNav = [
  { text: "Guide", link: "/en/guide/getting-started" },
  { text: "Remote servers", link: "/en/guide/remote-servers" },
  { text: "Monitoring", link: "/en/guide/monitoring" },
];
