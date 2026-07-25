"use client";

import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useAnimateOnScroll } from "@/lib/hooks";

const features = [
  {
    title: "Expert Mentorship",
    description:
      "Learn from 500+ industry practitioners with hands-on experience at top global companies. Our mentors bring real-world insights to every session.",
    icon: "👨‍🏫",
    color: "bg-blue-500",
    lightColor: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
  {
    title: "ROI Dashboards",
    description:
      "Track employee progress and training ROI with advanced analytics. Make data-driven decisions to optimize your learning investments.",
    icon: "📊",
    color: "bg-green-500",
    lightColor: "bg-green-500/10",
    textColor: "text-green-500",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Robust platform security with SSO integration, data encryption, and compliance with enterprise security standards.",
    icon: "🔒",
    color: "bg-purple-500",
    lightColor: "bg-purple-500/10",
    textColor: "text-purple-500",
  },
  {
    title: "Accelerated Upskilling",
    description:
      "Reduce time-to-competency by 60% with our proven methodologies. Industry-standard frameworks ensure rapid and effective skill development.",
    icon: "🚀",
    color: "bg-orange-500",
    lightColor: "bg-orange-500/10",
    textColor: "text-orange-500",
  },
];

export default function AccredianEdge() {
  const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.1 });

  return (
    <section id="edge" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Accredian Edge"
          subtitle="What sets us apart in corporate training excellence"
        />

        <div
          ref={ref as any}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className={`absolute left-0 top-8 bottom-8 w-1 rounded-r-md ${feature.color}`}
              ></div>
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${feature.lightColor}`}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
