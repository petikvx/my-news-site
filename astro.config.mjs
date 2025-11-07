// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://petikvx.github.io',
  base: '/my-new-site/',
  integrations: [tailwind()],
  output: 'static',
});