const path = require('path');
const formatter = require('eslint-friendly-formatter');

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { eslintOptions = {} } = config;

    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      loader: 'eslint-loader',
      exclude: /(node_modules|\.next)/,
      include: path.resolve(__dirname, './'),
      options: {
        formatter,
        cache: true,
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true,
        ...eslintOptions,
      },
    });

    if (typeof nextConfig.webpack === 'function') return nextConfig.webpack(config, options);
    return config;
  },
});
