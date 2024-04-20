import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/',
        assetsDir: 'assets/'
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    base: '/Einbuergerungstest/'
})