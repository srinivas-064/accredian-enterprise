"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function StatsBar() {
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our <span className="text-blue-600">Track Record</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">The Numbers Behind Our Success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 mb-4 flex items-center">
              <AnimatedCounter end={10} />K+
            </div>
            <p className="text-gray-700 font-medium max-w-xs text-lg">
              Professionals trained for exceptional career success
            </p>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 mb-4 flex items-center">
              <AnimatedCounter end={200} />+
            </div>
            <p className="text-gray-700 font-medium max-w-xs text-lg">
              Sessions delivered with unmatched learning excellence
            </p>
          </div>

          <div className="pt-6 md:pt-0 flex flex-col items-center">
            <div className="text-5xl font-bold text-blue-600 mb-4 flex items-center">
              <AnimatedCounter end={5} />K+
            </div>
            <p className="text-gray-700 font-medium max-w-xs text-lg">
              Active learners engaged in dynamic courses
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
