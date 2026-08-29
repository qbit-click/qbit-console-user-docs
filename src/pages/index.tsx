import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type Domain = {
  code: string;
  title: string;
  description: string;
  path: string;
};

type Copy = {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  githubCta: string;
  scopeEyebrow: string;
  scopeTitle: string;
  scopeDescription: string;
  domains: Domain[];
  currentEyebrow: string;
  currentTitle: string;
  currentDescription: string;
  currentLink: string;
  principlesEyebrow: string;
  principlesTitle: string;
  principles: Array<{title: string; description: string}>;
  closingTitle: string;
  closingDescription: string;
  closingCta: string;
};

const copy: Record<'fa' | 'en', Copy> = {
  fa: {
    badge: 'کنترل‌پلین SaaS برای سرورهای شخص ثالث',
    title: 'مدیریت سرورهای ریموت شما',
    subtitle:
      'Qbit Console ارائه‌دهنده سرور یا فضای ابری نیست. سرور نزد ارائه‌دهنده فعلی شما باقی می‌ماند و Qbit لایه مدیریت، مشاهده‌پذیری، هشدار و دسترسی را فراهم می‌کند.',
    primaryCta: 'شروع مطالعه مستندات',
    githubCta: 'مشاهده در GitHub',
    scopeEyebrow: 'یک کنسول، مرزهای روشن',
    scopeTitle: 'سرورها، منابع، هشدارها و دسترسی را بدون تغییر مالکیت زیرساخت مدیریت کنید.',
    scopeDescription:
      'هر بخش مستندات یک حوزه مشخص از Qbit Console را پوشش می‌دهد تا ثبت سرور، مشاهده منابع، هشدارها، امنیت و تنظیمات workspace در یک hierarchy قابل پیش‌بینی باقی بمانند.',
    domains: [
      {
        code: 'WS',
        title: 'فضاهای کاری',
        description: 'اعضا، نقش‌ها، سرورها و تنظیمات scopeشده به workspace را مدیریت کنید.',
        path: '/guide/workspaces',
      },
      {
        code: 'SRV',
        title: 'سرورهای ریموت',
        description: 'سرور شخص ثالث را با SSH یا Agent ثبت کنید و ownership آن را نزد ارائه‌دهنده موجود نگه دارید.',
        path: '/guide/remote-servers',
      },
      {
        code: 'MON',
        title: 'مانیتورینگ',
        description: 'آخرین snapshot پذیرفته‌شده منابع و تاریخچه نگهداری‌شده را بدون polling جدید مشاهده کنید.',
        path: '/guide/monitoring',
      },
      {
        code: 'ALT',
        title: 'هشدار و اعلان',
        description: 'برای CPU، حافظه، دیسک و load rule بسازید و مقصدهای اعلان را به آن‌ها متصل کنید.',
        path: '/guide/alerts-notifications',
      },
      {
        code: 'SEC',
        title: 'امنیت و تنظیمات',
        description: 'OIDC، credential referenceهای opaque، تنظیمات حساب و boundaryهای امنیتی محصول را بشناسید.',
        path: '/guide/security',
      },
    ],
    currentEyebrow: 'مسیر عملیاتی اصلی',
    currentTitle: 'ثبت و مدیریت سرور ریموت',
    currentDescription:
      'سرور خود را با نام نمایشی، روش اتصال، remote reference و در صورت نیاز credential reference ثبت کنید؛ بدون وارد کردن secret خام و بدون انتقال مالکیت سرور به Qbit.',
    currentLink: 'مشاهده راهنمای سرورهای ریموت',
    principlesEyebrow: 'اصول محصول',
    principlesTitle: 'برای مدیریت زیرساختی طراحی شده که متعلق به خود کاربر است.',
    principles: [
      {
        title: 'مالکیت زیرساخت تغییر نمی‌کند',
        description: 'Qbit سرور نمی‌فروشد و مالک سرور ثبت‌شده نمی‌شود؛ سرور نزد ارائه‌دهنده شخص ثالث شما باقی می‌ماند.',
      },
      {
        title: 'مشاهده‌پذیری با boundary روشن',
        description: 'صفحات منابع snapshot و history موجود را نمایش می‌دهند و مشاهده صفحه به‌تنهایی polling جدید اجرا نمی‌کند.',
      },
      {
        title: 'Secret خام وارد قرارداد نمی‌شود',
        description: 'Credentialها و مقصدهای حساس با reference یا مقدار write-only مدیریت می‌شوند و نباید به‌صورت secret خام در مستندات یا UI افشا شوند.',
      },
    ],
    closingTitle: 'از مسیر مناسب برای کاری که می‌خواهید انجام دهید شروع کنید.',
    closingDescription:
      'راهنمای شروع کار، ثبت سرور، مانیتورینگ، هشدارها، صورتحساب، تنظیمات و troubleshooting در navigation مستندات در دسترس هستند.',
    closingCta: 'باز کردن راهنمای شروع',
  },
  en: {
    badge: 'SaaS control plane for third-party servers',
    title: 'Manage your remote servers',
    subtitle:
      'Qbit Console is not a server or cloud provider. Your infrastructure stays with its existing provider while Qbit supplies management, observability, alerts, and access control.',
    primaryCta: 'Start with the documentation',
    githubCta: 'View on GitHub',
    scopeEyebrow: 'One console, clear boundaries',
    scopeTitle: 'Manage servers, resources, alerts, and access without changing infrastructure ownership.',
    scopeDescription:
      'Each documentation area covers a distinct Qbit Console domain so server registration, resource visibility, alerts, security, and workspace settings remain predictable and easy to navigate.',
    domains: [
      {
        code: 'WS',
        title: 'Workspaces',
        description: 'Manage members, roles, servers, and workspace-scoped settings.',
        path: '/guide/workspaces',
      },
      {
        code: 'SRV',
        title: 'Remote servers',
        description: 'Register third-party servers through SSH or Agent while ownership remains with the existing provider.',
        path: '/guide/remote-servers',
      },
      {
        code: 'MON',
        title: 'Monitoring',
        description: 'Review the latest accepted resource snapshot and retained history without triggering a new polling run.',
        path: '/guide/monitoring',
      },
      {
        code: 'ALT',
        title: 'Alerts & notifications',
        description: 'Create CPU, memory, disk, and load rules and connect notification destinations.',
        path: '/guide/alerts-notifications',
      },
      {
        code: 'SEC',
        title: 'Security & settings',
        description: 'Understand OIDC, opaque credential references, account settings, and product security boundaries.',
        path: '/guide/security',
      },
    ],
    currentEyebrow: 'Primary operational path',
    currentTitle: 'Register and manage a remote server',
    currentDescription:
      'Register a server with a display name, connection mode, remote reference, and optional credential reference—without entering raw secrets or transferring server ownership to Qbit.',
    currentLink: 'Open the remote-server guide',
    principlesEyebrow: 'Product principles',
    principlesTitle: 'Built to manage infrastructure that remains owned by the customer.',
    principles: [
      {
        title: 'Infrastructure ownership does not move',
        description: 'Qbit does not sell or own registered servers; they remain with your third-party infrastructure provider.',
      },
      {
        title: 'Observability has explicit boundaries',
        description: 'Resource pages show accepted snapshots and retained history; merely opening a page does not trigger a new polling run.',
      },
      {
        title: 'Raw secrets stay outside the contract',
        description: 'Sensitive credentials and destinations use references or write-only values and should never be exposed as raw secrets.',
      },
    ],
    closingTitle: 'Start from the path that matches the task you need to complete.',
    closingDescription:
      'Getting started, server registration, monitoring, alerts, billing, settings, and troubleshooting are available from the documentation navigation.',
    closingCta: 'Open getting started',
  },
};

