"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    vehicle: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form
      setFormState({ name: "", phone: "", vehicle: "", service: "", message: "" });
    }, 800);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative bg-background py-20 md:py-28 overflow-hidden select-none">
      {/* Background red glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-3 block">
            CONTACT US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white uppercase tracking-tight mb-6">
            Give Your Vehicle The Care It Deserves
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Protect your investment with Bangalore's premium auto detailing specialists. Whether you need a professional wash, ceramic coating, interior detailing, or complete paint protection, VIPER AUTO DETAILING delivers results that exceed expectations.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details & Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={siteConfig.socialLinks.phoneCall}
                className="flex items-center gap-4 p-5 bg-secondary/35 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    Call Studio
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide mt-0.5">
                    {siteConfig.businessDetails.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.businessDetails.email}`}
                className="flex items-center gap-4 p-5 bg-secondary/35 border border-white/5 hover:border-primary/20 rounded-xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    Email Us
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide mt-0.5 break-all">
                    {siteConfig.businessDetails.email}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-secondary/35 border border-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    Location
                  </span>
                  <span className="text-sm font-bold text-white tracking-wide mt-0.5">
                    {siteConfig.businessDetails.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-secondary/35 border border-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-primary">
                  <Clock size={18} />
                </div>
                <div className="flex flex-col font-light">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">
                    Working Hours
                  </span>
                  <span className="text-xs font-bold text-white mt-0.5 leading-tight">
                    {siteConfig.businessDetails.workingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Appointment Form */}
            <div className="bg-[#111111]/80 border border-white/5 p-6 sm:p-8 rounded-xl shadow-xl">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wider mb-6">
                Request an Appointment
              </h3>
              
              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-lg text-center">
                  <h4 className="text-primary font-display font-bold uppercase tracking-wider mb-2 text-lg">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-gray-300 text-sm font-light">
                    Thank you for contacting VIPER. Our detailing specialists will get in touch with you shortly to confirm your booking date and slot.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-primary underline uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-secondary/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-secondary/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vehicle" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        required
                        value={formState.vehicle}
                        onChange={handleInputChange}
                        placeholder="BMW 3 Series / Ninja ZX-10R"
                        className="w-full bg-secondary/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-light"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                        Required Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formState.service}
                        onChange={handleInputChange}
                        className="w-full bg-secondary/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-light"
                      >
                        <option value="" disabled className="bg-[#111111]">Select a Service</option>
                        {siteConfig.services.map((service) => (
                          <option key={service.id} value={service.title} className="bg-[#111111]">
                            {service.title}
                          </option>
                        ))}
                        <option value="Paint Correction" className="bg-[#111111]">Paint Correction</option>
                        <option value="Other" className="bg-[#111111]">Multiple / Custom Detail Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Share details like preferred date, paint condition, or questions."
                      className="w-full bg-secondary/50 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-red-700 text-white text-sm font-semibold tracking-widest uppercase rounded transition-all duration-300 active:scale-[0.97] glow-red"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed (5 cols) */}
          <div className="lg:col-span-5 h-full min-h-[350px] lg:min-h-[550px] w-full">
            <div className="relative w-full h-full min-h-[350px] lg:min-h-[550px] border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-secondary/20">
              <iframe
                title="VIPER AUTO DETAILING Studio Location"
                src={siteConfig.businessDetails.mapsEmbedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0 grayscale invert opacity-[0.85] hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
