
export default function PurchasePage() {
  const phoneNumber = "393520114267";

  const message = encodeURIComponent(
    "مرحباً، أرغب بشراء كتاب «نسخة لم تُكتب بعد» بسعر 4.50$.\n\nلتسهيل عملية الشراء، يرجى الاطلاع على معلوماتي التالية:\n\nالاسم الكامل:\nالبريد الإلكتروني لاستلام الكتاب:\nطريقة الدفع المفضلة:\n- تحويل مصرفي عبر IBAN\n- Whish (للمقيمين في لبنان)\n\nأرجو إرسال تفاصيل الدفع المناسبة. شكراً لكم!"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  const amazonLink = "https://link.amazon/B06HHWHk7";

  return (
    <main className="min-h-screen bg-[#F8F8FA] text-[#20212B]">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="mb-4 text-sm tracking-[0.3em] text-[#8275D8]">
            نسخة لم تُكتب بعد
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            ابدأ رحلتك مع الكتاب
          </h1>

          <p className="mx-auto max-w-2xl leading-8 text-gray-600">
            هذا الكتاب ليس مجرد صفحات تقرؤها، بل مساحة للتفكير،
            ومواجهة الذات، وإعادة اكتشاف الحياة من منظور مختلف.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-md rounded-3xl bg-white p-8 text-center shadow-lg">
          <img
            src="/images/bookCover.png"
            alt="غلاف كتاب نسخة لم تُكتب بعد"
            className="mx-auto mb-8 w-52 rounded-lg shadow-xl"
          />

          <h2 className="mb-2 text-2xl font-bold">
            نسخة لم تُكتب بعد
          </h2>

          <p className="mb-6 text-sm text-gray-500">
            حسين شمص
          </p>

          <p className="mb-2 text-sm text-gray-500">
            السعر
          </p>

          <p className="mb-8 text-4xl font-bold text-[#8275D8]">
            $4.50
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-[#8275D8] px-6 py-4 font-semibold text-white transition hover:bg-[#6e61c5]"
          >
            شراء النسخة عبر واتساب
          </a>

          <p className="mt-4 text-xs leading-6 text-gray-500">
            بعد التواصل، ستصلك تفاصيل الدفع، ثم يتم إرسال
            النسخة الإلكترونية إلى بريدك الإلكتروني.
          </p>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-sm text-gray-400">أو</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#8275D8] px-6 py-4 font-semibold text-[#8275D8] transition hover:bg-[#8275D8] hover:text-white"
          >
            شراء نسخة Kindle عبر Amazon
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h2 className="mb-6 text-center text-2xl font-bold">
            كيف تتم عملية الشراء؟
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <strong>1.</strong> اضغط على زر الشراء عبر واتساب
              وأرسل معلوماتك.
            </p>
            <p>
              <strong>2.</strong> اختر طريقة الدفع المناسبة لك،
              وسأرسل لك تفاصيل الدفع.
            </p>
            <p>
              <strong>3.</strong> بعد تأكيد الدفع، ستصلك النسخة
              الإلكترونية عبر بريدك الإلكتروني.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg italic leading-8 text-gray-600">
            "ربما لا تحتاج إلى أن تصبح شخصاً آخر،
            بل أن تكتشف من كنت قبل أن تخبرك الحياة من تكون."
          </p>
          <p className="mt-4 font-semibold">حسين شمص</p>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-gray-500">
        <p>© 2026 نسخة لم تُكتب بعد · حسين شمص</p>
        <a
          href="https://www.instagram.com/hseiinshamas/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-[#8275D8] hover:underline"
        >
          Instagram
        </a>
      </footer>
    </main>
  );
}
