import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiFigma,
  SiGithub,
} from "react-icons/si";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function TechStack() {
  const { theme } = useTheme();

  const technologies = [
    { icon: <FaHtml5 />, color: "#E34F26" },
    { icon: <FaCss3Alt />, color: "#1572B6" },
    { icon: <FaJs />, color: "#F7DF1E" },
    { icon: <FaReact />, color: "#61DAFB" },
    { icon: <FaPhp />, color: "#777BB4" },
    { icon: <FaLaravel />, color: "#FF2D20" },
    { icon: <SiMysql />, color: "#00758F" },
    { icon: <SiTailwindcss />, color: "#38BDF8" },
    { icon: <FaGitAlt />, color: "#F1502F" },
    {
      icon: <SiGithub />,
      color: theme === "dark" ? "#ffffff" : "#111827",
    },
    { icon: <SiFigma />, color: "#A259FF" },
  ];

  return (
    <section
      className={`py-20 overflow-hidden transition-all duration-500 ${
        theme === "dark" ? "bg-[#0B0F19]" : "bg-gray-50"
      }`}
    >
      <div className="text-center mb-12 px-6">
        <h2
          className={`text-3xl md:text-5xl font-bold ${
            theme === "dark" ? "text-white" : "text-slate-900"
          }`}
        >
          Tech Stack
        </h2>

        <p
          className={`mt-3 text-sm md:text-base ${
            theme === "dark" ? "text-gray-400" : "text-slate-600"
          }`}
        >
          Les technologies que j'utilise au quotidien.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Dégradé gauche */}
        <div
          className={`absolute left-0 top-0 z-10 h-full w-20 ${
            theme === "dark"
              ? "bg-gradient-to-r from-[#0B0F19] to-transparent"
              : "bg-gradient-to-r from-gray-50 to-transparent"
          }`}
        ></div>

        {/* Dégradé droite */}
        <div
          className={`absolute right-0 top-0 z-10 h-full w-20 ${
            theme === "dark"
              ? "bg-gradient-to-l from-[#0B0F19] to-transparent"
              : "bg-gradient-to-l from-gray-50 to-transparent"
          }`}
        ></div>

        <motion.div
          className="flex items-center gap-10 md:gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.25,
                rotate: 8,
              }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <div
                className="text-5xl sm:text-6xl md:text-7xl transition-all duration-300"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;