import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ApisSection } from "@/components/sections/apis";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "APIs & Developers — LOTS247",
  description:
    "Integrate legal infrastructure into your product. Vehicle verification, RC, DL, challan data, compliance status, and legal case workflows.",
};

const apis = [
  { name: "Vehicle verification", desc: "Verify vehicle registration and ownership details on demand.", method: "GET", path: "/v1/vehicles/{number}" },
  { name: "RC verification", desc: "Fetch registration certificate status and validity.", method: "GET", path: "/v1/rc/{number}" },
  { name: "Driving licence verification", desc: "Validate driving licence data with government sources.", method: "GET", path: "/v1/licence/{id}" },
  { name: "Challan data", desc: "Pull traffic challans by vehicle across all Indian states.", method: "GET", path: "/v1/challans" },
];

export default function ApisPage() {
  return (
    <main>
      <PageHero
        title="Integrate legal infrastructure into your product"
        sub="Build legal and compliance capabilities directly into your platform with LOTS247 APIs. Developer-friendly APIs with enterprise-grade reliability."
      />
      <ApisSection />
      <section className="section bg-white" id="endpoints">
        <div className="container-x">
          <SectionHeader
            title="Available integrations"
            sub="A snapshot of the APIs available through LOTS247."
          />
          <div className="mt-14 grid gap-4">
            {apis.map((a) => (
              <div
                key={a.name}
                className="flex flex-col gap-4 rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`grid h-8 w-16 shrink-0 place-items-center rounded-md text-xs font-bold tracking-wide ${
                      a.method === "POST"
                        ? "bg-secondary/15 text-secondary"
                        : "bg-brand-soft text-brand"
                    }`}
                  >
                    {a.method}
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-ink-900">
                      {a.name}
                    </div>
                    <div className="mt-1 text-sm text-ink-700">{a.desc}</div>
                    <code className="mt-2 inline-block font-mono text-xs text-ink-500">
                      {a.path}
                    </code>
                  </div>
                </div>
                <Link href="#" className="link-arrow">
                  Docs →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
