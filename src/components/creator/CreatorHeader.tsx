import Image from "next/image";

import { CreatorStats } from "@/components/creator/CreatorStats";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CreatorProfile } from "@/content/creators";

export function CreatorHeader({ creator }: { creator: CreatorProfile }) {
  return (
    <section
      aria-labelledby="creator-name"
      className="bg-grid pt-[120px] pb-12 [--focus-ring:var(--color-lime)] xl:h-[592px] xl:pt-[172px] xl:pb-0"
    >
      <Container className="text-surface">
        <div className="flex items-start gap-6 xl:pl-0.5">
          <Image
            src={creator.avatar}
            alt={creator.name}
            width={96}
            height={96}
            loading="eager"
            className="size-16 shrink-0 rounded-3xl object-cover sm:size-24"
          />
          <div className="sm:mt-2">
            <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
              <SectionHeading as="h1" size="h3" id="creator-name">
                {creator.name}
              </SectionHeading>
              <span className="flex h-[35px] items-center rounded-full bg-lime px-6 text-base text-ink">
                Creator
              </span>
            </div>
            <p className="mt-2 text-lg">{creator.headline}</p>
          </div>
        </div>
        <div className="mt-10 text-lg xl:pl-0.5">
          {creator.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 xl:pl-0.5">
          <CreatorStats
            products={creator.products}
            followers={creator.followers}
          />
        </div>
      </Container>
    </section>
  );
}
