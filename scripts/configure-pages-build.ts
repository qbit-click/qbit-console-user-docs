import {appendFileSync} from 'node:fs';

import {resolvePagesDeployment} from '../src/config/site-deployment';

const outputPath = process.env.GITHUB_OUTPUT;

if (!outputPath) throw new Error('GITHUB_OUTPUT is required when configuring a GitHub Pages build.');

const {siteUrl, basePath} = resolvePagesDeployment({
  origin: process.env.PAGES_ORIGIN,
  baseUrl: process.env.PAGES_BASE_URL,
  basePath: process.env.PAGES_BASE_PATH,
});

appendFileSync(outputPath, `site_url=${siteUrl}\nbase_path=${basePath}\n`);
