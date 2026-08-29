# Qbit Console User Docs — AI Context

This repository is the public, bilingual end-user documentation site for Qbit Console.

## Canonical product context

Qbit Console manages customer-owned third-party remote servers. Qbit does not provision or own those servers. The currently implemented console includes Qbit Account/OIDC authentication, Workspace and membership management, remote-server inventory, passive resource snapshots/history, resource alert rules, webhook notification destinations, alert delivery history/replay, read-only billing visibility, and panel preferences/multi-account session controls.

Preview-only product areas must remain labeled Coming soon until the corresponding operational contracts exist.

## Source references

When behavior changes, reconcile documentation against the current `qbit-console-web` user-facing routes/translations and the canonical API contract rather than relying on stale prose.

## Site conventions

- Default locale: Persian (`fa-IR`, RTL)
- Secondary locale: English (`/en/`, LTR)
- Brand seed: Qbit Console blue `#357da1`
- Typography: Vazirmatn variable
- Package manager: Bun 1.4.0
- Static generator: VitePress
- Deployment: GitHub Pages via GitHub Actions
