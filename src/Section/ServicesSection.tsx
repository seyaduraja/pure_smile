import ServiceItem from "../Components/ServiceItem";
import SectionTitle from "../Components/SectionTitle";
import { 
  Stethoscope, 
  Clock, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
} from 'lucide-react';

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDFBF7] rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle title="Our Premium Services" subtitle="Holistic Treatments" />
      
      <div className="grid md:grid-cols-3 gap-8">
        <ServiceItem 
          icon={Activity} 
          title="Root Canal Treatment" 
          description="Painless microscopic endodontics to save your natural teeth with highest precision."
        />
        <ServiceItem 
          icon={Sparkles} 
          title="Cosmetic Dentistry" 
          description="Smile makeovers using veneers, whitening, and bonding for a radiant look."
        />
        <ServiceItem 
          icon={ShieldCheck} 
          title="Dental Implants" 
          description="Permanent, natural-looking solutions to restore your smile's function and beauty."
        />
        <ServiceItem 
          icon={Stethoscope} 
          title="General Checkups" 
          description="Comprehensive exams and cleaning to maintain optimal oral hygiene."
        />
        <ServiceItem 
          icon={Clock} 
          title="Emergency Care" 
          description="Immediate attention for dental emergencies available 24/7 for our patients."
        />
        <ServiceItem 
          icon={Sparkles} 
          title="Orthodontics" 
          description="Clear aligners and traditional braces to perfectly align your smile."
        />
      </div>
    </div>
  </section>
);

export default ServicesSection