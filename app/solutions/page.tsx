import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Solutions } from "@/components/sections/solutions";
import { Stories } from "@/components/sections/stories";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Solutions — LOTS247",
  description:
    "Solutions designed for every mobility stakeholder — fleets, logistics, OEMs, insurance, and private vehicle owners.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        title="Solutions designed for every mobility stakeholder"
        sub="Whether you run a fleet, a logistics network, an OEM programme, or drive your own vehicle — LOTS247 has a solution built for you."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Login", href: "/login" }}
      />
      <Solutions />
      <Stories />
      <FinalCta />
    </main>
  );
}
