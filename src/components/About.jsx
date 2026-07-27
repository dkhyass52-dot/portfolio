import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";
import aboutImage from "../assets/images/about.jpeg";

function About() {
  return (
    <section
      id="about"
      className="py-15 md:py-10 bg-white dark:bg-[#0F172A] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[5px] font-semibold">
            À propos
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">
            Qui suis-je ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Halo lumineux */}
              <div className="absolute -inset-8 rounded-full bg-[#10B981]/20 blur-3xl"></div>

              {/* Cadre dégradé */}
              <div className="relative p-[3px] rounded-[32px] bg-gradient-to-br from-[#10B981] via-[#34D399] to-[#064E3B]">

                {/* Carte */}
                <div className="relative w-[280px] h-[360px] sm:w-[330px] sm:h-[420px] md:w-[380px] md:h-[470px] rounded-[30px] overflow-hidden bg-gray-100 dark:bg-[#111827]">

                  <img
                    src={aboutImage}
                    alt="Hyacinthe"
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* Dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#0F172A]/90 via-transparent to-transparent"></div>

                  {/* Badge disponible */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2"
                  >
                    <div className="flex items-center gap-3 bg-white/80 dark:bg-black/50 backdrop-blur-xl border border-[#10B981]/40 px-5 py-3 rounded-full">

                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                      </span>

                      <span className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium">
                        Disponible pour vos projets
                      </span>

                    </div>
                  </motion.div>

                </div>

              </div>

            </motion.div>
          </motion.div>
                    {/* Texte */}
          <motion.div
            className="order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Développeur Web Full Stack
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-7 md:leading-8 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionné par le développement web, je conçois des applications
              modernes, performantes et intuitives. Mon objectif est de créer
              des expériences numériques qui allient design, performance et
              simplicité d'utilisation.
            </p>

            {/* Points forts */}
            <div className="space-y-4 mb-10 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#10B981]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Interfaces modernes et responsives
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#10B981]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Applications web performantes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#10B981]" />
                <span className="text-gray-700 dark:text-gray-300">
                  Code propre et maintenable
                </span>
              </div>
            </div>

            {/* Technologies */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <FaReact className="text-cyan-400 text-3xl" />,
                  title: "React",
                },
                {
                  icon: <FaPhp className="text-indigo-400 text-3xl" />,
                  title: "PHP",
                },
                {
                  icon: <FaLaravel className="text-red-500 text-3xl" />,
                  title: "Laravel",
                },
                {
                  icon: <FaDatabase className="text-green-500 text-3xl" />,
                  title: "MySQL",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.04,
                  }}
                  className="bg-gray-100 dark:bg-[#1A2234] border border-gray-200 dark:border-white/10 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-300 text-center sm:text-left"
                >
                  {item.icon}

                  <span className="text-gray-900 dark:text-white font-medium">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/cv.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(16,185,129,.45)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 inline-flex w-full sm:w-auto justify-center bg-[#10B981] text-black px-8 py-4 rounded-xl font-semibold"
            >
              Télécharger mon CV
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;