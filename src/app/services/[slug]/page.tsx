import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/services" className="inline-flex items-center text-foreground/60 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Image Column */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{service.title}</h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {service.detailedDescription}
              </p>
            </div>

            <div className="bg-accent/20 border border-accent rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Pricing Information</h3>
              <p className="text-2xl font-bold text-primary">{service.pricing}</p>
              <p className="text-sm text-foreground/60 mt-2">* Pricing may vary based on individual treatment plans. Contact us for an exact quote.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Why choose us for {service.title}?</h3>
              <ul className="space-y-3">
                {["State-of-the-art medical equipment", "Highly experienced specialists", "Comfortable, pain-free environment"].map((benefit, i) => (
                  <li key={i} className="flex items-center text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-accent/50">
              <a 
                href="tel:+917020911752"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-md transform hover:-translate-y-1"
              >
                Book a Consultation
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
