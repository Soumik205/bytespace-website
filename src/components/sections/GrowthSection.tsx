import Image from "next/image";

import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { Artboard } from "@/components/ui/Artboard";
import { Container } from "@/components/ui/Container";
import { Shape } from "@/components/ui/Shape";
import { courses, stats } from "@/content/landing";

export function GrowthSection() {
  return (
    <section aria-labelledby="growth-title" className="pt-20 lg:pt-[120px]">
      <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:pt-[74px] lg:pl-px">
          <h2
            id="growth-title"
            className="max-w-[560px] font-display text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink lg:text-h2"
          >
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-[480px] text-lg text-ink-soft lg:mt-10">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <dl className="mt-8 flex gap-14 lg:mt-10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-lg text-ink-soft">{stat.label}</dt>
                <dd className="font-display text-[36px]/[1.2] font-medium tracking-[-0.01em] text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Artboard
          width={562}
          height={552}
          aria-hidden
          className="[--scale:0.55] sm:[--scale:0.9] lg:w-[562px] lg:shrink-0 lg:[--scale:1]"
        >
          <CourseCard
            course={courses[0]}
            featured
            className="absolute top-0 left-0 w-[373px]"
          />
          <Image
            src="/images/student-laptop.webp"
            alt=""
            width={722}
            height={688}
            sizes="722px"
            className="absolute top-[9px] left-[-21px] max-w-none"
          />
          <ProgressCard className="absolute top-[213px] left-[345px]" />
          <Shape
            src="/images/shapes/spring-lime.webp"
            size={216}
            x={404}
            y={67}
          />
        </Artboard>
      </Container>
    </section>
  );
}
