"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/assets/hero_clinic.png", alt: "Modern Clinic Reception", category: "Clinic" },
  { src: "/assets/gallery_treatment.png", alt: "State-of-the-art Treatment Room", category: "Clinic" },
  { src: "/assets/staff_group.png", alt: "Our Expert Dental Team", category: "Staff" },
  { src: "/assets/service_general.png", alt: "General Dentistry Checkup", category: "Services" },
  { src: "/assets/service_cosmetic.png", alt: "Cosmetic Dentistry Results", category: "Services" },
  { src: "/assets/service_ortho.png", alt: "Clear Aligners", category: "Services" },
];

export default function GalleryPage() {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            Take a tour of our modern clinic, meet our team, and see the results of our premium dental care.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all aspect-square"
            >
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-1 block">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
