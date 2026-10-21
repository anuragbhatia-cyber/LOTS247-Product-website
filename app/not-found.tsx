"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-surface-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(44,183,125,0.08),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(247,151,39,0.07),transparent_50%)]"
      />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-5 font-mono text-[128px] font-bold leading-none tracking-[-0.04em] text-ink-900 md:text-[180px]">
            404
          </h1>
          <h2 className="mt-6 text-3xl font-bold tracking-[-0.01em] text-ink-900 md:text-4xl">
            Page not found
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            The page you&apos;re looking for doesn&apos;t exist, has moved, or
            is temporarily unavailable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
              Retry
            </button>
            <Link href="/" className="btn-ghost">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
