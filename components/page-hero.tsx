import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";

function isBookDemo(label: string) {
  return label.toLowerCase().includes("book a demo");
}

export function PageHero({
  eyebrow,
  title,
  sub,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-surface-alt pt-16 pb-20 md:pt-20 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(900px 400px at 20% -10%, rgba(44,183,125,0.10), transparent 60%), radial-gradient(600px 300px at 100% 10%, rgba(247,151,39,0.10), transparent 60%)",
        }}
      />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
          <h1 className={eyebrow ? "h1 mt-4" : "h1"}>{title}</h1>
          {sub ? <p className="lead mt-6 text-ink-700">{sub}</p> : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {primaryCta &&
                (isBookDemo(primaryCta.label) ? (
                  <BookDemoButton className="btn-primary">
                    {primaryCta.label}
                  </BookDemoButton>
                ) : (
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                ))}
              {secondaryCta &&
                (isBookDemo(secondaryCta.label) ? (
                  <BookDemoButton className="btn-ghost">
                    {secondaryCta.label}
                  </BookDemoButton>
                ) : (
                  <Link href={secondaryCta.href} className="btn-ghost">
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
