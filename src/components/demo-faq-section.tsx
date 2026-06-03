import { DEMO_HIGHLIGHTS, LINKS } from "@/lib/content";
import { BeamButton, Container, SectionHeading } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Faq } from "@/components/faq";

export function DemoFaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-[360px] w-[min(720px,85vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,145,174,0.06),transparent)]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="See it in action"
          title="See Skefto compliance software in action"
          subtitle="Watch a short overview, then explore common questions — or book a tailored walkthrough."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
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
                  className="grid size-16 place-items-center rounded-full bg-white/95 text-brand-700 shadow-glow transition-transform hover:scale-105"
                  aria-label="Play product overview"
                >
                  <Icon.play className="size-8" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-sm font-semibold">
                  Product overview · 2 min
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur">
                  Skefto Compliance
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-ink-900/8 bg-white p-5 shadow-soft sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                In your demo
              </p>
              <ul className="mt-4 space-y-3">
                {DEMO_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-ink-700"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <Icon.check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BeamButton href={LINKS.demo} fill="brand" size="lg">
                Book a demo
              </BeamButton>
              <a
                href={LINKS.contact}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-800 shadow-sm transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                Speak with a specialist
              </a>
            </div>
          </div>

          <Faq />
        </div>
      </Container>
    </section>
  );
}
