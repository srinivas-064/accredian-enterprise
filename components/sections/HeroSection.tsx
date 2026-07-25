"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-8 bg-white md:pt-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF4FF] rounded-[1.5rem] md:rounded-[2rem] px-6 py-8 sm:px-10 md:min-h-[420px] md:px-14 md:py-10 lg:min-h-[455px] lg:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-[0_22px_70px_rgba(15,23,42,0.08)]">
          
          <div className="md:w-[58%] z-10">
            <h1 className="text-[2.55rem] sm:text-5xl md:text-[3.45rem] lg:text-[4rem] font-bold text-gray-950 leading-[1.08] tracking-normal mb-6">
              Next-Gen <span className="text-[#2563EB]">Expertise</span>
              <br />
              For Your <span className="text-[#2563EB]">Enterprise</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold mb-9 max-w-md leading-snug">
              Cultivate high-performance teams through expert learning.
            </p>
            
            <div className="flex flex-wrap gap-x-5 gap-y-3 md:gap-x-7 mb-9">
              <div className="flex items-center text-gray-900 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tailored Solutions
              </div>
              <div className="flex items-center text-gray-900 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Industry Insights
              </div>
              <div className="flex items-center text-gray-900 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expert Guidance
              </div>
            </div>
            
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 px-8 md:px-9 rounded-lg text-lg transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5">
              Enquire Now
            </button>
          </div>

          <div className="md:w-[42%] mt-8 md:mt-0 relative z-10 flex justify-center md:absolute md:right-0 md:bottom-0 md:top-0 md:items-end md:justify-end">
            <Image
              src="/assets/accredian/hero-professionals.webp"
              alt="Enterprise learning professionals"
              width={760}
              height={600}
              priority
              className="w-full max-w-[390px] object-contain md:max-w-[520px] lg:max-w-[610px] md:translate-x-5"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
