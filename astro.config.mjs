// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://kazakhstanda.github.io',
    base: '/qazaqtaxcheatsheet',
    trailingSlash: 'always',
    vite: {
        cacheDir: './.vite-cache',
    },
});
