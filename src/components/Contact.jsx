import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 md:px-20 py-20"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent)] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.2),transparent)] -z-10 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-blue-400 mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 mb-12 text-center max-w-2xl"
      >
        Interested in working together? Feel free to drop a message!  
        You can also connect with me on my social platforms.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="w-full max-w-2xl bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full mt-6 p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="mt-6 w-full py-3 rounded-lg cursor-pointer bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Icons */}
      <div className="flex gap-6 mt-10">
        <a href="https://github.com/aanchalvj" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl hover:text-blue-400 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/aanchal-vijay-513668265"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
        </a>
        <a href="mailto:aanchalvj6@gmail.com">
          <FaEnvelope className="text-3xl hover:text-blue-400 transition" />
        </a>
        <a href="https://wa.me/7737249619" target="_blank" rel="noreferrer">
          <FaWhatsapp className="text-3xl hover:text-green-400 transition" />
        </a>
      </div>
    </section>
  );
}
