// tailwind.config.js
export default {
  content: [
    './index.html', // Asegúrate de incluir el archivo HTML que sirve Vite
    './src/**/*.{js,ts,jsx,tsx}', // Aquí se indican las rutas donde usarás las clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
