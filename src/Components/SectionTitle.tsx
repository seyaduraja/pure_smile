const SectionTitle = ({ title, subtitle } : {title : string , subtitle : string}) => (
  <div className="text-center mb-16 relative z-10">
    <h3 className="text-[#C5A059] font-medium tracking-[0.2em] text-sm uppercase mb-3">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-serif text-[#3E2723] relative inline-block">
      {title}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-[#C5A059] to-transparent"></div>
    </h2>
  </div>
);

export default SectionTitle;