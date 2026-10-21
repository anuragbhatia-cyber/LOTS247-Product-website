import type { Metadata } from "next";
import Image from "next/image";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vehicle RC Verification API — LOTS247",
  description:
    "Verify and access essential vehicle registration details through the LOTS247 Vehicle RC Verification API. Structured vehicle data for insurance, fleet, logistics, fintech, mobility and automotive services.",
};

const outputFields = [
  "Vehicle Registration Number",
  "Owner Name",
  "Vehicle Make & Model",
  "Vehicle Manufacturer",
  "Vehicle Class",
  "Fuel Type",
  "Registration Date",
  "Registration Validity",
  "Fitness Validity",
  "Insurance Validity",
  "Insurance Provider Details",
  "PUC / Pollution Validity",
  "Financer Details",
  "Vehicle Status",
  "Seating Capacity",
  "Engine Number (Masked, where applicable)",
  "Chassis Number (Masked, where applicable)",
  "Police / Traffic Challan Information",
];

const benefits = [
  {
    title: "Instant Verification",
    desc: "Retrieve essential vehicle registration information quickly and efficiently.",
  },
  {
    title: "Reduced Manual Effort",
    desc: "Automate vehicle verification workflows and minimize dependency on manual data checks.",
  },
  {
    title: "Seamless Integration",
    desc: "Developer-friendly API designed for easy integration into your existing systems.",
  },
  {
    title: "Structured Data Response",
    desc: "Receive vehicle information in a structured format for better processing and decision-making.",
  },
  {
    title: "Scalable Solution",
    desc: "Built to support businesses managing individual vehicles as well as large-scale fleets.",
  },
];

const industries = [
  {
    title: "Insurance Companies",
    desc: "Verify vehicle details during policy issuance, renewals, claims processing, and fraud prevention.",
  },
  {
    title: "Fleet Management Companies",
    desc: "Monitor and manage vehicle-related information, including registration, insurance, fitness, and compliance details.",
  },
  {
    title: "Logistics Companies",
    desc: "Verify vehicle information during fleet onboarding and day-to-day operations.",
  },
  {
    title: "NBFCs & Financial Institutions",
    desc: "Validate vehicle ownership and registration information during loan processing and financing.",
  },
  {
    title: "Automotive Marketplaces",
    desc: "Enable faster vehicle verification for buyers, sellers, dealers, and automotive platforms.",
  },
  {
    title: "Mobility & Rental Platforms",
    desc: "Verify vehicles before onboarding them into mobility, leasing, rental, or subscription platforms.",
  },
];

const faqs = [
  {
    q: "What is the Vehicle RC Verification API?",
    a: "The LOTS247 Vehicle RC Verification API enables businesses to retrieve and verify essential vehicle registration details using a vehicle registration number. It helps automate vehicle verification processes and reduces dependency on manual checks.",
  },
  {
    q: "How does the Vehicle RC Verification API work?",
    a: "Simply provide the vehicle registration number as an input through the API. The API processes the request and returns the available vehicle registration and related details in a structured response.",
  },
  {
    q: "What information can be retrieved through the API?",
    a: "Depending on data availability, the API can provide details such as vehicle registration number, owner name, make and model, fuel type, registration details, insurance validity, fitness validity, PUC status, financer details, and other relevant vehicle information.",
  },
  {
    q: "Can the API be integrated into an existing platform?",
    a: "Yes. The LOTS247 Vehicle RC Verification API is designed for seamless integration into existing websites, applications, dashboards, fleet management systems, and other business workflows.",
  },
  {
    q: "Which industries can use the Vehicle RC Verification API?",
    a: "The API can be used by insurance companies, fleet management businesses, logistics providers, NBFCs, financial institutions, automotive marketplaces, mobility platforms, vehicle rental companies, and other businesses that require vehicle verification.",
  },
  {
    q: "Is the API suitable for fleet verification?",
    a: "Yes. The API can support fleet-related verification workflows by helping businesses retrieve and verify essential vehicle information, making it useful for vehicle onboarding, fleet management, compliance monitoring, and operational processes.",
  },
  {
    q: "What input is required to verify a vehicle?",
    a: "The primary input required is the vehicle registration number. Once submitted, the API processes the request and provides the available vehicle-related information.",
  },
  {
    q: "Can this API help reduce manual verification efforts?",
    a: "Yes. By automating the retrieval of vehicle information, the API helps businesses reduce manual data checks, improve operational efficiency, and streamline vehicle verification workflows.",
  },
  {
    q: "Who can use the LOTS247 Vehicle RC Verification API?",
    a: "Any business or platform that requires vehicle verification or vehicle-related information can explore the LOTS247 Vehicle RC Verification API based on their operational requirements.",
  },
  {
    q: "How can I integrate the LOTS247 Vehicle RC Verification API into my business?",
    a: "You can connect with the LOTS247 team to understand the API capabilities, integration process, and the solution best suited for your business requirements.",
  },
];

