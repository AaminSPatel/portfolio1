import React from "react";
import { useTheme } from "./themeContext";

const AboutMe = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div id="about" className="flex flex-col md:flex-row overflow-hidden items-center justify-between p-6 space-y-6 md:space-y-0">
      {/* Image Section */}
      <div className="w-full h-80 md:w-72 md:h-72   flex items-center justify-center">
        <img
          src="src/assets/m.png"
          alt="Your Name"
          className="w-48 absolute z-20 h-48 md:w-48 md:h-48 shadow-lg rounded-full border-2 border-white"
        />
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-64 h-64 about-bg-svg"
        >
        
 <defs>
        <linearGradient id="sw-gradient-light" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 225, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(251, 168, 131, 1)" offset="70%"></stop>
          <stop id="stop3" stopColor="rgba(221, 18, 201, 1)" offset="100%"></stop>
        </linearGradient>
        <linearGradient id="sw-gradient-dark" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(28, 107, 105, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(81, 98, 131, 1)" offset="100%"></stop>
        </linearGradient>
        
      </defs>
          <path
            width="100%"
            d=""
            fill={`${isDarkMode ? ' url(#sw-gradient-dark)' : ' url(#sw-gradient-light)'}`}
            className=" scale-150 translate-x-1/2 translate-y-1/2"
            height="100%"
            transform="translate(50 50) scale(1.5)"
            strokeWidth="0"
            style={{ transition: "0.3s" }}
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M14.6,7.5C9,18.1,-12.4,18.8,-17.4,8.5C-22.5,-1.8,-11.2,-23.1,-0.6,-23.4C10.1,-23.8,20.2,-3.1,14.6,7.5Z;
                M19.2,11.3C13.3,21.2,-10.9,20.7,-17.2,10.6C-23.4,0.4,-11.7,-19.5,0.4,-19.3C12.5,-19,25,1.3,19.2,11.3Z;
                M14.1,8.7C7,20.5,-17.8,22.5,-23.1,11.8C-28.4,1,-14.2,-22.7,-1.8,-23.7C10.6,-24.7,21.3,-3.2,14.1,8.7Z;
                M20.3,12.1C14.3,22.2,-11,21.6,-17.6,11.2C-24.2,0.8,-12.1,-19.4,0.5,-19.1C13.2,-18.7,26.4,2,20.3,12.1Z;
                M17.7,9.3C11.6,20.6,-12.2,20.7,-18.2,9.5C-24.1,-1.8,-12,-24.5,-0.1,-24.5C11.8,-24.6,23.7,-2,17.7,9.3Z;
                M21,13.2C14.3,23.8,-13,23.5,-19.9,12.9C-26.9,2.2,-13.4,-18.9,0.2,-18.8C13.9,-18.6,27.7,2.7,21,13.2Z;
                M16.3,8.4C10.2,20,-13.2,20.5,-18.8,9.2C-24.4,-2.1,-12.2,-25.2,-0.5,-25.5C11.2,-25.8,22.4,-3.2,16.3,8.4Z;
                M16.6,10.1C9.9,21.2,-15.2,22.2,-21,11.7C-26.8,1.2,-13.4,-20.9,-0.9,-21.5C11.6,-22,23.3,-0.9,16.6,10.1Z;
            "
            />
          </path>
        </svg>
      </div>
      {/*         d="M20.1,-22C27.1,-18,34.7,-12.7,37,-5.6C39.3,1.5,36.4,10.4,31.3,17.1C26.3,23.9,19.2,28.5,11.6,30.8C4,33.1,-4,33.2,-10.7,30.3C-17.3,27.5,-22.6,21.8,-25.5,15.4C-28.4,9,-28.9,1.9,-29.6,-7.1C-30.3,-16.2,-31.2,-27.1,-26.2,-31.5C-21.3,-35.8,-10.7,-33.5,-2.1,-31C6.5,-28.6,13,-25.9,20.1,-22Z"
       */}
      {/* About Me Section */}
      <div className="md:w-2/3  text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
        <p className="text-lg text-primary1 leading-relaxed mb-6">
          I am a passionate and dedicated full-stack web developer with
          expertise in ReactJS, NodeJS, MySQL, Express, jQuery, Tailwind, and
          JavaScript. I love building interactive and dynamic web applications,
          and I strive to write clean, efficient, and maintainable code. I enjoy
          problem-solving and learning new technologies to improve my skills.
        </p>
        <div className="flex justify-start gap-4">
          <button className="px-6 py-3 rounded-md bg-secondary text-white hover:bg-accent-dark transition-colors">
            Learn More
          </button>
          <a href="/src/assets/pu.png" download="AaminPatel_Resume.pdf">
          <button className="px-6 py-3 rounded-md bg-secondary text-white hover:bg-accent-dark transition-colors">
            Download My CV
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
