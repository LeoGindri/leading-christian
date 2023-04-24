module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "prettier",
  ],
  plugins: ["flowtype"],
  settings: {
    react: {
      version: "detect",
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
