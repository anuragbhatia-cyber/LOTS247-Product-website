"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";

type Industry = {
  slug: string;
  label: string;
  headline: string;
  desc: string;
  bullets: string[];
  logos: string[];
};

export const industries: Industry[] = [
  {
    slug: "logistics",
    label: "Logistics",
    headline: "Keep long-haul fleets moving, legally",
    desc: "24×7 roadside legal cover, pan-India challan and permit management, and driver-detention playbooks for logistics operators.",
    bullets: [
      "On-ground legal ops across 500+ cities",
      "Bulk challan resolution across states",
      "Faster driver release and dispute resolution",
      "Compliance dashboards for ops teams",
    ],
    logos: ["Delhivery", "BlueDart", "Shadowfax", "Ecom Express", "Rivigo", "TCI"],
  },
  {
    slug: "dealership",
    label: "Dealership",
    headline: "Legal & compliance layer for vehicle dealerships",
    desc: "Support your customers post-sale with roadside legal help, RTO services, and documentation — under your brand.",
    bullets: [
      "White-labelled legal assistance for buyers",
      "RTO-as-a-service for registrations and transfers",
      "Documentation and permit handling",
      "Value-added services to increase LTV",
    ],
    logos: ["Tata", "Mahindra", "Maruti", "Hyundai", "Toyota", "Kia"],
  },
  {
    slug: "bfsi",
    label: "BFSI",
    headline: "Legal-tech for vehicle finance and lending",
    desc: "Risk, recovery, and compliance workflows built for banks, NBFCs, and vehicle-finance portfolios.",
    bullets: [
      "Repossession & recovery legal support",
      "Borrower and asset compliance checks",
      "Documentation and lien management",
      "Legal ops APIs for lending platforms",
    ],
    logos: ["HDFC", "ICICI", "Axis", "Kotak", "SBI", "Bajaj Finance"],
  },
  {
    slug: "oems",
    label: "OEMs",
    headline: "Own the post-sale legal experience",
    desc: "Extend roadside legal assistance and compliance services to every vehicle you sell, across India.",
    bullets: [
      "Legal cover as an OEM subscription benefit",
      "24×7 on-call resolution for customers",
      "Compliance and challan APIs for connected vehicles",
      "Nationwide network of on-ground lawyers",
    ],
    logos: ["Tata", "Mahindra", "Ashok Leyland", "Eicher", "VE Commercial", "BharatBenz"],
  },
  {
    slug: "insurance",
    label: "Insurance",
    headline: "Faster claims, defensible legal outcomes",
    desc: "Structured on-site legal response and case management for motor insurance and third-party claims.",
    bullets: [
      "On-site legal presence at incident scenes",
      "Documented incident and case histories",
      "Fraud reduction through verified reports",
      "APIs for policy, claims, and compliance data",
    ],
    logos: ["ICICI Lombard", "HDFC Ergo", "Bajaj Allianz", "Tata AIG", "Digit", "Acko"],
  },
  {
    slug: "rsa",
    label: "RSA",
    headline: "Legal layer for roadside assistance providers",
    desc: "Extend on-ground roadside assistance with a nationwide legal network — resolve disputes, detentions, and challans on the spot.",
    bullets: [
      "24×7 lawyer-on-call for RSA field teams",
      "On-site legal resolution across 500+ cities",
      "Documented handovers between RSA and legal ops",
      "APIs to integrate with existing RSA dispatch",
    ],
    logos: ["Allianz Partners", "TVS Auto", "Europ Assistance", "Global Assure", "AAI", "Roadzen"],
  },
];

export function Solutions() {
  const [active, setActive] = useState(industries[0].slug);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    const btn = btnRefs.current[active];
    if (!list || !btn) return;
    setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [active]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const recalc = () => {
      const btn = btnRefs.current[active];
      if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
    };
    const ro = new ResizeObserver(recalc);
    ro.observe(list);
    Object.values(btnRefs.current).forEach((b) => b && ro.observe(b));
    return () => ro.disconnect();
  }, [active]);

  useEffect(() => {
    const t = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const current =
    industries.find((i) => i.slug === active) ?? industries[0];

  return (
    <section className="bg-white py-12 md:py-16" id="industries">
      <div className="container-x">
        <SectionHeader title="Industries we cater to" />

        <div className="mt-8 flex justify-center">
          <div
            ref={listRef}
            className="relative inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full bg-ink-100 p-1"
          >
            {pill ? (
              <span
                aria-hidden="true"
                className={`absolute top-1 bottom-1 rounded-full bg-accent ${
                  ready ? "transition-[left,width] duration-300 ease-out" : ""
                }`}
                style={{ left: pill.left, width: pill.width }}
              />
            ) : null}
            {industries.map((i) => {
              const isActive = i.slug === active;
              return (
                <button
                  key={i.slug}
                  ref={(el) => {
                    btnRefs.current[i.slug] = el;
                  }}
                  type="button"
                  onClick={() => setActive(i.slug)}
                  aria-pressed={isActive}
                  className={`relative z-10 rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors ${
                    isActive ? "text-white" : "text-ink-700 hover:text-ink-900"
                  }`}
                >
                  {i.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-2xl border border-ink-300/60 bg-white shadow-card">
          <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:p-10">
            <div className="grid h-full min-h-[280px] place-items-center rounded-xl bg-surface-alt text-xs uppercase tracking-[0.2em] text-ink-500">
              {current.label} illustration
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-ink-900 md:text-[28px]">
                {current.headline}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                {current.desc}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {current.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-ink-700">
                    <span className="mt-1 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                      <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
                        <path
                          d="M4 10l4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-500">
                  Trusted by
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {current.logos.map((logo) => (
                    <div
                      key={logo}
                      className="grid h-12 place-items-center rounded-lg bg-surface-alt text-[12px] font-semibold text-ink-700"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
