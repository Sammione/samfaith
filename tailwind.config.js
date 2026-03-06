/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#fcfaf7',
                'bg-secondary': '#f3f0ec',
                'text-primary': '#2c2926',
                'text-secondary': '#6b635d',
                'accent-soft': '#d4c0b5',
                'accent-muted': '#8e7d73',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
