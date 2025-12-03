import Navbar from '../Section/NavBar';
import Hero from '../Section/HeroSection';
import MeetExperts from '../Section/ExpertSection';
import ServicesSection from '../Section/ServicesSection';
import ContactFooter from '../Section/Footer';

const HomePage = () => {
    return (
        <div className="font-sans antialiased text-[#3E2723] bg-[#FDFBF7]">
            <Navbar />
            <Hero />
            <MeetExperts />
            <ServicesSection />
            <ContactFooter />
        </div>

    )
}

export default HomePage