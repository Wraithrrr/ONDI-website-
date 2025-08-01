/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // NITDA/ONDI Professional Green Theme
        nitda: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-green-blue': 'linear-gradient(135deg, #059669 0%, #16a34a 20%, #0d9488 50%, #0f766e 70%, #155e75 100%)',
        'gradient-green-blue-dark': 'linear-gradient(135deg, #047857 0%, #15803d 20%, #0f766e 50%, #134e4a 70%, #164e63 100%)',
        'gradient-professional': 'linear-gradient(135deg, #16a34a 0%, #0d9488 30%, #0891b2 60%, #0369a1 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #22c55e 0%, #10b981 25%, #06b6d4 50%, #0284c7 75%, #0369a1 100%)',
      },
    },
  },
  plugins: [],
}
