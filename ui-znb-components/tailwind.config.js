/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['roboto'],
      },
      colors: {
        'primary': '#0934f8',
        'primary-on': '#fff',
        'primary-tint': '#072ac8',
        'primary-shade': '#0824aa',
        'primary-container': '#cfe0ff',
        'secondary': '#8b5cf6',
        'secondary-on': '#fff',
        'secondary-tint': '#713aed',
        'secondary-shade': '#5e28d9',
        'secondary-container': '#e2d6fe',
        'success': '#27c041',
        'success-on': '#fff',
        'success-tint': '#1a9f31',
        'success-shade': '#187d2a',
        'success-container': '#bdf5c6',
        'warning': '#ffc300',
        'warning-on': '#fff',
        'warning-tint': '#ffe21b',
        'warning-shade': '#e29700',
        'warning-container': '#ffffea',
        'danger': '#db0026',
        'danger-on': '#fff',
        'danger-tint': '#C00021',
        'danger-shade': '#940820',
        'danger-container': '#ffeff2',
        'info': '#38bdf8',
        'info-on': '#fff',
        'info-tint': '#0ea6e9',
        'info-shade': '#028ac7',
        'info-container': '#e0f5fe',
        'surface': '#fff',
        'surface-bright': '#f8fafc',
        'surface-container': '#e2e8f0',
        'surface-variant': '#0f172a',
        'surface-variant-bright': '#475569',
        'surface-variant-container': '#020617',
      },
    },
  },
  plugins: [],
};


