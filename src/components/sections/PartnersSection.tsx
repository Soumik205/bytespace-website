import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { partners } from "@/content/landing";

export function PartnersSection() {
  return (
    <section aria-label="Partners" className="bg-surface">
      <Container className="py-10 lg:py-0">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:h-[202px] lg:flex-nowrap lg:justify-between lg:px-[34px]">
          {partners.map((partner) => (
            <li key={partner.logo}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-8 w-auto lg:h-auto"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
