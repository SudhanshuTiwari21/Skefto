import Link from "next/link";
import {
  CAPABILITIES,
  CASE_STUDY,
  ECOSYSTEM,
  FAQS,
  LINKS,
  OBLIGATION_BULLETS,
  SECURITY,
  TESTIMONIALS,
  WHY_SKEFTO,
} from "@/lib/content";
import {
  Button,
  Container,
  InlineLink,
  SectionHeading,
  ShimmerButton,
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
import { Faq } from "@/components/faq";
import { CapabilitiesBento } from "@/components/capabilities-bento";
import { HeroSection } from "@/components/hero-section";
import { RegulatorySection } from "@/components/regulatory-section";
import { ClosingCta } from "@/components/closing-cta";
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
          <CapabilitiesBento />
        </Reveal>
        <Reveal>
          <ObligationsCalendar />
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
          <WhySkefto />
        </Reveal>
        <Reveal>
          <SocialProof />
        </Reveal>
        <Reveal>
          <Security />
        </Reveal>
        <Reveal>
          <DemoFaq />
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

/* ----------------------- 8 · Why Skefto ----------------------- */
function WhySkefto() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Skefto"
          title="More than software - a compliance partner"
          subtitle="Software, advisory, and training from a team with 20+ years in Australian governance, risk, and compliance."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {WHY_SKEFTO.map((w) => {
            const I = Icon[w.icon as IconName];
            return (
              <div
                key={w.title}
                className="flex flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-600 text-white">
                  <I className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {w.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty leading-7 text-ink-600">
                  {w.body}
                </p>
                {w.href ? (
                  <p className="mt-4">
                    <InlineLink href={w.href}>
                      {w.linkLabel}
                      <Icon.arrow className="size-4" />
                    </InlineLink>
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href={LINKS.contact} variant="secondary" size="lg">
            Talk to our team
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- 9 · Social proof ----------------------- */
function SocialProof() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by organisations that take compliance seriously"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.org}
              className="flex flex-col rounded-2xl border border-ink-900/8 bg-white p-7 shadow-soft"
            >
              <div className="flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.spark key={i} className="size-4" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-lg leading-8 text-ink-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-ink-900">{t.name}</span>
                <span className="block text-ink-500">{t.org}</span>
              </figcaption>
            </figure>
          ))}

          {/* mini case study */}
          <div className="flex flex-col rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-7 text-white shadow-card">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
              {CASE_STUDY.eyebrow}
            </span>
            <h3 className="mt-3 font-display text-xl font-bold">
              {CASE_STUDY.headline}
            </h3>
            <dl className="mt-5 flex-1 space-y-3 text-sm leading-6 text-ink-200">
              <div>
                <dt className="font-semibold text-white">Challenge</dt>
                <dd>{CASE_STUDY.challenge}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Solution</dt>
                <dd>{CASE_STUDY.solution}</dd>
              </div>
            </dl>
            <div className="mt-5 rounded-xl bg-white/10 p-4">
              <p className="font-display text-2xl font-bold text-brand-300">
                {CASE_STUDY.result}
              </p>
            </div>
            <Link
              href={CASE_STUDY.href}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white"
            >
              See local government solutions
              <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------- 10 · Data sovereignty ----------------------- */
function Security() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Data sovereignty & security"
          title="Your compliance data stays in Australia"
          subtitle="Government-certified hosting and enterprise-grade security by default."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SECURITY.map((s) => {
            const I = Icon[s.icon as IconName];
            return (
              <div
                key={s.title}
                className="rounded-2xl border border-ink-900/8 bg-white p-7 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <I className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-pretty leading-7 text-ink-600">{s.body}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-ink-500">
          Read more about how we protect your information in our{" "}
          <InlineLink href={LINKS.privacy}>data handling and privacy policy</InlineLink>.
        </p>
      </Container>
    </section>
  );
}

/* ----------------------- 11 · Demo video + FAQ ----------------------- */
function DemoFaq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="See it in action"
          title="See Skefto compliance software in action"
          subtitle="Watch a short overview, then explore common questions."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* video */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="group relative aspect-video overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-br from-ink-900 to-ink-700 shadow-card">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <button
                  type="button"
                  className="grid size-16 place-items-center rounded-full bg-white/95 text-brand-700 shadow-glow transition-transform hover:scale-105"
                  aria-label="Play product overview"
                >
                  <Icon.play className="size-8" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-sm font-semibold">
                  Product overview · 2 min
                </span>
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur">
                  Skefto Compliance
                </span>
              </div>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button href={LINKS.demo} variant="primary" size="lg" showArrow>
                Book a demo
              </Button>
            </div>
          </div>

          {/* faq */}
          <Faq />
        </div>
      </Container>
    </section>
  );
}

