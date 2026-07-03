import Link from "next/link";
import { COMPLIANCE_CANONICAL_PATH } from "@/lib/industries-content";
import { LINKS } from "@/lib/content";
import { BeamButton, Container } from "@/components/ui";
import { Icon } from "@/components/icons";

export function RiskComplianceHandoff() {
  return (
    <section
      id="compliance-handoff"
      className="scroll-mt-20 border-y border-ink-900/6 bg-sand-50 py-14 sm:py-16"
    >
      <Container>
        <div className="grid items-center gap-8 rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft lg:grid-cols-[1.2fr_auto] lg:gap-12 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              Connected compliance
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Risk and compliance on one Australian platform
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-ink-600 sm:text-base">
              Enterprise risk does not sit in isolation. Skefto links your risk
              register to obligations registers, regulatory change, policy
              governance, audits and evidence — so boards see risk and compliance
              posture in one connected workflow.
            </p>
            <Link
              href={COMPLIANCE_CANONICAL_PATH}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Explore compliance management software
              <Icon.arrow className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:min-w-[220px]">
            <BeamButton href={COMPLIANCE_CANONICAL_PATH} fill="brand" size="lg">
              Compliance software
            </BeamButton>
            <Link
              href={LINKS.demo}
              className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 px-6 text-center text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
