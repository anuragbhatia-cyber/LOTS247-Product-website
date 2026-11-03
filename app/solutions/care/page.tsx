import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Care — Vehicle Legal Assistance for Private Owners | LOTS247",
  description:
    "LOTS Care by LOTS247 is a vehicle legal assistance plan for private vehicle owners — 24×7 on-call resolution, challan-as-a-service, dashboard access, and WhatsApp incident updates for one vehicle at ₹999 for six months.",
};

const includedInPlan = [
  "Coverage for 1 Vehicle",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  "Dashboard Access",
  "WhatsApp Incident Updates",
];

const additionalServices = [
  { service: "Online Challan Resolution", offering: "₹200" },
  { service: "Express Challan Resolution", offering: "₹3,000" },
  { service: "Court Challan Resolution", offering: "₹2,000" },
  { service: "On-Site Legal Resolution", offering: "Pay Per Use" },
  { service: "RTO-as-a-Service", offering: "Pay Per Use" },
  { service: "Add-On Services", offering: "Pay Per Use" },
  { service: "Value-Added Services (VAS)", offering: "Pay Per Use" },
];

const features = [
  {
    title: "Coverage for 1 Vehicle",
    desc: "Each LOTS Care subscription covers one vehicle, built around the needs of individual private vehicle owners.",
    icon: "truck",
  },
  {
    title: "24×7 On-Call Resolution",
    desc: "Reach legal support any time of day for roadside incidents, police checking, or disputes requiring immediate guidance.",
    icon: "phone",
  },
  {
    title: "Challan-as-a-Service",
    desc: "A single service covering online, Lok Adalat, and court challan resolution — handled through LOTS247.",
    icon: "doc",
  },
  {
    title: "Online Challan Resolution",
    desc: "Resolve eligible online challans at a service fee of ₹200 per challan.",
    icon: "globe",
  },
  {
    title: "Express Challan Resolution",
    desc: "For time-sensitive matters, express challan resolution is available at ₹3,000.",
    icon: "scale",
  },
  {
    title: "Court Challan Resolution",
    desc: "Get support for court challan-related resolution at ₹2,000, subject to eligibility.",
    icon: "gavel",
  },
  {
    title: "On-Site Legal Resolution",
    desc: "When physical legal assistance is needed, on-site resolution is available on a pay-per-use basis.",
    icon: "pin",
  },
  {
    title: "Dashboard Access",
    desc: "Track your vehicle, incidents, and service requests through the LOTS247 subscriber dashboard.",
    icon: "dash",
  },
  {
    title: "Incident Updates via WhatsApp",
    desc: "Receive timely updates on incidents and service progress directly on WhatsApp.",
    icon: "chat",
  },
];

const iconPaths: Record<string, string> = {
  truck:
    "M3 7h11v8H3zM14 10h4l3 3v2h-7zM6 18a2 2 0 100-4 2 2 0 000 4zM18 18a2 2 0 100-4 2 2 0 000 4z",
  phone:
    "M4 5c0-.6.4-1 1-1h2.3c.4 0 .8.3.9.7l1 3.1c.1.4 0 .8-.3 1L7.6 10a12 12 0 006.4 6.4l1.2-1.3c.3-.3.7-.4 1-.3l3.1 1c.4.2.7.6.7 1V19c0 .6-.4 1-1 1A16 16 0 014 5z",
  pin: "M12 21s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12zM12 11a2 2 0 100-4 2 2 0 000 4z",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M9 13h8M9 17h8",
  globe:
    "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18",
  scale:
    "M12 4v16M6 20h12M4 10l3-6 3 6M14 10l3-6 3 6M4 10a3 3 0 006 0M14 10a3 3 0 006 0",
  gavel:
    "M14 4l6 6-3 3-6-6zM11 7L4 14l3 3 7-7M14 20h7",
  cert: "M12 3l3 2 3-.5 1 3 2 2-2 2-1 3-3-.5-3 2-3-2-3 .5-1-3-2-2 2-2 1-3 3 .5zM9 12l2 2 4-4",
  dash: "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  chat: "M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-7l-5 4v-4H6a2 2 0 01-2-2z",
};

