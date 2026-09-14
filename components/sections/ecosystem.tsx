import { SectionHeader } from "@/components/ui";

const steps = [
  "Vehicle",
  "Driver",
  "LOTS247 Platform",
  "Lawyers",
  "Compliance APIs",
  "Fleet Dashboard",
  "Resolution",
];

export function Ecosystem() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeader
          title="One platform. Every legal and compliance need."
          sub="LOTS247 connects vehicles, drivers, fleet operators, lawyers, insurers, and mobility businesses through a single legal operations platform."
        />
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {steps.map((s, i) => {
            const isHub = s === "LOTS247 Platform";
            return (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`grid h-24 w-36 place-items-center rounded-2xl border px-3 text-center text-sm font-semibold shadow-sm transition-all ${
                    isHub
                      ? "border-brand bg-brand text-white shadow-md"
                      : "border-ink-300/70 bg-surface-soft text-ink-900"
                  }`}
                >
                  <div>
                    <div
                      className={`mx-auto mb-2 h-6 w-6 rounded-md ${
                        isHub ? "bg-accent" : "bg-brand-soft"
                      }`}
                    />
                    {s}
                  </div>
                </div>
                {i < steps.length - 1 ? (
                  <div className="text-lg text-ink-500">→</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
