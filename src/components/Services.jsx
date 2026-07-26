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
        className="py-32 bg-linear-to-b from-gray-100 to-white dark:from-[#08131F] dark:to-[#0F172A] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[5px] font-semibold">
            Mes Services
          </p>

          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Ce que je peux réaliser
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            J'accompagne les entreprises et les particuliers dans la création
            d'applications web modernes, performantes et adaptées à leurs besoins.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

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
                y: -12,
                scale: 1.02,
              }}
              className="relative overflow-hidden rounded-3xl
              bg-white dark:bg-white/5
              backdrop-blur-xl
              border border-gray-200 dark:border-white/10
              shadow-lg dark:shadow-none
              p-8 group transition-all duration-300"
            >

              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#10B981]/10 blur-3xl group-hover:bg-[#10B981]/20 transition duration-500"></div>

              <div className="relative">

                <div className="w-20 h-20 rounded-2xl bg-[#10B981]/15 flex items-center justify-center text-[#10B981] text-4xl mb-8 group-hover:rotate-6 transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-[#10B981]/10 text-[#10B981] text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                                  </div>

                <button
                  className="flex items-center gap-2 text-[#10B981]
                  font-semibold opacity-0 group-hover:opacity-100
                  transition duration-300"
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