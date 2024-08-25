import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-gray-600 backdrop-blur-lg  text-white  ">
      <div className="container  flex justify-between items-center px-4">
        {/* Logo Column */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-24 h-auto" />
        </div>

        {/* Social Media Icons Column */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
