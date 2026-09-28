import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        admin: resolve(__dirname, 'admin/index.html'),
        xrShowcase: resolve(__dirname, 'xr-showcase.html'),
        convert: resolve(__dirname, 'convert.html')
      }
    }
  }
});
