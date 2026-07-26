import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import logo from "../assets/images/logo5.png";

function Footer() {
  return (
    <footer className="relative bg-white dark:bg-[#08131F] border-t border-gray-200 dark:border-white/10 transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo / Présentation */}

          <div>
            <img
  src={logo}
  alt="Logo"
  className="h-16 w-auto"
/>

            <p className="text-gray-600 dark:text-gray-400 mt-5 leading-7">
              Développeur Web Full Stack spécialisé dans la création
              d'applications modernes, performantes et responsives.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">

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
          </div>

          {/* Réseaux */}

          <div>

            <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
              Restons connectés
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/dkhyass52-dot"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-[#10B981] hover:text-black transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-[#10B981] hover:text-black transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-[#10B981] hover:text-black transition duration-300"
              >
                <FaFacebook size={20} />
              </a>

            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-6">
              Disponible pour des projets freelance et des collaborations.
            </p>

          </div>

        </div>

        {/* Bas du footer */}

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Hyass. Tous droits réservés.
          </p>

          <p className="flex items-center gap-2 text-gray-500">
            Développé avec
            <FaHeart className="text-red-500" />
            en React
          </p>

        </div>

      </div>

      {/* Bouton retour en haut */}

      <a
        href="#home"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#10B981] text-black flex items-center justify-center shadow-lg hover:scale-110 transition duration-300"
      >
        <FaArrowUp />
      </a>

    </footer>
  );
}

export default Footer;