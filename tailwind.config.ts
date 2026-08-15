import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        "base-ink": "#050505",
        raised: "rgba(20, 20, 20, 0.4)",
        surface: "rgba(30, 30, 30, 0.6)",
        ink: "#FFFFFF",
        mute: "#C2BEB6",
        faint: "#949089",
        accent: "#FDFBF7",
        signal: "#FFB000",
        signal_glow: "#FF5E00",
        line: "rgba(255,255,255,0.12)",
        line2: "rgba(255,255,255,0.06)",
        glass: "rgba(255, 255, 255, 0.03)",
        glass_border: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        display: "-0.045em",
      },
      maxWidth: {
        page: "1180px",
        narrative: "920px",
      },
      transitionTimingFunction: {
        outExpo: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
