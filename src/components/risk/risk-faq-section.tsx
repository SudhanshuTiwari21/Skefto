import { FAQS } from "@/lib/risk-content";
import { Container, SectionHeading } from "@/components/ui";
import { Faq } from "@/components/faq";

export function RiskFaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-sand-50 py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.18]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Risk management software - common questions"
          subtitle="Answers on AS/ISO 31000 alignment, Australian hosting, APRA CPS 230, implementation and how Skefto compares to other vendors."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <Faq items={FAQS} />
        </div>
      </Container>
    </section>
  );
}
