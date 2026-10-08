import Image from "next/image";
import Link from "next/link";

export function SarathiOffer() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="h2 text-ink-900 md:whitespace-nowrap">
            Introducing <span className="text-accent">LOTS247 Sarathi</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl shadow-card lg:min-h-full">
            <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:h-full">
              <Image
                src="/sarathi-driver.webp"
                alt="Truck driver smiling at his phone while leaning against his truck on a highway at sunset"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 p-8 text-white shadow-card md:p-10">
            <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
              Sarathi Vehicle Plan
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-semibold text-white/40 line-through">
                ₹1,999
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                50% off
              </span>
            </div>

            <div className="mt-3 flex flex-wrap items-baseline gap-3">
              <span className="text-[72px] font-bold leading-none tracking-tight text-white md:text-[88px]">
                ₹999
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">
                Per Vehicle / Year
              </span>
            </div>

            <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/75">
              ₹999 mein legal support, accident insurance aur wallet top up ka benefit.
            </p>

            <Link
              href="https://lots247.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Sarathi plan activate karo
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-white">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

          </div>

          <div className="rounded-3xl border border-ink-300/60 bg-white p-8 shadow-card md:p-10">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
                Wallet Top Up
              </div>
              <p className="mt-2 text-[18px] font-bold leading-snug text-ink-900 md:text-[20px]">
                Sarathi plan ke saath{" "}
                <span className="text-accent">1100</span> wallet credits milte hain.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/[0.06] p-4">
                <div className="flex min-w-[72px] flex-col">
                  <span className="text-xl font-bold leading-none text-ink-900">1000</span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Credits
                  </span>
                </div>
                <p className="text-[13px] leading-[1.35] text-ink-700">
                  Challan convenience fee usage ke liye.
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-ink-300/60 bg-white p-4">
                <div className="flex min-w-[72px] flex-col">
                  <span className="text-xl font-bold leading-none text-ink-900">100</span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                    Credits
                  </span>
                </div>
                <p className="text-[13px] leading-[1.35] text-ink-700">
                  RC, challan lookup aur DL check jaise vehicle checks ke liye.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
