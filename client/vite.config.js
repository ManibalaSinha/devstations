// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'devstations';

export default defineConfig({
  plugins: [react()],
  base: '/devstations/', // for GitHub Pages subfolder
});
