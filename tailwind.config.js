/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1D4ED8',           // Vibrant royal blue
          'blue-dark': '#0F2B66',    // Deep navy blue
          'blue-deep': '#0A1128',    // Midnight dark blue
          'blue-light': '#3B82F6',   // Bright blue accent
          'blue-ice': '#EFF6FF',     // Ice blue light bg
          green: '#2563EB',
          gold: 'rgb(var(--color-brand-blue) / <alpha-value>)', // Alias to brand blue for compatibility
          dark: '#0A1128',
          light: '#F8FAFC',
          primary: '#0F172A',
          'primary-hover': '#1E293B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        oswald: ['"Outfit"', '"Plus Jakarta Sans"', 'Oswald', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}