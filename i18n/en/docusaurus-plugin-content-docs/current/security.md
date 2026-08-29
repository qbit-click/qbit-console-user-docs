# Security

Qbit Console is a control plane for third-party servers. Its security boundaries separate user identity, application authorization, and credential material.

## Authentication

Sign-in uses Qbit Account through OIDC Authorization Code with PKCE. Browser API requests use bearer authentication and explicitly omit cookie credentials for the Qbit API.

## Authorization

Backend authorization is authoritative. A route parameter, visible action, or known Workspace/server ID is not proof of permission.

## Credentials

When registering a server, never enter a raw password, private key, access token, API key, or secret. If required, provide only an opaque **credential reference** managed by your operational environment.

Webhook destination endpoint/signing values are likewise treated as protected write-only or masked data.

## Multiple accounts

Additional account identity snapshots are stored in browser `sessionStorage`, not `localStorage`. Account switching partitions/recreates subject-scoped query state.

## Remote-server actions

Viewing snapshots/history, managing alert metadata, or disabling a Qbit inventory record does not by itself imply a destructive command on the remote machine. Read confirmation text before executing any lifecycle action.

::: danger
Never store raw secrets in display names, remote references, tags, labels, or credential-reference fields.
:::
