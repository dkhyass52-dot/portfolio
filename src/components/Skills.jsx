import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaFigma,
  FaRobot,
} from "react-icons/fa";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-cyan-400 text-4xl" />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-xl" /> },
        {
          name: "Tailwind CSS",
          icon: <span className="text-cyan-400 font-bold text-sm">TW</span>,
        },
      ],
    },
    {
      title: "Backend",
      icon: <FaLaravel className="text-red-500 text-4xl" />,
      skills: [
        { name: "PHP", icon: <FaPhp className="text-indigo-400 text-xl" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-500 text-xl" /> },
        { name: "MySQL", icon: <FaDatabase className="text-green-500 text-xl" /> },
      ],
    },
    {
      title: "Outils",
      icon: <FaGitAlt className="text-orange-500 text-4xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white text-xl" /> },
        { name: "VS Code", icon: <span className="text-blue-400 font-bold">VS</span> },
        { name: "Figma", icon: <FaFigma className="text-pink-500 text-xl" /> },
        { name: "ChatGPT", icon: <FaRobot className="text-green-500 text-xl" /> },
        { name: "Claude", icon: <FaRobot className="text-orange-400 text-xl" /> },
      ],
    },
    {
      title: "Bases de données",
      icon: <FaDatabase className="text-green-500 text-4xl" />,
      skills: [
        { name: "MySQL", icon: <FaDatabase className="text-green-500 text-xl" /> },
        { name: "SQL", icon: <span className="text-blue-400 font-bold">SQL</span> },
        { name: "Conception BDD", icon: <span className="text-emerald-400 font-bold">DB</span> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-15 bg-white dark:bg-[#0B0F19] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-[#10B981] uppercase tracking-[4px] md:tracking-[5px] font-semibold text-sm">
            Mes compétences
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3">
            Technologies & Outils
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-7">
            Les technologies que j'utilise pour développer des applications web modernes, performantes et évolutives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl
              bg-white dark:bg-[#111827]
              border border-gray-200 dark:border-white/10
              hover:border-[#10B981]/50
              shadow-lg dark:shadow-none
              p-5 sm:p-6 md:p-8 transition-all duration-500"
            >
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#10B981]/10 blur-3xl"></div>

              <div className="relative">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-5 md:mb-6">
                  {category.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-5 md:mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.06 }}
                      className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl
                      bg-gray-100 dark:bg-[#1A2234]
                      border border-gray-200 dark:border-white/10
                      hover:border-[#10B981]/50
                      transition-all duration-300"
                    >
                      {skill.icon}

                      <span className="text-sm md:text-base text-gray-800 dark:text-white font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
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

export default Skills;