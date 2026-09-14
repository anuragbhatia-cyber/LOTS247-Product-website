import { SectionHeader } from "@/components/ui";

const highlights = [
  "Industry recognition",
  "Ecosystem partnerships",
  "Technology integrations",
  "Mobility collaborations",
];

export function Recognition() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeader
          title="Building the future of legal infrastructure"
          sub="Recognized by leading innovation and startup ecosystems, and partnered with organizations across mobility, insurance, and technology."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h}
              className="rounded-2xl bg-surface-alt p-8 transition-all hover:-translate-y-0.5"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
                <span className="text-sm font-bold">★</span>
              </div>
              <div className="mt-5 text-[15px] font-semibold text-ink-900">
                {h}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
