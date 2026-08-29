/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F4F0E6',
        carbon: '#11110F',
        'neon-lime': '#C7FF2F',
        coral: '#FF5964',
        'electric-blue': '#4F63FF',
        'pure-white': '#FFFFFF',
        'card-bg': '#FFFFFF',
        'subtle-gray': '#E5DFC5',
        'muted-text': '#5A5A55',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px #11110F',
        'neo': '5px 5px 0px #11110F',
        'neo-lg': '7px 7px 0px #11110F',
        'neo-xl': '10px 10px 0px #11110F',
        'neo-hover': '8px 8px 0px #11110F',
        'neo-lime': '5px 5px 0px #C7FF2F',
        'neo-coral': '5px 5px 0px #FF5964',
        'neo-blue': '5px 5px 0px #4F63FF',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
