// https://vitejs.dev/config/
import react from '@vitejs/plugin-react'; // Import the react plugin
import { defineConfig } from 'vite'; // Import defineConfig

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change this to 'build'
  },
});
