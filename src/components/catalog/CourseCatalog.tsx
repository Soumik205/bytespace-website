"use client";

import { useMemo, useRef, useState } from "react";

import { CourseCard } from "@/components/cards/CourseCard";
import { CatalogToolbar } from "@/components/catalog/CatalogToolbar";
import { Pagination } from "@/components/catalog/Pagination";
import { ChevronDownIcon } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { SearchField } from "@/components/ui/SearchField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catalogTopics, courses } from "@/content/landing";

// The design fills its grid with the six courses three times over.
const catalog = [...courses, ...courses, ...courses];
const pageCount = 5;

export type CatalogFilters = {
  level: string;
  sort: string;
  topic: string;
  showTopics: boolean;
};

export function CourseCatalog({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [scope, setScope] = useState<"courses" | "creators">("courses");
  const [filters, setFilters] = useState<CatalogFilters>({
    level: "",
    sort: "",
    topic: catalogTopics[0],
    showTopics: true,
  });
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLElement>(null);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matches = catalog.filter((course) => {
      const field = scope === "courses" ? course.title : course.creator;
      return (
        field.toLowerCase().includes(needle) &&
        (!filters.level || course.level === filters.level)
      );
    });
    if (filters.sort === "az")
      return [...matches].sort((a, b) => a.title.localeCompare(b.title));
    if (filters.sort === "za")
      return [...matches].sort((a, b) => b.title.localeCompare(a.title));
    return matches;
  }, [query, scope, filters.level, filters.sort]);

  const isFiltered = query.trim() !== "" || filters.level !== "";

  const changePage = (next: number) => {
    setPage(next);
    resultsRef.current?.scrollIntoView();
  };

  return (
    <>
      <section
        aria-labelledby="catalog-title"
        className="bg-grid pt-[120px] pb-12 [--focus-ring:var(--color-lime)] xl:h-[360px] xl:pt-[164px] xl:pb-0"
      >
        <Container className="text-center">
          <SectionHeading
            as="h1"
            size="h3"
            id="catalog-title"
            className="text-surface"
          >
            Find Your Next Course
          </SectionHeading>
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex items-start justify-center gap-4"
          >
            <SearchField
              label={scope === "courses" ? "Search courses" : "Search creators"}
              placeholder="Search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />
            <label className="relative inline-flex h-12 shrink-0 items-center gap-3 rounded-3xl bg-lime px-6 text-lg font-medium text-ink transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-lime hover:bg-lime-hover">
              {scope === "courses" ? "Courses" : "Creators"}
              <ChevronDownIcon className="size-6" />
              <select
                aria-label="Search in"
                value={scope}
                onChange={(event) =>
                  setScope(event.target.value as "courses" | "creators")
                }
                className="absolute inset-0 cursor-pointer opacity-0"
              >
                <option value="courses">Courses</option>
                <option value="creators">Creators</option>
              </select>
            </label>
          </form>
        </Container>
      </section>

      <section
        ref={resultsRef}
        aria-labelledby="catalog-results-title"
        className="scroll-mt-4 py-16 xl:py-[72px]"
      >
        <Container>
          <h2 id="catalog-results-title" className="sr-only">
            Course results
          </h2>
          <CatalogToolbar
            filters={filters}
            onChange={(next) => {
              setFilters((current) => ({ ...current, ...next }));
              setPage(1);
            }}
          />

          {results.length > 0 ? (
            <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 xl:mt-[77px] xl:ml-px xl:grid-cols-3">
              {results.map((course, index) => (
                <li key={`${course.title}-${index}`}>
                  <CourseCard course={course} eager={index < 3} />
                </li>
              ))}
            </ul>
          ) : (
            <p
              role="status"
              className="mt-12 text-center text-lg text-ink-soft"
            >
              No courses match your search.
            </p>
          )}

          {!isFiltered && (
            // The design places the pagination 25px right of center.
            <Pagination
              page={page}
              pageCount={pageCount}
              onChange={changePage}
              className="mt-[72px] xl:translate-x-[25px]"
            />
          )}
        </Container>
      </section>
    </>
  );
}
