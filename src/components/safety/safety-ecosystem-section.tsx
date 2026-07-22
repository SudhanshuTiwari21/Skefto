import { ECOSYSTEM } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { EcosystemDiagram } from "@/components/visuals";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

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
            <InViewStagger as="div" step={90} className="mt-8 grid gap-3 sm:grid-cols-2">
              {ECOSYSTEM.map((e, i) => {
                const I = Icon[e.icon as IconName];
                return (
                  <SpotlightCard
                    key={e.title}
                    href={e.href}
                    className="group flex items-start gap-3 rounded-2xl border border-ink-900/8 bg-white p-4 hover:border-brand-200"
                    style={{ ["--i" as string]: i }}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 text-brand-600 transition-colors duration-300 group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white">
                      <I className="size-5" />
                    </span>
                    <span>
                      <span className="flex items-center gap-1 font-display text-base font-bold text-ink-900">
                        {e.title}
                        <Icon.arrow className="size-4 text-ink-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-600" />
                      </span>
                      <span className="mt-0.5 block text-sm leading-6 text-ink-600">{e.body}</span>
                    </span>
                  </SpotlightCard>
                );
              })}
            </InViewStagger>
          </div>
          <div className="rounded-3xl border border-ink-900/8 bg-gradient-to-br from-sand-50 to-white p-8 shadow-soft">
            <EcosystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
