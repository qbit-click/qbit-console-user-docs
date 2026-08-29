# Qbit Console User Docs

Bilingual end-user documentation for Qbit Console, published as a static Docusaurus site with offline local search.

Qbit Console manages customer-owned third-party remote servers. It is not a cloud/server provider, and this documentation must preserve that product boundary.

## Stack

- Bun 1.4.0 as the canonical package manager/runtime
- Docusaurus 3 + React + TypeScript
- Offline multilingual search via `@easyops-cn/docusaurus-search-local`
- Self-hosted Vazirmatn variable font
- Persian/RTL as the default locale and English/LTR under `/en/`
- Vitest unit/integration coverage and Playwright browser E2E
- GitHub Actions deployment to GitHub Pages

## Commands

```sh
bun install --frozen-lockfile
bun run dev
bun run typecheck
bun run test:unit
bun run test:integration
bun run test:e2e
bun run check
```

## Documentation policy

Document only customer-facing behavior supported by the current Qbit Console product contract. Preview surfaces such as Qbit Cloud, workload deployment, managed DNS, hosted registry/npm cache, wallet, and hourly hosting metering must remain clearly labeled **Coming soon** until their operational workflows exist.

## GitHub Pages

Production is built with the repository Pages base path and deployed by `.github/workflows/pages.yml` using the official GitHub Pages artifact/deployment actions.
