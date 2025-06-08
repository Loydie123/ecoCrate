import { useState, useEffect } from 'react';

interface UseScrollPositionOptions {
  threshold?: number;
}

export function useScrollPosition({ threshold = 20 }: UseScrollPositionOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
} 