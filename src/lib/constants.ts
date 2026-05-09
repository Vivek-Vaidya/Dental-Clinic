export const CLINIC_INFO = {
  name: "Geetai Dental Hospital",
  address: "Malegaon Road, Taroda Naka, Nanded, India, Maharashtra",
  phone: "070209 11752",
  email: "GeetaiDentalHospital@Gmail.com",
  whatsappUrl: "https://wa.me/917020911752",
  workingHours: "Mon-Fri: 8AM - 6PM",
}

export type ServiceType = {
  title: string;
  slug: string;
  description: string;
  detailedDescription: string;
  pricing: string;
  image: string;
  iconName: string;
};

export const SERVICES: ServiceType[] = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    description: "Comprehensive check-ups, cleanings, and preventive care to maintain your optimal oral health.",
    detailedDescription: "Our General Dentistry services form the foundation of a healthy smile. From bi-annual exams and professional cleanings to cavity fillings and oral cancer screenings, our team ensures your teeth and gums stay in perfect condition. We focus on preventive care to stop issues before they start.",
    pricing: "Starting at $99 (Consultation & Cleaning)",
    image: "/assets/service_general.png",
    iconName: "Activity",
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description: "Enhance your smile with our advanced teeth whitening, veneers, and bonding treatments.",
    detailedDescription: "Transform your smile with our premium cosmetic treatments. Whether you're looking for professional laser teeth whitening, custom porcelain veneers, or cosmetic bonding, we use state-of-the-art techniques to give you the brilliant, flawless smile you've always wanted.",
    pricing: "Starting at $299 (Professional Whitening)",
    image: "/assets/service_cosmetic.png",
    iconName: "Sparkles",
  },
  {
    title: "Orthodontics",
    slug: "orthodontics",
    description: "Straighten your teeth with modern solutions including traditional braces and clear aligners.",
    detailedDescription: "Achieve perfectly aligned teeth with our modern orthodontic options. We offer both traditional ceramic braces and virtually invisible clear aligners (like Invisalign). Our orthodontic treatments correct overbites, underbites, and crooked teeth for a healthier, more beautiful smile.",
    pricing: "Consultations starting at $49",
    image: "/assets/service_ortho.png",
    iconName: "ShieldPlus",
  },
  {
    title: "Oral Surgery",
    slug: "oral-surgery",
    description: "Expert surgical procedures including wisdom teeth removal and dental implants.",
    detailedDescription: "Our expert surgeons provide safe, comfortable surgical procedures including painless wisdom teeth extraction, bone grafting, and the placement of permanent dental implants. We use advanced sedation techniques to ensure you are completely relaxed throughout the procedure.",
    pricing: "Varies by procedure. Implants from $1,500.",
    image: "/assets/gallery_treatment.png",
    iconName: "Stethoscope",
  },
  {
    title: "Endodontics",
    slug: "endodontics",
    description: "Specialized root canal therapy to save damaged teeth and relieve pain.",
    detailedDescription: "Endodontic treatment, or root canal therapy, is crucial for saving a tooth that is severely infected or decayed. Using advanced microscopic technology, we quickly and painlessly remove the infection, preserving your natural tooth and eliminating pain.",
    pricing: "Starting at $800 per tooth",
    image: "/assets/service_general.png",
    iconName: "HeartPulse",
  },
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    description: "Gentle and fun dental care specially designed for children of all ages.",
    detailedDescription: "We make going to the dentist a fun and positive experience for kids. Our pediatric services include gentle cleanings, fluoride treatments, sealants, and cavity fillings, all provided in a comforting environment designed specifically for younger patients.",
    pricing: "Starting at $75 (Kids Exam & Cleaning)",
    image: "/assets/staff_group.png",
    iconName: "Baby",
  }
];
