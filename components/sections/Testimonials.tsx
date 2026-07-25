"use client";

import { useState, useEffect } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rajesh Kumar",
    title: "VP of Engineering",
    company: "TechCorp India",
    initials: "RK",
    color: "#3B82F6",
    quote:
      "Accredian transformed our engineering team's capabilities. The customized AI training program helped us reduce development cycles by 40% and significantly improved our team's confidence with cutting-edge technologies.",
  },
  {
    name: "Priya Sharma",
    title: "Chief Learning Officer",
    company: "Global Solutions Ltd",
    initials: "PS",
    color: "#10B981",
    quote:
      "The ROI we've seen from Accredian's programs is remarkable. Within 6 months, our teams showed measurable improvement in productivity and innovation. The CAT framework truly delivers results.",
  },
  {
    name: "Michael Chen",
    title: "Head of Data Science",
    company: "FinServe Analytics",
    initials: "MC",
    color: "#8B5CF6",
    quote:
      "What sets Accredian apart is their deep understanding of enterprise needs. The training wasn't generic—it was tailored precisely to our data challenges and business context.",
  },
  {
    name: "Anita Desai",
    title: "HR Director",
    company: "Innovate Corp",
    initials: "AD",
    color: "#F97316",
    quote:
      "We've partnered with many training providers, but Accredian's approach is unique. The skill gap analysis alone provided insights that reshaped our entire L&D strategy.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Partners Say"
          subtitle="Hear from organizations that transformed their workforce"
        />

        <div className="mt-16 relative">
          <div className="relative overflow-hidden rounded-2xl bg-slate-50 p-8 md:p-12 border border-gray-100 shadow-sm min-h-[350px] flex flex-col justify-center">
            {/* Background Quote Mark */}
            <div className="absolute top-4 left-6 text-8xl font-serif text-blue-900/5 leading-none select-none">
              &quot;
            </div>

            <div className="relative z-10 transition-opacity duration-500">
              <div className="flex justify-center mb-6 text-amber-400 text-xl tracking-widest">
                ★★★★★
              </div>
              
              <p className="text-lg md:text-2xl text-center text-gray-700 italic leading-relaxed mb-10 max-w-3xl mx-auto">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-md"
                  style={{ backgroundColor: testimonials[activeIndex].color }}
                >
                  {testimonials[activeIndex].initials}
                </div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="flex gap-2 mx-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeIndex
                      ? "w-8 bg-blue-900"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="hidden md:flex w-10 h-10 rounded-full border border-gray-200 items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
