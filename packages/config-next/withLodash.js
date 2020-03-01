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

const nextBabelLoader = 'next-babel-loader';
const babelPluginLodash = 'lodash';

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { babelPluginLodashOptions = {}, lodashWebpackPluginOptions } = nextConfig;

    config.plugins.push(new LodashModuleReplacementPlugin(lodashWebpackPluginOptions));

    const rule = config.module.rules.find(n => n && n.use && n.use.loader === nextBabelLoader);

    if (rule) {
      rule.use.options.plugins = rule.use.options.plugins || [];

      if (!rule.use.options.plugins.find(n => n === babelPluginLodash)) {
        rule.use.options.plugins.push([babelPluginLodash, babelPluginLodashOptions]);
      }
    } else {
      console.error(`Couldn't find 'rule' with loader equals to '${nextBabelLoader}'`);
    }

    if (typeof nextConfig.webpack === 'function') return nextConfig.webpack(config, options);
    return config;
  },
});
