import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { BookDemoButton } from "@/components/book-demo-button";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "RoadCare — Vehicle Legal Assistance for Private Owners | LOTS247",
  description:
    "LOTS247 RoadCare is a vehicle legal assistance plan for private vehicle owners — 24×7 on-call resolution, challan-as-a-service, dashboard access, and WhatsApp incident updates for one vehicle at ₹999 for six months.",
};

const features = [
  {
    title: "Coverage for 1 Vehicle",
    desc: "Each LOTS247 RoadCare subscription covers one vehicle, built around the needs of individual private vehicle owners.",
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
  shield: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  headset:
    "M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 012-2h1v6H6a2 2 0 01-2-2zM20 14a2 2 0 00-2-2h-1v6h1a2 2 0 002-2zM17 18c0 1.7-2 3-5 3",
  rupee: "M7 4h10M7 9h10M7 4c5 0 6 2.5 6 5s-2 5-6 5l7 6",
};

const problems = [
  {
    title: "Unexpected Roadside Situations",
    desc: "Police checks and roadside disputes need quick legal guidance.",
  },
  {
    title: "Hard-to-Track Challans",
    desc: "Challans are often found late, with no clear way to resolve them.",
  },
  {
    title: "Scattered Resolution Options",
    desc: "Online, Lok Adalat and court routes are hard to navigate alone.",
  },
  {
    title: "No Single Place to Track Services",
    desc: "Updates get lost across calls, messages and emails.",
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

const summary: (string | { label: string; items: string[] })[] = [
  "Coverage for 1 Vehicle",
  "Six-Month Validity",
  "24×7 On-Call Resolution",
  "Challan-as-a-Service",
  {
    label: "Challan Resolution",
    items: ["Online Challans", "Court Challans", "Express Challans"],
  },
  "On-Site Legal Resolution",
  "RTO-as-a-Service",
  "Dashboard Access",
  "WhatsApp Incident Updates",
  "Add-On Services on Pay Per Use",
  "Value-Added Services on Pay Per Use",
];

const faqs = [
  {
    q: "What is LOTS247 RoadCare?",
    a: "LOTS247 RoadCare is a six-month roadside legal assistance subscription for private vehicle owners. It provides 24×7 on-call legal assistance, challan-related services, dashboard access, and incident updates via WhatsApp.",
  },
  {
    q: "What is the price of LOTS247 RoadCare?",
    a: "LOTS247 RoadCare is available at ₹999 per vehicle for six months.",
  },
  {
    q: "How many vehicles are covered under the subscription?",
    a: "Each LOTS247 RoadCare subscription covers one private vehicle.",
  },
  {
    q: "Does LOTS247 RoadCare provide 24×7 legal assistance?",
    a: "Yes. LOTS247 RoadCare includes 24×7 on-call legal assistance for vehicle-related roadside legal issues.",
  },
  {
    q: "Is on-site legal assistance included in the subscription?",
    a: "On-site legal assistance is available on a pay-per-use basis and is charged separately from the subscription fee.",
  },
  {
    q: "Can I get assistance with my vehicle challans?",
    a: "Yes. LOTS247 RoadCare includes Challan-as-a-Service, with assistance available for eligible online, Lok Adalat, court, and express challan resolution options.",
  },
  {
    q: "What are the challan resolution charges?",
    a: "The applicable service charges are: Online Challan Resolution — ₹200, Lok Adalat Resolution — ₹1,000, Court Challan Resolution — ₹2,000, and Express Challan Resolution — ₹3,000. Resolution is subject to eligibility and applicable service conditions.",
  },
  {
    q: "Does LOTS247 RoadCare provide RTO assistance?",
    a: "Yes. RTO-as-a-Service is available on a pay-per-use basis for applicable vehicle-related requirements.",
  },
  {
    q: "Does LOTS247 RoadCare include dashboard access?",
    a: "Yes. Dashboard access is included in the LOTS247 RoadCare subscription.",
  },
  {
    q: "Will I receive updates about my incident?",
    a: "Yes. LOTS247 RoadCare includes incident updates through WhatsApp.",
  },
  {
    q: "Are automated and personalized reports included?",
    a: "No. Automated reports and personalized reports are not included in the LOTS247 RoadCare subscription.",
  },
  {
    q: "Is a Dedicated Account Manager included?",
    a: "No. Dedicated Account Manager support is not included in the LOTS247 RoadCare plan.",
  },
  {
    q: "Can I access additional services?",
    a: "Yes. On-site legal assistance, RTO services, add-on services, and value-added services are available on a pay-per-use basis.",
  },
  {
    q: "Who should subscribe to LOTS247 RoadCare?",
    a: "LOTS247 RoadCare is ideal for private car owners, daily commuters, families, and frequent travellers who want access to legal assistance and challan resolution support for their vehicle.",
  },
];

const heroBadges = [
  { label: "24×7 On-Call", icon: "phone", className: "left-[16%] top-[30%]" },
  { label: "Challan-as-a-Service", icon: "doc", className: "left-[38%] top-[16%]" },
  { label: "Dashboard Access", icon: "dash", className: "left-[60%] top-[12%]" },
  { label: "WhatsApp Updates", icon: "chat", className: "left-[82%] top-[18%]" },
];

const networkStats = [
  { value: "80,000+", label: "Lawyers" },
  { value: "98%", label: "PIN Codes Covered" },
  { value: "24×7", label: "Support" },
];

const planHighlights = [
  { label: "Complete Vehicle Coverage", icon: "shield" },
  { label: "Fast Resolution", icon: "bolt" },
  { label: "Expert Support", icon: "headset" },
];

const benefitIcons = ["user", "phone", "doc", "rupee", "chat", "shield"];

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={iconPaths[name]} />
    </svg>
  );
}

function Check({ filled = false, large = false }: { filled?: boolean; large?: boolean }) {
  return (
    <span
      className={`grid flex-shrink-0 place-items-center rounded-full ${
        large ? "h-6 w-6" : "mt-0.5 h-5 w-5"
      } ${filled ? "bg-accent text-white" : "bg-accent/15 text-accent"}`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className={large ? "h-3.5 w-3.5" : "h-3 w-3"}
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
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M4 10h12m0 0l-4-4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Heading({
  title,
  sub,
  dark = false,
}: {
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`text-2xl font-bold tracking-[-0.01em] md:text-[34px] md:leading-[1.2] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p className={`mt-3 text-[15px] ${dark ? "text-white/70" : "text-ink-700"}`}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export default function CarePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#DCEBFA_0%,#EEF5FC_60%,#FFFFFF_100%)] pt-10 pb-16 md:pt-12 lg:min-h-[520px] lg:pb-16">
        <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
          <div
            className="absolute inset-0"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 25%, #000 45%), linear-gradient(0deg, transparent 0%, #000 18%)",
              maskComposite: "intersect",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 25%, #000 45%), linear-gradient(0deg, transparent 0%, #000 18%)",
              WebkitMaskComposite: "source-in",
            }}
          >
            <Image
              src="/care-hero-sedan-v2.png"
              alt="White sedan driving on a city highway"
              fill
              priority
              sizes="56vw"
              className="object-cover object-[80%_100%]"
            />
          </div>
          {heroBadges.map((b) => (
            <div
              key={b.label}
              className={`absolute flex -translate-x-1/2 flex-col items-center gap-1.5 ${b.className}`}
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-accent shadow-[0_10px_24px_-8px_rgba(15,23,42,0.3)]">
                <Icon name={b.icon} />
              </span>
              <span className="whitespace-nowrap rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-bold text-ink-900 shadow-sm backdrop-blur">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <div className="container-x relative">
          <div className="max-w-xl">
            <Image
              src="/logo-care.png"
              alt="LOTS247 RoadCare"
              width={360}
              height={110}
              className="-ml-3 h-14 w-auto object-contain md:h-16"
              priority
            />
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] text-ink-900 md:text-5xl lg:whitespace-nowrap lg:text-[56px]">
              LOTS247 <span className="text-accent">RoadCare</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[16px] leading-relaxed text-ink-900">
              24×7 on-call legal help, challan resolution, dashboard access and
              WhatsApp updates for your vehicle — ₹999 for six months.
            </p>
            <div className="mt-8">
              <BookDemoButton variant="register" className="btn-primary min-w-[240px] rounded-full px-12 shadow-[0_8px_20px_-6px_rgba(44,183,125,0.55)]">
                Register Now
                <Arrow />
              </BookDemoButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] font-semibold text-ink-900">
              <span className="inline-flex items-center gap-2">
                <span className="text-accent">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                Coverage for 1 Vehicle
              </span>
              <span aria-hidden="true" className="hidden h-4 w-px bg-ink-300 sm:block" />
              <span className="inline-flex items-center gap-2">
                <span className="text-secondary">
                  <Icon name="clock" className="h-5 w-5" />
                </span>
                ₹999 per Vehicle / 6 Months
              </span>
            </div>
          </div>

          <div className="relative mt-12 aspect-[2/1] overflow-hidden rounded-3xl shadow-[0_24px_50px_-20px_rgba(15,23,42,0.35)] lg:hidden">
            <Image
              src="/care-hero-sedan-v2.png"
              alt="White sedan driving on a city highway"
              fill
              sizes="100vw"
              className="object-cover object-[70%_100%]"
            />
          </div>
        </div>
      </section>

      {/* Network stats */}
      <section className="pt-16 pb-4 md:pt-20">
        <div className="container-x">
          <h2 className="text-center text-2xl font-bold normal-case tracking-[-0.01em] text-ink-900 md:text-[34px] md:leading-[1.2]">
            LOTS247 ka trusted legal support network
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-y-10 sm:grid-cols-3">
            {networkStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 text-center lg:px-10 ${
                  i > 0 ? "sm:border-l sm:border-ink-300/70" : ""
                }`}
              >
                <div className="text-4xl font-bold tracking-[-0.02em] text-accent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.2em] text-ink-700 md:text-[13px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why owners need it — banner */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#0F172A] p-8 md:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold leading-[1.2] tracking-[-0.01em] text-white md:text-[34px]">
                Why Private Vehicle Owners Need LOTS247 RoadCare
              </h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {problems.map((p) => (
                  <li key={p.title}>
                    <div className="flex items-start gap-2.5 text-[15px] font-semibold text-white">
                      <Check filled />
                      {p.title}
                    </div>
                    <p className="mt-1.5 pl-[30px] text-sm leading-snug text-white/70">
                      {p.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <BookDemoButton variant="register" className="btn-primary rounded-full px-7">
                  Register Now
                  <Arrow />
                </BookDemoButton>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)] lg:aspect-[5/4] lg:-rotate-1">
              <Image
                src="/care-roadside-breakdown-v2.png"
                alt="Driver checking his phone beside a broken-down car on a highway at sunset"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks ctaLabel="Register Now" ctaVariant="register" />

      {/* Features */}
      <section className="bg-[#EDF1F7] py-20 md:py-24">
        <div className="container-x">
          <Heading title="Everything You Need for Vehicle Legal Assistance" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 rounded-2xl border border-ink-300/50 bg-white p-6 shadow-card transition-shadow hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.18)]"
              >
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon name={f.icon} />
                </span>
                <div>
                  <div className="text-[17px] font-bold text-ink-900">{f.title}</div>
                  <p className="mt-1.5 text-sm leading-snug text-ink-700">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan + pricing */}
      <section className="py-16">
        <div className="container-x">
          <Heading title="LOTS247 RoadCare Plan" />
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="relative flex flex-col rounded-3xl border border-accent/40 bg-[linear-gradient(160deg,#FFFFFF_0%,#F1FAF5_55%,#E6F6EE_100%)] p-6 shadow-[0_24px_50px_-24px_rgba(44,183,125,0.45)] md:p-7">
              <span className="absolute -top-3.5 left-6 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-white shadow-[0_6px_14px_-4px_rgba(44,183,125,0.6)] md:left-7">
                Six-Month Plan
              </span>

              <div className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-2 pt-3">
                <div>
                  <div className="text-lg font-bold text-ink-900">LOTS247 RoadCare</div>
                  <div className="mt-3 text-5xl font-extrabold tracking-[-0.02em] text-ink-900">
                    ₹999
                  </div>
                  <p className="mt-2 text-base font-bold text-ink-700">per Vehicle / 6 Months</p>
                </div>
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/care-plan-suv-orange-shield.png"
                    alt="White SUV protected by an orange shield with a check mark"
                    fill
                    sizes="(min-width: 1024px) 260px, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 divide-x divide-ink-300/60 rounded-2xl bg-white/80 py-4 shadow-card">
                {planHighlights.map((h) => (
                  <div key={h.label} className="flex flex-col items-center gap-2 px-2 text-center">
                    <span className="text-accent">
                      <Icon name={h.icon} className="h-6 w-6" />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug text-ink-900">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>

              <BookDemoButton variant="register" className="btn-primary mt-6 w-full shadow-[0_10px_24px_-10px_rgba(44,183,125,0.7)]">
                Register Now
                <Arrow />
              </BookDemoButton>
            </div>

            <div className="flex flex-col rounded-2xl border border-ink-300/60 bg-ink-100 p-7 md:p-8">
              <div className="text-lg font-bold text-ink-900">
                What Do You Get with LOTS247 RoadCare?
              </div>
              <ul className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                {summary.map((item) => {
                  const label = typeof item === "string" ? item : item.label;
                  return (
                    <li
                      key={label}
                      className="flex items-start gap-3 text-[14px] font-semibold leading-6 text-ink-900"
                    >
                      <Check filled large />
                      <div>
                        <span>{label}</span>
                        {typeof item !== "string" && (
                          <ul className="mt-2 flex flex-col gap-1.5 border-l-2 border-accent/30 pl-3">
                            {item.items.map((sub) => (
                              <li
                                key={sub}
                                className="text-[13px] font-medium leading-5 text-ink-700"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-[#0F172A] py-20 md:py-24">
        <div className="container-x">
          <Heading title="Why Choose LOTS247 RoadCare?" dark />
          <div className="mx-auto mt-12 grid max-w-6xl gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex flex-col items-center px-6 text-center ${
                  i % 3 !== 0 ? "lg:border-l lg:border-white/15" : ""
                }`}
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                  <Icon name={benefitIcons[i]} className="h-7 w-7" />
                </span>
                <div className="mt-4 text-[18px] font-semibold text-white">{b.title}</div>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">{b.desc}</p>
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
