import type { Metadata } from "next";

const SITE = "https://skefto.com";
const PAGE = "/solutions/risk-management-software/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Risk Management Software for Modern Regulated Organisations",
  description:
    "Risk management software for modern regulated organisations. ISO 31000 (AS/ISO 31000 in Australia) risk register, heat maps, treatment workflows and board reporting with regional government-certified onshore hosting.",
  alternates: {
    canonical: PAGE,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: PAGE,
    title: "Risk Management Software for Modern Regulated Organisations",
    description:
      "From spreadsheets to a single source of truth. Risk register, assessment, treatment and board reporting in one onshore-hosted platform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Risk Management Software for Modern Regulated Organisations | Skefto",
    description:
      "ISO 31000 risk management software with regional government-certified onshore hosting. Built by practitioners for regulated organisations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  keywords: [
    "risk management software",
    "risk management software australia",
    "risk register software",
    "ISO 31000",
    "AS ISO 31000",
    "operational risk management",
    "GRC software",
  ],
};

export default function RiskLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
