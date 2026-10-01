"use client";

import Image from "next/image";
import { useState } from "react";

import { StarIcon } from "@/components/icons/Icons";
import { chipClasses } from "@/components/ui/Chip";
import type { CourseDetail } from "@/content/courses";
import { cn } from "@/lib/utils";

type Review = CourseDetail["reviews"]["items"][number];

const ratings = [5, 4, 3, 2, 1];

export function ReviewList({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState<number | null>(null);
  const shown = filter
    ? reviews.filter((review) => review.rating === filter)
    : reviews;

  return (
    <>
      <div
        role="group"
        aria-label="Filter reviews"
        className="mt-6 flex flex-wrap items-start gap-4"
      >
        <button
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
          className={chipClasses(filter === null)}
        >
          All rating
        </button>
        {ratings.map((rating) => (
          <button
            key={rating}
            type="button"
            aria-pressed={filter === rating}
            aria-label={`${rating} star reviews`}
            onClick={() => setFilter(rating)}
            className={cn(chipClasses(filter === rating), "h-12 rounded-3xl")}
          >
            <StarIcon className="size-6" />
            {rating}
          </button>
        ))}
      </div>

      <ul className="mt-6 flex flex-col gap-6">
        {shown.map((review, index) => (
          <li
            key={review.name}
            className="rounded-3xl border border-line p-6 sm:p-[39px]"
          >
            <div className="flex items-start gap-3">
              <Image
                src={review.avatar}
                alt=""
                width={52}
                height={52}
                className="size-[52px] rounded-full object-cover"
              />
              <div>
                <p className="text-lg leading-[1.2] font-medium text-ink">
                  {review.name}
                </p>
                <p className="text-base leading-normal text-ink-soft">
                  {review.role}
                </p>
              </div>
              <p className="ml-auto text-base whitespace-nowrap text-ink-soft">
                {review.date}
              </p>
            </div>
            <p
              role="img"
              className="mt-6 flex h-6 gap-1 text-ink-soft"
              aria-label={`Rated ${review.rating} out of 5`}
            >
              {Array.from({ length: review.rating }, (_, star) => (
                <StarIcon key={star} className="size-6" />
              ))}
            </p>
            {/* The first review sets its quote 2px tighter than the others in the design. */}
            <p
              className={cn(
                "mt-6 text-base text-ink-soft",
                index === 0 && filter === null ? "leading-6" : "leading-[26px]",
              )}
            >
              {review.quote}
            </p>
          </li>
        ))}
      </ul>
      {shown.length === 0 && (
        <p className="mt-6 text-base text-ink-soft" role="status">
          No {filter} star reviews yet.
        </p>
      )}
    </>
  );
}
