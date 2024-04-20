import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/',
        assetsDir: 'assets/',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                router: '/src/router/index.js',
                store: '/src/stores/index.js'
            }
        }
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    base: '/Einbuergerungstest/'
})