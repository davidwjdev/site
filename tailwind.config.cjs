/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: "320px",
            md: "768px",
            lg: "1024px"
        },
        colors: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
            "zinc-900": "#18181b"
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
            mono: ["ui-monospace", "SFMono-Regular", "sans-serif"]
        },
        spacing: {
            "1": "8px",
            "2": "12px",
            "3": "16px",
            "4": "24px",
            "5": "32px",
            "6": "48px"
        }
    },
    plugins: []
};
