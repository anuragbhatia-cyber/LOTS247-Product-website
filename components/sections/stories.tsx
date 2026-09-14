"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui";

const quotes = [
  {
    q: "LOTS247 has transformed how we manage legal incidents across our fleet. What used to take days now gets resolved through a single platform.",
    name: "Rajesh Kumar",
    role: "Fleet Operations Head",
    org: "Bluwheelz",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
  {
    q: "Having legal support available across multiple states has significantly reduced operational disruption.",
    name: "Priya Sharma",
    role: "Operations Lead",
    org: "Greenline Logistics",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    q: "Compliance monitoring used to be a spreadsheet nightmare. Now every RC, PUC and permit is tracked in one dashboard.",
    name: "Amit Verma",
    role: "Compliance Manager",
    org: "Eco Mobility",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    q: "The 24×7 roadside legal support has been a game changer for our drivers. Issues get resolved without stopping operations.",
    name: "Neha Iyer",
    role: "Head of Operations",
    org: "Mooving",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    q: "Bulk challan resolution across states used to eat up our week. LOTS247 turned it into a workflow we barely touch.",
    name: "Karan Malhotra",
    role: "Fleet Manager",
    org: "Skyline Transport",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    q: "The dashboard gives leadership real visibility. Every incident, every state, every vehicle — one view.",
    name: "Sneha Rao",
    role: "COO",
    org: "PanIndia Mobility",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

const AUTOPLAY_MS = 3500;

export function Stories() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.9;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const next = el.scrollLeft + step * dir;
    if (dir === 1 && next >= maxScroll - 4) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && el.scrollLeft <= 4) {
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      el.scrollBy({ left: step * dir, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByCard(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="bg-accent py-12 md:py-16">
      <div className="container-x">
        <SectionHeader title="Trusted by businesses that keep India moving" dark />
        <div
          ref={scrollerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {quotes.map((q) => (
            <div
              key={q.name}
              data-card
              className="card w-[85%] shrink-0 snap-start p-10 shadow-card md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="font-serif text-[100px] leading-[0.6] text-accent">&ldquo;</div>
              <p className="mt-1 text-lg font-medium italic leading-snug text-ink-900">
                {q.q}
              </p>
              <div className="mt-8 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={q.avatar}
                  alt={q.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-ink-900">
                    {q.name}
                  </div>
                  <div className="text-xs text-ink-500">
                    {q.role}, {q.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-300/70 bg-white text-ink-900 transition-colors hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-300/70 bg-white text-ink-900 transition-colors hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
