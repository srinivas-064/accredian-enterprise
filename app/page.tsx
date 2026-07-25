import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import PartnersSection from "@/components/sections/PartnersSection";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CATFramework from "@/components/sections/CATFramework";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <PartnersSection />
      <AccredianEdge />
      <DomainExpertise />
      <WhoShouldJoin />
      <CATFramework />
      <Testimonials />
      <FAQSection />
      <LeadCaptureForm />
    </>
  );
}
