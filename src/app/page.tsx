import { Header } from "@/components/layout/Header";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <CategoriesSection />
      </main>
    </>
  );
}
