import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      base: '/qrcode-generator/',
      plugins: [react(), svgr()],
    };
  } else {
    return {
      plugins: [react(), svgr()],
    };
  }
});
