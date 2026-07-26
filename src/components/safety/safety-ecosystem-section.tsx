import { ECOSYSTEM } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { EcosystemDiagram } from "@/components/visuals";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

/** Merged ecosystem + connected GRC (single mid/late-funnel exit block) */
export function SafetyEcosystemSection() {
  return (
    <section id="platform" className="scroll-mt-20 border-y border-ink-900/6 bg-sand-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Connected GRC"
          title="Safety, risk and compliance on one connected platform"
          subtitle="Workplace hazards should feed enterprise risk. Incidents should update controls. Safety obligations should sit beside your compliance register."
        />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <InViewStagger as="div" step={90} className="grid gap-3 sm:grid-cols-2">
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
          <div className="rounded-3xl border border-ink-900/8 bg-white p-8 shadow-soft">
            <EcosystemDiagram />
          </div>
        </div>
      </Container>
    </section>
  );
}
