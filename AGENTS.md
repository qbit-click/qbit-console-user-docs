# Qbit Console User Docs — Repository Instructions

## Product boundary

- Qbit Console is a SaaS control plane for customer-owned third-party servers.
- Never describe Qbit as the owner, cloud provider, or infrastructure provider for a registered remote server.
- Do not document preview-only surfaces as operational features.
- Current preview-only areas include Qbit-hosted compute, application/database deployment, backups, templates, Git providers, DNS, push notifications, hosted registry/npm cache, wallet, and hourly hosting metering.

## Documentation rules

- Persian is the default locale; English pages live under `i18n/en/docusaurus-plugin-content-docs/current/`.
- Keep Persian and English sidebar coverage in parity.
- Prefer user-facing terminology from `qbit-console-web` over invented product language.
- Security-sensitive fields must never be described as accepting raw passwords, tokens, private keys, or signing secrets when the product contract accepts opaque references/write-only values.
- Explicitly distinguish passive resource snapshots from active polling.

## Engineering rules

- `qbit-ai-toolkit/website` is the canonical Qbit documentation template. Clone its structure, shared CSS, homepage layout, Docusaurus/React/Bun/search stack, RTL/LTR behavior, tests, and deployment conventions; override only product content, product routes/assets, locale-default routing, base paths, and repository-specific links. Pin the consumed template revision in `template.source.json`.
- Bun is the canonical package manager/runtime.
- Use Docusaurus 3 + React + TypeScript with offline local search.
- Every code change must preserve unit, integration, and E2E coverage.
- Run `bun run check` before merging.
- GitHub Pages deploys only through the Actions workflow; do not commit built output.

<!-- qbit-toolkit:ai-context:start -->
## AI context lifecycle

- Before the first substantive repository analysis, planning, or implementation in a Codex session, automatically start AI context with the repository-owned launcher for the active host: on Windows run `powershell -NoProfile -ExecutionPolicy Bypass -File .ai/context/context.ps1 start`; on Linux/macOS run `bash .ai/context/context.sh start`. Do not ask the developer and do not wait for a context-loading instruction.
- Read `.ai-bridge/context-runtime.md` before substantive planning or implementation. Treat its active workstream, execution cursor, unresolved work items, dependencies, acceptance criteria, and validation freshness as the continuity resume contract. Do not replace that structured state with a shorter free-form summary.
- Do not rerun `start` repeatedly in the same session unless the context cache may have changed materially. If runtime validation evidence is stale for the current worktree, do not rely on it as current validation; rerun the required gate before claiming validation.
- Central AI context is coordination evidence, never implementation authority. Current source, tests, schemas/migrations, explicit contracts, and committed canonical decisions outrank stored context according to their claim type.
- Preserve pre-existing uncommitted user changes; do not stage, format, rewrite, reset, clean, or otherwise disturb unrelated work.
- After a substantive validated milestone that materially changes durable continuity state, and before the final handoff, automatically write `.ai-bridge/context-checkpoint.json` and run the platform-appropriate checkpoint launcher: on Windows `powershell -NoProfile -ExecutionPolicy Bypass -File .ai/context/context.ps1 checkpoint`; on Linux/macOS `bash .ai/context/context.sh checkpoint`. No developer reminder is required.
- Do not create checkpoints for ordinary read-only questions, every chat message, or work that produced no durable continuity change.
- New substantive checkpoints must use `schemaVersion: 2`, repository `qbit-console-user-docs`, and include `scope`, controlled `status`, `objective`, `confirmedFindings[]`, `decisions[]`, `rejectedApproaches[]`, `validation[]`, `openQuestions[]`, `nextAction`, plus `continuity.mode`, `continuity.workstream`, and `continuity.validationLedger[]`. `schemaVersion: 1` is legacy-read compatibility only.
- Use `continuity.mode: tracked` whenever work remains active, pending, blocked, or otherwise resumable. Carry every existing work item forward by stable ID, preserve dependencies/blockers/acceptance criteria/validation requirements, and set the execution cursor to the exact current item and exact next action. Never silently drop an unresolved item or switch workstream IDs to make a checkpoint pass.
- Use `continuity.mode: snapshot` only when there is no unresolved tracked workstream. Terminal workstreams must explicitly close/cancel/supersede every work item and clear `cursor.currentItemId`; the lifecycle will archive the workstream rather than discard it.
- Add structured validation ledger entries only for validation actually executed for this repository/worktree. Validation IDs are immutable; use a new stable ID for each new validation event.
- Use `export`, `import`, and `reconnect` only for deliberate offline or cross-machine continuity transfer. After an imported offline session advances context locally, use `reconnect` when the configured remote is reachable; never bypass a reconnect divergence by reset, rebase, merge, or force-push.
- Promote durable technical decisions into their canonical owning repository/ADR/contract; the context checkpoint records continuity, not technical authority.
- Never store secrets, credentials, cookies, tokens, private keys, `.env` values, customer secrets, or raw chat transcripts in AI context.
- If context start/checkpoint fails because of missing context source, authentication, dirty/diverged context state, continuity loss prevention, invalid transition, or a concurrent conflict, do not perform destructive recovery; report the condition and preserve data.
- `.ai-bridge/` and `.ai/context/cache/` are transient/ignored runtime locations. Semantic indexes and graph outputs remain derived evidence tools, not project memory.
<!-- qbit-toolkit:ai-context:end -->
