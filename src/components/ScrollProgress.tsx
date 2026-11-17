"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin ember bar at the very top that fills as the page scrolls. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-primary"
      style={{ scaleX }}
    />
  );
}
