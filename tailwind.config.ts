// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        dynamic: "clamp(1.5rem, 5vw, 3rem)", // Dynamic font size using clamp
      },
    },
  },
  plugins: [],
};
