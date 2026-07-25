"use client";

import Image from "next/image";

const audiences = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function WhoShouldJoin() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1868DF] rounded-xl overflow-hidden flex flex-col lg:flex-row relative min-h-[430px]">
          
          {/* Left Side */}
          <div className="lg:w-[45%] p-8 sm:p-10 lg:p-12 text-white z-10 flex flex-col justify-between">
            <div>
              <p className="text-blue-100 font-medium mb-2 text-lg">Who Should Join?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Strategic Skill<br />Enhancement
              </h2>
            </div>
            
            <div className="mt-6 lg:mt-0 relative h-64 lg:h-72 w-full">
              <Image
                src="/assets/accredian/who-should-join.png"
                alt="Professionals joining enterprise learning"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-[55%] p-8 sm:p-10 lg:p-12 lg:pl-0 z-10 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {audiences.map((audience, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="w-14 h-14 rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{audience.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative background shapes if needed */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
