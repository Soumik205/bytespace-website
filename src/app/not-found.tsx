import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

export const metadata: Metadata = {
  title: "Page Not Found",
  // Next.js marks this page noindex on its own; drop the site-wide index rule.
  robots: null,
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundSection />
      </main>
      {/* The design leaves a 3px white strip between the blue band and the footer. */}
      <Footer className="lg:mt-[3px]" />
    </>
  );
}
