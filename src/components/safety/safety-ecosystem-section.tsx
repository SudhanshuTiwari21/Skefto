import Link from "next/link";
import { ECOSYSTEM } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { EcosystemDiagram } from "@/components/visuals";

export function SafetyEcosystemSection() {
  return (
    <section id="platform" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="One integrated platform"
              title="Safety connected to risk, incidents and compliance"
              subtitle="WHS is not an island. Skefto links hazards and injuries to your risk register, incident workflows and compliance obligations."
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
                      <span className="mt-0.5 block text-sm leading-6 text-ink-600">{e.body}</span>
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
