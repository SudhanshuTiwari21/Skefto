import type { Metadata } from "next";

const SITE = "https://skefto.com";
const PAGE = "/solutions/risk-management-software/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Risk Management Software for Australian Organisations",
  description:
    "Enterprise risk management software for regulated Australian organisations. AS/ISO 31000 aligned risk register, heat maps, treatment workflows and board reporting - hosted in Australia.",
  alternates: {
    canonical: PAGE,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: PAGE,
    title: "Risk Management Software for Regulated Australian Organisations",
    description:
      "From spreadsheets to a single source of truth. Risk register, assessment, treatment and board reporting in one Australian-hosted platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Management Software for Australian Organisations | Skefto",
    description:
      "AS/ISO 31000 aligned risk management software with Australian data residency. Built by practitioners for councils, government, education and care.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  keywords: [
    "risk management software",
    "risk management software australia",
    "enterprise risk management software",
    "AS ISO 31000",
    "risk register software",
    "GRC software australia",
  ],
};

export default function RiskLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
