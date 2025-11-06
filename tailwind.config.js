/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Arabic Heritage Color Palette
        primary: {
          50: '#F5F2ED',
          100: '#E8E1D5',
          200: '#D4C7AE',
          300: '#C8A97E',
          400: '#C8A97E', // Accent Gold - Main brand color
          500: '#C8A97E',
          600: '#B8955F',
          700: '#9B7A47',
          800: '#8C6E4A', // Earthy Brown for headings
          900: '#6A5538',
        },
        secondary: {
          50: '#F0F4F0',
          100: '#DDE5DB',
          200: '#BDC9B8',
          300: '#9BAD94',
          400: '#6A7C55', // Olive Green for cards
          500: '#4A6B39',
          600: '#3A5A2A',
          700: '#2D4A20',
          800: '#243A1A',
          900: '#1D3016',
        },
        // Neutral Colors
        neutral: {
          50: '#F9F6F2', // Page background
          100: '#FFFFFF', // Card background
          200: '#F5F2EC',
          300: '#E5DED4', // Borders
          400: '#D1C8BC',
          500: '#B8ACA1',
          600: '#8C837C', // Secondary text
          700: '#6B5F54',
          800: '#2C261F', // Primary text
          900: '#1A1510',
        },
        // Semantic Colors
        success: '#5A8E6A',
        warning: '#E4A84A',
        error: '#C95D5D',
        info: '#4A90E2',
      },
      fontFamily: {
        // Arabic Heritage Typography
        heading: ['Cairo', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Almarai', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        english: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale based on Major Third (1.25)
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px', // Body text
        'xl': '20px',
        '2xl': '24px', // H3
        '3xl': '30px',
        '4xl': '32px', // H2
        '5xl': '40px',
        '6xl': '48px', // H1
      },
      spacing: {
        // 8px grid system
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      borderRadius: {
        'soft': '8px', // Cards and buttons
        'sharp': '4px', // Input fields
      },
      boxShadow: {
        'soft': '0px 4px 12px rgba(44, 38, 31, 0.08)',
        'medium': '0px 8px 24px rgba(44, 38, 31, 0.12)',
        'strong': '0px 12px 32px rgba(44, 38, 31, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
        'scale-in': 'scaleIn 250ms ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
      },
      // RTL Support
      typography: {
        DEFAULT: {
          css: {
            direction: 'rtl',
            textAlign: 'right',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  // RTL support
  experimental: {
    optimizeUniversalDefaults: true,
  },
};