import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Solutions } from "@/components/sections/solutions";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Industries — LOTS247",
  description:
    "Legal infrastructure and compliance built for logistics, dealerships, BFSI, OEMs, insurance, and roadside assistance providers across India.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries"
        title="Built for every mobility stakeholder"
        sub="From logistics and dealerships to BFSI, OEMs, insurance, and RSA — see how LOTS247 delivers legal and compliance infrastructure tailored to your industry."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Login", href: "/login" }}
      />
      <Solutions />
      <FinalCta />
    </main>
  );
}
