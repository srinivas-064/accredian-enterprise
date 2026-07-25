"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    company: "ADP",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    logoColor: "text-red-600" // Using color text as logo placeholder for ADP
  },
  {
    company: "Bayer",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    logoColor: "text-green-600"
  },
  {
    company: "Reliance",
    quote: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    logoColor: "text-blue-800"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Testimonials from <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>
        </div>

        {/* Testimonial Cards Carousel */}
        <div className="relative overflow-hidden mb-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4 md:w-1/2">
                <div className="bg-white rounded-2xl p-10 h-full border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                  {/* Logo Placeholder */}
                  <div className={`text-3xl font-extrabold italic mb-6 ${testimonial.logoColor}`}>
                    {testimonial.company}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate for smooth viewing on desktop (showing 2 at a time) */}
            {testimonials.map((testimonial, idx) => (
              <div key={`dup-${idx}`} className="w-full flex-shrink-0 px-4 md:w-1/2 hidden md:block">
                <div className="bg-white rounded-2xl p-10 h-full border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
                  <div className={`text-3xl font-extrabold italic mb-6 ${testimonial.logoColor}`}>
                    {testimonial.company}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mb-24">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? "bg-blue-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#1868DF] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl">
          <div className="flex items-center mb-6 md:mb-0 z-10">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-6 shadow-md shrink-0">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to Learn More About Our Training Solutions?</h3>
              <p className="text-blue-100 text-lg">Get Expert Guidance for Your Team's Success!</p>
            </div>
          </div>
          
          <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl text-lg flex items-center transition-colors z-10 shrink-0 shadow-sm whitespace-nowrap">
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Decorative background circle */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}
