import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/images/logo5.png";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#08131F] border-t border-gray-200 dark:border-white/10 transition-colors duration-500">

      {/* Halo */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-[#10B981]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10B981]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Haut du footer */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto"
            />

            <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
              Développeur Web Full Stack spécialisé dans la création
              d'applications modernes, performantes et responsives.
            </p>
          </motion.div>

          {/* Navigation */}

<div>
  <h3 className="text-gray-900 dark:text-white font-semibold mb-5">
    Navigation
  </h3>

  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
    <li>
      <a
        href="#home"
        className="hover:text-[#10B981] transition duration-300"
      >
        Accueil
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="hover:text-[#10B981] transition duration-300"
      >
        À propos
      </a>
    </li>

    <li>
      <a
        href="#services"
        className="hover:text-[#10B981] transition duration-300"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="hover:text-[#10B981] transition duration-300"
      >
        Projets
      </a>
    </li>

    <li>
      <a
        href="#skills"
        className="hover:text-[#10B981] transition duration-300"
      >
        Compétences
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-[#10B981] transition duration-300"
      >
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
  href="https://wa.me/22959951708"
  target="_blank"
  rel="noreferrer"
  className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-[#10B981] hover:text-black transition duration-300"
>
  <FaWhatsapp size={20} />
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
            Développé par <span className="text-[#10B981] font-semibold">Hyass Dev</span>
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