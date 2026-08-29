# Getting started with Qbit Console

Qbit Console manages **third-party servers that you own or control**. Adding a server to Qbit does not purchase, provision, or transfer ownership of that machine.

## Prerequisites

You need:

- a Qbit Account;
- access to a Workspace, or permission to create one;
- a hostname, IP address, or other remote reference for the server;
- the operational SSH or Agent setup required by your environment.

## Sign in

Qbit Console signs users in through Qbit Account using OIDC. Multiple browser-session accounts are supported. Account switching resets unsafe workspace context and subject-scoped query state.

## Recommended setup flow

1. Sign in to Qbit Console.
2. Select or create a Workspace.
3. Review Workspace membership and roles.
4. Open **Infrastructure → Servers** and add a remote server.
5. Enter its connection type, remote reference, and optional metadata.
6. When enrollment becomes active, review the latest accepted resource snapshot.
7. Create resource alert rules and notification destinations if required.

## Core concepts

### Workspace

The organizational boundary for members, remote servers, notifications, and billing visibility.

### Remote server

A Qbit control-plane record for a third-party machine. Disabling the record does not imply shutting down or deleting the machine at its provider.

### Passive resource snapshot

A resource observation already accepted by Qbit. Opening a detail/history page does not trigger a new poll or command on the server.

::: tip
For the shortest path, continue with [Accounts and workspaces](/en/guide/workspaces) and then [Remote servers](/en/guide/remote-servers).
:::
