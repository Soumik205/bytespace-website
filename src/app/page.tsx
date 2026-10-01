import { Header } from "@/components/layout/Header";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CreatorsSection } from "@/components/sections/CreatorsSection";
import { GrowthSection } from "@/components/sections/GrowthSection";
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
        <div className="overflow-hidden bg-glow-features">
          <GrowthSection />
          <CreatorsSection />
        </div>
      </main>
    </>
  );
}
