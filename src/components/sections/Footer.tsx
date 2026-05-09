import Link from "next/link";
import { CLINIC_INFO } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{CLINIC_INFO.name}</h3>
            <p className="text-gray-300 max-w-xs">
              Providing state-of-the-art dental care with a gentle touch. Your smile is our top priority.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+917020911752" className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{CLINIC_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Contact</a>
              <a href="tel:+917020911752" className="hover:text-white transition-colors">Book Appointment</a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
