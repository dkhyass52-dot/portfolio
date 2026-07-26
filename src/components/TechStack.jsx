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

function TechStack() {
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
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
    { name: "Figma", icon: <SiFigma />, color: "#A259FF" },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">
          Technologies
        </h2>

        <p className="text-gray-400 mt-3">
          Les technologies que j'utilise pour créer des applications modernes.
        </p>
      </div>

      <div className="relative overflow-hidden">

        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="min-w-[180px] bg-[#111827] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className="text-6xl mb-4"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <h3 className="text-white font-semibold">
                {tech.name}
              </h3>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default TechStack;