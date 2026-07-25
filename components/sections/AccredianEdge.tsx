"use client";

const edgeItems = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    bgColor: "bg-cyan-50",
    ringColor: "ring-cyan-200",
    top: true
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bgColor: "bg-blue-600",
    ringColor: "ring-blue-200",
    top: false
  },
  {
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bgColor: "bg-[#1B3B7D]",
    ringColor: "ring-blue-100",
    top: true
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    bgColor: "bg-blue-600",
    ringColor: "ring-blue-200",
    top: false
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    bgColor: "bg-blue-600",
    ringColor: "ring-blue-200",
    top: true
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    bgColor: "bg-[#1B3B7D]",
    ringColor: "ring-blue-100",
    top: false
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    bgColor: "bg-blue-600",
    ringColor: "ring-blue-200",
    top: true
  },
];

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative hidden md:block">
        {/* Background dotted line */}
        <div className="absolute top-1/2 left-0 w-full border-t-[3px] border-dashed border-gray-300 -translate-y-1/2 z-0"></div>
        
        <div className="flex justify-between items-center relative z-10 px-8">
          {edgeItems.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center w-32">
              
              {/* Content box for Top items */}
              {item.top && (
                <div className="absolute bottom-[80px] w-48 text-center">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.description}</p>
                  {/* Vertical connector line */}
                  <div className="w-px h-6 bg-blue-400 mx-auto mt-2"></div>
                </div>
              )}

              {/* Circle Node */}
              <div className="relative group">
                {/* Outer ring */}
                <div className={`w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-gray-100 shadow-lg relative z-10 group-hover:scale-105 transition-transform`}>
                  {/* Inner colored circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bgColor} shadow-inner`}>
                    {item.icon}
                  </div>
                </div>
                {/* Connecting arrow indicator between nodes */}
                {idx < edgeItems.length - 1 && (
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-gray-300 z-0 text-xl font-bold">
                    »
                  </div>
                )}
              </div>

              {/* Content box for Bottom items */}
              {!item.top && (
                <div className="absolute top-[80px] w-48 text-center">
                  {/* Vertical connector line */}
                  <div className="w-px h-6 bg-blue-400 mx-auto mb-2"></div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{item.description}</p>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden max-w-sm mx-auto px-4 space-y-8">
        {edgeItems.map((item, idx) => (
          <div key={idx} className="flex items-start bg-slate-50 p-6 rounded-2xl border border-gray-100">
             <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center ${item.bgColor} mr-4`}>
                {item.icon}
             </div>
             <div>
               <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
               <p className="text-sm text-gray-600">{item.description}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
