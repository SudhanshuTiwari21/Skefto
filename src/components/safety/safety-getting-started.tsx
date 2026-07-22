import { GETTING_STARTED, GO_LIVE_PULL_QUOTE, LINKS } from "@/lib/safety-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { CountUp, InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

export function SafetyGettingStarted() {
  return (
    <section id="getting-started" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-ink-900/8 bg-gradient-to-br from-brand-50/40 via-white to-accent-50/30 p-8 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Getting started"
              title="Live in weeks, not a multi-year EHS programme"
              subtitle="Sector templates and guided onboarding get WHS teams reporting hazards and closing actions quickly."
              align="left"
            />
            <InViewStagger as="ol" step={120} className="relative mt-8">
              {/* animated progress rail */}
              <span
                aria-hidden
                className="absolute left-[13px] top-2 bottom-2 w-px bg-ink-200"
              />
              <span
                aria-hidden
                className="timeline-line absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-accent-500 to-brand-400"
              />
              {GETTING_STARTED.map((step, i) => (
                <li
                  key={step.title}
                  style={{ ["--i" as string]: i }}
                  className="relative flex items-start gap-4 pb-6 last:pb-0"
                >
                  <span className="relative z-10 mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-brand-200 bg-white font-mono text-[11px] font-bold text-brand-700 shadow-sm">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="font-display text-sm font-bold text-ink-900">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-6 text-ink-600">{step.body}</p>
                  </div>
                </li>
              ))}
            </InViewStagger>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BeamButton href={LINKS.demo} fill="brand" size="lg">
                Book a demo
              </BeamButton>
              <BeamButton href={LINKS.contact} fill="ink" size="lg">
                Talk to us
              </BeamButton>
            </div>
          </div>

          <SpotlightCard className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Typical timeline
            </p>
            <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-600">
              <CountUp value={4} />
              <span className="text-ink-300">-</span>
              <CountUp value={8} /> weeks
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-600">{GO_LIVE_PULL_QUOTE}</p>
            <ul className="mt-6 space-y-2">
              {[
                "Sector checklists and hazard templates",
                "Role-based access for sensitive injury records",
                "Supervisor and WHS team enablement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                  <Icon.check className="mt-0.5 size-4 shrink-0 text-brand-600" />
                  {item}
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </Container>
    </section>
  );
}
