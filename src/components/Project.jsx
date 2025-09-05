import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Projects Data
const projects = [
  {
    title: "DP Electric & Machinery Store",
    description:
      "A live business website for an electrical & machinery store, built with React & Tailwind CSS.",
    liveLink: "https://dp-electric.netlify.app",
    githubLink: "https://github.com/aanchalvj/my-shop",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "Photosnap Website",
    description:
      "A modern responsive clone of the Photosnap website showcasing advanced UI design.",
    liveLink: null,
    githubLink: "https://github.com/aanchalvj/first-website",
    tech: ["HTML", "CSS", "React"],
  },
  {
    title: "Sawariya Car Decor Website",
    description:
    "A live modern responsive business website for an car decor store, built with React & Tailwind CSS.",
    liveLink: null,
    githubLink: "https://sawariya-car-decor-kota.netlify.app/",
    tech: ["Tailwind CSS", "React","Vite" ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 md:px-20 py-20"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent)] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent)] -z-10 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-12"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/60 rounded-2xl shadow-lg border border-gray-700 p-6 flex flex-col justify-between"
          >
            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
