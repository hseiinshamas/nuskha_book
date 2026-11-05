
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8FA] text-[#20212B]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-base font-bold tracking-tight">
          نسخة لم تُكتب بعد<span className="text-[#8275D8]">.</span>
        </a>

        <a
          href="/purchase"
          className="rounded-full bg-[#242536] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8275D8]"
        >
          احصل على الكتاب
        </a>
      </nav>

      {/* Main presentation */}
      <section className="relative px-6 pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#E9E5FF]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">

          {/* Book cover */}
          <div className="flex justify-center">
            <div className="relative w-[250px] sm:w-[290px]">
              <div className="absolute -inset-6 rounded-full bg-[#8275D8]/10 blur-3xl" />

              <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-[5px] bg-gradient-to-br from-[#25263B] via-[#34334F] to-[#514B76] p-7 text-center text-white shadow-[0_30px_70px_rgba(38,37,66,0.22)]">

                <div className="absolute -left-16 top-24 h-56 w-56 rounded-full border border-white/10" />
                <div className="absolute -left-8 top-32 h-40 w-40 rounded-full border border-white/10" />

                <div className="relative z-10 pt-3">
                  <p className="text-3xl font-bold leading-relaxed">
                    نسخة لم تُكتب بعد
                  </p>
                  <div className="mx-auto my-5 h-1 w-10 rounded-full bg-[#B5A9FF]" />
                  <p className="text-xs leading-7 text-white/65">
                    رحلة في مواجهة الذات وتحرير العقل وإعادة اكتشاف الحياة
                  </p>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-36 w-36 rotate-45 rounded-[35px] border border-white/20" />
                  <div className="absolute h-24 w-24 -rotate-12 rounded-[28px] border border-[#B5A9FF]/60" />
                  <div className="h-12 w-12 rotate-45 rounded-xl bg-gradient-to-br from-[#B5A9FF] to-[#7264BB] shadow-[0_0_45px_rgba(181,169,255,0.4)]" />
                </div>

                <p className="relative z-10 text-sm tracking-wide text-white/80">
                  حسين شمص
                </p>
              </div>
            </div>
          </div>

          {/* Book introduction */}
          <div className="text-center md:text-right">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4E1F3] bg-white px-4 py-2 text-xs font-medium text-[#8275D8]">
              <span className="h-2 w-2 rounded-full bg-[#8275D8]" />
              كتاب في الفلسفة والوعي واكتشاف الذات
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.55] tracking-tight sm:text-5xl md:text-[58px]">
              نسخة لم تُكتب بعد
            </h1>

            <p className="mt-4 text-lg font-medium leading-9 text-[#8275D8]">
              رحلة في مواجهة الذات وتحرير العقل وإعادة اكتشاف الحياة
            </p>

            <p className="mt-7 leading-9 text-[#666777]">
              هل تعيش الحياة التي اخترتها بنفسك، أم تلك التي اعتاد الآخرون
              أن يختاروها لك؟
            </p>

            <p className="mt-4 leading-9 text-[#777887]">
              ربما لم تتوقف يوماً لتسأل نفسك عن الأفكار التي تؤمن بها،
              أو المعايير التي تقيس بها نجاحك، أو القرارات التي اتخذتها
              لأن الجميع أخبروك أنها الطريق الصحيح.
              هذا الكتاب يدعوك إلى التوقف، ومراجعة ما اعتدت اعتباره
              حقيقة، والنظر إلى نفسك والحياة من زاوية مختلفة.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/purchase"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#8275D8] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#8275D8]/20 transition hover:-translate-y-1 hover:bg-[#7062C7] sm:w-auto"
              >
                احصل على نسختك الآن ←
              </a>

              <span className="text-xs text-[#9697A4]">
                نسخة رقمية · PDF
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why this book */}
      <section className="border-t border-[#ECEBF1] bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold text-[#8275D8]">
              لماذا تقرأ هذا الكتاب؟
            </p>

            <h2 className="text-2xl font-extrabold leading-relaxed md:text-3xl">
              ليس لتجد من يفكر بدلاً منك، بل لتتعلم كيف تفكر بنفسك.
            </h2>

            <p className="mt-5 leading-9 text-[#777887]">
              هذا الكتاب ليس مجموعة من النصائح الجاهزة أو الوعود بحياة مثالية.
              إنه مساحة للتفكير والمراجعة، ومواجهة الأسئلة التي قد تكون
              أكثر أهمية من الإجابات التي اعتدت البحث عنها.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="border-r-2 border-[#8275D8] pr-5">
              <h3 className="font-bold">افهم نفسك بعيداً عن الآخرين</h3>
              <p className="mt-2 text-sm leading-8 text-[#858594]">
                راجع الصورة التي تكوّنت عن نفسك، واكتشف ما تريده أنت
                بعيداً عن توقعات المجتمع.
              </p>
            </div>

            <div className="border-r-2 border-[#8275D8] pr-5">
              <h3 className="font-bold">حرّر تفكيرك من الأفكار الموروثة</h3>
              <p className="mt-2 text-sm leading-8 text-[#858594]">
                تعلّم أن تسأل وتشكّك وتفحص قناعاتك بدلاً من قبولها
                لمجرد أنك نشأت عليها.
              </p>
            </div>

            <div className="border-r-2 border-[#8275D8] pr-5">
              <h3 className="font-bold">انظر إلى الحياة بوعي أعمق</h3>
              <p className="mt-2 text-sm leading-8 text-[#858594]">
                اقترب من فهم مشاعرك وعلاقاتك، وتقبّل تعقيدات التجربة الإنسانية.
              </p>
            </div>

            <div className="border-r-2 border-[#8275D8] pr-5">
              <h3 className="font-bold">ابدأ باختيار طريقك بنفسك</h3>
              <p className="mt-2 text-sm leading-8 text-[#858594]">
                لا تترك حياتك معلّقة بانتظار الوقت المناسب؛ ابدأ بصناعة
                خيارات أكثر انسجاماً مع ما تؤمن به.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final purchase */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-[28px] bg-gradient-to-br from-[#292A40] to-[#444064] px-7 py-12 text-center text-white md:px-14">
          <h2 className="text-2xl font-extrabold leading-relaxed md:text-3xl">
            ربما حان الوقت لتعيد النظر في النسخة التي تعيش بها.
          </h2>

          <p className="mt-4 text-sm leading-8 text-white/65">
            ابدأ رحلتك مع «نسخة لم تُكتب بعد».
          </p>

          <a
            href="/purchase"
            className="mt-7 inline-flex rounded-full bg-white px-9 py-4 text-sm font-bold text-[#292A40] transition hover:-translate-y-1 hover:bg-[#EDE9FC]"
          >
            احصل على الكتاب
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#ECEBF1] px-6 py-7">
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
  