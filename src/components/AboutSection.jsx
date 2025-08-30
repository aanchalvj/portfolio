import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: 95 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: 90 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 text-3xl" />, level: 85 },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: 80 },
  { name: "React Router", icon: <FaReact className="text-pink-400 text-3xl" />, level: 75 },
  { name: "Git & GitHub", icon: <FaGithub className="text-gray-200 text-3xl" />, level: 85 },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-3xl" />, level: 70 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-8 md:px-20 py-20"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent)] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent)] -z-10 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-6"
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl text-center"
      >
        I am <span className="font-semibold text-white">Aanchal Vijay</span>, a passionate{" "}
        <span className="text-pink-400">Frontend Developer</span> with strong knowledge of{" "}
        HTML, CSS, Tailwind CSS, React, and modern web tools like Git, GitHub, and Postman.  
        I completed my <span className="text-blue-400">BCA in Full Stack Web Design and Development </span> 
        from JECRC University and also worked on multiple live projects including{" "}
        <span className="text-white">DP Electric and Machinery Store</span> (deployed on Netlify).  
        My goal is to build clean, responsive, and user-friendly web applications that deliver 
        amazing user experiences.
      </motion.p>

      
    </section>
  );
}
