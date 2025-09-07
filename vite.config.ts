import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'your-repo-name' to your actual GitHub repository name
  // For example, if your repo URL is https://github.com/user/my-app,
  // set base to '/my-app/'
  base: '/your-repo-name/',
})
