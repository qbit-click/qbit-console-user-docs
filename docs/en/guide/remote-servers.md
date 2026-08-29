# Remote servers

A remote server in Qbit is a **control-plane inventory record for a third-party machine**. Qbit does not transfer ownership and creating the record is not equivalent to purchasing or provisioning a VM.

## Add a server

Open the target Workspace, go to **Infrastructure → Servers**, and choose **Add remote server**.

The current form accepts:

- **Display name**;
- **Connection type**: `SSH` or `Agent`;
- **Remote reference**: hostname, IP address, or another non-secret endpoint reference;
- **Credential reference**: optional opaque reference only;
- **Tags** and **Labels**: optional `key=value` entries, one per line.

::: danger Never enter raw credentials
Do not put passwords, tokens, private keys, or other raw secrets in the credential-reference, remote-reference, tag, or label fields.
:::

## Connection and enrollment state

The inventory shows connection and enrollment state. Connection states can include Pending, Available, Unavailable, and Disabled. Enrollment can include Pending, Active, Failed, and Disabled.

## Server detail

The detail page combines inventory metadata with the latest accepted passive resource snapshot. Opening it does not poll or execute on the remote machine.

## Metadata updates

The current metadata contract allows tag and label changes. The display name is immutable through the current metadata-update contract.

## Disable a server

Disabling a server changes the Qbit inventory lifecycle only. It is not a shutdown, reboot, or provider-side deletion of the third-party machine.

Related: [Resource monitoring](/en/guide/monitoring) and [Alerts and notifications](/en/guide/alerts-notifications).
