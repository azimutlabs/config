# [`@azimutlabs/config`](https://www.npmjs.com/package/@azimutlabs/config)
Config files and our code standards.
```shell
$ npm i -D @azimutlabs/config
```

## [`gitignore`](.gitignore)

## [`editorconfig`](.editorconfig)

## [`eslint`](eslint) **extendable**

We assume that you already have `eslint` package installed.

+ [`legacy`](eslint/legacy.json) - default lint rules with some plugin extensions.
  - required libs: `eslint-plugin-import`
  - required libs for **javascript**: `babel-eslint`
  - required libs for **typescript**: `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`
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
+ [`a11y`](eslint/a11y.json) - jsx accessibility.
  - required libs: `eslint-plugin-jsx-a11y`
  - download command: `npm i -D eslint-plugin-jsx-a11y`

#### Recommended usage
Extend via `package.json`:
```json
{
  "eslintConfig": {
    "extends": [
      "./node_modules/@azimutlabs/config/eslint/legacy",
      "./node_modules/@azimutlabs/config/eslint/react",
      "./node_modules/@azimutlabs/config/eslint/jest"
    ]
  }
}
```

## [`next.js`](next) **extendable**

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
  - required libs: `@zeit/next-sass`
  - required libs for sass-lint: `sass-lint`, `sass-lint-webpack`
  - download command: `npm i -D @zeit/next-sass`

+ [`withEslint`](next/withEslint.js) - adds `eslint`.
  - usage:
    ```javascript
    // next.config.js
    module.exports = withEslint({ // nextOptions
      eslintOptions: {} // options for eslint-loader
    });
    ```
  - required libs: `eslint-loader`, `eslint-friendly-formatter` and `eslint` if you not already have it.
  - download command: `npm i -D eslint-loader eslint-friendly-formatter`

+ [`withEnv`](next/withEnv.js) - adds env variables using [`next/config`](https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration) runtime configurations.
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
module.exports = withSass(withEslint({
  // nextConfig
  // withSassOptions
  // withEslintOptions
}));
```

## [`LICENSE`](LICENSE)
