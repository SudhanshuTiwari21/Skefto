import { PAIN_POINTS } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

export function SafetyPainSection() {
  return (
    <section className="relative overflow-hidden border-y border-ink-900/6 bg-white py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.14]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why teams switch"
          title="Three problems every WHS team faces. One platform that solves them."
          subtitle="Safety teams outgrow checklists and shared drives long before boards outgrow their due diligence expectations."
        />
        <InViewStagger
          as="div"
          step={120}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {PAIN_POINTS.map((p, i) => {
            const I = Icon[p.icon as IconName];
            return (
              <div key={p.n} style={{ ["--i" as string]: i }}>
                <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-b from-white to-sand-50/70 p-6 sm:p-7">
                  {/* oversized ghost numeral */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[6rem] font-extrabold leading-none text-ink-900/[0.035] transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-600/[0.06]"
                  >
                    {p.n}
                  </span>

                  <div className="relative flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-xl bg-ink-900 text-white shadow-soft transition-colors duration-300 group-hover:bg-brand-600">
                      <I className="size-5" />
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-[0.24em] text-brand-600">
                      {p.n}
                    </span>
                  </div>

                  <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-ink-600">{p.body}</p>

                  {/* solution reveal */}
                  <div className="relative mt-auto pt-5">
                    <div className="draw-bar h-px w-full bg-gradient-to-r from-brand-300 via-accent-300 to-transparent" />
                    <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand-100 bg-brand-50/60 px-3.5 py-3">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                        <Icon.check className="size-3" />
                      </span>
                      <p className="text-[13px] font-medium leading-5 text-ink-700">
                        <span className="font-semibold text-brand-700">Skefto: </span>
                        {p.solved}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </InViewStagger>
      </Container>
    </section>
  );
}
