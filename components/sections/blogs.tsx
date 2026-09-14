import Image from "next/image";
import Link from "next/link";
import { SectionHeader, ArrowIcon } from "@/components/ui";

const blogs = [
  {
    slug: "fleet-compliance-in-india",
    title: "Fleet Compliance in India — Reducing Challans and Downtime…",
    desc: "Running a commercial vehicle fleet in India is not simply about adding more vehicles and increasing trips. Every vehicle comes with legal, regulatory, documentation, safety, and compliance responsibilities.",
    date: "Aug 24, 2026",
    image: "/blog-fleet-compliance.png",
    alt: "Fleet compliance dashboard for commercial vehicle owners in India",
  },
  {
    slug: "lots247-roadside-legal-assistance",
    title: "24×7 Roadside Legal Assistance for Commercial Vehicles",
    desc: "India's transport and logistics sector depends on millions of commercial vehicles moving every day. Keeping a vehicle on the road involves far more than fuel, maintenance, and route planning.",
    date: "Aug 20, 2026",
    image: "/blog-roadside-legal-assistance.png",
    alt: "LOTS247 Sarathi 24x7 roadside legal assistance for commercial vehicles",
  },
  {
    slug: "roadside-legal-delays-hidden-cost",
    title: "The Hidden Cost of Roadside Legal Delays for Indian Fleets",
    desc: "For a commercial vehicle, time on the road directly influences business performance. A truck at a checkpoint or a delivery caught up in a documentation dispute can create consequences that extend beyond the immediate legal issue.",
    date: "Aug 18, 2026",
    image: "/blog-roadside-legal-delays.png",
    alt: "Roadside legal delays as a hidden cost for Indian commercial fleets",
  },
];

export function Blogs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeader title="The LOTS247 Blog" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <article
              key={b.slug}
              className="card flex flex-col !p-5 hover:-translate-y-0.5"
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
              <h3 className="mt-4 line-clamp-3 flex-1 text-[17px] font-semibold leading-snug text-ink-900">
                {b.title}
              </h3>
              <div className="mt-4 text-xs text-ink-500">{b.date}</div>
              <a
                href={`https://lots247.in/blog/${b.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-3"
              >
                Read <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/resources/blogs"
            className="btn inline-flex items-center gap-2 border border-ink-300 bg-white text-ink-900 hover:bg-surface-alt"
          >
            View all blogs
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
