import Image from "next/image";
import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCta() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-3xl bg-brand text-white md:grid-cols-[1.6fr_1fr]">
          <div className="px-8 py-16 md:px-14 md:py-20">
            <h2 className="text-3xl font-bold leading-[1.2] text-white md:text-4xl">
              Let&rsquo;s put a lawyer within reach of every vehicle you run
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              24×7 legal infrastructure, built for mobility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookDemoButton className="btn-primary inline-flex items-center gap-2">
                Book a demo
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </BookDemoButton>
              <a
                href="https://dashboard.lots247.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                Login
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-full">
            <Image
              src="/cta-support.webp"
              alt="LOTS247 support agents on headsets at the ops desk with a logistics yard in the background"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover scale-x-[-1]"
              style={{ objectPosition: "right center" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #0F172A 0%, rgba(15,23,42,0.85) 18%, rgba(15,23,42,0.35) 38%, rgba(15,23,42,0) 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
