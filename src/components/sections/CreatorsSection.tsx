import Image from "next/image";

import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { RevenueCard } from "@/components/cards/RevenueCard";
import { CheckCircleIcon } from "@/components/icons/Icons";
import { Artboard } from "@/components/ui/Artboard";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { creatorBenefits } from "@/content/landing";

export function CreatorsSection() {
  return (
    <section
      id="creators"
      aria-labelledby="creators-title"
      className="pt-16 pb-20 lg:pt-[72px] lg:pb-[120px]"
    >
      <Container className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:justify-between">
        <Artboard
          width={541}
          height={596}
          aria-hidden
          className="[--scale:0.6] sm:[--scale:0.9] lg:ml-px lg:w-[541px] lg:shrink-0 lg:[--scale:1]"
        >
          <RevenueCard
            title="Total Revenue"
            period="July 1-28"
            amount="$120.29"
            change="+12$"
            className="absolute top-[44px] left-0"
          />
          <RevenueCard
            title="Year to Date"
            period="2023"
            amount="$1,200.38"
            change="+12$"
            variant="compact"
            className="absolute top-[194px] left-0"
          />
          <Image
            src="/images/student-tablet.webp"
            alt=""
            width={580}
            height={744}
            sizes="580px"
            className="absolute top-[-3px] left-[7px] max-w-none"
          />
          <HappyStudentsCard
            variant="creators"
            className="absolute top-[413px] left-[283px]"
          />
          <Shape
            src="/images/shapes/coil-lime.webp"
            size={216}
            x={303}
            y={114}
          />
        </Artboard>

        <div className="lg:w-[579px] lg:pt-[104px]">
          <SectionHeading
            id="creators-title"
            className="max-w-[400px] text-ink"
          >
            Create &amp; Manage Courses Easily.
          </SectionHeading>
          <p className="mt-6 text-lg text-ink-soft lg:mt-10">
            <strong className="font-bold text-ink">ByteSpace</strong> supports
            individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="mt-8 flex flex-col gap-[11px] lg:mt-[38px]">
            {creatorBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2 text-lg font-medium text-ink"
              >
                <CheckCircleIcon className="size-6 shrink-0 text-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
