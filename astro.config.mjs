import { defineConfig } from 'astro/config';

// Zoo Cabling Installation — Static output configuration
export default defineConfig({
  site: 'https://www.zoorepairs.com.au',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
});
