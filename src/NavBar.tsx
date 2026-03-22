import React from "react";
import logo from "./assets/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-20 w-full flex items-center justify-between px-60 py-4 abeezee-regular backdrop-blur-[7px]">
      {/* Logo */}
      <div>
        <a href="#home">
          <img src={logo} alt="CODEMUSE Logo" className="h-[48px] w-[180px]" />
        </a>
      </div>

      {/* Menu Items */}
      <ul className="flex gap-8 text-white text-20px">
        <li>
          <a href="#home" className="cursor-pointer hover:text-gray-300 transition">Home</a>
        </li>
        <li>
          <a href="#services" className="cursor-pointer hover:text-gray-300 transition">Services</a>
        </li>
        {/* Comment outing the portfolio section hens not developped yet */}
        <li>
          <a href="#projects" className="cursor-pointer hover:text-gray-300 transition">Projects</a>
        </li>

        {/* Comment outing the portfolio section hens not developped yet */}
        {/* <li>
          <a href="#clients" className="cursor-pointer hover:text-gray-300 transition">Clients</a>
        </li> */}
        <li>
          <a href="#contact" className="cursor-pointer hover:text-gray-300 transition">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;