"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = ""; // Restore scroll
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => (prevIndex! + 1) % siteConfig.gallery.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => 
      prevIndex! === 0 ? siteConfig.gallery.length - 1 : prevIndex! - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="gallery" className="relative bg-secondary/10 py-20 md:py-28 overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            OUR SHOWROOM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-6">
            Viper Work Gallery
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Take a look at the immaculate showroom finish and deep gloss protection achieved in our studio.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded mt-6" />
        </div>

        {/* Responsive Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteConfig.gallery.map((imagePath, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/5 bg-secondary/20 shadow-lg cursor-pointer group"
            >
              {/* Image Placeholder Backplate */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${imagePath}')`,
                  backgroundColor: "#111111",
                }}
              />
              
              {/* Dark Hover Reveal Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-primary/95 flex items-center justify-center glow-red">
                    <Maximize2 size={18} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest mt-2">
                    Inspect Detail
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-white transition-colors duration-200 z-50 p-2"
              aria-label="Close Lightbox"
            >
              <X size={28} />
            </button>

            {/* Left Navigate Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-6 text-gray-400 hover:text-white transition-colors duration-200 z-50 p-2 bg-secondary/30 rounded-full hover:bg-secondary/60 border border-white/5"
              aria-label="Previous Image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Navigate Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-6 text-gray-400 hover:text-white transition-colors duration-200 z-50 p-2 bg-secondary/30 rounded-full hover:bg-secondary/60 border border-white/5"
              aria-label="Next Image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-lg border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${siteConfig.gallery[activeImageIndex]}')`,
                }}
              />
              
              {/* Image Label / Count */}
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur px-3 py-1.5 rounded text-[10px] sm:text-xs text-gray-300 font-semibold tracking-wider">
                PROJECT {activeImageIndex + 1} OF {siteConfig.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
