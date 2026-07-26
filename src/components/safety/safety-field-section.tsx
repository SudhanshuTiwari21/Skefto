import { FIELD_FEATURES, LINKS } from "@/lib/safety-content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { InViewStagger, SpotlightCard } from "@/components/safety/safety-motion";

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[min(100%,17rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(0,145,174,0.14),transparent_70%)]"
      />
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-ink-900 bg-ink-950 shadow-[0_28px_80px_-36px_rgba(20,24,31,0.65)]">
        <div className="flex items-center justify-between bg-ink-900 px-4 py-2">
          <span className="text-[10px] font-semibold text-ink-400">9:41</span>
          <span className="h-1.5 w-10 rounded-full bg-ink-700" />
          <span className="text-[10px] font-semibold text-ink-400">LTE</span>
        </div>
        <div className="space-y-3 bg-sand-50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-ink-900">Field report</p>
            <span className="rounded-md bg-accent-100 px-2 py-0.5 text-[10px] font-semibold text-accent-800">
              Offline
            </span>
          </div>
          <div className="rounded-xl border border-ink-900/8 bg-white p-3 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-400">Hazard</p>
            <p className="mt-1 text-sm font-semibold text-ink-900">Uneven path, reserve gate</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="grid size-14 place-items-center rounded-lg bg-ink-100 text-[10px] font-semibold text-ink-500">
                Photo
              </span>
              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="h-2 rounded-full bg-ink-100" />
                <div className="h-2 w-2/3 rounded-full bg-ink-100" />
                <p className="text-[10px] font-medium text-brand-700">GPS pinned · sync pending</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-ink-900/8 bg-white p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-400">
              Waiting for sign-off
            </p>
            <p className="mt-1 text-xs font-semibold text-ink-800">Supervisor · Depot East</p>
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-brand-600 py-2.5 text-xs font-semibold text-white"
          >
            Save &amp; sync later
          </button>
        </div>
      </div>
    </div>
  );
}

/** Split layout: phone mock left, field capability bullets right */
export function SafetyFieldSection() {
  return (
    <section id="field" className="scroll-mt-20 border-y border-ink-900/6 bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <PhoneMock />
          <div>
            <SectionHeading
              eyebrow="Built for the field"
              title="Mobile and offline capture your depot crew will actually use"
              subtitle="WHS does not only happen at a desk. Skefto supports field reporting with evidence that syncs when connectivity returns."
              align="left"
            />
            <InViewStagger as="ul" step={90} className="mt-8 grid gap-3 sm:grid-cols-2">
              {FIELD_FEATURES.map((f, i) => {
                const I = Icon[f.icon as IconName];
                return (
                  <SpotlightCard
                    key={f.title}
                    as="li"
                    className="rounded-2xl border border-ink-900/8 bg-sand-50/70 p-4"
                    style={{ ["--i" as string]: i }}
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-white text-brand-700 shadow-sm">
                      <I className="size-4" />
                    </span>
                    <h3 className="mt-3 font-display text-sm font-bold text-ink-900">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-ink-600">{f.body}</p>
                  </SpotlightCard>
                );
              })}
            </InViewStagger>
            <div className="mt-8">
              <BeamButton href={LINKS.demo} fill="brand" size="lg">
                See field capture in a demo
              </BeamButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
