import type { Metadata } from "next";

const SITE = "https://skefto.com";
const PAGE = "/solutions/safety-software/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Safety Software for Modern Regulated Organisations",
  description:
    "Health & safety software for modern regulated organisations. ISO 45001 (AS/NZS ISO 45001 in Australia) hazard reporting, inspections, injuries and WHS registers with regional government-certified onshore hosting.",
  alternates: {
    canonical: PAGE,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: PAGE,
    title: "Safety Software for Modern Regulated Organisations",
    description:
      "Hazards, inspections, injuries and WHS registers in one platform, connected to risk and incidents. Built for regulated organisations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Software for Modern Regulated Organisations | Skefto",
    description:
      "ISO 45001 WHS software with regional government-certified onshore hosting. Connected to risk, incidents and compliance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  keywords: [
    "safety software",
    "health and safety software",
    "WHS software",
    "OHS software",
    "ISO 45001",
    "workplace health and safety software",
    "safety management software australia",
  ],
};

export default function SafetyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
