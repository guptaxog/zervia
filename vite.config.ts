import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages: https://guptaxog.github.io/zervia/
  base: '/zervia/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
