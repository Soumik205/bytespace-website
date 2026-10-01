import Image from "next/image";

import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { CheckCircleIcon } from "@/components/icons/Icons";
import { Artboard } from "@/components/ui/Artboard";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
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
          <div className="absolute top-[44px] left-0 w-[232px] rounded-2xl bg-primary p-4 text-surface">
            <p className="text-base leading-[1.2] font-medium">Total Revenue</p>
            <p className="text-2xs leading-[1.2]">July 1-28</p>
            <div className="mt-2.5 flex items-center justify-between">
              <p className="font-display text-amount">$120.29</p>
              <p className="rounded-full bg-lime-bright px-2 text-2xs leading-6 text-ink">
                +12$
              </p>
            </div>
            <div className="mt-2.5 h-2 w-[200px] rounded-full bg-white">
              <div className="h-full w-[112px] rounded-full bg-lime" />
            </div>
          </div>
          <div className="absolute top-[194px] left-0 w-[134px] rounded-2xl bg-primary p-4 text-surface">
            <p className="text-base leading-[1.2] font-medium">Year to Date</p>
            <p className="text-2xs leading-[1.2]">2023</p>
            <p className="mt-2.5 font-display text-amount whitespace-nowrap">
              $1,200.38
            </p>
            <p className="mt-2.5 w-fit rounded-full bg-lime-bright px-2 text-2xs leading-6 text-ink">
              +12$
            </p>
          </div>
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
          <h2
            id="creators-title"
            className="max-w-[400px] font-display text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink lg:text-h2"
          >
            Create &amp; Manage Courses Easily.
          </h2>
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
