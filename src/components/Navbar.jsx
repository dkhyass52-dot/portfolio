import Logo from "../assets/images/logo5.png";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-slate-900/60 backdrop-blur-2xl border-b border-white/10 shadow-xl"
      : "bg-transparent"
  }`}
>
      <nav className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
       <a href="#home" className="flex items-center">
  <img
    src={Logo}
    alt="HD Logo"
    className="h-16 w-auto object-contain hover:scale-105 transition-all duration-300"
  />
</a>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-[#D4AF37] transition">
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#D4AF37] transition">
              À propos
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#D4AF37] transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#D4AF37] transition">
              Projets
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Réseaux sociaux */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:text-[#D4AF37] transition">
            <FaGithub size={20} />
          </a>

          <a href="#" className="hover:text-[#D4AF37] transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Menu mobile */}
        <button className="md:hidden">
          <FaBars size={22} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;