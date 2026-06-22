/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        nav: "880px",
      },
      colors: {
        bg: "#1A1A18",
        panel: "#141413",
        hair: "#242420",
        heading: "#ECEAE3",
        body: "#B9B7AE",
        bodysoft: "#B5B3AA",
        biotext: "#A8A69D",
        muted: "#85837A",
        comment: "#5a5851",
        faint: "#46453f",
        line: "#4a4a43",
        tag: "#9a988f",
        value: "#E2E0D8",
        accent: "#A7C080",
        synblue: "#7E9CD8",
        syncoral: "#D08C70",
      },
      fontFamily: {
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
