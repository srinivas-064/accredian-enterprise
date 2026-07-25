"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What types of corporate training programs does Accredian offer?",
    a: "We offer comprehensive training across Data Science, AI/ML, Product Management, Leadership Development, Digital Transformation, and more. Each program is customized to your organization's specific needs and industry context.",
  },
  {
    q: "How does the skill gap analysis work?",
    a: "Our expert team conducts thorough assessments through surveys, interviews, and skill evaluations to identify gaps between current capabilities and desired competencies. This analysis forms the foundation of your customized training roadmap.",
  },
  {
    q: "Can programs be customized for our specific industry?",
    a: "Absolutely. We specialize in creating tailored programs that address your industry's unique challenges. Our curriculum is adapted with relevant case studies, datasets, and business scenarios from your domain.",
  },
  {
    q: "What is the typical duration of a training program?",
    a: "Program duration varies based on depth and scope, typically ranging from 2-week intensive bootcamps to 6-month comprehensive transformations. We work with your schedule to minimize disruption to operations.",
  },
  {
    q: "How do you measure training ROI?",
    a: "We provide detailed ROI dashboards tracking key metrics including skill improvement scores, project completion rates, employee satisfaction, and direct business impact indicators. Reports are available in real-time through our enterprise portal.",
  },
  {
    q: "Is there support after the training is completed?",
    a: "Yes, we provide 90 days of post-program support including access to mentors, learning resources, and community forums. We also offer follow-up assessments to ensure sustained skill development.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our enterprise programs"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold ${
                      isOpen ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-blue-50 text-blue-600 rotate-180"
                        : "border-gray-200 bg-white text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden bg-white`}
                >
                  <div className="px-5 pb-6 pt-1">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
