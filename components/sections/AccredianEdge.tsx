"use client";

import Image from "next/image";

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          The <span className="text-blue-600">Accredian Edge</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Key Aspects of <span className="text-blue-600">Our Strategic Training</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src="/assets/accredian/accredian-edge.svg"
          alt="Accredian Edge strategic training diagram"
          width={1280}
          height={520}
          className="hidden w-full md:block"
        />
        <Image
          src="/assets/accredian/accredian-edge-mobile.svg"
          alt="Accredian Edge strategic training diagram"
          width={390}
          height={760}
          className="mx-auto w-full max-w-sm md:hidden"
        />
      </div>
    </section>
  );
}
