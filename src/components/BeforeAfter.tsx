"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <section id="before-after" className="relative bg-background py-20 md:py-28 overflow-hidden select-none">
      {/* Background red glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            TRANSFORMATION SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-4">
            {siteConfig.beforeAfter.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            {siteConfig.beforeAfter.subtitle}
          </p>
        </div>

        {/* Slider Frame */}
        <div className="relative border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#111111] max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {/* After Image (Background) */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url('${siteConfig.beforeAfter.afterImage}')`,
                backgroundColor: "#0d0d0d"
              }}
            />
            {/* AFTER Badge */}
            <div className="absolute right-4 bottom-4 z-20 bg-primary/95 text-white font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded shadow-lg">
              After (Viper Restored)
            </div>

            {/* Before Image (Foreground overlay with dynamic width clip) */}
            <div
              className="absolute inset-y-0 left-0 bg-cover bg-center bg-no-repeat z-10 pointer-events-none"
              style={{
                width: `${sliderPosition}%`,
                backgroundImage: `url('${siteConfig.beforeAfter.beforeImage}')`,
                backgroundColor: "#1c1c1c",
              }}
            />
            {/* BEFORE Badge */}
            <div className="absolute left-4 bottom-4 z-20 bg-black/80 text-gray-300 font-display text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded border border-white/5 shadow-lg">
              Before Detail
            </div>

            {/* Sliding Divider Bar */}
            <div
              className="absolute inset-y-0 z-20 w-0.5 bg-white pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Interactive Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20 transition-colors duration-200 cursor-ew-resize">
                <MoveHorizontal size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Caption info */}
        <div className="text-center mt-6">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            * Interactive Demo: Drag or Swipe handle to inspect paint correction & shine restoration quality.
          </span>
        </div>
      </div>
    </section>
  );
}
