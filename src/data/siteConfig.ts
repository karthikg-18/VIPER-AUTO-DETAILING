export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits?: string[];
  includes?: string[];
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  vehicle: string;
  review: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  businessDetails: {
    name: string;
    location: string;
    phone: string;
    email: string;
    workingHours: string;
    mapsEmbedUrl: string;
  };
  socialLinks: {
    instagram: string;
    whatsapp: string;
    phoneCall: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bulletPoints: string[];
    ctaBookText: string;
    ctaServicesText: string;
    imagePlaceholder: string;
  };
  about: {
    tagline: string;
    title: string;
    description: string;
    highlights: string[];
    imagePlaceholder: string;
  };
  stats: StatItem[];
  services: ServiceItem[];
  whyChoose: {
    title: string;
    items: WhyChooseItem[];
  };
  beforeAfter: {
    beforeImage: string;
    afterImage: string;
    title: string;
    subtitle: string;
  };
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  gallery: string[];
}

export const siteConfig: SiteConfig = {
  businessDetails: {
    name: "VIPER AUTO DETAILING",
    location: "#2, Srinivaspura cross, Behind Gowdru mane mudde oota hotel, Dr.Vishnuvardhan main road, Chennasandra village, Bangalore, India 560098",
    phone: "+91 99866 56733",
    email: "info@viperdetailing.in",
    workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM, Sunday: Closed",
    // Standard beautiful Google Maps embed showing Bangalore
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124443.08447881023!2d77.51403062329388!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e897e4c20!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1718131234567!5m2!1sen!2sus",
  },
  socialLinks: {
    instagram: "https://www.instagram.com/viper_autodetailing?igsh=c3BuYm9xMWwwcDBt",
    whatsapp: "https://wa.me/919986656733?text=Hi%20Viper%20Auto%20Detailing%2C%20I%20would%20like%20to%20book%20an%20appointment.",
    phoneCall: "tel:+919986656733",
  },
  hero: {
    title: "Protect. Restore. Elevate.",
    subtitle: "Bangalore's Premium Auto Detailing Studio",
    description: "Your vehicle deserves more than a basic wash. At VIPER AUTO DETAILING, we deliver world-class detailing, ceramic coating, paint protection, and premium automotive care that preserves your vehicle's beauty, value, and performance.",
    bulletPoints: [
      "Ceramic Coating",
      "Paint Protection Film (PPF)",
      "Interior Detailing",
      "Premium Car Wash",
      "Bike Wash & Detailing",
      "Paint Correction"
    ],
    ctaBookText: "Book Appointment",
    ctaServicesText: "View Services",
    imagePlaceholder: "/images/hero-car.jpg",
  },
  about: {
    tagline: "Passion for Perfection. Obsession with Detail.",
    title: "Bangalore's Trusted Destination for Premium Vehicle Care",
    description: "VIPER AUTO DETAILING is Bangalore's trusted destination for premium vehicle care. We specialize in transforming and protecting vehicles using advanced detailing techniques, professional-grade products, and industry-leading protection solutions. Our goal is simple: to keep your vehicle looking better than the day you bought it. From luxury sedans and performance cars to motorcycles and SUVs, every vehicle that enters our studio receives personalized attention and uncompromising workmanship. At VIPER, we don't just clean vehicles—we restore, protect, and preserve them.",
    highlights: [
      "Premium vehicle care",
      "Passion for perfection",
      "Bangalore location",
      "Protection and preservation"
    ],
    imagePlaceholder: "/images/about-studio.jpg",
  },
  stats: [
    { value: "5,000+", label: "Vehicles Detailed" },
    { value: "3,500+", label: "Happy Clients" },
    { value: "8+", label: "Years Experience" }
  ],
  services: [
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      description: "Give your vehicle a deep glossy finish with long-lasting protection against UV rays, dirt, oxidation, and environmental contaminants.",
      benefits: [
        "Extreme Gloss Enhancement",
        "Hydrophobic Water Beading",
        "UV Protection",
        "Easier Maintenance"
      ],
      image: "/images/services/ceramic-coating.jpg"
    },
    {
      id: "ppf",
      title: "Paint Protection Film (PPF)",
      description: "Protect your vehicle's paint from scratches, stone chips, swirl marks, and road debris with high-performance transparent protection film.",
      benefits: [
        "Self-Healing Technology",
        "Scratch Resistance",
        "Stone Chip Protection",
        "Maintains Original Paint Finish"
      ],
      image: "/images/services/ppf.jpg"
    },
    {
      id: "car-detailing",
      title: "Car Detailing",
      description: "Comprehensive interior and exterior detailing designed to restore your vehicle's appearance to showroom condition.",
      includes: [
        "Deep Cleaning",
        "Paint Decontamination",
        "Polishing & Enhancement",
        "Exterior Restoration"
      ],
      image: "/images/services/car-detailing.jpg"
    },
    {
      id: "interior-detailing",
      title: "Interior Detailing",
      description: "Refresh and sanitize every corner of your vehicle's cabin for a cleaner, healthier, and more luxurious driving experience.",
      includes: [
        "Seat Cleaning",
        "Dashboard Restoration",
        "Steam Sanitization",
        "Odor Removal"
      ],
      image: "/images/services/interior-detailing.jpg"
    },
    {
      id: "premium-car-wash",
      title: "Premium Car Wash",
      description: "A safe, professional washing process that removes dirt and contaminants without damaging your vehicle's paintwork.",
      includes: [
        "Foam Wash",
        "Hand Wash",
        "Wheel Cleaning",
        "Drying & Finishing"
      ],
      image: "/images/services/car-wash.jpg"
    },
    {
      id: "bike-detailing",
      title: "Bike Wash & Detailing",
      description: "Professional motorcycle cleaning and detailing services that restore shine while protecting painted and metal surfaces.",
      includes: [
        "Perfect for Sports Bikes",
        "Perfect for Superbikes",
        "Perfect for Touring Bikes",
        "Perfect for Daily Riders"
      ],
      image: "/images/services/bike-detailing.jpg"
    }
  ],
  whyChoose: {
    title: "Excellence Is In The Details",
    items: [
      {
        title: "Premium Quality Products",
        description: "We use only professional-grade detailing products trusted by automotive enthusiasts and luxury vehicle owners."
      },
      {
        title: "Skilled Detailing Specialists",
        description: "Our experienced technicians are trained to deliver flawless results with precision and care."
      },
      {
        title: "Advanced Protection Solutions",
        description: "From Ceramic Coating to PPF installation, we provide industry-leading protection for long-term value."
      },
      {
        title: "Attention To Every Detail",
        description: "No shortcuts. No compromises. Every vehicle is treated with the same level of care as our own."
      },
      {
        title: "Customer-First Experience",
        description: "Transparent pricing, honest recommendations, and exceptional customer service from start to finish."
      },
      {
        title: "Showroom-Level Results",
        description: "Our mission is simple: make your vehicle look extraordinary."
      }
    ]
  },
  beforeAfter: {
    beforeImage: "/images/before-fortuner.png",
    afterImage: "/images/after-fortuner.png",
    title: "Before & After Transformation",
    subtitle: "Drag the slider to see the dramatic restoration and gloss enhancement of our detailing process."
  },
  testimonials: [
    {
      name: "Rahul S.",
      vehicle: "Luxury Sedan Owner",
      review: "This is a placeholder review. Got full ceramic coating detailing done here. You can customize this text in siteConfig.ts to display your actual customer reviews.",
      rating: 5
    },
    {
      name: "Arjun M.",
      vehicle: "Premium SUV Owner",
      review: "This is a placeholder review. Got Paint Protection Film (PPF) installed on my SUV. You can customize this text in siteConfig.ts to display your actual customer reviews.",
      rating: 5
    },
    {
      name: "Karthik R.",
      vehicle: "German Hatchback Owner",
      review: "This is a placeholder review. Incredible interior detail work. You can customize this text in siteConfig.ts to display your actual customer reviews.",
      rating: 5
    },
    {
      name: "Naveen P.",
      vehicle: "Superbike Owner",
      review: "This is a placeholder review. Exceptional care for motorcycles. You can customize this text in siteConfig.ts to display your actual customer reviews.",
      rating: 5
    }
  ],
  faqs: [
    {
      question: "How long does Ceramic Coating last?",
      answer: "Depending on the package and maintenance, ceramic coatings can last several years while providing excellent gloss and protection."
    },
    {
      question: "Is Paint Protection Film worth it?",
      answer: "Absolutely. PPF protects against scratches, stone chips, swirl marks, and everyday road damage while preserving your original paint."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For optimal appearance and protection, we recommend professional detailing every 4–6 months."
    },
    {
      question: "How long does a detailing service take?",
      answer: "The duration depends on the service package and vehicle condition. Most detailing services are completed within the same day."
    },
    {
      question: "Do you detail motorcycles?",
      answer: "Yes. We offer specialized bike wash and detailing services for all types of motorcycles."
    },
    {
      question: "Can you remove swirl marks and light scratches?",
      answer: "Yes. Our paint correction and polishing services significantly reduce swirl marks, oxidation, and minor paint imperfections."
    }
  ],
  gallery: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg"
  ]
};
