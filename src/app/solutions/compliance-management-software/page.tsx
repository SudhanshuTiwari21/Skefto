import type { Metadata } from "next";
import { CAPABILITIES, FAQS } from "@/lib/content";
import { ComplianceLandingPage } from "@/components/compliance-landing-page";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";

const SITE = "https://skefto.com";
const PAGE = `${SITE}${COMPLIANCE_CANONICAL_PATH}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Compliance Management Software for Regulated Organisations | Skefto",
    template: "%s | Skefto",
  },
  description:
    "Track obligations, manage regulatory change, and prove compliance on a sovereign-ready platform. Built for government, education, healthcare and regulated industries. ISO 27001 & 37301 certified.",
  applicationName: "Skefto",
  authors: [{ name: "Skefto" }],
  keywords: [
    "compliance management software",
    "compliance management software australia",
    "regulatory compliance software",
    "compliance tracking software",
    "obligations register",
    "ISO 37301",
    "GRC software australia",
  ],
  alternates: {
    canonical: COMPLIANCE_CANONICAL_PATH,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: COMPLIANCE_CANONICAL_PATH,
    title: "Compliance Management Software for Regulated Organisations",
    description:
      "One sovereign-ready platform to track obligations, manage regulatory change, and prove compliance. Built for government, education, healthcare and regulated industries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance Management Software for Regulated Organisations | Skefto",
    description:
      "Track obligations, manage regulatory change, and prove compliance on a sovereign-ready platform. ISO 27001 & 37301 certified.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Governance, Risk & Compliance Software",
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE}/#organization`,
        name: "Skefto",
        url: SITE,
        logo: `${SITE}/skefto-logo.svg`,
        sameAs: [
          "https://www.linkedin.com/company/skefto",
          "https://www.facebook.com/skeftosolutions/",
          "https://x.com/skefto_grc",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Skefto Compliance Management Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: PAGE,
        description:
          "Compliance management software for regulated organisations. Track obligations, regulatory change, audits and evidence on a sovereign-ready platform. ISO 27001 & 37301 certified. Trusted by government, education and care providers.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        provider: { "@id": `${SITE}/#organization` },
        featureList: CAPABILITIES.map((c) => c.eyebrow),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: SITE + "/solutions/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Compliance Management Software",
            item: PAGE,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default function ComplianceManagementSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <ComplianceLandingPage />
    </>
  );
}
