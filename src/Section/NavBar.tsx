import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../Components/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-white">
            <Sparkles size={16} />
          </div>
          <span className={`text-4xl font-serif tracking-wide ${scrolled ? 'text-[#3E2723]' : 'text-[#3E2723]'}`}>
            PURE <span className="text-[#C5A059]">SMILE</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3E2723]/80">
          <a href="#" className="hover:text-[#C5A059] transition-colors">Home</a>
          <a href="#experts" className="hover:text-[#C5A059] transition-colors">Experts</a>
          <a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a>
          <Button variant="primary" className="py-2! px-6! text-xs!">Book Appointment</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;