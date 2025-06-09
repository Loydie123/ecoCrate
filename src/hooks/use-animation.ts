'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimationViewProps {
  amount?: number;
  once?: boolean;
}

export function useAnimationView({ amount = 0.2, once = true }: AnimationViewProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
    once
  });

  return { ref, isInView };
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const defaultTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96]
};

export const staggerTransition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
  staggerChildren: 0.1
}; 