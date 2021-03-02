module.exports = {
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
        options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                cornFlowerBlue: "#5582EF",
                easternBlue: "#1984B8",
                ribbonBlue: "#2464FC",
                carnationRed: "#F64F71",
                webOrange: "#FFA700",
                success: "#5cb85c",
                warning: "#f0ad4e",
                danger: "#d9534f",
                info: "#5bc0de",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
