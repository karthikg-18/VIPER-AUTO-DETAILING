"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Viper", href: "#why-choose" },
    { label: "Before & After", href: "#before-after" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded bg-white p-1">
                <Image
                  src="/images/viper-logo.jpg"
                  alt="VIPER AUTO DETAILING Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold tracking-widest text-lg leading-none">
                  VIPER
                </span>
                <span className="text-primary text-[10px] uppercase tracking-[0.25em] font-medium mt-0.5">
                  Auto Detailing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium text-gray-300 hover:text-primary tracking-wider transition-colors duration-200 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={siteConfig.socialLinks.phoneCall}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors duration-200"
              >
                <Phone size={16} className="text-primary" />
                <span>{siteConfig.businessDetails.phone}</span>
              </a>
              <a
                href="#contact"
                className="bg-primary hover:bg-red-700 text-white font-medium text-sm px-5 py-2.5 rounded tracking-wider uppercase transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] glow-red"
              >
                {siteConfig.hero.ctaBookText}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-background/95 backdrop-blur-lg border-b border-border py-6 px-4 md:hidden flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-semibold text-gray-300 hover:text-primary tracking-wide transition-colors duration-200 uppercase py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href={siteConfig.socialLinks.phoneCall}
                className="flex items-center justify-center gap-2 bg-secondary border border-border text-white px-4 py-3 rounded text-sm font-medium tracking-wide uppercase transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>{siteConfig.businessDetails.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const contact = document.querySelector("#contact");
                  if (contact) {
                    contact.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-red-700 text-white font-semibold text-center px-4 py-3 rounded text-sm tracking-widest uppercase transition-all duration-200 glow-red"
              >
                {siteConfig.hero.ctaBookText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
