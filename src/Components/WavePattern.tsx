const WavePattern = ({ className = "" }) => (
  <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
    <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 50 Q 25 30 50 50 T 100 50 V 100 H 0 Z" fill="none" stroke="#C5A059" strokeWidth="0.5" />
      <path d="M0 60 Q 25 40 50 60 T 100 60 V 100 H 0 Z" fill="none" stroke="#C5A059" strokeWidth="0.5" />
      <path d="M0 40 Q 25 20 50 40 T 100 40 V 100 H 0 Z" fill="none" stroke="#C5A059" strokeWidth="0.5" />
      {/* Decorative circles/sparkles */}
      <circle cx="10" cy="20" r="0.5" fill="#C5A059" />
      <circle cx="90" cy="80" r="0.5" fill="#C5A059" />
      <circle cx="50" cy="10" r="0.5" fill="#C5A059" />
    </svg>
  </div>
);


export default WavePattern;