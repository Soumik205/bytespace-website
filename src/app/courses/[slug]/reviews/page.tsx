import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ReviewsPanel } from "@/components/course/ReviewsPanel";
import { getCourse } from "@/content/courses";
import { siteName, socialMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]/reviews">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  const title = `Reviews: ${course.title}`;
  return {
    title,
    ...socialMetadata(
      `${title} | ${siteName}`,
      `/courses/${course.slug}/reviews`,
    ),
  };
}

export default async function Page({
  params,
}: PageProps<"/courses/[slug]/reviews">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return <ReviewsPanel course={course} />;
}
