import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          50:'#F9FAFB',
          500:'#6B7280',
          
          800:"#1F2A37",
          900:'#111928'
        },
        green:{
          100:'#DEF7EC',
          600:"#057A55",
          800:'#03543F',
        },
        
      }
    },
  },
  plugins: [],
};
export default config;
