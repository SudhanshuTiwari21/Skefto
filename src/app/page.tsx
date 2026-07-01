import Link from "next/link";
import { CAPABILITIES, FAQS, INDUSTRIES_INTRO, LINKS, OTHER_COMPLIANCE_FUNCTIONS } from "@/lib/content";
import { Button, Container, SectionHeading } from "@/components/ui";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IndustryTabs } from "@/components/industry-tabs";
import { HeroSection } from "@/components/hero-section";
import { ClosingCta } from "@/components/closing-cta";
import { TrustPartnerSection } from "@/components/trust-partner-section";
import { SecuritySection } from "@/components/security-section";
import { ComplianceDeepDiveSection } from "@/components/compliance-deep-dive-section";
import { ProductOverviewSection } from "@/components/product-overview-section";
import { PlatformSection } from "@/components/platform-section";
import { GettingStartedSection } from "@/components/getting-started-section";
import { FaqSection } from "@/components/faq-section";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { TRUST_BAR_STATS } from "@/lib/content";

const SITE = "https://skefto.com";
const PAGE = `${SITE}/solutions/compliance-management-software/`;

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Skefto Compliance Management Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: PAGE,
        description:
          "Compliance management software for regulated organisations. Track obligations, regulatory change, audits and evidence on a sovereign-ready platform aligned to ISO 37301 — trusted by government, education and care providers worldwide.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        provider: {
          "@type": "Organization",
          name: "Skefto",
          url: SITE,
          areaServed: ["AU", "Worldwide"],
        },
        featureList: CAPABILITIES.map((c) => c.title),
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <SiteHeader />
      <div className="animate-page-in min-h-full">
        <main className="overflow-x-clip">
          <HeroSection />
          <Reveal>
            <TrustBar />
          </Reveal>
          <Reveal>
            <ComplianceDeepDiveSection />
          </Reveal>
          <Reveal>
            <SecuritySection />
          </Reveal>
          <Reveal>
            <Industries />
          </Reveal>
          <Reveal>
            <PlatformSection />
          </Reveal>
          <Reveal>
            <ProductOverviewSection />
          </Reveal>
          <Reveal>
            <TrustPartnerSection />
          </Reveal>
          <Reveal>
            <GettingStartedSection />
          </Reveal>
          <Reveal>
            <FaqSection />
          </Reveal>
          <Reveal>
            <ClosingCta />
          </Reveal>
        </main>
        <Reveal>
          <SiteFooter />
        </Reveal>
      </div>
    </>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-ink-900/6 bg-white">
      <Container className="py-8">
        <RevealStagger className="grid gap-y-6 sm:grid-cols-2">
          {TRUST_BAR_STATS.map((s) => (
            <div
              key={s.k}
              className="flex flex-col items-center text-center sm:border-r sm:border-ink-100 sm:last:border-r-0"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                  {s.v}
                </span>
              </p>
              <p className="mt-1.5 max-w-[14rem] text-sm font-medium text-ink-500">{s.k}</p>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-ink-950 py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sector clouds"
          title="GovCloud, CareCloud & EducationCloud"
          subtitle={INDUSTRIES_INTRO}
          invert
        />
        <div className="mt-8 sm:mt-10">
          <IndustryTabs />
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-ink-400">
          Plus many other compliance solutions including {OTHER_COMPLIANCE_FUNCTIONS.join(", ")}.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={LINKS.demo} variant="white" size="lg" showArrow>
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
