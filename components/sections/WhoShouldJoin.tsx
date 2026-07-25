'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

const audiences = [
  {
    title: 'Tech Professionals',
    icon: '💻',
    description: 'Software engineers, data scientists, and IT professionals looking to deepen technical expertise and stay current with emerging technologies.',
    tag: 'Advanced Technical Skills',
    tagBg: 'bg-blue-100',
    tagColor: 'text-blue-700'
  },
  {
    title: 'Non-Tech Professionals',
    icon: '📈',
    description: 'Business analysts, marketing managers, and operations leaders seeking to leverage technology and data for better decision-making.',
    tag: 'Business & Strategy',
    tagBg: 'bg-emerald-100',
    tagColor: 'text-emerald-700'
  },
  {
    title: 'Emerging Talent',
    icon: '🌱',
    description: 'Early-career professionals and recent graduates building foundational skills for accelerated career growth and development.',
    tag: 'Foundation Building',
    tagBg: 'bg-amber-100',
    tagColor: 'text-amber-700'
  },
  {
    title: 'Senior Executives',
    icon: '🎯',
    description: 'C-suite leaders, VPs, and directors driving organizational transformation and strategic innovation at enterprise scale.',
    tag: 'Strategic Leadership',
    tagBg: 'bg-violet-100',
    tagColor: 'text-violet-700'
  },
];

export default function WhoShouldJoin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll('.animate-on-scroll');
            targets.forEach((target, index) => {
              setTimeout(() => {
                target.classList.remove('opacity-0', 'translate-y-4');
                target.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="audience" className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <SectionHeading 
          title="Who Should Join?" 
          subtitle="Tailored learning paths for every professional level" 
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl p-8 shadow-md relative overflow-hidden hover:shadow-xl hover:scale-[1.02] flex flex-col group"
            >
              {/* Decorative faint icon */}
              <div className="absolute top-4 right-4 text-8xl opacity-5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {audience.icon}
              </div>

              <div className="text-4xl mb-2">
                {audience.icon}
              </div>
              
              <h3 className="text-xl font-bold mt-4 text-gray-900">{audience.title}</h3>
              <p className="text-gray-500 text-sm mt-3 mb-6 flex-grow leading-relaxed">
                {audience.description}
              </p>
              
              <div className="mt-auto pt-4">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${audience.tagBg} ${audience.tagColor}`}>
                  {audience.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
