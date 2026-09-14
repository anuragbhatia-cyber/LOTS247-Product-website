import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "VCare — Enterprise Vehicle Support Solution | LOTS247",
  description:
    "VCare by LOTS247 is a comprehensive enterprise vehicle support solution for large-scale vehicle operations — 24×7 legal assistance, bulk challan resolution, personalized reports, API integration, and dedicated account support.",
};

const includedInPlan = [
  "Unlimited Vehicle Coverage",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  "Dashboard Access",
  "Access for 10 Users",
  "Automated Reports",
  "Personalized Reports",
  "WhatsApp Incident Updates",
  "Bulk Challan Resolution",
  "API Integration",
  "Dedicated Account Manager",
  "Value-Added Services",
  "₹20,000 Worth of Add-Ons",
  "1,00,000 Coins for Compliance Checks",
];

const additionalServices = [
  { service: "On-Site Legal Resolution", offering: "Pay Per Use" },
  { service: "Online Challan Resolution", offering: "₹39" },
  { service: "Lok Adalat Resolution", offering: "As per Add-On B2" },
  { service: "Court Challan Resolution", offering: "Pay Per Use" },
  { service: "RTO-as-a-Service", offering: "Included" },
  { service: "Value-Added Services", offering: "B1, B2, B3" },
  { service: "Additional Add-On Value", offering: "Worth ₹20,000" },
];

