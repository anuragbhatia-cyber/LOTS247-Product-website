import Image from "next/image";

const clients = [
  { src: "/client-blr.png", alt: "BLR" },
  { src: "/client-bluwheelz.png", alt: "Bluwheelz" },
  { src: "/client-eco-mobility.png", alt: "Eco Mobility" },
  { src: "/client-greenline.png", alt: "Greenline" },
  { src: "/client-mooving.png", alt: "Mooving" },
  { src: "/client-samrx.png", alt: "SamRx" },
  { src: "/client-supreme.png", alt: "Supreme" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-ink-300/50 bg-white py-14">
      <div className="container-x">
        <p className="text-center text-sm font-medium text-ink-500">
          Trusted by leading mobility, logistics, insurance, and automotive
          companies across India
        </p>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {clients.map((c) => (
            <div
              key={c.src}
              className="relative h-8 w-full max-w-[120px]"
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="120px"
                className="object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
