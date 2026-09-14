import type { Metadata } from "next";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Vehicle Challan Check API — LOTS247",
  description:
    "Retrieve and verify traffic challan information associated with a vehicle through the LOTS247 Vehicle Challan Check API. Structured challan data for fleet, logistics, leasing, insurance, mobility and automotive platforms.",
};

const outputFields = [
  "Challan Number",
  "Challan Status",
  "Challan Amount",
  "Pending Amount",
  "Challan Issue Date",
  "Challan Payment Date",
  "Challan Location",
  "Violation Details",
  "Challan Type",
  "Issuing Authority",
  "Vehicle Registration Number",
  "Payment Status",
  "Other relevant challan-related information",
];

const benefits = [
  {
    title: "Instant Challan Information",
    desc: "Retrieve available traffic challan information associated with a vehicle quickly and efficiently.",
  },
  {
    title: "Reduced Manual Effort",
    desc: "Automate challan verification and tracking workflows without depending on manual checks.",
  },
  {
    title: "Seamless Integration",
    desc: "Developer-friendly API designed for easy integration into existing websites, applications, dashboards, and fleet management systems.",
  },
  {
    title: "Structured Data Response",
    desc: "Receive challan information in a structured format for easier processing, monitoring, and decision-making.",
  },
  {
    title: "Better Vehicle Compliance Management",
    desc: "Help businesses monitor vehicle-related challans and support compliance management workflows.",
  },
];

const industries = [
  {
    title: "Fleet Management Companies",
    desc: "Monitor challans associated with fleet vehicles and streamline vehicle compliance tracking.",
  },
  {
    title: "Logistics Companies",
    desc: "Track traffic challans issued against commercial vehicles and support smoother fleet operations.",
  },
  {
    title: "Vehicle Leasing & Rental Companies",
    desc: "Monitor challans associated with leased or rented vehicles and maintain better visibility over vehicle-related liabilities.",
  },
  {
    title: "Insurance Companies",
    desc: "Access vehicle challan information as part of vehicle verification and risk assessment workflows.",
  },
  {
    title: "Mobility & Ride-Hailing Platforms",
    desc: "Monitor traffic challans associated with vehicles operating on their platforms.",
  },
  {
    title: "Automotive Marketplaces",
    desc: "Access available challan information during vehicle verification and onboarding processes.",
  },
  {
    title: "Enterprise Vehicle Management",
    desc: "Help organizations managing large vehicle databases monitor and track challans across their vehicles.",
  },
];

const faqs = [
  {
    q: "What is the Vehicle Challan Check API?",
    a: "The LOTS247 Vehicle Challan Check API enables businesses to retrieve available traffic challan information associated with a vehicle using its registration number. It helps automate challan tracking and reduces dependency on manual checks.",
  },
  {
    q: "How does the Vehicle Challan Check API work?",
    a: "Simply provide the vehicle registration number through the API request. The API processes the request and returns the available challan information associated with the vehicle in a structured response.",
  },
  {
    q: "What information can be retrieved through the API?",
    a: "Depending on data availability, the API can provide details such as challan number, challan amount, pending amount, issue date, payment date, challan location, violation details, challan status, payment status, and other relevant information.",
  },
  {
    q: "What input is required to check vehicle challans?",
    a: "The primary input required is the vehicle registration number. Once submitted, the API processes the request and retrieves the available challan information associated with the vehicle.",
  },
  {
    q: "Which industries can use the Vehicle Challan Check API?",
    a: "The API can be used by fleet management companies, logistics providers, vehicle leasing and rental companies, insurance companies, mobility platforms, automotive marketplaces, and enterprises managing multiple vehicles.",
  },
  {
    q: "Is the API suitable for fleet management?",
    a: "Yes. Fleet management companies can use the API to monitor challans associated with their vehicles and streamline vehicle compliance and operational workflows.",
  },
  {
    q: "Can the API be integrated into an existing platform?",
    a: "Yes. The LOTS247 Vehicle Challan Check API is designed for seamless integration into websites, applications, dashboards, fleet management systems, and other business workflows.",
  },
  {
    q: "Can this API help reduce manual challan checks?",
    a: "Yes. By automating the retrieval of available challan information, the API helps businesses reduce manual checks and streamline challan monitoring workflows.",
  },
  {
    q: "Can businesses monitor challans across multiple vehicles?",
    a: "Yes. The API can support businesses managing multiple vehicles by enabling challan verification and monitoring as part of their fleet or vehicle management workflows.",
  },
  {
    q: "How can I integrate the LOTS247 Vehicle Challan Check API into my business?",
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
    desc: "LOTS247 processes the request and retrieves the available challan information associated with the vehicle.",
  },
  {
    n: "03",
    title: "Get Challan Details",
    desc: "Receive available traffic challan details in a structured API response that can be integrated into your existing platform or workflow.",
  },
];

export default function VehicleChallanCheckApiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              APIs
            </div>
            <h1 className="h1 mt-4 text-white">
              Vehicle Challan Check API
            </h1>
            <p className="lead mt-6 text-white/80">
              Retrieve and verify traffic challan information associated with a
              vehicle through the LOTS247 Vehicle Challan Check API.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/65">
              Simplify challan tracking and monitoring with structured challan
              data, helping businesses stay informed about pending and issued
              traffic violations.
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
            title="Simplify Vehicle Challan Tracking with LOTS247"
            sub="The LOTS247 Vehicle Challan Check API enables businesses to retrieve available traffic challan information using a vehicle registration number."
          />
          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-ink-700">
            The API helps businesses access challan-related details without
            relying on manual checks across multiple platforms. It can be
            integrated into existing systems to support vehicle monitoring,
            compliance management, fleet operations, and other vehicle-related
            workflows.
          </p>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader
            title="Simple, Fast & Seamless Challan Verification"
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
                A single input is all the API needs to return available challan
                information for a vehicle.
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
                        Vehicle number for which challan details need to be
                        checked.
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
                Depending on data availability, the API can provide traffic
                challan-related information, including:
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
            title="Why Use LOTS247 Vehicle Challan Check API?"
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
