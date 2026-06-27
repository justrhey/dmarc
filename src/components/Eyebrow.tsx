import { motion, useReducedMotion } from "motion/react";

/**
 * Editorial section label: a two-digit index, a hairline rule, and a
 * wide-tracked caption. The quiet "art-directed" tell on premium sites.
 */
export default function Eyebrow({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex items-center gap-4"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="font-label text-xs font-600 tabular-nums text-accent">
        {index}
      </span>
      <span className="h-px w-10 bg-accent/40" />
      <span className="font-label text-[0.7rem] font-600 uppercase tracking-[0.28em] text-cream-dim">
        {label}
      </span>
    </motion.div>
  );
}
