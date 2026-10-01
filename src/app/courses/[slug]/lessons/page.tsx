import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonsPanel } from "@/components/course/LessonsPanel";
import { getCourse } from "@/content/courses";
import { siteName, socialMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]/lessons">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  const title = `Lessons: ${course.title}`;
  return {
    title,
    ...socialMetadata(
      `${title} | ${siteName}`,
      `/courses/${course.slug}/lessons`,
    ),
  };
}

export default async function Page({
  params,
}: PageProps<"/courses/[slug]/lessons">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return <LessonsPanel course={course} />;
}
