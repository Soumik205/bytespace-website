import Image from "next/image";
import Link from "next/link";

import { PlayCircleIcon } from "@/components/icons/Icons";
import type { CourseDetail } from "@/content/courses";
import { cn } from "@/lib/utils";

type CoursePreviewProps = {
  course: CourseDetail;
  className?: string;
};

export function CoursePreview({ course, className }: CoursePreviewProps) {
  return (
    <div
      className={cn(
        "relative aspect-[720/479] w-full overflow-hidden rounded-card xl:ml-[5px] xl:w-[720px]",
        className,
      )}
    >
      <Image
        src={course.preview}
        alt="Course instructor in front of a light background"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="(min-width: 1280px) 720px, 100vw"
        className="object-cover"
      />
      {/* The design places the button 16px right of and below the true center. */}
      <Link
        href={`/courses/${course.slug}/lessons`}
        scroll={false}
        aria-label="Watch the lessons"
        className="absolute top-[42.69%] left-[45.07%] grid size-16 place-items-center rounded-card border border-body bg-charcoal/24 text-surface backdrop-blur-[40px] transition-colors hover:bg-charcoal/40 sm:size-[104px]"
      >
        <PlayCircleIcon className="size-9 sm:size-[60px]" />
      </Link>
    </div>
  );
}
