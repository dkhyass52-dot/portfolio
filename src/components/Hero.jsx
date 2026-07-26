import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaEye } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import heroDark from "../assets/images/hero-dark.png";
import heroLight from "../assets/images/hero-light.png";

function Hero() {
  const { theme } = useTheme();

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${theme === "dark" ? heroDark : heroLight})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          theme === "dark"
            ? "bg-linear-to-r from-black/75 via-black/45 to-black/20"
            : "bg-linear-to-r from-white/20 via-white/5 to-transparent"
        }`}
      />

      {/* Halo lumineux */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/20 blur-[140px] rounded-full"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={`text-5xl md:text-7xl font-extrabold leading-tight ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hyacinthe
            <br />
            <span className="text-[#10B981]">Dossakpedji</span>
          </motion.h1>

          <motion.h2
            className={`mt-6 text-2xl md:text-3xl font-semibold ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Développeur Full Stack
          </motion.h2>

          <motion.p
            className={`mt-5 text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-slate-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Créateur d'applications web modernes.
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.06,
                y: -5,
                boxShadow: "0 15px 35px rgba(16,185,129,.45)",
              }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#10B981] text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
            >
              Mes projets
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
              whileTap={{ scale: 0.96 }}
              className={`border-2 border-[#10B981] px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all ${
                theme === "dark"
                  ? "bg-transparent text-[#10B981] hover:bg-[#10B981] hover:text-black"
                  : "bg-white/80 backdrop-blur-sm text-[#10B981] hover:bg-[#10B981] hover:text-black"
              }`}
            >
              Voir mon CV
              <FaEye />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${
          theme === "dark" ? "text-white" : "text-slate-700"
        }`}
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <FaChevronDown size={24} />
      </motion.div>
    </motion.section>
  );
}

export default Hero;