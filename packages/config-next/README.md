# @azimutlabs/config-next
Next.js config extensions.

We assume that you already have `next` package installed.

+ [`withSass`](withSass.js) - adds `scss`, `scss-modules`, `sass-lint` (no `css`).
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

+ [`withEslint`](withEslint.js) - adds `eslint`.
  - usage:
    ```javascript
    // next.config.js
    module.exports = withEslint({ // nextOptions
      eslintOptions: {} // options for eslint-loader
    });
    ```
  - required libs: `eslint-loader`, `eslint-friendly-formatter` and `eslint` if you not already have it.
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
