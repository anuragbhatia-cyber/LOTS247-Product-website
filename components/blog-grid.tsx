"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui";

export type BlogItem = {
  slug: string;
  title: string;
  desc: string;
  date: string;
  image: string;
  alt: string;
};

export function BlogGrid({
  blogs,
  pageSize = 6,
}: {
  blogs: BlogItem[];
  pageSize?: number;
}) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(blogs.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return blogs.slice(start, start + pageSize);
  }, [blogs, currentPage, pageSize]);

  const goTo = (next: number) => {
    const clamped = Math.max(1, Math.min(totalPages, next));
    setPage(clamped);
    if (typeof window !== "undefined") {
      document
        .getElementById("latest")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pageItems.map((b) => (
          <article
            key={b.slug}
            className="card flex flex-col hover:-translate-y-0.5"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-alt">
              <Image
                src={b.image}
                alt={b.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 line-clamp-3 text-lg font-semibold leading-snug text-ink-900">
              {b.title}
            </h3>
            <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-ink-700">
              {b.desc}
            </p>
            <div className="mt-5 text-xs text-ink-500">{b.date}</div>
            <a
              href={`https://lots247.in/blog/${b.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-5"
            >
              Read <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>

      {totalPages > 1 ? (
        <nav
          aria-label="Blog pagination"
          className="mt-12 flex items-center justify-center gap-2"
        >
          <PagerButton
            label="Previous page"
            disabled={currentPage === 1}
            onClick={() => goTo(currentPage - 1)}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                d="M12 4l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PagerButton>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
            const active = n === currentPage;
            return (
              <button
                key={n}
                type="button"
                onClick={() => goTo(n)}
                aria-current={active ? "page" : undefined}
                aria-label={`Page ${n}`}
                className={
                  active
                    ? "inline-flex h-10 min-w-10 items-center justify-center rounded-lg bg-accent px-3 text-sm font-semibold text-white"
                    : "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-ink-300 bg-white px-3 text-sm font-semibold text-ink-700 hover:bg-ink-100"
                }
              >
                {n}
              </button>
            );
          })}

          <PagerButton
            label="Next page"
            disabled={currentPage === totalPages}
            onClick={() => goTo(currentPage + 1)}
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                d="M8 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </PagerButton>
        </nav>
      ) : null}
    </>
  );
}

function PagerButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300 bg-white text-ink-700 transition-colors hover:bg-ink-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white"
    >
      {children}
    </button>
  );
}
