import Image from "next/image";
import { capabilities } from "@/components/sections/capabilities-data";

export function DashboardGallery() {
  return (
    <section className="section bg-surface-alt">
      <div className="container-x">
        <div className="grid gap-12 md:gap-16">
          {capabilities.map((c, i) => (
            <div
              key={c.slug}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-ink-900 md:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink-700">
                  {c.desc}
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink-300/60 bg-white shadow-card">
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  width={c.image.width}
                  height={c.image.height}
                  className="h-auto w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
