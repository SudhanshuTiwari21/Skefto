import {
  INDUSTRIES_INTRO,
  ISO_CERTIFIED_PHRASE,
  LINKS,
  TRUST_BAR_STATS,
} from "@/lib/content";
import { Button, Container, SectionHeading } from "@/components/ui";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IndustryTabs } from "@/components/industry-tabs";
import { HeroSection } from "@/components/hero-section";
import { ClosingCta } from "@/components/closing-cta";
import { TrustPartnerSection } from "@/components/trust-partner-section";
import { SecuritySection } from "@/components/security-section";
import { CapabilitiesBento } from "@/components/capabilities-bento";
import { ComplianceDeepDiveSection } from "@/components/compliance-deep-dive-section";
import { ProductOverviewSection } from "@/components/product-overview-section";
import { PlatformSection } from "@/components/platform-section";
import { MoreThanSoftwareSection } from "@/components/more-than-software-section";
import { GettingStartedSection } from "@/components/getting-started-section";
import { FaqSection } from "@/components/faq-section";
import { Reveal, RevealStagger } from "@/components/scroll-reveal";
import { IsoCertificationMarks } from "@/components/iso-certification-marks";

export function ComplianceLandingPage() {
  return (
    <>
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
            <MoreThanSoftwareSection />
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
        <RevealStagger className="grid items-center gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_BAR_STATS.map((stat) => (
            <div
              key={stat.k}
              className="flex flex-col items-center text-center lg:border-r lg:border-ink-100"
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
                  {stat.v}
                </span>
              </p>
              <p className="mt-1.5 max-w-[14rem] text-sm font-medium text-ink-500">
                {stat.k}
              </p>
            </div>
          ))}
          <div className="flex flex-col items-center text-center">
            <IsoCertificationMarks size="sm" />
            <p className="mt-3 text-sm font-medium text-ink-500">
              {ISO_CERTIFIED_PHRASE}
            </p>
          </div>
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
        <div className="mt-8 flex justify-center">
          <Button href={LINKS.demo} variant="white" size="lg" showArrow>
            Book a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
