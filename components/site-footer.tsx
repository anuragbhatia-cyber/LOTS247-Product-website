import Link from "next/link";
import { Logo } from "@/components/logo";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lots247",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05a4.16 4.16 0 0 1 3.75-2.06c4 0 4.75 2.64 4.75 6.07V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com/lots247",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.79-6.263L4.8 22H2l6.98-7.972L2 2h6.914l4.33 5.723L18.244 2zm-2.383 18h1.833L7.24 4H5.288l10.573 16z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@lots247",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.11-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.39.57A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.39-.57a3 3 0 0 0 2.11-2.13A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/lots247",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M13.5 22v-8.4h2.82l.42-3.27H13.5V8.24c0-.95.26-1.6 1.62-1.6h1.73V3.72A23.2 23.2 0 0 0 14.32 3.6c-2.5 0-4.22 1.53-4.22 4.34v2.4H7.27v3.27H10.1V22h3.4z" />
      </svg>
    ),
  },
];

const cols = [
  {
    title: "Solutions",
    links: [
      { l: "Sarathi", h: "/solutions#sarathi" },
      { l: "VCare", h: "/solutions#vcare" },
      { l: "BSafe", h: "/solutions#bsafe" },
    ],
  },
  {
    title: "Support",
    links: [
      { l: "FAQ", h: "/support#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { l: "Privacy policy", h: "/legal/privacy" },
      { l: "Terms of service", h: "/legal/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_repeat(3,1fr)]">
          <div className="md:pr-16 lg:pr-24">
            <Logo variant="full" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              India&apos;s legal infrastructure layer for mobility. 24×7 legal
              assistance, compliance automation, and fleet-scale legal
              operations.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-semibold text-white">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.l}>
                    <Link
                      href={l.h}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} LOTS247. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
