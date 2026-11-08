export default function PurchasePage() {

  const phoneNumber = "393520114267";

  const message = encodeURIComponent(
    "مرحباً، أرغب بشراء كتاب «نسخة لم تُكتب بعد» والاستفادة من عرض الإطلاق الخاص لأول 50 قارئاً. السعر الحالي هو 4.50€ أو 4.50$ بحسب العملة المناسبة لي. أرجو إرسال تفاصيل الدفع. أفضل الدفع عبر: التحويل المصرفي (IBAN) / Whish."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8FA] text-[#20212B]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
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

      {/* Main presentation */}
      <section className="relative px-6 pb-20 pt-12 md:pt-20">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E9E5FF]/70 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          {/* Purchase information */}
          <div className="text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4E1F3] bg-white px-4 py-2 text-xs font-medium text-[#8275D8]">
              <span className="h-2 w-2 rounded-full bg-[#8275D8]" />
              نسختك الرقمية · PDF
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.6] tracking-tight sm:text-5xl">
              اقتنِ نسختك
              <br />
              <span className="text-[#8275D8]">التي لم تُكتب بعد.</span>
            </h1>

            <p className="mt-6 text-sm leading-9 text-[#666777] md:text-base">
              ليست المسألة مجرد قراءة كتاب آخر، بل أن تمنح نفسك
              مساحة للتفكير، ومراجعة ما اعتدت تصديقه، واكتشاف
              ما تريد أن تكونه بعيداً عن النسخ التي رسمها الآخرون لك.
            </p>

            {/* Amazon Kindle option */}
            <div className="mt-9 rounded-2xl border border-[#E4E1F3] bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-bold text-[#292A40]">
                متاح قريباً أيضاً على Amazon Kindle
              </p>

              <p className="mt-2 text-sm leading-8 text-[#777887]">
  اشترِ الكتاب رقمياً عبر Amazon واقرأه باستخدام تطبيق Kindle أو جهاز Kindle.
  يختلف السعر عن الشراء المباشر بسبب الرسوم والعمولات التي تفرضها Amazon على مبيعات الكتب.
</p>

              <div className="mt-4">
                <span className="text-3xl font-extrabold text-[#8275D8]">
                  $6.99
                </span>
              </div>

              <div className="mt-4 inline-flex items-center rounded-full bg-[#F1EFFA] px-6 py-3 text-sm font-semibold text-[#8275D8]">
                قريباً على Amazon Kindle
              </div>
            </div>

            <div className="my-9 h-px bg-[#E9E7F0]" />

            {/* Launch offer */}
            <div className="rounded-2xl border border-[#E4E1F3] bg-white p-5 text-right">
              <p className="text-sm font-bold text-[#8275D8]">
                عرض الإطلاق الخاص
              </p>

              <p className="mt-2 text-sm leading-8 text-[#666777]">
                لأول 50 قارئاً، احصل على الكتاب بسعر خاص قبل الانتقال إلى السعر العادي.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#F8F8FA] p-4 text-center">
                  <p className="text-xs text-[#9293A0]">السعر باليورو</p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-3xl font-extrabold text-[#8275D8]">€4.50</span>
                    <span className="text-sm text-[#9293A0] line-through">€7</span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#F8F8FA] p-4 text-center">
                  <p className="text-xs text-[#9293A0]">السعر بالدولار</p>
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <span className="text-3xl font-extrabold text-[#8275D8]">$4.50</span>
                    <span className="text-sm text-[#9293A0] line-through">$7</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-7 text-[#9293A0]">
                بعد اكتمال أول 50 عملية شراء مؤكدة، يصبح السعر 7€ أو 7$.
              </p>
            </div>

            {/* WhatsApp button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8275D8] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#8275D8]/20 transition hover:-translate-y-1 hover:bg-[#7062C7] sm:w-auto"
            >
              <span className="text-lg">◉</span>
              اطلب نسختك عبر WhatsApp
              <span>↗</span>
            </a>

            <p className="mt-5 text-xs leading-7 text-[#9293A0]">
              تواصل معنا لاختيار وسيلة الدفع المناسبة.
              <br />
              يتوفر التحويل المصرفي عبر IBAN، كما تتوفر خدمة Whish للعملاء في لبنان.
              <br />
              تفاصيل الدفع تُرسل بشكل خاص عبر WhatsApp.
            </p>

          </div>
        </div>
      </section>

      {/* Ordering process */}
      <section className="border-t border-[#ECEBF1] bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold text-[#8275D8]">
              خطوات بسيطة
            </p>

            <h2 className="text-2xl font-extrabold md:text-3xl">
              كيف تحصل على نسختك؟
            </h2>
          </div>

          <div className="grid gap-10 text-center md:grid-cols-3">

            <div>
              <p className="text-3xl font-extrabold text-[#8275D8]">01</p>
              <h3 className="mt-4 font-bold">تواصل معنا</h3>
              <p className="mt-3 text-sm leading-8 text-[#858594]">
                أرسل لنا رسالة عبر WhatsApp وأخبرنا برغبتك في اقتناء الكتاب.
              </p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-[#8275D8]">02</p>
              <h3 className="mt-4 font-bold">اختر وسيلة الدفع</h3>
              <p className="mt-3 text-sm leading-8 text-[#858594]">
                سنرسل لك تفاصيل التحويل المصرفي عبر IBAN أو الدفع عبر Whish بحسب اختيارك.
              </p>
            </div>

            <div>
              <p className="text-3xl font-extrabold text-[#8275D8]">03</p>
              <h3 className="mt-4 font-bold">استلم نسختك</h3>
              <p className="mt-3 text-sm leading-8 text-[#858594]">
                بعد تأكيد الدفع، ستصلك نسختك الرقمية بصيغة PDF.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-gradient-to-br from-[#292A40] to-[#444064] px-7 py-12 text-center text-white md:px-14">

          <h2 className="text-2xl font-extrabold leading-relaxed md:text-3xl">
            ربما لا تحتاج إلى أن تصبح شخصاً آخر،
            <br className="hidden md:block" />
            بل أن تكتشف من كنت قبل أن يكتب الآخرون نسختك.
          </h2>

          <p className="mt-5 text-sm text-white/65">
            حسين شمص
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ECEBF1] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#9293A0] sm:flex-row">
          <p>نسخة لم تُكتب بعد © حسين شمص</p>

          <a
            href="https://www.instagram.com/hseiinshamas/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#8275D8]"
          >
            Instagram — @hseiinshamas
          </a>
        </div>
      </footer>

    </main>
  );
}