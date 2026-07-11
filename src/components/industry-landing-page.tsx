import Link from "next/link";
import type { IndustryPageContent } from "@/lib/industries-content";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";
import { LINKS } from "@/lib/content";
import { BeamButton, Button, Container, SectionHeading } from "@/components/ui";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Icon } from "@/components/icons";

export function IndustryLandingPage({
  page,
}: Readonly<{ page: IndustryPageContent }>) {
  const CheckIcon = Icon.check;

  return (
    <>
      <SiteHeader />
      <div className="animate-page-in min-h-full">
        <main>
          <section className="relative overflow-hidden bg-white pb-12 pt-28 sm:pb-16 sm:pt-32">
            <Container>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {page.eyebrow}
              </p>
              <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                {page.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-ink-600 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BeamButton href={COMPLIANCE_CANONICAL_PATH} fill="brand" size="lg">
                  {page.complianceLinkLabel}
                </BeamButton>
                <Button href={LINKS.demo} variant="secondary" size="lg">
                  Book a demo
                </Button>
              </div>
            </Container>
          </section>

          <section className="border-y border-ink-900/6 bg-sand-50 py-14 sm:py-16">
            <Container>
              <SectionHeading
                eyebrow={page.cloudName}
                title="What regulated teams need from compliance software"
                subtitle="Sector-specific configuration, not a generic one-size-fits-all template."
                align="left"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {page.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <CheckIcon className="size-3" />
                    </span>
                    <span className="text-sm leading-6 text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="py-14 sm:py-16">
            <Container>
              <div className="rounded-3xl border border-ink-800 bg-ink-950 p-8 text-white sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                  Compliance platform
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  See how Skefto handles obligations, audits and evidence
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-300 sm:text-base">
                  The compliance management software page covers workflow, security,
                  sector clouds, implementation and FAQs: everything your team needs
                  to shortlist Skefto for {page.eyebrow.toLowerCase()}.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={COMPLIANCE_CANONICAL_PATH}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-200"
                  >
                    {page.complianceLinkLabel}
                    <Icon.arrow className="size-4" />
                  </Link>
                  <span className="hidden text-ink-600 sm:inline" aria-hidden>
                    ·
                  </span>
                  <Link
                    href={page.relatedIndustryHref}
                    className="text-sm font-semibold text-ink-400 hover:text-white"
                  >
                    Also see {page.relatedIndustryLabel}
                  </Link>
                </div>
              </div>
            </Container>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
