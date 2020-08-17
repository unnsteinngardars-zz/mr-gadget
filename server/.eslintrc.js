module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  plugins: [
    'security',
  ],
  extends: [
    'airbnb-base',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
  },
};
