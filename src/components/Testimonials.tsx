"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Testimonials() {
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
    <section id="testimonials" className="relative bg-background py-20 md:py-28 overflow-hidden select-none">
      {/* Background glow effects */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-6">
            What Our Customers Say
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 bg-secondary/25 hover:bg-secondary/40 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-primary/10 transition-colors duration-300">
                <Quote size={56} style={{ transform: "scaleX(-1)" }} />
              </div>

              <div>
                {/* Star Rating row */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light italic relative z-10">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex flex-col border-t border-white/5 pt-4 mt-2">
                <span className="text-white font-display font-bold uppercase tracking-wider text-sm">
                  {testimonial.name}
                </span>
                <span className="text-primary text-[11px] font-semibold uppercase tracking-widest mt-0.5">
                  {testimonial.vehicle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
