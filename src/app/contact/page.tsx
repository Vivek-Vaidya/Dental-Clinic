"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CLINIC_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="py-20 bg-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Contact & Booking
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-foreground/70"
          >
            Ready to achieve your perfect smile? Get in touch with us to schedule your next appointment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-accent/50 space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Clinic Information</h3>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-foreground/70">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-foreground/70">{CLINIC_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/70">{CLINIC_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Working Hours</h4>
                  <p className="text-foreground/70">{CLINIC_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="h-64 w-full bg-accent/30 rounded-3xl overflow-hidden border border-accent flex items-center justify-center">
              <p className="text-foreground/50 font-medium">[ Google Maps Embedded iframe Placeholder ]</p>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-accent relative overflow-hidden h-full">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-3xl font-bold text-foreground mb-4">Request Sent!</h3>
                  <p className="text-foreground/70 text-lg mb-8">
                    Thank you for reaching out. Our team will contact you shortly to confirm your appointment time.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="bg-accent text-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/80 transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </motion.div>
              ) : null}

              <h3 className="text-2xl font-bold text-foreground mb-6">Request an Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">Service Required</label>
                  <select 
                    id="service" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                  >
                    <option value="">Select a service...</option>
                    <option value="general">General Checkup</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Additional Notes (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-accent bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Sending Request..." : "Submit Request"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
