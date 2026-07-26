import Logo from "../assets/images/logo5.png";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b shadow-xl transition-all duration-500 ${
        theme === "dark"
          ? "bg-[#0B0F19]/85 border-white/10"
          : "bg-white/90 border-gray-200"
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
        <ul
          className={`hidden md:flex items-center gap-8 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          <li>
            <a href="#home" className="hover:text-[#10B981] transition">
              Accueil
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#10B981] transition">
              À propos
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#10B981] transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#10B981] transition">
              Projets
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#10B981] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Réseaux sociaux + Bouton thème */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              theme === "dark"
                ? "bg-white/5 border border-white/10 text-white"
                : "bg-gray-100 border border-gray-300 text-slate-700"
            }`}
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400 text-lg" />
            ) : (
              <FaMoon className="text-slate-700 text-lg" />
            )}
          </button>

          <a
            href="https://github.com/dkhyass52-dot"
            className={`transition hover:text-[#10B981] ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaGithub size={20} />
          </a>

          <a
            href="www.linkedin.com/in/hyacinthe-dossakpedji-46720b374"
            className={`transition hover:text-[#10B981] ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Menu mobile */}
        <button
          className={`md:hidden ${
            theme === "dark" ? "text-white" : "text-slate-700"
          }`}
        >
          <FaBars size={22} />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;