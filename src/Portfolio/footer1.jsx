import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  let isDarkMode = true;
  return (
    <footer className="relative text-white py-8 bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/sp.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
