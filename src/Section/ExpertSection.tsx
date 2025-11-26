
import WavePattern from "../Components/WavePattern";
import SectionTitle from "../Components/SectionTitle";
import ExpertCard from "../Components/ExpertCard";

const MeetExperts = () => (
  <section id="experts" className="py-24 bg-[#FDFBF7] relative">
    <WavePattern />
    <div className="container mx-auto px-6">
      <SectionTitle title="Meet Our Experts" subtitle="Professional Care" />
      
      <div className="space-y-12">
        {/* Expert 1 - Based on Image Input */}
        <ExpertCard 
          name="Dr. Pavithra Balasubramani" 
          title="Root Canal Specialist"
          role="Endodontist"
          image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        />
        
        {/* Expert 2 - Fictional Counterpart to show flow */}
        <ExpertCard 
          name="Dr. James Wilson" 
          title="Implantologist & Surgeon"
          role="Dental Surgeon"
          image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          isReversed={true}
        />
      </div>
    </div>
  </section>
);

export default MeetExperts;