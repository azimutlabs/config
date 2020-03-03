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

const { injectBabelOptions, withWebpack } = require('./utils');

const babelPresetEmotion = '@emotion/babel-preset-css-prop';

/**
 * @param {Object} nextConfig
 * @param {Object} [nextConfig.babelPresetEmotionOptions]
 * @param {function(config: Object, options: Object)} [nextConfig.webpack]
 */
module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack: (config, options) => {
    const { babelPresetEmotionOptions = {} } = nextConfig;
    injectBabelOptions(config, {
      presets: [[babelPresetEmotion, babelPresetEmotionOptions]],
    });
    return withWebpack(nextConfig, config, options);
  },
});
