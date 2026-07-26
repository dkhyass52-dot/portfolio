import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import hotelSeguro from "../assets/projects/seguro.png";
import portfolio from "../assets/projects/portfolio.png";
import streamHyass from "../assets/projects/stream.png";
import gestionDepenses from "../assets/projects/gestion.png";
import collier from "../assets/projects/collier.png";

function Projects() {
  const projects = [
    {
      title: "Hotel Seguro",
      category: "Projet académique",
      year: "2025",
      description:
        "Plateforme moderne de réservation d'hôtel avec gestion des chambres, des clients et des réservations.",
      image: hotelSeguro,
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      demo: "http://localhost/HOTEL_SEGURO/index.php",
      github: "https://github.com/dkhyass52-dot/seguro-hotel.git",
    },
    {
      title: "Hotel Seguro espace admin",
      category: "Projet académique",
      year: "2025",
      description:
        "Plateforme moderne de réservation d'hôtel avec gestion des chambres, des clients et des réservations.",
      image: hotelSeguro,
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      demo: "http://localhost/HOTEL_SEGURO/admin/dashboard.php",
      github: "https://github.com/dkhyass52-dot/seguro-hotel-admin.git",
    },
    {
      title: "Portfolio",
      category: "Portfolio",
      year: "2025",
      description:
        "Portfolio personnel développé avec React, Tailwind CSS et Framer Motion.",
      image: portfolio,
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      demo: "http://localhost:5173",
      github: "https://github.com/dkhyass52-dot/portfolio.git",
    },
    {
      title: "StreamHyass",
      category: "E-commerce",
      year: "2026",
      description:
        "Boutique en ligne complète avec gestion des produits, commandes et utilisateurs.",
      image: streamHyass,
      tech: ["Laravel", "MySQL"],
      demo: "http://streamhyass.vercel.app",
      github: "https://github.com/dkhyass52-dot/streamhyass.git",
    },
    {
      title: "Gestion de dépenses",
      category: "Application Web",
      year: "2026",
      description:
        "Application de gestion de dépenses avec suivi des transactions et des catégories.",
      image: gestionDepenses,
      tech: ["Laravel", "MySQL", "Bootstrap"],
      demo: "http://127.0.0.1:8000/dashboard",
      github: "https://github.com/dkhyass52-dot/gestion-depense.git",
    },
    {
      title: "Collier",
      category: "Page de vente",
      year: "2026",
      description:
        "Plateforme de blog avec authentification, gestion des articles, catégories et commentaires.",
      image: collier,
      tech: ["Laravel", "MySQL", "Blade"],
      demo: "http://localhost/ecollier/index.php",
      github: "https://github.com/dkhyass52-dot/collier.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-white dark:bg-gradient-to-b dark:from-[#08131F] dark:to-[#0F172A] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[4px] md:tracking-[5px] font-semibold">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Mes projets
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto leading-7 md:leading-8 px-2">
            Une sélection de projets réalisés avec les technologies modernes du web.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-[#10B981]/40 shadow-lg dark:shadow-none transition-all duration-500"
            >

              {/* Halo */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#10B981]/10 blur-3xl group-hover:bg-[#10B981]/20 transition duration-500"></div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#10B981] text-black text-[11px] sm:text-xs font-bold">
                  {project.category}
                </span>

                <span className="absolute top-4 right-4 text-white/80 text-xs sm:text-sm">
                  {project.year}
                </span>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">

                  <div className="flex gap-4">

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#10B981] text-black p-3 sm:p-4 rounded-full"
                    >
                      <FaExternalLinkAlt />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black p-3 sm:p-4 rounded-full"
                    >
                      <FaGithub />
                    </motion.button>

                  </div>

                </div>
              </div>

                            {/* Contenu */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 15px 35px rgba(16,185,129,.35)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#10B981] text-black py-3 rounded-xl font-semibold"
                  >
                    <FaExternalLinkAlt />
                    Démo
                  </motion.a>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 border border-[#10B981] text-[#10B981] py-3 rounded-xl font-semibold hover:bg-[#10B981] hover:text-black transition"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;