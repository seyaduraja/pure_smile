const Button = ({ children , variant = 'primary', className = '' } : {children : string , variant : string , className? : string}) => {

  const baseStyle = "px-8 py-3 rounded-full transition-all duration-300 font-medium tracking-wide text-sm uppercase";

  const variants : Record<string, string> = {
    primary: "bg-[#C5A059] text-white hover:bg-[#A88645] shadow-lg shadow-[#C5A059]/20 hover:shadow-[#C5A059]/40",
    outline: "border-2 border-[#C5A059] text-[#3E2723] hover:bg-[#C5A059] hover:text-white"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;