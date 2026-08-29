# Alerts and notifications

Qbit stores resource-alert rules against accepted resource snapshots. Creating or editing a rule changes Qbit control-plane metadata; it does not run remediation or commands on the remote server.

## Create a resource alert rule

Open **Resource alerts** from the server detail page and choose **Create alert rule**.

Current fields include:

- rule name;
- metric;
- operator;
- threshold;
- severity;
- enabled/disabled state.

Metrics cover CPU, memory, disk, and 1/5/15 minute load averages. Supported operators include greater than, greater-than-or-equal, less than, and less-than-or-equal.

## State and event history

Qbit can expose the current rule state and Triggered/Resolved event history. Historical events can remain visible after a rule definition is removed.

## Notification destinations

Webhook destinations are managed at Workspace scope. Endpoint/signing values are protected as write-only or masked data and should not be expected to reappear as raw secrets on reads.

To bind a destination to a rule:

1. Create the destination in the Workspace.
2. Open the target server's alert rule.
3. Open **Notifications**.
4. Bind the required destination(s).

## Delivery history and replay

The alert-delivery surface shows deliveries and attempt history with pagination. Users with the required permission can submit an administrative replay request from delivery detail.

::: warning
Replaying a delivery retries notification delivery. It is not server remediation and does not execute a command on the remote machine.
:::
