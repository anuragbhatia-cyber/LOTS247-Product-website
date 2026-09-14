"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { BookDemoButton } from "@/components/book-demo-button";

const solutionsItems = [
  { href: "https://lots247.in/", label: "Sarathi", external: true },
  { href: "/solutions/vcare", label: "VCare" },
  { href: "/solutions/bsafe", label: "BSafe" },
];

const resourcesItems = [
  { href: "/resources/blogs", label: "Blogs" },
  { href: "/resources/press-and-news", label: "Press and News" },
  { href: "/resources/success-stories", label: "Success Stories" },
];

const apisItems = [
  { href: "/apis/vehicle-rc-verification", label: "Vehicle RC Verification API" },
  { href: "/apis/driving-license", label: "Driving Licence Verification API" },
  { href: "/apis/challan", label: "Vehicle Challan Check API" },
];

const linksBefore = [
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/#pricing", label: "Pricing" },
];

const linksAfter = [{ href: "/company", label: "About Us" }];

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };
  const isGroupActive = (prefix: string) =>
    pathname ? pathname === prefix || pathname.startsWith(`${prefix}/`) : false;

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const threshold = 80;
    const delta = 6;

    const update = () => {
      const y = window.scrollY;
      const diff = y - lastY;
      if (Math.abs(diff) > delta) {
        setHidden(diff > 0 && y > threshold);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--nav-offset",
      hidden ? "0px" : "80px"
    );
  }, [hidden]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink-300/50 bg-white/80 shadow-[0_2px_8px_rgba(15,23,42,0.06)] backdrop-blur transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            <div className="group relative flex items-center">
              <Link
                href="/solutions"
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/solutions") ? "text-accent" : "text-ink-900"
                }`}
              >
                <span className="font-medium">Solutions</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-3 w-3 transition-transform group-hover:rotate-180"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 min-w-[180px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-ink-300/60 bg-white p-2 shadow-lg">
                  {solutionsItems.map((s) =>
                    s.external ? (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-2 text-[14px] font-medium text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
                      >
                        {s.label}
                      </a>
                    ) : (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block rounded-lg px-3 py-2 text-[14px] font-medium text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
                      >
                        {s.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
            {linksBefore.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-text={l.label}
                className={`nav-link text-[15px] font-medium transition-colors hover:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-ink-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="group relative flex items-center">
              <Link
                href="/apis"
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/apis") ? "text-accent" : "text-ink-900"
                }`}
              >
                <span className="font-medium">APIs</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-3 w-3 transition-transform group-hover:rotate-180"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-ink-300/60 bg-white p-2 shadow-lg">
                  {apisItems.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block whitespace-nowrap rounded-lg px-3 py-2 text-[14px] font-medium text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
                    >
                      {a.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative flex items-center">
              <Link
                href="/resources"
                className={`inline-flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/resources") ? "text-accent" : "text-ink-900"
                }`}
              >
                <span className="font-medium">Resources</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="h-3 w-3 transition-transform group-hover:rotate-180"
                >
                  <path
                    d="M5 8l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <div className="rounded-xl border border-ink-300/60 bg-white p-2 shadow-lg">
                  {resourcesItems.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block rounded-lg px-3 py-2 text-[14px] font-medium text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {linksAfter.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-text={l.label}
                className={`nav-link text-[15px] font-medium transition-colors hover:text-accent ${
                  isActive(l.href) ? "text-accent" : "text-ink-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden text-[15px] font-semibold text-ink-900 hover:text-accent md:inline"
          >
            Login
          </Link>
          <BookDemoButton className="btn-primary inline-flex items-center gap-2">
            Book a demo
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BookDemoButton>
        </div>
      </div>
    </header>
  );
}
