const withSass = require('@zeit/next-sass');

module.exports = (nextConfig = {}) => withSass({
  ...nextConfig,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config, options) => {
    if (nextConfig.sassLintOptions) {
      const SassLintPlugin = require('sass-lint-webpack');
      config.plugins.push(new SassLintPlugin(nextConfig.sassLintOptions));
    }

    config.module.rules.forEach(rule => {
      if (rule.test.toString().includes('.sass')) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === 'string') {
            return { loader: useRule };
          }

          if (useRule.loader.startsWith('css-loader')) {
            return {
              oneOf: [
                {
                  test: new RegExp('.module.sass$'),
                  loader: useRule.loader,
                  options: useRule.options
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

    if (nextConfig.webpack) nextConfig.webpack(config, options);

    return config;
  },
});
