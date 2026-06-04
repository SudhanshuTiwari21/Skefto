import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.2]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Common questions"
          title="Compliance management software - FAQs"
          subtitle="Answers for Australian regulated organisations evaluating Skefto - from data residency to implementation timelines."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Faq />
        </div>
      </Container>
    </section>
  );
}
