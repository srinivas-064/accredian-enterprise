'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';

const domains = [
  {
    title: 'Product & Innovation Hub',
    icon: '💡',
    color: '#8B5CF6',
    borderColor: 'hover:border-violet-500',
    description: 'Drive product thinking and innovation strategies',
  },
  {
    title: 'Gen-AI Mastery',
    icon: '🤖',
    color: '#06B6D4',
    borderColor: 'hover:border-cyan-500',
    description: 'Master generative AI tools and implementation',
  },
  {
    title: 'Leadership Elevation',
    icon: '👑',
    color: '#F59E0B',
    borderColor: 'hover:border-amber-500',
    description: 'Develop visionary leadership capabilities',
  },
  {
    title: 'Tech & Data Insights',
    icon: '📊',
    color: '#3B82F6',
    borderColor: 'hover:border-blue-500',
    description: 'Harness data for strategic decision-making',
  },
  {
    title: 'Operations Excellence',
    icon: '⚙️',
    color: '#10B981',
    borderColor: 'hover:border-emerald-500',
    description: 'Optimize processes and operational efficiency',
  },
  {
    title: 'Digital Enterprise',
    icon: '🌐',
    color: '#EC4899',
    borderColor: 'hover:border-pink-500',
    description: 'Lead digital transformation initiatives',
  },
  {
    title: 'Fintech Innovation Lab',
    icon: '💰',
    color: '#F97316',
    borderColor: 'hover:border-orange-500',
    description: 'Pioneer financial technology solutions',
  },
];

export default function DomainExpertise() {
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
    <section id="solutions" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <SectionHeading 
          title="Our Domain Expertise" 
          subtitle="Comprehensive training solutions across high-demand domains" 
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <div 
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-300 bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 ${domain.borderColor} group flex flex-col`}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ backgroundColor: `${domain.color}1A` }}
              >
                {domain.icon}
              </div>
              <h3 className="text-lg font-bold mt-2 mb-2 text-gray-900">{domain.title}</h3>
              <p className="text-sm text-gray-500 mb-6 flex-grow">{domain.description}</p>
              
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-semibold transition-colors"
                  style={{ color: domain.color }}
                >
                  Learn More 
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
