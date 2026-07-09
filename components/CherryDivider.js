"use client";

import { motion } from "framer-motion";
import { Cherry } from "lucide-react";

export function CherryDivider({ label }) {
  return (
    <div className="flex items-center gap-4 bg-dark px-6 md:px-12 lg:px-24 py-5">
      <motion.div
        className="flex-1 h-px bg-gradient-to-r from-cherry to-transparent"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <span className="text-primary font-body text-[10px] font-semibold tracking-widest uppercase shrink-0 flex items-center gap-2">
        <Cherry size={12} strokeWidth={1.75} aria-hidden="true" />
        {label}
      </span>
      <motion.div
        className="flex-1 h-px bg-gradient-to-l from-cherry to-transparent"
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
