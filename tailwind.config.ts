import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-purple':'#cdb4db',
        'custom-light-pink' : '#ffc8dd',
        'custom-pink' : '#ffafcc',
        'custom-light-blue' : '#bde0fe',
        'custom-blue' : '#a2d2ff',
        'custom-yellow' : '#FFF2D2',
        'text-primary' : '#231942',
        'text-secondary' : '#5e548e'
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
