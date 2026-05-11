"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ── Real clinic photos classified by category ──────────────────────────────
const GALLERY_IMAGES = [
  // Doctor
  {
    src: "/dr.jalba.png",
    alt: "Dr. Jalba – Lead Dentist",
    category: "Doctor",
    caption: "Dr. Jalba",
    span: "tall",
  },
  {
    src: "/doctor_at_desk.jpeg",
    alt: "Doctor at reception desk",
    category: "Doctor",
    caption: "Doctor at Work",
    span: "normal",
  },

  // Clinic Interior
  {
    src: "/clinic_treatment_room.jpeg",
    alt: "Main treatment room with dual dental chairs",
    category: "Interior",
    caption: "Main Treatment Room",
    span: "wide",
  },
  {
    src: "/dental_chair_unit.jpeg",
    alt: "Dental chair and treatment unit",
    category: "Interior",
    caption: "Dental Chair Unit",
    span: "normal",
  },
  {
    src: "/waiting_area.jpeg",
    alt: "Patient waiting area inside the clinic",
    category: "Interior",
    caption: "Patient Waiting Area",
    span: "normal",
  },

  // Exterior
  {
    src: "/clinic_exterior.jpeg",
    alt: "Clinic exterior with glass facade",
    category: "Exterior",
    caption: "Clinic Exterior",
    span: "normal",
  },

  // Equipment
  {
    src: "/uv_sterilizer.jpeg",
    alt: "UV sterilizer and dental supplies",
    category: "Equipment",
    caption: "Sterilization & Supplies",
    span: "normal",
  },
  {
    src: "/equipment_workstation.jpeg",
    alt: "Dental equipment workstation",
    category: "Equipment",
    caption: "Equipment Workstation",
    span: "normal",
  },

  // Treatment
  {
    src: "/clinic.png",
    alt: "Dentist with happy patient after treatment",
    category: "Treatment",
    caption: "Happy Patient",
    span: "normal",
  },
];

const CATEGORIES = ["All", "Doctor", "Interior", "Exterior", "Equipment", "Treatment"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof GALLERY_IMAGES)[0]>(null);

  const filtered =
    active === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === active);

  return (
    <>
      {/* ── Lightbox ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-4xl w-full max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  {lightbox.category}
                </span>
                <p className="text-white text-lg font-bold mt-0.5">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 transition text-white text-xl font-bold flex items-center justify-center"
                aria-label="Close lightbox"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page ──────────────────────────────────────────────────── */}
      <div className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Our Clinic
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground/60"
            >
              A real look inside Geetai Dental Hospital — our clinic, team, equipment, and patient care.
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  active === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-white text-foreground/70 border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            <AnimatePresence>
              {filtered.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer break-inside-avoid mb-5"
                  onClick={() => setLightbox(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-1">
                      {image.category}
                    </span>
                    <p className="text-white text-base font-bold leading-tight">{image.caption}</p>
                    <p className="text-white/70 text-xs mt-1">Click to enlarge</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-foreground/40 text-lg">No photos in this category yet.</div>
          )}

        </div>
      </div>
    </>
  );
}
