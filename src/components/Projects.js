import React from "react";

const projects = [
  {
    title: "Kissan Digital Trade",
    desc: "UI/UX design of a mobile app that connects farmers directly with buyers. The design includes features such as an AI-powered crop quality checker, logistics tracking, regional pricing, and a multilingual chatbot.",
    img: "/images/project.jpg",
    link: "https://www.figma.com/design/dAnTT0sRWBjcJsliLuHFBa/Kissan-Smart-trade-App-Design-Prototype?node-id=0-1&t=63u8MbX7Hg8rLd1U-1"
  },
  {
    title: "Weather Detection App",
    desc: "UI/UX design of a responsive web application that provides real-time weather updates, forecasts, and alerts using live API data. The design emphasizes clarity and accessibility.",
    img: "/images/Weather.png",
    link: "https://www.figma.com/design/td72tTDA6VQ6ViwqftFUNo/Untitled?node-id=0-1&t=VJULpwVPjRfeWHaA-1"
  },
  {
    title: "Coffee Shop App",
    desc: "UI/UX design of a modern mobile-first coffee shop application with clean navigation, an easy ordering experience, and an attractive product showcase for an engaging user journey.",
    img: "/images/coffee shop.png",
    link: "https://www.figma.com/design/lGXAzXoShLOEhEb3s1CLaD/Coffee-Shop-Mobile-App-Design--Community-?node-id=0-1&t=KwdT246OSk8HsjuB-1"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400">
          My Amazing Works
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mt-2">
          These are UI/UX design projects I created in Figma, showcasing my design skills in mobile and web interfaces.
        </p>

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left side - text */}
              <div>
                <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-400">
                  {p.title}
                </h3>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                  {p.desc}
                </p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-800 text-white font-semibold text-lg hover:bg-blue-900 transition"
                >
                  View Project
                </a>
              </div>

              {/* Right side - big preview image */}
              <div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
