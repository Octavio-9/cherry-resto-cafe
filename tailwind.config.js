/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        cherry: "#B5103C",
        "cherry-deep": "#8A0B2D",
        noir: "#0E0A0A",
        champagne: "#E8D5A3",
        ivoire: "#FAF6EE",
        or: "#C4973B",
        cacao: "#3A3232",
        "gris-mid": "#8A7E7E",
        whatsapp: "#25D366",
        // Tokens Banani (maquette "Cherry Resto Cafe")
        background: "#FAF6EE",
        foreground: "#0E0A0A",
        border: "#E0D8CC",
        input: "#F0EBE0",
        primary: { DEFAULT: "#B5103C", foreground: "#ffffff" },
        secondary: { DEFAULT: "#E8D5A3", foreground: "#0E0A0A" },
        muted: { DEFAULT: "#3A3232", foreground: "#8A7E7E" },
        dark: { DEFAULT: "#0E0A0A", foreground: "#E8D5A3" },
        gold: "#C4973B"
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        headings: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em"
      },
      maxWidth: {
        site: "1200px"
      }
    }
  },
  plugins: []
};
