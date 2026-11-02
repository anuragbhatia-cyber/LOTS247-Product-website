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
];

const apisItems = [
  { href: "/apis/vehicle-rc-verification", label: "Vehicle RC Verification API" },
  { href: "/apis/driving-license", label: "Driving Licence Verification API" },
  { href: "/apis/challan", label: "Vehicle Challan Check API" },
];

const industriesItems = [
  { href: "/industries#logistics", label: "Logistics" },
  { href: "/industries#insurance", label: "Insurance" },
  { href: "/industries#oems", label: "OEMs" },
  { href: "/industries#rsa", label: "RSA's" },
  { href: "/industries#dealership", label: "Dealerships" },
  { href: "/industries#others", label: "Others" },
];

const linksBefore = [
  { href: "/platform", label: "Platform" },
];

const linksAfter: { href: string; label: string }[] = [];

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

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
                className={`inline-flex items-center gap-1 text-[15px] transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/solutions")
                    ? "font-semibold text-accent"
                    : "font-medium text-ink-900"
                }`}
              >
                <span>Solutions</span>
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
                className={`nav-link text-[15px] transition-colors hover:text-accent ${
                  isActive(l.href)
                    ? "font-semibold text-accent"
                    : "font-medium text-ink-900"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="group relative flex items-center">
              <Link
                href="/industries"
                className={`inline-flex items-center gap-1 text-[15px] transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/industries")
                    ? "font-semibold text-accent"
                    : "font-medium text-ink-900"
                }`}
              >
                <span>Industries</span>
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
                  {industriesItems.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      className="block rounded-lg px-3 py-2 text-[14px] font-medium text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative flex items-center">
              <button
                type="button"
                aria-haspopup="menu"
                className={`inline-flex cursor-default items-center gap-1 text-[15px] transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/apis")
                    ? "font-semibold text-accent"
                    : "font-medium text-ink-900"
                }`}
              >
                <span>APIs</span>
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
              </button>
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
                className={`inline-flex items-center gap-1 text-[15px] transition-colors hover:text-accent group-hover:text-accent ${
                  isGroupActive("/resources")
                    ? "font-semibold text-accent"
                    : "font-medium text-ink-900"
                }`}
              >
                <span>Resources</span>
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
          <a
            href="https://dashboard.lots247.in/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[15px] font-semibold text-ink-900 hover:text-accent md:inline"
          >
            Login
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-300/60 bg-white text-ink-900 transition-colors hover:bg-ink-100 hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        id="site-mobile-menu"
        className={`fixed inset-x-0 top-[72px] z-30 border-b border-ink-300/50 bg-white shadow-lg transition-all duration-200 ease-out ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-x max-h-[calc(100vh-72px)] overflow-y-auto py-6">
          <nav className="flex flex-col gap-1">
            <MenuSection title="Solutions" items={solutionsItems} />
            <MenuLink href="/platform" label="Platform" />
            <MenuSection title="Industries" items={industriesItems} />
            <MenuSection title="APIs" items={apisItems} />
            <MenuSection title="Resources" items={resourcesItems} />
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-ink-300/40 pt-6">
            <a
              href="https://dashboard.lots247.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-ink-300/60 px-4 py-3 text-[15px] font-semibold text-ink-900 hover:bg-ink-100 hover:text-accent"
            >
              Login
            </a>
            <BookDemoButton className="btn-primary inline-flex items-center justify-center gap-2">
              Book a demo
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BookDemoButton>
          </div>
        </div>
      </div>
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 top-[72px] z-20 cursor-default bg-ink-900/30 backdrop-blur-sm"
        />
      )}
    </header>
  );
}

function MenuLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="border-b border-ink-300/30">
      <Link
        href={href}
        className="block px-3 py-4 text-[16px] font-semibold text-ink-900 transition-colors hover:text-accent"
      >
        {label}
      </Link>
    </div>
  );
}

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string; external?: boolean }[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = `mobile-section-${title.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="border-b border-ink-300/30 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-3 py-4 text-left text-[16px] font-semibold text-ink-900 transition-colors hover:text-accent"
      >
        <span>{title}</span>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col pb-3">
            {items.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-6 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-accent"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-6 py-2 text-[15px] font-medium text-ink-700 transition-colors hover:bg-ink-100 hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
