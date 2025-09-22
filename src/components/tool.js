import React from "react";
import { motion } from "framer-motion";

// Tools logos (put images in /public/images/tools)
const tools = [
  { name: "Excel", logo: "/images/excel.png" },
  { name: "Power BI", logo: "/images/bI.jpeg" },
  { name: "Visual Studio", logo: "/images/vs.png" },
  { name: "GitHub", logo: "/images/github.png" },
  { name: "Notion", logo: "/images/notion.png" },
  { name: "VS Code", logo: "/images/miro.jpg" },
  { name: "React", logo: "/images/react.png" },
];

export default function Tools() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-sky-500 mb-12">
        Tools I Use
      </h2>

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate list for seamless loop */}
          {[...tools, ...tools].map((tool, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-20 h-20 object-contain drop-shadow-lg hover:scale-110 transition-transform"
              />
              <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium text-sm">
                {tool.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
