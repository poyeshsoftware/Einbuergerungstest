import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Einbuergerungstest/',
    plugins: [
        vue(),
        {
            ...copy({
                targets: [
                    {src: 'src/assets/*', dest: 'dist/assets'},
                    {src: 'src/assets/images/*', dest: 'dist/assets/images'},
                    {src: 'src/assets/images/questions/*', dest: 'dist/assets/images/questions'},
                ]
            }),
            enforce: 'post' // This will make sure the files are copied after the build
        }
    ],
    resolve: {
        alias: {
            '@': '/src'
        }
    },
    build: {
        assetsDir: 'assets',
    }

})