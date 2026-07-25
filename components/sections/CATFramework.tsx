"use client";

import SectionHeading from "@/components/ui/SectionHeading";

export default function CATFramework() {
  const steps = [
    {
      number: "01",
      title: "Skill Gap Analysis",
      description:
        "We begin by assessing your team's current capabilities and identifying critical skill gaps. Our experts conduct thorough evaluations to map learning needs to business objectives.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "Customized Training Plan",
      description:
        "Based on the analysis, we architect a tailored learning roadmap aligned with your organizational goals. Every program is designed to deliver maximum impact for your specific context.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Flexible Program Delivery",
      description:
        "We deliver engaging, instructor-led programs that adapt to your schedule and preferences. Track progress with real-time dashboards and measure outcomes against defined KPIs.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="framework"
      className="py-20"
      style={{ background: "linear-gradient(135deg, #0f2654 0%, #1B3B7D 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The CAT Framework"
          subtitle="Our proven approach to delivering learning excellence"
          light={true}
        />

        <div className="mt-16 flex flex-col lg:flex-row items-stretch gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col lg:flex-row relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 flex-1 z-10 text-center lg:text-left">
                <div className="w-16 h-16 mx-auto lg:mx-0 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 text-xl font-bold mb-6 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-8 -mx-4 z-20">
                  <div className="text-orange-400 text-3xl opacity-60">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
