const withSass = require('@zeit/next-sass');

module.exports = (nextConfig = {}) =>
  withSass({
    ...nextConfig,
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
    },
    webpack: (config, options) => {
      config.module.rules.forEach(rule => {
        if (nextConfig.sassLintOptions) {
          const SassLintPlugin = require('sass-lint-webpack');
          config.plugins.push(new SassLintPlugin(nextConfig.sassLintOptions));
        }

        if (rule.test && rule.test.toString().includes('.scss')) {
          rule.rules = rule.use.map(useRule => {
            if (typeof useRule === 'string') {
              return { loader: useRule };
            }
            if (useRule.loader === 'css-loader') {
              return {
                oneOf: [
                  {
                    test: new RegExp('.module.scss$'),
                    loader: useRule.loader,
                    options: { modules: true },
                  },
                  {
                    loader: useRule.loader,
                    options: {},
                  },
                ],
              };
            }
            return useRule;
          });
          delete rule.use;
        }
      });

      if (typeof nextConfig.webpack === 'function') return nextConfig.webpack(config, options);
      return config;
    },
  });
