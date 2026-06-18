import { CAPABILITIES, FAQS, TRUST_STATS } from "@/lib/risk-content";
import { Container } from "@/components/ui";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { RiskHeroSection } from "@/components/risk/risk-hero-section";
import { RiskPainSection } from "@/components/risk/risk-pain-section";
import { RiskCapabilitiesBento } from "@/components/risk/risk-capabilities-bento";
import { RiskDeepDiveSection } from "@/components/risk/risk-deep-dive-section";
import { RiskGenAiSection } from "@/components/risk/risk-genai-section";
import { RiskProductOverviewSection } from "@/components/risk/risk-product-overview-section";
import { RiskSectorTabs } from "@/components/risk/risk-sector-tabs";
import { RiskEcosystemSection } from "@/components/risk/risk-ecosystem-section";
import { RiskTrustSection } from "@/components/risk/risk-trust-section";
import { RiskMatSection } from "@/components/risk/riskmat-section";
import { RiskFaqSection } from "@/components/risk/risk-faq-section";
import { RiskClosingCta } from "@/components/risk/risk-closing-cta";

const SITE = "https://skefto.com";
const PAGE = `${SITE}/solutions/risk-management-software/`;

const RISK_NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Workflow", href: "#risk-workflow" },
  { label: "AI", href: "#ai-compliance" },
  { label: "Sectors", href: "#sectors" },
  { label: "Why Skefto", href: "#why-skefto" },
  { label: "FAQ", href: "#faq" },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Skefto Risk Management Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: PAGE,
        description:
          "Risk management software for regulated Australian organisations. Enterprise risk register, heat maps, treatment workflows and board reporting in one Australian-hosted platform aligned to AS/ISO 31000.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
        },
        provider: {
          "@type": "Organization",
          name: "Skefto",
          url: SITE,
          areaServed: "AU",
        },
        featureList: CAPABILITIES.map((c) => c.title),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: SITE + "/solutions/" },
          { "@type": "ListItem", position: 3, name: "Risk Management Software", item: PAGE },
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

function TrustBar() {
  return (
    <section className="border-y border-ink-900/6 bg-white">
      <Container className="py-10">
        <RevealStagger className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((s) => (
            <div
              key={s.k}
              className="flex flex-col items-center text-center lg:border-r lg:border-ink-100 lg:last:border-r-0"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                  {s.v}
                </span>
              </p>
              <p className="mt-1.5 max-w-[12rem] text-sm font-medium text-ink-500">{s.k}</p>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

export default function RiskManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <SiteHeader nav={RISK_NAV} />
      <div className="animate-page-in min-h-full">
        <main className="overflow-x-clip">
          <RiskHeroSection />
          <Reveal>
            <TrustBar />
          </Reveal>
          <Reveal>
            <RiskPainSection />
          </Reveal>
          <Reveal>
            <RiskCapabilitiesBento />
          </Reveal>
          <Reveal>
            <RiskDeepDiveSection />
          </Reveal>
          <Reveal>
            <RiskGenAiSection />
          </Reveal>
          <Reveal>
            <RiskProductOverviewSection />
          </Reveal>
          <Reveal>
            <RiskSectorTabs />
          </Reveal>
          <Reveal>
            <RiskEcosystemSection />
          </Reveal>
          <Reveal>
            <RiskTrustSection />
          </Reveal>
          <Reveal>
            <RiskMatSection />
          </Reveal>
          <Reveal>
            <RiskFaqSection />
          </Reveal>
          <Reveal>
            <RiskClosingCta />
          </Reveal>
        </main>
        <Reveal>
          <SiteFooter />
        </Reveal>
      </div>
    </>
  );
}
