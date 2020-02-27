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
