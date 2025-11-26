import { ArrowRight } from "lucide-react";

const ServiceItem = ({ icon: Icon, title, description } : {
  icon: React.ComponentType<{ size?: number }>; 
  title: string;
  description: string;
  onClick?: () => void;
}) => (
  <div className="bg-white p-8 rounded-2xl border border-[#F5F0E6] hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 group cursor-pointer">
    <div className="w-14 h-14 rounded-full bg-[#FDFBF7] flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059] group-hover:text-white transition-colors duration-300">
      <Icon size={28} />
    </div>
    <h4 className="text-xl font-serif text-[#3E2723] mb-3">{title}</h4>
    <p className="text-[#3E2723]/60 text-sm leading-relaxed mb-4">{description}</p>
    <div className="flex items-center text-[#C5A059] text-xs font-bold uppercase tracking-wider opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
      Learn More <ArrowRight size={12} className="ml-2" />
    </div>
  </div>
);

export default ServiceItem