const steps = [
  {
    n: "01",
    title: "Enter Vehicle Number",
    desc: "Provide the vehicle registration number through the API request.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "API Processing",
    desc: "LOTS247 processes the request and retrieves the available vehicle registration information.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Get Vehicle Details",
    desc: "Receive comprehensive vehicle information in a structured API response that can be integrated into your existing platform or workflow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function VehicleRcVerificationApiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 text-white">
              Vehicle RC Verification API
            </h1>
            <p className="mt-6 text-lg leading-[1.6] text-white/80">
              Simplify vehicle verification workflows with structured vehicle
              data, helping businesses reduce manual efforts and improve
              operational efficiency.
            </p>
            <div className="mt-8 flex justify-center">
              <BookDemoButton className="btn-primary">
                Book a demo
              </BookDemoButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="h2 text-ink-900">
                Simplify Vehicle Verification with LOTS247
              </h2>
              <p className="mt-5 text-lg leading-[1.6] text-ink-700">
                The LOTS247 Vehicle RC Verification API enables businesses to
                verify and retrieve essential vehicle registration information
                using a vehicle registration number.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                Designed for industries such as insurance, fleet management,
                logistics, fintech, NBFCs, mobility, and automotive services,
                the API helps automate vehicle verification workflows and
                reduce dependency on manual checks.
              </p>
            </div>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/api-plate-infographic.png"
                alt="Vehicle number plate infographic showing owner details, pending challans, challan history, and fine amount"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Simple, Fast & Seamless Verification"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, idx) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-accent/50 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  {s.icon}
                </div>
                <div className="mt-5 font-mono text-sm font-bold text-accent">
                  Step {s.n}
                </div>
                <div className="mt-3 text-lg font-semibold text-ink-900">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {s.desc}
                </p>
                {idx < steps.length - 1 ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-full top-1/2 z-10 hidden h-1 w-6 -translate-x-px -translate-y-1/2 rounded-full bg-accent md:block"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="h2 mt-4 text-ink-900">API Input</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                A single input is all the API needs to return a full vehicle
                record.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-ink-300/60">
                <table className="w-full text-left">
                  <thead className="bg-surface-alt">
                    <tr>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Input Field
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-ink-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-ink-300/60">
                      <td className="px-5 py-4 font-mono text-sm font-semibold text-ink-900">
                        Vehicle Registration Number
                      </td>
                      <td className="px-5 py-4 text-sm text-ink-700">
                        Vehicle number for which RC details need to be
                        verified.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="h2 mt-4 text-ink-900">
                Information Available Through the API
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                Depending on data availability, the API can provide essential
                vehicle-related information, including:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {outputFields.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-lg border border-ink-300/60 bg-white px-3 py-2"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-[14px] font-medium text-ink-900">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Why Use LOTS247 Vehicle RC Verification API?"
          />
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

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader
            title="Built for Multiple Industries"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="text-[15px] font-semibold text-ink-900">
                  {i.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {i.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt" id="faq">
        <div className="container-x">
          <SectionHeader
            title="Frequently Asked Questions"
          />
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
