import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeader, ArrowIcon } from "@/components/ui";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Success Stories — LOTS247",
  description:
    "Real outcomes from fleets and mobility operators using LOTS247 for on-road legal assistance, compliance, and challan management.",
};

const featured = {
  tag: "Featured Story",
  company: "PanIndia Logistics",
  segment: "Long-haul freight · 1,200 vehicles",
  title: "Cut vehicle downtime by 68% across a 1,200-truck fleet",
  desc: "How PanIndia Logistics moved from reactive challan handling and roadside disputes to a structured, on-call legal workflow — and what it did to on-road hours, insurance claims, and driver morale.",
};

const stories = [
  {
    company: "Metro Cab Co.",
    segment: "Ride-hailing · 8,500 vehicles",
    title: "One dashboard for 12 states of compliance",
    desc: "Consolidated permits, fitness, PUC, and challans across 12 states into a single Vcare dashboard.",
    metric: "92% compliance rate",
  },
  {
    company: "Bharat Movers",
    segment: "Last-mile delivery · 450 vehicles",
    title: "Bulk challan resolution saved 200+ ops hours a month",
    desc: "Automated bulk resolution replaced manual, driver-by-driver challan handling for their ops team.",
    metric: "200+ hours/mo saved",
  },
  {
    company: "SafeRide School Transport",
    segment: "School fleets · 120 buses",
    title: "24/7 on-call legal cover for a safety-critical fleet",
    desc: "Round-the-clock resolution and RTO support gives parents and schools a documented safety layer.",
    metric: "0 disrupted routes in 2026",
  },
  {
    company: "GreenCharge EVs",
    segment: "EV fleet operator · 320 vehicles",
    title: "State-wise permit rollouts, done in weeks",
    desc: "Used LOTS247 legal teams on the ground in 6 states to fast-track EV commercial permits.",
    metric: "6 states in 5 weeks",
  },
  {
    company: "Karnataka Roadways",
    segment: "State transport partner · 2,400 vehicles",
    title: "Structured legal defense for driver detention cases",
    desc: "Standardized response playbook for driver detention, resulting in faster releases and fewer escalations.",
    metric: "4.2× faster releases",
  },
  {
    company: "Urban Cargo",
    segment: "Intra-city logistics · 600 vehicles",
    title: "Integrated LOTS247 APIs into their TMS in a week",
    desc: "Direct API integration surfaces every challan and compliance event inside their existing operations tools.",
    metric: "7-day integration",
  },
];

export default function SuccessStoriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title="Real outcomes from real fleets"
        sub="How mobility operators across India are using LOTS247 to reduce downtime, strengthen compliance, and unlock on-road legal support at scale."
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            {featured.tag}
          </div>
          <article className="mt-4 grid gap-8 rounded-2xl border border-ink-300/60 bg-white p-6 md:grid-cols-[1.2fr_1fr] md:items-center md:p-10">
            <div className="grid h-64 place-items-center rounded-xl bg-surface-alt text-xs uppercase tracking-[0.2em] text-ink-500 md:h-full">
              Customer image
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                {featured.company} · {featured.segment}
              </div>
              <h2 className="mt-3 text-2xl font-bold text-ink-900 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
                {featured.desc}
              </p>
              <Link href="#" className="link-arrow mt-6">
                Read the case study <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="More customer stories" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <article
                key={s.title}
                className="card flex flex-col hover:-translate-y-0.5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  {s.company}
                </div>
                <div className="mt-1 text-xs text-ink-500">{s.segment}</div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {s.desc}
                </p>
                <div className="mt-5 inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {s.metric}
                </div>
                <Link href="#" className="link-arrow mt-5">
                  Read story <ArrowIcon className="h-3.5 w-3.5" />
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
