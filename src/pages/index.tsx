import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const copy = {
  fa: {
    title: 'مدیریت سرورهای ریموت شما',
    tagline: 'کیوبیت ارائه‌دهنده سرور یا فضای ابری نیست؛ یک کنترل‌پلین برای مدیریت امن سرورهای شخص ثالث شماست.',
    primary: 'شروع کار',
    secondary: 'افزودن سرور ریموت',
    features: [
      ['سرورهای خودتان', 'سرور نزد ارائه‌دهنده فعلی شما باقی می‌ماند و Qbit فقط لایه مدیریت و مشاهده‌پذیری را فراهم می‌کند.'],
      ['مانیتورینگ غیرفعال', 'آخرین snapshot منابع و تاریخچه نگهداری‌شده را بدون اجرای polling از صفحه مرور کنید.'],
      ['هشدار و اعلان', 'برای CPU، حافظه، دیسک و load rule بسازید و مقصدهای اعلان را به ruleها متصل کنید.'],
      ['فضای کاری و دسترسی', 'اعضا، نقش‌ها، سرورها و تنظیمات مربوط به هر workspace را از یک control plane مدیریت کنید.'],
    ],
    scopeTitle: 'این مستندات چه چیزی را پوشش می‌دهند؟',
    scope: 'این راهنما بر قابلیت‌های فعال Qbit Console تمرکز دارد: حساب و فضای کاری، ثبت و مدیریت سرورهای ریموت، مشاهده منابع، هشدارها و مقصدهای اعلان، پلن و صورتحساب و تنظیمات پنل.',
    warningTitle: 'مرز محصول',
    warning: 'قابلیت‌هایی مثل Qbit Cloud، انتشار اپلیکیشن، دیتابیس مدیریت‌شده، DNS، رجیستری، npm cache و کیف پول هنوز عملیاتی نیستند و فقط به‌صورت به‌زودی در کنسول نمایش داده می‌شوند.',
  },
  en: {
    title: 'Manage your remote servers',
    tagline: 'Qbit is not a server or cloud provider; it is a control plane for securely managing third-party servers you already own.',
    primary: 'Get started',
    secondary: 'Add a remote server',
    features: [
      ['Your servers', 'Your server stays with its current provider while Qbit supplies the management and observability layer.'],
      ['Passive monitoring', 'Review the latest accepted resource snapshot and retained history without triggering a new polling run.'],
      ['Alerts and notifications', 'Create CPU, memory, disk, and load rules and connect notification destinations to them.'],
      ['Workspace access', 'Manage members, roles, servers, and workspace-scoped settings from one control plane.'],
    ],
    scopeTitle: 'What do these docs cover?',
    scope: 'This guide focuses on active Qbit Console capabilities: accounts and workspaces, remote-server registration and management, resource visibility, alerts and notification destinations, plans and billing, and panel settings.',
    warningTitle: 'Product boundary',
    warning: 'Qbit Cloud, application deployment, managed databases, DNS, registry, npm cache, wallet, and similar capabilities are not operational yet and remain marked as coming soon.',
  },
} as const;

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale === 'en' ? 'en' : 'fa';
  const text = copy[locale];

  return (
    <Layout title={locale === 'fa' ? 'مستندات Qbit Console' : 'Qbit Console Docs'} description={text.tagline}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <div className={styles.productName}>Qbit Console</div>
              <h1>{text.title}</h1>
              <p>{text.tagline}</p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/guide/getting-started">{text.primary}</Link>
                <Link className="button button--secondary button--lg" to="/guide/remote-servers">{text.secondary}</Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className={styles.featureGrid}>
            {text.features.map(([title, details]) => (
              <article className={styles.feature} key={title}>
                <h2>{title}</h2>
                <p>{details}</p>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.contentSection}>
          <h2>{text.scopeTitle}</h2>
          <p>{text.scope}</p>
          <aside className={styles.warning}>
            <strong>{text.warningTitle}</strong>
            <p>{text.warning}</p>
          </aside>
        </section>
      </main>
    </Layout>
  );
}
