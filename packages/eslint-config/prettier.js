module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/standard',
    'prettier/unicorn',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['prettier/@typescript-eslint'],
    },
    {
      files: ['**/*.tsx'],
      extends: ['prettier/react'],
    },
    {
      files: ['**/*.vue'],
      extends: ['prettier/vue'],
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
        endOfLine: 'lf',
      },
    ],
  },
};
