import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader, ArrowIcon } from "@/components/ui";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Resources — LOTS247",
  description:
    "Legal guides, compliance resources, regulatory updates, and operational best practices for vehicles and fleets.",
};

const kb = [
  {
    tag: "Legal guide",
    title: "Handling roadside legal incidents",
    desc: "Step-by-step playbook for drivers and operations teams when a vehicle is stopped.",
  },
  {
    tag: "Compliance",
    title: "State-wise permit requirements",
    desc: "A practical reference for permits, fitness, and pollution requirements across Indian states.",
  },
  {
    tag: "Regulatory update",
    title: "Motor Vehicles Act — recent changes",
    desc: "Summary of amendments and how they affect fleet operations and challan risk.",
  },
  {
    tag: "Best practice",
    title: "Reducing operational downtime",
    desc: "Field-tested playbook to minimize downtime from legal, compliance, or documentation issues.",
  },
  {
    tag: "Case study",
    title: "Fleet operator resolves challans 3× faster",
    desc: "How a nationwide fleet operator centralized challan management with LOTS247.",
  },
  {
    tag: "Case study",
    title: "Logistics company cuts detention costs",
    desc: "Multi-state legal support reduced disruption for a large logistics network.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        title="Legal guides, compliance, and playbooks"
        sub="Access a comprehensive repository of legal guides, compliance resources, regulatory updates, and operational best practices for vehicles and fleets."
      />
      <section className="section bg-white" id="knowledge-base">
        <div className="container-x">
          <SectionHeader
            title="Everything you need to run legally resilient operations"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kb.map((k) => (
              <article
                key={k.title}
                className="card flex flex-col hover:-translate-y-0.5"
              >
                <div className="inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {k.tag}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {k.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {k.desc}
                </p>
                <Link href="#" className="link-arrow mt-5">
                  Read <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
