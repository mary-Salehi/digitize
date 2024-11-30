module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily:{
                sans: ['iranyekan'],
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class',
        }),
    ],
    variants: {
        extend: {
            padding: ['last'],
        }
    },
    
}