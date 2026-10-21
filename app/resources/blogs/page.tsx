import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader, ArrowIcon } from "@/components/ui";
import { BlogGrid } from "@/components/blog-grid";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Blogs — LOTS247",
  description:
    "Articles and insights from LOTS247 on legal infrastructure for India's mobility ecosystem.",
};

const blogs = [
  {
    slug: "fleet-compliance-in-india",
    title:
      "Fleet Compliance in India — How Commercial Vehicle Owners Can Reduce Challans, Legal Risks, Downtime and Operational Losses",
    desc: "Running a commercial vehicle fleet in India is not simply about adding more vehicles and increasing trips. Every vehicle comes with legal, regulatory, documentation, safety, and compliance responsibilities that, if unmonitored, can quickly turn into challans, detention, delays, and losses.",
    date: "Aug 24, 2026",
    image: "/blog-fleet-compliance.png",
    alt: "Fleet compliance dashboard for commercial vehicle owners in India",
  },
  {
    slug: "lots247-roadside-legal-assistance",
    title:
      "LOTS247 — 24×7 Roadside Legal Assistance and Compliance Support for Commercial Vehicle Owners in India",
    desc: "India's transport and logistics sector depends on millions of commercial vehicles moving every day. For vehicle owners, fleet operators, and driver-cum-owners, keeping a vehicle on the road involves far more than fuel, maintenance, and route planning.",
    date: "Aug 20, 2026",
    image: "/blog-roadside-legal-assistance.png",
    alt: "LOTS247 Sarathi 24x7 roadside legal assistance for commercial vehicles",
  },
  {
    slug: "roadside-legal-delays-hidden-cost",
    title:
      "Why Roadside Legal Delays Are a Hidden Cost for Indian Fleets and How LOTS247 Helps Keep Commercial Vehicles Moving",
    desc: "For a commercial vehicle, time on the road directly influences business performance. A truck at a checkpoint, a delivery caught up in a documentation dispute, or a vehicle handling an unexpected challan can create consequences that extend far beyond the immediate legal issue.",
    date: "Aug 18, 2026",
    image: "/blog-roadside-legal-delays.png",
    alt: "Roadside legal delays as a hidden cost for Indian commercial fleets",
  },
];

const featured = blogs[0];

export default function BlogsPage() {
  return (
    <main>
      <section className="section bg-surface-alt">
        <div className="container-x">
          <SectionHeader title="Featured Article" />
          <article className="mt-14 grid gap-8 rounded-2xl border border-ink-300/60 bg-white p-6 md:grid-cols-[1.1fr_1fr] md:items-center md:p-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface-alt">
              <Image
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="inline-flex w-fit items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                Featured
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-ink-900 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink-700">
                {featured.desc}
              </p>
              <div className="mt-5 text-xs text-ink-500">{featured.date}</div>
              <a
                href={`https://lots247.in/blog/${featured.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-6"
              >
                Read the article <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white" id="latest">
        <div className="container-x">
          <SectionHeader title="Latest from our blog" />
          <BlogGrid blogs={blogs} pageSize={2} />
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
