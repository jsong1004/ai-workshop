import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const apiUrl = mode === 'production' 
      ? 'https://ai-workshop-landing-myresume-457817.a.run.app'
      : env.VITE_API_URL || 'http://localhost:3001';
    
    return {
      define: {
        'process.env.VITE_API_URL': JSON.stringify(apiUrl),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
