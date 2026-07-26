import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Développement Front-end",
      description:
        "Création d'interfaces modernes, fluides et responsives offrant une excellente expérience utilisateur.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      icon: <FaLaptopCode />,
      title: "Développement Back-end",
      description:
        "Conception d'applications web performantes avec une architecture fiable et sécurisée.",
      tech: ["PHP", "Laravel", "MySQL"],
    },
    {
      icon: <FaRocket />,
      title: "Déploiement & Optimisation",
      description:
        "Optimisation des performances, référencement et mise en ligne de vos applications.",
      tech: ["Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-100 to-white dark:from-[#08131F] dark:to-[#0F172A] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[4px] md:tracking-[5px] font-semibold">
            Mes Services
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Ce que je peux réaliser
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-7 md:leading-8 px-2">
            J'accompagne les entreprises et les particuliers dans la création
            d'applications web modernes, performantes et adaptées à leurs besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none p-6 md:p-8 group transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#10B981]/10 blur-3xl group-hover:bg-[#10B981]/20 transition duration-500"></div>

              <div className="relative">

                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981] text-3xl md:text-4xl mb-6 md:mb-8 group-hover:rotate-6 transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-7 md:leading-8 mb-6 md:mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 md:px-4 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                                <button
                  className="flex items-center gap-2 text-[#10B981] font-semibold transition duration-300 hover:gap-3 group-hover:opacity-100"
                >
                  En savoir plus
                  <FaArrowRight />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;