import React, { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-40 bg-white/60 backdrop-blur-sm dark:bg-black/60">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">Anam Imdad</div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>

          {/* Download CV Button */}
          <a
            href="/Anam-Imdad-CV.pdf"
            download="Anam-Imdad-CV.pdf"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Download CV
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded border"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="menu"
        >
          <svg width="24" height="24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 px-6 pb-4">
          <a className="block py-2" href="#home">Home</a>
          <a className="block py-2" href="#about">About</a>
          <a className="block py-2" href="#skills">Skills</a>
          <a className="block py-2" href="#projects">Projects</a>
          <a className="block py-2" href="#contact">Contact</a>

          {/* Mobile CV Button */}
          <a
            href="/Anam-Imdad-CV.pdf"
            download="Anam-Imdad-CV.pdf"
            className="block mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md text-center"
          >
            Download CV
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-2 px-3 py-1 border rounded w-full"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </header>
  );
}
