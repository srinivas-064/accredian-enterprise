"use client";

const frameworkSteps = [
  {
    title: "Concept",
    description: "Foundational knowledge for deep subject understanding.",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 10h4.673M12 4v1" />
      </svg>
    )
  },
  {
    title: "Application",
    description: "Practical implementation through real-world scenarios.",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      </svg>
    )
  },
  {
    title: "Tools",
    description: "Resources and techniques for effective skill mastery.",
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const deliverySteps = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    step: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function CATFramework() {
  return (
    <div className="bg-white" id="cat">
      
      {/* 1. CAT Framework Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Our Proven Approach to <span className="text-blue-600">Learning Excellence</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative flex flex-col md:flex-row justify-between items-center py-10">
            {/* The S-curve SVG background (approximate) */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center z-0">
              <svg className="w-full h-48 text-blue-500" preserveAspectRatio="none" viewBox="0 0 800 200" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8">
                <path d="M 100,100 C 250,-50 350,250 500,100 C 650,-50 750,250 800,100" />
              </svg>
            </div>

            {frameworkSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 w-64 h-64 bg-white rounded-full border-4 border-blue-500 flex flex-col items-center justify-center shadow-lg mb-8 md:mb-0">
                <div className="mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 text-center px-6">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. How We Deliver Results Section */}
      <section className="py-24 bg-gray-50/50" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-gray-500 font-semibold uppercase tracking-wider mb-2">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliverySteps.map((step, idx) => (
              <div key={idx} className="relative bg-[#F4F8FE] rounded-2xl p-8 pt-12 flex flex-col items-center text-center shadow-sm border border-gray-100">
                {/* Left blue border decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-600 rounded-r-md"></div>
                
                {/* Number Badge */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center font-bold text-blue-600 shadow-sm text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-md shadow-blue-200">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
