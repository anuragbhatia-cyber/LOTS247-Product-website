import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOTS247 — India's First On-Road Legal Assistance Platform",
  description:
    "24×7 roadside legal assistance, compliance automation, challan management, and legal operations — all on a single platform built for fleets, mobility companies, and vehicle owners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${mono.variable}`}>
      <body className="font-sans text-ink-900 antialiased">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
