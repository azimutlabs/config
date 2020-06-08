<h1>
  <img
    height="22.5"
    src="https://raw.githubusercontent.com/azimutlabs/logos/master/little_logo.png"
    alt="azimutlabs config logo"
  />
  /config
  <img
    src="https://img.shields.io/github/license/azimutlabs/config"
    alt="azimutlabs/config repository license"
  />
</h1>

> Our sharable configurations and code standards

## [`@azimutlabs/eslint-config`](packages/eslint-config) [![@azimutlabs/eslint-config package version](https://img.shields.io/npm/v/@azimutlabs/eslint-config)](https://www.npmjs.com/package/@azimutlabs/eslint-config)
<details>
  <summary>ESLint configurations used in our projects</summary>

  ---

  We assume that you already have `eslint` package installed.

  ```shell
  $ npm i -D @azimutlabs/eslint-config
  ```

  #### Available configurations
  + [`legacy`](packages/eslint-config/legacy.js) - default lint rules with some plugin extensions.
    - required libs: `babel-eslint eslint-plugin-import`, `eslint-plugin-array-func`, `eslint-plugin-functional`, `eslint-plugin-simple-import-sort`
    - required libs for **typescript**: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
    - download command: `npm i -D
      babel-eslint eslint-plugin-import eslint-plugin-array-func eslint-plugin-functional eslint-plugin-simple-import-sort
      @typescript-eslint/parser @typescript-eslint/eslint-plugin`
  + [`prettier`](packages/eslint-config/prettier.js) - prettier config for eslint.
    - required libs: `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`
    - download command: `npm i -D prettier eslint-config-prettier eslint-plugin-prettier`
  + [`jest`](packages/eslint-config/jest.js) - jest specific rules.
    - required libs: `eslint-plugin-jest`
    - download command: `npm i -D eslint-plugin-jest`
  + [`react`](packages/eslint-config/react.js) - react specific rules with extensions.
    - required libs: `eslint-plugin-react`, `eslint-plugin-react-hooks`
    - download command: `npm i -D eslint-plugin-react eslint-plugin-react-hooks`
  + [`a11y`](packages/eslint-config/a11y.js) - jsx accessibility.
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
</details>

## [`@azimutlabs/next-config`](packages/next-config) [![@azimutlabs/next-config package version](https://img.shields.io/npm/v/@azimutlabs/next-config)](https://www.npmjs.com/package/@azimutlabs/next-config)
<details>
  <summary>Next.js config extensions</summary>

  ---

  We assume that you already have `next` package installed.

  ```shell
  $ npm i -D @azimutlabs/next-config
  ```

  #### Available extensions
  + [`withEslint`](packages/next-config/src/config/withEslint.ts) - adds `eslint-loader`.
    - usage:
      ```javascript
      // next.config.js
      module.exports = withEslint({
        disableLintForProd: true, // disables linting process for production build phase
        eslintOptions: {},        // options for eslint-loader
      });
      ```
    - required libs: `eslint`, `eslint-loader`, `eslint-friendly-formatter`.
    - download command: `npm i -D eslint-loader eslint-friendly-formatter`

  + [`withLodash`](packages/next-config/src/config/withLodash.ts) - optimizes `lodash` dist size using `lodash-webpack-plugin`.
    - usage:
      ```javascript
      // next.config.js
      module.exports = withLodash({
        lodashWebpackPluginOptions: {}, // lodash-webpack-plugin options.
      });
      ```
    - required libs: `lodash-webpack-plugin`.
    - download command: `npm i -D lodash-webpack-plugin`

  #### Recommended usage
  Combine by `compose` functions:
  ```javascript
  module.exports = compose(
    withEslint,
    withLodash,
  )({
    poweredByHeader: false, // pass here all your next config options
    eslintOptions: {},      // as well as extensions specific options
  });
  ```
</details>

## [`LICENSE`](LICENSE)
