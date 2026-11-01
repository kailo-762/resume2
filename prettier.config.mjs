import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    semi: true,
    trailingComma: "es5",
    singleQuote: false,
    arrowParens: "always",
    experimentalOperatorPosition: "start",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindConfig: path.join(__dirname, "tailwind.config.ts"),
    overrides: [
        {
            files: [".gitlab-ci*.yml", "**/docker-compose*.yml", "devspace.yaml"],
            options: {
                useTabs: false,
                tabWidth: 2,
                singleQuote: false,
            },
        },
    ],
};

export default config;
