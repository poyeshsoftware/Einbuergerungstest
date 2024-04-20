import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'url'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist/',
        assetsDir: 'assets/'
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    base: '/Einbuergerungstest/'
})