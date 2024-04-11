import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from "vite-plugin-stylex";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  resolve: {
    alias: [
      {
        find: '@views',
        replacement: path.resolve(__dirname, 'src/Presentations'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
})
