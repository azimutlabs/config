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

'use strict';

const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { injectBabelPlugin, withWebpack } = require('./utils');

const babelPluginLodash = 'lodash';

/**
 * Optimizes `lodash` dist size using `babel-plugin-lodash` and `lodash-webpack-plugin`.
 * @param {Object} nextConfig
 * @param {Object} [nextConfig.babelPluginLodashOptions]
 * @param {Object} [nextConfig.lodashWebpackPluginOptions]
 * @param {function(config: Object, options: Object)} [nextConfig.webpack]
 * @returns {Object}
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { babelPluginLodashOptions = {}, lodashWebpackPluginOptions } = nextConfig;
    config.plugins.push(new LodashModuleReplacementPlugin(lodashWebpackPluginOptions));
    injectBabelPlugin(config)([babelPluginLodash, babelPluginLodashOptions]);
    return withWebpack(nextConfig, config, options);
  },
});
