import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import type { CourseDetail } from "@/content/courses";
import { cn } from "@/lib/utils";

type CourseSidebarProps = {
  course: CourseDetail;
  className?: string;
};

export function CourseSidebar({ course, className }: CourseSidebarProps) {
  return (
    <aside
      aria-labelledby="course-summary-title"
      className={cn(
        "w-full rounded-card border border-line bg-white p-6 sm:p-[39px] xl:w-[412px]",
        className,
      )}
    >
      <h2
        id="course-summary-title"
        className="font-display text-title text-ink"
      >
        {course.lessonsSummary}
      </h2>
      <ol className="mt-6 flex flex-col gap-3">
        {course.highlights.map((lesson) => (
          <li
            key={lesson.number}
            className="flex items-start justify-between gap-4 text-base text-ink"
          >
            <span className="flex leading-[19px] font-medium">
              <span className="w-8 shrink-0">{lesson.number}</span>
              <span className="max-w-[180px]">{lesson.title}</span>
            </span>
            <span className="w-[70px] shrink-0 text-center text-primary">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-base text-ink-soft">{course.moreLessons}</p>
      <p className="mt-6 text-base leading-[26px] text-ink-soft">
        {course.callToAction}
      </p>
      <p className="mt-[21px] flex items-baseline">
        <span className="font-display text-h3 text-primary">
          {course.price}
        </span>
        <span className="text-base text-ink-soft">/lifetime</span>
      </p>
      <Button href="/signup" className="mt-[22px] w-full">
        Enroll Now
      </Button>

      <h3 className="mt-6 font-display text-title text-ink">
        This course include
      </h3>
      <ul className="mt-6 flex flex-col gap-3">
        {course.includes.map(({ label, icon: Icon }) => (
          <li
            key={label}
            className="flex items-center gap-2 text-base leading-[26px] text-ink-soft"
          >
            <Icon className="size-6 shrink-0 text-primary" />
            {label}
          </li>
        ))}
      </ul>

      <hr className="mt-6 border-divider" />

      <div className="mt-6 flex items-center gap-3">
        <Image
          src={course.creator.avatar}
          alt=""
          width={52}
          height={52}
          className="size-[52px] rounded-full object-cover"
        />
        <div className="-mt-[6px] leading-[1.35]">
          <p className="text-lg font-medium text-ink">{course.creator.name}</p>
          <p className="-mt-0.5 text-base text-ink-soft">
            {course.creator.role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-base leading-[26px] text-ink-soft">
        {course.callToAction}
      </p>
      <Link
        href={course.creator.href}
        prefetch={false}
        className="mt-6 inline-flex h-[35px] items-center rounded-full border border-line px-4 text-base font-medium text-ink-soft transition-colors hover:border-primary hover:text-primary"
      >
        See Full Profile
      </Link>
    </aside>
  );
}
