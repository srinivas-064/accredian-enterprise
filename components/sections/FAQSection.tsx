"use client";

import { useState } from "react";

const faqCategories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous"
];

const faqs = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian offers a wide range of corporate training programs including Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation Lab."
    },
    {
      question: "What domain specializations are available?",
      answer: "We offer specializations across IT, Healthcare, Retail, Finance, Education, and Manufacturing to ensure the training is highly relevant to your industry context."
    }
  ],
  "About the Delivery": [
    {
      question: "Can the training be customized to our organization's specific needs?",
      answer: "Yes, our programs are highly customizable to align with your organization's specific goals, challenges, and team skill levels."
    },
    {
      question: "What is the mode of delivery?",
      answer: "We offer flexible delivery options including 100% online, hybrid, and on-premise training depending on your organizational requirements."
    }
  ],
  "Miscellaneous": [
    {
      question: "Do you offer post-training support?",
      answer: "Yes, we provide continued access to learning resources and post-training support to ensure successful application of the skills learned."
    }
  ]
};

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Sidebar Tabs */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col space-y-4">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setOpenFaq(null);
                }}
                className={`py-4 px-6 text-center md:text-left rounded-lg border font-semibold transition-all ${
                  activeCategory === category
                    ? "border-blue-200 text-blue-600 shadow-sm bg-white ring-1 ring-blue-100"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700 bg-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordions */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="space-y-4">
              {faqs[activeCategory as keyof typeof faqs].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex justify-between items-center w-full text-left py-4 focus:outline-none group"
                  >
                    <span className={`font-semibold text-lg transition-colors ${openFaq === idx ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"}`}>
                      {faq.question}
                    </span>
                    <span className="ml-6 flex-shrink-0 text-gray-400">
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-200 ${
                          openFaq === idx ? "rotate-180 text-blue-600" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === idx ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enquire CTA within FAQ */}
            <div className="mt-12 text-center md:text-left">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-md hover:shadow-lg">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
