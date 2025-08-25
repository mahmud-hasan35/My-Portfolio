import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-4">MyPortfolio</h2>
          <p className="text-gray-400">
            Hi, I'm Mahmud. I'm a Frontend & MERN Stack Developer building modern and responsive web applications.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Mahmud. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
