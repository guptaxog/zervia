import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for custom domain: https://zervia.co
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
