"use client";

import { useMemo, useRef, useState } from "react";

import { CatalogToolbar } from "@/components/catalog/CatalogToolbar";
import { CourseGrid } from "@/components/catalog/CourseGrid";
import { Pagination } from "@/components/catalog/Pagination";
import { useCourseFilters } from "@/components/catalog/useCourseFilters";
import { ChevronDownIcon } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { SearchField } from "@/components/ui/SearchField";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/content/landing";

// The design fills its grid with the six courses three times over.
const catalog = [...courses, ...courses, ...courses];
const pageCount = 5;

export function CourseCatalog({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [scope, setScope] = useState<"courses" | "creators">("courses");
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLElement>(null);

  const searched = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return catalog.filter((course) =>
      (scope === "courses" ? course.title : course.creator)
        .toLowerCase()
        .includes(needle),
    );
  }, [query, scope]);
  const { filters, update, results } = useCourseFilters(searched);

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
              update(next);
              setPage(1);
            }}
          />

          <CourseGrid
            courses={results}
            className="mt-12 xl:mt-[77px] xl:ml-px"
          />

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
