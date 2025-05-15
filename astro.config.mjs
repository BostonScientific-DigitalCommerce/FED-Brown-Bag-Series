// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  outDir: 'docs',
  site: 'https://bostonscientific-digitalcommerce.github.io/FED-Brown-Bag-Series',
  base: '/',
  integrations: [react()],
});
