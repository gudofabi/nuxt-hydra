/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-compact": ["SF Compact", "sans-serif"],
        "sf-pro": ["SF Pro", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#0C2D57",
        secondary: "#FC6736",
        "primary-2": "#1C4274",
      },
      boxShadow: {
        "3xl": "0 7px 11px 2px rgba(0, 0, 0, 0.2)",
        "4xl": "7px 12px 0px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
