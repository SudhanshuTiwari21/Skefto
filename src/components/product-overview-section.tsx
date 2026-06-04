import { Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";

export function ProductOverviewSection() {
  return (
    <section
      id="overview"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[min(640px,80vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(141,61,151,0.06),transparent)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="See it in action"
          title="See Skefto compliance software in action"
          subtitle="A two-minute overview of obligations tracking, regulatory change, and audit-ready evidence - before you dive into the details."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="group relative aspect-video overflow-hidden rounded-3xl border border-ink-900/10 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800 shadow-[0_24px_60px_-28px_rgba(20,24,31,0.45)]">
            <div className="border-beam absolute inset-0 rounded-3xl opacity-60" />
            <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,rgba(141,61,151,0.28),transparent_68%)]"
            />

            <div className="absolute inset-0 grid place-items-center">
              <button
                type="button"
                className="grid size-16 place-items-center rounded-full bg-white/95 text-brand-700 shadow-glow transition-transform hover:scale-105 sm:size-[4.5rem]"
                aria-label="Play product overview"
              >
                <Icon.play className="size-8 sm:size-9" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white sm:bottom-5 sm:left-5 sm:right-5">
              <span className="text-sm font-semibold sm:text-base">
                Product overview · 2 min
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur">
                Skefto Compliance
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
