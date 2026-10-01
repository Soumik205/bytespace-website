import { CourseCard } from "@/components/cards/CourseCard";
import type { Course } from "@/content/landing";
import { cn } from "@/lib/utils";

export function CourseGrid({
  courses,
  className,
}: {
  courses: Course[];
  className?: string;
}) {
  if (courses.length === 0) {
    return (
      <p
        role="status"
        className={cn("text-center text-lg text-ink-soft", className)}
      >
        No courses match your search.
      </p>
    );
  }

  return (
    <ul
      className={cn(
        "grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {courses.map((course, index) => (
        <li key={`${course.title}-${index}`}>
          {/* One of the first row's images is the largest element on the page. */}
          <CourseCard course={course} eager={index < 3} />
        </li>
      ))}
    </ul>
  );
}
