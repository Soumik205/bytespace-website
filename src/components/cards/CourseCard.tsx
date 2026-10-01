import Image from "next/image";

import {
  SignalIcon,
  StarIcon,
  StarRoundedIcon,
} from "@/components/icons/Icons";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { courseAvatars, type Course } from "@/content/landing";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  featured?: boolean;
  className?: string;
};

export function CourseCard({
  course,
  featured = false,
  className,
}: CourseCardProps) {
  const facts = [course.lessons, course.duration, course.comments];

  return (
    <article
      className={cn(
        "rounded-card border border-line bg-white px-[15px] pt-[15px] pb-5",
        className,
      )}
    >
      <div className="relative h-[195px] overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <ul
          className={cn(
            "absolute left-3 flex gap-1.5 xl:left-[13px] xl:gap-3",
            featured ? "bottom-[13px]" : "bottom-[19px]",
          )}
        >
          {facts.map((fact) => (
            <li
              key={fact}
              className={cn(
                "rounded-full bg-surface-soft/60 px-[13px] text-xs whitespace-nowrap text-body backdrop-blur-[4px]",
                featured ? "h-8 leading-8" : "h-[26px] leading-[26px]",
              )}
            >
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={cn(
          "flex items-start justify-between gap-3",
          featured ? "mt-[23px]" : "mt-[21px]",
        )}
      >
        <div className="min-w-0">
          <h3 className="truncate font-display text-title text-black">
            {course.title}
          </h3>
          <p className={cn("text-xs text-body", featured && "mt-0.5")}>
            by <span className="text-primary">{course.creator}</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center text-lg text-body">
          <span className="sr-only">Rated </span>
          {course.rating}
          {featured ? (
            <StarIcon className="ml-1 size-6 text-lime" />
          ) : (
            <StarRoundedIcon className="ml-px size-6 text-line" />
          )}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <p className="flex h-8 items-center gap-1 rounded-full bg-surface px-3 text-xs text-ink-soft">
          <SignalIcon className="size-5" />
          {course.level}
        </p>
        <AvatarStack
          avatars={courseAvatars}
          count={course.learners}
          size={32}
          className="-space-x-2"
          countClassName={featured ? "bg-black text-white" : undefined}
        />
      </div>

      <p className="mt-4 flex items-baseline">
        <span className="font-display text-title text-primary">
          {course.price}
        </span>
        <span className="text-xs text-body">/lifetime</span>
      </p>
    </article>
  );
}
