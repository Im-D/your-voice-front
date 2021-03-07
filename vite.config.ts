import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@atoms': path.resolve(__dirname, './src/atoms'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@store': path.resolve(__dirname, './src/store'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@api': path.resolve(__dirname, './src/api'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.scss";`
      }
    }
  }
});
