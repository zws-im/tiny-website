module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  extends: ["@dice-discord", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
    node: false,
    es6: false
  },
  parser: "@typescript-eslint/parser"
};
