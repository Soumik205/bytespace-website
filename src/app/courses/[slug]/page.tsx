import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AboutPanel } from "@/components/course/AboutPanel";
import { getCourse } from "@/content/courses";
import { siteName, socialMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  const title = course.title;
  return {
    title,
    ...socialMetadata(`${title} | ${siteName}`, `/courses/${course.slug}`),
  };
}

export default async function Page({ params }: PageProps<"/courses/[slug]">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();
  return <AboutPanel course={course} />;
}
