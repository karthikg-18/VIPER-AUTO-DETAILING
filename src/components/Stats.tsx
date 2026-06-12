"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative bg-background border-y border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-center justify-center text-center p-6 md:p-4 group"
            >
              {/* Stat Value */}
              <span className="text-5xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-none mb-3 transition-colors duration-300 group-hover:text-primary">
                {stat.value}
              </span>
              
              {/* Divider line that glows red on hover */}
              <div className="w-12 h-1 bg-white/10 group-hover:bg-primary transition-colors duration-300 rounded mb-3" />
              
              {/* Stat Label */}
              <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-[0.25em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
