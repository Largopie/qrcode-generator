import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      base: '/qrcode-generator/',
      plugins: [react()],
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
