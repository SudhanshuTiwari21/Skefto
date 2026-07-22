import { FAQS } from "@/lib/safety-content";
import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";

export function SafetyFaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Health & safety software - common questions"
          subtitle="Answers on ISO 45001, WHS laws, psychosocial hazards, injuries, hosting and how Skefto compares to inspection-only apps."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
