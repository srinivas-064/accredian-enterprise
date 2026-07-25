import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import PartnersSection from "@/components/sections/PartnersSection";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CATFramework from "@/components/sections/CATFramework";
import FAQSection from "@/components/sections/FAQSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <PartnersSection />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <FAQSection />
      <Testimonials />
    </>
  );
}
