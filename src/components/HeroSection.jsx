import React from "react";
import { motion } from "framer-motion";
import myImage from "../assets/my pic.jpg"; // <-- apni image ka path daaliye

const ButtonRotatingBackgroundGradient = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-900">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full 
        bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl"
      >
        View My Work
      </span>
    </button>
  );
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20 overflow-hidden bg-slate-950"
    >
      {/* Radial Gradient Background Blobs */}
      <div
        className="absolute bottom-0 left-[-20%] right-0 top-[-10%] 
        h-[500px] w-[500px] rounded-full 
        bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-10"
      ></div>
      <div
        className="absolute bottom-0 right-[-20%] top-[-10%] 
        h-[500px] w-[500px] rounded-full 
        bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] -z-10"
      ></div>

      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-blue-400 drop-shadow-lg"
        >
          Hi, I'm <span className="text-white">Aanchal Vijay</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200"
        >
          Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
        >
          I love crafting responsive, interactive, and user-friendly web
          applications using React & Tailwind CSS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10"
        >
          <ButtonRotatingBackgroundGradient />
        </motion.div>
      </div>

      {/* Right Circular Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative group"
        >
          {/* Glowing Gradient Border */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
            blur opacity-70 group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>

          {/* Image Container (Perfect Circle) */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg 
            group-hover:shadow-[0_0_40px_10px_rgba(59,130,246,0.6)] transition">
            <img
              src={myImage}
              alt="Aanchal Vijay"
              className="object-cover w-full h-full rounded-full transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
