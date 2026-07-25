'use client';

import { useState, useEffect, useRef } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = { threshold: 0.1, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!options.triggerOnce) {
        setIsInView(false);
      }
    }, { threshold: options.threshold });

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView] as const;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

export function useAnimateOnScroll(options: { threshold?: number } = { threshold: 0.1 }) {
  return useInView({ threshold: options.threshold, triggerOnce: true });
}
