"use client";

import Image from "next/image";

const segments = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate",
    image: "/assets/accredian/program-specific.webp"
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/assets/accredian/industry-specific.webp"
  },
  {
    title: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/assets/accredian/topic-specific.webp"
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/assets/accredian/level-specific.webp"
  }
];

export default function CourseSegmentation() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Tailored <span className="text-blue-600">Course Segmentation</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Explore <span className="text-blue-600">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, idx) => (
            <div 
              key={idx} 
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="h-40 w-full relative">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="font-bold text-blue-600 text-xl mb-3">{segment.title}</h3>
                <p className="text-gray-600 text-sm font-medium">{segment.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
