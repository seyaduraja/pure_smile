import WavePattern from "../Components/WavePattern";
import Button from "../Components/Button";
import { Stethoscope, Sparkles } from 'lucide-react';


const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-[#FDFBF7] pt-20 overflow-hidden">
    <WavePattern />
    
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F5F0E6] rounded-l-[100px] transform translate-x-1/3 opacity-50 pointer-events-none" />
    
    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#C5A059]/20 text-[#C5A059] text-xs tracking-wider uppercase font-medium">
          <Sparkles size={14} />
          Excellence in Dentistry
        </div>
        <h1 className="text-5xl md:text-7xl font-serif text-[#3E2723] leading-[1.1]">
          Redefining Your <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#C5A059] to-[#997B36]">
            Perfect Smile
          </span>
        </h1>
        <p className="text-lg text-[#3E2723]/70 max-w-md leading-relaxed">
          Experience world-class dental care in an atmosphere of luxury and comfort. Your journey to confidence begins here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button variant="primary">Book Consultation</Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-[#C5A059]/20 mt-8">
          <div>
            <div className="text-3xl font-serif text-[#C5A059]">15+</div>
            <div className="text-xs text-[#3E2723]/60 uppercase tracking-wider mt-1">Years Exp.</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-[#C5A059]">2k+</div>
            <div className="text-xs text-[#3E2723]/60 uppercase tracking-wider mt-1">Happy Smiles</div>
          </div>
          <div>
            <div className="text-3xl font-serif text-[#C5A059]">100%</div>
            <div className="text-xs text-[#3E2723]/60 uppercase tracking-wider mt-1">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="relative h-[600px] hidden md:block">
        {/* Main Image Container simulating the arch shape */}
        <div className="absolute inset-0 bg-[#C5A059] rounded-t-[300px] opacity-10 transform translate-x-4 translate-y-4"></div>
        <div className="absolute inset-0 rounded-t-[300px] overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Beautiful Smile" 
              className="w-full h-full object-cover"
            />
        </div>
        
        {/* Floating Card */}
        <div className="absolute bottom-12 -left-12 bg-white p-6 rounded-xl shadow-xl border-l-4 border-[#C5A059] max-w-xs animate-float">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-[#FDFBF7] p-2 rounded-full">
               <Stethoscope className="text-[#C5A059]" size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#3E2723]">Advanced Care</p>
              <p className="text-xs text-[#3E2723]/50">Latest Technology</p>
            </div>
          </div>
          <p className="text-xs text-[#3E2723]/70 italic">"State of the art facilities for the best possible treatment."</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;