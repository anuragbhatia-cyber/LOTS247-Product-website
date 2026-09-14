import { ReactNode } from "react";

export function Eyebrow({
  children,
  variant = "brand",
}: {
  children: ReactNode;
  variant?: "brand" | "accent";
}) {
  return (
    <div
      className={
        variant === "accent" ? "eyebrow-accent" : "eyebrow"
      }
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  dark = false,
  eyebrowVariant,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  dark?: boolean;
  eyebrowVariant?: "brand" | "accent";
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <Eyebrow variant={eyebrowVariant ?? (dark ? "accent" : "brand")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`h2 mt-4 ${dark ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`lead mt-5 ${dark ? "text-white/75" : "text-ink-700"}`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5 8 14.5 16 6.5" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor">
      <path d="M11.293 4.293a1 1 0 0 1 1.414 0l4.999 5a1 1 0 0 1 0 1.414l-4.999 5a1 1 0 0 1-1.414-1.414L14.585 11H4a1 1 0 1 1 0-2h10.585l-3.292-3.293a1 1 0 0 1 0-1.414Z" />
    </svg>
  );
}
