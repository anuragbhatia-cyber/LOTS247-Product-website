import Image from "next/image";
import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui";

type Item = { title: string; sub: string; icon: ReactNode };

const rows: [Item, Item][] = [
  [
    {
      title: "Operational Downtime",
      sub: "Vehicles stuck off-road",
      icon: <PauseIcon />,
    },
    {
      title: "Poor Visibility Across Fleets",
      sub: "No unified dashboard",
      icon: <EyeIcon />,
    },
  ],
  [
    {
      title: "Revenue Loss",
      sub: "Missed trips & earnings",
      icon: <CoinIcon />,
    },
    {
      title: "Delayed Legal Resolution",
      sub: "Slow case turnaround",
      icon: <GavelIcon />,
    },
  ],
  [
    {
      title: "Compliance Gaps",
      sub: "Expired docs & permits",
      icon: <ChecklistIcon />,
    },
    {
      title: "No Accidental Insurance",
      sub: "Uncovered liability",
      icon: <ShieldIcon />,
    },
  ],
];

export function Problem() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeader title="Every vehicle on road faces legal & compliance risks" />

        <div className="relative mx-auto mt-16 max-w-5xl">
          <svg
            viewBox="0 0 1200 620"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="problemFadeSides" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="black" />
                <stop offset="22%" stopColor="white" />
                <stop offset="78%" stopColor="white" />
                <stop offset="100%" stopColor="black" />
              </linearGradient>
              <mask id="problemCircleMask">
                <rect width="1200" height="620" fill="url(#problemFadeSides)" />
              </mask>
              <radialGradient id="problemGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F79727" stopOpacity="0.18" />
                <stop offset="55%" stopColor="#F79727" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#F79727" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g mask="url(#problemCircleMask)">
              <rect
                x="300"
                y="10"
                width="600"
                height="600"
                fill="url(#problemGlow)"
              />
              <circle cx="600" cy="310" r="290" fill="#F79727" opacity="0.04" />
              <circle cx="600" cy="310" r="200" fill="#F79727" opacity="0.06" />
              <circle cx="600" cy="310" r="110" fill="#F79727" opacity="0.09" />

              <g fill="#F79727">
                <circle cx="360" cy="120" r="3.5" opacity="0.55" />
                <circle cx="840" cy="140" r="3" opacity="0.5" />
                <circle cx="300" cy="480" r="3" opacity="0.5" />
                <circle cx="880" cy="500" r="3.5" opacity="0.55" />
                <circle cx="500" cy="60" r="2.5" opacity="0.4" />
                <circle cx="720" cy="560" r="2.5" opacity="0.4" />
              </g>
            </g>

            <g stroke="#F79727" strokeWidth="1.25" opacity="0.65" fill="none">
              <line x1="180" y1="95" x2="1020" y2="525" />
              <line x1="180" y1="525" x2="1020" y2="95" />
              <line x1="180" y1="310" x2="1020" y2="310" />
            </g>
          </svg>

          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <div className="relative">
              <div className="absolute inset-0 -m-10 rounded-full bg-secondary/25 blur-3xl" />
              <Image
                src="/warning-triangle.png"
                alt=""
                aria-hidden="true"
                width={160}
                height={148}
                className="relative h-auto w-[115px] lg:w-[130px]"
              />
            </div>
          </div>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-[380px] md:gap-y-20 md:py-14">
            {rows.map(([left, right]) => (
              <div key={left.title} className="contents">
                <Card item={left} />
                <Card item={right} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ item }: { item: Item }) {
  return (
    <div className="flex w-full items-center gap-3.5 rounded-2xl border border-secondary/65 bg-white px-4 py-3.5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_10px_24px_-12px_rgba(247,151,39,0.35)]">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-white">
        {item.icon}
      </span>
      <div className="min-w-0">
        <div className="text-[15px] font-semibold leading-tight text-ink-900">
          {item.title}
        </div>
        <div className="mt-0.5 text-[12.5px] text-ink-500">{item.sub}</div>
      </div>
    </div>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="6" y="4.5" width="2.5" height="11" rx="1" fill="currentColor" />
      <rect x="11.5" y="4.5" width="2.5" height="11" rx="1" fill="currentColor" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M1.5 10s3-6 8.5-6 8.5 6 8.5 6-3 6-8.5 6S1.5 10 1.5 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12.5 7.5H8.25a1.75 1.75 0 000 3.5h2a1.75 1.75 0 010 3.5H7.5M10 5.5v9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GavelIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M2.5 16.5h9M4 13.5l4-4M6 8.5l5-5M10 7.5l-5 5M11.5 4L16 8.5M13 2.5L17.5 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="14"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M6.5 8.5l1.5 1.5 3-3M6.5 13.5h7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M10 2.5l6.5 2v5c0 3.5-2.6 6.5-6.5 8-3.9-1.5-6.5-4.5-6.5-8v-5l6.5-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
