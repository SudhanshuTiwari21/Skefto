import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about Skefto Compliance"
          subtitle="Answers on Australian compliance, data residency, implementation, and how Skefto compares to other platforms."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <Faq />
        </div>
      </Container>
    </section>
  );
}
