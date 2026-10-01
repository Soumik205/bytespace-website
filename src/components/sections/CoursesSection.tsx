import { CourseCard } from "@/components/cards/CourseCard";
import { TopicFilter } from "@/components/sections/TopicFilter";
import { Container } from "@/components/ui/Container";
import { courses } from "@/content/landing";

export function CoursesSection() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="pt-16 lg:pt-[72px]"
    >
      <Container>
        <div className="text-center">
          <h2
            id="courses-title"
            className="mx-auto max-w-[520px] font-display text-[32px]/[1.2] font-semibold tracking-[-0.01em] text-ink-strong lg:text-h2"
          >
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[925px] text-lg text-muted">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <TopicFilter className="mt-10 lg:mt-[42px]" />

        <ul className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-[77px] xl:grid-cols-3">
          {courses.map((course) => (
            <li key={course.title}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
