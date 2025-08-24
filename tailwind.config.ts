import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    500: "#3b82f6",
                    600: "#2563eb",
                },
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
    },
    plugins: [],
};

export default config;