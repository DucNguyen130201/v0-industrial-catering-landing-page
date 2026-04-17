'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGsapAnimation(
  selector: string,
  animation: (target: gsap.TweenTarget) => void,
  dependencies: any[] = []
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (elements.length === 0) return;

    animation(elements);

    return () => {
      gsap.killTweensOf(elements);
    };
  }, dependencies);

  return containerRef;
}

export function usePageLoadAnimation() {
  useEffect(() => {
    // Stagger animation for initial page load
    gsap.from('header', {
      duration: 0.8,
      opacity: 0,
      y: -20,
      ease: 'power3.out',
    });

    gsap.from('section', {
      duration: 0.8,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2,
    });
  }, []);
}
