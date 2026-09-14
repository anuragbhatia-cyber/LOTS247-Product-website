import Link from "next/link";
import { BookDemoButton } from "@/components/book-demo-button";

const DASHBOARD_LOGIN_URL = "https://dashboard.lots247.in/login";

function isBookDemo(label: string) {
  return label.toLowerCase().includes("book a demo");
}

function isLogin(label: string) {
  return label.trim().toLowerCase() === "login";
}

function CtaButton({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className: string;
}) {
  if (isBookDemo(label)) {
    return <BookDemoButton className={className}>{label}</BookDemoButton>;
  }
  if (isLogin(label)) {
    return (
      <a
        href={DASHBOARD_LOGIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
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
              {primaryCta && (
                <CtaButton
                  label={primaryCta.label}
                  href={primaryCta.href}
                  className="btn-primary"
                />
              )}
              {secondaryCta && (
                <CtaButton
                  label={secondaryCta.label}
                  href={secondaryCta.href}
                  className="btn-ghost"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
