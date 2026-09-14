import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Pricing — LOTS247",
  description:
    "Flexible plans for every stage of growth. Sarathi for private vehicles, Bsafe for fleets, Vcare for large mobility organizations.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        title="Flexible plans for every stage of growth"
        sub="Choose the plan that fits your operations today — Sarathi for private vehicles, Bsafe for fleets, Vcare for large mobility organizations."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Login", href: "/login" }}
      />
      <PricingPreview />
      <Faq />
      <FinalCta />
    </main>
  );
}
