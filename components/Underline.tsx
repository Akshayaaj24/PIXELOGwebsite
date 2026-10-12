"use client";
import { motion, useReducedMotion } from "framer-motion";
// Underline that grows under the text when scrolled into view.
export function Underline({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.span className="bg-[linear-gradient(#000,#000)] bg-bottom bg-no-repeat pb-1" initial={{ backgroundSize: reduce ? "100% 4px" : "0% 4px" }}
      whileInView={{ backgroundSize: "100% 4px" }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.span>
  );
}
