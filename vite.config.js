import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
        transformAssetUrls: {
          base: '/gb-js-vue-attestation',
          includeAbsolute: true,
        },
      },
    }),
  ],
  define: { "process.env": {} },
  base: '/gb-js-vue-attestation/', // Добавьте нужный префикс для абсолютных путей
})
