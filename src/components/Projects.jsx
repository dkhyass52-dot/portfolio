import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import hotelSeguro from "../assets/projects/seguro.png";
import portfolio from "../assets/projects/portfolio.png";
import streamHyass from "../assets/projects/stream.png";
import gestionDepenses from "../assets/projects/gestion.png";
import freshJoy from "../assets/projects/freshjoy.png";
import seguroAdmin from "../assets/projects/seguroback.png";

function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "Hotel Seguro",
      category: "Projet académique",
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
      description:
        "Plateforme d'administration pour la gestion des chambres, réservations et clients.",
      image: seguroAdmin,
      tech: ["PHP", "MySQL", "Tailwind CSS"],
      demo: "http://localhost/HOTEL_SEGURO/admin/dashboard.php",
      github: "https://github.com/dkhyass52-dot/seguro-hotel-admin.git",
    },
    {
      title: "Portfolio",
      category: "Portfolio",
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
      description:
        "Application de gestion de dépenses avec suivi des transactions.",
      image: gestionDepenses,
      tech: ["Laravel", "MySQL", "Bootstrap"],
      demo: "http://127.0.0.1:8000/dashboard",
      github: "https://github.com/dkhyass52-dot/gestion-depense.git",
    },
    {
      title: "FreshJoy",
      category: "Page de vente",
      description:
        "Application de présentation et vente de yaourt, bissap avec interface moderne.",
      image: freshJoy,
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      demo: "https://joycefresh.vercel.app/",
      github: "https://github.com/dkhyass52-dot/joycefresh.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 md:py-10 bg-white dark:bg-gradient-to-b dark:from-[#08131F] dark:to-[#0F172A] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[5px] font-semibold">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Mes projets
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto">
            Une sélection de projets réalisés avec les technologies modernes du web.
          </p>
        </motion.div>

        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-[#10B981] hover:text-black transition"
          >
            <FaChevronLeft className="mx-auto" />
          </button>

          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full bg-[#10B981] text-black hover:scale-105 transition"
          >
            <FaChevronRight className="mx-auto" />
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
                    {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="snap-start shrink-0 w-[340px] md:w-[380px] group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:border-[#10B981]/40 shadow-lg dark:shadow-none transition-all duration-500"
            >
              {/* Halo */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#10B981]/10 blur-3xl group-hover:bg-[#10B981]/20 transition duration-500"></div>

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#10B981] text-black text-xs font-bold">
                  {project.category}
                </span>

                <span className="absolute top-4 right-4 text-white/80 text-sm">
                  {project.year}
                </span>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#10B981] text-black p-4 rounded-full"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black p-4 rounded-full"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
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
