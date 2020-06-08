# @azimutlabs/next-config
Next.js config extensions.

We assume that you already have `next` package installed.

#### Available extensions
+ [`withEslint`](src/config/withEslint.ts) - adds `eslint-loader`.
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

+ [`withLodash`](src/config/withLodash.ts) - optimizes `lodash` dist size using `lodash-webpack-plugin`.
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

## [`LICENSE`](LICENSE)
