import { notFound } from "next/navigation";

import { CourseHeader } from "@/components/course/CourseHeader";
import { CoursePreview } from "@/components/course/CoursePreview";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabs } from "@/components/course/CourseTabs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";
import { courseDetails, getCourse } from "@/content/courses";

export function generateStaticParams() {
  return courseDetails.map((course) => ({ slug: course.slug }));
}

export default async function CourseLayout({
  children,
  params,
}: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <Header />
      <main>
        <section
          aria-labelledby="course-title"
          className="bg-grid pt-[120px] pb-10 [--focus-ring:var(--color-lime)] xl:h-[957px] xl:pt-[172px] xl:pb-0"
        >
          <Container>
            <CourseHeader course={course} />
            <CoursePreview course={course} className="mt-10 xl:mt-[59px]" />
          </Container>
        </section>
        {/* The summary card comes first so it sits under the video on small screens. */}
        <Container className="flex flex-col gap-10 pt-10 xl:flex-row-reverse xl:items-start xl:justify-between xl:pt-0">
          <CourseSidebar
            course={course}
            className="xl:-mt-[541px] xl:shrink-0"
          />
          <div className="xl:w-[725px]">
            <CourseTabs slug={course.slug} className="xl:mt-[79px]" />
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
