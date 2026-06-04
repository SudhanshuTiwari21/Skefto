import Link from "next/link";
import { CAPABILITIES, ECOSYSTEM, FAQS, LINKS } from "@/lib/content";
import { Button, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { EcosystemDiagram } from "@/components/visuals";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IndustryTabs } from "@/components/industry-tabs";
import { CapabilitiesBento } from "@/components/capabilities-bento";
import { HeroSection } from "@/components/hero-section";
import { ClosingCta } from "@/components/closing-cta";
import { TrustPartnerSection } from "@/components/trust-partner-section";
import { SecuritySection } from "@/components/security-section";
import { ComplianceDeepDiveSection } from "@/components/compliance-deep-dive-section";
import { FaqSection } from "@/components/faq-section";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";

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
          "Compliance management software for regulated Australian organisations. Track obligations, manage regulatory change, and prove compliance in one Australian-hosted platform aligned to ISO 37301.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "AUD", availability: "https://schema.org/InStock" },
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
          <SecuritySection />
        </Reveal>
        <Reveal>
          <CapabilitiesBento />
        </Reveal>
        <Reveal>
          <ComplianceDeepDiveSection />
        </Reveal>
        <Reveal>
          <Industries />
        </Reveal>
        <Reveal>
          <Ecosystem />
        </Reveal>
        <Reveal>
          <TrustPartnerSection />
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

/* --------------------------- 2 · Trust bar --------------------------- */
function TrustBar() {
  const stats = [
    { v: "20+", k: "years in Australian GRC" },
    { v: "85+", k: "average training NPS" },
    { v: "1,000s", k: "of public sector staff trained" },
    { v: "100%", k: "Australian-hosted & certified" },
  ];
  return (
    <section className="border-y border-ink-900/6 bg-white">
      <Container className="py-10">
        <RevealStagger className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.k}
              className="flex flex-col items-center text-center lg:border-r lg:border-ink-100 lg:last:border-r-0"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                  {s.v}
                </span>
              </p>
              <p className="mt-1.5 max-w-[12rem] text-sm font-medium text-ink-500">
                {s.k}
              </p>
            </div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ----------------------- Industry applications ----------------------- */
function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-ink-950 py-16 text-white sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sector clouds"
          title="CouncilCloud, CareCloud & EducationCloud"
          subtitle="Preconfigured compliance for the sectors Skefto knows best - not a one-size-fits-all offshore template."
          invert
        />
        <div className="mt-8 sm:mt-10">
          <IndustryTabs />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href={LINKS.demo} variant="white" size="lg" showArrow>
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- 7 · GRC ecosystem ----------------------- */
function Ecosystem() {
  return (
    <section id="platform" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="One integrated platform"
              title="Compliance connected to your wider GRC platform"
              subtitle="Link compliance to risk, incidents, and safety without duplicating data - one platform, one source of truth."
              align="left"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ECOSYSTEM.map((e) => {
                const I = Icon[e.icon as IconName];
                return (
                  <Link
                    key={e.title}
                    href={e.href}
                    className="group flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <I className="size-5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-display text-base font-bold text-ink-900">
                        {e.title}
                        <Icon.arrow className="size-4 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </span>
                      <span className="mt-0.5 block text-sm leading-6 text-ink-600">
                        {e.body}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="rounded-3xl border border-ink-900/8 bg-gradient-to-br from-sand-50 to-white p-8 shadow-soft">
            <EcosystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
