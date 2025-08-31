import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-300 py-6 px-6 md:px-20 w-full h-64 flex-shrink-0">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full 
        bg-[radial-gradient(circle,rgba(59,130,246,0.15),transparent)] 
        blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full 
        bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent)] 
        blur-3xl -z-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 h-full">
        {/* Left Side - Branding */}
        <h2 className="text-sm md:text-base text-white font-calligraphy">
          © {new Date().getFullYear()} Aanchal Vijay. All Rights Reserved.
        </h2>

        {/* Right Side - Social Links */}
        <div className="flex gap-6 text-lg">
          <a
            href="https://github.com/aanchalvj"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aanchal-vijay-513668265"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/7737249619"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:aanchalvj6@gmail.com"
            className="hover:text-pink-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
