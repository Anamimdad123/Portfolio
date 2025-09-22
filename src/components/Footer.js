
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Anam Imdad. Built with React & Tailwind.
      </div>
    </footer>
  );
}
