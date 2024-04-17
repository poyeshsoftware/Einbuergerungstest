/** @type {import('tailwindcss').Config} */
export default {
    purge: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './public/*.html',
        './src/**/*.js',
        './src/**/*.scss'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
            // },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}

