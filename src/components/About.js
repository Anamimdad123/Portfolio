import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  // helper for fade/slide animation
  const anim = () =>
    `transform transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`;

  // Carousel items
  const cards = [
    {
      title: "Education",
      content: [
        "Bachelors in Software Engineering",
        "UI/UX Design Certification (Udemy)",
        "Mobile Development (Android Studio, Flutter)",
      ],
    },
    {
      title: "Interests",
      content: [
        "UI/UX and Accessibility",
        "Frontend Development with React & Tailwind",
        
      ],
    },
    {
      title: "Experience",
      content: [
        "Internship at FFC IT Unit (Networking, Cloud, Web Dev)",
        "Freelance UI/UX Projects",
        "Collaborated on Mobile App Prototypes",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Dynamic Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent inline-block relative"
        >
          About Me
          <span className="block h-[3px] w-0 bg-blue-800 mx-auto mt-2 transition-all duration-700 group-hover:w-24"></span>
        </motion.h2>

        {/* Intro paragraph */}
        <p
          className={anim() + " mt-6 text-lg text-gray-700 dark:text-gray-300"}
          style={{ transitionDelay: "260ms" }}
        >
          I’m a software engineering graduate focusing on UI/UX and front-end
          development. I build user-centered web apps, design polished
          interfaces, and enjoy solving real-world problems.
        </p>

        {/* Carousel Section */}
        <div className="mt-10 overflow-hidden relative">
          <motion.div
            className="flex space-x-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -600, right: 0 }} // adjust for content size
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-semibold text-2xl text-blue-800 dark:text-blue-400">
                  {card.title}
                </h3>
                <ul className="mt-3 text-left list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {card.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom sentence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 text-gray-600 dark:text-gray-400 text-lg italic"
        >
          Passionate about turning ideas into interactive and beautiful web
          experiences.
        </motion.div>
      </div>
    </section>
  );
}
