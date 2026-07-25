'use client'

import React from 'react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsBar() {
  const stats = [
    { number: 50000, suffix: '+', label: 'Professionals Trained' },
    { number: 500, suffix: '+', label: 'Training Sessions' },
    { number: 200, suffix: '+', label: 'Programs Delivered' },
    { number: 98, suffix: '%', label: 'Satisfaction Rate' },
  ]

  return (
    <section id="stats" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
      <div className="bg-white rounded-2xl shadow-xl py-8 px-6 border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center ${
                index !== stats.length - 1 ? 'md:border-r md:border-gray-200' : ''
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#1B3B7D] mb-2 flex items-center">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2000} />
              </div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
