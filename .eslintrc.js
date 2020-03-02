module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    parser: "babel-eslint"
  },
  parser: "babel-eslint",
  env: {
    browser: true
  },
  plugins: ["html", "react"],
  extends: ["prettier", "react-app"],
  rules: {}
};
