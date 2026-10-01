import Image from "next/image";

import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { ProgressCard } from "@/components/cards/ProgressCard";
import { SearchForm } from "@/components/forms/SearchForm";
import { Artboard } from "@/components/ui/Artboard";
import { Container } from "@/components/ui/Container";
import { Shape, type ShapeProps } from "@/components/ui/Shape";

const shapes: ShapeProps[] = [
  {
    src: "/images/shapes/spring-white.webp",
    size: 331.535,
    x: 1123.93,
    y: 672,
  },
  { src: "/images/shapes/coil-lime.webp", size: 386.791, x: -121.581, y: 221 },
  {
    src: "/images/shapes/coil-white.webp",
    size: 175.814,
    x: 183.814,
    y: 477,
    flip: true,
  },
  {
    src: "/images/shapes/torus-white.webp",
    size: 343.684,
    x: 14.408,
    y: 681.26,
  },
  {
    src: "/images/shapes/cylinder-lime.webp",
    size: 371.822,
    x: 1227.11,
    y: 220.199,
  },
  {
    src: "/images/shapes/pyramid-white.webp",
    size: 188.926,
    x: 1104.03,
    y: 463.593,
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-grid"
    >
      <div className="relative mx-auto max-w-[1440px] pt-[136px] lg:pt-[169px]">
        <Container className="relative z-10 text-center">
          <h1
            id="hero-title"
            className="mx-auto max-w-[880px] font-display text-[40px]/[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[56px]/[1.2] lg:text-display"
          >
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mt-6 text-lg text-mist lg:mt-8">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <SearchForm className="mt-10 lg:mt-[60px]" />
        </Container>

        <Artboard
          width={840}
          height={512}
          className="mt-10 [--scale:0.42] sm:[--scale:0.7] md:[--scale:0.85] lg:-mt-0.5 lg:[--scale:1]"
        >
          <div
            aria-hidden="true"
            className="absolute top-[70px] left-[-155px] size-[1149px] rounded-full border-[320px] border-lime-bright"
          />
          <Image
            src="/images/student-laptop.webp"
            alt="Smiling student with headphones holding a laptop"
            width={722}
            height={688}
            loading="eager"
            fetchPriority="high"
            sizes="722px"
            className="absolute top-[-3px] left-[110px] max-w-none"
          />
          <div aria-hidden="true">
            <ProgressCard tight className="absolute top-[139px] left-[542px]" />
            <HappyStudentsCard className="absolute top-[325px] left-[28px]" />
            <div className="absolute top-[127px] left-[104px] w-[208px] rounded-2xl bg-white p-4 text-ink">
              <p className="text-base leading-[1.2]">UI/UX Design</p>
              <p className="flex items-center gap-2 text-xs whitespace-nowrap text-muted">
                <span>200 Courses</span>
                <span className="text-2xs">•</span>
                <span>1000+ Students</span>
              </p>
            </div>
          </div>
        </Artboard>

        <div aria-hidden="true" className="hidden lg:block">
          {shapes.map((shape) => (
            <Shape key={`${shape.src}-${shape.x}`} {...shape} />
          ))}
        </div>
      </div>
    </section>
  );
}
