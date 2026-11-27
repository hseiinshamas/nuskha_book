
export default function PurchasePage() {
  const phoneNumber = "393520114267";

  const message = encodeURIComponent(
    "مرحباً، أرغب بشراء كتاب «نسخة لم تُكتب بعد» والاستفادة من عرض الجمعة البيضاء بسعر 2.99$ فقط بدلاً من 4.50$.\n\nلتسهيل عملية الشراء، يرجى الاطلاع على معلوماتي التالية:\n\nالاسم الكامل:\nالبريد الإلكتروني لاستلام الكتاب:\nطريقة الدفع المفضلة:\n- تحويل مصرفي عبر IBAN\n- Whish (للمقيمين في لبنان)\n\nأرجو إرسال تفاصيل الدفع المناسبة. شكراً لكم!"
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
      <section className="relative px-6 pb-20 pt-10 md:pt-16">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E9E5FF]/70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <div className="text-center">

            {/* Book introduction */}
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

            {/* Black Friday offer */}
            <div className="relative mt-10 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#20212B] via-[#393653] to-[#6656A2] p-7 text-center text-white shadow-xl shadow-[#393653]/20 md:p-10">

              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/10" />

              <div className="relative">

                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-white">
                  🖤 BLACK FRIDAY · الجمعة البيضاء
                </div>

                <h2 className="mt-6 text-2xl font-extrabold leading-relaxed md:text-3xl">
                  فرصة الجمعة البيضاء!
                </h2>

                <p className="mt-3 text-sm leading-8 text-white/75">
                  بمناسبة Black Friday، أصبح بإمكانك اقتناء كتاب
                  «نسخة لم تُكتب بعد» بسعر خاص لفترة محدودة.
                </p>

                <div className="mx-auto mt-7 max-w-xs rounded-2xl border border-white/15 bg-white/10 p-6">

                  <p className="text-xs text-white/65">
                    سعر الجمعة البيضاء
                  </p>

                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="text-5xl font-black text-white">
                      $2.99
                    </span>

                    <span className="text-lg text-white/50 line-through">
                      $4.50
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-white/65">
                    السعر بالدولار الأمريكي
                  </p>
                </div>

                <div className="mt-7 inline-flex rounded-full bg-white px-5 py-2 text-xs font-extrabold text-[#393653]">
                  العرض متاح اليوم فقط · 27 نوفمبر
                </div>

                <p className="mt-5 text-sm leading-8 text-white/75">
                  لا تفوّت فرصة اقتناء الكتاب وبدء رحلة مختلفة مع نفسك.
                </p>

              </div>
            </div>

            {/* WhatsApp purchase option */}
            <div className="mt-9 rounded-2xl border border-[#E4E1F3] bg-white p-6 text-right shadow-sm">

              <p className="text-sm font-bold text-[#8275D8]">
                الخيار الأول · الشراء المباشر
              </p>

              <h3 className="mt-3 text-xl font-extrabold text-[#292A40]">
                احصل على نسختك الرقمية
              </h3>

              <p className="mt-2 text-sm leading-8 text-[#666777]">
                أرسل طلبك عبر WhatsApp، واملأ المعلومات المطلوبة
                لتسهيل عملية الدفع وإرسال الكتاب إلى بريدك الإلكتروني.
              </p>

              <div className="mt-6 rounded-xl bg-[#F8F8FA] p-5 text-center">

                <p className="text-xs text-[#9293A0]">
                  سعر عرض الجمعة البيضاء
                </p>

                <div className="mt-2 flex items-center justify-center gap-3">
                  <p className="text-3xl font-extrabold text-[#8275D8]">
                    $2.99
                  </p>

                  <span className="text-sm text-[#9293A0] line-through">
                    $4.50
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#8275D8] px-8 py-4 text-sm font-bold !text-white shadow-lg shadow-[#8275D8]/20 transition hover:-translate-y-1 hover:bg-[#7062C7] sm:w-auto"
                >
                  <span className="text-lg !text-white">◉</span>
                  اطلب نسختك عبر WhatsApp
                  <span className="!text-white">↗</span>
                </a>
              </div>

              <p className="mt-5 text-center text-xs leading-7 text-[#9293A0]">
                يتوفر التحويل المصرفي عبر IBAN، كما تتوفر خدمة Whish للعملاء في لبنان.
                <br />
                أرسل اسمك وبريدك الإلكتروني وطريقة الدفع المفضلة
                عبر WhatsApp لإتمام طلبك.
              </p>
            </div>

            {/* Alternative purchase option */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#E9E7F0]" />
              <span className="text-sm font-semibold text-[#9293A0]">
                أو
              </span>
              <div className="h-px flex-1 bg-[#E9E7F0]" />
            </div>

            <div className="rounded-2xl border border-[#E4E1F3] bg-white p-6 text-center shadow-sm">

              <p className="text-sm font-bold text-[#292A40]">
                الخيار الثاني · Amazon Kindle
              </p>

              <p className="mt-2 text-sm leading-8 text-[#777887]">
                أو يمكنك اقتناء الكتاب مباشرةً عبر Amazon Kindle وقراءته من خلال تطبيق Kindle أو جهاز Kindle.
              </p>

              <div className="relative z-30 mt-5">
                <a
                  href="https://link.amazon/B06HHWHk7"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#8275D8",
                    color: "#FFFFFF",
                    textDecoration: "none",
                  }}
                  className="relative z-30 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold !text-white shadow-md transition hover:-translate-y-1 hover:!bg-[#7062C7] hover:!text-white"
                >
                  <span style={{ color: "#FFFFFF" }}>
                    اشترِ نسختك عبر Amazon Kindle
                  </span>
                  <span style={{ color: "#FFFFFF" }}>↗</span>
                </a>
              </div>
            </div>

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
