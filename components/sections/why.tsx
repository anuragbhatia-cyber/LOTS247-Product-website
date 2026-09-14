const iconPaths: Record<string, string> = {
  map: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7",
  clock: "M12 8v4l3 2M12 21a9 9 0 100-18 9 9 0 000 18z",
  spark: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1",
  dash: "M3 13h8V3H3v10zm10 8h8V11h-8v10zM3 21h8v-6H3v6zM13 3v6h8V3h-8z",
  plug: "M9 3v6M15 3v6M6 9h12v2a6 6 0 01-12 0V9zM12 15v6",
  truck: "M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z",
};

const diffs = [
  {
    title: "Nationwide legal coverage",
    desc: "Vetted attorneys in every jurisdiction, ready to act the moment a case opens.",
    icon: "map",
    className: "lg:col-span-2",
  },
  {
    title: "Real-time legal operations",
    desc: "Live status on every matter — no more 30-day update cycles.",
    icon: "clock",
    className: "lg:col-span-1",
  },
  {
    title: "Technology-first platform",
    desc: "Purpose-built software, not a law firm bolting on a portal.",
    icon: "spark",
    className: "lg:col-span-1",
  },
  {
    title: "Enterprise dashboards",
    desc: "Aggregate reporting across cases, jurisdictions, and outcomes.",
    icon: "dash",
    className: "lg:col-span-1",
  },
  {
    title: "API-ready infrastructure",
    desc: "Plug LOTS247 directly into your ops, dispatch, or claims systems.",
    icon: "plug",
    className: "lg:col-span-1",
  },
  {
    title: "Built for mobility",
    desc: "Designed specifically for fleet, rental, and mobility operators.",
    icon: "truck",
    className: "lg:col-span-2",
  },
];

export function Why() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2 text-ink-900">
            More than legal support. A legal infrastructure layer for
            mobility.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d) => (
            <div
              key={d.title}
              className={`group flex flex-col gap-4 rounded-2xl border border-ink-300/60 bg-white p-6 transition-shadow hover:shadow-md ${d.className}`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d={iconPaths[d.icon]} />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
