"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const handleScrollToContact = () => {
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative bg-secondary/20 py-20 md:py-28 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-6">
            Premium Services Designed For Maximum Protection
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded" />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.services.map((service) => {
            const listItems = service.benefits || service.includes || [];
            const listLabel = service.benefits ? "Benefits" : "Includes";
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="flex flex-col h-full bg-[#111111]/80 border border-white/5 hover:border-primary/30 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 group"
              >
                {/* Image Area with Zoom Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  {/* Subtle Red Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/20 z-10" />
                  
                  {/* Placeholder Image backplate */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundColor: "#1c1c1c"
                    }}
                  />
                  
                  {/* Floating Service Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur border border-white/10 rounded text-[10px] text-gray-300 font-medium tracking-widest uppercase">
                      Viper Premium
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mb-3 transition-colors duration-200 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Bullet points list (Benefits / Includes) */}
                  <div className="flex-grow">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                      {listLabel}
                    </span>
                    <ul className="space-y-2.5 mb-8">
                      {listItems.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-300 leading-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link button */}
                  <button
                    onClick={handleScrollToContact}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-secondary/80 hover:bg-primary border border-white/5 hover:border-primary text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded transition-all duration-300 active:scale-[0.97]"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
