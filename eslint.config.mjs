import eslintConfigPrettier from "eslint-config-prettier/flat";
import nextVitals from "eslint-config-next/core-web-vitals";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
    ...nextVitals,
    {
        ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
    },
    eslintConfigPrettier,
];

export default eslintConfig;
