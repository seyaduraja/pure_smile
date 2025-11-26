import { ArrowRight } from "lucide-react";


const ExpertCard = ({ name, title, role, image, isReversed = false } : {
  name: string;
  title: string;
  role?: string;
  image: string; 
  isReversed?: boolean;
  onBook?: () => void; 
}) => (
  <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#F5F0E6] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(197,160,89,0.15)] transition-all duration-500`}>
    
    {/* Decorative Plus Icon */}
    <div className="absolute top-8 right-8 text-[#C5A059]/20 group-hover:text-[#C5A059] transition-colors duration-500">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
      </svg>
    </div>

    {/* Image Section - Circular Gold Border */}
    <div className="relative shrink-0">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#C5A059] p-2 relative z-10 bg-white">
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      {/* Abstract circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FDFBF7] rounded-full z-0"></div>
    </div>

    {/* Text Content */}
    <div className={`text-center ${isReversed ? 'md:text-right' : 'md:text-left'} space-y-4 relative z-10`}>
      <div>
        <h3 className="text-3xl font-serif text-[#3E2723] mb-1">{name}</h3>
        <p className="text-[#C5A059] font-medium tracking-wide text-sm uppercase">{role}</p>
      </div>
      
      <p className="text-[#3E2723]/70 leading-relaxed max-w-md">
        With over 12 years of clinical experience, {name} specializes in {title.toLowerCase()}, delivering precise treatments with a gentle touch. Dedicated to preserving your natural smile through advanced endodontic therapy.
      </p>

      <div className={`pt-4 flex ${isReversed ? 'md:justify-end justify-center' : 'md:justify-start justify-center'} gap-4`}>
        <button className="flex items-center gap-2 text-[#3E2723] font-medium hover:text-[#C5A059] transition-colors group/btn">
          Book Appointment <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default ExpertCard;