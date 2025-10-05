/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pr500: '#6099f7',
          pr600: '#387ff5',
        },
        neutral: {
          n0: '#ffffff',
          n200: '#eceef4',
          n300: '#d2d5e2',
          n400: '#b6bccd',
          n700: '#626981',
          n800: '#4b5162',
          n1000: '#1c1f25',
        },
        primaryalpha: {
          pra10: 'rgba(56,127,245,0.1)',
        }
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'stack-xs': '4px',
        'stack-sm': '8px',
        'stack-md': '12px',
        'stack-lg': '16px',
        'stack-xl': '20px',
        'stack-2xl': '24px',
        'stack-3xl': '32px',
        'section-spacing-md': '48px',
        'section-spacing-lg': '60px',
        'section-spacing-xl': '80px',
        'section-spacing-2xl': '112px',
        'section-spacing-3xl': '128px',
        'inset-sm': '8px',
        'inset-xl': '20px',
        'inset-3xl': '32px',
        'inset-4xl': '40px',
        'inline-xs': '4px',
        'inline-xl': '20px',
        'inline-2xl': '24px',
      },
      borderRadius: {
        'sm': '4px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      }
    },
  },
  plugins: [],
}
