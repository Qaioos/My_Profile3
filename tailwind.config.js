/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // تفعيل الوضع الليلي القائم على الكلاس
  theme: {
    extend: {
      colors: {
        "surface": "#090A0F",
        "surface-dim": "#090A0F",
        "surface-container-lowest": "#06070B",
        "surface-container-low": "#10121A",
        "surface-container": "#181A24",
        "surface-container-high": "#222533",
        "surface-container-highest": "#2E3244",
        "primary": "#FF5500",
        "primary-container": "#FF5500",
        "on-primary-container": "#FFFFFF",
        "secondary": "#8B5CF6",
        "secondary-container": "#8B5CF6",
        "secondary-fixed": "#A855F7",
        "on-surface": "#E3E1E9",
        "on-surface-variant": "#9EA3B0",
        "outline": "#5C6173",
        "outline-variant": "rgba(255,255,255,0.08)"
      },
      fontFamily: {
        "display-hero": ["Space Grotesk", "sans-serif"],
        "headline-xl": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-mono-lg": ["Space Mono", "JetBrains Mono", "monospace"],
        "label-mono-sm": ["Space Mono", "JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
