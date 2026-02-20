/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        secondary: '#2F2F2F',
        accent: '#2563eb',
        background: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'elevation': '0 4px 6px -1px rgb(10 37 64 / 0.06), 0 2px 4px -2px rgb(10 37 64 / 0.04)',
        'elevation-lg': '0 10px 15px -3px rgb(10 37 64 / 0.08), 0 4px 6px -4px rgb(10 37 64 / 0.04)',
        'elevation-xl': '0 20px 25px -5px rgb(10 37 64 / 0.08), 0 8px 10px -6px rgb(10 37 64 / 0.04)',
        'elevation-2xl': '0 25px 50px -12px rgb(10 37 64 / 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
