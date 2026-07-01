import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const SITE = "https://skefto.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Compliance Management Software for Regulated Organisations | Skefto",
    template: "%s | Skefto",
  },
  description:
    "Track obligations, manage regulatory change, and prove compliance on a sovereign-ready platform. Built for government, education, healthcare and regulated industries worldwide. ISO 37301 aligned.",
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
    canonical: "/solutions/compliance-management-software/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: "/solutions/compliance-management-software/",
    title: "Compliance Management Software for Regulated Organisations",
    description:
      "One sovereign-ready platform to track obligations, manage regulatory change, and prove compliance. Built for government, education, healthcare and regulated industries worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compliance Management Software for Regulated Organisations | Skefto",
    description:
      "Track obligations, manage regulatory change, and prove compliance on a sovereign-ready platform aligned to ISO 37301.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Governance, Risk & Compliance Software",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-ink-900">{children}</body>
    </html>
  );
}
