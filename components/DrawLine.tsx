"use client";
import { motion, useReducedMotion } from "framer-motion";
// A line that draws itself from left to right when scrolled into view.
export function DrawLine({ className = "", delay = 0, duration = 0.9 }: { className?: string; delay?: number; duration?: number }) {
  const reduce = useReducedMotion();
  return <motion.div aria-hidden className={`origin-left ${className}`} initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }} />;
}
