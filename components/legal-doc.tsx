import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalDoc({
  title,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  effectiveDate: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="bg-white">
      <section className="border-b border-ink-300/60 bg-surface-alt">
        <div className="container-x py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
              Legal
            </div>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-ink-900 md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-ink-500">
              Effective date: {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  On this page
                </div>
                <nav className="mt-4 flex flex-col gap-2">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-[14px] text-ink-700 transition-colors hover:text-accent"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="mx-auto max-w-3xl">
              <div className="text-[15px] leading-relaxed text-ink-700">
                {intro}
              </div>

              <div className="mt-10 flex flex-col gap-10">
                {sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-24">
                    <h2 className="text-xl font-semibold text-ink-900 md:text-2xl">
                      {s.title}
                    </h2>
                    <div className="mt-4 text-[15px] leading-relaxed text-ink-700">
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
