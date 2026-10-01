import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CreatorCourses } from "@/components/creator/CreatorCourses";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { creators, getCreator } from "@/content/creators";
import { courses } from "@/content/landing";
import { siteName, socialMetadata } from "@/lib/site";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  if (!creator) return {};
  return {
    title: creator.name,
    description: creator.headline,
    ...socialMetadata(
      `${creator.name} | ${siteName}`,
      `/creators/${creator.slug}`,
    ),
  };
}

export default async function CreatorPage({
  params,
}: PageProps<"/creators/[slug]">) {
  const creator = getCreator((await params).slug);
  if (!creator) notFound();

  const creatorCourses = courses.filter(
    (course) => course.creator === creator.handle,
  );

  return (
    <>
      <Header />
      <main>
        <CreatorHeader creator={creator} />
        <CreatorCourses courses={creatorCourses} />
      </main>
      <Footer />
    </>
  );
}
