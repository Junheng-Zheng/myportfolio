const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1.5rem, 5vw, 3rem)", // Dynamic font size using clamp
      },
    },
  },
  plugins: [
    // If you need to use any Tailwind plugins, you can add them here, for example:
    // require('@tailwindcss/forms'),
  ],
};

export default config;
