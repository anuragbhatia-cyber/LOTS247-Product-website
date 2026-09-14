import Image from "next/image";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCta() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 text-white md:px-20 md:py-20"
        >
          <Image
            src="/cta-mobility.png"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.15) 75%, rgba(15,23,42,0) 100%)",
            }}
          />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.6]">
              Let&rsquo;s put a lawyer <br />
              within reach of every <br />
              vehicle you run
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
              <Link href="/contact" className="btn border border-white/40 bg-transparent text-white hover:bg-white/10">
                Start for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
