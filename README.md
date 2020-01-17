# [`@azimutlabs/config`](https://www.npmjs.com/package/@azimutlabs/config)
Config files and our code standards.

## [`gitignore`](.gitignore)

## [`editorconfig`](.editorconfig)

## [`eslint`](eslint) **extendable**

We assume that you already have `eslint` package installed.

+ [`legacy`](eslint/legacy.json) - default lint rules with some plugin extensions.
  - required libs: `eslint-plugin-import`
  - required libs for `typescript`: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
  - download command: `npm i -D eslint-plugin-import @typescript-eslint/parser @typescript-eslint/eslint-plugin`
+ [`prettier`](eslint/prettier.json) - prettier config for eslint.
  - required libs: `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`
  - download command: `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
+ [`jest`](eslint/jest.json) - jest specific rules.
  - required libs: `eslint-plugin-jest`
  - download command: `npm i -D eslint-plugin-jest`
+ [`react`](eslint/react.json) - react specific rules with extensions.
  - required libs: `eslint-plugin-react`, `eslint-plugin-react-hooks`
  - download command: `npm i -D eslint-plugin-react eslint-plugin-react-hooks`

#### Recommended usage
Extend via `package.eslintConfig`:
```json
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@azimutlabs/config/eslint/legacy",
      "@azimutlabs/config/eslint/react",
      "@azimutlabs/config/eslint/jest"
    ]
  }
}
```

## [`next.js`](next)

We assume that you already have `next` package installed.

+ [`withSass`](next/withSass.js) - adds `scss`, `scss-modules`, `sass-lint` (no `css`).
  - usage:
    ```javascript
    // next.config.js
    module.exports = withSass({ // nextOptions
      sassLintOptions: {} // options for sass-lint-webpack plugin
    });
    ```
  - to enable `sass-lint` - add `sassLintOptions` field into `nextOptions` as shown in `usage` section.
  - required libs: `@zeit/next-sass`, with sass-lint: `sass-lint`, `sass-lint-webpack`
  - download command: `npm i -D @zeit/next-sass`

## [`LICENSE`](LICENSE)
