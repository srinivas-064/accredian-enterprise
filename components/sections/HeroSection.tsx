"use client";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF4FF] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          
          {/* Left Content */}
          <div className="md:w-3/5 z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Next-Gen <span className="text-[#2563EB]">Expertise<br className="hidden md:block"/> For Your <span className="text-[#2563EB]">Enterprise</span></span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-800 font-medium mb-10 max-w-xl">
              Cultivate high-performance teams through expert learning.
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-8 mb-10">
              <div className="flex items-center text-gray-800 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tailored Solutions
              </div>
              <div className="flex items-center text-gray-800 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Industry Insights
              </div>
              <div className="flex items-center text-gray-800 font-semibold text-sm md:text-base">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expert Guidance
              </div>
            </div>
            
            <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 px-8 md:px-10 md:py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
              Enquire Now
            </button>
          </div>

          {/* Right Image (Placeholder for the professional team) */}
          <div className="md:w-2/5 mt-12 md:mt-0 relative z-10 flex justify-end">
            <div className="w-full max-w-md h-[400px] relative">
              {/* Replace with actual image in production */}
              <div className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border-4 border-white shadow-xl">
                 <span className="text-gray-400 font-medium">Header Image Space</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
