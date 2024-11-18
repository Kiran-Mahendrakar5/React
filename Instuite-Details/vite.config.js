// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/reads': {
        target: 'http://localhost:8089',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
