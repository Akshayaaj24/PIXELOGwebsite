"use client";
import { motion, useReducedMotion } from "framer-motion";
// Line-by-line mask reveal. Pass each visual line as an array item.
export function AnimatedText({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();
  return (
    <>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span className="block" initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>{l}</motion.span>
        </span>
      ))}
    </>
  );
}
