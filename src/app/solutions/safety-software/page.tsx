import { CAPABILITIES, FAQS, TRUST_STATS } from "@/lib/safety-content";
import { Container } from "@/components/ui";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { SafetyHeroSection } from "@/components/safety/safety-hero-section";
import { SafetyPainSection } from "@/components/safety/safety-pain-section";
import { SafetyEarlyTestimonial } from "@/components/safety/safety-early-testimonial";
import { SafetyCapabilitiesBento } from "@/components/safety/safety-capabilities-bento";
import { SafetyDeepDiveSection } from "@/components/safety/safety-deep-dive-section";
import { SafetyFieldSection } from "@/components/safety/safety-field-section";
import { SafetyTrustSection } from "@/components/safety/safety-trust-section";
import { SafetySectorTabs } from "@/components/safety/safety-sector-tabs";
import { SafetyEcosystemSection } from "@/components/safety/safety-ecosystem-section";
import { SafetyGettingStarted } from "@/components/safety/safety-getting-started";
import { SafetyFaqSection } from "@/components/safety/safety-faq-section";
import { SafetyClosingCta } from "@/components/safety/safety-closing-cta";

const SITE = "https://skefto.com";
const PAGE = `${SITE}/solutions/safety-software/`;

const SAFETY_NAV = [
  { label: "Sectors", href: "#sectors" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Field", href: "#field" },
  { label: "Why Skefto", href: "#why-skefto" },
  { label: "FAQ", href: "#faq" },
];

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Skefto WHS Software",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        url: PAGE,
        description:
          "WHS software for Australian councils, schools and care providers. Hazard reporting, mobile inspections, injuries and safety registers on Australian government-certified data centres, built around ISO 45001 (AS/NZS ISO 45001 in Australia).",
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
          { "@type": "ListItem", position: 3, name: "WHS Software", item: PAGE },
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

/** Static stats: final numbers always in HTML (no crawler-facing zeros). */
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

/**
 * Messaging hierarchy (audit v1.1):
 * What is it → Trust → Is it for my sector → Problem fit → Capabilities →
 * Field proof → Why Skefto → Buy → FAQ → Connected GRC exits
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
            <SafetySectorTabs />
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
            <SafetyDeepDiveSection />
          </Reveal>
          <Reveal>
            <SafetyFieldSection />
          </Reveal>
          <Reveal>
            <SafetyTrustSection />
          </Reveal>
          <Reveal>
            <SafetyGettingStarted />
          </Reveal>
          <Reveal>
            <SafetyFaqSection />
          </Reveal>
          <Reveal>
            <SafetyEcosystemSection />
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
