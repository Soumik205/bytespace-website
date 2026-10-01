import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
      </main>
    </>
  );
}
