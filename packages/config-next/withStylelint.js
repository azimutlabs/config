/**
 * Copyright (c) 2019 Azimut Labs
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 */

const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const { withWebpack } = require('./utils');

const filesPattern = ['**/*.{ts,tsx,js,jsx}', '**/*.s?(a|c)ss'];

/**
 * @param {Object} nextConfig
 * @param {Object} [nextConfig.stylelintWebpackPluginOptions]
 * @param {function(config: Object, options: Object)} [nextConfig.webpack]
 * @returns {Object}
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { stylelintWebpackPluginOptions = {} } = nextConfig;
    const { files } = stylelintWebpackPluginOptions;
    const pluginOptions = {
      ...stylelintWebpackPluginOptions,
      files: files || filesPattern,
    };
    config.plugins.push(new StylelintWebpackPlugin(pluginOptions));
    return withWebpack(nextConfig, config, options);
  },
});
