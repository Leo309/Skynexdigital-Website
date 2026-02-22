'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SPARK_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // MARKETING: slides right, slight rotation
  const marketingX = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const marketingRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // AI: slides left, slight counter-rotation
  const aiX = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const aiRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Opacity: fade in then out as you scroll
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85],
    [0.6, 1, 1, 0.3]
  );

  // Spark particles visible around 40%-70% scroll
  const sparkOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.6, 0.7],
    [0, 1, 1, 0]
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* MARKETING — left side */}
      <motion.div
        style={{
          x: marketingX,
          rotate: marketingRotate,
          opacity: textOpacity,
        }}
        className="absolute top-1/2 left-0 -translate-y-1/2 select-none"
      >
        <span className="block text-[8vw] md:text-[8vw] font-display font-bold text-white/10 leading-none whitespace-nowrap">
          MARKETING
        </span>
      </motion.div>

      {/* AI — right side */}
      <motion.div
        style={{
          x: aiX,
          rotate: aiRotate,
          opacity: textOpacity,
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 select-none"
      >
        <span className="block text-[15vw] md:text-[15vw] font-display font-bold text-skynex-accent/15 leading-none whitespace-nowrap">
          AI
        </span>
      </motion.div>

      {/* Spark particles — centered */}
      <motion.div
        style={{ opacity: sparkOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {SPARK_ANGLES.map((angle, i) => (
          <div
            key={i}
            className="spark"
            style={{
              '--spark-angle': `${angle}deg`,
              animationDelay: `${i * 0.12}s`,
            } as React.CSSProperties}
          />
        ))}
      </motion.div>
    </div>
  );
}
