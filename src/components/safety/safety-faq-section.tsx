import Link from "next/link";
import { FAQS, RELATED_ARTICLES } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { Icon } from "@/components/icons";

export function SafetyFaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title="WHS software - common questions"
          subtitle="Answers on ISO 45001, notifiable incidents, pricing model, hosting and how Skefto compares to inspection-only apps."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={FAQS} />
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-ink-900/8 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Related reading
          </p>
          <ul className="mt-4 grid gap-2">
            {RELATED_ARTICLES.map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-ink-900/8 bg-white px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-200 hover:text-brand-700"
                >
                  {a.title}
                  <Icon.arrow className="size-4 shrink-0 text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
