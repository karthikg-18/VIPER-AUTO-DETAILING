"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed bottom-6 right-6 z-50 group pointer-events-auto"
    >
      {/* Tooltip text bubble */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black border border-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-2 rounded shadow-2xl opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        Chat with us
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black border-r border-t border-white/10 rotate-45" />
      </div>

      {/* Floating button */}
      <a
        href={siteConfig.socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl border border-white/10 transition-colors duration-300 focus:outline-none hover:scale-105 active:scale-95"
        aria-label="Contact VIPER AUTO DETAILING on WhatsApp"
      >
        {/* Pulse outline ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none -z-10" />
        <MessageCircle size={28} className="fill-white text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
      </a>
    </motion.div>
  );
}
