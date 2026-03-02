import React from "react";
import logo from "./assets/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-20 w-full flex items-center justify-between px-60 py-4 abeezee-regular backdrop-blur-[7px]">
      {/* Logo */}
      <div>
        <img src={logo} alt="CODEMUSE Logo" className="h-[48px] w-[180px]" />
      </div>

      {/* Menu Items */}
      <ul className="flex gap-8 text-white text-20px">
        <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Services</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Portfolio</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Clients</li>
        <li className="cursor-pointer hover:text-gray-300 transition">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;