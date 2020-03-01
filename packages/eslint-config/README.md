# @azimutlabs/eslint-config
Sharable ESLint configurations used in our projects.

We assume that you already have `eslint` package installed.

+ [`legacy`](legacy.js) - default lint rules with some plugin extensions.
  - required libs: `eslint-plugin-import`, `eslint-plugin-array-func`, `eslint-plugin-functional`, `eslint-plugin-simple-import-sort`
  - required libs for **javascript**: `babel-eslint`
  - required libs for **typescript**: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
  - download command: `npm i -D
    eslint-plugin-import eslint-plugin-functional eslint-plugin-fp eslint-plugin-simple-import-sort
    @typescript-eslint/parser @typescript-eslint/eslint-plugin`
+ [`prettier`](prettier.js) - prettier config for eslint.
  - required libs: `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`
  - download command: `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
+ [`jest`](jest.js) - jest specific rules.
  - required libs: `eslint-plugin-jest`
  - download command: `npm i -D eslint-plugin-jest`
+ [`react`](react.js) - react specific rules with extensions.
  - required libs: `eslint-plugin-react`, `eslint-plugin-react-hooks`
  - download command: `npm i -D eslint-plugin-react eslint-plugin-react-hooks`
+ [`a11y`](a11y.js) - jsx accessibility.
  - required libs: `eslint-plugin-jsx-a11y`
  - download command: `npm i -D eslint-plugin-jsx-a11y`

#### Recommended usage
Extending ALL configs via `package.json`:
```json
{
  "eslintConfig": {
    "extends": [
      "@azimutlabs"
    ]
  }
}
```
Extending configs separately:
```json
{
  "eslintConfig": {
    "extends": [
      "@azimutlabs/eslint-config/legacy",
      "@azimutlabs/eslint-config/prettier",
      "@azimutlabs/eslint-config/react"
    ]
  }
}
```

## [`LICENSE`](LICENSE)
