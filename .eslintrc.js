const ERROR = 'error'
const OFF = 'off'

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'storybook'],
  rules: {
    indent: [ERROR, 2],
    'linebreak-style': [ERROR, 'unix'],
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'never'],
    'react/prop-types': OFF,
  },
  settings: {
    react: {
      version: 'detect',
      pragma: 'React',
      fragment: 'Fragment',
      createClass: 'createReactClass',
    },
  },
}
