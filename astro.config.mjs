import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bocilbo.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});