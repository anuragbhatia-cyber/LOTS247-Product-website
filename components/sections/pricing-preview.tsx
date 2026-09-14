import Image from "next/image";
import { CheckIcon } from "@/components/ui";

type Cell = boolean | string | string[];

type Feature = {
  label: string | string[];
  bsafe: Cell;
  vcare: Cell;
};

const features: Feature[] = [
  { label: "Number of Vehicles", bsafe: "Unlimited", vcare: "Unlimited" },
  { label: "24/7 On-Call Resolution", bsafe: true, vcare: true },
  { label: "On-Site Legal Resolution", bsafe: "Pay Per Use", vcare: "Pay Per Use" },
  { label: "Challan-as-a-Service", bsafe: true, vcare: true },
  {
    label: ["Online", "Lok Adalat", "Court"],
    bsafe: ["INR 49", "INR 1000", "INR 2000"],
    vcare: ["39", "As per Add-on B2", "—"],
  },
  { label: "RTO-as-a-Service", bsafe: "Pay Per Use", vcare: "Pay Per Use" },
  { label: "Dashboard Access", bsafe: true, vcare: true },
  { label: "No. of Users", bsafe: "3", vcare: "10" },
  { label: "Automated Report", bsafe: true, vcare: true },
  { label: "Personalized Reports", bsafe: false, vcare: true },
  { label: "Incident Update via WhatsApp", bsafe: true, vcare: true },
  { label: "Add-Ons", bsafe: "Pay Per Use", vcare: "B1, B2, B3#" },
  { label: "Value-Added Services", bsafe: "Pay Per Use", vcare: "Worth 20K" },
  { label: "Dedicated Account Manager", bsafe: false, vcare: true },
  { label: "Bulk Challan Resolution", bsafe: false, vcare: true },
  { label: "API Integration", bsafe: false, vcare: true },
];

function CellDisplay({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-white">
        <CheckIcon className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-300/60 text-ink-500">
        <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3" aria-hidden="true">
          <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
    );
  }
  if (Array.isArray(value)) {
    return (
      <div className="flex w-full flex-col gap-2 text-center">
        {value.map((v, i) => (
          <span
            key={i}
            className="flex min-h-[24px] items-center justify-center text-[14px] font-semibold text-ink-900"
          >
            {v || "—"}
          </span>
        ))}
      </div>
    );
  }
  return <span className="text-[14px] font-semibold text-ink-900">{value}</span>;
}

function LabelDisplay({ label }: { label: string | string[] }) {
  if (Array.isArray(label)) {
    return (
      <div className="flex w-full flex-col gap-2">
        {label.map((l) => (
          <span
            key={l}
            className="flex min-h-[24px] items-center text-[14px] font-medium text-ink-700"
          >
            {l}
          </span>
        ))}
      </div>
    );
  }
  return <span className="text-[14px] font-medium text-ink-700">{label}</span>;
}

export function PricingPreview() {
  return (
    <section className="section bg-surface-alt" id="pricing">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 text-ink-900 md:whitespace-nowrap">
            Flexible plans for every stage of growth
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-ink-300/60 bg-white">
          <div className="grid grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)]">
            {/* Header row */}
            <div className="p-6 pb-8" />

            <div className="bg-accent/[0.06] p-5 pt-8 pb-6 text-center">
              <div className="mx-auto grid h-16 w-full max-w-[180px] place-items-center rounded-xl bg-accent">
                <Image
                  src="/logo-bsafe.webp"
                  alt="Bsafe"
                  width={200}
                  height={64}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-[13px] font-medium text-ink-700">
                For growing fleets &amp; SMEs
              </p>
            </div>

            <div className="relative bg-secondary/[0.08] p-5 pt-8 pb-6 text-center">
              <Image
                src="/badge-top-seller.png"
                alt="Top Seller"
                width={140}
                height={56}
                className="absolute top-1 left-1/2 z-10 h-12 w-auto -translate-x-1/2 -rotate-3 drop-shadow-md"
              />
              <div className="mx-auto grid h-16 w-full max-w-[180px] place-items-center rounded-xl bg-secondary">
                <Image
                  src="/logo-vcare.webp"
                  alt="Vcare"
                  width={200}
                  height={64}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-[13px] font-medium text-ink-700">
                For large mobility organizations
              </p>
            </div>

            {/* Feature rows */}
            {features.map((f, idx) => {
              const zebra = idx % 2 === 0 ? "bg-ink-100/60" : "bg-white";
              return (
                <div key={idx} className="contents">
                  <div className={`flex items-center px-6 py-4 border-t border-ink-300/50 ${zebra}`}>
                    <LabelDisplay label={f.label} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-t border-ink-300/50 bg-accent/[0.06]">
                    <CellDisplay value={f.bsafe} />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 border-t border-ink-300/50 bg-secondary/[0.08]">
                    <CellDisplay value={f.vcare} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-5xl text-center text-xs text-ink-500">
          # B1, B2, B3 add-ons available with Vcare. Pricing subject to change.
        </p>

        <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-ink-300/60 bg-white p-6 shadow-card md:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
            <div>
              <h3 className="h3 text-ink-900 !leading-tight">
                Explore
                <br />
                <span className="text-accent">Business Add-Ons</span>
              </h3>
            </div>

            <form
              className="grid gap-3 sm:grid-cols-2"
              action="/api/business-inquiry"
              method="post"
            >
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                required
                className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                required
                className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="text"
                name="city"
                placeholder="City/Region"
                className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <select
                name="vehicles"
                defaultValue=""
                required
                className="appearance-none rounded-lg border border-ink-300/60 bg-white bg-[right_0.75rem_center] bg-no-repeat px-3.5 py-2.5 pr-9 text-[14px] text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'><path d='M5 8l5 5 5-5' stroke='rgb(100 116 139 / 0.8)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                }}
              >
                <option value="" disabled>
                  No. of Vehicle
                </option>
                <option className="text-ink-900" value="1-10">1 – 10</option>
                <option className="text-ink-900" value="11-50">11 – 50</option>
                <option className="text-ink-900" value="51-200">51 – 200</option>
                <option className="text-ink-900" value="201-1000">201 – 1000</option>
                <option className="text-ink-900" value="1000+">1000+</option>
              </select>
              <select
                name="requirement"
                defaultValue=""
                required
                className="appearance-none rounded-lg border border-ink-300/60 bg-white bg-[right_0.75rem_center] bg-no-repeat px-3.5 py-2.5 pr-9 text-[14px] text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 sm:col-span-2"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'><path d='M5 8l5 5 5-5' stroke='rgb(100 116 139 / 0.8)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                }}
              >
                <option value="" disabled>
                  Brief Requirement
                </option>
                <option className="text-ink-900" value="challan">Challan management</option>
                <option className="text-ink-900" value="legal">On-site legal support</option>
                <option className="text-ink-900" value="compliance">Compliance & documentation</option>
                <option className="text-ink-900" value="api">API integration</option>
                <option className="text-ink-900" value="other">Other</option>
              </select>
              <input
                type="text"
                name="contact_person"
                placeholder="Contact Person"
                required
                className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required
                className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <div className="mt-2 flex justify-end sm:col-span-2">
                <button type="submit" className="btn-primary px-10">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
