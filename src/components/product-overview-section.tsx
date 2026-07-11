import { Container, SectionHeading } from "@/components/ui";
import { ProductVideoInline } from "@/components/product-video-inline";

export function ProductOverviewSection() {
  return (
    <section id="overview" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Product overview"
          title="See Skefto Compliance in action"
          subtitle="A short walkthrough of obligations, registers, and reporting for regulated teams evaluating Skefto."
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <ProductVideoInline />
          <p className="mt-3 text-center text-xs text-ink-500">
            Product overview · Skefto Compliance
          </p>
        </div>
      </Container>
    </section>
  );
}
