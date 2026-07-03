import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industry-landing-page";
import {
  INDUSTRY_PAGE_BY_SLUG,
  INDUSTRY_PAGES,
  type IndustrySlug,
} from "@/lib/industries-content";
import { LINKS } from "@/lib/content";

const SITE = "https://skefto.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return INDUSTRY_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = INDUSTRY_PAGE_BY_SLUG[slug as IndustrySlug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: "Skefto",
      url: page.path,
      title: page.title,
      description: page.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

function jsonLd(page: (typeof INDUSTRY_PAGES)[number]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.title,
        description: page.metaDescription,
        url: `${SITE}${page.path}`,
        isPartOf: { "@id": `${SITE}/#website` },
        about: {
          "@type": "SoftwareApplication",
          name: "Skefto Compliance Management Software",
          url: `${SITE}${LINKS.solutions.compliance}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries/` },
          { "@type": "ListItem", position: 3, name: page.eyebrow, item: `${SITE}${page.path}` },
        ],
      },
    ],
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = INDUSTRY_PAGE_BY_SLUG[slug as IndustrySlug];
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(page)) }}
      />
      <IndustryLandingPage page={page} />
    </>
  );
}
