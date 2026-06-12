"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  ShieldAlert,
  Target,
  HeartHandshake,
  Sparkles,
  Shield,
  LucideIcon
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// Map titles to premium Lucide Icons
const iconMap: Record<string, LucideIcon> = {
  "Premium Quality Products": Award,
  "Skilled Detailing Specialists": Users,
  "Advanced Protection Solutions": Shield,
  "Attention To Every Detail": Target,
  "Customer-First Experience": HeartHandshake,
  "Showroom-Level Results": Sparkles,
};

export default function WhyChoose() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="why-choose" className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            WHY VIPER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-6">
            {siteConfig.whyChoose.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.whyChoose.items.map((item, index) => {
            const IconComponent = iconMap[item.title] || Sparkles;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-start gap-4 p-6 bg-secondary/20 hover:bg-secondary/40 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 group"
              >
                {/* Icon Column */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/80 border border-white/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary glow-red">
                  <IconComponent size={22} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                {/* Text Content Column */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase mb-2 transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
