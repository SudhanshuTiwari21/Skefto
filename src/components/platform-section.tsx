import Link from "next/link";
import { ECOSYSTEM, LINKS, WHY_CHOOSE_SKEFTO } from "@/lib/content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { EcosystemDiagram } from "@/components/visuals";

const auditDifferentiator =
  WHY_CHOOSE_SKEFTO.find((item) => item.title.startsWith("Audit-ready")) ??
  WHY_CHOOSE_SKEFTO[2]!;

export function PlatformSection() {
  const ArrowIcon = Icon.arrow;

  return (
    <section id="platform" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Connected GRC platform"
              title="Compliance linked to risk, incidents, and assurance"
              subtitle="One platform — not a point solution. Compliance data flows to risk registers, incident management, safety, and strategic reporting without duplicate entry."
              align="left"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ECOSYSTEM.map((e) => {
                const I = Icon[e.icon];
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
                        <ArrowIcon className="size-4 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </span>
                      <span className="mt-0.5 block text-sm leading-6 text-ink-600">
                        {e.body}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <p className="mt-6 text-sm leading-7 text-ink-600">
              <span className="font-semibold text-ink-900">{auditDifferentiator.title}.</span>{" "}
              {auditDifferentiator.body}
            </p>
          </div>
          <div className="rounded-3xl border border-ink-900/8 bg-gradient-to-br from-sand-50 to-white p-6 shadow-soft sm:p-8">
            <EcosystemDiagram />
            <p className="mt-4 text-center text-xs text-ink-500">
              Explore the wider{" "}
              <Link href={LINKS.grcGuide} className="font-semibold text-brand-700 hover:underline">
                GRC platform
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
