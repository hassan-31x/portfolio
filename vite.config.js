import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  server: {
    port: 8000,
  },
  plugins: [react()],
  build: {
    assetsDir: "assets",
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
    outDir: "dist",
    sourcemap: true,
    target: 'es2015',
    assetsInclude: [
      "src/assets/**",
      "src/**/*.jpg",
      "src/**/*.jpeg",
      "src/**/*.png",
      "src/**/*.gif",
      "src/**/*.svg",
      "public/**/*.pdf"
    ]
  }
});
