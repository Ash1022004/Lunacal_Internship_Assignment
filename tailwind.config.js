module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#1f2326",
        panel: "#2b3135",
        soft: "#263036",
        accent: "#1b2024"
      },
      boxShadow: {
        neu: "12px 12px 24px rgba(0,0,0,0.7), -8px -8px 16px rgba(255,255,255,0.02), inset 0 -6px 12px rgba(0,0,0,0.4)",
        neuInset: "inset 6px 6px 12px rgba(0,0,0,0.6), inset -6px -6px 12px rgba(255,255,255,0.02)"
      },
      borderRadius: {
        xl2: "14px"
      }
    },
  },
  plugins: [],
};
