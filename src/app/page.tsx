"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export default function Home() {
  const features = [
    "State-of-the-art Technology",
    "Painless Procedures",
    "Expert Dental Team",
    "Affordable Care",
    "Emergency Services 24/7",
    "Comfortable Environment"
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      text: "The best dental experience I've ever had. The staff was incredibly welcoming and the procedure was completely painless.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Professional, clean, and efficient. I highly recommend them to anyone looking for top-notch dental care.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "I used to be terrified of the dentist, but their gentle approach completely changed my perspective.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6"
              >
                Your Smile is Our <br/>
                <span className="text-primary">Top Priority</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Experience world-class dental care in a relaxing and modern environment. We bring the latest technology to ensure your comfort.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="tel:+917020911752"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Book Your Visit
                </a>
                <Link 
                  href="/services"
                  className="bg-white text-foreground border border-accent px-8 py-4 rounded-full font-medium text-lg hover:bg-accent transition-colors w-full sm:w-auto inline-flex justify-center items-center"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/assets/hero_clinic.png"
                  alt="Modern Dental Clinic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-accent/50 max-w-xs animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">4.9/5 Rating</p>
                    <p className="text-sm text-foreground/60">Based on 500+ reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-full max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-3xl" />
        </div>
      </section>

      {/* Intro / About Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden shadow-lg"
            >
              <Image 
                src="/assets/staff_group.png"
                alt="Our Dental Team"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Redefining the Dental Experience</h3>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                At {CLINIC_INFO.name}, we believe that visiting the dentist shouldn&apos;t be stressful. From the moment you walk into our clinic, you&apos;ll be treated with warmth, respect, and the highest standard of care.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our team of dedicated professionals utilizes cutting-edge technology to provide painless, efficient, and beautiful results.
              </p>
              <Link 
                href="/gallery" 
                className="inline-flex items-center text-primary font-bold text-lg hover:text-primary/80 transition-colors group"
              >
                View Our Clinic
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose {CLINIC_INFO.name}?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine expertise, compassion, and advanced technology to deliver exceptional dental care for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-8 rounded-3xl bg-white border border-accent/50 shadow-sm hover:shadow-md transition-all"
              >
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-xl font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Patient Stories</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Hear what our patients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-accent/10 p-10 rounded-[2rem] border border-accent/30 relative"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 text-lg mb-8 italic">&quot;{testimonial.text}&quot;</p>
                <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
