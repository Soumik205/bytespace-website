"use client";

import { CatalogToolbar } from "@/components/catalog/CatalogToolbar";
import { CourseGrid } from "@/components/catalog/CourseGrid";
import { useCourseFilters } from "@/components/catalog/useCourseFilters";
import { Container } from "@/components/ui/Container";
import type { Course } from "@/content/landing";

export function CreatorCourses({ courses }: { courses: Course[] }) {
  // The profile design shows no topic row; Filter reveals it as on the search page.
  const { filters, update, results } = useCourseFilters(courses, false);

  return (
    <section
      aria-labelledby="creator-courses-title"
      className="pt-12 pb-16 xl:pt-[62px] xl:pb-[61px]"
    >
      <Container>
        <h2 id="creator-courses-title" className="sr-only">
          Courses by this creator
        </h2>
        <CatalogToolbar filters={filters} onChange={update} />
        <CourseGrid courses={results} className="mt-10 xl:-ml-px" />
      </Container>
    </section>
  );
}
