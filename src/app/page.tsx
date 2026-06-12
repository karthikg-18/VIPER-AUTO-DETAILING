"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChoose from "@/components/WhyChoose";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      {/* Navigation Bar */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Stats Section */}
        <Stats />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section */}
        <Services />

        {/* 5. Before & After Slider Section */}
        <BeforeAfter />

        {/* 6. Why Choose VIPER Section */}
        <WhyChoose />

        {/* 7. Gallery Section */}
        <Gallery />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Contact & Maps Section */}
        <Contact />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
