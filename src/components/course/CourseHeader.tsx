import Link from "next/link";

import { ShareButton } from "@/components/course/ShareButton";
import {
  SignalIcon,
  StarRoundedIcon,
  StudentsIcon,
} from "@/components/icons/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CourseDetail } from "@/content/courses";

export function CourseHeader({ course }: { course: CourseDetail }) {
  const badges = [
    { label: course.level, icon: SignalIcon },
    { label: course.rating, icon: StarRoundedIcon },
    { label: course.students, icon: StudentsIcon },
  ];

  return (
    <div className="flex flex-col items-start gap-6 xl:flex-row xl:justify-between">
      <div className="text-surface xl:pl-0.5">
        <SectionHeading as="h1" size="h3" id="course-title">
          {course.title}
        </SectionHeading>
        <p className="mt-2 font-display text-title">{course.tagline}</p>
        <p className="mt-5 text-lg">
          by{" "}
          <Link
            href={course.creator.href}
            className="text-lime hover:underline"
          >
            {course.creator.handle}
          </Link>
        </p>
        <ul className="mt-[21px] flex flex-wrap gap-4">
          {badges.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex h-10 items-center gap-2 rounded-full bg-white px-6 text-base font-medium text-ink"
            >
              <Icon className="size-6 text-primary" />
              {label}
            </li>
          ))}
        </ul>
      </div>
      {/* At the 1440px design width the Share button runs 85px past the content edge. */}
      <ShareButton className="min-[1440px]:-mr-[85px]" />
    </div>
  );
}
