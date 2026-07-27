import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import heroDark from "../assets/images/hero-light2.png";
import heroLight from "../assets/images/hero-light2.png";

function Hero() {
  const { theme } = useTheme();
  const nameRef = useRef(null);
const jobRef = useRef(null);
const descRef = useRef(null);

  useEffect(() => {
  const typedName = new Typed(nameRef.current, {
    strings: ["Hyacinthe DOSSAKPEDJI"],
    typeSpeed: 1,
    showCursor: true,
    cursorChar: "|",
    onComplete: () => {
      typedName.cursor.remove();

      const typedJob = new Typed(jobRef.current, {
        strings: ["Je suis un Développeur Full Stack"],
        typeSpeed: 1,
        showCursor: true,
        cursorChar: "|",
        onComplete: () => {
          typedJob.cursor.remove();

          new Typed(descRef.current, {
            strings: [
              "Passionné par le développement web, je conçois des expériences numériques élégantes, performantes et intuitives. De l'idée au déploiement, je développe des solutions modernes qui allient design, performance et fiabilité.",
            ],
            typeSpeed: 1,
            showCursor: true,
            cursorChar: "|",
          });
        },
      });
    },
  });

  return () => {
    typedName.destroy();
  };
}, []);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-2"
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

      {/* Halo */}
      <div className="absolute left-1/2 md:left-24 top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-[#10B981]/20 blur-[120px] rounded-full"></div>

      {/* Contenu */}
      <div className="relative z-15 space-y-10">
        <h1
  className={`text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight ${
    theme === "dark"
      ? "text-white"
      : "text-[#0F172A]"
  }`}
>
  <span ref={nameRef}></span>
</h1>

        <h2
  className={`mt-5 text-xl sm:text-2xl md:text-3xl font-semibold ${
    theme === "dark" ? "text-[#10B981]" : "text-[#0D9668]"
  }`}
>
  <span ref={jobRef}></span>
</h2>

        <p
  className={`mt-6 max-w-2xl text-base md:text-lg leading-6 font-medium ${
    theme === "dark" ? "text-gray-300" : "text-gray-700"
  }`}
>
  <span ref={descRef}></span>
</p>

        {/* Boutons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
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
            className="w-full sm:w-auto justify-center bg-[#10B981] text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
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
            className={`w-full sm:w-auto justify-center border-2 border-[#10B981] px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all ${
              theme === "dark"
                ? "bg-transparent text-[#10B981] hover:bg-[#10B981] hover:text-black"
                : "bg-white/80 backdrop-blur-sm text-[#10B981] hover:bg-[#10B981] hover:text-black"
            }`}
          >
            Voir mon CV
            <FaEye />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;