const problems = [
  {
    title: "Unexpected Roadside Situations",
    desc: "Police checking, challans, or roadside disputes can disrupt a regular day without quick access to the right guidance.",
  },
  {
    title: "Hard-to-Track Challans",
    desc: "Private vehicle owners often discover challans late, with little clarity on how to resolve them efficiently.",
  },
  {
    title: "Scattered Resolution Options",
    desc: "Online, Lok Adalat, and court routes each have their own process, which can be hard to navigate alone.",
  },
  {
    title: "No Single Place to Track Services",
    desc: "Updates and service requests often get lost across calls, messages, and emails.",
  },
];

const benefits = [
  {
    title: "Built for Private Vehicle Owners",
    desc: "A plan designed around individual drivers — one vehicle, one subscription, straightforward coverage.",
  },
  {
    title: "Always-On Legal Support",
    desc: "24×7 on-call resolution gives you quick access to guidance whenever something comes up on the road.",
  },
  {
    title: "Simple Challan Management",
    desc: "Online, Lok Adalat, and court challan resolution are handled through a single Challan-as-a-Service offering.",
  },
  {
    title: "Transparent Pricing",
    desc: "A clear six-month plan at ₹999, with additional services available on pay-per-use when you need them.",
  },
  {
    title: "Stay Informed on WhatsApp",
    desc: "Incident updates come to you directly on WhatsApp, with the dashboard available whenever you want a deeper view.",
  },
  {
    title: "Backed by LOTS247",
    desc: "Powered by the same LOTS247 platform that supports fleets, insurers, and OEMs — now tuned for individual owners.",
  },
];

const summary = [
  "Coverage for 1 Vehicle",
  "Six-Month Validity",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  "Online Challan Resolution",
  "Express Challan Resolution",
  "Court Challan Resolution",
  "On-Site Legal Resolution",
  "RTO-as-a-Service",
  "Dashboard Access",
  "WhatsApp Incident Updates",
  "Add-On Services on Pay Per Use",
  "Value-Added Services on Pay Per Use",
];

const faqs = [
  {
    q: "What is LOTS Care?",
    a: "LOTS Care is a six-month roadside legal assistance subscription for private vehicle owners. It provides 24×7 on-call legal assistance, challan-related services, dashboard access, and incident updates via WhatsApp.",
  },
  {
    q: "What is the price of LOTS Care?",
    a: "LOTS Care is available at ₹999 per vehicle for six months.",
  },
  {
    q: "How many vehicles are covered under the subscription?",
    a: "Each LOTS Care subscription covers one private vehicle.",
  },
  {
    q: "Does LOTS Care provide 24×7 legal assistance?",
    a: "Yes. LOTS Care includes 24×7 on-call legal assistance for vehicle-related roadside legal issues.",
  },
  {
    q: "Is on-site legal assistance included in the subscription?",
    a: "On-site legal assistance is available on a pay-per-use basis and is charged separately from the subscription fee.",
  },
  {
    q: "Can I get assistance with my vehicle challans?",
    a: "Yes. LOTS Care includes Challan-as-a-Service, with assistance available for eligible online, Lok Adalat, court, and express challan resolution options.",
  },
  {
    q: "What are the challan resolution charges?",
    a: "The applicable service charges are: Online Challan Resolution — ₹200, Lok Adalat Resolution — ₹1,000, Court Challan Resolution — ₹2,000, and Express Challan Resolution — ₹3,000. Resolution is subject to eligibility and applicable service conditions.",
  },
  {
    q: "Does LOTS Care provide RTO assistance?",
    a: "Yes. RTO-as-a-Service is available on a pay-per-use basis for applicable vehicle-related requirements.",
  },
  {
    q: "Does LOTS Care include dashboard access?",
    a: "Yes. Dashboard access is included in the LOTS Care subscription.",
  },
  {
    q: "Will I receive updates about my incident?",
    a: "Yes. LOTS Care includes incident updates through WhatsApp.",
  },
  {
    q: "Are automated and personalized reports included?",
    a: "No. Automated reports and personalized reports are not included in the LOTS Care subscription.",
  },
  {
    q: "Is a Dedicated Account Manager included?",
    a: "No. Dedicated Account Manager support is not included in the LOTS Care plan.",
  },
  {
    q: "Can I access additional services?",
    a: "Yes. On-site legal assistance, RTO services, add-on services, and value-added services are available on a pay-per-use basis.",
  },
  {
    q: "Who should subscribe to LOTS Care?",
    a: "LOTS Care is ideal for private car owners, daily commuters, families, and frequent travellers who want access to legal assistance and challan resolution support for their vehicle.",
  },
];

