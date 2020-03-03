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

const nextBabelLoader = 'next-babel-loader';

/**
 * @param {Object} webpackConfig - webpack config.
 * @param {Object} babelOptions
 * @param {string} [babelOptions.babelLoaderName=nextBabelLoader] - name of the loader that will be modified.
 * @param {Array.<(string|[string, Object])>} [babelOptions.presets]
 * @param {Array.<(string|[string, Object])>} [babelOptions.plugins]
 */
const injectBabelOptions = (webpackConfig, babelOptions) => {
  const { babelLoaderName = nextBabelLoader, plugins = [], presets = [] } = babelOptions;
  const rule = webpackConfig.module.rules.find(n => n && n.use && n.use.loader === babelLoaderName);

  if (!rule) {
    return console.error(`Couldn't find 'rule' with loader equals to '${nextBabelLoader}'`);
  }

  const { options = {} } = rule.use;

  options.plugins = options.plugins || [];
  options.presets = options.presets || [];

  options.plugins = options.plugins.concat(plugins);
  options.presets = options.presets.concat(presets);
};

/**
 * @param {function(nextConfig: Object)} fns - functions to compose.
 * @returns {Object} next config
 */
const compose = (...fns) => args => fns.reduceRight((acc, cur) => cur(acc), args);

/**
 * @param {Object} nextConfig
 * @param {Object} webpackConfig
 * @param {Object} webpackOptions
 * @returns {Object}
 */
const withWebpack = (nextConfig, webpackConfig, webpackOptions) => {
  if (typeof nextConfig.webpack === 'function')
    return nextConfig.webpack(webpackConfig, webpackOptions);
  return webpackConfig;
};

module.exports = {
  injectBabelOptions,
  withWebpack,
  compose,
};
