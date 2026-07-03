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
    default: "Skefto | Governance, Risk & Compliance Software",
    template: "%s | Skefto",
  },
  description:
    "Governance, risk and compliance software for regulated organisations. Australian-built platform for councils, government, education and care providers.",
  applicationName: "Skefto",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Skefto",
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
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