export default function CarePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-14 pb-16 text-white md:pt-16 md:pb-20">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 text-white">LOTS Care</h1>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70">
              A vehicle legal assistance plan built for private vehicle owners —
              24×7 on-call resolution, challan-as-a-service, dashboard access,
              and WhatsApp incident updates for one vehicle at ₹999 for six
              months.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-10"
              >
                Contact Sales
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader title="LOTS Care Plan" />

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid gap-8 rounded-3xl border border-ink-300/60 bg-white p-8 shadow-card md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
              <div>
                <Image
                  src="/logo-care.png"
                  alt="LOTS Care"
                  width={360}
                  height={110}
                  className="-ml-4 h-20 w-auto object-contain md:-ml-5 md:h-24"
                  priority
                />
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Six-Month Plan
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-ink-900 md:text-6xl">
                    ₹999
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  per Vehicle / 6 Months
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BookDemoButton className="btn-primary">
                    Book a demo
                  </BookDemoButton>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  What&rsquo;s Included
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {includedInPlan.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-ink-900"
                    >
                      <span className="mt-1 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-2.5 w-2.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 10l4 4 8-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-ink-900">
                Services Charged Per Use
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-300/60">
                <table className="w-full text-left">
                  <thead className="bg-surface-alt">
                    <tr>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Service
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {additionalServices.map((row) => (
                      <tr
                        key={row.service}
                        className="border-t border-ink-300/60"
                      >
                        <td className="px-5 py-4 text-sm font-semibold text-ink-900">
                          {row.service}
                        </td>
                        <td className="px-5 py-4 text-sm text-ink-700">
                          {row.offering}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-ink-500">
                Additional services are charged separately as applicable.
                Resolution services are subject to eligibility and applicable
                service conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="Everything You Need for Vehicle Legal Assistance" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-6 w-6"
                  >
                    <path d={iconPaths[f.icon]} />
                  </svg>
                </div>
                <div className="mt-4 text-[15px] font-semibold text-ink-900">
                  {f.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader title="Why Private Vehicle Owners Need LOTS Care" />
          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
                >
                  <div className="text-lg font-semibold text-ink-900 md:text-xl">
                    {p.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:aspect-auto lg:min-h-[460px]">
              <Image
                src="/care-highway-sunset.png"
                alt="Private vehicle driving on a highway at sunset"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="Why Choose LOTS Care?" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="text-[15px] font-semibold text-ink-900">
                  {b.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-10 md:py-12">
        <div className="container-x">
          <SectionHeader title="What Do You Get with LOTS Care?" dark />
          <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-ink-300/60 bg-white p-8 shadow-card md:p-12">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {summary.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[14px] font-medium text-ink-900"
                >
                  <span className="mt-1 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-accent text-white">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" id="faq">
        <div className="container-x">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-ink-300/60 rounded-2xl border border-ink-300/60 bg-white">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-ink-900">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink-300 text-ink-700 transition-transform group-open:rotate-45"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3">
                      <path
                        d="M10 4v12M4 10h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
