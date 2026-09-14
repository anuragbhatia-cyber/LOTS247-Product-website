import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a demo — LOTS247",
  description:
    "Talk to our team to see how LOTS247 can reduce legal downtime, improve compliance, and streamline fleet operations.",
};

const bullets = [
  "24×7 legal assistance across India",
  "Nationwide lawyer network",
  "Compliance and challan management",
  "Enterprise-ready dashboards",
];

export default function ContactPage() {
  return (
    <main className="bg-surface-alt">
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <h1 className="h1">
              Ready to build a legally resilient mobility operation?
            </h1>
            <p className="lead mt-6">
              Give your vehicles, drivers, and operations team a legal
              infrastructure that works 24×7. Talk to our team to see how
              LOTS247 can reduce legal downtime, improve compliance, and
              streamline fleet operations.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px]">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-900">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink-500">
              Prefer email? Write to{" "}
              <Link href="mailto:hello@lots247.com" className="font-semibold text-brand">
                hello@lots247.com
              </Link>
            </p>
          </div>

          <form
            className="rounded-2xl border border-ink-300/60 bg-white p-8 shadow-card md:p-10"
            action="#"
            method="POST"
          >
            <div className="grid gap-5">
              <Field label="Full name" name="name" placeholder="Priya Sharma" />
              <Field label="Work email" name="email" type="email" placeholder="priya@fleetco.in" />
              <Field label="Company" name="company" placeholder="FleetCo Logistics" />
              <div>
                <label className="block text-sm font-semibold text-ink-900">
                  Fleet size
                </label>
                <select
                  name="fleet"
                  className="mt-2 w-full rounded-lg border border-ink-300 bg-white px-4 py-3 text-[15px] text-ink-900 focus:border-brand focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option>1–10 vehicles</option>
                  <option>11–100 vehicles</option>
                  <option>101–1,000 vehicles</option>
                  <option>1,000+ vehicles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-900">
                  How can we help?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your operation…"
                  className="mt-2 w-full rounded-lg border border-ink-300 bg-white px-4 py-3 text-[15px] text-ink-900 focus:border-brand focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary mt-2 justify-center">
                Book a demo
              </button>
              <p className="text-center text-xs text-ink-500">
                We&apos;ll get back to you within one business day.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink-900">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-ink-300 bg-white px-4 py-3 text-[15px] text-ink-900 focus:border-brand focus:outline-none"
      />
    </div>
  );
}