function Arrow(): ReactNode {
  return <span aria-hidden="true">→</span>;
}

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'en' ? 'en' : 'fa';
  const text = copy[locale];
  const localized = (path: string) => path;
  const logo = useBaseUrl('/favicon.svg');

  return (
    <Layout
      title={locale === 'fa' ? 'مستندات Qbit Console' : 'Qbit Console Docs'}
      description={text.subtitle}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.shell}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <img className={styles.heroLogo} src={logo} alt="Qbit Console" width="112" height="112" />
                <div className={styles.badge}>{text.badge}</div>
                <h1>{text.title}</h1>
                <p>{text.subtitle}</p>
                <div className={styles.actions}>
                  <Link className="button button--primary button--lg" to={localized('/guide/getting-started')}>
                    {text.primaryCta}
                  </Link>
                  <Link
                    className="button button--secondary button--lg"
                    href="https://github.com/qbit-click/qbit-console-user-docs">
                    {text.githubCta}
                  </Link>
                </div>
              </div>

              <aside className={styles.heroPanel} aria-label={text.currentTitle}>
                <div className={styles.terminalHeader}>
                  <span />
                  <span />
                  <span />
                  <strong>qbit-console</strong>
                </div>
                <div className={styles.terminalBody}>
                  <div><span>$</span> console domains</div>
                  <div className={styles.terminalOutput}>workspaces</div>
                  <div className={styles.terminalOutput}>remote-servers</div>
                  <div className={styles.terminalOutput}>monitoring</div>
                  <div className={styles.terminalOutput}>alerts-notifications</div>
                  <div className={styles.terminalOutput}>billing-settings</div>
                  <div className={styles.terminalStatus}>✓ docs: fa / en</div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <span>{text.scopeEyebrow}</span>
              <h2>{text.scopeTitle}</h2>
              <p>{text.scopeDescription}</p>
            </div>

            <div className={styles.domainGrid}>
              {text.domains.map((domain) => (
                <Link key={domain.path} className={styles.domainCard} to={localized(domain.path)}>
                  <div className={styles.domainCode}>{domain.code}</div>
                  <h3>{domain.title}</h3>
                  <p>{domain.description}</p>
                  <div className={styles.cardLink}>
                    <span>{locale === 'fa' ? 'مشاهده بخش' : 'Explore section'}</span>
                    <Arrow />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.assetSection}>
          <div className={styles.shell}>
            <div className={styles.assetCard}>
              <div>
                <span className={styles.eyebrow}>{text.currentEyebrow}</span>
                <h2>{text.currentTitle}</h2>
                <p>{text.currentDescription}</p>
              </div>
              <Link className={styles.assetLink} to={localized('/guide/remote-servers')}>
                {text.currentLink} <Arrow />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <span>{text.principlesEyebrow}</span>
              <h2>{text.principlesTitle}</h2>
            </div>
            <div className={styles.principleGrid}>
              {text.principles.map((principle, index) => (
                <article key={principle.title} className={styles.principleCard}>
                  <div className={styles.principleNumber}>0{index + 1}</div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.shell}>
            <div className={styles.closingInner}>
              <div>
                <h2>{text.closingTitle}</h2>
                <p>{text.closingDescription}</p>
              </div>
              <Link className="button button--primary button--lg" to={localized('/guide/getting-started')}>
                {text.closingCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
