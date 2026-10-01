import type { Metadata } from "next";

import { CourseCatalog } from "@/components/catalog/CourseCatalog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteName, socialMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
  ...socialMetadata(`Courses | ${siteName}`, "/courses"),
};

export default async function CoursesPage({
  searchParams,
}: PageProps<"/courses">) {
  const { q } = await searchParams;
  return (
    <>
      <Header />
      <main>
        <CourseCatalog initialQuery={typeof q === "string" ? q : ""} />
      </main>
      <Footer />
    </>
  );
}
