# Plans and billing

The Commercial and Billing areas expose Workspace commercial information. The current customer-console billing surface is primarily **read-only**; the presence of a plan or subscription page does not imply that checkout or subscription mutation is available.

## Plans

The SaaS catalog is API-backed and displayed with Qbit particle branding:

- Atom
- Proton
- Quark
- Photon

**Quantum** is a separate self-hosted unlimited product option. The current public billing API does not expose Quantum licensing, activation, or checkout, so the Console does not synthesize a subscription operation for it.

## Workspace billing visibility

A Workspace billing surface can expose:

- billing summary;
- recorded usage;
- existing subscriptions;
- entitlement evaluation;
- subscription detail.

## Not yet operational

Wallet, hourly hosting metering, and direct purchase of Qbit-hosted compute are currently Coming soon previews.

::: info
If there is no active mutation or purchase workflow, do not treat the preview as an operational billable service. The Console deliberately avoids invented API operations.
:::
