import type { Metadata } from "next";
import Link from "next/link";
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
  },
  {
    n: "02",
    title: "API Processing",
    desc: "LOTS247 processes the request and retrieves the available vehicle registration information.",
  },
  {
    n: "03",
    title: "Get Vehicle Details",
    desc: "Receive comprehensive vehicle information in a structured API response that can be integrated into your existing platform or workflow.",
  },
];

export default function VehicleRcVerificationApiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              APIs
            </div>
            <h1 className="h1 mt-4 text-white">
              Vehicle RC Verification API
            </h1>
            <p className="lead mt-6 text-white/80">
              Verify and access essential vehicle registration details through
              the LOTS247 Vehicle RC Verification API.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Simplify vehicle verification workflows with structured vehicle
              data, helping businesses reduce manual efforts and improve
              operational efficiency.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
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
              <BookDemoButton className="btn inline-flex border border-white/20 bg-white/5 text-white hover:bg-white/10">
                Book a demo
              </BookDemoButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeader
            title="Simplify Vehicle Verification with LOTS247"
            sub="The LOTS247 Vehicle RC Verification API enables businesses to verify and retrieve essential vehicle registration information using a vehicle registration number."
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-ink-700">
            Designed for industries such as insurance, fleet management,
            logistics, fintech, NBFCs, mobility, and automotive services, the
            API helps automate vehicle verification workflows and reduce
            dependency on manual checks.
          </p>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Simple, Fast & Seamless Verification"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card"
              >
                <div className="font-mono text-sm font-bold text-accent">
                  Step {s.n}
                </div>
                <div className="mt-3 text-lg font-semibold text-ink-900">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {s.desc}
                </p>
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
                    <span className="text-[14px] text-ink-900">{f}</span>
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
