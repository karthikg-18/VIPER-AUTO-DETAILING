"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Image with Dark Cinematic Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.8) 70%, rgba(10, 10, 10, 1) 100%), linear-gradient(to right, rgba(10, 10, 10, 0.8) 0%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.8) 100%), url('${siteConfig.hero.imagePlaceholder}')`,
        }}
      />

      {/* Red Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Overlay for Automotive/Showroom Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Subtitle / Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
              {siteConfig.hero.subtitle}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 uppercase"
          >
            {siteConfig.hero.title.split(".").map((part, index, arr) => {
              if (!part.trim()) return null;
              const isLast = index === arr.length - 2; // Split leaves trailing empty string
              return (
                <span key={index} className="block sm:inline">
                  <span className={isLast ? "text-primary text-glow-red" : "text-white"}>
                    {part.trim()}
                  </span>
                  {index < arr.length - 2 && <span className="hidden sm:inline text-gray-500 mx-2">·</span>}
                </span>
              );
            })}
          </motion.h1>

          {/* Paragraph Copy */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light"
          >
            {siteConfig.hero.description}
          </motion.p>

          {/* Core Bullet List */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full max-w-md mx-auto md:mx-0"
          >
            {siteConfig.hero.bulletPoints.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2.5 text-left">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Check size={12} className="text-primary" />
                </span>
                <span className="text-sm sm:text-base text-gray-200 font-medium tracking-wide">
                  {bullet}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("#contact")}
              className="bg-primary hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] glow-red w-full sm:w-auto"
            >
              {siteConfig.hero.ctaBookText}
            </button>
            <button
              onClick={() => handleScrollTo("#services")}
              className="bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white font-semibold text-sm sm:text-base px-8 py-4 rounded tracking-wider uppercase transition-all duration-300 active:scale-[0.97] w-full sm:w-auto"
            >
              {siteConfig.hero.ctaServicesText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
