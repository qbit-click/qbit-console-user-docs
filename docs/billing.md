# پلن و صورتحساب

بخش Commercial و Billing اطلاعات تجاری Workspace را نمایش می‌دهد. سطح فعلی کنسول برای billing عمدتاً **read-only** است و نباید از وجود صفحه، امکان checkout یا تغییر subscription را استنتاج کرد.

## پلن‌ها

کاتالوگ SaaS از API خوانده می‌شود و با نام‌گذاری برند Qbit نمایش داده می‌شود:

- Atom
- Proton
- Quark
- Photon

گزینه **Quantum** محصول self-hosted نامحدود و مستقل است. قرارداد عمومی billing فعلی برای Quantum مسیر licensing/activation/checkout ارائه نمی‌کند؛ بنابراین کنسول subscription مصنوعی برای آن ایجاد نمی‌کند.

## اطلاعات Workspace

صفحه billing یک Workspace می‌تواند این موارد را نمایش دهد:

- billing summary؛
- usage ثبت‌شده؛
- subscriptionهای موجود؛
- entitlement evaluation؛
- جزئیات یک subscription مشخص.

## قابلیت‌هایی که هنوز فعال نیستند

Wallet، hourly hosting metering و خرید مستقیم Qbit-hosted compute در کنسول فعلی عملیاتی نیستند. این موارد در صفحات Preview با برچسب **به‌زودی** دیده می‌شوند.

::: info
اگر دکمه خرید یا mutation فعال برای یک گزینه وجود ندارد، آن قابلیت را عملیاتی فرض نکنید. Qbit Console عمداً endpoint یا عملیات billable ساختگی ایجاد نمی‌کند.
:::
