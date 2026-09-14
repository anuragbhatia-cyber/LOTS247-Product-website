import Image from "next/image";

const supporters = [
  { src: "/backed-meity.png", alt: "MeitY" },
  { src: "/backed-ia.png", alt: "India Accelerator" },
  { src: "/backed-turbostart.png", alt: "Turbostart" },
  { src: "/backed-zerodha.png", alt: "Rainmatter by Zerodha" },
  { src: "/backed-finvolve.webp", alt: "Finvolve" },
];

export function SupportedBy() {
  return (
    <section className="bg-surface-alt pt-4 pb-16 md:pt-6 md:pb-20">
      <div className="container-x">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
          Backed by
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {supporters.map((s) => (
            <div
              key={s.alt}
              className="relative flex h-24 w-full max-w-[200px] items-center justify-center rounded-xl bg-white p-6 shadow-sm ring-1 ring-ink-300/40"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="200px"
                className="object-contain p-6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
