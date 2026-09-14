const metrics = [
  { v: "80,000+", l: "Lawyer network across India" },
  { v: "98%", l: "Pincodes covered nationwide" },
  { v: "24×7", l: "On-call legal assistance" },
  { v: "28 States", l: "Multi-state compliance coverage" },
  { v: "1M+", l: "Challans tracked & resolved" },
  { v: "Enterprise", l: "Fleet, OEM & insurance support" },
];

export function Metrics() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 text-ink-900 md:whitespace-nowrap">
            Legal operations at national scale
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.l}
              className="rounded-2xl bg-surface-alt p-8 transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl font-bold leading-tight text-accent">
                {m.v}
              </div>
              <div className="mt-2 text-[15px] font-medium text-ink-700">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
