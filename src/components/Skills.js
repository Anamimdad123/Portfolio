import React, { useEffect, useState, useRef } from "react";

const skills = [
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 80 },
  { name: "UI/UX (Figma)", level: 78 },
  { name: "Android (basic)", level: 60 },
];

export default function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Animate skill bars only when visible
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setAnimatedLevels((prev) =>
        prev.map((val, i) =>
          val < skills[i].level ? val + 1 : skills[i].level
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Skills */}
        <div>
          <h2 className="text-4xl font-bold text-sky-500 mb-8 text-center">
            My Skills
          </h2>
          <div className="space-y-6">
            {skills.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {s.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {animatedLevels[i]}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${animatedLevels[i]}%` }}
                    className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="flex justify-center">
          <img
            src="/images/new.png"
            alt="My Profile"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-sky-400 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