const features = [
  {
    icon: "truck",
    title: "Unlimited Vehicle Coverage",
    desc: "Manage unlimited vehicles under a single VCare account, making it ideal for businesses with large or growing fleets.",
  },
  {
    icon: "phone",
    title: "24×7 On-Call Resolution",
    desc: "Get round-the-clock access to legal support and guidance for vehicle-related incidents and operational requirements.",
  },
  {
    icon: "pin",
    title: "On-Site Legal Resolution",
    desc: "For situations requiring physical legal assistance, on-site legal resolution services are available on a pay-per-use basis.",
  },
  {
    icon: "doc",
    title: "Challan-as-a-Service",
    desc: "Manage vehicle challans through a centralized service covering challan tracking and resolution requirements.",
  },
  {
    icon: "globe",
    title: "Online Challan Resolution",
    desc: "Resolve eligible online challans at a service fee of ₹39, helping businesses manage challan-related requirements efficiently at scale.",
  },
  {
    icon: "scale",
    title: "Lok Adalat Resolution",
    desc: "Get assistance for eligible Lok Adalat challan resolution as per the applicable Add-On B2 offering.",
  },
  {
    icon: "gavel",
    title: "Court Challan Resolution",
    desc: "Court challan resolution support is available on a pay-per-use basis, based on the nature and requirements of the case.",
  },
  {
    icon: "cert",
    title: "RTO-as-a-Service",
    desc: "Access RTO-related services to support vehicle documentation and operational requirements.",
  },
  {
    icon: "dash",
    title: "Advanced Dashboard Access",
    desc: "Get centralized visibility into vehicles, incidents, services, compliance, and operational activities through the LOTS247 dashboard.",
  },
  {
    icon: "users",
    title: "Multi-User Access",
    desc: "Allow up to 10 users to access and manage the dashboard, enabling better coordination across teams.",
  },
  {
    icon: "report",
    title: "Automated Reports",
    desc: "Access automated reports to track vehicle-related activities and operational performance.",
  },
  {
    icon: "pencil",
    title: "Personalized Reports",
    desc: "Get customized reporting based on your business and operational requirements.",
  },
  {
    icon: "chat",
    title: "Incident Updates via WhatsApp",
    desc: "Receive relevant incident updates and service progress directly through WhatsApp.",
  },
  {
    icon: "layers",
    title: "Bulk Challan Resolution",
    desc: "Manage and process challan-related requirements across multiple vehicles through bulk resolution support.",
  },
  {
    icon: "code",
    title: "API Integration",
    desc: "Integrate LOTS247 capabilities directly into your existing systems and workflows through API integration.",
  },
  {
    icon: "headset",
    title: "Dedicated Account Manager",
    desc: "Get dedicated account support for better coordination, service management, and operational assistance.",
  },
  {
    icon: "shield",
    title: "Compliance Checks",
    desc: "Use 1,00,000 coins for essential compliance checks including Challan Verification, RC Verification, and Driving Licence Verification.",
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
  pencil:
    "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  chat: "M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2h-7l-5 4v-4H6a2 2 0 01-2-2z",
  layers:
    "M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5",
  code: "M9 8l-5 4 5 4M15 8l5 4-5 4M14 4l-4 16",
  headset:
    "M4 13v-1a8 8 0 0116 0v1M4 13a2 2 0 002 2h1v-5H6a2 2 0 00-2 2v1zM20 13a2 2 0 01-2 2v0a3 3 0 01-3 3h-2M20 13v-1a2 2 0 00-2-2h-1v5",
  shield:
    "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
};

const problems = [
  {
    title: "Managing High Vehicle Volumes",
    desc: "Tracking incidents and compliance across a growing number of vehicles can become difficult without a centralized system.",
  },
  {
    title: "Complex Challan Management",
    desc: "Large fleets may deal with multiple challans across vehicles, requiring structured tracking and bulk resolution capabilities.",
  },
  {
    title: "Lack of Operational Visibility",
    desc: "Without centralized dashboards and reporting, decision-makers may struggle to get a complete view of vehicle operations.",
  },
  {
    title: "Scattered Teams",
    desc: "Multiple stakeholders require access to the same vehicle and incident information for better coordination.",
  },
  {
    title: "Integration Challenges",
    desc: "Businesses often need vehicle-related data and services to work seamlessly with their existing internal systems.",
  },
];

const benefits = [
  {
    title: "Built for Scale",
    desc: "Manage unlimited vehicles and support growing operational requirements through one centralized platform.",
  },
  {
    title: "Enterprise-Level Visibility",
    desc: "Get better control through dashboards, automated reports, and personalized reporting.",
  },
  {
    title: "Bulk Operations Support",
    desc: "Manage vehicle-related activities, including challan resolution, at scale.",
  },
  {
    title: "Better Team Collaboration",
    desc: "Provide dashboard access to up to 10 users and improve coordination across teams.",
  },
  {
    title: "Seamless System Integration",
    desc: "Integrate LOTS247 services into your existing business workflows through API integration.",
  },
  {
    title: "Dedicated Support",
    desc: "Get a Dedicated Account Manager to help coordinate services and operational requirements.",
  },
  {
    title: "Extensive Compliance Monitoring",
    desc: "Use 1,00,000 coins for RC, DL, and challan compliance checks across your vehicle ecosystem.",
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
  "Online Challan Resolution at ₹39",
  "Lok Adalat Resolution Support",
  "Court Challan Resolution Support",
  "RTO-as-a-Service",
  "Dashboard Access",
  "Access for 10 Users",
  "Automated Reports",
  "Personalized Reports",
  "WhatsApp Incident Updates",
  "Bulk Challan Resolution",
  "API Integration",
  "Dedicated Account Manager",
  "Value-Added Services",
  "₹20,000 Worth of Add-Ons",
  "1,00,000 Coins for Compliance Checks",
];

const faqs = [
  {
    q: "What is VCare by LOTS247?",
    a: "VCare is an enterprise-focused vehicle support solution designed for businesses managing large-scale vehicle operations. It combines legal support, challan management, compliance monitoring, reporting, integrations, and dedicated account support under one platform.",
  },
  {
    q: "How many vehicles can be managed under VCare?",
    a: "VCare allows businesses to manage unlimited vehicles under a single account.",
  },
  {
    q: "How many users can access the VCare dashboard?",
    a: "VCare provides dashboard access for up to 10 users, allowing multiple teams and stakeholders to coordinate through a centralized platform.",
  },
  {
    q: "Does VCare provide 24×7 support?",
    a: "Yes. VCare includes 24×7 On-Call Resolution for vehicle-related legal support and assistance.",
  },
  {
    q: "Does VCare include personalized reports?",
    a: "Yes. VCare includes both automated reports and personalized reports, allowing businesses to access reporting based on their operational requirements.",
  },
  {
    q: "Can VCare help manage challans in bulk?",
    a: "Yes. VCare includes Bulk Challan Resolution, making it suitable for businesses managing challan requirements across multiple vehicles.",
  },
  {
    q: "Does VCare support API integration?",
    a: "Yes. VCare includes API Integration, allowing businesses to integrate relevant LOTS247 services into their existing systems and workflows.",
  },
  {
    q: "Is a Dedicated Account Manager included?",
    a: "Yes. VCare provides access to a Dedicated Account Manager for better service coordination and account support.",
  },
  {
    q: "What are the 1,00,000 compliance coins used for?",
    a: "The 1,00,000 coins can be utilized for compliance checks including Challan Verification, RC Verification, and Driving Licence Verification.",
  },
  {
    q: "What value-added services are available?",
    a: "VCare includes access to applicable value-added services under the B1, B2, and B3 add-on categories, with benefits worth up to ₹20,000, as per the plan offering.",
  },
  {
    q: "Is on-site legal resolution included?",
    a: "On-site legal resolution is available on a pay-per-use basis, depending on the service requirement.",
  },
  {
    q: "Who should choose VCare?",
    a: "VCare is ideal for large fleet operators, logistics companies, transport businesses, mobility platforms, and enterprises that require advanced vehicle management, reporting, integrations, and dedicated support.",
  },
];

export default function VCarePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 text-white">LOTS247 VCare</h1>
            <p className="mt-6 text-[15px] leading-relaxed text-white/70">
              VCare is LOTS247&rsquo;s enterprise vehicle support solution for
              businesses managing large-scale operations — combining 24×7 legal
              assistance, bulk challan management, API integration, and
              dedicated account support in one ecosystem.
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
          <SectionHeader title="Large Fleets Need More Than Basic Vehicle Support" />
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

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="VCare Annual Plan" />

          <div className="mt-14 w-full">
            <div className="grid gap-8 rounded-3xl border border-ink-300/60 bg-white p-8 shadow-card md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
              <div>
                <div className="inline-grid place-items-center rounded-xl bg-secondary px-7 py-2">
                  <Image
                    src="/logo-vcare.webp"
                    alt="VCare"
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
                    ₹1,00,000
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  per Account / Year
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Contact Sales
                  </Link>
                  <BookDemoButton className="btn inline-flex border border-ink-300 bg-white text-ink-900 hover:bg-surface-alt">
                    Request a Demo
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
                Additional Services
              </h3>
              <div className="mt-6 overflow-hidden rounded-2xl border border-ink-300/60 bg-white">
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

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader title="Designed for Large-Scale Vehicle Operations" />
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

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Everything You Need for Large-Scale Vehicle Operations"
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

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="Why Choose VCare?" />
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
          <SectionHeader title="What Do You Get with VCare?" dark />
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
