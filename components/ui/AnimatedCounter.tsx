'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from '@/lib/hooks';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
}) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // easeOutCubic function for smooth deceleration
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * easeOutCubic(percentage)));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className="inline-block font-semibold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
