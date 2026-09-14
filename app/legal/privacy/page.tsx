import type { Metadata } from "next";
import { LegalDoc, type LegalSection } from "@/components/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy — LOTS247",
  description:
    "How LOTS247 collects, uses, stores, and protects your personal and vehicle-related information.",
};

const sections: LegalSection[] = [
  {
    id: "information-we-collect",
    title: "1. Information we collect",
    body: (
      <>
        <p>
          We collect information you provide directly to us and information
          generated through your use of our services. This may include:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Account information</strong> — name, email address, mobile
            number, company name, designation, and login credentials.
          </li>
          <li>
            <strong>Vehicle and compliance data</strong> — vehicle registration
            numbers, RC, DL, PUC, permits, fitness certificates, insurance, and
            challan history.
          </li>
          <li>
            <strong>Case and incident data</strong> — details of legal
            incidents, documents shared with our lawyers, and communications
            during case resolution.
          </li>
          <li>
            <strong>Usage data</strong> — device information, IP address,
            browser, pages visited, and interactions with our dashboard, apps,
            and APIs.
          </li>
          <li>
            <strong>Payment information</strong> — billing address and payment
            references. Card and bank details are handled by our payment
            processors and not stored on our servers.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Provide, operate, and improve the LOTS247 platform and APIs.</li>
          <li>
            Deliver legal assistance, compliance monitoring, and challan
            resolution services on your behalf.
          </li>
          <li>
            Communicate with you about your account, cases, invoices, product
            updates, and support requests.
          </li>
          <li>
            Verify identity, prevent fraud, and comply with legal and
            regulatory obligations.
          </li>
          <li>
            Generate aggregated, non-identifying analytics to improve our
            services.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "3. How we share information",
    body: (
      <>
        <p>
          We do not sell your personal information. We share information only
          when necessary to provide our services, including with:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Lawyers and legal partners</strong> in our network, where
            required to represent or advise you on a case.
          </li>
          <li>
            <strong>Government authorities and courts</strong>, where required
            to pay challans, respond to notices, or comply with law.
          </li>
          <li>
            <strong>Service providers</strong> that support hosting, payments,
            analytics, communications, and customer support, under
            confidentiality obligations.
          </li>
          <li>
            <strong>Successors</strong> in the event of a merger, acquisition,
            or sale of assets, subject to standard confidentiality safeguards.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    title: "4. Data storage and security",
    body: (
      <>
        <p>
          Your data is stored on servers located in India and access is
          restricted to authorized personnel. We implement industry-standard
          administrative, technical, and physical safeguards, including
          encryption in transit, access controls, and audit logging. No system
          is completely secure; you are responsible for keeping your login
          credentials confidential.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "5. Data retention",
    body: (
      <p>
        We retain personal and case-related information for as long as your
        account is active or as needed to provide services, resolve disputes,
        enforce agreements, and comply with legal and regulatory obligations.
        You may request deletion of your account, subject to retention
        requirements under applicable law.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your rights",
    body: (
      <>
        <p>Subject to applicable law, you may:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Access, correct, or update your personal information.</li>
          <li>Request a copy of the data we hold about you.</li>
          <li>
            Ask us to delete or restrict processing of your information, where
            applicable.
          </li>
          <li>
            Withdraw consent for marketing communications at any time by
            following the unsubscribe link or contacting us.
          </li>
        </ul>
        <p className="mt-3">
          To exercise these rights, please contact us using the details at the
          end of this policy.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies and tracking",
    body: (
      <p>
        We use cookies and similar technologies to keep you signed in, remember
        preferences, and measure the performance of our website and product.
        You can control cookies through your browser settings; disabling
        certain cookies may limit functionality.
      </p>
    ),
  },
  {
    id: "children",
    title: "8. Children's privacy",
    body: (
      <p>
        Our services are not directed to individuals under the age of 18. We do
        not knowingly collect personal information from children. If you
        believe a child has provided us with personal information, please
        contact us and we will take appropriate steps to delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we make
        material changes, we will notify you by updating the effective date and
        where appropriate, through in-product or email notice. Continued use of
        our services after an update constitutes acceptance of the revised
        policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "10. Contact us",
    body: (
      <>
        <p>
          For any questions, requests, or concerns about this Privacy Policy or
          your personal information, please reach out to us:
        </p>
        <ul className="mt-3 list-none space-y-1">
          <li>
            Email:{" "}
            <a
              className="text-accent hover:text-accent-dark"
              href="mailto:privacy@lots247.in"
            >
              privacy@lots247.in
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              className="text-accent hover:text-accent-dark"
              href="tel:18004101033"
            >
              1800-410-1033
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      effectiveDate="1 September 2026"
      intro={
        <>
          <p>
            LOTS247 (&ldquo;LOTS247&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo;) is committed to protecting the privacy of the
            individuals and businesses that use our platform, mobile apps,
            APIs, and legal services. This Privacy Policy explains what
            information we collect, how we use and share it, and the choices
            you have.
          </p>
          <p className="mt-4">
            By using LOTS247, you agree to the practices described in this
            policy. If you do not agree, please do not use the services.
          </p>
        </>
      }
      sections={sections}
    />
  );
}
