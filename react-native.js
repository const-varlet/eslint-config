module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: "off",
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/interface-name-prefix": ["warn", { prefixWithI: "always" }]
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": { typescript: {} }
  }
};
