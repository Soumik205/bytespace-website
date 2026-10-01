import { PanelHeading, PanelText } from "@/components/course/PanelHeading";
import { ReviewList } from "@/components/course/ReviewList";
import { StarIcon } from "@/components/icons/Icons";
import type { CourseDetail } from "@/content/courses";

export function ReviewsPanel({ course }: { course: CourseDetail }) {
  const { intro, average, breakdown, items } = course.reviews;

  return (
    <div className="pt-10 pb-16 xl:pb-[90.5px]">
      <PanelHeading>What Learners Are Saying</PanelHeading>
      <PanelText>{intro}</PanelText>

      <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-line p-6 sm:flex-row sm:items-center sm:px-[39px] sm:py-10">
        <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg bg-lime text-ink">
          <p className="text-sm leading-[1.2] font-medium">Ratings</p>
          <p className="font-display text-h3">{average}</p>
        </div>
        <ul className="flex flex-1 flex-col gap-1.5 sm:pr-0.5">
          {breakdown.map((row, index) => (
            <li key={index} className="flex items-center text-ink-soft">
              <span className="h-2 w-full max-w-[282px] rounded-full bg-mist">
                <span
                  className="block h-full rounded-full bg-lime"
                  style={{ width: `${row.percent}%` }}
                />
              </span>
              <span className="ml-4 hidden gap-1 sm:flex" aria-hidden="true">
                {Array.from({ length: 5 }, (_, star) => (
                  <StarIcon key={star} className="size-6" />
                ))}
              </span>
              <span className="ml-auto pl-4 text-base leading-6">
                {row.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <PanelHeading className="mt-6">Individual Reviews:</PanelHeading>
      <ReviewList reviews={items} />
    </div>
  );
}
