import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#080808",
        // Alias for use as a *text* colour. `text-base` collides with Tailwind's
        // built-in font-size utility of the same name, which silently overrides
        // any font size set alongside it — use `text-base-ink` instead.
        "base-ink": "#080808",
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
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
