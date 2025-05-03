import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fauna-stackblitz-site/',  // 👈 ADD THIS LINE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
