/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        'light-primary': '#000000',
        'light-secondary': '#4b5563',
        'light-accent': '#f3f4f6',
        'light-muted': '#9ca3af',
        
        // Dark mode colors
        'dark-bg': '#121212',
        'dark-text': '#f3f4f6',
        'dark-primary': '#ffffff',
        'dark-secondary': '#d1d5db',
        'dark-accent': '#1f2937',
        'dark-muted': '#6b7280',
      },
    },
  },
  plugins: [],
};
