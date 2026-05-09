"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldPlus, HeartPulse, Stethoscope, Baby } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import React from "react";

const IconMap: Record<string, React.ElementType> = {
  Activity,
  Sparkles,
  ShieldPlus,
  Stethoscope,
  HeartPulse,
  Baby
};

export default function ServicesPage() {
  return (
    <div className="py-20 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Our Dental Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            We offer a comprehensive range of dental services to ensure your smile stays healthy and beautiful for life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.iconName] || Activity;
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-accent hover:shadow-lg hover:border-primary/50 transition-all group flex flex-col h-full"
              >
                <div className="bg-accent/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/70 mb-8 flex-grow">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-primary font-medium hover:underline inline-flex items-center mt-auto"
                >
                  View Details & Pricing
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
