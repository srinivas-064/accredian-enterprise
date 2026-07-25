'use client';

import React from 'react';
import { useInView } from '@/lib/hooks';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'} ${
        isInView ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-foreground'}`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-accent mt-4 mb-6 rounded-full" />
      {subtitle && (
        <p className={`text-lg max-w-2xl ${light ? 'text-gray-300' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
