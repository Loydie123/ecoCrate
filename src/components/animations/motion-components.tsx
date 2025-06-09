'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { 
  useAnimationView,
  fadeUpVariants,
  fadeInVariants,
  scaleUpVariants,
  slideInRightVariants,
  defaultTransition
} from '@/hooks/use-animation';

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewAmount?: number;
  viewOnce?: boolean;
}

export function FadeUp({ 
  children, 
  className = '', 
  delay = 0,
  viewAmount = 0.2,
  viewOnce = true 
}: AnimatedProps) {
  const { ref, isInView } = useAnimationView({ amount: viewAmount, once: viewOnce });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ 
  children, 
  className = '', 
  delay = 0,
  viewAmount = 0.2,
  viewOnce = true 
}: AnimatedProps) {
  const { ref, isInView } = useAnimationView({ amount: viewAmount, once: viewOnce });

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleUp({ 
  children, 
  className = '', 
  delay = 0,
  viewAmount = 0.2,
  viewOnce = true 
}: AnimatedProps) {
  const { ref, isInView } = useAnimationView({ amount: viewAmount, once: viewOnce });

  return (
    <motion.div
      ref={ref}
      variants={scaleUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideInRight({ 
  children, 
  className = '', 
  delay = 0,
  viewAmount = 0.2,
  viewOnce = true 
}: AnimatedProps) {
  const { ref, isInView } = useAnimationView({ amount: viewAmount, once: viewOnce });

  return (
    <motion.div
      ref={ref}
      variants={slideInRightVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends AnimatedProps {
  delayChildren?: number;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = '', 
  delay = 0,
  delayChildren = 0.1,
  staggerDelay = 0.1,
  viewAmount = 0.2,
  viewOnce = true 
}: StaggerContainerProps) {
  const { ref, isInView } = useAnimationView({ amount: viewAmount, once: viewOnce });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
        delayChildren,
        staggerChildren: staggerDelay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = ''
}: Omit<AnimatedProps, 'viewAmount' | 'viewOnce' | 'delay'>) {
  return (
    <motion.div
      variants={fadeUpVariants}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
} 