import type { Metadata } from "next";
import Image from "next/image";
import { BookDemoButton } from "@/components/book-demo-button";
import { FinalCta } from "@/components/sections/final-cta";
import { SectionHeader } from "@/components/ui";
import { Faq } from "@/components/sections/faq";
import { IndustryIcon, type IndustryIconName } from "@/components/industry-icon";

export const metadata: Metadata = {
  title: "Driving Licence Verification API — LOTS247",
  description:
    "Verify driving licence details quickly and seamlessly with the LOTS247 Driving Licence Verification API. Structured driver data for fleet, logistics, mobility, rentals, financial services and employment verification.",
};

const outputFields = [
  "Full Name",
  "Driving Licence Number",
  "Date of Birth",
  "Age",
  "Licence Issue Date",
  "Licence Expiry Date",
  "Address",
  "Licence Status",
  "Vehicle Class / Category",
  "Issuing Authority",
  "Other relevant licence details",
];

const benefits = [
  {
    title: "Instant Verification",
    desc: "Retrieve essential driving licence information quickly and efficiently.",
  },
  {
    title: "Reduced Manual Effort",
    desc: "Automate driving licence verification workflows and minimize dependency on manual data checks.",
  },
  {
    title: "Seamless Integration",
    desc: "Developer-friendly API designed for easy integration into your existing systems and platforms.",
  },
  {
    title: "Structured Data Response",
    desc: "Receive driving licence information in a structured format for better processing and decision-making.",
  },
  {
    title: "Improved Operational Efficiency",
    desc: "Streamline driver onboarding and verification processes across different business operations.",
  },
];

const industries: { title: string; desc: string; icon: IndustryIconName }[] = [
  {
    title: "Car Rental Services",
    icon: "car",
    desc: "Verify driving licence details before renting vehicles and streamline driver verification during the booking or onboarding process.",
  },
  {
    title: "Fleet Management Companies",
    icon: "truck",
    desc: "Verify and monitor driver licence details to support driver onboarding, compliance, and fleet operations.",
  },
  {
    title: "Logistics Companies",
    icon: "package",
    desc: "Validate driving licence information of drivers during recruitment and onboarding processes.",
  },
  {
    title: "Financial Institutions & Insurance Companies",
    icon: "bank",
    desc: "Use driving licence verification as part of customer onboarding and verification workflows.",
  },
  {
    title: "Employment Verification",
    icon: "briefcase",
    desc: "Verify the driving licence details of candidates, particularly for driver-based roles and transportation operations.",
  },
  {
    title: "Mobility & Ride-Hailing Platforms",
    icon: "phone",
    desc: "Verify driver credentials before onboarding them onto mobility and transportation platforms.",
  },
];

const faqs = [
  {
    q: "What is the Driving Licence Verification API?",
    a: "The LOTS247 Driving Licence Verification API enables businesses to verify and retrieve essential driving licence details using a driving licence number. It helps automate driver verification workflows and reduces dependency on manual checks.",
  },
  {
    q: "How does the Driving Licence Verification API work?",
    a: "Simply provide the driving licence number as an input through the API. The API processes the request and returns the available driving licence information in a structured response.",
  },
  {
    q: "What information can be retrieved through the API?",
    a: "Depending on data availability, the API can provide information such as the licence holder's name, driving licence number, date of birth, age, issue and expiry details, address, licence status, vehicle category, and other relevant licence information.",
  },
  {
    q: "What input is required to verify a driving licence?",
    a: "The primary input required is the driving licence number. Once submitted, the API processes the request and retrieves the available licence-related information.",
  },
  {
    q: "Which industries can use the Driving Licence Verification API?",
    a: "The API can be used by fleet management companies, logistics providers, car rental services, mobility platforms, ride-hailing companies, financial institutions, insurance companies, and businesses involved in employment verification.",
  },
  {
    q: "Is the API suitable for driver onboarding?",
    a: "Yes. The API can help businesses streamline driver onboarding by verifying essential driving licence details before adding drivers to their platform or operational workflows.",
  },
  {
    q: "Can the API be integrated into an existing platform?",
    a: "Yes. The LOTS247 Driving Licence Verification API is designed for seamless integration into websites, applications, dashboards, fleet management systems, mobility platforms, and other business workflows.",
  },
  {
    q: "Can this API help reduce manual verification efforts?",
    a: "Yes. By automating the retrieval and verification of driving licence information, the API helps businesses reduce manual checks, improve operational efficiency, and streamline driver verification workflows.",
  },
  {
    q: "Is the API useful for fleet management?",
    a: "Yes. Fleet management companies can use the API to verify driver licence details during onboarding and maintain streamlined driver verification processes across their operations.",
  },
  {
    q: "How can I integrate the LOTS247 Driving Licence Verification API into my business?",
    a: "You can connect with the LOTS247 team to understand the API capabilities, integration process, and the solution best suited for your business requirements.",
  },
];

