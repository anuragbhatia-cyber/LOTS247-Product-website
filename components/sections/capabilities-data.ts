export type Capability = {
  slug: string;
  title: string;
  desc: string;
  image: { src: string; width: number; height: number; alt: string };
};

export const capabilities: Capability[] = [
  {
    slug: "driver-insurance",
    title: "Driver Insurance",
    desc: "Protect drivers with comprehensive insurance coverage for accidents, injuries, and on-road incidents, backed by fast claims and 24×7 support.",
    image: {
      src: "/capability-driver-insurance.png",
      width: 2880,
      height: 1624,
      alt: "LOTS247 dashboard home with fleet compliance score, alerts, and an Activate Driver Insurance card",
    },
  },
  {
    slug: "challan",
    title: "Challan Management",
    desc: "Track, verify, resolve, and manage traffic challans through a centralized platform with complete visibility and control.",
    image: {
      src: "/capability-challan.png",
      width: 2880,
      height: 1624,
      alt: "All Vehicle Challans screen listing pending fleet challans with amounts and statuses",
    },
  },
  {
    slug: "compliance",
    title: "Compliance Monitoring",
    desc: "Monitor RC, fitness, pollution, permits, insurance, and other vehicle documentation to ensure continuous compliance.",
    image: {
      src: "/capability-compliance.png",
      width: 2880,
      height: 1624,
      alt: "Fleet Overview screen with compliance score, insights, and compliance categories breakdown",
    },
  },
  {
    slug: "reports",
    title: "VCS & Reports",
    desc: "Generate vehicle compliance reports, legal summaries, and actionable insights to support faster operational and regulatory decision-making.",
    image: {
      src: "/capability-reports.png",
      width: 2876,
      height: 1614,
      alt: "Monthly Incident Summary report showing overall case status and case type breakdown",
    },
  },
  {
    slug: "api",
    title: "API Integrations",
    desc: "Integrate legal, compliance, and vehicle data seamlessly into your existing fleet management and enterprise systems.",
    image: {
      src: "/capability-api.png",
      width: 2880,
      height: 1624,
      alt: "API Catalogue screen with Challan, Driving Licence, and RC APIs available for integration",
    },
  },
  {
    slug: "knowledge",
    title: "Knowledge Base",
    desc: "Access a comprehensive repository of legal guides, compliance resources, regulatory updates, and operational best practices for vehicles and fleets.",
    image: {
      src: "/capability-knowledge.png",
      width: 2880,
      height: 1624,
      alt: "Knowledge Base screen with templates, FAQs, guides, checklists, regulations, and judgements",
    },
  },
];
