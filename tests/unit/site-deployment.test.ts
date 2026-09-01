import {describe, expect, it} from 'vitest';

import {DEFAULT_DOCS_SITE_URL, resolveDocsSiteConfig, resolvePagesDeployment} from '../../src/config/site-deployment';

describe('documentation site deployment configuration', () => {
  it('preserves local defaults when no deployment values are present', () => {
    expect(resolveDocsSiteConfig({})).toEqual({
      url: DEFAULT_DOCS_SITE_URL,
      baseUrl: '/',
    });
  });

  it('uses the Pages origin and root base path for custom-domain and other root-served sites', () => {
    const deployment = resolvePagesDeployment({
      origin: 'https://docs.qbit.click',
      baseUrl: 'https://docs.qbit.click/',
      basePath: '/qbit-console-user-docs',
    });

    expect(deployment).toEqual({
      siteUrl: 'https://docs.qbit.click',
      basePath: '/',
    });
    expect(resolveDocsSiteConfig({
      DOCS_SITE_URL: deployment.siteUrl,
      DOCS_BASE_PATH: deployment.basePath,
    })).toEqual({
      url: 'https://docs.qbit.click',
      baseUrl: '/',
    });
  });

  it('retains the repository base path for GitHub Pages project deployments', () => {
    const deployment = resolvePagesDeployment({
      origin: 'https://qbit-hub.github.io',
      baseUrl: 'https://qbit-hub.github.io/qbit-console-user-docs',
      basePath: '/qbit-console-user-docs/',
    });

    expect(deployment).toEqual({
      siteUrl: DEFAULT_DOCS_SITE_URL,
      basePath: '/qbit-console-user-docs/',
    });
    expect(resolveDocsSiteConfig({
      DOCS_SITE_URL: deployment.siteUrl,
      DOCS_BASE_PATH: deployment.basePath,
    })).toEqual({
      url: DEFAULT_DOCS_SITE_URL,
      baseUrl: '/qbit-console-user-docs/',
    });
  });
});
