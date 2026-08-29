import type {Config} from '@docusaurus/types';
import type {Options, ThemeConfig} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const baseUrl = process.env.DOCS_BASE_PATH || '/';

const config: Config = {
  title: 'Qbit Console',
  tagline: 'مدیریت امن سرورهای ریموت شما',
  favicon: 'favicon.svg',
  url: 'https://qbit-click.github.io',
  baseUrl,
  organizationName: 'qbit-click',
  projectName: 'qbit-console-user-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
    localeConfigs: {
      fa: {label: 'فارسی', direction: 'rtl', htmlLang: 'fa-IR', calendar: 'persian'},
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'guide',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/qbit-click/qbit-console-user-docs/edit/main/docs/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Options,
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: 'filename',
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: 'guide',
        docsDir: 'docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Qbit Console',
      logo: {alt: 'Qbit Console', src: 'favicon.svg'},
      items: [
        {to: '/guide/getting-started', label: 'راهنما', position: 'left'},
        {to: '/guide/remote-servers', label: 'سرورهای ریموت', position: 'left'},
        {to: '/guide/monitoring', label: 'مانیتورینگ', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://github.com/qbit-click/qbit-console-user-docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Qbit Console',
          items: [
            {label: 'شروع کار', to: '/guide/getting-started'},
            {label: 'سرورهای ریموت', to: '/guide/remote-servers'},
            {label: 'امنیت', to: '/guide/security'},
          ],
        },
        {
          title: 'Qbit',
          items: [
            {label: 'GitHub', href: 'https://github.com/qbit-click'},
            {label: 'Qbit CLI', href: 'https://qbit-click.github.io/qbit-cli/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Qbit.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'powershell', 'json'],
    },
  } satisfies ThemeConfig,
};

export default config;
