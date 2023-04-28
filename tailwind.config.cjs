/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            primary: '#50FFAF',
            methods: '#F8FF1D',
            items: '#9C7BFF',
            blank: '#FFFFFF'
        },
        extend: {
            dropShadow: {
                '3xl': '3px 4px 0px rgba(0, 0, 0, 0.25)'
            }
        }
    },
    plugins: [],
}
