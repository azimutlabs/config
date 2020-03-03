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
 * @param {Object} config - webpack config.
 * @returns {function(plugin: [string, Object], babelLoader: string)}
 */
const injectBabelPlugin = config => (plugin, babelLoader = nextBabelLoader) => {
  const rule = config.module.rules.find(n => n && n.use && n.use.loader === babelLoader);

  if (rule) {
    rule.use.options.plugins = rule.use.options.plugins || [];
    const [pluginName] = plugin;

    if (!rule.use.options.plugins.find(n => n === pluginName)) {
      rule.use.options.plugins.push(plugin);
    }
  } else {
    console.error(`Couldn't find 'rule' with loader equals to '${nextBabelLoader}'`);
  }
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
  injectBabelPlugin,
  withWebpack,
  compose,
};
