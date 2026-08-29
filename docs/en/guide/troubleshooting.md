# Troubleshooting

Use these checks to distinguish Console/API failures from the remote server's own state.

## The Console asks me to sign in again

- Review the active account session in **Settings**.
- Sign in through Qbit Account again if the token expired.
- With multiple accounts, confirm that the active account has access to the target Workspace.

## I cannot see a Workspace or server

- Verify the active Workspace in the application bar.
- Review your membership and role.
- After an account switch, navigate to a Workspace available to the new account.
- Remember that backend authorization can hide or reject resources even if you know their IDs.

## The Qbit API is unreachable

An API/network error is different from a remote server having an `Unavailable` connection state. Check the Console's connection to the Qbit API/service separately.

## No resource snapshot is shown

- Check server connection and enrollment state.
- Review the last accepted snapshot timestamp.
- `Stale` means the newest retained data is old; it does not mean the page performed a fresh poll.
- Without an accepted snapshot, the Console will not invent a real-time value.

## A notification was not delivered

1. Confirm the rule is enabled.
2. Confirm the destination is bound to the rule.
3. Open delivery history.
4. Review attempt status and errors.
5. If authorized and appropriate, submit an administrative replay.

## Dates do not follow the selected language

The calendar may have been explicitly overridden. In **Settings**, return to “follow language default” or select Gregorian/Jalali directly.

## Useful information for a support report

Include the affected route, approximate time, non-secret Workspace/server identifier, correlation ID if shown, and the displayed error text. Never include passwords, tokens, private keys, or signing secrets.
