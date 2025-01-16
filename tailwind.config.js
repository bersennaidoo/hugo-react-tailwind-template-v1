module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["lemonade", "dark"],
  },

  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/react/**/*.tsx"],
};
