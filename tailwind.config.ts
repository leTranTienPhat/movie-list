import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontSize: {
      h1: [
        "64px",
        {
          fontWeight: "600",
          lineHeight: "80px",
          letterSpacing: "0%",
        },
      ],
      h2: [
        "48px",
        {
          fontWeight: "600",
          lineHeight: "56px",
          letterSpacing: "0%",
        },
      ],
      h3: [
        "32px",
        {
          fontWeight: "600",
          lineHeight: "40px",
          letterSpacing: "0%",
        },
      ],
      h4: [
        "24px",
        {
          fontWeight: "700",
          lineHeight: "32px",
          letterSpacing: "0%",
        },
      ],
      h5: [
        "20px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0%",
        },
      ],
      h6: [
        "16px",
        {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0%",
        },
      ],
      large: [
        "20px",
        {
          lineHeight: "32px",
        },
      ],
      regular: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      small: [
        "14px",
        {
          lineHeight: "24px",
        },
      ],
      xsmall: [
        "12px",
        {
          lineHeight: "24px",
        },
      ],
      caption: [
        "14px",
        {
          lineHeight: "16px",
        },
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
