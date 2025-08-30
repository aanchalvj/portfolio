import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 90 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, level: 85 },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" />, level: 80 },
  { name: "React Router", icon: <FaReact className="text-pink-400 text-4xl" />, level: 75 },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-200 text-4xl" />, level: 85 },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" />, level: 70 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 md:px-20 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Circular Progress */}
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="gray"
                  strokeWidth="8"
                  fill="transparent"
                  className="opacity-30"
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="45%"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  animate={{ strokeDashoffset: 283 - (283 * skill.level) / 100 }}
                  transition={{ duration: 1.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {skill.icon}
                <span className="mt-1 text-sm">{skill.level}%</span>
              </div>
            </div>
            {/* Skill Name */}
            <h3 className="mt-3 text-lg font-medium">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
