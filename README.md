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
    - required libs: `eslint-plugin-import`, `eslint-plugin-array-func`, `eslint-plugin-functional`, `eslint-plugin-simple-import-sort`
    - required libs for **javascript**: `babel-eslint`
    - required libs for **typescript**: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
    - download command: `npm i -D
      eslint-plugin-import eslint-plugin-array-func eslint-plugin-functional eslint-plugin-simple-import-sort
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

## [`@azimutlabs/config-next`](packages/config-next) [![@azimutlabs/config-next package version](https://img.shields.io/npm/v/@azimutlabs/config-next)](https://www.npmjs.com/package/@azimutlabs/config-next)
<details>
  <summary>Next.js config extensions</summary>

  ---

  We assume that you already have `next` package installed.

  ```shell
  $ npm i -D @azimutlabs/config-next
  ```

  #### Available extensions
  + [`withEslint`](packages/config-next/withEslint.js) - adds `eslint`.
    - usage:
      ```javascript
      // next.config.js
      module.exports = withEslint({ // nextOptions
        eslintOptions: {} // options for eslint-loader
      });
      ```
    - required libs: `eslint`, `eslint-loader`, `eslint-friendly-formatter`.
    - download command: `npm i -D eslint-loader eslint-friendly-formatter`

  + [`withEnv`](packages/config-next/withEnv.js) - adds env variables using [`next/config`](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) runtime configurations.
    - usage:
      ```javascript
      // next.config.js
      module.exports = withEnv({ // nextOptions
        serverRuntimeConfig: {}, // optional variables for server config.
        publicRuntimeConfig: {}, // optional variables for both server and public config.
      });

      // .env
      // NEXT_PUBLIC_TEST=somevalue

      // pages/index.js
      import getConfig from 'next/config';
      const { NEXT_PUBLIC_TEST } = getConfig().publicRuntimeConfig;
      ```
    - to override env var prefixes you need to define variables:
      ```dotenv
      # .env
      # Prefix for serverRuntimeConfig
      SERVER_PREFIX=_
      # Prefix for publicRuntimeConfig
      PUBLIC_PREFIX=CLIENT_

      _PORT=3000

      CLIENT_API=api.github.com
      ```
    - recommended libs: [`dotenv-load`](https://www.npmjs.com/package/dotenv-load)

  + [`withLodash`](packages/config-next/withLodash.js) - optimizes `lodash` dist size using `babel-plugin-lodash` and `lodash-webpack-plugin`.
    - usage:
      ```javascript
      // next.config.js
      module.exports = withLodash({ // nextOptions
        babelPluginLodashOptions: {}, // babel-plugin-lodash options.
        lodashWebpackPluginOptions: {}, // lodash-webpack-plugin options.
      });
      ```
    - required libs: `babel-plugin-lodash`, `lodash-webpack-plugin`.
    - download command: `npm i -D babel-plugin-lodash lodash-webpack-plugin`

  + [`withStylelint`](packages/config-next/withStylelint.js) - adds [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) for [`stylelint`](https://stylelint.io/).
    - usage:
      ```javascript
      // next.config.js
      module.exports = withStylelint({ // nextOptions
        stylelintWebpackPluginOptions: {}, // stylelint-webpack-plugin options.
      });
      ```
    - required libs: `stylelint`, `stylelint-webpack-plugin`.
    - download command: `npm i -D stylelint stylelint-webpack-plugin`

  + [`withEmotion`](packages/config-next/withEmotion.js) - adds [`@emotion/babel-preset-css-prop`](https://github.com/emotion-js/emotion/tree/master/packages/babel-preset-css-prop) for [`@emotion/core`](https://emotion.sh/docs/introduction).
    - ⚠️ NOTE: for some reason, `next.js` does not use `presets` that was injected into
      `next-babel-loader`'s options without creating `.babelrc` file.
      To make your project stay clean, you can configure your `babel` in `package.json`:
      ```json
      {
        "babel": {
          "presets": ["next/babel"]
        }
      }
      ```
    - usage:
      ```javascript
      // next.config.js
      module.exports = withEmotion({ // nextOptions
        babelPresetEmotionOptions: {}, // @emotion/babel-preset-css-prop options.
      });
      ```
    - required libs: `@emotion/core`, `@emotion/babel-preset-css-prop`.
    - download command: `npm i -D @emotion/core @emotion/babel-preset-css-prop`

  + [`withSass`](packages/config-next/withSass.js) - adds `scss`, `scss-modules`, `sass-lint` (no `css`).
    - ❗️DEPRECATED❗ - we are planning to move into **CSS-in-JS** practise, so for now
      this extension is no longer maintained.️
    - usage:
      ```javascript
      // next.config.js
      module.exports = withSass({ // nextOptions
        sassLintOptions: {} // options for sass-lint-webpack plugin
      });
      ```
    - to enable `sass-lint` - add `sassLintOptions` field into `nextOptions` as shown in `usage` section.
    - required libs: `@zeit/next-sass`
    - required libs for sass-lint: `sass-lint`, `sass-lint-webpack`
    - download command: `npm i -D @zeit/next-sass`

  #### Recommended usage
  Combine by composing functions:
  ```javascript
  module.exports = compose(
    withEslint,
    withSass,
    withEnv,
  )({ // next config
    eslintConfig: {},
    sassLintConfig: {},
  });
  ```
</details>

## [`LICENSE`](LICENSE)
