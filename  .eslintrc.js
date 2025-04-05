module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier" // This integrates with your existing eslint-config-prettier
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: ["react", "import"],
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      // Add custom rules here
      "react/react-in-jsx-scope": "off", // Not needed for Vite + React 17+
      "react/prop-types": "off" // Optional: disable prop-types check
    }
};