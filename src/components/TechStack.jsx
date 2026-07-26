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
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
    { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
    { name: "GitHub", icon: <SiGithub />, color: theme === "dark" ? "#ffffff" : "#111827" },
    { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
  ];

  return (
  <section
    className={`py-24 overflow-hidden transition-all duration-500 ${
      theme === "dark" ? "bg-[#0B0F19]" : "bg-gray-50"
    }`}
  >
    <div className="text-center mb-16">
      <h2
        className={`text-4xl font-bold ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        Technologies
      </h2>

      <p
        className={`mt-3 ${
          theme === "dark" ? "text-gray-400" : "text-slate-600"
        }`}
      >
        Les technologies que j'utilise au quotidien.
      </p>
    </div>

    <div className="overflow-hidden">
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
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
            className="flex items-center justify-center"
          >
            <div
              className="text-6xl md:text-7xl"
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