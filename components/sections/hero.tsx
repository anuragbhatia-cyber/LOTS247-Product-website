import Image from "next/image";
import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";

const slide = {
  headingTop: "India's First On-Road",
  headingBottom: "Legal Assistance",
  sub: "24×7 roadside legal assistance, compliance automation, challan management, and legal operations — all on a single platform built for fleets, mobility companies, and vehicle owners.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "Login", href: "/login" },
  image: {
    src: "/hero-drivers.png",
    alt: "Truck driver and taxi driver standing next to their vehicles",
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF5F0] pt-10 pb-14 md:pt-12 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1200px 500px at 15% -10%, rgba(44,183,125,0.08), transparent 60%), radial-gradient(700px 400px at 100% 20%, rgba(247,151,39,0.10), transparent 60%)",
        }}
      />
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ink-900 md:text-[44px] lg:text-[52px] xl:text-[56px]">
              {slide.headingTop}
              <br />
              {slide.headingBottom}
            </h1>
            <p className="lead mt-6 max-w-xl">{slide.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <BookDemoButton className="btn-primary inline-flex items-center gap-2">
                {slide.primaryCta.label}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M4 10h12m0 0l-4-4m4 4l-4 4"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </BookDemoButton>
              <Link href={slide.secondaryCta.href} className="btn-ghost">
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div
            className="relative flex justify-end"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, #000 28%, #000 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent 0%, #000 28%, #000 100%), linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <div className="relative aspect-[10/7] w-full max-w-[620px]">
              <Image
                src={slide.image.src}
                alt={slide.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
