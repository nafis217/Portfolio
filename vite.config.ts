import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Support both username.github.io (base: '/') and username.github.io/repo-name/ (base: '/repo-name/')
  // Defaulting to './' ensures relative asset paths work anywhere out-of-the-box.
  base: process.env.VITE_BASE_PATH || './',
});
