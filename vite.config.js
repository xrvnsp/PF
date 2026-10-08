import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin/index.html'),
        xrShowcase: resolve(__dirname, 'xr-showcase.html'),
        convert: resolve(__dirname, 'convert.html'),
        lanyardPreview: resolve(__dirname, 'lanyard-preview.html')
      }
    }
  }
});
