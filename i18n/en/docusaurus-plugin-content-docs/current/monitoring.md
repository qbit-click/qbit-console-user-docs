# Resource monitoring

Qbit Console shows the latest accepted resource snapshot and retained snapshot history. This is **passive monitoring**: viewing these pages does not trigger a new poll or command on the server.

## Latest resource state

The server detail page can show:

- CPU usage;
- memory usage;
- disk usage;
- network received/transmitted counters;
- uptime;
- 1, 5, and 15 minute load averages;
- observation and acceptance timestamps;
- snapshot source and schema version.

A **Stale** snapshot is still the last accepted observation, but it should not be interpreted as the server's current real-time state.

## Resource history

Open **Resource history** from the server detail page. Current windows include the last hour, last 24 hours, and all retained snapshots. CPU, memory, and disk trends are rendered from the data already returned by the API and do not cause additional polling.

## Calendar presentation

Domain timestamps remain canonical ISO-8601 values. The Console can render dates using Gregorian or Jalali calendars; this only changes presentation/input behavior.

## When no snapshot is available

1. Check connection and enrollment state.
2. Confirm the expected ingestion source is active.
3. Compare the latest observed and accepted timestamps.
4. Distinguish a Qbit API/network error from the remote server's own availability state.

::: info
Refreshing the browser does not imply that Qbit executes a command on the remote machine.
:::
