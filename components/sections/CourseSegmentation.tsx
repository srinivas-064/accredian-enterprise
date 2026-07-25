"use client";

const segments = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate"
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing"
  },
  {
    title: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud"
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leadership, Mid-Career Professionals, Freshers"
  }
];

export default function CourseSegmentation() {
  return (
    <section className="py-20 bg-white">
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
              {/* Image Placeholder */}
              <div className="h-48 w-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm font-medium">
                  Image Space
                </div>
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
