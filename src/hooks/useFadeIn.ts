import { useEffect, useRef, useState } from 'react';

interface UseFadeInOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  rootMargin?: string;
}

export const useFadeIn = (options: UseFadeInOptions = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = 600,
    rootMargin = '0px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    // Fallback para garantir que elementos sejam visíveis após um tempo
    const fallbackTimer = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setTimeout(() => {
            setIsVisible(true);
            setHasTriggered(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay, rootMargin, hasTriggered]);

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
  };

  return { ref, style: fadeInStyle, isVisible };
};
