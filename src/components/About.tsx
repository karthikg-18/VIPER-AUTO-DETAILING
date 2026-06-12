"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <motion.div variants={slideLeft} className="lg:col-span-7 flex flex-col">
            <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3">
              {siteConfig.about.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-tight">
              {siteConfig.about.title}
            </h2>
            <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 font-light">
              <p>
                {siteConfig.about.description.split("Our goal")[0]}
              </p>
              <p>
                Our goal {siteConfig.about.description.split("Our goal")[1]}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {siteConfig.about.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 p-3 bg-secondary/30 border border-white/5 rounded-lg">
                  <span className="flex-shrink-0 w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                    <Check size={14} className="text-primary" />
                  </span>
                  <span className="text-sm font-medium text-gray-200">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Premium Image Placeholder */}
          <motion.div variants={slideRight} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl group">
              {/* Inner glow/shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-60" />
              
              {/* Actual Image Placeholder showing luxury studio styling */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${siteConfig.about.imagePlaceholder}')`,
                  backgroundColor: "#111111" // Fallback backplate
                }}
              />

              {/* Decorative brand tag on the image */}
              <div className="absolute bottom-6 left-6 z-20">
                <span className="text-white text-xs font-display tracking-widest font-bold uppercase block">
                  VIPER HQ
                </span>
                <span className="text-primary text-[10px] tracking-widest font-semibold uppercase">
                  Bangalore, India
                </span>
              </div>
            </div>

            {/* Accent Border Box Frame behind the image */}
            <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2 border-b-2 border-r-2 border-primary/40 rounded-br-xl pointer-events-none -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
