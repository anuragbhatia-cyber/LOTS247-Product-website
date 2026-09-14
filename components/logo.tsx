import Image from "next/image";
import Link from "next/link";

export function Logo({
  onDark = false,
  variant,
  href = "/",
  width,
  height,
}: {
  onDark?: boolean;
  variant?: "color" | "full";
  href?: string | null;
  width?: number;
  height?: number;
}) {
  const src =
    variant === "full"
      ? "/logo-full.png"
      : variant === "color"
      ? "/logo-color.png"
      : "/logo.png";
  const applyInvert = onDark && !variant;
  const dims =
    variant === "full"
      ? { w: width ?? 511, h: height ?? 206, cls: "h-20 w-auto" }
      : { w: width ?? 168, h: height ?? 40, cls: "h-10 w-auto" };
  const img = (
    <Image
      src={src}
      alt="LOTS247"
      width={dims.w}
      height={dims.h}
      priority
      className={applyInvert ? `${dims.cls} brightness-0 invert` : dims.cls}
    />
  );

  if (href === null) return img;

  return (
    <Link href={href} className="inline-flex items-center" aria-label="LOTS247 home">
      {img}
    </Link>
  );
}
