# @azimutlabs/config-next
Next.js config extensions.

We assume that you already have `next` package installed.

+ [`withEslint`](withEslint.js) - adds `eslint`.
  - usage:
    ```javascript
    // next.config.js
    module.exports = withEslint({ // nextOptions
      eslintOptions: {} // options for eslint-loader
    });
    ```
  - required libs: `eslint`, `eslint-loader`, `eslint-friendly-formatter`.
  - download command: `npm i -D eslint-loader eslint-friendly-formatter`

+ [`withEnv`](withEnv.js) - adds env variables using [`next/config`](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) runtime configurations.
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

+ [`withLodash`](withLodash.js) - optimizes `lodash` dist size using `babel-plugin-lodash` and `lodash-webpack-plugin`.
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

+ [`withStylelint`](withStylelint.js) - adds [`stylelint-webpack-plugin`](https://github.com/webpack-contrib/stylelint-webpack-plugin) for [`stylelint`](https://stylelint.io/).
  - usage:
    ```javascript
    // next.config.js
    module.exports = withStylelint({ // nextOptions
      stylelintWebpackPluginOptions: {}, // stylelint-webpack-plugin options.
    });
    ```
  - required libs: `stylelint`, `stylelint-webpack-plugin`.
  - download command: `npm i -D stylelint stylelint-webpack-plugin`

+ [`withEmotion`](withEmotion.js) - adds [`@emotion/babel-preset-css-prop`](https://github.com/emotion-js/emotion/tree/master/packages/babel-preset-css-prop) for [`@emotion/core`](https://emotion.sh/docs/introduction).
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

+ [`withSass`](withSass.js) - adds `scss`, `scss-modules`, `sass-lint` (no `css`).
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

## [`LICENSE`](LICENSE)
