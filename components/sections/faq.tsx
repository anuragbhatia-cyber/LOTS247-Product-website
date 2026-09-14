"use client";

import { useState } from "react";

export const faqs = [
  {
    q: "What is LOTS247?",
    a: "LOTS247 is a technology-driven legal-tech platform providing real-time legal assistance for vehicle owners and businesses.",
  },
  {
    q: "Is LOTS247 available 24×7?",
    a: "Yes, LOTS247 provides 24×7 on-call legal assistance whenever you need support.",
  },
  {
    q: "Can I get a lawyer at my location?",
    a: "Yes, LOTS247 provides on-site lawyer assistance through its nationwide network.",
  },
  {
    q: "What challan services does LOTS247 offer?",
    a: "LOTS247 helps with challan tracking and resolution, including Online, Lok Adalat and Court challans.",
  },
  {
    q: "Can I manage multiple vehicles on LOTS247?",
    a: "Yes, the Live Challan Dashboard lets you track challans across multiple vehicles from one place.",
  },
  {
    q: "Does LOTS247 provide RTO services?",
    a: "Yes, LOTS247 offers RTO-as-a-Service along with access to key vehicle and RC information.",
  },
  {
    q: "Does LOTS247 provide a dashboard?",
    a: "Yes, businesses can manage vehicles, challans, incidents and reports through the LOTS247 dashboard.",
  },
  {
    q: "How will I receive service updates?",
    a: "You can receive incident and service updates through WhatsApp, along with relevant reports.",
  },
  {
    q: "Does LOTS247 support bulk challan resolution?",
    a: "Yes, LOTS247 supports bulk challan resolution and API integration for eligible businesses.",
  },
  {
    q: "Can LOTS247 services be customized for my business?",
    a: "Yes, LOTS247 offers different service packages, add-ons and value-added services based on business requirements.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Frequently asked questions</h2>
        </div>
        <div className="mx-auto mt-10 max-w-5xl space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl bg-surface-alt transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] font-semibold text-ink-900">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xl font-bold text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-8 pb-6 text-[15px] leading-relaxed text-ink-700">
                    {f.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
