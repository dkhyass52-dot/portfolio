import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Développement Front-end",
      description:
        "Création d'interfaces modernes, responsives et intuitives offrant une excellente expérience utilisateur.",
      tech: ["React", "Tailwind CSS", "Bootstrap", "JavaScript"],
    },
    {
      icon: <FaLaptopCode />,
      title: "Développement Back-end",
      description:
        "Développement d'applications web performantes avec une architecture fiable, sécurisée et évolutive.",
      tech: ["PHP", "Laravel", "MySQL"],
    },
    {
      icon: <FaRocket />,
      title: "Déploiement & Optimisation",
      description:
        "Optimisation des performances, SEO et déploiement d'applications web modernes.",
      tech: ["Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-[#08131F] dark:to-[#0F172A] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#10B981] uppercase tracking-[5px] font-semibold">
            Mes Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Ce que je peux réaliser
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            J'accompagne les entreprises et les particuliers dans la création
            d'applications web modernes, performantes et adaptées à leurs
            besoins.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl
              bg-white dark:bg-[#101827]/80
              border border-gray-200 dark:border-white/10
              hover:border-[#10B981]/50
              shadow-xl dark:shadow-none
              backdrop-blur-xl
              p-8
              transition-all duration-500"
            >

              {/* Halo */}
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#10B981]/10 blur-3xl group-hover:bg-[#10B981]/20 transition duration-500"></div>

              {/* Ligne décorative */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#10B981] via-emerald-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

              <div className="relative flex flex-col h-full">

                {/* Icône */}
                <motion.div
                  whileHover={{ rotate: 8 }}
                  className="w-20 h-20 rounded-2xl bg-[#10B981]/10 text-[#10B981]
                  flex items-center justify-center text-4xl mb-7"
                >
                  {service.icon}
                </motion.div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-7 flex-grow">
                  {service.description}
                </p>

                {/* Séparateur */}
                <div className="w-full h-px bg-gray-200 dark:bg-white/10 my-7"></div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full
                      bg-[#10B981]/10
                      border border-[#10B981]/20
                      text-[#10B981]
                      text-sm
                      font-medium
                      transition
                      hover:bg-[#10B981]
                      hover:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;