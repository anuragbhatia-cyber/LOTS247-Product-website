"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type NewsItem = {
  outlet: string;
  title: string;
  excerpt: string;
  date: string;
  year: number;
  href: string;
};

export function PressNewsList({ items }: { items: NewsItem[] }) {
  const years = useMemo(() => {
    const uniq = Array.from(new Set(items.map((i) => i.year))).sort(
      (a, b) => b - a,
    );
    return uniq;
  }, [items]);

  const [filter, setFilter] = useState<"all" | number>("all");

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.year === filter)),
    [filter, items],
  );

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="h2 text-ink-900">All News</h2>
        <div className="flex flex-wrap gap-2">
          <FilterPill
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterPill>
          {years.map((y) => (
            <FilterPill
              key={y}
              active={filter === y}
              onClick={() => setFilter(y)}
            >
              {y}
            </FilterPill>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {visible.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group rounded-2xl border border-ink-300/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-card md:p-8"
          >
            <div className="text-sm text-ink-500">{item.date}</div>
            <h3 className="mt-3 text-lg font-bold text-ink-900 transition-colors group-hover:text-accent md:text-xl">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-700">
              {item.excerpt}
            </p>
          </Link>
        ))}
        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-ink-300 bg-white p-10 text-center text-ink-500">
            No stories for this year yet.
          </div>
        ) : null}
      </div>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-accent text-white"
          : "border border-ink-300 bg-white text-ink-900 hover:bg-ink-100"
      }`}
    >
      {children}
    </button>
  );
}
