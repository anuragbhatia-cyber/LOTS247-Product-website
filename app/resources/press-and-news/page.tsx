import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/ui";
import { FinalCta } from "@/components/sections/final-cta";
import { PressNewsList, type NewsItem } from "@/components/press-news-list";

export const metadata: Metadata = {
  title: "Press and News — LOTS247",
  description:
    "Press coverage, announcements, and news from LOTS247 as we build legal infrastructure for India's mobility ecosystem.",
};

type PressItem = NewsItem & { featured?: boolean };

const news: PressItem[] = [
  {
    outlet: "LOTS247",
    title: "TrucksUp partners with Lawyered's 'Road Smart Partner' network",
    excerpt:
      "TrucksUp has partnered with Lawyered to join the Road Smart Partner network. This collaboration integrates Lawyered's legal infrastructure, specifically through ChallanPay, into TrucksUp's mobility ecosystem, securing fleet owners and truck drivers on managed vehicles and compliance with unprecedented ease.",
    date: "May 1, 2026",
    year: 2026,
    href: "#",
    featured: true,
  },
  {
    outlet: "The Economic Times",
    title:
      "Rainmatter, Turbostart co-lead $2.5 million pre-Series A round in Lawyered for mobility",
    excerpt:
      "Rainmatter by Zerodha and Turbostart co-led a $2.5 million pre-Series A investment in Lawyered, India's legal infrastructure platform for mobility. Existing investor Finvolve also participated in the round.",
    date: "Apr 21, 2026",
    year: 2026,
    href: "#",
    featured: true,
  },
  {
    outlet: "CNBC TV18",
    title: "Lawyered raises $2.5 million in round led by Zerodha's Rainmatter, Turbostart",
    excerpt:
      "Legal infrastructure platform Lawyered has raised $2.5 million in a pre-Series A funding round co-led by Rainmatter, backed by Zerodha, and Turbostart, with existing investor Finvolve also participating.",
    date: "Apr 21, 2026",
    year: 2026,
    href: "#",
    featured: true,
  },
  {
    outlet: "YourStory",
    title: "Meet the startup building India's legal layer for commercial vehicles",
    excerpt:
      "A deep-dive into how LOTS247 is stitching together on-ground legal presence, challan tooling, and API-first workflows for logistics operators across India.",
    date: "Jul 12, 2026",
    year: 2026,
    href: "#",
  },
  {
    outlet: "Inc42",
    title: "How LOTS247 is turning legal ops into a fleet advantage",
    excerpt:
      "From compliance to dispute resolution, LOTS247 is packaging 24×7 legal support into a product that fleet owners can plug into their existing stacks.",
    date: "Jun 3, 2026",
    year: 2026,
    href: "#",
  },
  {
    outlet: "Moneycontrol",
    title: "24×7 legal support: the new must-have for logistics",
    excerpt:
      "As enforcement modernises and challans go digital, logistics companies are looking for always-on legal partners. Here's why LOTS247 is emerging as a category leader.",
    date: "Nov 18, 2025",
    year: 2025,
    href: "#",
  },
  {
    outlet: "Business Standard",
    title: "LOTS247 partners with state RTOs on digital compliance",
    excerpt:
      "A new wave of partnerships with regional transport offices lets LOTS247 resolve challan and permit issues faster for fleet customers across five Indian states.",
    date: "Sep 4, 2025",
    year: 2025,
    href: "#",
  },
  {
    outlet: "The Hindu",
    title: "Legal-tech reaches India's commercial vehicle operators",
    excerpt:
      "Commercial vehicle operators — historically underserved by legal services — are beginning to adopt tech-first legal platforms like LOTS247 to manage day-to-day compliance.",
    date: "Mar 22, 2025",
    year: 2025,
    href: "#",
  },
];

const featured = news.filter((n) => n.featured);

export default function PressAndNewsPage() {
  return (
    <main>
      <PageHero title="LOTS247 in the press" />

      <section className="section bg-white">
        <div className="container-x">
          <h2 className="h2 text-ink-900">Featured Stories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-ink-300/60 bg-white p-8 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex h-10 items-center">
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-ink-900">
                    {item.outlet}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug md:text-xl">
                  <Link
                    href={item.href}
                    className="text-ink-900 transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-4 line-clamp-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  {item.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-ink-300/60 pt-4">
                  <span className="text-sm text-ink-500">{item.date}</span>
                  <Link
                    href={item.href}
                    className="link-arrow text-sm"
                  >
                    Read More <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-x">
          <PressNewsList items={news} />
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
