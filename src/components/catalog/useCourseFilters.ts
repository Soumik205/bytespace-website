import { useMemo, useState } from "react";

import type { Course } from "@/content/landing";
import { catalogTopics } from "@/content/landing";

export type CatalogFilters = {
  level: string;
  sort: string;
  topic: string;
  showTopics: boolean;
};

// Level and sort apply to the list; the topic is a selection only, since the
// courses carry no topic data.
export function useCourseFilters(courses: Course[], showTopics = true) {
  const [filters, setFilters] = useState<CatalogFilters>({
    level: "",
    sort: "",
    topic: catalogTopics[0],
    showTopics,
  });

  const results = useMemo(() => {
    const matches = courses.filter(
      (course) => !filters.level || course.level === filters.level,
    );
    if (filters.sort === "az")
      return [...matches].sort((a, b) => a.title.localeCompare(b.title));
    if (filters.sort === "za")
      return [...matches].sort((a, b) => b.title.localeCompare(a.title));
    return matches;
  }, [courses, filters.level, filters.sort]);

  const update = (next: Partial<CatalogFilters>) =>
    setFilters((current) => ({ ...current, ...next }));

  return { filters, update, results };
}
