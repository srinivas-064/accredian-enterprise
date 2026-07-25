"use client";

import SectionHeading from "@/components/ui/SectionHeading";

export default function PartnersSection() {
  const partners = [
    "Google",
    "Microsoft",
    "Amazon",
    "TCS",
    "Accenture",
    "Infosys",
    "Wipro",
    "Deloitte",
    "Meta",
    "Adobe",
    "IBM",
    "SAP",
  ];

  return (
    <section id="partners" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeading
          title="Our Proven Partnerships"
          subtitle="Trusted by leading organizations worldwide"
        />
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>

        <div className="flex animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set of logos */}
          <div className="flex space-x-8 px-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center rounded-lg border border-gray-200 px-8 py-4 bg-white text-gray-500 font-semibold text-lg min-w-[200px]"
              >
                {partner}
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-8 px-4">
            {partners.map((partner, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center justify-center rounded-lg border border-gray-200 px-8 py-4 bg-white text-gray-500 font-semibold text-lg min-w-[200px]"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
