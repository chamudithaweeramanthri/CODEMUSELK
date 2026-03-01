import React from "react";
import logo from "./assets/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img src={logo} alt="CODEMUSE Logo" className="h-8 w-auto" />
      </div>

      {/* Menu Items */}
      <ul className="flex gap-8 text-white text-lg">
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