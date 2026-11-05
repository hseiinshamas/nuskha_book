
export default function PurchasePage() {
  return (
    <main className="min-h-screen bg-[#F8F8FA] px-5 py-8 text-[#20212B] md:py-12">
      <div className="mx-auto max-w-5xl">

        {/* Navigation */}
        <nav className="flex items-center justify-between">
          <a href="/" className="text-base font-bold tracking-tight">
            نسخة لم تُكتب بعد<span className="text-[#8275D8]">.</span>
          </a>

          <a
            href="/"
            className="text-sm text-[#858594] transition hover:text-[#8275D8]"
          >
            ← العودة إلى الكتاب
          </a>
        </nav>

        {/* Heading */}
        <header className="mx-auto mb-12 mt-16 max-w-2xl text-center">
          <p className="mb-5 text-xs font-bold tracking-[0.18em] text-[#8275D8]">
            نسختك الرقمية
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            ابدأ رحلتك.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#858594] md:text-base">
            اختر وسيلة الدفع المناسبة لك للحصول على كتاب
            «نسخة لم تُكتب بعد». بعد تأكيد العملية، ستتمكن من الحصول
            على نسختك الرقمية بصيغة PDF.
          </p>
        </header>

        {/* Payment options */}
        <section className="grid items-stretch gap-6 md:grid-cols-2">

          {/* Revolut */}
          <article className="group flex flex-col overflow-hidden rounded-[28px] border border-[#E8E6F0] bg-white shadow-[0_8px_35px_rgba(35,30,70,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(35,30,70,0.08)]">

            <div className="flex items-center justify-between border-b border-[#F0EFF4] px-7 py-6">
              <div>
                <p className="text-xs text-[#9999A5]">الدفع الإلكتروني</p>
                <h2 className="mt-1 text-xl font-bold">Revolut</h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EEEEF2] bg-white p-2.5">
                <img
                  src="/images/revolut-logo.png"
                  alt="Revolut"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <p className="text-xs font-medium text-[#9293A0]">
                سعر الكتاب
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">
                  €4
                </span>
                <span className="text-sm text-[#9293A0]">EUR</span>
              </div>

              <p className="mt-3 text-sm text-[#858594]">
                دفعة واحدة · نسخة رقمية كاملة
              </p>

              <div className="my-8 h-px bg-[#EEEEF2]" />

              <div className="rounded-2xl bg-[#F8F7FC] p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EDE9FC] text-sm text-[#8275D8]">
                    ↗
                  </span>
                  <p className="text-sm font-bold">الدفع عبر رابط مباشر</p>
                </div>

                <p className="mt-3 text-xs leading-7 text-[#9293A0]">
                  انتقل إلى Revolut وأكمل الدفع بقيمة €4.
                </p>
              </div>

              <div className="mt-auto pt-7">
                <a
                  href="https://revolut.me/hsei?currency=EUR&amount=400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#8275D8] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#8275D8]/15 transition hover:bg-[#7062C7]"
                >
                  المتابعة إلى الدفع
                  <span>↗</span>
                </a>
              </div>
            </div>
          </article>

          {/* Whish */}
          <article className="group flex flex-col overflow-hidden rounded-[28px] border border-[#E8E6F0] bg-white shadow-[0_8px_35px_rgba(35,30,70,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(35,30,70,0.08)]">

            <div className="flex items-center justify-between border-b border-[#F0EFF4] px-7 py-6">
              <div>
                <p className="text-xs text-[#9999A5]">الدفع عبر QR</p>
                <h2 className="mt-1 text-xl font-bold">Whish</h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EEEEF2] bg-white p-2.5">
                <img
                  src="/images/whish.jpg"
                  alt="Whish"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <p className="text-xs font-medium text-[#9293A0]">
                سعر الكتاب
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">
                  $4.50
                </span>
                <span className="text-sm text-[#9293A0]">USD</span>
              </div>

              <p className="mt-3 text-sm text-[#858594]">
                دفعة واحدة · نسخة رقمية كاملة
              </p>

              <div className="my-6 h-px bg-[#EEEEF2]" />

              <div className="rounded-2xl bg-[#F8F7FC] p-5 text-center">
                <p className="text-sm font-bold">
                  امسح الرمز لإتمام الدفع
                </p>

                <div className="mx-auto mt-4 flex w-fit items-center justify-center rounded-2xl border border-[#EAE8F0] bg-white p-3 shadow-sm">
                  <img
                    src="/images/whish2code.jpeg"
                    alt="Whish payment QR code"
                    className="h-52 w-52 object-contain"
                  />
                </div>

                <p className="mt-4 text-xs leading-6 text-[#9293A0]">
                  استخدم تطبيق Whish لمسح الرمز. يمكنك الاستعانة بهاتف آخر.
                </p>
              </div>

              <div className="mt-auto pt-6">
                <p className="text-center text-xs text-[#9293A0]">
                  الدفع عبر Whish Me
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Confirmation */}
        <section className="mt-8 flex flex-col gap-4 rounded-[24px] border border-[#E8E6F0] bg-white p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FC] text-lg text-[#8275D8]">
            ✓
          </div>

          <div>
            <h2 className="font-bold">بعد إتمام الدفع</h2>
            <p className="mt-2 text-sm leading-7 text-[#858594]">
              احتفظ بإيصال الدفع أو رقم العملية، ثم تواصل معنا لتأكيد
              طلبك. سيتم مراجعة الدفع قبل منحك الوصول إلى الكتاب.
            </p>
          </div>
        </section>

        {/* Support */}
        <section className="mt-5 flex flex-col items-center justify-between gap-5 rounded-[24px] bg-[#EDEBFA] p-7 text-center sm:flex-row sm:text-right">
          <div>
            <h2 className="font-bold text-[#343348]">
              هل واجهت مشكلة في الدفع؟
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#77758F]">
              راسلنا مباشرة عبر Instagram وسنساعدك.
            </p>
          </div>

          <a
            href="https://www.instagram.com/hseiinshamas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#8275D8] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#7062C7]"
          >
            تواصل معنا ↗
          </a>
        </section>

        {/* Footer */}
        <footer className="py-9 text-center text-xs text-[#A0A0AC]">
          نسخة لم تُكتب بعد © حسين شمص
        </footer>

      </div>
    </main>
  );
}
