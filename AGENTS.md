# Qbit Console User Docs — Repository Instructions

## Product boundary

- Qbit Console is a SaaS control plane for customer-owned third-party servers.
- Never describe Qbit as the owner, cloud provider, or infrastructure provider for a registered remote server.
- Do not document preview-only surfaces as operational features.
- Current preview-only areas include Qbit-hosted compute, application/database deployment, backups, templates, Git providers, DNS, push notifications, hosted registry/npm cache, wallet, and hourly hosting metering.

## Documentation rules

- Persian is the default locale; English pages live under `docs/en/`.
- Keep Persian and English sidebar coverage in parity.
- Prefer user-facing terminology from `qbit-console-web` over invented product language.
- Security-sensitive fields must never be described as accepting raw passwords, tokens, private keys, or signing secrets when the product contract accepts opaque references/write-only values.
- Explicitly distinguish passive resource snapshots from active polling.

## Engineering rules

- Bun is the canonical package manager/runtime.
- Use Docusaurus 3 + React + TypeScript with offline local search.
- Every code change must preserve unit, integration, and E2E coverage.
- Run `bun run check` before merging.
- GitHub Pages deploys only through the Actions workflow; do not commit built output.