const steps = [
  {
    n: "01",
    title: "Enter Driving Licence Number",
    desc: "Provide the driving licence number through the API request.",
    image: "/dl-step-licence.webp",
  },
  {
    n: "02",
    title: "API Processing",
    desc: "LOTS247 processes the request and retrieves the available driving licence information.",
    image: "/dl-step-processing.webp",
  },
  {
    n: "03",
    title: "Get Licence Details",
    desc: "Receive essential driving licence details in a structured API response that can be integrated into your existing platform or workflow.",
    image: "/dl-step-details.webp",
  },
];

export default function DrivingLicenceVerificationApiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink-900 pt-20 pb-24 text-white md:pt-24 md:pb-28">
        <div className="container-x relative">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="h1 text-white xl:whitespace-nowrap">
              Driving Licence Verification API
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-[1.6] text-white/80">
              Access essential driving licence information through a simple API
              integration and streamline verification workflows for businesses
              managing drivers, vehicles, and mobility operations.
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
                Simplify Driving Licence Verification with LOTS247
              </h2>
              <p className="mt-5 text-lg leading-[1.6] text-ink-700">
                The LOTS247 Driving Licence Verification API enables businesses
                to verify and retrieve essential driving licence information
                using a driving licence number.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                Designed for industries such as fleet management, logistics,
                mobility, vehicle rentals, financial services, and employment
                verification, the API helps businesses streamline driver
                verification processes and reduce dependency on manual checks.
              </p>
            </div>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/api-dl-verification.png"
                alt="Driving licence verification illustration with licence card, driver profile, vehicle, and secure data processing"
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
                <div className="flex items-start gap-3">
                  <Image
                    src={s.image}
                    alt=""
                    width={120}
                    height={120}
                    className="-ml-3 h-[120px] w-[120px] shrink-0 md:h-24 md:w-24 lg:h-[120px] lg:w-[120px]"
                  />
                  <div className="min-w-0 pt-2">
                    <div className="font-mono text-sm font-bold text-accent">
                      Step {s.n}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-ink-900">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {s.desc}
                    </p>
                  </div>
                </div>
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
                A single input is all the API needs to return a full licence
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
                        Driving Licence Number
                      </td>
                      <td className="px-5 py-4 text-sm text-ink-700">
                        Driving licence number for which details need to be
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
                driving licence-related information, including:
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {outputFields.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-[14px] font-semibold text-ink-900">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#EDF1F7]">
        <div className="container-x">
          <SectionHeader
            title="Why Use LOTS247 Driving Licence Verification API?"
          />
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="w-full rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:shadow-card md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="text-[18px] font-semibold text-ink-900">
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
                <IndustryIcon name={i.icon} />
                <div className="mt-4 text-[18px] font-semibold text-ink-900">
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

      <Faq items={faqs} />

      <FinalCta />
    </main>
  );
}
