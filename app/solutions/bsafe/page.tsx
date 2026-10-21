import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "BSafe — Vehicle Support Solution for Businesses | LOTS247",
  description:
    "BSafe by LOTS247 is a comprehensive vehicle support solution for businesses managing multiple vehicles — 24×7 legal assistance, challan resolution, RTO support, compliance checks, dashboard access, and automated reports.",
};

const includedInPlan = [
  "Unlimited Vehicles",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  "Dashboard Access",
  "Access for 3 Users",
  "Automated Reports",
  "WhatsApp Incident Updates",
  "40,000 Coins for Compliance Checks",
];

const additionalServices = [
  { service: "On-Site Legal Resolution", offering: "Pay Per Use" },
  { service: "Online Challan Resolution", offering: "₹49" },
  { service: "Lok Adalat Resolution", offering: "₹1,000" },
  { service: "Court Challan Resolution", offering: "₹2,000" },
  { service: "RTO-as-a-Service", offering: "Pay Per Use" },
  { service: "Value-Added Services", offering: "Pay Per Use" },
  { service: "Dedicated Account Manager", offering: "Pay Per Use" },
];

const features = [
  {
    title: "Unlimited Vehicle Coverage",
    desc: "Manage unlimited vehicles under a single BSafe account, making it easier to support growing vehicle operations without fixed vehicle limits.",
    icon: "truck",
  },
  {
    title: "24×7 On-Call Resolution",
    desc: "Get access to legal support and guidance whenever a vehicle-related issue requires immediate assistance.",
    icon: "phone",
  },
  {
    title: "On-Site Legal Resolution",
    desc: "For situations requiring physical legal assistance, on-site legal resolution services can be availed on a pay-per-use basis.",
    icon: "pin",
  },
  {
    title: "Challan-as-a-Service",
    desc: "Manage challan-related requirements through a structured service offering covering different types of challan resolution.",
    icon: "doc",
  },
  {
    title: "Online Challan Resolution",
    desc: "Resolve eligible online challans at a service fee of ₹49.",
    icon: "globe",
  },
  {
    title: "Lok Adalat Resolution",
    desc: "Get assistance for eligible challan resolution through Lok Adalat at ₹1,000.",
    icon: "scale",
  },
  {
    title: "Court Challan Resolution",
    desc: "Get support for court challan-related resolution at ₹2,000.",
    icon: "gavel",
  },
  {
    title: "RTO-as-a-Service",
    desc: "Access RTO-related services based on your business requirements on a pay-per-use basis.",
    icon: "cert",
  },
  {
    title: "Dashboard Access",
    desc: "Get centralized access to manage vehicles, incidents, services, and other relevant operational information.",
    icon: "dash",
  },
  {
    title: "Multi-User Access",
    desc: "Allow up to 3 users to access and manage the dashboard.",
    icon: "users",
  },
  {
    title: "Automated Reports",
    desc: "Access automated reports to maintain better visibility over vehicle-related activities and services.",
    icon: "report",
  },
  {
    title: "Incident Updates via WhatsApp",
    desc: "Stay informed about incident updates and service progress through WhatsApp notifications.",
    icon: "chat",
  },
  {
    title: "Compliance Checks",
    desc: "Use available credits for essential compliance checks including Challan Check, RC Verification, and Driving Licence Verification.",
    icon: "shield",
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
  users:
    "M8 11a3 3 0 100-6 3 3 0 000 6zM16 13a3 3 0 100-6 3 3 0 000 6zM2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-3.3 2.7-6 6-6",
  report:
    "M4 4h16v16H4zM8 16v-4M12 16V8M16 16v-6",
  chat: "M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-7l-5 4v-4H6a2 2 0 01-2-2z",
  shield:
    "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
};

const problems = [
  {
    title: "Legal Issues on the Road",
    desc: "Unexpected police checking, roadside disputes, or legal situations can create operational disruptions.",
  },
  {
    title: "Challan Management",
    desc: "Tracking and resolving challans across multiple vehicles can become difficult without a centralized process.",
  },
  {
    title: "Compliance Monitoring",
    desc: "Keeping track of RC, challans, and driving licence information requires regular monitoring.",
  },
  {
    title: "Operational Visibility",
    desc: "Without a centralized dashboard, vehicle-related incidents and activities can remain scattered across multiple channels.",
  },
  {
    title: "Delayed Updates",
    desc: "Teams may struggle to get timely updates regarding incidents and service requests.",
  },
];

const benefits = [
  {
    title: "Unlimited Vehicle Coverage",
    desc: "Manage unlimited vehicles under one account without worrying about fixed vehicle limits.",
  },
  {
    title: "Centralized Support",
    desc: "Access legal, challan, compliance, and RTO-related services through a single platform.",
  },
  {
    title: "Pay Only for What You Need",
    desc: "Additional services such as on-site legal resolution, RTO assistance, and value-added services are available on a pay-per-use basis.",
  },
  {
    title: "Better Operational Visibility",
    desc: "Use the dashboard and automated reports to stay informed about vehicle-related activities and services.",
  },
  {
    title: "Faster Updates",
    desc: "Receive incident-related updates through WhatsApp for better communication and tracking.",
  },
  {
    title: "Built for Growing Operations",
    desc: "BSafe is designed for businesses looking for a scalable solution to manage increasing vehicle-related requirements.",
  },
];

const clientLogos = [
  { src: "/client-blr.png", alt: "BLR" },
  { src: "/client-bluwheelz.png", alt: "Bluwheelz" },
  { src: "/client-eco-mobility.png", alt: "Eco Mobility" },
  { src: "/client-greenline.png", alt: "Greenline" },
  { src: "/client-mooving.png", alt: "Mooving" },
  { src: "/client-samrx.png", alt: "SamRx" },
  { src: "/client-supreme.png", alt: "Supreme" },
];

const summary = [
  "Unlimited Vehicle Coverage",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  "Online Challan Resolution",
  "Lok Adalat Assistance",
  "Court Challan Resolution",
  "Dashboard Access",
  "Access for 3 Users",
  "Automated Reports",
  "WhatsApp Incident Updates",
  "40,000 Coins for Compliance Checks",
  "Challan, RC & DL Verification",
  "RTO Services on Pay Per Use",
  "On-Site Legal Resolution on Pay Per Use",
  "Additional Value-Added Services",
];

const faqs = [
  {
    q: "What is BSafe by LOTS247?",
    a: "BSafe is a comprehensive vehicle support solution designed for businesses managing multiple vehicles. It brings together legal support, challan management, compliance checks, dashboard access, reporting, and other vehicle-related services under one platform.",
  },
  {
    q: "How many vehicles can be managed under BSafe?",
    a: "BSafe allows businesses to manage unlimited vehicles under a single account.",
  },
  {
    q: "Does BSafe provide 24×7 support?",
    a: "Yes. BSafe includes 24×7 On-Call Resolution to help users access support and guidance for vehicle-related legal situations.",
  },
  {
    q: "Is on-site legal resolution included in the plan?",
    a: "On-site legal resolution is available on a pay-per-use basis, depending on the service requirement.",
  },
  {
    q: "What challan services are available under BSafe?",
    a: "BSafe provides Challan-as-a-Service support, including Online Challan Resolution, Lok Adalat Resolution, and Court Challan Resolution. The applicable charges vary depending on the type of resolution required.",
  },
  {
    q: "Does BSafe provide RTO-related services?",
    a: "Yes. RTO-as-a-Service is available on a pay-per-use basis, depending on the specific service requirement.",
  },
  {
    q: "How many users can access the BSafe dashboard?",
    a: "BSafe provides dashboard access for up to 3 users.",
  },
  {
    q: "Are reports available under BSafe?",
    a: "Yes. The plan includes automated reports to help businesses maintain visibility over vehicle-related activities and services.",
  },
  {
    q: "Will I receive incident updates?",
    a: "Yes. Relevant incident and service updates can be shared through WhatsApp.",
  },
  {
    q: "What are the 40,000 coins used for?",
    a: "The 40,000 coins can be utilized for compliance checks including Challan Verification, RC Verification, and Driving Licence Verification.",
  },
  {
    q: "Can I get a dedicated account manager?",
    a: "A Dedicated Account Manager is available as an additional pay-per-use service, based on business requirements.",
  },
  {
    q: "Is API integration included in BSafe?",
    a: "API integration is not included as part of the standard BSafe plan.",
  },
];

export default function BSafePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 text-white">LOTS247 BSafe</h1>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70">
              BSafe is LOTS247&apos;s vehicle support solution for businesses managing multiple vehicles — combining 24×7 legal assistance, challan resolution, RTO support, and compliance tracking on one platform.
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
          <SectionHeader title="BSafe Annual Plan" />

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid gap-8 rounded-3xl border border-ink-300/60 bg-white p-8 shadow-card md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
              <div>
                <div className="inline-grid place-items-center rounded-xl bg-accent px-7 py-2">
                  <Image
                    src="/logo-bsafe.webp"
                    alt="BSafe"
                    width={260}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Annual Plan
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-ink-900 md:text-6xl">
                    ₹40,000
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  per Account / Year
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
                Additional Services Available
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-300/60">
                <table className="w-full text-left">
                  <thead className="bg-surface-alt">
                    <tr>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Service
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Offering
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
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Everything You Need to Manage Vehicle-Related Legal & Compliance Requirements"
          />
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
          <SectionHeader title="Managing Multiple Vehicles Shouldn't Mean Managing Multiple Problems" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="text-[15px] font-semibold text-ink-900">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader title="Why Choose BSafe?" />
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

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="Designed for Businesses Managing Multiple Vehicles" />
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {clientLogos.map((c) => (
              <div key={c.src} className="relative h-10 w-full max-w-[140px]">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="140px"
                  className="object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-10 md:py-12">
        <div className="container-x">
          <SectionHeader title="What Do You Get with BSafe?" dark />
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
