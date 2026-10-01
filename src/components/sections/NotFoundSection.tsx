import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NotFoundSection() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="bg-grid pt-[120px] pb-20 [--focus-ring:var(--color-lime)] lg:h-[957px] lg:pt-40 lg:pb-0"
    >
      <Container className="text-center">
        {/* The heading overlaps the lower quarter of the numerals, as in the design. */}
        <p
          aria-hidden="true"
          className="-mb-[0.248em] bg-fade-lime bg-clip-text font-display text-[140px] leading-none font-semibold tracking-[-0.01em] text-transparent sm:text-[280px] lg:text-[480px]"
        >
          404
        </p>
        <SectionHeading
          as="h1"
          size="display"
          id="not-found-title"
          className="relative mx-auto max-w-[920px] text-white"
        >
          The page you are looking for doesn&rsquo;t exist
        </SectionHeading>
        <p className="mt-6 text-lg text-mist lg:mt-8">
          Try to use a correct url or go back to homepage to start again
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
