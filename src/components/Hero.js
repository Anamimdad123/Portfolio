import React from "react";
import { motion } from "framer-motion";

const roles = [
  "UI/UX Designer",
  "Software Engineer",
  "Frontend Developer",
  "Creative Thinker"
];

export default function Hero() {
  const [index, setIndex] = React.useState(0);

  // Cycle through roles dynamically
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // slower cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - TEXT */}
        <div>
          {/* Main Title */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Hi, I’m{" "}
            <span className="text-blue-800 drop-shadow-md">
              Anam Imdad
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="mt-6 text-2xl md:text-3xl font-semibold text-blue-800"
          >
            {roles[index]}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-lg bg-blue-800 hover:bg-blue-900 text-white rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-lg border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-transform hover:scale-105"
            >
              Contact
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-blue-800 text-lg">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anam-imdad-4ab463240"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              LinkedIn
            </a>
            <a
              href="mailto:imdadanam4@gmail.com"
              className="underline hover:text-blue-900"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-blue-800"
          >
            <img
              src="/images/coat.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
