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
- Static generator: Docusaurus 3 with React and offline local search
- Deployment: GitHub Pages via GitHub Actions

<!-- qbit-toolkit:ai-context:start -->
## Zero-touch lifecycle

Before substantive Codex work, the agent automatically runs the platform-appropriate repository launcher and reads `.ai-bridge/context-runtime.md`: Windows uses `.ai/context/context.ps1 start`; Linux/macOS uses `bash .ai/context/context.sh start`. The launcher clones or safely refreshes the central context into the ignored `.ai/context/cache/project-context` cache.

After a substantive validated milestone that changes durable continuity state, the agent creates `.ai-bridge/context-checkpoint.json` and runs the matching platform checkpoint launcher: `.ai/context/context.ps1 checkpoint` on Windows or `bash .ai/context/context.sh checkpoint` on Linux/macOS. Checkpoints are milestone-driven, not per-message.

The canonical context source is `https://github.com/qbit-click/qbit-ai-context.git` on branch `main`.

## Authority and safety

AI context is coordination evidence, never implementation authority. Current source, tests, schemas/migrations, explicit contracts, and committed canonical decisions outrank stored context according to claim type. Preserve pre-existing uncommitted work, never store secrets or raw chat transcripts in context, and do not use destructive Git recovery to resolve context failures.
<!-- qbit-toolkit:ai-context:end -->
