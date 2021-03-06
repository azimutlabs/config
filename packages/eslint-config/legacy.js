module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
  },
  extends: ['eslint:recommended', 'plugin:array-func/all', 'plugin:functional/lite'],
  plugins: ['import', 'array-func', 'functional', 'simple-import-sort'],
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'spaced-comment': 'off',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
      },
    },
  ],
  rules: {
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'simple-import-sort/sort': 'error',
    'functional/no-return-void': 'off',
    'functional/immutable-data': [
      'error',
      {
        ignoreAccessorPattern: ['module.exports', '*.defaultProps', '*.getInitialProps'],
      },
    ],
    'functional/functional-parameters': [
      'error',
      {
        enforceParameterCount: false,
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': 'error',
    'spaced-comment': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'newline-per-chained-call': 'error',
    'no-param-reassign': 'error',
    'no-var': 'error',
    'no-new': 'error',
    'no-useless-constructor': 'error',
    'no-const-assign': 'error',
    'no-delete-var': 'error',
    'prefer-const': 'error',
    'no-constant-condition': 'error',
    'no-multi-spaces': 'error',
    'no-irregular-whitespace': 'error',
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'array-callback-return': 'warn',
    'default-case': [
      'warn',
      {
        commentPattern: '^no default$',
      },
    ],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['error', 'smart'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-control-regex': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': [
      'warn',
      {
        allowLoop: true,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': [
      'warn',
      {
        builtinGlobals: false,
      },
    ],
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-unreachable': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-labels': 'warn',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-with': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
      },
      {
        object: 'System',
        property: 'import',
      },
    ],
  },
};
