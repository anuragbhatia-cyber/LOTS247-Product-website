import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Capabilities } from "@/components/sections/capabilities";
import { DashboardGallery } from "@/components/sections/dashboard-gallery";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Platform — LOTS247",
  description:
    "Built for legal operations at scale. Legal network, challan management, compliance monitoring, unified dashboard, and API integrations.",
};

export default function PlatformPage() {
  return (
    <main>
      <PageHero
        title="Built for legal operations at scale"
        sub="A single platform that unifies legal help, compliance, and operational data across your entire fleet — from roadside incident to resolution."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Login", href: "/login" }}
      />
      <Capabilities />
      <DashboardGallery />
      <FinalCta />
    </main>
  );
}
