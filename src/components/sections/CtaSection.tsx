import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Shape, type ShapeProps } from "@/components/ui/Shape";

const shapes: ShapeProps[] = [
  {
    src: "/images/shapes/pyramid-lime.webp",
    size: 188.926,
    x: 1078.03,
    y: -0.41,
  },
  { src: "/images/shapes/spring-lime.webp", size: 331.535, x: 1106.93, y: 289 },
  { src: "/images/shapes/coil-lime.webp", size: 386.791, x: -121.581, y: -162 },
  {
    src: "/images/shapes/coil-white.webp",
    size: 175.814,
    x: 178.814,
    y: 5,
    flip: true,
  },
  {
    src: "/images/shapes/cone-white.webp",
    size: 188.926,
    x: -49.975,
    y: 224.59,
  },
  {
    src: "/images/shapes/torus-lime.webp",
    size: 343.684,
    x: 16.408,
    y: 298.26,
  },
  {
    src: "/images/shapes/cylinder-white.webp",
    size: 371.822,
    x: 1222.11,
    y: 5.2,
  },
];

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-grid"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block"
        >
          {shapes.map((shape) => (
            <Shape key={`${shape.src}-${shape.x}`} {...shape} />
          ))}
        </div>

        <Container className="relative py-20 text-center lg:pt-[85px] lg:pb-[84px]">
          <h2
            id="cta-title"
            className="mx-auto max-w-[580px] font-display text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-surface lg:text-h2"
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-6 max-w-[964px] text-lg text-surface lg:mt-10">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Button href="/signup" className="mt-8 lg:mt-10">
            Join as Creator
          </Button>
        </Container>
      </div>
    </section>
  );
}
