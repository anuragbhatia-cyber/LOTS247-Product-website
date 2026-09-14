import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/ui";
import { Metrics } from "@/components/sections/metrics";
import { Recognition } from "@/components/sections/recognition";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Company — LOTS247",
  description:
    "Building the future of legal infrastructure for India's mobility ecosystem.",
};

const values = [
  {
    t: "Nationwide by design",
    d: "Legal coverage across every state — because vehicles don't stop at borders.",
  },
  {
    t: "Operational, not just legal",
    d: "We combine technology, legal expertise, and on-ground execution to actually resolve incidents.",
  },
  {
    t: "Built for mobility",
    d: "Designed specifically for fleets, mobility companies, and vehicle owners — not generic legal ops.",
  },
];

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        title="About LOTS247"
        sub="LOTS247 is India's legal infrastructure layer for mobility. We combine technology, nationwide legal infrastructure, and operational execution so every vehicle stays moving."
      />
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader
            title="Legal shouldn't stop vehicles"
            sub="When a vehicle stops because of a legal issue, LOTS247 gets it moving again."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="card">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                  ★
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">
                  {v.t}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-700">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Metrics />
      <Recognition />
      <FinalCta />
    </main>
  );
}
