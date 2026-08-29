# امنیت

Qbit Console یک control plane برای سرورهای شخص ثالث است. مرزهای امنیتی آن بر تفکیک identity، authorization و credential material استوارند.

## ورود و session

ورود از طریق Qbit Account و OIDC Authorization Code + PKCE انجام می‌شود. API مرورگر فقط Bearer token ارسال می‌کند و cookie credentials به API Qbit ضمیمه نمی‌شوند.

## مجوزها

Backend مرجع نهایی authorization است. وجود یک route، شناسه Workspace یا نمایش یک action در UI مدرک مجوز نیست.

## credentialها

هنگام ثبت سرور:

- رمز عبور وارد نکنید؛
- private key وارد نکنید؛
- access token یا API key خام وارد نکنید؛
- در صورت نیاز فقط **credential reference** غیرشفاف ثبت کنید.

مقصدهای webhook نیز endpoint/signing valueهای حساس را به شکل write-only یا masked مدیریت می‌کنند؛ انتظار نمایش secret خام در readهای بعدی نداشته باشید.

## چند حساب

snapshotهای هویتی حساب‌های اضافی فقط در `sessionStorage` مرورگر نگهداری می‌شوند، نه `localStorage`. هنگام تغییر حساب، Qbit query state را بر اساس subject تفکیک و بازسازی می‌کند.

## عملیات روی سرور

مشاهده resource snapshot، history، ruleهای alert یا غیرفعال‌کردن inventory رکورد به‌تنهایی به معنی اجرای command مخرب روی ماشین نیست. متن confirmation هر action را قبل از تأیید بخوانید.

::: danger
هیچ secret خامی را در نام سرور، remote reference، tags، labels یا فیلد credential reference ذخیره نکنید.
:::
