# Accounts and workspaces

Qbit uses **Qbit Account** for user identity and **Workspaces** for application data and authorization boundaries. Application roles, memberships, permissions, and entitlements remain Qbit-owned concerns.

## Select a Workspace

The active Workspace is selected from the application bar. Workspace-scoped pages such as servers, monitoring, notifications, and billing load data for that selected context.

## Create a Workspace

Use the Workspace area to create a new Workspace when your account has permission. The Workspace detail surface exposes lifecycle, membership, and related resources.

## Members and roles

You can review members and manage membership role/status where authorized. Backend authorization is authoritative; a visible route or button is never proof that an operation will be allowed.

## Multiple browser accounts

The Settings page can show browser-session accounts, switch the active account, remove an additional account, or sign out. Switching accounts resets unsafe route context and subject-scoped query state so data from one identity is not reused for another.

::: warning
Do not treat identity-provider claims as a substitute for Qbit Workspace authorization. Workspace membership and entitlements are enforced by the application backend.
:::
