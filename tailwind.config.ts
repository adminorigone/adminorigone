import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#080808",
        raised: "#111111",
        surface: "#161616",
        ink: "#F3F1EC",
        mute: "#8C8984",
        faint: "#5A5752",
        accent: "#E8E2D6",
        signal: "#C2A878",
        line: "rgba(243,241,236,0.10)",
        line2: "rgba(243,241,236,0.05)",
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
    },
  },
  plugins: [],
};
export default config;
