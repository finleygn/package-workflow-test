module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  env: {
    jest: true,
    browser: true,
    node: true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ["src"]
      },
      typescript: {},
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'prettier/prettier': [
      'warn', {
        'printWidth': 100,
        'semi': true,
        'singleQuote': true,
        'trailingComma': 'es5',
        'bracketSpacing': true,
      }
    ]
  }
};