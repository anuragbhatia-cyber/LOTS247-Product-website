const industries = [
  { name: "Logistics & transportation", tag: "Legal + Compliance" },
  { name: "Fleet management", tag: "24×7 Assistance" },
  { name: "Commercial vehicles", tag: "Challan Ops" },
  { name: "Passenger mobility", tag: "Driver Cover" },
  { name: "Automotive OEMs", tag: "API & Data" },
  { name: "Insurance", tag: "Claims Support" },
];

function IndustryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  );
}

export function Industries() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(900px 500px at 10% 20%, rgba(44,183,125,0.10), transparent 60%), radial-gradient(700px 400px at 100% 100%, rgba(247,151,39,0.08), transparent 60%)",
        }}
      />
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-accent">
              Industries we cater to
            </p>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.1] tracking-[-0.02em] text-white md:text-[52px] lg:text-[56px]">
              Built for every corner of India's mobility economy
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.6] text-white/70">
              From nationwide logistics fleets to last-mile mobility platforms,
              LOTS247 supports the operators, OEMs, and insurers who keep India
              moving — with legal, compliance, and on-road assistance built in.
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] md:p-8">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10">
                  <IndustryIcon />
                </div>
                <div>
                  <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-700">
                    LOTS247 Enterprise
                  </div>
                  <h3 className="mt-1 text-[20px] font-semibold leading-tight text-ink-900">
                    Industries served across India
                  </h3>
                </div>
              </div>

              <div className="mt-6 flex gap-6 border-b border-ink-300/60 text-[13px] font-medium">
                <button
                  type="button"
                  className="border-b-2 border-accent pb-3 font-semibold text-accent"
                >
                  All industries
                </button>
                <button
                  type="button"
                  className="pb-3 text-ink-700 hover:text-ink-900"
                >
                  Fleets
                </button>
                <button
                  type="button"
                  className="pb-3 text-ink-700 hover:text-ink-900"
                >
                  OEMs & Insurance
                </button>
              </div>

              <ul className="mt-4 divide-y divide-ink-300/60">
                {industries.map((i) => (
                  <li
                    key={i.name}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-alt">
                        <IndustryIcon />
                      </span>
                      <span className="truncate text-[15px] font-semibold text-ink-900">
                        {i.name}
                      </span>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {i.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
