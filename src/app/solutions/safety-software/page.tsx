import { CAPABILITIES, FAQS, TRUST_STATS } from "@/lib/safety-content";
import { Container } from "@/components/ui";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { CountUp } from "@/components/safety/safety-motion";
import { SafetyHeroSection } from "@/components/safety/safety-hero-section";
import { SafetyPainSection } from "@/components/safety/safety-pain-section";
import { SafetyEarlyTestimonial } from "@/components/safety/safety-early-testimonial";
import { SafetyCapabilitiesBento } from "@/components/safety/safety-capabilities-bento";
import { SafetyTypesSection } from "@/components/safety/safety-types-section";
import { SafetyDeepDiveSection } from "@/components/safety/safety-deep-dive-section";
import { SafetyTrustSection } from "@/components/safety/safety-trust-section";
import { SafetySectorTabs } from "@/components/safety/safety-sector-tabs";
import { SafetyEcosystemSection } from "@/components/safety/safety-ecosystem-section";
import { SafetyGrcHandoff } from "@/components/safety/safety-grc-handoff";
import { SafetyGettingStarted } from "@/components/safety/safety-getting-started";
import { SafetyFaqSection } from "@/components/safety/safety-faq-section";
import { SafetyClosingCta } from "@/components/safety/safety-closing-cta";

const SITE = "https://skefto.com";
const PAGE = `${SITE}/solutions/safety-software/`;

const SAFETY_NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Workflow", href: "#safety-workflow" },
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
        name: "Skefto Health & Safety Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: PAGE,
        description:
          "Safety software for modern regulated organisations. Hazard reporting, inspections, injuries, WHS registers and corrective actions on an onshore-hosted platform built around ISO 45001 (AS/NZS ISO 45001 in Australia).",
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
          areaServed: ["AU", "Worldwide"],
        },
        featureList: CAPABILITIES.map((c) => c.title),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: SITE + "/solutions/" },
          { "@type": "ListItem", position: 3, name: "Safety Software", item: PAGE },
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
          {TRUST_STATS.map((s) => {
            const leading = /^\d+/.exec(s.v);
            const num = leading ? Number(leading[0]) : null;
            const suffix = leading ? s.v.slice(leading[0].length) : "";
            return (
              <div
                key={s.k}
                className="group flex flex-col items-center text-center lg:border-r lg:border-ink-100 lg:last:border-r-0"
              >
                <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                  <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                    {num !== null ? <CountUp value={num} suffix={suffix} /> : s.v}
                  </span>
                </p>
                <p className="mt-1.5 max-w-[12rem] text-sm font-medium text-ink-500">{s.k}</p>
              </div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}

/**
 * Messaging hierarchy:
 * What is Skefto → Can I trust it → Can it solve my problem →
 * Why Skefto → Will it work for my org → How do I buy
 */
export default function SafetySoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <SiteHeader nav={SAFETY_NAV} />
      <div className="animate-page-in min-h-full">
        <main className="overflow-x-clip">
          <SafetyHeroSection />
          <Reveal>
            <TrustBar />
          </Reveal>
          <Reveal>
            <SafetyPainSection />
          </Reveal>
          <Reveal>
            <SafetyEarlyTestimonial />
          </Reveal>
          <Reveal>
            <SafetyCapabilitiesBento />
          </Reveal>
          <Reveal>
            <SafetyTypesSection />
          </Reveal>
          <Reveal>
            <SafetyDeepDiveSection />
          </Reveal>
          <Reveal>
            <SafetyTrustSection />
          </Reveal>
          <Reveal>
            <SafetySectorTabs />
          </Reveal>
          <Reveal>
            <SafetyEcosystemSection />
          </Reveal>
          <Reveal>
            <SafetyGrcHandoff />
          </Reveal>
          <Reveal>
            <SafetyGettingStarted />
          </Reveal>
          <Reveal>
            <SafetyFaqSection />
          </Reveal>
          <Reveal>
            <SafetyClosingCta />
          </Reveal>
        </main>
        <Reveal>
          <SiteFooter />
        </Reveal>
      </div>
    </>
  );
}
