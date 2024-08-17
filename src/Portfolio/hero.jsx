import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

const HeroSection = () => {
  const heroRef = useRef(null);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${offset * 0.4}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Zoom Effect on Hover
  /* const handleMouseEnter = () => {
    if (heroRef.current) {
      heroRef.current.style.transform = "scale(1.05)";
    }
  };

  const handleMouseLeave = () => {
    if (heroRef.current) {
      heroRef.current.style.transform = "scale(1)";
    }
  };
 */
  return (
    <div
      ref={heroRef}
      className="relative h-[550px] overflow-hidden bg-cover bg-center transition-transform duration-500"
      style={{ backgroundImage: "url('/src/assets/web1.avif')" }}
      /* onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} */
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
        <div className="flex justify-center items-start flex-col border-l-2 border-l-secondary pl-6">
           <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
         Aamin Patel
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mt-4 font-semibold italic">
          Full-Stack Web Developer & Passionate Coder
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-300 font-light">
          "Hard work beats talent when talent doesn't work hard."
        </p>
        
        </div>
       
      </div>
    </div>
  );
};

export default HeroSection;
