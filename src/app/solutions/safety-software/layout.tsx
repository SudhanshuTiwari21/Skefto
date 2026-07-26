import type { Metadata } from "next";

const SITE = "https://skefto.com";
const PAGE = "/solutions/safety-software/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "WHS Software for Australian Councils, Schools & Care Providers",
  description:
    "WHS software for Australian regulated organisations. ISO 45001 (AS/NZS ISO 45001 in Australia) hazard reporting, mobile inspections, injuries and safety registers with Australian government-certified data centres.",
  alternates: {
    canonical: PAGE,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: PAGE,
    title: "WHS Software for Australian Councils, Schools & Care Providers",
    description:
      "Hazards, inspections, injuries and WHS registers in one platform, connected to risk and incidents. Built for Australian regulated organisations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHS Software for Australian Regulated Organisations | Skefto",
    description:
      "ISO 45001 WHS software with Australian government-certified data centres. Mobile field capture connected to risk, incidents and compliance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  keywords: [
    "WHS software",
    "WHS software Australia",
    "safety software for local government",
    "ISO 45001 software Australia",
    "council WHS system",
    "health and safety software",
    "OHS software",
  ],
};

export default function SafetyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
