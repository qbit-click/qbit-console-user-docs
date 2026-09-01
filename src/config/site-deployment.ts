export const DEFAULT_DOCS_SITE_URL = 'https://qbit-hub.github.io';

type Environment = Record<string, string | undefined>;

export interface PagesDeploymentOutputs {
  origin?: string;
  baseUrl?: string;
  basePath?: string;
}

const normalizeSiteUrl = (value: string | undefined, fallback = DEFAULT_DOCS_SITE_URL) =>
  (value?.trim().replace(/\/+$/, '') || fallback);

const normalizeBasePath = (value: string | undefined) => {
  const path = value?.trim();

  if (!path || /^\/+$/u.test(path)) return '/';

  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return `${withLeadingSlash.replace(/\/+$/, '')}/`;
};

const requirePagesOutput = (value: string | undefined, name: string) => {
  if (!value?.trim()) throw new Error(`GitHub Pages output ${name} is required.`);
  return value;
};

export const resolveDocsSiteConfig = (environment: Environment = process.env) => ({
  url: normalizeSiteUrl(environment.DOCS_SITE_URL),
  baseUrl: normalizeBasePath(environment.DOCS_BASE_PATH),
});

export const resolvePagesDeployment = ({origin, baseUrl, basePath}: PagesDeploymentOutputs) => {
  const siteUrl = normalizeSiteUrl(requirePagesOutput(origin, 'origin'));
  const configuredBaseUrl = normalizeSiteUrl(requirePagesOutput(baseUrl, 'base_url'));

  return {
    siteUrl,
    basePath: configuredBaseUrl === siteUrl ? '/' : normalizeBasePath(requirePagesOutput(basePath, 'base_path')),
  };
};
