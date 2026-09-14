"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export function BookDemoButton({ className, children }: Props) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const titleId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSubmitted(false);
          setOpen(true);
        }}
        className={className}
      >
        {children ?? "Book a demo"}
      </button>

      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4"
        >
          <button
            type="button"
            aria-label="Close dialog"
            onClick={close}
            className="absolute inset-0 h-full w-full bg-ink-900/60 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-ink-300/60 bg-white p-6 shadow-card md:p-8">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {submitted ? (
              <div className="py-4 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/15 text-accent">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10l4 4 8-8"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  id={titleId}
                  className="mt-4 text-lg font-semibold text-ink-900"
                >
                  Our team will get in touch with you
                </h3>
                <button
                  type="button"
                  onClick={close}
                  className="btn-primary mt-6 w-full"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <h3 id={titleId} className="text-xl font-bold text-ink-900">
                  Book a demo
                </h3>
                <form
                  action="/api/book-demo"
                  method="post"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-5 flex flex-col gap-3"
                >
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-medium text-ink-700">
                      Full name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-medium text-ink-700">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="rounded-lg border border-ink-300/60 bg-white px-3.5 py-2.5 text-[14px] text-ink-900 placeholder:text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-medium text-ink-700">
                      Fleet size
                    </span>
                    <select
                      name="fleet_size"
                      defaultValue=""
                      required
                      className="appearance-none rounded-lg border border-ink-300/60 bg-white bg-[right_0.75rem_center] bg-no-repeat px-3.5 py-2.5 pr-9 text-[14px] text-ink-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 20 20' fill='none'><path d='M5 8l5 5 5-5' stroke='rgb(100 116 139 / 0.8)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                      }}
                    >
                      <option value="" disabled>
                        Select fleet size
                      </option>
                      <option className="text-ink-900" value="1-10">
                        1 – 10
                      </option>
                      <option className="text-ink-900" value="11-50">
                        11 – 50
                      </option>
                      <option className="text-ink-900" value="51-200">
                        51 – 200
                      </option>
                      <option className="text-ink-900" value="201-1000">
                        201 – 1000
                      </option>
                      <option className="text-ink-900" value="1000+">
                        1000+
                      </option>
                    </select>
                  </label>
                  <button type="submit" className="btn-primary mt-2 w-full">
                    Request demo
                  </button>
                </form>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
