'use client'

import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f2654] via-[#1B3B7D] to-[#2c1b54]">
      {/* Inline styles for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(15deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float-1 {
          animation: float 15s infinite ease-in-out;
        }
        .animate-float-2 {
          animation: float 20s infinite ease-in-out;
        }
        .animate-float-3 {
          animation: float 25s infinite ease-in-out;
        }
        .delay-0 { animation-delay: 0ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
      `}} />

      {/* Floating Background Shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white opacity-10 animate-float-1" />
      <div className="absolute top-1/3 right-1/4 w-40 h-40 border-4 border-white opacity-10 animate-float-2" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-lg bg-orange-500 opacity-10 animate-float-3" />
      <div className="absolute top-1/2 right-10 w-48 h-48 rounded-full bg-blue-400 opacity-10 animate-float-1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Pill */}
        <div className="mb-8 opacity-0 animate-fade-in-up delay-0">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 shadow-lg">
            🚀 Trusted by 100+ Enterprise Partners
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 opacity-0 animate-fade-in-up delay-0">
          Next-Gen Expertise for Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#F97316]">
            Enterprise
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-10 opacity-0 animate-fade-in-up delay-200">
          Cultivate high-performance teams through expert-led learning programs. Bridge skill gaps, accelerate innovation, and drive measurable business impact.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-up delay-400">
          <a href="#get-started" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#f43f5e] rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
            Get Started
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#programs" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-[#1B3B7D] transition-all duration-300">
            Explore Programs
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-0 pointer-events-none" />
    </section>
  )
}
