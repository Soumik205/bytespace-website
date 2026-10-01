"use client";

import { useState } from "react";

import { chipClasses } from "@/components/ui/Chip";
import { topicRows } from "@/content/landing";
import { cn } from "@/lib/utils";

export function TopicFilter({ className }: { className?: string }) {
  const [active, setActive] = useState(topicRows[0][0]);

  return (
    <div
      role="group"
      aria-label="Course topics"
      className={cn(
        "flex flex-wrap justify-center gap-x-4 gap-y-3 xl:flex-col xl:items-center xl:gap-y-[21px]",
        className,
      )}
    >
      {topicRows.map((row, rowIndex) => (
        <div key={rowIndex} className="contents xl:flex xl:gap-4">
          {row.map((topic) => (
            <button
              key={topic}
              type="button"
              aria-pressed={active === topic}
              onClick={() => setActive(topic)}
              className={cn(chipClasses(active === topic), "px-[16.5px]")}
            >
              {topic}
            </button>
          ))}
          {rowIndex === topicRows.length - 1 && (
            <a
              href="#categories"
              className="flex h-[43px] items-center text-base font-medium whitespace-nowrap text-primary hover:underline"
            >
              + More
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
