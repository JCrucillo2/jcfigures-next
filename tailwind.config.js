module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                300: "18.75rem",
            },
            height: {
                300: "18.75rem",
            },
        },
        fontFamily: {
            headingAlternate: ['"Alfa Slab One"'],
        },
    },
    plugins: [],
};
