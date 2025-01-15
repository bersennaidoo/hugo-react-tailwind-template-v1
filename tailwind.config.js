module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],

  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/react/**/*.tsx"],
};
