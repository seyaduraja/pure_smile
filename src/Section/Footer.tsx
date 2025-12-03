import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";


const ContactFooter = () => (
  <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 relative overflow-hidden">
    {/* Gold accent line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#1A1A1A] via-[#C5A059] to-[#1A1A1A]"></div>

    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-serif mb-4">Book Your Visit</h2>
            <p className="text-white/60 max-w-md">
              Ready to transform your smile? Schedule your consultation today
              and experience the difference of premium care.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[#C5A059]">
                <MapPin size={24} />
              </div>
              <div>
                <h5 className="text-[#C5A059] font-medium mb-1">
                  Our Location
                </h5>
                <p className="text-white/80">
                  No.88, Jawaharlal Nehru Salai, near Sun shine school <br />
                  Sapthagiri Nagar, puzhuthivakkam <br /> Velachery,
                  Chennai-6000091
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[#C5A059]">
                <Phone size={24} />
              </div>
              <div>
                <h5 className="text-[#C5A059] font-medium mb-1">
                  Phone Number
                </h5>
                <p className="text-white/80">+91 86681 67577</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-full text-[#C5A059]">
                <Mail size={24} />
              </div>
              <div>
                <h5 className="text-[#C5A059] font-medium mb-1">
                  Email Address
                </h5>
                <p className="text-white/80">care@puresmile.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
    
        <div className="rounded-md overflow-hidden  border-2 border-[#C5A059] "> 
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9529681341423!2d80.2055439748706!3d12.974860014807227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d48248d8b13%3A0xc1464d1f2e967d!2sPure%20Smile%20Dental%20and%20Implant%20clinic!5e0!3m2!1sen!2sin!4v1764181465835!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-sm">
          © 2025 PureSmile Dental Care. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-white/60 hover:text-[#C5A059] transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-[#C5A059] transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-[#C5A059] transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default ContactFooter;
