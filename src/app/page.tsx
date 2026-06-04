import Link from "next/link";
import {
  CAPABILITIES,
  ECOSYSTEM,
  FAQS,
  LINKS,
  OBLIGATION_BULLETS,
} from "@/lib/content";
import {
  Button,
  Container,
  InlineLink,
  SectionHeading,
} from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import {
  CalendarMockup,
  EcosystemDiagram,
  RegisterMockup,
} from "@/components/visuals";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IndustryTabs } from "@/components/industry-tabs";
import { CapabilitiesBento } from "@/components/capabilities-bento";
import { HeroSection } from "@/components/hero-section";
import { RegulatorySection } from "@/components/regulatory-section";
import { ClosingCta } from "@/components/closing-cta";
import { WhySkeftoSection } from "@/components/why-skefto-section";
import { SocialProofSection } from "@/components/social-proof-section";
import { SecuritySection } from "@/components/security-section";
import { ProductOverviewSection } from "@/components/product-overview-section";
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
          <ObligationsCalendar />
        </Reveal>
        <Reveal>
          <ProductOverviewSection />
        </Reveal>
        <Reveal>
          <RegulatorySection />
        </Reveal>
        <Reveal>
          <Industries />
        </Reveal>
        <Reveal>
          <Ecosystem />
        </Reveal>
        <Reveal>
          <WhySkeftoSection />
        </Reveal>
        <Reveal>
          <SocialProofSection />
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

/* ------------------- 4 · Obligations & calendar ------------------- */
function ObligationsCalendar() {
  return (
    <section id="obligations" className="scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Obligations & deadlines"
          title="Track every obligation and deadline automatically"
          subtitle="Know what is due, who owns it, and what evidence proves it - at any moment."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <RegisterMockup />
          <div>
            <h3 className="font-display text-xl font-bold text-ink-900">
              A single obligations register
            </h3>
            <p className="mt-3 text-pretty leading-7 text-ink-600">
              Centralise federal, state, and sector obligations in one register.
              Assign accountable owners and link each obligation to its supporting
              controls and evidence.
            </p>
            <ul className="mt-6 grid gap-3">
              {OBLIGATION_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Icon.check className="size-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <CalendarMockup />
          </div>
          <div className="lg:order-1">
            <h3 className="font-display text-xl font-bold text-ink-900">
              A live compliance calendar
            </h3>
            <p className="mt-3 text-pretty leading-7 text-ink-600">
              Turn recurring obligations into a live calendar. Automated reminders
              and escalations mean nothing slips through the cracks - from privacy
              attestations to WHS audits and policy reviews.
            </p>
            <p className="mt-6">
              <InlineLink href={LINKS.demo}>
                See it in a live demo
                <Icon.arrow className="size-4" />
              </InlineLink>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- 6 · Industry applications ----------------------- */
function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-ink-950 py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Built for your sector"
          title="Compliance built for your sector"
          subtitle="Preconfigured for the obligations and standards that apply to councils, government, care providers, and education."
          invert
        />
        <div className="mt-14">
          <IndustryTabs />
        </div>
        <div className="mt-12 flex justify-center">
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
