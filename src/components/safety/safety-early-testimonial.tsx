import { TESTIMONIAL } from "@/lib/safety-content";
import { Container } from "@/components/ui";
import { SpotlightCard } from "@/components/safety/safety-motion";

/** Early social proof: sits immediately after the three problems section */
export function SafetyEarlyTestimonial() {
  return (
    <section className="bg-sand-50 py-10 sm:py-12">
      <Container>
        <SpotlightCard
          tilt={false}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ink-900/8 bg-white p-6 text-center shadow-soft sm:p-9"
        >
          {/* oversized quote glyph */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 -top-6 select-none font-display text-[8rem] leading-none text-brand-100"
          >
            &ldquo;
          </span>
          {/* top accent line */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400"
          />
          <blockquote className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
              Trusted in practice
            </p>
            <p className="mt-4 font-display text-lg font-medium leading-relaxed text-ink-800 text-balance sm:text-xl">
              &ldquo;{TESTIMONIAL.quote}&rdquo;
            </p>
            <footer className="mt-5 flex items-center justify-center gap-2.5 text-sm text-ink-500">
              <span
                aria-hidden
                className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 font-display text-xs font-bold text-white"
              >
                {TESTIMONIAL.name.charAt(0)}
              </span>
              <span>
                <span className="font-semibold text-ink-700">{TESTIMONIAL.name}</span>
                {" · "}
                {TESTIMONIAL.org}
              </span>
            </footer>
          </blockquote>
        </SpotlightCard>
      </Container>
    </section>
  );
}
