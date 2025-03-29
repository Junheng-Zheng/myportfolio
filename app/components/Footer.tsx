import React from "react";

export const Footer = () => {
  const navItems = [
    { name: "Home", active: true },
    { name: "Shop", active: false },
    { name: "Contact", active: false },
    { name: "Help", active: false },
  ];

  return (
    <footer className="flex flex-col items-center justify-center w-full bg-black text-white py-6">
      <div className="flex flex-col items-center text-center gap-3 w-full border-b border-gray-700 pb-5">
        <h3 className="text-lg font-semibold">Junheng Zheng</h3>
        <p className="text-sm text-gray-400">My Personal Portfolio</p>

        {/* Social Icons */}
        <div className="flex gap-3">
          {[
            {
              icon: "fa-linkedin-in",
              link: "https://linkedin.com/in/yourprofile",
            },
            { icon: "fa-github", link: "https://github.com/yourprofile" },
            { icon: "fa-solid fa-envelope", link: "mailto:your@email.com" },
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-600 transition duration-300"
            >
              <i className={`text-white text-[16px] fa-brands ${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center py-4">
        <p className="text-xs text-gray-500">
          © 2025 Junheng Zheng. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
