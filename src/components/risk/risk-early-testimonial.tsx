import { TESTIMONIAL } from "@/lib/risk-content";
import { Container } from "@/components/ui";

/** Early social proof: sits immediately after the three problems section */
export function RiskEarlyTestimonial() {
  return (
    <section className="bg-sand-50 py-10 sm:py-12">
      <Container>
        <blockquote className="mx-auto max-w-3xl rounded-2xl border border-ink-900/8 bg-white p-6 text-center shadow-soft sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
            Trusted in practice
          </p>
          <p className="mt-4 font-display text-lg font-medium leading-relaxed text-ink-800 sm:text-xl">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-ink-500">
            <span className="font-semibold text-ink-700">{TESTIMONIAL.name}</span>
            {" · "}
            {TESTIMONIAL.org}
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
