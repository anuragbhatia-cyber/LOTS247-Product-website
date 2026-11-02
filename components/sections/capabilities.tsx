"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BookDemoButton } from "@/components/book-demo-button";
import { capabilities } from "@/components/sections/capabilities-data";

export { capabilities };

export function Capabilities() {
  const [active, setActive] = useState(capabilities[0].slug);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    const btn = btnRefs.current[active];
    if (!list || !btn) return;
    setPill({
      left: btn.offsetLeft,
      top: btn.offsetTop,
      width: btn.offsetWidth,
      height: btn.offsetHeight,
    });
  }, [active]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const recalc = () => {
      const btn = btnRefs.current[active];
      if (btn) {
        setPill({
          left: btn.offsetLeft,
          top: btn.offsetTop,
          width: btn.offsetWidth,
          height: btn.offsetHeight,
        });
      }
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

  return (
    <section className="section bg-ink-900" id="capabilities">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 text-white md:whitespace-nowrap">
            Built for legal operations at scale
          </h2>
          <p className="mt-5 text-lg leading-[1.6] text-white">
            A single platform that unifies legal help, compliance, and operational data across your entire fleet.
          </p>
        </div>

        <div className="relative mt-8">
          <div
            className="sticky z-30 -mx-6 overflow-x-auto px-6 pb-1 transition-[top] duration-300 ease-out [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:flex md:justify-center md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
            style={{ top: "var(--nav-offset, 80px)" }}
          >
            <div
              ref={listRef}
              className="relative inline-flex items-center gap-1 rounded-full border border-white/10 bg-ink-900/80 p-1 shadow-lg backdrop-blur"
            >
              {pill ? (
                <span
                  aria-hidden="true"
                  className={`absolute rounded-full bg-accent ${
                    ready ? "transition-[left,top,width,height] duration-300 ease-out" : ""
                  }`}
                  style={{ left: pill.left, top: pill.top, width: pill.width, height: pill.height }}
                />
              ) : null}
              {capabilities.map((c) => {
                const isActive = c.slug === active;
                return (
                  <button
                    key={c.slug}
                    ref={(el) => {
                      btnRefs.current[c.slug] = el;
                    }}
                    type="button"
                    onClick={() => setActive(c.slug)}
                    aria-pressed={isActive}
                    className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2.5 text-[14px] font-semibold transition-colors ${
                      isActive ? "text-white" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {c.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card">
              {capabilities.map((c) => {
                const isActive = c.slug === active;
                return (
                  <Image
                    key={c.slug}
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    priority={c.slug === capabilities[0].slug}
                    className={`h-auto w-full ${isActive ? "block" : "hidden"}`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <BookDemoButton className="btn-primary inline-flex items-center gap-2">
            Book a demo
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BookDemoButton>
        </div>
      </div>
    </section>
  );
}
