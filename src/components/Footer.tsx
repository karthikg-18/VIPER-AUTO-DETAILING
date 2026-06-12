import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Why Viper", href: "#why-choose" },
    { label: "Before & After", href: "#before-after" },
    { label: "Work Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 pt-16 pb-8 overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded bg-white p-1">
                <Image
                  src="/images/viper-logo.jpg"
                  alt="VIPER AUTO DETAILING Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold tracking-widest text-base leading-none">
                  VIPER
                </span>
                <span className="text-primary text-[9px] uppercase tracking-[0.25em] font-medium mt-0.5">
                  Auto Detailing
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Bangalore's trusted destination for premium vehicle care. We specialize in transforming, protecting, and preserving luxury cars, SUVs, and motorcycles.
            </p>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-2">
              Where Protection Meets Perfection
            </span>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest border-l-2 border-primary pl-2">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest border-l-2 border-primary pl-2">
              Our Services
            </h4>
            <nav className="flex flex-col space-y-2">
              {siteConfig.services.map((service) => (
                <a
                  key={service.id}
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {service.title}
                </a>
              ))}
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, "#services")}
                className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Paint Correction
              </a>
            </nav>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-widest border-l-2 border-primary pl-2">
              Connect With Us
            </h4>
            <ul className="space-y-3 font-light">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{siteConfig.businessDetails.location}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href={siteConfig.socialLinks.phoneCall} className="hover:text-primary transition-colors">
                  {siteConfig.businessDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.businessDetails.email}`} className="hover:text-primary transition-colors break-all">
                  {siteConfig.businessDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-gray-400">
                <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{siteConfig.businessDetails.workingHours}</span>
              </li>
            </ul>

            {/* Social Buttons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 hover:bg-primary border border-white/5 hover:border-primary text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Page"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 hover:bg-[#25D366] border border-white/5 hover:border-[#25D366] text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-center sm:text-left gap-4">
          <span className="text-xs text-gray-500 font-light">
            &copy; {currentYear} {siteConfig.businessDetails.name}. All Rights Reserved.
          </span>
          <span className="text-xs text-gray-500 font-light">
            Designed for Luxury Vehicle Care.
          </span>
        </div>

      </div>
    </footer>
  );
}
