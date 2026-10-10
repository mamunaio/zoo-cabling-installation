import { defineConfig } from 'astro/config';

// Zoo Cabling Installation — Static output configuration
export default defineConfig({
  site: 'https://cabling.zoorepairs.com.au',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
