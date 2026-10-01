import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/HappyStudentsCard";
import { Artboard } from "@/components/ui/Artboard";
import { Shape } from "@/components/ui/Shape";
import { courses } from "@/content/landing";

type AuthIllustrationProps = {
  className?: string;
  reviewsClassName?: string;
};

export function AuthIllustration({
  className,
  reviewsClassName,
}: AuthIllustrationProps) {
  return (
    <Artboard width={552} height={585} aria-hidden className={className}>
      <CourseCard
        course={courses[1]}
        featured
        className="absolute top-[89px] left-[27px] w-[373px]"
      />
      <CourseCard
        course={courses[2]}
        featured
        className="absolute top-0 left-[138px] w-[373px]"
      />
      <HappyStudentsCard
        variant="auth"
        reviewsClassName={reviewsClassName}
        className="absolute top-[435px] left-[253px]"
      />
      <Shape
        src="/images/shapes/coil-white.webp"
        size={175.814}
        x={375.814}
        y={321}
        flip
      />
      <Shape
        src="/images/shapes/torus-lime.webp"
        size={146.719}
        x={54.467}
        y={14.684}
      />
      <Shape
        src="/images/shapes/pyramid-lime.webp"
        size={188.926}
        x={0.026}
        y={396.593}
      />
    </Artboard>
  );
}
