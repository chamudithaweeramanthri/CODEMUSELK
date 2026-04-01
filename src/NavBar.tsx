import React, { useState } from "react";
import logo from "./assets/Logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="fixed top-0 z-20 w-full abeezee-regular backdrop-blur-[7px]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Logo */}
      <div>
        <a href="#home">
          <img
            src={logo}
            alt="CODEMUSE Logo"
            className="h-9 w-36 sm:h-10 sm:w-40 md:h-11 md:w-44 lg:h-12 lg:w-48"
          />
        </a>
      </div>

      {/* Desktop / Tablet Menu (md and up) */}
      <ul className="hidden items-center gap-6 text-[16px] text-white md:flex lg:gap-8 lg:text-[18px]">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="cursor-pointer transition hover:text-gray-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (below md) */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      </div>

      {/* Mobile Dropdown Menu (below md) */}
      {isMenuOpen && (
        <div className="mx-4 mt-1 rounded-xl  p-4 shadow-lg backdrop-blur-[60px] md:hidden sm:mx-6">
          <ul className="flex flex-col gap-4 text-[16px] text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block cursor-pointer transition hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;