import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Problem } from "@/components/sections/problem";
import { Capabilities } from "@/components/sections/capabilities";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Solutions } from "@/components/sections/solutions";
import { Why } from "@/components/sections/why";
import { ApisSection } from "@/components/sections/apis";
import { Metrics } from "@/components/sections/metrics";
import { Stories } from "@/components/sections/stories";
import { Recognition } from "@/components/sections/recognition";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { SarathiOffer } from "@/components/sections/sarathi-offer";
import { Blogs } from "@/components/sections/blogs";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { SupportedBy } from "@/components/sections/supported-by";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Problem />
      <Capabilities />
      <HowItWorks />
      <Solutions />
      <Why />
      <ApisSection />
      <Metrics />
      <SarathiOffer />
      <Stories />
      <Recognition />
      <PricingPreview />
      <Blogs />
      <Faq />
      <FinalCta />
      <SupportedBy />
    </main>
  );
}
